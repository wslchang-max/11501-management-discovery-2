import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'r', encoding='utf-8') as f:
    js_text = f.read()

# Extract slidesData JSON array string
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
else:
    print("Could not find slidesData JSON in app.js")
    exit(1)

print(f"Loaded {len(slides)} slides for HTML static baking.")

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
  <title>115管理探索二 | 第一週：資訊爆炸時代的財經素養</title>
  <meta name="description" content="115學年度管理探索二第一週雙語互動教學網站，包含30頁純教學內容、Canva視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：財金蛙挖哇</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: SNR計算</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 標題重組</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 雜訊偵測</button>
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
      <input type="text" id="searchInput" placeholder="搜尋 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by app.js -->
        <div class="slide-header">
          <span class="slide-counter">SLIDE 1 / 30</span>
          <span class="slide-tag">單元導論 (Hour 1)</span>
        </div>
        <div class="slide-content-wrapper">
          <div>
            <h2 class="slide-title">Slide 01 | 第一週課程導論：資訊爆炸時代的財經素養</h2>
            <img class="slide-img" src="images/cover.jpg" alt="Slide Visual">
            <div class="slide-body">
              <p>歡迎來到 115 學年度「管理探索二」。今天第一週的主題是<b>「資訊爆炸時代的財經素養」</b>。</p>
              <p>在現代社會中，我們每個人每天隨時都被數以千計的新聞推送、社群貼文、AI 生成的股市分析以及投資網紅的短影音所包圍。</p>
              <div class="slide-grid">
                <div class="slide-card-box">
                  <h4>💡 核心疑問</h4>
                  <p>資訊變多，真的代表我們變聰明、決策變準確了嗎？抑或是我們正陷入更多的市場情緒與假新聞焦慮中？</p>
                </div>
                <div class="slide-card-box">
                  <h4>🎯 學習使命</h4>
                  <p>本課程將帶領大家建立學術級的資訊過濾框架，學會從大量雜訊 (Noise) 中提煉真實訊號 (Signal)。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="slide-controls">
        <button class="btn btn-outline" onclick="prevSlide()">← 上一張 (Prev)</button>
        <div class="progress-bar-container">
          <div id="progressFill" class="progress-bar-fill" style="width: 3.33%;"></div>
        </div>
        <button class="btn btn-primary" onclick="nextSlide()">下一張 (Next) →</button>
      </div>
    </section>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：資訊飲食與 SNR 計算盤</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">請評估你每日獲得的真實 Signal 數據數量與極端標題 Noise 數量，進行個人 SNR 健檢！</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>每日閱讀官方財報/審計數據的時間（分鐘）：</label>
          <input type="number" id="signalInput" value="15">
        </div>
        <div class="form-group">
          <label>每日瀏覽短影音/聳動標題黨的時間（分鐘）：</label>
          <input type="number" id="noiseInput" value="60">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateSNR()">🧮 計算我的 SNR 資訊純度分數</button>
        <div id="snrResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：新聞標題框架重組大考驗</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">練習將情緒化聳動標題，重組改寫為客觀中立的 Signal 報導！</p>
      
      <div class="activity-box">
        <p style="color:var(--accent-rose); font-weight:700; margin-bottom:0.5rem;">原始標題黨：<i>「台積電海外建廠驚爆巨虧崩盤？！投資人快逃！」</i></p>
        <div class="form-group">
          <label>請運用 4D Filter，將其改寫為客觀中立的學術級標題：</label>
          <textarea rows="3" placeholder="例如：台積電海外建廠初期 CAPEX 與折舊成本攀升，長線聚焦全球佈局..."></textarea>
        </div>
        <button class="btn btn-purple" style="width:100%;" onclick="alert('✅ 提交成功！已獲得客觀框架修飾評分！')">提交框架重組作業</button>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時重磅小遊戲：財經新聞真假與雜訊偵測大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">運用 4D Filter 檢測真實新聞關卡，挑戰累積 400 分獲得偵探徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業提交表單</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">請挑選本週任一份真實新聞，完成 4D Filter 分析報告：</p>
      
      <form onsubmit="submitHomework(event)">
        <div class="form-group">
          <label>1. 新聞標題與資料來源：</label>
          <input type="text" placeholder="例如：工商時報 - 央行利率政策新聞" required>
        </div>
        <div class="form-group">
          <label>2. Data 數據查核（是否具備公開財報/官方數據支撐？）：</label>
          <textarea rows="2" placeholder="說明查核結果與數據出處..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. Disclosure 利益揭露（是否存在贊助或利益衝突？）：</label>
          <textarea rows="2" placeholder="說明媒體與作者利益動機..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. Divergence 多元觀點（是否有對立權威機構反向觀點？）：</label>
          <textarea rows="2" placeholder="列出對立視角與分析..." required></textarea>
        </div>
        <div class="form-group">
          <label>5. Duration 時間軸評估（屬短線情緒雜訊還是長線結構變動？）：</label>
          <textarea rows="2" placeholder="評估影響持續時間與現金流..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交本週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第一週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="app.js"></script>
</body>
</html>
"""

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\第一週_資訊爆炸時代的財經素養.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\index.html', 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Baked static slides directly into W1 HTML files!")
