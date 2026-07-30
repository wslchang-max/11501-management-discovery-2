import json, re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w16_app.js', 'r', encoding='utf-8') as f:
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
    print("Parsed", len(slides), "Week 16 slides successfully!")
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
  <title>115管理探索二 | 第十六週：加密貨幣、區塊鏈基礎、Web3 與數位資產風險</title>
  <meta name="description" content="115學年度管理探索二第十六週雙語互動教學網站，包含30頁純教學內容、Canva莫蘭迪視覺設計、全螢幕與螢光筆畫布書寫、3大小時活動與課堂實務作業。">
  <link rel="stylesheet" href="index.css">
  <!-- MathJax for rendering LaTeX equations -->
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" async></script>
</head>
<body>

  <!-- Navbar -->
  <nav class="navbar">
    <div class="brand">
      <span class="brand-badge">115 學年度</span>
      <span class="brand-title">管理探索二：第十六週 加密貨幣、區塊鏈與 Web3 資產風險</span>
    </div>
    <div class="nav-actions">
      <button class="btn btn-outline" onclick="setLanguage('zh')">繁體中文</button>
      <button class="btn btn-outline" onclick="setLanguage('en')">English</button>
      <button class="btn btn-emerald" onclick="openActivity1Modal()">🎯 1小時活動: 比特幣資安計算器</button>
      <button class="btn btn-purple" onclick="openActivity2Modal()">🎯 2小時活動: DeFi與5%配置試算器</button>
      <button class="btn btn-accent" onclick="openGameModal()">🎮 3小時小遊戲: Web3防詐達人</button>
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
      <input type="text" id="searchInput" placeholder="搜尋第十六週 30 頁純教學卡片 / Search 30 teaching slides..." onkeyup="searchSlides()">
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
        <!-- Rendered dynamically by w16_app.js -->
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
      <a class="btn btn-emerald" style="padding:0.75rem 2rem; font-size:1.1rem; text-decoration:none;" href="第十六週_課程教學指引_加密貨幣區塊鏈基礎Web3與數位資產風險.docx" download>
        📄 下載第十六週 Word 教學指引 (.docx)
      </a>
    </div>

    <!-- Grid View of 30 Teaching Slides -->
    <h3 style="margin: 2rem 0 1rem; color: var(--accent-gold); font-size: 1.3rem;">📚 第十六週 30 頁純教學模組快速導覽 (Click to View)</h3>
    <div id="slidesGridView" class="slides-grid-view">
      {grid_cards_html}
    </div>

  </main>

  <!-- MODAL: HOUR 1 ACTIVITY -->
  <div id="activity1Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity1Modal()">&times;</button>
      <h2 style="color:var(--accent-emerald); text-align:center; margin-bottom:1rem;">🎯 第 1 小時活動：比特幣減半產量與冷熱錢包資安評估計算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入持有之比特幣數量與保管錢包類型，評估資產市值與資安等級：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>持有比特幣數量 (BTC)：</label>
          <input type="number" id="btcHoldingInput" value="0.1" step="0.01">
        </div>
        <div class="form-group">
          <label>資產保管錢包類型：</label>
          <select id="walletTypeSelect" style="width:100%; padding:0.6rem; border-radius:8px; border:1px solid var(--border-light); background:var(--bg-card); color:var(--text-main);">
            <option value="cold">冷錢包 (Hardware Cold Wallet - 離線)</option>
            <option value="exchange">交易所 / 熱錢包 (Hot Wallet / Exchange)</option>
          </select>
        </div>
        <button class="btn btn-emerald" style="width:100%; margin-top:0.5rem;" onclick="calculateBtcSecurity()">🪙 精算比特幣估值與冷熱錢包資安評級</button>
        <div id="btcSecurityResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 2 ACTIVITY -->
  <div id="activity2Modal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeActivity2Modal()">&times;</button>
      <h2 style="color:var(--accent-purple); text-align:center; margin-bottom:1rem;">🎯 第 2 小時活動：DeFi 年化收益風險與數位資產配置試算器</h2>
      <p style="color:var(--text-sub); margin-bottom:1rem;">輸入總投資資產與預計配置加密貨幣之比率，精算 5% 避險配置控管：</p>
      
      <div class="activity-box">
        <div class="form-group">
          <label>個人總投資資產 (元)：</label>
          <input type="number" id="totalAssetInput" value="100000">
        </div>
        <div class="form-group">
          <label>預計配置加密貨幣比率 (%，建議 5% 以內)：</label>
          <input type="number" id="cryptoPercentInput" value="5">
        </div>
        <button class="btn btn-purple" style="width:100%; margin-top:0.5rem;" onclick="calculateCryptoAllocation()">⚖️ 精算 5% 數位資產風險曝險與配置金額</button>
        <div id="cryptoAllocResult" style="margin-top:1rem; font-weight:700; color:var(--accent-gold); font-size:1.1rem;"></div>
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 GAME -->
  <div id="gameModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeGameModal()">&times;</button>
      <h2 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-align: center;">🎮 第 3 小時小遊戲：Web3 數位資產防詐大挑戰</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">挑戰 4 大區塊鏈與資安關卡，累積 400 分獲得 Web3 數位資產達人徽章！</p>
      
      <div id="gameQuestionContainer">
        <!-- Game Cards dynamically rendered by w16_app.js -->
      </div>
    </div>
  </div>

  <!-- MODAL: HOUR 3 CLASSROOM HOMEWORK ASSIGNMENT -->
  <div id="homeworkModal" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" onclick="closeHomeworkModal()">&times;</button>
      <h2 style="color: var(--primary); margin-bottom: 0.5rem; text-align: center;">📝 第 3 小時課堂實務作業：個人數位資產風險評估與 Web3 報告</h2>
      <p style="text-align: center; color: var(--text-sub); margin-bottom: 1.5rem;">評估加密貨幣風險，設計個人 5% 數位資產配置與資安防禦 SOP：</p>
      
      <form onsubmit="submitW16Homework(event)">
        <div class="form-group">
          <label>1. 說明區塊鏈去中心化特徵與比特幣 2,100 萬枚上限對抗通膨之經濟學原理：</label>
          <input type="text" placeholder="說明比特幣稀缺性與減半機制..." required>
        </div>
        <div class="form-group">
          <label>2. 剖析 FTX 交易所倒閉教訓，並說明「Not Your Keys, Not Your Coins」私鑰保管鐵律：</label>
          <textarea rows="2" placeholder="說明 FTX 挪用存款教訓與冷錢包離線保管私鑰..." required></textarea>
        </div>
        <div class="form-group">
          <label>3. 規劃大一個人總資產中上限 5% 的數位資產定期定額避險配置 SOP：</label>
          <textarea rows="2" placeholder="說明 95% 傳統資產 + 5% 加密貨幣配置方案..." required></textarea>
        </div>
        <div class="form-group">
          <label>4. 擬定防範 Telegram 搬磚套利詐騙與認明台灣金管會 VASP 洗錢防制交易所 SOP：</label>
          <textarea rows="2" placeholder="說明防範假交易所與出入金 KYC 驗證 SOP..." required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; font-size:1rem; padding:0.75rem;">🚀 提交第十六週課堂實務作業</button>
      </form>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <p>115 學年度「管理探索二」課程計畫 • 第十六週雙語網頁版 | 30 頁純教學模組 + 3 大小時活動 + 畫布筆跡 + 課堂作業</p>
  </footer>

  <script src="w16_app.js"></script>
</body>
</html>
"""

output_path = r'C:\Users\User\Desktop\115學年度\管理探索二\第十六週_加密貨幣區塊鏈基礎Web3與數位資產風險.html'
with open(output_path, 'w', encoding='utf-8') as f:
    f.write(html_template)

print("Created 第十六週_加密貨幣區塊鏈基礎Web3與數位資產風險.html successfully!")
