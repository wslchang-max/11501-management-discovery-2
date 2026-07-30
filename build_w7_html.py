import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w7_app.js', 'r', encoding='utf-8') as f:
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
    # Clean up LaTeX escaped symbols like \$ or \% that break JSON.loads
    slides_json_clean = re.sub(r'\\([%$])', r'\1', slides_json)
    slides = json.loads(slides_json_clean)
    print("Parsed", len(slides), "Week 7 slides successfully!")
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
  <title>115管理探索二 | 第七週：個人外匯、匯率變動與國際貿易</title>
  <meta name="description" content="115學年度管理探索二第七週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第七週 個人外匯、匯率變動與國際貿易</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 換匯點差計算器</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 大麥克 PPP 檢測</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 外匯交易達人</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第七週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w7_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第七週_課程教學指引_個人外匯匯率變動與國際貿易.docx" download>
        📄 下載第七週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第七週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：即期 vs. 現金換匯點差省錢計算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入欲換匯之台幣金額與銀行牌告即期/現金賣出價，精算線上換匯能省下多少錢：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>預計換匯新台幣金額 (元)：</label>
          <input type="number" id="amountTwdInput" value="30000">
        </div>
        <div class="form-group">
          <label>App 優惠即期賣出價 (Spot Rate)：</label>
          <input type="number" id="spotSellInput" value="0.2150" step="0.0001">
        </div>
        <div class="form-group">
          <label>銀行臨櫃現金賣出價 (Cash Rate)：</label>
          <input type="number" id="cashSellInput" value="0.2200" step="0.0001">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateFXSpread()">🧮 精算即期換匯多賺日圓與省下台幣</button>
        <div id="fxSpreadResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：大麥克指數 (PPP) 幣值高低估檢測器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入台美大麥克售價與當前市場匯率，計算 PPP 隱含匯率並判定台幣估值狀態：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>台灣大麥克漢堡售價 (元 TWD)：</label>
          <input type="number" id="twdPriceInput" value="75">
        </div>
        <div class="form-group">
          <label>美國大麥克漢堡售價 (美元 USD)：</label>
          <input type="number" id="usdPriceInput" value="5.60" step="0.01">
        </div>
        <div class="form-group">
          <label>當前市場真實匯率 (USD/TWD)：</label>
          <input type="number" id="marketRateInput" value="32.5" step="0.1">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateBigMacPPP()">🔍 檢測 PPP 隱含匯率與台幣高低估比率</button>
        <div id="pppResult" style="margin-top:1rem; font-weight:700; color:var(--accent-rose); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：外匯交易達人大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大外匯實戰關卡，累積 400 分獲得外匯交易達人徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w7_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：自選外幣換匯與升貶值影響報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">請挑選 1 種你計畫持有或旅遊的外幣（如美元 USD、日圓 JPY），完成實務剖析：</p>
      
      <form onsubmit="submitW7Homework(event)">
        <div class="form-group">
          <label>1. 選擇分析之外幣名稱與符號 (例如: 日圓 JPY)：</label>
          <input type="text" placeholder="輸入外幣名稱..." required>
        </div>
        <div class="form-group">
          <label>2. 查詢臺灣銀行牌告匯率，記錄當前「即期賣出」與「現金賣出」價並比較點差：</label>
          <textarea rows="2" placeholder="說明即期與現金匯率點差金額與省錢換匯管道..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 分析若新台幣對該外幣大升值 10%，對你的旅遊購物與出口企業有何優缺點：</label>
          <textarea rows="2" placeholder="說明升值之贏家與輸家影響..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定個人外匯「分批分段換匯與美幣/雙幣卡」配置規劃：</label>
          <textarea rows="2" placeholder="說明換匯時間點與避險策略..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第七週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第七週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w7_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第七週_個人外匯匯率變動與國際貿易.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第七週_個人外匯匯率變動與國際貿易.html successfully!")
