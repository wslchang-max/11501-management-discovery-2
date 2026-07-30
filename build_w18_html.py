import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w18_app.js', 'r', encoding='utf-8') as f:
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
    # Clean up TeX backslashes for json.loads
    slides_json_clean = slides_json.replace('\\\\', '\\')
    slides_json_clean = re.sub(r'\\(?!["\\/bfnrtu])', r'\\\\', slides_json_clean)
    slides = json.loads(slides_json_clean)
    print("Parsed", len(slides), "Week 18 slides successfully!")
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
  <title>115管理探索二 | 第十八週：學期總結、財經探索藍圖與大一新鮮人終身宣言</title>
  <meta name="description" content="115學年度管理探索二第十八週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第十八週 學期總結、財經藍圖與大一終身宣言</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 4年藍圖試算器</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 18週能力診斷器</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 18週財經大滿貫</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第十八週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w18_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第十八週_課程教學指引_學期總結財經探索藍圖與大一新鮮人終身宣言.docx" download>
        📄 下載第十八週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第十八週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：大學 4 年財經藍圖與百萬第一桶金試算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入每月預計儲蓄投資金額與年化報酬率，精算人生第一個 100 萬第一桶金時程：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>每月預計儲蓄投資金額 (元)：</label>
          <input type="number" id="monthlySaveInput" value="5000">
        </div>
        <div class="form-group">
          <label>預估投資組合年化報酬率 (%，如 0050 7%)：</label>
          <input type="number" id="returnRateInput" value="7.0" step="0.1">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateOneMillion()">💰 精算第一個 100 萬第一桶金達成年齡</button>
        <div id="oneMillionResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：18 週全景知識能力診斷與結業榮譽試算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">評估個人在理財、產業、資安與簡報表達四大維度的學習成效，精算結業榮譽分數：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>1. 理財基礎與生涯規劃分數 (0-100)：</label>
          <input type="number" id="financeScoreInput" value="95">
        </div>
        <div class="form-group">
          <label>2. 前沿產業 (半導體/AI/ESG) 掌握分數 (0-100)：</label>
          <input type="number" id="industryScoreInput" value="92">
        </div>
        <div class="form-group">
          <label>3. 資安防範 (165/Deepfake/冷錢包) 分數 (0-100)：</label>
          <input type="number" id="securityScoreInput" value="98">
        </div>
        <div class="form-group">
          <label>4. 實戰簡報與 Q&A 表達氣場分數 (0-100)：</label>
          <input type="number" id="pitchScoreInput2" value="90">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateCompetency()">🎓 精算 18 週全景能力分數與頒發結業榮譽勳章</button>
        <div id="competencyResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：18 週全景財經通識總大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大全學期核心關卡，累積 400 分獲得全學期財經通識大滿貫領航員徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w18_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：個人大學 4 年財經探索藍圖與結業感言</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">制定大學 4 年階梯式財經成長目標，撰寫 18 週結業感言：</p>
      
      <form onsubmit="submitW18Homework(event)">
        <div class="form-group">
          <label>1. 制定大學 4 年 (打底 ➔ 實務 ➔ 實習 ➔ 獨立 30萬) 的階段目標與 SOP：</label>
          <input type="text" placeholder="說明大學 4 年財經與職涯規劃藍圖..." required>
        </div>
        <div class="form-group">
          <label>2. 重申並簽署個人專屬大一終身財經 4 大誓言：</label>
          <textarea rows="2" placeholder="寫下個人 Pay Yourself First、0050 定期定額與資安防範誓言..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 規劃畢業前累積 100 萬第一桶金與 30 年 1,500 萬 F.I.R.E. 退休金池之行動方案：</label>
          <textarea rows="2" placeholder="說明 30 年資產複利累積與被動收入計畫..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 撰寫 115 學年度「管理探索二」18 週課程結業感言與給自己的祝福：</label>
          <textarea rows="2" placeholder="寫下 18 週學習心得與對大學未來的期許..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第十八週課堂作業暨結業報告</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第十八週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w18_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第十八週_學期總結財經探索藍圖與大一新鮮人終身宣言.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第十八週_學期總結財經探索藍圖與大一新鮮人終身宣言.html successfully!")
