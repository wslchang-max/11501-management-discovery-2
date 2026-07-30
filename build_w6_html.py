import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w6_app.js', 'r', encoding='utf-8') as f:
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
    print("Parsed", len(slides), "Week 6 slides successfully!")
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
  <title>115管理探索二 | 第六週：數位金融、高利活存與銀行業變革</title>
  <meta name="description" content="115學年度管理探索二第六週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第六週 數位金融、高利活存與銀行業變革</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 活存利息試算</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: 刷卡回饋算術</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: 數位金融達人</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第六週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w6_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第六週_課程教學指引_數位金融高利活存與銀行業變革.docx" download>
        📄 下載第六週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第六週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：數位帳戶高利活存與利息精算盤</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入預計存款金額、優惠利率、額度上限與超過後的牌告底利，精算你的實質年化收益：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>預計存入本金金額（元）：</label>
          <input type="number" id="depositAmtInput" value="50000">
        </div>
        <div class="form-group">
          <label>宣稱優惠活存利率（%）：</label>
          <input type="number" id="promoRateInput" value="3.5">
        </div>
        <div class="form-group">
          <label>優惠利率適用金額上限 (Cap)（元）：</label>
          <input type="number" id="rateCapInput" value="20000">
        </div>
        <div class="form-group">
          <label>超過上限部分之基本活存利率（%）：</label>
          <input type="number" id="baseRateInput" value="0.8">
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateDigitalInterest()">🧮 精算實質年化利息與有效利率</button>
        <div id="digitalInterestResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：信用卡現金回饋與海外手續費計算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入消費金額、宣稱回饋率，並勾選是否為海外交易，計算實質淨獲得收益：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>刷卡消費金額 (元)：</label>
          <input type="number" id="spendAmtInput" value="10000">
        </div>
        <div class="form-group">
          <label>卡片宣稱回饋率 (％)：</label>
          <input type="number" id="cardRateInput" value="3.0">
        </div>
        <div class="form-group" style="display:flex; align-items:center; gap:0.5rem; margin-top:0.5rem;">
          <input type="checkbox" id="isForeignCheckbox" checked style="width:auto;">
          <label for="isForeignCheckbox" style="margin:0; cursor:pointer;">此交易為海外消費 / 海外網站刷卡 (扣 1.5% 手續費)</label>
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:1rem;" onclick="calculateCardCashback()">🔍 精算扣除手續費後之淨獲利</button>
        <div id="cashbackResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：數位金融達人大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大數位金融實戰關卡，累積 400 分獲得數位金融達人徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w6_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：數位帳戶權益比較與防詐防護報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">請挑選 2 家你最想辦理的數位帳戶/純網銀，完成實務比較與防詐計畫：</p>
      
      <form onsubmit="submitW6Homework(event)">
        <div class="form-group">
          <label>1. 選擇比較之 2 家數位帳戶/純網銀名稱 (例如: LINE Bank vs. Richart)：</label>
          <input type="text" placeholder="輸入 2 家數位帳戶名稱..." required>
        </div>
        <div class="form-group">
          <label>2. 比較兩者之「活存利率、額度上限、免費跨轉次數與解鎖條件」：</label>
          <textarea rows="2" placeholder="說明兩家帳戶之優缺點與實質收益算術..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 設定個人大一新鮮人「1 薪轉 + 2 數位戶」開戶與自動化划轉規劃：</label>
          <textarea rows="2" placeholder="說明每月發薪後之儲蓄與生活費劃分規劃..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定個人數位帳戶「2FA 資安防護與 165 反釣魚防詐 SOP」：</label>
          <textarea rows="2" placeholder="說明遇到簡訊短網址與 OTP 驗證碼時之防範原則..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第六週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第六週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w6_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第六週_數位金融高利活存與銀行業變革.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第六週_數位金融高利活存與銀行業變革.html successfully!")
