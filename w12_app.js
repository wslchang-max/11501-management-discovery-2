/**
 * 115 學年度「管理探索二」第十二週：個人與家庭資產負債表、現金流管理與生涯理財規劃
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w12_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十二週課程導論：個人與家庭資產負債表、現金流管理與生涯理財規劃", "en": "Week 12 Intro: Balance Sheets, Cash Flow & Financial Life Planning" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>📊 掌控個人財務儀表板：從資產負債表到 F.I.R.E. 財務自由</h2><p>「沃倫·巴菲特名言：如果你不知道如何編製個人的財務報表，你就像駕駛一架沒有儀表板的飛機！(If you don't track your financial numbers, you're flying blind!)\"</p></div><p>歡迎來到第十二週！經過前半學期關於股票、ETF、銀行、外匯、保險、房地產與所得稅的學習，本單元將帶領大家將所有財經知識整合為一套完整的「個人財務管理系統」。學習編製個人資產負債表 (BS) 與現金流量表 (CF)，掌握「先儲蓄後消費」30/50/20 黃金法則、緊急預備金水庫與人生 5 大財務目標時間複利。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：資產負債表</h4><p>掌握 資產 = 負債 + 淨值，分辨流動、投資與使用性資產。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：現金流與 F.I.R.E.</h4><p>發薪日先儲蓄後消費，留足 3-6 個月預備金，運用 4% 法則邁向財務自由。</p></div></div><div class=\"data-source-badge\">📌 資料來源：行政院主計總處家庭收支調查 / CFP 個人財務規劃標準</div>",
      "en": "<div class=\"hero-box\"><h2>📊 Master Your Financial Dashboard: From Balance Sheets to F.I.R.E.</h2><p>\"Warren Buffett: Without tracking your financial numbers, you're flying blind.\"</p></div><p>Welcome to Week 12! We integrate all previous concepts into a personal financial system. Learn to construct Personal Balance Sheets (BS) and Cash Flow Statements (CF), enforce the 30/50/20 rule, build emergency funds, and leverage time compounding for 5 life goals.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Balance Sheet</h4><p>Master Assets = Liabilities + Net Worth. Categorize liquid, investment, and use assets.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Cash Flow & F.I.R.E.</h4><p>Pay yourself first; secure 3-6 months emergency cash and apply the 4% Rule.</p></div></div><div class=\"data-source-badge\">📌 Source: DGBAS Family Income Survey / CFP Standards</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十二週 3 小時學習地圖與核心技能樹", "en": "Week 12 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>個人資產負債表與淨值算術</b> (Slide 01 - 10)<br>個人財務儀表板、資產=負債+淨值公式、3類資產與2類負債拆解、新鮮人淨值計算與家戶資產統計</td><td>🎯 <b>1小時活動</b>：個人資產負債表與淨值算術計算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>現金流管理、30/50/20 與 F.I.R.E.</b> (Slide 11 - 20)<br>先儲蓄後消費算術、30/50/20 黃金分配、3-6個月緊急預備金水庫、需要vs想要、雪球還債法與 4% 法則</td><td>🎯 <b>2小時活動</b>：30/50/20 現金流與緊急預備金試算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>財務健全度與生涯理財實戰</b> (Slide 21 - 30)<br>4大財務健康比例、多帳戶自動分流法、家庭財務分工、防詐、大學4年滾存30萬SOP與4大金律</td><td>🎮 <b>3小時小遊戲</b>：生涯理財達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人資產負債表編製與生涯理財計畫</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 12 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Balance Sheets & Net Worth</b> (Slide 01 - 10)<br>Assets = Liabilities + Net Worth formula, 3 Asset types, 2 Liability types & DGBAS data</td><td>🎯 <b>Hour 1 Activity</b>: Personal Balance Sheet Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Cash Flow, 30/50/20 & F.I.R.E.</b> (Slide 11 - 20)<br>Pay yourself first, 30/50/20 Rule, 3-6 Mo Emergency Fund, Snowball Debt Payoff & 4% Rule</td><td>🎯 <b>Hour 2 Activity</b>: 30/50/20 & Emergency Fund Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Financial Ratios & Life Action</b> (Slide 21 - 30)<br>4 Health Ratios, Multi-Account Auto-System, Anti-Scam, $300k College Savings SOP & 4 Rules</td><td>🎮 <b>Hour 3 Game</b>: Financial Life Master Challenge<br>📝 <b>Class Assignment</b>: Personal Balance Sheet & Life Plan</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "財務兩大支柱", "en": "2 Financial Pillars" },
    "title": { "zh": "為什麼企業與個人都需要資產負債表？個人財務體檢兩大支柱", "en": "Why Individuals Need Balance Sheets: 2 Core Pillars" },
    "content": {
      "zh": "<h3>🔍 評估個人財務健康的兩張核心報表</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 個人資產負債表 (Balance Sheet, BS)</h4><p><b>紀錄特定時間點的「財務存量」 (Stock)</b>。告訴你目前積累了多少資產、欠了多少負債，以及個人實質淨值。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 個人現金流量表 (Cash Flow, CF)</h4><p><b>紀錄特定期間的「財務流量」 (Flow)</b>。告訴你每個月收入從哪裡來、錢花到了哪裡，是否有淨盈餘。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 個人財務報表標準</div>",
      "en": "<h3>🔍 Two Core Statements Assessing Financial Health</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Personal Balance Sheet (BS)</h4><p><b>Tracks Financial Stock at a single point in time</b>. Shows assets, liabilities, and true net worth.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Personal Cash Flow Statement (CF)</h4><p><b>Tracks Financial Flow over a period</b>. Shows monthly income sources, expenses, and cash surplus.</p></div></div><div class=\"data-source-badge\">📌 Source: CFP Personal Financial Statement Guidelines</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "BS 核心公式", "en": "BS Core Formula" },
    "title": { "zh": "個人資產負債表核心公式：資產 = 負債 + 淨值", "en": "Core Balance Sheet Formula: Assets = Liabilities + Net Worth" },
    "content": {
      "zh": "<h3>📐 衡量個人真實財富價值的黃金恆等式</h3><div class=\"formula-box\">$$\\text{個人總資產 (Total Assets)} = \\text{總負債 (Total Liabilities)} + \\text{個人淨值 (Net Worth)}$$</div><div class=\"formula-box\">$$\\text{個人淨值 (Net Worth)} = \\text{個人總資產} - \\text{總負債}$$</div><p><b>核心真諦</b>：開好車、住豪宅不代表很有錢！如果總資產 1,500 萬中有 1,400 萬是銀行負債，個人真實淨值只有 100 萬元！<b>淨值才是你真正擁有的淨財富！</b></p><div class=\"data-source-badge\">📌 資料來源：薩繆爾森《會計學與個人理財》基本恆等式</div>",
      "en": "<h3>📐 The Golden Accounting Equation Measuring True Wealth</h3><div class=\"formula-box\">$$\\text{Total Assets} = \\text{Total Liabilities} + \\text{Net Worth}$$</div><div class=\"formula-box\">$$\\text{Net Worth} = \\text{Total Assets} - \\text{Total Liabilities}$$</div><p><b>Truth</b>: Luxury cars don't equal wealth! If $15M assets have $14M liabilities, real Net Worth is only $1M!</p><div class=\"data-source-badge\">📌 Source: Samuelson's Accounting & Personal Finance</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "3類資產拆解", "en": "3 Asset Types" },
    "title": { "zh": "流動資產 vs. 投資資產 vs. 使用性資產拆解", "en": "3 Asset Categories: Liquid, Investment & Use Assets" },
    "content": {
      "zh": "<h3>💡 不是所有擺在身邊的東西都是能為你賺錢的資產！</h3><table class=\"data-table\"><thead><tr><th>資產分類</th><th>定義與具體項目</th><th>變現性與財務功能</th></tr></thead><tbody><tr><td><b>1. 流動性資產 (Liquid)</b></td><td>現金、銀行活存、數位帳戶存款、高流動定存。</td><td><b>極高！</b>應對日常開銷與緊急預備金。</td></tr><tr><td><b>2. 投資性資產 (Investment)</b></td><td>0050/VOO ETF、台積電股票、債券、基金、黃金。</td><td><b>中高！</b>能帶來股息利息或資本增值。</td></tr><tr><td><b>3. 使用性資產 (Use)</b></td><td>自住房屋、通勤機車、筆電、智慧型手機。</td><td><b>低！</b>隨時間折舊變現，無法生利息。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 資產分類標準</div>",
      "en": "<h3>💡 Not Everything You Own Generates Money!</h3><table class=\"data-table\"><thead><tr><th>Asset Category</th><th>Definition & Concrete Items</th><th>Liquidity & Financial Role</th></tr></thead><tbody><tr><td><b>1. Liquid Assets</b></td><td>Cash, checking accounts, high-yield digital savings.</td><td><b>High!</b> Covers daily needs and emergency funds.</td></tr><tr><td><b>2. Investment Assets</b></td><td>0050/VOO ETFs, TSMC stocks, bonds, gold.</td><td><b>Medium-High!</b> Generates dividends and gains.</td></tr><tr><td><b>3. Use Assets</b></td><td>Self-occupied home, scooter, laptop, smartphone.</td><td><b>Low!</b> Depreciates over time; zero yield.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Certified Financial Planner Asset Standards</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "2類負債拆解", "en": "2 Liability Types" },
    "title": { "zh": "短期負債 vs. 長期負債（信用卡卡債、學貸與房貸）", "en": "Short-Term vs. Long-Term Liabilities (Cards, Student & House Loans)" },
    "content": {
      "zh": "<h3>💳 區分良性負債 (Good Debt) 與惡性負債 (Bad Debt)</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. 短期與高利惡性負債</h4><p><b>信用卡循環利息 (15%)、分期未繳、地下借貸</b>。利息極高、無相應增值資產，會侵蝕個人財富！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. 中長期與低利良性負債</h4><p><b>學生貸款 (低利1.65%)、房貸 (2.18%)</b>。利率低、能提升人力資本或換取增值資產。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國銀行公會負債管理原則</div>",
      "en": "<h3>💳 Distinguishing Good Debt from Bad Debt</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. Short-Term Bad Debt</h4><p><b>Credit card revolving interest (15%), loan sharks</b>. High interest destroys personal wealth!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. Long-Term Good Debt</h4><p><b>Student loans (1.65%), Mortgages (2.18%)</b>. Low interest building human capital or appreciating assets.</p></div></div><div class=\"data-source-badge\">📌 Source: The Bankers Association Debt Management Rules</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "新鮮人淨值算術", "en": "Freshman Net Worth" },
    "title": { "zh": "個人淨值 (Net Worth) 算術：大一新鮮人淨值計算實例", "en": "Net Worth Math: Freshman Personal Net Worth Case Study" },
    "content": {
      "zh": "<h3>💡 大一學生小明 18 歲個人資產負債表編製示範</h3><table class=\"data-table\"><thead><tr><th>資產項目 (Assets)</th><th>金額 (元)</th><th>負債與淨值項目 (Liabilities & NW)</th><th>金額 (元)</th></tr></thead><tbody><tr><td>高利活存現金</td><td>$30,000</td><td>機車分期未繳餘額 (短期負債)</td><td>$20,000</td></tr><tr><td>0050 ETF 股票價值</td><td>$50,000</td><td>學貸未繳餘額 (長期負債)</td><td>$40,000</td></tr><tr><td>中古機車 (使用性資產)</td><td>$30,000</td><td><b>負債總額</b></td><td><b>$60,000</b></td></tr><tr><td><b>資產總額</b></td><td><b>$110,000</b></td><td><b>小明個人淨值 (Net Worth)</b></td><td><span style=\"color:var(--accent-emerald); font-weight:bold;\">$50,000</span></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案財務編製組</div>",
      "en": "<h3>💡 Age 18 Freshman Ming's Personal Balance Sheet</h3><table class=\"data-table\"><thead><tr><th>Asset Items</th><th>Amount</th><th>Liabilities & Net Worth</th><th>Amount</th></tr></thead><tbody><tr><td>Digital Savings Cash</td><td>$30,000</td><td>Scooter Loan Balance (Short-term)</td><td>$20,000</td></tr><tr><td>0050 ETF Value</td><td>$50,000</td><td>Student Loan Balance (Long-term)</td><td>$40,000</td></tr><tr><td>Used Scooter (Use Asset)</td><td>$30,000</td><td><b>Total Liabilities</b></td><td><b>$60,000</b></td></tr><tr><td><b>Total Assets</b></td><td><b>$110,000</b></td><td><b>Ming's Net Worth</b></td><td><span style=\"color:var(--accent-emerald); font-weight:bold;\">$50,000</span></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Accounting Team</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "家戶資產數據", "en": "Family Wealth Data" },
    "title": { "zh": "實證數據：金管會與主計總處台灣家戶平均資產負債與淨值統計", "en": "Empirical Data: Taiwan Family Assets, Liabilities & Net Worth" },
    "content": {
      "zh": "<h3>🇹🇼 台灣家庭資產結構分析！官方權威統計</h3><p>根據行政院主計總處 2026 最新國情統計通報：</p><ul><li><b>全台家庭平均每戶資產總額</b>：約 <b>1,630 萬元新台幣</b>（房地產占約 52%、金融資產占約 43%）。</li><li><b>全台家庭平均每戶負債總額</b>：約 <b>240 萬元新台幣</b>（以房屋貸款占大宗）。</li><li><b>全台家庭平均每戶淨值</b>：高達 <b>1,390 萬元新台幣</b>，中位數淨值約 900 萬元。</li></ul><div class=\"data-source-badge\">📌 資料來源：行政院主計總處家庭收支調查與國情統計通報</div>",
      "en": "<h3>🇹🇼 Taiwan Family Wealth Structure Official Data</h3><p>According to DGBAS National Statistics:</p><ul><li><b>Average Family Total Assets</b>: ~<b>$16.3 million NTD</b> (Real estate ~52%, Financial assets ~43%).</li><li><b>Average Family Total Liabilities</b>: ~<b>$2.4 million NTD</b> (Mortgages dominate).</li><li><b>Average Family Net Worth</b>: Reaches <b>$13.9 million NTD</b> (Median Net Worth ~$9.0M NTD).</li></ul><div class=\"data-source-badge\">📌 Source: DGBAS National Income & Family Wealth Survey</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "現金流量表CF", "en": "Cash Flow CF" },
    "title": { "zh": "個人現金流量表 (Cash Flow) 核心公式：收入 - 支出 = 淨現金流", "en": "Cash Flow Statement Formula: Income - Expenses = Net Cash Flow" },
    "content": {
      "zh": "<h3>💧 控管每個月的資金水頭！正現金流是財富積累的源頭</h3><div class=\"formula-box\">$$\\text{月淨現金流 (Net Cash Flow)} = \\text{每月總收入 (打工+獎學金+零用錢)} - \\text{每月總支出 (食宿+交通+娛樂)}$$</div><ul><li><b>正現金流 (Positive CF)</b>：收入 > 支出！產出月盈餘，可轉入資產負債表買入 0050 ETF 累積淨值。</li><li><b>負現金流 (Negative CF)</b>：收入 < 支出！入不敷出，被迫借卡債或消耗儲蓄，淨值持續縮水！</li></ul><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 現金流控管標準</div>",
      "en": "<h3>💧 Managing Monthly Cash Flows: Positive Cash Flow Builds Wealth</h3><div class=\"formula-box\">$$\\text{Monthly Net Cash Flow} = \\text{Total Income} - \\text{Total Expenses}$$</div><ul><li><b>Positive Cash Flow</b>: Income > Expenses! Creates surplus to invest in 0050 ETF and boost Net Worth.</li><li><b>Negative Cash Flow</b>: Income < Expenses! Overspending drains savings and shrinks Net Worth!</li></ul><div class=\"data-source-badge\">📌 Source: Certified Financial Planner Cash Flow Guidelines</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>BS 公式</b>：資產 = 負債 + 淨值；淨值才是真正擁有的財富。</li><li><b>資產 3 分類</b>：流動資產（現金）、投資資產（0050 ETF）、使用資產（機車）。</li><li><b>負債 2 分類</b>：遠離 15% 信用卡卡債；理性使用低利學貸與房貸。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 資產負債表試算」</b> 按鈕，輸入個人存款、股票與負債，精算你的個人淨值！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>BS Equation</b>: Assets = Liabilities + Net Worth; Net worth measures real wealth.</li><li><b>3 Asset Types</b>: Liquid (Cash), Investment (0050 ETF), Use (Scooter).</li><li><b>Debt Types</b>: Eliminate 15% credit card debt; manage low-interest student loans.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate your Personal Net Worth!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "先儲蓄後消費", "en": "Pay Yourself First" },
    "title": { "zh": "翻轉理財順序：發薪日「先儲蓄、後消費 (Pay Yourself First)」算術", "en": "Flip Your Money Order: Pay Yourself First Math" },
    "content": {
      "zh": "<h3>💰 為什麼月光族總是存不到錢？翻轉理財公式</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 一般月光族的錯誤公式</h4><p>`收入 - 消費 = 儲蓄 (剩多少存多少)`。往往月底消費過度，儲蓄金額歸零甚至透支！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 理財達人的致富公式 (Pay Yourself First)</h4><p>`收入 - 預先儲蓄投資 = 可消費金額`。發薪日第一天先將 20%-30% 自動轉入投資帳戶！</p></div></div><div class=\"data-source-badge\">📌 資料來源：巴菲特理財哲學 \"Do not save what is left after spending\"</div>",
      "en": "<h3>💰 Why Do Paycheck-to-Paycheck Workers Fail to Save?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ The Broke Formula</h4><p>`Income - Expenses = Savings (Save whatever is left)`. Usually leads to zero savings!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ The Wealth Formula (Pay Yourself First)</h4><p>`Income - Pre-Savings = Allowed Expense`. Auto-transfer 20%-30% into investments on payday!</p></div></div><div class=\"data-source-badge\">📌 Source: Warren Buffett's Savings Principle</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "30/50/20法則", "en": "30/50/20 Rule" },
    "title": { "zh": "大學生打工資產分配黃金法則：30 / 50 / 20 比例法則", "en": "Student Budget Rule: 30 / 50 / 20 Allocation System" },
    "content": {
      "zh": "<h3>📐 大一打工族月薪 15,000 元的完美預算分配術</h3><table class=\"data-table\"><thead><tr><th>預算分配比例</th><th>用途分類與說明</th><th>打工月薪 $15,000 實例</th></tr></thead><tbody><tr><td><b>50% 必要生活費 (Needs)</b></td><td>房租、餐費、交通、健保通訊費。</td><td><b>$7,500 元</b> (維持基本生存)</td></tr><tr><td><b>30% 儲蓄與投資 (Savings)</b></td><td><b>定期定額買 0050/VOO ETF + 預備金。</b></td><td><b>$4,500 元</b> (累積未來資產!)</td></tr><tr><td><b>20% 娛樂與想要 (Wants)</b></td><td>聚餐、治裝、旅遊、遊戲娛樂。</td><td><b>$3,000 元</b> (生活樂趣)</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 30/50/20 個人預算分配模型</div>",
      "en": "<h3>📐 Perfect Budget System for Student $15,000 NTD Wages</h3><table class=\"data-table\"><thead><tr><th>Allocation Ratio</th><th>Category & Explanation</th><th>$15k Student Wage Example</th></tr></thead><tbody><tr><td><b>50% Essential Needs</b></td><td>Rent, meals, transport, basic bills.</td><td><b>$7,500 NTD</b> (Basic living)</td></tr><tr><td><b>30% Savings & Investment</b></td><td><b>DCA into 0050 ETF + Emergency fund.</b></td><td><b>$4,500 NTD</b> (Wealth growth!)</td></tr><tr><td><b>20% Lifestyle Wants</b></td><td>Dining out, travel, games, hobbies.</td><td><b>$3,000 NTD</b> (Life fun)</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: CFP 30/50/20 Personal Budgeting Model</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "緊急預備金", "en": "Emergency Fund" },
    "title": { "zh": "緊急預備金 (Emergency Fund) 水庫：留足 3 ~ 6 個月生活費", "en": "Emergency Funds: Keeping 3-6 Months Living Cash Safe" },
    "content": {
      "zh": "<h3>🛡️ 面臨突發失業、生病事故時的財務安全護甲</h3><p><b>緊急預備金 (Emergency Fund)</b> 專門用來處理突發極端事故（如打工店家倒閉、機車故障修車、生病住院）：</p><div class=\"formula-box\">$$\\text{緊急預備金水庫} = \\text{每月必要生活費 (如 12,000 元)} \\times 3 \\sim 6 \\text{ 個月} = 3.6 \\text{ 萬 } \\sim 7.2 \\text{ 萬元}$$</div><p><b>停放管道</b>：必須存放在<b>數位帳戶 2.5% 高利活存</b>，兼顧極高流動性與利息效益！絕不能拿去買股票。</p><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 緊急預備金標準</div>",
      "en": "<h3>🛡️ Your Financial Shield Against Sudden Job Loss or Illness</h3><p>An <b>Emergency Fund</b> covers sudden crisis events (store closure, accident repair):</p><div class=\"formula-box\">$$\\text{Emergency Reserve} = \\text{Monthly Needs (\$12k)} \times 3 \sim 6 \text{ Months} = \$36,000 \sim \$72,000 \text{ NTD}$$</div><p><b>Where to Keep It</b>: Store in high-yield digital savings accounts for instant liquid access!</p><div class=\"data-source-badge\">📌 Source: Certified Financial Planner Emergency Reserve Rules</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "需要 vs 想要", "en": "Needs vs Wants" },
    "title": { "zh": "辨識「需要 (Needs)」vs.「想要 (Wants)」：記帳 App 與消費坑", "en": "Needs vs. Wants: Expense Tracking Apps & Impulse Traps" },
    "content": {
      "zh": "<h3>🛒 買東西前問自己：這是生存必需品，還是滿足慾望？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🍎 需要 (Needs - 必買)</h4><p>沒有它無法生存或正常上課打工（如三餐白飯、通勤公車票、教科書）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>☕ 想要 (Wants - 可省)</h4><p>沒有它依然活得很好（如每天一杯 150 元星巴克、最新款 iPhone 16 Pro、限量球鞋）。</p></div></div><div class=\"highlight-box\">💡 <b>延遲享樂法則 (Delayed Gratification)</b>：看到想買的東西，先強制冷靜 48 小時！過後往往發現自己根本不需要。</div><div class=\"data-source-badge\">📌 資料來源：行為經濟學《過度消費心理學》</div>",
      "en": "<h3>🛒 Ask Before Buying: Is It Essential or Impulse Desire?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🍎 Needs (Must Have)</h4><p>Essential for basic survival or school/work (meals, bus fare, textbooks).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>☕ Wants (Nice to Have)</h4><p>Life goes on fine without it ($150 Starbucks daily, latest iPhone, sneakers).</p></div></div><div class=\"highlight-box\">💡 <b>48-Hour Delay Rule</b>: Wait 48 hours before non-essential purchases; impulse urges disappear!</div><div class=\"data-source-badge\">📌 Source: Behavioral Economics Consumer Psychology</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "還債優先順序", "en": "Debt Payoff" },
    "title": { "zh": "債務管理優先順序：雪球法 (Snowball) vs. 雪崩法 (Avalanche)", "en": "Debt Elimination Strategies: Snowball vs. Avalanche" },
    "content": {
      "zh": "<h3>⚡ 當身上有多筆債務時，如何科學化還清債務？</h3><table class=\"data-table\"><thead><tr><th>還債策略</th><th>清理優先順序</th><th>優缺點與心理效應</th></tr></thead><tbody><tr><td><b>1. 數學雪崩法 (Avalanche)</b> 🌟</td><td><b>先還「利率最高」的債務！</b>（如 15% 信用卡卡債 ➔ 機車分期 ➔ 1.65% 學貸）。</td><td><b>數學上最省利息！</b>最快速減少利息總負擔。</td></tr><tr><td><b>2. 心理雪球法 (Snowball)</b></td><td><b>先還「金額最小」的債務！</b>（無視利率大小）。</td><td><b>心理成就感高！</b>快速消除債務筆數，獲得成就感。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：Dave Ramsey《Total Money Makeover》還債架構</div>",
      "en": "<h3>⚡ Scientific Strategies for Eliminating Multiple Debts</h3><table class=\"data-table\"><thead><tr><th>Strategy</th><th>Payoff Priority</th><th>Pros & Cons Comparison</th></tr></thead><tbody><tr><td><b>1. Avalanche Method</b> 🌟</td><td><b>Pay highest interest rates first!</b> (15% Credit card -> Scooter -> 1.65% Student loan).</td><td><b>Saves most interest mathematically!</b> Minimizes total interest.</td></tr><tr><td><b>2. Snowball Method</b></td><td><b>Pay smallest balance first!</b> (Regardless of interest rates).</td><td><b>High psychological wins!</b> Clears debt counts quickly for motivation.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Dave Ramsey's Total Money Makeover Framework</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "學貸理性償還", "en": "Student Loans" },
    "title": { "zh": "學生貸款 (Student Loans) 緩繳條款、利息補貼與理性償還", "en": "Student Loans: Subsidized Rates & Rational Repayment" },
    "content": {
      "zh": "<h3>🎓 善用政府低利學貸，不必急著一次清償！</h3><ul><li><b>在學期間利息補貼</b>：在學期間利息由政府全額補貼，畢業後滿 1 年才開始還本付息。</li><li><b>低利條件 (約 1.65%)</b>：學貸利率極低（僅 1.65%），遠低於通膨率與股票投資報酬率。</li><li><b>理性償還策略</b>：有餘錢時優先拿去定期定額買 0050 ETF (年化 8%)，按月正常還學貸即可，不必提前急著全數還清！</li></ul><div class=\"data-source-badge\">📌 資料來源：教育部高級中等以上學校學生就學貸款作業要點</div>",
      "en": "<h3>🎓 Leverage Low-Interest Student Loans; Don't Rush Early Offs!</h3><ul><li><b>In-School Interest Subsidies</b>: Interest fully covered by government during college years.</li><li><b>Ultra-Low Rate (~1.65%)</b>: Student loan rates (~1.65%) are far below inflation and 0050 returns.</li><li><b>Rational Strategy</b>: Pay minimum installments; invest surplus in 0050 ETF for 8% returns!</li></ul><div class=\"data-source-badge\">📌 Source: Ministry of Education Student Loan Guidelines</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "人生5大財務目標", "en": "5 Life Goals" },
    "title": { "zh": "人生 5 大財務目標：畢業積蓄、購車、結婚、買房與退休", "en": "5 Major Life Financial Goals: Graduation to Retirement" },
    "content": {
      "zh": "<h3>🗺️ 依據時間軸量化個人一生所需資本</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 短期目標 (1-4 年)</h4><p>大學畢業第一桶金 (30萬元)、急難預備金水庫、語言檢定或留學費用。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 中期目標 (5-10 年)</h4><p>結婚創業預算、購車、買房自備頭期款 (200萬元)。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. 長期目標 (15-40 年)</h4><p>子女教育基金、退休金累積 (F.I.R.E. 1,500 萬元資產水庫)。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 生涯目標量化模型</div>",
      "en": "<h3>🗺️ Quantifying Financial Capital Across Your Lifetime</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Short-Term Goals (1-4 Yrs)</h4><p>Graduation nest egg ($300k), emergency fund, study abroad savings.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Mid-Term Goals (5-10 Yrs)</h4><p>Wedding budgets, car purchase, home down payment ($2M).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. Long-Term Goals (15-40 Yrs)</h4><p>Children education funds, retirement nest egg ($15M F.I.R.E. pool).</p></div></div><div class=\"data-source-badge\">📌 Source: CFP Lifetime Goal Quantification Framework</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "時間複利槓桿", "en": "Time Compounding" },
    "title": { "zh": "時間複利 (Compound Interest) 槓桿：20歲每月 3,000 元的百萬威力", "en": "Time Compounding Power: $3,000/mo at Age 20 Grows to Millions" },
    "content": {
      "zh": "<h3>🚀 越早開始，時間複利幫你賺的錢遠超過你的本金！</h3><p><b>試算</b>：從 20 歲大一開始，每月定期定額 <b>3,000 元</b> 投入年化報酬率 8% 之全市場 ETF：</p><div class=\"formula-box\">$$\\text{30 年後 (50歲)}: \\text{總投入本金 } \$1,080,000 \\text{ 元} \\rightarrow \\text{總資產滾存至 } \\mathbf{\$4,470,000 \\text{ 元！}}$$</div><p><b>結論</b>：複利效果中，<b>「時間」比「本金」更重要！</b>20 歲開始每月存 3,000 元，輕鬆碾壓 35 歲才開始每月存 10,000 元的人！</p><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 複利時間槓桿試算</div>",
      "en": "<h3>🚀 Starting Early Means Time Makes More Money Than Your Principal!</h3><p><b>Simulation</b>: Investing <b>$3,000 NTD/mo</b> into an 8% ETF starting at age 20:</p><div class=\"formula-box\">$$\text{After 30 Yrs (Age 50)}: \text{Total Principal } \$1.08\text{M} \rightarrow \text{Compound Wealth: } \mathbf{\$4,470,000 \text{ NTD!}}$$</div><p><b>Conclusion</b>: In compounding, <b>Time beats Principal!</b> Starting at 20 beats starting at 35 with larger amounts!</p><div class=\"data-source-badge\">📌 Source: CFP Time Leverage Compounding Models</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "FIRE與4%法則", "en": "FIRE & 4% Rule" },
    "title": { "zh": "財務獨立提早退休 (F.I.R.E.)：4% 法則 (4% Rule) 資產水庫", "en": "Financial Independence Retire Early (F.I.R.E.) & 4% Rule" },
    "content": {
      "zh": "<h3>🔥 打造靠被動投資收益過日子的財務自由水庫</h3><p><b>F.I.R.E. 運動 (Financial Independence, Retire Early)</b> 與 <b>4% 法則</b>：</p><div class=\"formula-box\">$$\\text{F.I.R.E. 退休目標資產} = \\text{每年預計生活費 (如 60 萬元)} \\times 25 = 1,500 \\text{ 萬元}$$</div><p>當你累積到 1,500 萬元投資在全市場 ETF 時，每年提領 4% (60萬元) 作為生活費，剩餘資產持續抗通膨滾存，實現提早退休不工作也不用擔心沒錢的財務自由！</p><div class=\"data-source-badge\">📌 資料來源：Trinity Study 4% Rule 財務自由模型</div>",
      "en": "<h3>🔥 Living off Passive Investment Returns for Lifetime Freedom</h3><p>The <b>F.I.R.E. Movement</b> and Trinity Study <b>4% Rule</b>:</p><div class=\"formula-box\">$$\\text{F.I.R.E. Target Wealth} = \\text{Annual Expenses (\$600k)} \times 25 = \$15,000,000 \text{ NTD}$$</div><p>With $15M invested in ETFs, withdrawing 4% ($600k/yr) covers living costs while principal grows!</p><div class=\"data-source-badge\">📌 Source: Trinity Study 4% Rule Financial Freedom Model</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>發薪日先儲蓄</b>：翻轉公式（收入 - 儲蓄 = 消費）；執行 30/50/20 黃金分配比例。</li><li><b>預備金與債務</b>：留足 3-6 個月生活費；雪崩法優先還清 15% 卡債。</li><li><b>時間複利與 FIRE</b>：20 歲每月 3,000 元 30 年滾存 447 萬；4% 法則打造自由水庫。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 現金流試算器」</b> 按鈕，輸入打工月薪與各項花費，精算 30/50/20 分配與你的緊急預備金水庫！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Pay Yourself First</b>: Income - Savings = Expenses; follow the 30/50/20 allocation.</li><li><b>Reserves & Debts</b>: Maintain 3-6 months cash; clear 15% credit card debts first.</li><li><b>Time & FIRE</b>: $3,000/mo at 20 grows to $4.47M; apply the 4% Rule for FIRE.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate your 30/50/20 budget!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "img": "images/w12_balance_sheet.jpg",
    "hour": 3,
    "tag": { "zh": "財務4大健全指標", "en": "4 Health Ratios" },
    "title": { "zh": "個人財務健全度 4 大比例指標（儲蓄率、負債比、流動比、投資比）", "en": "4 Key Personal Financial Health Metrics" },
    "content": {
      "zh": "<h3>📐 健檢個人財務強健度的四大客觀數據</h3><table class=\"data-table\"><thead><tr><th>指標名稱</th><th>算術公式</th><th>理想健康門檻標準</th></tr></thead><tbody><tr><td><b>1. 月儲蓄率 (Savings Ratio)</b></td><td>`月儲蓄投資金額 / 月總收入 * 100%`</td><td><b>>= 20% ~ 30%</b> 🌟</td></tr><tr><td><b>2. 高利負債比 (Bad Debt Ratio)</b></td><td>`高利負債 (卡債) / 月總收入 * 100%`</td><td><b>嚴格保持 0%！</b></td></tr><tr><td><b>3. 流動性比率 (Liquidity Ratio)</b></td><td>`流動資產 / 月必要支出`</td><td><b>保持 3 ~ 6 個月</b></td></tr><tr><td><b>4. 投資資產比 (Investment Ratio)</b></td><td>`投資性資產 / 個人總淨值 * 100%`</td><td><b>>= 50%</b> (避免全留現金被通膨吃掉)</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 個人財務健檢標準表</div>",
      "en": "<h3>📐 4 Objective Metrics Assessing Personal Financial Strength</h3><table class=\"data-table\"><thead><tr><th>Metric Name</th><th>Calculation Formula</th><th>Ideal Healthy Threshold</th></tr></thead><tbody><tr><td><b>1. Savings Ratio</b></td><td>`Monthly Savings / Monthly Income * 100%`</td><td><b>>= 20% - 30%</b> 🌟</td></tr><tr><td><b>2. Bad Debt Ratio</b></td><td>`High-Interest Debt / Monthly Income * 100%`</td><td><b>Strictly 0%!</b></td></tr><tr><td><b>3. Liquidity Ratio</b></td><td>`Liquid Assets / Monthly Expenses`</td><td><b>Maintain 3 - 6 Months</b></td></tr><tr><td><b>4. Investment Ratio</b></td><td>`Investment Assets / Net Worth * 100%`</td><td><b>>= 50%</b> (Beats inflation)</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Certified Financial Planner Health Check Metrics</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "自動化多帳戶", "en": "Multi-Account System" },
    "title": { "zh": "打造自動化個人財務水庫：多帳戶分流管理法", "en": "Building an Automated Multi-Account Financial System" },
    "content": {
      "zh": "<h3>🤖 靠自動化系統約束人性，輕鬆實現零意志力理財</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>帳戶 A：發薪主帳戶 (Income Hub)</h4><p>打工薪資入帳處。發薪日自動設定轉帳至帳戶 B、C、D。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>帳戶 B：投資累積帳戶 (30%)</h4><p>自動扣款買 0050/VOO ETF，資產金雞母只進不出。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>帳戶 C：預備金帳戶 (2.5%高利活存)</h4><p>存放 3-6 個月生活費緊急預備金，平時絕不動用。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>帳戶 D：生活消費帳戶 (50%+20%)</h4><p>綁定簽帳卡，當月日常食宿與娛樂花費從此帳戶扣款。</p></div></div><div class=\"data-source-badge\">📌 資料來源：個人自動化理財系統設計架構</div>",
      "en": "<h3>🤖 Automating Your Money Flow for Zero-Willpower Savings</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Account A: Income Hub</h4><p>Wage deposit hub. Auto-transfers out on payday to Accounts B, C, D.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>Account B: Investment Pool (30%)</h4><p>Auto-drives DCA into 0050 ETF; compounding wealth builder.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>Account C: Emergency Reserve</h4><p>Holds 3-6 months cash in 2.5% digital savings accounts.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>Account D: Daily Expense Account</h4><p>Linked to debit card; handles all monthly living and leisure expenses.</p></div></div><div class=\"data-source-badge\">📌 Source: Automated Personal Financial System Architecture</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "家庭財務分工", "en": "Family Finance" },
    "title": { "zh": "婚前與家庭財務管理：雙薪家庭共同基金與財務分工", "en": "Pre-marital & Family Finance: Dual-Income Shared Funds" },
    "content": {
      "zh": "<h3>💑 談錢不傷感情！建立理性透明的雙人財務機制</h3><ul><li><b>AA制 vs 按收入比例分攤</b>：雙薪家庭建議採「按收入比例分攤法」（如薪資比 6:4，共同開銷亦按 6:4 投入公積金）。</li><li><b>設立家庭共同公積金帳戶</b>：每月各自提撥固定比例金額至公積金，用於房貸、水電、餐費與子女教育。</li><li><b>保留個人獨立自由帳戶</b>：公積金之外，雙方保留個人獨立帳戶自由支配，兼顧共同目標與個人自主。</li></ul><div class=\"data-source-badge\">📌 資料來源：家庭理財與婚姻財務諮商標準指南</div>",
      "en": "<h3>💑 Transparent Financial Systems for Dual-Income Couples</h3><ul><li><b>Proportional Contribution Rule</b>: Dual earners contribute based on income ratios (e.g. 60/40) to joint funds.</li><li><b>Joint Family Operating Account</b>: Auto-transfer fixed amounts monthly for rent, utilities, groceries, and kids.</li><li><b>Individual Freedom Accounts</b>: Retain separate personal accounts beyond joint funds for individual autonomy.</li></ul><div class=\"data-source-badge\">📌 Source: Family Financial Planning & Marriage Counseling Guide</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "理財防詐護甲", "en": "Anti-Scam Armor" },
    "title": { "zh": "個人財務資安：防範投資詐騙社群飆股群組與資金盤 (Ponzi)", "en": "Personal Financial Security: Rejecting LINE Stock Scams & Ponzi Schemes" },
    "content": {
      "zh": "<h3>🛡️ 守護個人辛苦積攢的資產淨值！警惕詐騙話術</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 詐騙陷阱 3 特徵</h4><p>1. 宣稱「保證獲利、穩賺不賠」；2. 要求加入 Telegram/LINE 飆股簡訊群組；3. 要求匯款至個人不知名虛擬帳戶。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 理性投資鐵律</h4><p>凡是宣稱保證年化報酬率 > 10% 且無風險者，100% 是詐騙資金盤 (Ponzi Scheme)！堅決只在金管會核准之合法券商與銀行交易。</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙專線警訊</div>",
      "en": "<h3>🛡️ Protecting Your Hard-Earned Net Worth from Financial Scams</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 3 Scam Characteristics</h4><p>1. Claiming \"Guaranteed Profits\"; 2. Asking to join private LINE groups; 3. Asking for transfers to unknown accounts.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Rational Investment Rule</h4><p>Guaranteed returns > 10% without risk are 100% Ponzi Schemes! Trade exclusively through FSC-regulated brokers.</p></div></div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Scam Hotline Warning</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "主計總處數據", "en": "DGBAS Portal" },
    "title": { "zh": "實證數據調取：主計總處家庭收支調查 (dgbas.gov.tw) 查閱", "en": "Retrieving Real Data: DGBAS Family Income Portal Guide" },
    "content": {
      "zh": "<h3>🌐 手把手教大一學生查詢台灣各所得階層之收支數據</h3><ul><li><b>查詢每戶可支配收入</b>：登入 `dgbas.gov.tw` 查詢全台前 20% 高收入戶 vs 後 20% 低收入戶收支差距。</li><li><b>查詢消費支出結構</b>：查閱台灣家戶在食品、居住、醫療與教育上的平均消費比例。</li><li><b>個人財務定位</b>：將個人月收支與全台同年齡層統計數據比對，設定客觀理財目標。</li></ul><div class=\"data-source-badge\">📌 資料來源：行政院主計總處家庭收支調查官方 Portal</div>",
      "en": "<h3>🌐 Querying Taiwan Income Quintile & Expenditure Data</h3><ul><li><b>Query Disposable Income</b>: Check DGBAS stats across top 20% vs bottom 20% income quintiles.</li><li><b>Analyze Consumption Ratios</b>: Check average family spending on food, housing, medical, and education.</li><li><b>Personal Financial Benchmarking</b>: Benchmark your cash flows against national peer averages.</li></ul><div class=\"data-source-badge\">📌 Source: DGBAS Family Income Survey Portal</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "生涯理財 4 大金律", "en": "4 Financial Rules" },
    "title": { "zh": "大一新鮮人個人生涯理財 4 大金律", "en": "4 Golden Rules of Life Financial Planning for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性生涯理財與富足心態</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>📊 1. 定期盤點資產負債表</h4><p>每季編製個人 BS，專注提升「個人淨值」，而非比較炫耀性消費。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>💰 2. 堅持先儲蓄後消費</h4><p>發薪日自動設定 30% 轉入 0050 ETF，留足 3-6 個月緊急預備金。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🚀 3. 善用時間複利槓桿</h4><p>20 歲開始每月 3,000 元定期定額，讓時間成為你最有力的致富盟友。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. 遠離 15% 高利卡債</h4><p>信用卡每月全額繳清，遠離卡債黑洞，堅持只在正規券商投資。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與理財規劃師 (CFP) 保護原則</div>",
      "en": "<h3>🛡️ Lifetime Financial Wisdom for College Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>📊 1. Audit Balance Sheets Quarterly</h4><p>Focus on growing Net Worth over flex spending.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>💰 2. Practice Pay Yourself First</h4><p>Auto-transfer 30% into 0050 ETF on payday; keep 3-6 months cash.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🚀 3. Harness Time Compounding</h4><p>Start $3,000/mo at age 20 to let compounding do the heavy lifting.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. Eliminate 15% Credit Card Debt</h4><p>Pay credit cards in full monthly; avoid bad debt traps.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & CFP Consumer Protection Principles</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "大學30萬積蓄SOP", "en": "$300k Savings SOP" },
    "title": { "zh": "理財試算實例：大學四年滾存 30 萬元畢業第一桶金 SOP", "en": "Practical Case: Saving $300k Graduation Nest Egg in 4 Years" },
    "content": {
      "zh": "<h3>💡 大一到大四：每月儲蓄 5,000 元的畢業百萬戰略</h3><ul><li><b>每月儲蓄目標</b>：打工月薪 15,000 元，按 30% 比例先儲蓄 <b>4,500~5,000 元</b>。</li><li><b>投資標的</b>：定期定額買入 0050 / VOO 全市場市值型 ETF (年化 8%)。</li><li><b>4 年累積成果</b>：`每月 5,000 元 * 48 個月 = 24 萬本金 + 複利收益約 6 萬元 = ` <span style=\"color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;\">30 萬元畢業第一桶金！</span></li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案資產累積組</div>",
      "en": "<h3>💡 4-Year Action Plan: $5,000/mo to Build $300k at Graduation</h3><ul><li><b>Monthly Savings Target</b>: Save 30% ($4,500-$5,000 NTD) out of $15,000 NTD student wages.</li><li><b>Investment Vehicle</b>: Monthly DCA into 0050 / VOO market-cap ETFs (8% returns).</li><li><b>4-Year Graduation Result</b>: `$5k * 48 mos = $240k principal + $60k compounding = ` <span style=\"color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;\">$300,000 NTD Nest Egg!</span></li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II Asset Accumulation Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "終身財務自由藍圖", "en": "Master Financial Blueprint" },
    "title": { "zh": "生涯財務自主與終身財富自由藍圖", "en": "Financial Autonomy & Lifetime Wealth Freedom Blueprint" },
    "content": {
      "zh": "<h3>🌈 財富自由不是不用工作，而是擁有選擇生活的權利！</h3><p>理財的終極目的不是追求物質奢華，而是為自己與家人換取<b>時間自由、安全感與人生選擇權</b>。透過本課程累積的完整財經素養：</p><ol><li><b>不焦慮、不盲從</b>：面對市場波動與媒體飆股話術，堅守被動指數化投資。</li><li><b>掌控個人命運</b>：透過健康的淨值與現金流，勇敢追求個人職涯與生活夢想！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🌈 Financial Freedom Means the Power to Choose Your Life</h3><p>The ultimate goal of personal finance is purchasing <b>Time Freedom, Security, and Options</b>. With complete financial literacy:</p><ol><li><b>Stay Calm & Independent</b>: Ignore market noise and stick to passive index investing.</li><li><b>Master Your Destiny</b>: Pursue career dreams backed by healthy net worth and cash flows!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十二週全景知識體系圖與觀念整合", "en": "Week 12 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十二週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>資產負債表 (Hour 1)</b>：BS vs CF 兩大支柱 ➔ 資產=負債+淨值公式 ➔ 3類資產 (流動/投資/使用) ➔ 2類負債 (良性/惡性) ➔ 新鮮人淨值計算 ➔ 全台家戶資產統計 ➔ 淨現金流公式。</p><p><b>現金流與 FIRE (Hour 2)</b>：先儲蓄後消費算術 ➔ 30/50/20 黃金法則 ➔ 3-6個月緊急預備金水庫 ➔ 需要vs想要 ➔ 雪球vs雪崩還債 ➔ 學貸理性償還 ➔ 人生5大目標 ➔ 20歲時間複利 ➔ FIRE 4%法則。</p><p><b>健檢與實戰 (Hour 3)</b>：4大財務健全比例 ➔ 自動化多帳戶分流 ➔ 雙薪家庭財務分工 ➔ 165防詐護甲 ➔ 主計總處Portal ➔ 大學4年滾存30萬SOP ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 12 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Balance Sheet (Hour 1)</b>: BS vs CF ➔ Assets = Liabilities + NW ➔ 3 Asset Types ➔ Good vs Bad Debt ➔ Net Worth Case ➔ Family Wealth Data ➔ Net Cash Flow.</p><p><b>Cash Flow & FIRE (Hour 2)</b>: Pay Yourself First ➔ 30/50/20 Rule ➔ 3-6 Mo Emergency Fund ➔ Needs vs Wants ➔ Avalanche Debt Payoff ➔ 5 Life Goals ➔ Time Compounding ➔ 4% Rule.</p><p><b>Health & Action (Hour 3)</b>: 4 Health Ratios ➔ Multi-Account System ➔ Couple Finance ➔ Anti-Scam ➔ DGBAS Portal ➔ $300k College Savings SOP ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十三週預告 (半導體產業、護國神山台積電與台灣科技供應鏈)", "en": "Reflections & Week 13 Preview (Semiconductor & TSMC Ecosystem)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十二週「個人與家庭資產負債表、現金流管理與生涯理財規劃」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人資產負債表編製與生涯理財計畫」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十三週課程預告：半導體產業、護國神山台積電與台灣科技供應鏈</h4><p>下週我們將踏入產業探索領域！解密台灣護國神山<b>台積電 (2330) 晶圓代工霸主地位、IC 設計製造封測分工、先進製程 CoWoS 技術與台灣科技矽島生態系！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 12!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your Balance Sheet & Life Plan.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 13 Preview: Semiconductor Industry & TSMC Ecosystem</h4><p>Next week we begin Industry Exploration! Unlocking TSMC (2330) Foundry dominance, IC design vs OSAT, advanced N2/CoWoS packaging, and Taiwan's Silicon Island supply chain!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
    }
  }
];

// --- APP STATE & ENGINE ---
let currentSlideIndex = 0;
let filteredSlides = [...slidesData];
let currentLang = 'zh';

// Canvas Annotation State
let isDrawing = false;
let currentTool = 'off'; // 'off', 'pen', 'highlighter'
let penColor = '#F43F5E';
let canvas, ctx;

document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderSlide();
  renderGridView();
  window.addEventListener('resize', resizeCanvas);
});

function setLanguage(lang) {
  currentLang = lang;
  renderSlide();
  renderGridView();
}

function renderSlide() {
  const container = document.getElementById('slideContainer');
  if (!container || filteredSlides.length === 0) return;

  const slide = filteredSlides[currentSlideIndex];
  const total = slidesData.length;

  container.innerHTML = `
    <div class="slide-card">
      <div class="slide-header">
        <span class="slide-tag">Hour ${slide.hour} • ${slide.tag[currentLang]}</span>
        <span class="slide-number">SLIDE ${String(slide.id).padStart(2, '0')} / ${String(total).padStart(2, '0')}</span>
      </div>
      <h1 class="slide-title">${slide.title[currentLang]}</h1>\n      ${slide.img ? `<div class="slide-img-box" style="margin: 1rem 0; text-align: center;"><img class="slide-img" src="${slide.img}" alt="Visual Data" style="max-height: 250px; border-radius: 12px; width: 100%; object-fit: cover; border: 1px solid rgba(255,255,255,0.12);"></div>` : ""}
      <div class="slide-content">${slide.content[currentLang]}</div>
    </div>
  `;

  // Update progress bar
  const fill = document.getElementById('progressFill');
  if (fill) {
    fill.style.width = `${(slide.id / total) * 100}%`;
  }

  // Trigger MathJax rendering if present
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise([container]).catch((err) => console.log(err));
  }
}

function nextSlide() {
  if (currentSlideIndex < filteredSlides.length - 1) {
    currentSlideIndex++;
    renderSlide();
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    renderSlide();
  }
}

function goToSlide(index) {
  if (index >= 0 && index < slidesData.length) {
    filteredSlides = [...slidesData];
    currentSlideIndex = index;
    renderSlide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function filterHour(hour, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  if (hour === 'all') {
    filteredSlides = [...slidesData];
  } else {
    filteredSlides = slidesData.filter(s => s.hour === hour);
  }
  currentSlideIndex = 0;
  renderSlide();
}

function searchSlides() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  filteredSlides = slidesData.filter(s => 
    s.title.zh.toLowerCase().includes(query) ||
    s.title.en.toLowerCase().includes(query) ||
    s.content.zh.toLowerCase().includes(query) ||
    s.content.en.toLowerCase().includes(query)
  );
  currentSlideIndex = 0;
  renderSlide();
}

// --- CANVAS ANNOTATION TOOLBAR ---
function initCanvas() {
  canvas = document.getElementById('annotationCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  // Touch Support
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    startDrawing({ clientX: touch.clientX, clientY: touch.clientY });
  });
  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    draw({ clientX: touch.clientX, clientY: touch.clientY });
  });
  canvas.addEventListener('touchend', stopDrawing);
}

function resizeCanvas() {
  if (!canvas) return;
  const container = document.querySelector('.presentation-section');
  if (container) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
}

function setTool(tool) {
  currentTool = tool;
  document.querySelectorAll('.toolbar-container .tool-btn').forEach(b => b.classList.remove('active'));
  if (tool === 'pen') {
    document.getElementById('toolPen').classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
  } else if (tool === 'highlighter') {
    document.getElementById('toolHighlighter').classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
  } else {
    if (canvas) canvas.classList.remove('drawing-mode');
  }
}

function setPenColor(color, element) {
  penColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  if (element) element.classList.add('active');
}

function startDrawing(e) {
  if (currentTool === 'off' || !ctx || !canvas) return;
  isDrawing = true;
  const rect = canvas.getBoundingClientRect();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!isDrawing || currentTool === 'off' || !ctx || !canvas) return;
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (currentTool === 'pen') {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 1.0;
  } else if (currentTool === 'highlighter') {
    ctx.strokeStyle = penColor + '66';
    ctx.lineWidth = 18;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function stopDrawing() {
  if (!isDrawing) return;
  isDrawing = false;
  ctx.closePath();
}

function clearCanvas() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => {});
    }
  }
}

// --- MODAL CONTROLS & CALCULATORS ---

// HOUR 1 MODAL: Personal Balance Sheet Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateNetWorth() {
  const liquidAssets = parseFloat(document.getElementById('liquidAssetInput').value) || 30000;
  const investAssets = parseFloat(document.getElementById('investAssetInput').value) || 50000;
  const useAssets = parseFloat(document.getElementById('useAssetInput').value) || 30000;
  const shortDebts = parseFloat(document.getElementById('shortDebtInput').value) || 20000;
  const longDebts = parseFloat(document.getElementById('longDebtInput').value) || 40000;

  const totalAssets = liquidAssets + investAssets + useAssets;
  const totalLiabilities = shortDebts + longDebts;
  const netWorth = totalAssets - totalLiabilities;

  const resultDiv = document.getElementById('netWorthResult');
  resultDiv.innerHTML = `
    📊 <b>個人資產負債表與淨值算術結果</b>：<br>
    • <b>個人總資產</b>：$${totalAssets.toLocaleString()} 元 (流動 $${liquidAssets} + 投資 $${investAssets} + 使用 $${useAssets})<br>
    • <b>總負債金額</b>：$${totalLiabilities.toLocaleString()} 元 (短期 $${shortDebts} + 長期 $${longDebts})<br>
    • <b>個人真實淨值 (Net Worth)</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;">$${netWorth.toLocaleString()} 元</span><br>
    💡 <i>繼續堅持先儲蓄後消費，定期買入 0050 ETF，不斷拉高個人淨值！</i>
  `;
}

// HOUR 2 MODAL: 30/50/20 & Emergency Fund Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCashFlowRule() {
  const monthlyIncome = parseFloat(document.getElementById('monthlyIncomeInput').value) || 15000;
  
  const needs50 = monthlyIncome * 0.50;
  const savings30 = monthlyIncome * 0.30;
  const wants20 = monthlyIncome * 0.20;

  const emergencyLow = needs50 * 3;
  const emergencyHigh = needs50 * 6;

  const resultDiv = document.getElementById('cashFlowResult');
  resultDiv.innerHTML = `
    📐 <b>30/50/20 黃金分配與緊急預備金試算結果</b> (月收入 $${monthlyIncome.toLocaleString()} 元)：<br>
    • <b>50% 必要生活費 (Needs)</b>：<span style="color:var(--accent-sky); font-weight:bold;">$${needs50.toLocaleString()} 元/月</span><br>
    • <b>30% 預先儲蓄與投資 (Savings)</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">$${savings30.toLocaleString()} 元/月</span> (用於定期定額買 0050 ETF)<br>
    • <b>20% 樂享想要 (Wants)</b>：<span style="color:var(--accent-gold); font-weight:bold;">$${wants20.toLocaleString()} 元/月</span><br>
    🛡️ <b>個人緊急預備金水庫目標 (3~6個月必要開銷)</b>：<span style="color:var(--accent-purple); font-weight:bold;">$${emergencyLow.toLocaleString()} ~ $${emergencyHigh.toLocaleString()} 元</span> (存於高利活存)
  `;
}

// HOUR 3 GAME: Life Financial Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：個人淨值 (Net Worth) 公式",
    question: "衡量個人真實財富價值的黃金恆等式中，個人淨值 (Net Worth) 是如何計算出來的？",
    options: [
      { text: "個人總資產 + 總負債", correct: false },
      { text: "個人總資產 - 總負債", correct: true },
      { text: "每月打工薪資乘以 12", correct: false },
      { text: "銀行信用卡額度上限", correct: false }
    ],
    explain: "個人淨值 = 個人總資產 - 總負債！淨值才是你真正擁有的淨財富。"
  },
  {
    level: 2,
    title: "關卡 2：理財成功黃金公式",
    question: "理財達人堅持的「先儲蓄、後消費 (Pay Yourself First)」發薪日致富公式是哪一個？",
    options: [
      { text: "收入 - 消費 = 儲蓄 (剩多少存多少)", correct: false },
      { text: "收入 - 預先儲蓄投資 = 可消費金額", correct: true },
      { text: "收入 + 卡債 = 可消費金額", correct: false },
      { text: "只消費完全不儲蓄", correct: false }
    ],
    explain: "發薪日第一天先轉出 20%-30% 儲蓄投資，剩餘的錢才用來消費，輕鬆達成理財目標！"
  },
  {
    level: 3,
    title: "關卡 3：30/50/20 預算分配法則",
    question: "在 30/50/20 個人黃金預算分配法則中，30% 的預算比例應該分配至哪一個用途？",
    options: [
      { text: "購買奢侈品與娛樂", correct: false },
      { text: "預先儲蓄、緊急預備金與定期定額投資 ETF", correct: true },
      { text: "支付房屋租金與三餐", correct: false },
      { text: "借給朋友", correct: false }
    ],
    explain: "30% 用於預先儲蓄與投資（買 0050 ETF），50% 用於必要生活，20% 用於娛樂享受！"
  },
  {
    level: 4,
    title: "關卡 4：F.I.R.E. 4% 法則目標資產",
    question: "根據 F.I.R.E. 提早退休 4% 法則，若你預計退休後每年需要 60 萬元生活費，你的財務自由資產水庫目標是多少？",
    options: [
      { text: "600 萬元", correct: false },
      { text: "1,500 萬元 (每年生活費 60 萬 × 25)", correct: true },
      { text: "5,000 萬元", correct: false },
      { text: "100 萬元", correct: false }
    ],
    explain: "F.I.R.E. 目標資產 = 每年生活費 × 25（即 60萬 × 25 = 1,500 萬元）。每年提領 4% 作為生活費！"
  }
];

let currentGameIndex = 0;
let userScore = 0;

function openGameModal() {
  const modal = document.getElementById('gameModal');
  if (modal) {
    modal.classList.add('active');
    currentGameIndex = 0;
    userScore = 0;
    renderGameQuestion();
  }
}

function closeGameModal() {
  const modal = document.getElementById('gameModal');
  if (modal) modal.classList.remove('active');
}

function renderGameQuestion() {
  const container = document.getElementById('gameQuestionContainer');
  if (!container) return;

  if (currentGameIndex >= gameQuestions.length) {
    let badgeText = userScore === 400 ? "🏆 生涯理財達人徽章 (Financial Life Master)" : "🥉 理財初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十二週「個人與家庭資產負債表與生涯理財」核心觀念！</p>
        </div>
        <button class="btn btn-primary" onclick="openGameModal()">🔄 再挑戰一次</button>
      </div>
    `;
    return;
  }

  const q = gameQuestions[currentGameIndex];
  let optionsHtml = q.options.map((opt, idx) => `
    <button class="btn btn-outline" style="width:100%; text-align:left; margin-bottom:0.6rem; padding:0.75rem 1rem;" onclick="checkAnswer(${opt.correct})">
      ${String.fromCharCode(65 + idx)}. ${opt.text}
    </button>
  `).join('');

  container.innerHTML = `
    <div class="game-card">
      <div style="display:flex; justify-content:space-between; color:var(--text-sub); font-size:0.9rem; margin-bottom:0.5rem;">
        <span>${q.title}</span>
        <span>得分: ${userScore}</span>
      </div>
      <h3 style="color:var(--accent-sky); margin-bottom:1rem;">${q.question}</h3>
      <div class="options-group">${optionsHtml}</div>
      <div id="explainBox" style="display:none; margin-top:1rem; padding:0.8rem; background:rgba(56,189,248,0.15); border-left:4px solid var(--accent-sky); font-size:0.95rem;"></div>
    </div>
  `;
}

function checkAnswer(isCorrect) {
  const explainBox = document.getElementById('explainBox');
  const q = gameQuestions[currentGameIndex];

  if (isCorrect) {
    userScore += 100;
    explainBox.innerHTML = `✅ <b>回答正確！(+100分)</b><br>${q.explain}`;
    explainBox.style.color = "var(--accent-emerald)";
  } else {
    explainBox.innerHTML = `❌ <b>回答錯誤！</b><br>${q.explain}`;
    explainBox.style.color = "var(--accent-rose)";
  }
  explainBox.style.display = "block";

  setTimeout(() => {
    currentGameIndex++;
    renderGameQuestion();
  }, 2200);
}

// HOMEWORK MODAL
function openHomeworkModal() {
  const modal = document.getElementById('homeworkModal');
  if (modal) modal.classList.add('active');
}
function closeHomeworkModal() {
  const modal = document.getElementById('homeworkModal');
  if (modal) modal.classList.remove('active');
}
function submitW12Homework(e) {
  e.preventDefault();
  alert("🎉 第十二週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
  closeHomeworkModal();
}

function renderGridView() {
  const grid = document.getElementById('slidesGridView');
  if (!grid) return;
  grid.innerHTML = slidesData.map(s => `
    <div class="mini-slide-card" onclick="goToSlide(${s.id - 1})">
      <div class="mini-slide-num">SLIDE ${String(s.id).padStart(2, '0')} • Hour ${s.hour} (${s.tag[currentLang]})</div>
      <div class="mini-slide-title">${s.title[currentLang]}</div>
      <div class="mini-slide-preview">${s.content[currentLang].replace(/<[^>]*>?/gm, '').substring(0, 90)}...</div>
    </div>
  `).join('');
}
