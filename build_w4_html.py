import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w4_app.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

# Extract json array for slidesData
start_pos = js_text.find('const slidesData = [') + len('const slidesData = ')
open_brackets = 0
end_pos = -1
for i in range(start_pos, len(js_text)):
    if js_text[i] == '[':
        open_brackets += 1
    elif js_text[i] == ']':
        open_brackets -= 1
        if open_brackets == 0:
            end_pos = i + 1
            break

if end_pos != -1:
    slides_json = js_text[start_pos:end_pos]
    slides = json.loads(slides_json)
    print("Parsed", len(slides), "Week 4 slides successfully!")
else:
    print("Failed to find end of slidesData array")
    exit(1)

# Generate HTML grid cards
grid_cards_html = ""
for s in slides:
    clean_preview = re.sub(r'<[^>]*>?', '', s['content']['zh'])[:90]
    grid_cards_html += f"""
    <div class="mini-slide-card" onclick="goToSlide({s['id'] - 1})">
      <div class="mini-slide-num">SLIDE {s['id']:02d} • Hour {s['hour']} ({s['tag']['zh']})</div>
      <div class="mini-slide-title">{s['title']['zh']}</div>
      <div class="mini-slide-preview">{clean_preview}...</div>
    </div>"""

html_template = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>115管理探索二 | 第四週：股市入門與企業價值估算</title>
  <meta name="description" content="115學年度管理探索二第四週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第四週 股市入門與企業價值估算</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 零股股權試算</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 珍奶店本益比PK</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 估值大挑戰</button>
      <button class="btn btn-primary" onclick="openHomeworkModal()">📝 本週課堂作業</button>
    </div>
  </nav>

  <!-- Interactive Annotation & Presentation Toolbar -->
  <div class="toolbar-container">
    <button class="tool-btn" onclick="toggleFullscreen()">🖥️ 全螢幕 (Fullscreen)</button>
    <div style="height:16px; width:1px; background:var(--border-light);"></div>
    <button id="toolPen" class="tool-btn" onclick="setTool('pen')">🖊️ 手繪書寫 (Pen)</button>
    <button id="toolHighlighter" class="tool-btn" onclick="setTool('highlighter')">🖍️ 螢光筆 (Highlighter)</button>
    <button class="tool-btn" onclick="setTool('off')">🛑 瀏覽模式 (Mouse)</button>
    <div style="height:16px; width:1px; background:var(--border-light);"></div>
    <span style="font-size:0.8rem; color:var(--text-sub);">筆觸顏色:</span>
    <div class="color-dot active" style="background:#F43F5E;" onclick="setPenColor('#F43F5E', this)"></div>
    <div class="color-dot" style="background:#F59E0B;" onclick="setPenColor('#F59E0B', this)"></div>
    <div class="color-dot" style="background:#10B981;" onclick="setPenColor('#10B981', this)"></div>
    <div class="color-dot" style="background:#38BDF8;" onclick="setPenColor('#38BDF8', this)"></div>
    <div class="color-dot" style="background:#FFFFFF;" onclick="setPenColor('#FFFFFF', this)"></div>
    <div style="height:16px; width:1px; background:var(--border-light);"></div>
    <button class="tool-btn" onclick="clearCanvas()">🧹 清除畫布 (Clear)</button>
  </div>

  <!-- Controls Bar -->
  <div class="controls-bar">
    <div class="search-box">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input type="text" id="searchInput" placeholder="搜尋第四週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
    </div>
    
    <div class="filter-tabs">
      <button class="tab-btn active" onclick="filterHour('all', this)">全部 30 頁教學卡片 (All 30)</button>
      <button class="tab-btn" onclick="filterHour(1, this)">第一小時 (Slide 01-10)</button>
      <button class="tab-btn" onclick="filterHour(2, this)">第二小時 (Slide 11-20)</button>
      <button class="tab-btn" onclick="filterHour(3, this)">第三小時 (Slide 21-30)</button>
    </div>
  </div>

  <!-- Main Container -->
  <main class="main-container">
    
    <!-- Presentation View with Overlay Canvas -->
    <section class="presentation-section">
      <canvas id="annotationCanvas"></canvas>
      <div id="slideContainer">
        <!-- Rendered dynamically by w4_app.js -->
      </div>

      <div class="slide-controls">
        <button class="btn btn-outline" onclick="prevSlide()">← 上一張 (Prev)</button>
        <div class="progress-bar-container">
          <div id="progressFill" class="progress-bar-fill" style="width: 3.33%;"></div>
        </div>
        <button class="btn btn-primary" onclick="nextSlide()">下一張 (Next) →</button>
      </div>
    </section>

    <!-- Download Link for Word Teaching Guide -->
    <div style="text-align:center; margin: 1.5rem 0;">
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第四週_課程教學指引_股市入門與企業價值估算.docx" download>
        📄 下載第四週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第四週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：台積電 / 蘋果股權與零股股利試算盤</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入零股買進預算與股價，試算你能買到的微型股權與每年領取的現金股利：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>買進總預算（元）：</label>
          <input type="number" id="budgetInput" value="10000">
        </div>
        <div class="form-group">
          <label>單股股票價格（元）：</label>
          <input type="number" id="stockPriceInput" value="1000">
        </div>
        <div class="form-group">
          <label>預估每股現金股利 DPS（元）：</label>
          <input type="number" id="dpsInput" value="18.0">
        </div>
        <div class="form-group">
          <label>公司在外流通總股數（億股）：</label>
          <input type="number" id="sharesOutInput" value="25.93">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateStockOwnership()">🧮 試算持有股數與股利回報</button>
        <div id="ownershipResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：珍奶店 A vs. B 本益比 P/E & 估值比較器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入兩家珍奶店的單股價格與每股盈餘 (EPS)，打破「高單價等於貴」的迷思：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>珍奶店 A 單股價格 (元)：</label>
          <input type="number" id="priceAInput" value="120">
        </div>
        <div class="form-group">
          <label>珍奶店 A 每股盈餘 EPS (元)：</label>
          <input type="number" id="epsAInput" value="10.0">
        </div>
        <div class="form-group">
          <label>珍奶店 B 單股價格 (元)：</label>
          <input type="number" id="priceBInput" value="30">
        </div>
        <div class="form-group">
          <label>珍奶店 B 每股盈餘 EPS (元)：</label>
          <input type="number" id="epsBInput" value="1.0">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculatePEValuation()">🔍 計算兩家店本益比與回本年限</button>
        <div id="peValuationResult" style="margin-top:1rem; font-weight:700; color:var(--accent-rose); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：股市入門與企業估值大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大估值關卡，累積 400 分獲得股市估值大師徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w4_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：標的企業本益比與 ROE 估值分析報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">請從小組關注的上市企業中挑選 1 家，完成估值分析：</p>
      
      <form onsubmit="submitW4Homework(event)">
        <div class="form-group">
          <label>1. 選擇分析之目標企業與股票代號 (例如: 台積電 2330)：</label>
          <input type="text" placeholder="輸入企業名稱與代號..." required>
        </div>
        <div class="form-group">
          <label>2. 查詢並記錄該企業當前股價、EPS、本益比 (P/E) 與歷史河流圖位階：</label>
          <textarea rows="2" placeholder="說明當前 P/E 處於歷史高點、均值或低點區間..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 運用杜邦分析法拆解該企業之 ROE 驅動引擎 (獲利力 / 效率 / 槓桿)：</label>
          <textarea rows="2" placeholder="分析其純益率、資產週轉率與權益乘數優勢..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 評估該企業是否擁有「經濟護城河」並給予投資建議：</label>
          <textarea rows="2" placeholder="說明其專利、品牌、網絡效應或轉換成本..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第四週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第四週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w4_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第四週_股市入門與企業價值估算.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第四週_股市入門與企業價值估算.html successfully!")
