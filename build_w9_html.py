import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w9_app.js', 'r', encoding='utf-8') as f:
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
    print("Parsed", len(slides), "Week 9 slides successfully!")
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
  <title>115管理探索二 | 第九週：保險基礎、風險管理與個人保障規劃</title>
  <meta name="description" content="115學年度管理探索二第九週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第九週 保險基礎、風險管理與個人保障規劃</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 風險矩陣檢測器</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 醫療理賠精算器</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 保險保障達人</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第九週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w9_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第九週_課程教學指引_保險基礎風險管理與個人保障規劃.docx" download>
        📄 下載第九週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第九週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：四象限風險矩陣與應對策略檢測器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">選擇風險事故之發生頻率與損失程度，自動判定屬於哪一象限並提供最佳對策：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>事故發生頻率 (Frequency)：</label>
          <select id="riskFreqSelect">
            <option value="low">低發生頻率 (Low Frequency - 偶爾或極罕見)</option>
            <option value="high">高發生頻率 (High Frequency - 經常發生)</option>
          </select>
        </div>
        <div class="form-group">
          <label>事故潛在財務損失程度 (Severity)：</label>
          <select id="riskLossSelect">
            <option value="high">大損失 / 災難性 (High Loss - 車禍住院重大手術)</option>
            <option value="low">小損失 / 可承受 (Low Loss - 雨傘遺失、手機擦傷)</option>
          </select>
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="checkRiskStrategy()">🔍 檢測風險象限與最佳管理策略</button>
        <div id="riskResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：實支實付醫療險理賠與自負額精算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入醫療住院升等病房費、手術費與自費藥品雜費，精算實支實付給付額與自負額：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>升等單人/雙人病房總自費 (元)：</label>
          <input type="number" id="roomCostInput" value="6000">
        </div>
        <div class="form-group">
          <label>保單每日病房費限額 (元/日)：</label>
          <input type="number" id="roomCapInput" value="2000">
        </div>
        <div class="form-group">
          <label>自費微創手術費用 (元)：</label>
          <input type="number" id="surgeryCostInput" value="35000">
        </div>
        <div class="form-group">
          <label>保單手術費用上限 (元)：</label>
          <input type="number" id="surgeryCapInput" value="50000">
        </div>
        <div class="form-group">
          <label>自費特殊藥品與醫材雜費 (元)：</label>
          <input type="number" id="miscCostInput" value="85000">
        </div>
        <div class="form-group">
          <label>保單醫療雜費上限 (元)：</label>
          <input type="number" id="miscCapInput" value="150000">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateMedicalReimbursement()">🧮 精算實支實付理賠金與個人自負額</button>
        <div id="medicalResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：保險保障達人大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大保險實戰關卡，累積 400 分獲得保險保障達人徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w9_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：個人第一張保單需求評估與人情保單體檢</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">評估個人目前高風險場景（機車通勤/打工），規劃專屬高 CP 值定期險保單：</p>
      
      <form onsubmit="submitW9Homework(event)">
        <div class="form-group">
          <label>1. 列出個人大一生活最常接觸之 2 大風險場景 (例如: 機車通勤摔車、餐廳打工燙傷)：</label>
          <input type="text" placeholder="輸入個人高風險生活場景..." required>
        </div>
        <div class="form-group">
          <label>2. 依據雙十原則，設定個人第一張定期險保單項目 (意外險+實支醫療) 與年保費預算：</label>
          <textarea rows="2" placeholder="說明保額與控制在 3,000-5,000 元保費之規劃..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 說明「買定期險 + 剩餘錢投資 0050 ETF」比買「高價終身險」優越之理財算術：</label>
          <textarea rows="2" placeholder="比較兩者 20 年後之保障與資產累積差異..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定個人「據實告知健康史 + 拒絕人情保單 + 10天契撤權」防禦 SOP：</label>
          <textarea rows="2" placeholder="說明面對親戚推銷時之拒絕與審閱守則..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第九週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第九週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w9_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第九週_保險基礎風險管理與個人保障規劃.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第九週_保險基礎風險管理與個人保障規劃.html successfully!")
