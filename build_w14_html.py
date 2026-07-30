import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w14_app.js', 'r', encoding='utf-8') as f:
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
    print("Parsed", len(slides), "Week 14 slides successfully!")
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
  <title>115管理探索二 | 第十四週：生成式 AI 革命、人工智慧產業鏈與未來職場轉型</title>
  <meta name="description" content="115學年度管理探索二第十四週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第十四週 生成式 AI 革命與未來職場轉型</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: AI算力估值器</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 企業AI ROI算試算</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: AI應用達人</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第十四週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w14_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第十四週_課程教學指引_生成式AI革命人工智慧產業鏈與未來職場轉型.docx" download>
        📄 下載第十四週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第十四週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：AI 算力成本與伺服器供應鏈估值計算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入 AI 伺服器採購量、單機預算與電力功耗，精算算力中心建置成本與台廠效益：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>AI 伺服器機櫃採購數量 (架)：</label>
          <input type="number" id="serverCountInput" value="100">
        </div>
        <div class="form-group">
          <label>單機預算估算 (美元 USD)：</label>
          <input type="number" id="unitPriceInput" value="300000">
        </div>
        <div class="form-group">
          <label>單機功耗估算 (kW 千瓦)：</label>
          <input type="number" id="powerKwInput" value="40">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateAICompute()">🤖 精算 AI 算力建置成本與台灣伺服器訂單效益</button>
        <div id="aiComputeResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：企業 AI ROI 效益與個人 AI 賦能時間精算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入團隊人數、平均月薪與 AI 提升時間效率比例，精算企業 ROI 與時間收益：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>團隊員工總人數 (人)：</label>
          <input type="number" id="employeeCountInput" value="50">
        </div>
        <div class="form-group">
          <label>員工平均月薪 (元)：</label>
          <input type="number" id="salaryInput" value="60000">
        </div>
        <div class="form-group">
          <label>AI 導入節省時間與提升生產力比例 (%)：</label>
          <input type="number" id="timeSavedInput" value="30">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateCorporateAIROI()">⚖️ 精算企業導入 AI 產出之時間與年收益 ROI</button>
        <div id="aiRoiResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：生成式 AI 應用達人大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大 AI 實戰關卡，累積 400 分獲得 AI 應用領航員徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w14_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：個人 AI 工具協作與未來職場轉型報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">設計專屬 AI 協作工作流，評估個人未來職涯面對 AI 之替代與賦能：</p>
      
      <form onsubmit="submitW14Homework(event)">
        <div class="form-group">
          <label>1. 運用黃金提示詞 4 要素 (Role/Context/Constraint/Output) 撰寫一組個人專屬 Prompt：</label>
          <input type="text" placeholder="輸入個人專屬提示詞設計..." required>
        </div>
        <div class="form-group">
          <label>2. 規劃日常學習與財務分析之 3 階段 AI 協作 SOP (收集 ➔ 分析 ➔ 簡報)：</label>
          <textarea rows="2" placeholder="說明日常學習如何運用 ChatGPT/Claude 提升 300% 效率..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 評估個人主修科系未來職場哪些任務會被 AI 替代，並擬定提升 3 大關鍵能力之計畫：</label>
          <textarea rows="2" placeholder="說明鍛鍊提問力、批判思考力與跨領域整合力方案..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定個人防範 Deepfake 語音/換臉詐騙之家族暗語與資安防禦 SOP：</label>
          <textarea rows="2" placeholder="說明家族通關暗語與驗證反查 SOP..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第十四週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第十四週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w14_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第十四週_生成式AI革命人工智慧產業鏈與未來職場轉型.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第十四週_生成式AI革命人工智慧產業鏈與未來職場轉型.html successfully!")
