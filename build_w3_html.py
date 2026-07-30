import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w3_app.js', 'r', encoding='utf-8') as f:
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
    print("Parsed", len(slides), "Week 3 slides successfully!")
else:
    print("Failed to find end of slidesData array")
    exit(1)

# Generate HTML grid cards
grid_cards_html = ""
for s in slides:
    clean_preview = re.sub(r'<[^>]*>?', '', s['content']['zh'])
    grid_cards_html += f"""
    <div class="mini-slide-card" onclick="goToSlide({s['id'] - 1})">
      <div class="mini-slide-num">SLIDE {s['id']:02d} • Hour {s['hour']} ({s['tag']['zh']})</div>
      <div class="mini-slide-title">{s['title']['zh']}</div>
      <div class="mini-slide-preview">{clean_preview}</div>
    </div>"""

html_template = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>115管理探索二 | 第三週：利率、央行貨幣政策與資產價格</title>
  <meta name="description" content="115學年度管理探索二第三週雙語互動教學網站，包含30頁純教學內容、Canva視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第三週 利率、央行貨幣政策與資產價格</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 折現計算</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 點陣圖預測</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 央行挑戰</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第三週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w3_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第三週_課程教學指引_利率央行貨幣政策與資產價格.docx" download>
        📄 下載第三週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第三週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：升息下的房貸負擔與折現現值計算盤</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入未來現金流與折現率變化，親自計算高利率對現值 PV 的極速打擊：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>15 年後的預期現金流 FV (元)：</label>
          <input type="number" id="fvInput" value="1000000">
        </div>
        <div class="form-group">
          <label>低利率時代折現率 r1（%）：</label>
          <input type="number" id="rate1Input" value="2.0">
        </div>
        <div class="form-group">
          <label>升息後的高折現率 r2（%）：</label>
          <input type="number" id="rate2Input" value="5.0">
        </div>
        <div class="form-group">
          <label>折現年數 n（年）：</label>
          <input type="number" id="yearsInput" value="15">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateDiscount()">🧮 計算折現現值與估值暴跌率</button>
        <div id="discountResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：Fed 點陣圖 (Dot Plot) 利率路徑與估值預測</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">運用戈登股利成長模型 P0 = D1 / (r - g)，計算點陣圖利率變化對股票合理價的衝擊：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>下一期股利 D1 (元)：</label>
          <input type="number" id="d1Input" value="5.0">
        </div>
        <div class="form-group">
          <label>永續股利成長率 g（%）：</label>
          <input type="number" id="gInput" value="3.0">
        </div>
        <div class="form-group">
          <label>原要求報酬率 r（%）：</label>
          <input type="number" id="rOldInput" value="5.0">
        </div>
        <div class="form-group">
          <label>點陣圖升息後要求報酬率 r（%）：</label>
          <input type="number" id="rNewInput" value="6.0">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateValuation()">🔍 計算戈登模型合理股價變動</button>
        <div id="valuationResult" style="margin-top:1rem; font-weight:700; color:var(--accent-rose); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：央行貨幣政策與資產價格大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大實戰關卡，累積 400 分獲得央行貨幣政策分析師徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w3_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：聯準會降息循環下之 3 大資產調配報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">請完成利率轉折點之跨資產配置報告：</p>
      
      <form onsubmit="submitW3Homework(event)">
        <div class="form-group">
          <label>1. 當前無風險利率 (US10Y) 基準與預估降息幅度：</label>
          <input type="text" placeholder="例如：US10Y 為 4.2%，預估降息 4 碼 (1.0%)" required>
        </div>
        <div class="form-group">
          <label>2. 長天期美債資本利得估算 (運用 Delta P = -Duration * Delta y)：</label>
          <textarea rows="2" placeholder="說明 Duration 為 17 年之長債在降息下的價格漲幅估算..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 戈登模型中，折現率下滑對高成長科技股本益比 (P/E) 之拉升分析：</label>
          <textarea rows="2" placeholder="說明高科技股現金流 Long Duration 屬性與估值修復..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定股票、長債與現金之跨資產動態再平衡比率：</label>
          <textarea rows="2" placeholder="說明防範硬著陸與軟著陸情境下的配置邏輯..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第三週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第三週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w3_app.js"></script>
</body>
</html>
"""

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\第三週_利率央行貨幣政策與資產價格.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第三週_利率央行貨幣政策與資產價格.html successfully!")
