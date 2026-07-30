/**
 * 115 學年度「管理探索二」第六週：數位金融、高利活存與銀行業變革
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w6_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第六週課程導論：數位金融、高利活存與銀行業變革", "en": "Week 6 Intro: Digital Banking, High-Yield Savings & Transformation" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>📱 從實體分行到手機口袋銀行：解碼數位金融革命</h2><p>「比爾·蓋茲名言：銀行服務是必要的，但實體銀行不是！(Banking is necessary, banks are not!)」</p></div><p>歡迎來到第六週！大一新鮮人剛踏入大學，第一件金融大事通常就是開立戶頭與申辦第一張信用卡/簽帳卡。近年純網銀（LINE Bank、樂天、將來銀行）與數位存款帳戶推出高達 3%~8% 的高利活存吸引年輕人，但這些優惠條件有何算術眉角？本單元將帶領大家拆解商業銀行運作、高利活存算術與支付點數經濟。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：商業銀行本質</h4><p>銀行是吸收存款與發放貸款的中介機構，靠存放款利差 (NIM) 盈利。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：數位帳戶算術</h4><p>高利活存通常附帶「金額上限」與「指定任務」，需精算實質收益。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 銀行局 / 中央銀行 (CBC)</div>",
      "en": "<div class=\"hero-box\"><h2>📱 From Brick-and-Mortar Branches to Pocket Banking</h2><p>\"Bill Gates: Banking is necessary, banks are not!\"</p></div><p>Welcome to Week 6! Opening your first digital account and getting a credit/debit card is a key milestone. Digital banks offer 3%-8% high-yield savings to attract Gen-Z. We will deconstruct commercial banking, yield caps, and credit card cashback math.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Banking Business Model</h4><p>Banks act as intermediaries earning profits from Net Interest Margins (NIM).</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Digital Account Math</h4><p>High-yield rates come with balance caps and monthly mission requirements.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau / Central Bank of the ROC (CBC)</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第六週 3 小時學習地圖與核心技能樹", "en": "Week 6 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>商業銀行本質與數位帳戶</b> (Slide 01 - 10)<br>存放款淨利差 (NIM)、信用創造、全台 2,300 萬數位帳戶、純網銀三雄與存保 300 萬保障</td><td>🎯 <b>1小時活動</b>：數位帳戶高利活存與利息試算盤</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>支付革命與點數經濟陷阱</b> (Slide 11 - 20)<br>支付演進、信用卡生態系、現金回饋算術、點數過期陷阱、分期 0% 迷思與循環利息</td><td>🎯 <b>2小時活動</b>：信用卡現金回饋與海外手續費計算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>資安防護與新鮮人理財實戰</b> (Slide 21 - 30)<br>2FA 雙重驗證、釣魚防詐、人頭帳戶警告、大一開戶配置策略與聯徵信用分數</td><td>🎮 <b>3小時小遊戲</b>：數位金融達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：數位帳戶權益比較與防詐防護報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 6 3-Hour (180 Mins) Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Commercial Banking & Digital Accounts</b> (Slide 01 - 10)<br>Net Interest Margin (NIM), Neobanks, High-Yield Savings & Deposit Insurance</td><td>🎯 <b>Hour 1 Activity</b>: Digital Savings Interest Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Payments & Rewards Economy Traps</b> (Slide 11 - 20)<br>Credit Ecosystem, FX Fee Math, Points Traps, 0% Installments & Revolving Credit</td><td>🎯 <b>Hour 2 Activity</b>: Credit Card Cashback & Fee Math Checker</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Security & Freshmen Finance Battle</b> (Slide 21 - 30)<br>2FA Security, Phishing Defense, Money Laundering Warning & Credit Score</td><td>🎮 <b>Hour 3 Game</b>: Digital Banking Master Challenge<br>📝 <b>Class Assignment</b>: Digital Banking & Security Plan Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "銀行模式", "en": "Banking Model" },
    "title": { "zh": "商業銀行的核心商業模式：存款、放款與淨利差 (NIM)", "en": "The Core Business Model of Commercial Banks: NIM" },
    "content": {
      "zh": "<h3>🏦 銀行是如何靠「錢」賺錢的？</h3><p>商業銀行 (Commercial Banks) 的本質是<b>金融中介 (Financial Intermediary)</b>。銀行向大眾吸收存款並支付低利息，再將資金貸放給購屋族或企業並收取高利息：</p><div class=\"formula-box\">$$\\text{淨利差 (Net Interest Margin, NIM)} = \\text{貸款平均利率 (Loan Rate)} - \\text{存款平均利率 (Deposit Rate)}$$</div><div class=\"concept-grid\"><div class=\"concept-card\"><h4>📥 吸收存款 (Deposits)</h4><p>支付活存利率 0.8% 或定存利率 1.7% 給一般民眾。</p></div><div class=\"concept-card\"><h4>📤 放款融資 (Loans)</h4><p>收取房貸 2.2%、車貸 4.0% 或信貸 6.0% 的利息收益。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 銀行存放款加權平均利率統計</div>",
      "en": "<h3>🏦 How Do Banks Profit From Money?</h3><p>Commercial banks act as financial intermediaries, gathering funds from depositors at low rates and lending to borrowers at higher rates:</p><div class=\"formula-box\">$$\\text{Net Interest Margin (NIM)} = \\text{Loan Interest Rate} - \\text{Deposit Interest Rate}$$</div><div class=\"concept-grid\"><div class=\"concept-card\"><h4>📥 Taking Deposits</h4><p>Pays 0.8% savings interest or 1.7% time deposit interest to depositors.</p></div><div class=\"concept-card\"><h4>📤 Issuing Loans</h4><p>Charges 2.2% mortgage, 4.0% auto loan, or 6.0% personal loan rates to borrowers.</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Weighted Average Interest Rates</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "信用創造", "en": "Money Creation" },
    "title": { "zh": "信用創造機制：銀行如何「憑空製造貨幣」？", "en": "Fractional Reserve Banking: How Banks Create Money" },
    "content": {
      "zh": "<h3>🎩 金融魔術：部分準備金制度 (Fractional Reserve Banking)</h3><p>假設央行要求<b>準備金比率 (Reserve Requirement) 為 10%</b>，當小明存入 10,000 元到銀行時，神奇的信用創造鏈啟動了：</p><ol><li>銀行保留 1,000 元做準備金，將 9,000 元貸款給小華。</li><li>小華拿 9,000 元買手機，店家把 9,000 元存回銀行。</li><li>銀行再保留 900 元準備金，將 8,100 元貸款給小強...</li></ol><div class=\"formula-box\">$$\\text{貨幣乘數 (Money Multiplier)} = \\frac{1}{\\text{法定準備率 (Reserve Ratio)}} = \\frac{1}{10\\%} = 10 \\text{ 倍}$$</div><p><b>結論</b>：最初的 10,000 元現金，經過銀行體系多次存放款後，可以在社會上創造出高達 <b>100,000 元的廣義貨幣 (M2)</b>！</p><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 貨幣供給量 M1A, M1B, M2 統計說明</div>",
      "en": "<h3>🎩 Financial Magic: Fractional Reserve Money Creation</h3><p>Assuming a 10% Reserve Ratio, when $10,000 is deposited, money multiplier kicks in:</p><ol><li>Bank keeps $1,000 reserve and loans out $9,000 to Person B.</li><li>Person B spends $9,000; the merchant deposits $9,000 back into the bank.</li><li>Bank keeps $900 reserve and loans out $8,100...</li></ol><div class=\"formula-box\">$$\\text{Money Multiplier} = \\frac{1}{\\text{Reserve Ratio}} = \\frac{1}{10\\%} = 10x$$</div><p>Initial $10,000 cash can create up to <b>$100,000 in broad money supply (M2)</b>!</p><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Money Supply Guides</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "傳統 vs 數位", "en": "Traditional vs Digital" },
    "title": { "zh": "傳統銀行實體分行 vs. 數位存款帳戶 (Digital Savings)", "en": "Traditional Branches vs. Digital Savings Accounts" },
    "content": {
      "zh": "<h3>🏢 為什麼數位帳戶給得起 3%~8% 的超高活存利率？</h3><table class=\"data-table\"><thead><tr><th>比較項目</th><th>傳統實體銀行分行 (Traditional Branch)</th><th>數位存款帳戶 / 純網銀 (Digital Bank)</th></tr></thead><tbody><tr><td><b>營運成本</b></td><td>高（昂貴黃金店面租金、水電、大量櫃員薪資）</td><td><b>極低（無實體店面，全自動化伺服器運作）</b></td></tr><tr><td><b>開戶與服務</b></td><td>需臨櫃排隊查驗，營業時間 09:00-15:30</td><td><b>24/7 手機 App 雙證件拍照線上即時開戶</b></td></tr><tr><td><b>活存利率</b></td><td>低（約 0.8% / 年）</td><td><b>高（優惠加碼 2.0% ~ 8.0% / 年）</b></td></tr><tr><td><b>行銷策略</b></td><td>靠品牌信用與實體據點吸引顧客</td><td>將節省的租金薪資回饋給年輕人搶市佔率</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 銀行局數位存款帳戶業務規範</div>",
      "en": "<h3>🏢 Why Can Digital Accounts Offer 3%-8% Interest Rates?</h3><table class=\"data-table\"><thead><tr><th>Feature</th><th>Traditional Bank Branch</th><th>Digital Savings Account</th></tr></thead><tbody><tr><td><b>Operating Cost</b></td><td>High (Prime rents, utilities, large staff salaries)</td><td><b>Ultra-Low (No physical branches, automated)</b></td></tr><tr><td><b>Account Opening</b></td><td>In-person queueing (09:00-15:30)</td><td><b>24/7 Mobile App Photo ID Verification</b></td></tr><tr><td><b>Savings Rate</b></td><td>Low (~0.8% / year)</td><td><b>High Promo Rates (2.0% - 8.0% / year)</b></td></tr><tr><td><b>Marketing Strategy</b></td><td>Brand reputation & physical presence</td><td>Passes rent savings to Gen-Z to win market share</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau Digital Account Regulations</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "實證數據", "en": "Empirical Data" },
    "title": { "zh": "實證數據：全台數位存款帳戶突破 2,300 萬戶", "en": "Empirical Data: Taiwan Digital Accounts Pass 23M" },
    "content": {
      "zh": "<h3>🇹🇼 大學生人人必備：數位帳戶強勁普及統計</h3><p>根據金管會 2026 最新統計，台灣數位存款帳戶總開戶數已強勢突破 <b>2,350 萬戶</b>（平均每位國人擁有 1 戶以上）：</p><table class=\"data-table\"><thead><tr><th>類別順序</th><th>代表銀行 / 帳戶名稱</th><th>開戶數與熱門優惠特質</th></tr></thead><tbody><tr><td><b>第一類 (傳統銀行數位戶)</b></td><td>台新 Richart、國泰世華 CUBE、永豐 DAWHO、聯邦 New New Bank</td><td>用戶數突破 <b>1,800 萬戶</b>，結合信用卡與跨轉免手續費。</td></tr><tr><td><b>第二類 (純網路銀行)</b></td><td>LINE Bank (連線銀行)、樂天國際銀行、將來銀行</td><td>純網銀總戶數突破 <b>380 萬戶</b>，主打生態圈點數回饋。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 銀行局 2026 最新數位帳戶統計報告</div>",
      "en": "<h3>🇹🇼 Digital Accounts Penetration Exceeds 23.5 Million</h3><p>FSC official statistics show Taiwan's total digital accounts have passed <b>23.5 Million</b>:</p><table class=\"data-table\"><thead><tr><th>Category</th><th>Representative Accounts</th><th>Key Account Features</th></tr></thead><tbody><tr><td><b>Traditional Bank Digitals</b></td><td>Taishin Richart, Cathay CUBE, SinoPac DAWHO, Union New New</td><td>> <b>18 Million accounts</b>; integrated with credit card points & free transfers.</td></tr><tr><td><b>Neobanks (Pure Internet)</b></td><td>LINE Bank, Rakuten Bank, NEXT Bank</td><td>> <b>3.8 Million accounts</b>; focuses on ecosystem rewards and instant transfers.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau Digital Banking Official Quarterly Report</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "純網銀三雄", "en": "Neobanks Trio" },
    "title": { "zh": "純網銀 (Neobanks) 革命：LINE Bank、樂天、將來銀行三雄比對", "en": "Taiwan Neobanks Trio: LINE Bank, Rakuten & NEXT Bank" },
    "content": {
      "zh": "<h3>⚔️ 無實體分行的「純網路銀行」特色與生態圈比對</h3><table class=\"data-table\"><thead><tr><th>純網銀名稱</th><th>背後股東與生態圈支援</th><th>大一新鮮人最實用亮點功能</th></tr></thead><tbody><tr><td><b>LINE Bank (連線商業銀行)</b></td><td>LINE 台灣、台北富邦、聯邦銀行、渣打銀行</td><td>內建於 LINE 聊天室，<b>好友轉帳免記帳號</b>，LINE Points 即時入帳。</td></tr><tr><td><b>樂天國際商業銀行</b></td><td>日本樂天集團 (Rakuten)、國票金控</td><td>主打<b>樂天點數生態圈</b>與日本旅遊跨境優惠，定存彈性極高。</td></tr><tr><td><b>NEXT Bank (將來商業銀行)</b></td><td>中華電信、兆豐銀行、新光集團、全聯</td><td>提供<b>口袋帳戶自行劃分自由</b>，跨轉跨提每月高額免費次數。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：各純網銀 2026 官方公開財務報告與權益公告</div>",
      "en": "<h3>⚔️ Comparing Taiwan's 3 Licensed Neobanks</h3><table class=\"data-table\"><thead><tr><th>Neobank Name</th><th>Ecosystem Backers</th><th>Key Highlights for Freshmen</th></tr></thead><tbody><tr><td><b>LINE Bank</b></td><td>LINE, Fubon Bank, Union Bank, Standard Chartered</td><td>Built inside LINE app; <b>transfers money to chat friends instantly</b>.</td></tr><tr><td><b>Rakuten Bank</b></td><td>Japan Rakuten Group, Waterland Financial</td><td>Integrated with <b>Rakuten points ecosystem</b> and Japan travel benefits.</td></tr><tr><td><b>NEXT Bank</b></td><td>Chunghwa Telecom, Mega Bank, Shin Kong Group, PX Mart</td><td>Customizable <b>pocket savings buckets</b> and high free monthly transfer limits.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Official Financial Disclosures of LINE Bank, Rakuten & NEXT Bank</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "高利活存算術", "en": "Yield Cap Math" },
    "title": { "zh": "拆解高利活存真相：牌告利率 vs. 優惠利率限額算術", "en": "Deconstructing High-Yield Savings: Rate Caps & Conditions" },
    "content": {
      "zh": "<h3>⚠️ 宣稱 8% 高利活存，為什麼存 10 萬元一個月只拿到幾百塊？</h3><p>大一新鮮人常被廣告大字「活存利率 8%」吸引，卻忽視了行銷條款細則中的<b>「金額上限」與「指定任務」</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🔍 陷阱 1：超低金額上限 (Cap)</h4><p>8% 高利僅限金額 <b>10,000 元以內</b>！超過 1 萬部分回歸普通活存利率 (0.8%)。</p><p><i>算術</i>：$10,000 \\times 8\\% \\div 12 = \\text{每月僅 66 元利息！}$</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>🔍 陷阱 2：繁複解鎖任務 (Missions)</h4><p>必須完成「指定公用事業扣繳、每月刷卡 5 次、外幣開戶」才能享有優惠。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行與公平交易委員會 (FTC) 不實廣告裁罰案例</div>",
      "en": "<h3>⚠️ Why Does an 8% Savings Rate Only Pay $66 a Month on $100k?</h3><p>Freshmen are drawn to headline \"8% High Yield\" ads without reading fine print caps and monthly mission requirements:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🔍 Trap 1: Ultra-Low Balance Cap</h4><p>8% rate only applies up to <b>$10,000 NTD</b>! Balances above $10k yield base rate (0.8%).</p><p><i>Math</i>: $10,000 × 8% ÷ 12 = <b>Only $66 NTD interest per month!</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>🔍 Trap 2: Complex Monthly Missions</h4><p>Requires monthly bill auto-debit, 5 card swipes, and foreign currency accounts.</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank & Fair Trade Commission (FTC) Disclosures</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "存款保險", "en": "Deposit Insurance" },
    "title": { "zh": "中央存款保險公司 (CDIC) 300 萬元保障機制", "en": "Deposit Insurance Protection up to $3M NTD by CDIC" },
    "content": {
      "zh": "<h3>🛡️ 純網銀倒閉我的錢會消失嗎？認識存保安全防禦</h3><p>不論是傳統銀行還是純網銀，只要是經金管會核准設核的參加存保機構，均享有<b>中央存款保險公司 (CDIC)</b> 的法定保障：</p><ul><li><b>保障最高限額</b>：每一存款人在同一家銀行的本金加上利息，最高保障額度為 <b>新台幣 300 萬元</b>。</li><li><b>保障範圍</b>：台幣存款、外幣存款、高利活存與支票存款均涵蓋在內（不含基金、ETF與投資型保單）。</li><li><b>保費來源</b>：由銀行每年繳納保險費給 CDIC，<b>存款人完全不需支付任何費用！</b></li></ul><div class=\"data-source-badge\">📌 資料來源：中央存款保險公司 (CDIC) 存款保險條例與保障額度說明</div>",
      "en": "<h3>🛡️ Will My Money Vanish if a Neobank Fails? CDIC Protection</h3><p>All licensed Taiwanese banks and neobanks are protected by Central Deposit Insurance Corporation (CDIC):</p><ul><li><b>Max Coverage Cap</b>: Principal plus interest guaranteed up to <b>$3,000,000 NTD</b> per depositor per bank.</li><li><b>Covered Accounts</b>: TWD deposits, FX deposits, and high-yield savings (excludes funds & ETFs).</li><li><b>Zero Cost to You</b>: Insurance premiums are paid by banks to CDIC; free for depositors.</li></ul><div class=\"data-source-badge\">📌 Source: Central Deposit Insurance Corporation (CDIC) Regulations</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>銀行商業模式</b>：依靠存放款利差 (NIM) 盈利；透過部分準備金實現信用創造。</li><li><b>數位帳戶優勢</b>：省下實體店面租金與人力，回饋高利活存給年輕顧客。</li><li><b>優惠與安全</b>：精算高利活存額度上限；認明 CDIC 300 萬元存款保障。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 活存試算盤」</b> 按鈕，輸入預計存款金額（例如 50,000 元）與各帳戶優惠條件，精算你的實質年化利息！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Banking Model</b>: Profits from NIM; expands money supply via fractional reserve.</li><li><b>Digital Accounts</b>: Saves physical branch costs to offer high-yield promotional rates.</li><li><b>Caps & Safety</b>: Calculate interest caps carefully; rely on CDIC's $3M NTD guarantee.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate your real annual interest payout!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "支付演進", "en": "Payment Evolution" },
    "title": { "zh": "支付方式大演進：現金 ➔ 塑膠卡片 ➔ 行動支付 (Apple Pay, TWQR)", "en": "Payment Evolution: Cash to Cards to Mobile Payments" },
    "content": {
      "zh": "<h3>📲 出門不再帶錢包！三大支付型態的比對</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💵 1. 實體現金 (Cash)</h4><p><b>特徵</b>：匿名性高，但無任何消費回饋，遺失無法找回。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>💳 2. 塑膠卡片 (Cards)</h4><p><b>特徵</b>：簽帳卡/信用卡，提供現金回饋與延後付款。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>📱 3. 行動支付 (Mobile)</h4><p><b>特徵</b>：Apple/Google Pay (NFC感應)與 LINE Pay / 街口 / TWQR (掃碼支付)。</p></div></div><div class=\"data-source-badge\">📌 資料來源：財金資訊公司 (FISC) 全民通用支付 TWQR 規範</div>",
      "en": "<h3>📲 Leaving Wallets Behind: 3 Generations of Payments</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💵 1. Physical Cash</h4><p>Anonymous, but zero cashback rewards and high loss risk.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>💳 2. Plastic Cards</h4><p>Debit/Credit cards; offers cashback and deferred payment benefits.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>📱 3. Mobile Payments</h4><p>NFC (Apple/Google Pay) and QR Code (LINE Pay, JKO, TWQR).</p></div></div><div class=\"data-source-badge\">📌 Source: Financial Information Service Co. (FISC) TWQR Standards</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "信用卡生態系", "en": "Credit Ecosystem" },
    "title": { "zh": "信用卡交易四角架構：發卡行、收單行、清算機構與手續費", "en": "Credit Card Ecosystem: Issuers, Acquirers & Networks" },
    "content": {
      "zh": "<h3>💳 當你在超商刷卡 100 元時，後台發生了什麼事？</h3><p>信用卡刷卡交易包含四大核心角色與<b>手續費拆解 (Interchange Fee)</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏦 1. 發卡銀行 (Issuer)</h4><p>核發信用卡給持卡人，承擔客戶先消費後還款的信用風險。</p></div><div class=\"concept-card\"><h4>🏪 2. 收單銀行 (Acquirer)</h4><p>為商家安裝刷機並結算資金，向商家收取 1.5%~2.5% 手續費。</p></div><div class=\"concept-card\"><h4>🌐 3. 清算組織 (Networks)</h4><p>Visa、Mastercard、JCB、銀聯，處理全球跨國交易訊息轉接與結算。</p></div><div class=\"concept-card\"><h4>🛍️ 4. 商家 (Merchant)</h4><p>負擔刷卡手續費，以換取顧客免帶現金的便利性與高客單價。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Visa & Mastercard 國際組織刷卡手續費拆解規範</div>",
      "en": "<h3>💳 What Happens Behind a $100 Card Swipe?</h3><p>Credit card transaction flow involves 4 core actors and Interchange Fees:</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏦 1. Card Issuer</h4><p>Issues card to customer, bearing credit risk of deferred payments.</p></div><div class=\"concept-card\"><h4>🏪 2. Merchant Acquirer</h4><p>Installs POS terminals for merchants and charges 1.5%-2.5% merchant fees.</p></div><div class=\"concept-card\"><h4>🌐 3. Payment Networks</h4><p>Visa, Mastercard, JCB; routes and clears global cross-border messages.</p></div><div class=\"concept-card\"><h4>🛍️ 4. Merchant</h4><p>Pays merchant discount fees to enable frictionless sales.</p></div></div><div class=\"data-source-badge\">📌 Source: Visa & Mastercard Interchange Fee Rules</div>"
    }
  },
  {
    "id": 13,
    "img": "images/w6_apy_compare.jpg",
    "hour": 2,
    "tag": { "zh": "回饋與手續費算術", "en": "FX Fee Math" },
    "title": { "zh": "信用卡現金回饋算術：國內 2% / 國外 3% 與海外交易手續費", "en": "Credit Card Cashback Math & 1.5% Foreign FX Transaction Fees" },
    "content": {
      "zh": "<h3>✈️ 海外刷卡標榜 3% 回饋，為什麼扣掉手續費後只賺 1.5%？</h3><p>當你在國外網站刷卡或去日本韓國旅遊刷卡時，銀行會收取<b>1.5% 海外交易國際手續費</b> (1.0% 清算組織費 + 0.5% 發卡行處理費)。</p><div class=\"formula-box\">$$\\text{海外刷卡實質淨回饋率} = \\text{宣稱海外回饋率 (如 3.0\\%)} - \\text{法定海外手續費 (1.5\\%)} = \\text{淨賺 1.5\\%}$$</div><div class=\"highlight-box\">⚠️ <b>注意 DDC 雙幣轉換陷阱</b>：在外國店家刷卡時，若選擇「結算新台幣 (DDC)」，會被收取高達 <b>4%~5% 的極惡劣匯率轉換費！</b> 永遠記得勾選「當地貨幣（如日圓/美元）」結算。</div><div class=\"data-source-badge\">📌 資料來源：金管會銀行局信用卡海外交易手續費揭露範本</div>",
      "en": "<h3>✈️ Overseas 3% Cashback Only Netting You 1.5%?</h3><p>Foreign transactions incur a mandatory <b>1.5% Foreign Transaction Fee</b> (1.0% Network + 0.5% Issuer):</p><div class=\"formula-box\">$$\\text{Net Overseas Reward} = \\text{Advertised Reward (3.0\\%)} - \\text{FX Fee (1.5\\%)} = \\text{Net 1.5\\%}$$</div><div class=\"highlight-box\">⚠️ <b>Beware DDC Dynamic Currency Conversion</b>: Always choose local currency (JPY/USD). Selecting TWD at foreign checkout incurs a terrible 4%-5% markup fee!</div><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau Overseas FX Fee Disclosure Rules</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "點數經濟", "en": "Points Economy" },
    "title": { "zh": "點數經濟 (Points Economy)：LINE Points、街口幣與過期陷阱", "en": "The Points Economy: LINE Points & Expiration Traps" },
    "content": {
      "zh": "<h3>🪙 點數是替代貨幣還是行銷鴉片？</h3><p>許多信用卡放棄現金回饋，改發放自家點數（如 LINE Points、街口幣、玉山 Pi 幣、P 幣）。1 點等於 1 元新台幣，可用於消費折抵。</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎯 點數經濟的好處</h4><p>消費折抵零門檻，快速累積用於買咖啡或折抵停車費。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⏳ 點數的過期陷阱 (Expiration)</h4><p>部分點數具備 <b>180 天效期限制</b>！若未注意效期，辛苦累積的幾千點會在深夜自動歸零，形成銀行的「過期回沖收益 (Breakage)」。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國消費者文教基金會 (消基會) 點數效應調查</div>",
      "en": "<h3>🪙 Are Reward Points Alternative Money or Marketing Opium?</h3><p>Cards issue points (LINE Points, JKO Coins) where 1 Point = $1 NTD discount.</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎯 Benefits</h4><p>Zero-threshold consumer discounts for daily groceries or coffee.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⏳ Expiration Traps</h4><p>Many points expire after <b>180 days</b>! Unused points vanish, returning unearned profits to banks (Breakage).</p></div></div><div class=\"data-source-badge\">📌 Source: Consumers' Foundation ROC Points Economy Survey</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "分期付款迷思", "en": "0% Installment Myths" },
    "title": { "zh": "分期付款 (Installments) 的心理誘惑與實質利率算術", "en": "The Psychology & Math of 0% Interest Installments" },
    "content": {
      "zh": "<h3>🛍️ 買 30,000 元手機分 12 期「月付 2,500」真的沒負擔嗎？</h3><p>商家與銀行最喜歡推廣「單筆滿額 0 利率分期」。心理學研究顯示：<b>分期付款會模糊消費者的疼痛感</b>，讓人誤以為自己消費得起超越負擔能力的高價商品。</p><div class=\"highlight-box\">⚠️ <b>分期付款 2 大隱藏代價</b>：1. 許多信用卡規定「分期消費不再享有現金/點數回饋」；2. 若忘了按時繳納，0% 利率會瞬間終止並啟動高達 <b>15% 的違約金與循環利息！</b></div><div class=\"data-source-badge\">📌 資料來源：金融消費評議中心 (FOI) 信用卡分期糾紛案例</div>",
      "en": "<h3>🛍️ Is $2,500/Month on a $30,000 Phone Really Harmless?</h3><p>Zero-percent installment plans dull financial pain, luring consumers into buying items beyond their means.</p><div class=\"highlight-box\">⚠️ <b>2 Hidden Installment Costs</b>: 1. Installment purchases often disqualify you from cashback rewards; 2. Missing a monthly payment triggers penalties and <b>15% revolving interest rates!</b></div><div class=\"data-source-badge\">📌 Source: Financial Ombudsman Institution (FOI) Installment Disputes</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "循環利息陷阱", "en": "Revolving Debt" },
    "title": { "zh": "循環信用利息 (Revolving Credit Interest) 的高利黑洞", "en": "The Debt Trap: Revolving Credit Interest Rates up to 15%" },
    "content": {
      "zh": "<h3>💀 為什麼信用卡只繳「最低應繳金額」會讓人萬劫不復？</h3><p>當月帳單 20,000 元，如果你只繳納了「最低應繳金額」（如 2,000 元），剩下的 18,000 元將啟動高達 <b>6%~15% 的年化循環利息！</b></p><div class=\"formula-box\">$$\\text{循環利息計息起算日} = \\text{入帳日 (非繳款截止日！)}$$</div><p><b>可怕真相</b>：循環利息是從「商家入帳當天」開始按日計息，而且當月所有新刷卡消費都失去預期免息期！連續只繳最低應繳金額，利滾利幾年後將負債累累。</p><div class=\"data-source-badge\">📌 資料來源：金管會銀行局信用卡循環信用利息計息標準規範</div>",
      "en": "<h3>💀 Why Paying Only the Minimum Balance Destroys Your Wealth</h3><p>Paying only the minimum amount ($2,000) on a $20,000 balance subjects the remaining $18,000 to annual revolving interest rates up to <b>15%</b>!</p><div class=\"formula-box\">$$\\text{Interest Start Date} = \\text{Posting Date (Not Due Date!)}$$</div><p><b>Shocking Truth</b>: Revolving interest calculates daily from posting date, stripping grace periods from all new purchases.</p><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau Revolving Credit Calculation Rules</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "開放銀行", "en": "Open Banking" },
    "title": { "zh": "開放銀行 (Open Banking) API 與三階段架構", "en": "Open Banking Architecture: 3-Phase Open API Rollout" },
    "content": {
      "zh": "<h3>🌐 讓你的金融數據回歸你自己！開放 API 原理</h3><p>過去你的存款紀錄與信用卡帳單被鎖在各家銀行封閉的資料庫裡。<b>開放銀行 (Open Banking)</b> 透過開放 API 界面，在獲得客戶授權後，讓第三方服務業者 (TSP) 整合你的金融數據：</p><ul><li><b>第一階段（公開商品查詢）</b>：整合各銀行利率與信用卡優惠比較 App。</li><li><b>第二階段（客戶資訊提供）</b>：在單一 App（如麻布記帳）跨行查閱你所有銀行的資產總額。</li><li><b>第三階段（交易資訊整合）</b>：直接在第三方 App 上進行跨行扣款與轉帳。</li></ul><div class=\"data-source-badge\">📌 資料來源：財金資訊公司 (FISC) 開放 API 平台運作規範</div>",
      "en": "<h3>🌐 Reclaiming Your Financial Data via Open APIs</h3><p>Open Banking uses secure open APIs, allowing Third-Party Providers (TSPs) to integrate your scattered multi-bank data under your authorization:</p><ul><li><b>Phase 1 (Public Info)</b>: Aggregate rate and credit card comparison tools.</li><li><b>Phase 2 (Customer Info)</b>: Multi-bank asset dashboard apps (e.g. Moneybook).</li><li><b>Phase 3 (Transactions)</b>: Direct cross-bank payments from third-party apps.</li></ul><div class=\"data-source-badge\">📌 Source: Financial Information Service Co. (FISC) Open API Specs</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "CBDC 未來", "en": "CBDC Future" },
    "title": { "zh": "中央銀行數位貨幣 (CBDC) 的發展與實體現金未來", "en": "Central Bank Digital Currencies (CBDC) & Cash Future" },
    "content": {
      "zh": "<h3>🏛️ 央行自己發行的數位新台幣？CBDC 與加密貨幣大不同</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🏛️ 央行數位貨幣 (CBDC)</h4><p>由國家中央銀行發行並背書，法償效力 100% 等同實體新台幣，零信用風險。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🪙 去中心化加密貨幣 (Bitcoin / USDT)</h4><p>由演算法或私人公司發行，價格劇烈波動，缺乏國家法償效力。</p></div></div><p style=\"margin-top:1rem;\">台灣央行正進行 CBDC 零售端試驗，未來手機錢包即可離線感應支付官方數位新台幣。</p><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 數位新台幣 (CBDC) 研究報告與試驗進度</div>",
      "en": "<h3>🏛️ Digital TWD Issued by Central Bank: CBDC vs. Crypto</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🏛️ CBDC (Central Bank Digital Currency)</h4><p>Issued and backed directly by the sovereign state; 100% legal tender zero default risk.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🪙 Decentralized Crypto (Bitcoin / USDT)</h4><p>Issued by private code or entities; volatile prices and lacks legal tender status.</p></div></div><p style=\"margin-top:1rem;\">CBC is piloting retail CBDC, paving the way for offline digital TWD mobile payments.</p><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) CBDC Research Report</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "BNPL 先買後付", "en": "BNPL Risks" },
    "title": { "zh": "嵌入式金融 (Embedded Finance)：先買後付 Buy Now Pay Later (BNPL)", "en": "Embedded Finance: Buy Now Pay Later (BNPL) Risks" },
    "content": {
      "zh": "<h3>🛒 沒有信用卡也能無卡分期？無卡族的雙面刃</h3><p>先買後付 (Buy Now Pay Later, BNPL，如 AFTEE、慢點付、中租 Pay) 讓沒有信用卡的學生在電商結帳時，只需手機號碼認證即可分期延後付款。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>👍 方便性</h4><p>免信用審查、免辦卡，適合無固定收入的學生急用買電腦學習。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ 風險警訊</h4><p>缺乏聯徵監管，容易讓人過度擴張信用；逾期將被收取高額遲延利息與違約金！</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) BNPL 業務自律規範</div>",
      "en": "<h3>🛒 Installments Without Credit Cards: The BNPL Double-Edged Sword</h3><p>Buy Now Pay Later (BNPL: AFTEE, ZingPay) lets cardless students split payments via mobile verification.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>👍 Convenience</h4><p>No credit check needed; useful for cardless students buying study equipment.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ Danger</h4><p>Unchecked debt accumulation; late fees and high interest default penalties apply!</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Guidelines for BNPL Providers</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>海外手續費算術</b>：國外刷卡扣除 1.5% 手續費才是淨回饋；拒絕 DDC 雙幣結算。</li><li><b>點數與分期陷阱</b>：注意 180 天點數過期；分期 0% 可能取消回饋，逾期按 15% 循環計息。</li><li><b>金融科技前沿</b>：開放銀行資料共享、CBDC 數位新台幣與 BNPL 理性風險。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 回饋率算術」</b> 按鈕，輸入信用卡宣稱回饋與海外手續費，精算你的實質淨獲利！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>FX Fee Math</b>: Subtract 1.5% FX fees for true net rewards; reject DDC currency conversion.</li><li><b>Points & Debt Traps</b>: Watch 180-day point expirations; paying minimums triggers 15% interest.</li><li><b>Fintech Frontier</b>: Open Banking data sharing, CBDC research, and BNPL credit discipline.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate your net cashback after fees!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "資安防護", "en": "Security 2FA" },
    "title": { "zh": "數位金融安全的防禦第一線：兩步驟驗證 (2FA) 與生物辨識", "en": "Digital Banking Security: 2FA & Biometrics" },
    "content": {
      "zh": "<h3>🔒 保護口袋裡的數位存款：打造不可摧毀的安全堡壘</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\"><h4>🔑 1. 知識因素 (Knowledge)</h4><p>密碼、PIN 碼、圖形鎖。切勿使用生日或 123456。</p></div><div class=\"concept-card\"><h4>📱 2. 持有因素 (Possession)</h4><p>綁定手機裝置、OTP 簡訊驗證碼、Authenticator App。</p></div><div class=\"concept-card\"><h4>👁️ 3. 生物特徵 (Inherence)</h4><p>Face ID 人臉辨識、Touch ID 指紋辨識。</p></div></div><div class=\"highlight-box\">🛡️ <b>黃金鐵律</b>：絕對不要將銀行傳送的 6 位數 OTP 簡訊驗證碼透露給任何人（包含自稱客服或警察）！</div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙諮詢專線資安指引</div>",
      "en": "<h3>🔒 Protecting Your Digital Deposits: 3 Factors of Security</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\"><h4>🔑 1. Knowledge Factor</h4><p>Passwords & PINs; never use birthdays or 123456.</p></div><div class=\"concept-card\"><h4>📱 2. Possession Factor</h4><p>Bound phone device, OTP SMS code, Authenticator App.</p></div><div class=\"concept-card\"><h4>👁️ 3. Biometric Factor</h4><p>Face ID and Touch ID fingerprints.</p></div></div><div class=\"highlight-box\">🛡️ <b>Golden Rule</b>: Never reveal your 6-digit SMS OTP code to anyone under any circumstances!</div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Fraud Campaign Security Guidelines</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "防範釣魚", "en": "Phishing Attacks" },
    "title": { "zh": "全面防範簡訊與通訊軟體釣魚詐騙 (Phishing Attacks)", "en": "Defending Against SMS & Phishing Site Attacks" },
    "content": {
      "zh": "<h3>🎣 假的銀行網站比真的還像！辨識釣魚簡訊陷阱</h3><p>詐騙集團常發送簡訊：「【國泰/富邦】您的帳戶資安異常，請點擊短網址更新密碼否則凍結！」點進去是複製得一模一樣的假銀行網站，一旦輸入帳密與 OTP，數十萬存款秒被轉走。</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>❌ 釣魚簡訊特徵</h4><p>使用怪異域名（如 `.xyz`, `.top` 或拼字錯誤 `tw-cathay.com`），製造急迫恐慌感。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>✅ 正確防禦解法</h4><p>永遠直接透過官方 App 或自行輸入官方域名 (`.com.tw`) 登入，絕不點擊簡訊網址。</p></div></div><div class=\"data-source-badge\">📌 資料來源：國家通訊傳播委員會 (NCC) 暨 165 反詐騙資料庫</div>",
      "en": "<h3>🎣 Fake Bank Websites: Identifying Phishing SMS Traps</h3><p>Scammers send SMS warning \"Account frozen! Click link to verify password!\" Leading to fake websites stealing your login and OTP credentials.</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>❌ Phishing Signs</h4><p>Suspicious URLs (`.xyz`, misspelled domains), creating artificial urgency and panic.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>✅ Defense Rule</h4><p>Log in only via official apps or typing official `.com.tw` domains directly.</p></div></div><div class=\"data-source-badge\">📌 Source: National Communications Commission (NCC) & 165 Database</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "人頭帳戶警告", "en": "Money Laundering" },
    "title": { "zh": "人頭帳戶與洗錢防制法：大一新鮮人絕對不能租借帳戶", "en": "Money Laundering Law: Never Sell or Rent Financial Accounts" },
    "content": {
      "zh": "<h3>⚖️ 「出租金融帳戶一個月給 1 萬」？背後嚴重的刑事代價</h3><p>網路常有徵才廣告求租/買金融帳戶（提款卡+密碼）。大一新鮮人若貪圖小利而出借，將直接觸犯<b>《洗錢防制法》與《刑法》幫助詐欺罪</b>！</p><div class=\"highlight-box\" style=\"background: rgba(244, 63, 94, 0.15); border-left: 4px solid var(--accent-rose);\">🚨 <b>成為警示帳戶的毀滅性後果</b>：1. 全台所有銀行帳戶立刻被凍結管制，無法轉帳、領薪水；2. 面臨最重 3 年以上有期徒刑；3. 與被害人承擔連帶民事賠償責任，信用破產！</div><div class=\"data-source-badge\">📌 資料來源：法務部與最高檢察署洗錢防制法懲處案例宣導</div>",
      "en": "<h3>⚖️ The High Criminal Cost of Renting Out Your Bank Account</h3><p>Ads offering $10,000 to rent your bank card and PIN violate <b>Money Laundering Laws and Fraud Assistance Crimes</b>!</p><div class=\"highlight-box\" style=\"background: rgba(244, 63, 94, 0.15); border-left: 4px solid var(--accent-rose);\">🚨 <b>Devastating Consequences</b>: 1. All personal bank accounts frozen nationwide; 2. Facing up to 3+ years imprisonment; 3. Civil liability to compensate fraud victims!</div><div class=\"data-source-badge\">📌 Source: ROC Ministry of Justice Money Laundering Legal Warnings</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "官方數據", "en": "Official Data" },
    "title": { "zh": "實證數據調取：金管會銀行局與中央銀行利率查詢", "en": "Retrieving Official Data from FSC Banking Bureau & CBC" },
    "content": {
      "zh": "<h3>🌐 拒絕聽信小道消息！直接查詢權威官方金融數據</h3><ul><li><b>金管會銀行局 (bank.gov.tw)</b>：查詢全台數位存款帳戶統計、信用卡裁罰公告與銀行裁罰紀錄。</li><li><b>中央銀行 (cbc.gov.tw)</b>：查詢台灣基準利率、各家銀行存放款平均利率與 CBDC 研究。</li><li><b>中央存款保險公司 (cdic.gov.tw)</b>：查詢特定機構是否具備 300 萬合法存款保險。</li></ul><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 暨中央銀行 (CBC) 官方門戶</div>",
      "en": "<h3>🌐 Querying Authoritative Official Banking Databases</h3><ul><li><b>FSC Banking Bureau (bank.gov.tw)</b>: Digital account statistics and regulatory compliance.</li><li><b>Central Bank (cbc.gov.tw)</b>: Benchmark interest rates, average loan/deposit rates, CBDC progress.</li><li><b>CDIC (cdic.gov.tw)</b>: Verify licensed banks with $3M deposit insurance coverage.</li></ul><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau & Central Bank Portals</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "開戶配置策略", "en": "Account Setup" },
    "title": { "zh": "大一新鮮人數位帳戶組合策略：1 薪轉 + 2 高利活存", "en": "Optimal Multi-Account Setup for Freshmen: 1 Salary + 2 Savings" },
    "content": {
      "zh": "<h3>🏰 理性打造個人數位金融資產堡壘</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏢 1. 薪轉/日常帳戶 (1 戶)</h4><p>實體大銀行（如國泰、中國信託），用於打工薪轉、繳納學雜費與自動扣繳卡費。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 2. 高利活存儲蓄戶 (2 戶)</h4><p>挑選 2 家高利活存純網銀/數位戶（如 LINE Bank、Richart），專款專用儲蓄緊急預備金並賺取 2%~3% 活存利息。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 新鮮人資產配置實務原則</div>",
      "en": "<h3>🏰 Building a Smart Personal Digital Banking Structure</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏢 1. Primary Salary Account (1 Account)</h4><p>Major bank (Cathay, CTBC) for part-time job payroll and bill auto-debits.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 2. High-Yield Savings Accounts (2 Accounts)</h4><p>2 digital accounts (LINE Bank, Richart) for emergency funds yielding 2%-3% interest.</p></div></div><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) Freshmen Allocation Rules</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "聯徵信用紀錄", "en": "JCIC Credit Score" },
    "title": { "zh": "建立個人信用聯徵紀錄 (JCIC)：信用卡全額繳清的重要性", "en": "Building Your JCIC Credit Score: Paying Cards in Full" },
    "content": {
      "zh": "<h3>📊 你的「信用護照」：財團法人金融聯合徵信中心 (JCIC)</h3><p>銀行決定未來要不要借錢給你買房買車，全看你的<b>聯徵信用分數 (300~800 分)</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>👍 加分項目</h4><p>信用卡每月全額按時繳清、長期使用信用卡建立良好往來紀錄（信用長度）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 扣分黑名單</h4><p>動用信用卡循環利息、預借現金、延遲繳款、短期內頻繁向多家銀行送件辦卡（聯徵多次查詢）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：財團法人金融聯合徵信中心 (JCIC) 信用評分說明冊</div>",
      "en": "<h3>📊 Your Financial Passport: JCIC Credit Score (300-800)</h3><p>Future mortgage and auto loan approvals depend heavily on your JCIC score:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>👍 Score Boosters</h4><p>Paying credit card statements in full every month; building a long credit history.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Score Penalties</h4><p>Using revolving credit, cash advances, late payments, or applying for multiple cards at once.</p></div></div><div class=\"data-source-badge\">📌 Source: Joint Credit Information Center (JCIC) Scoring Standards</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "自動化理財", "en": "Automated Transfers" },
    "title": { "zh": "自動扣繳與免費跨轉/跨提次數極致利用技巧", "en": "Automated Savings & Maximizing Free Monthly Transfers" },
    "content": {
      "zh": "<h3>💡 年輕人懶人理財：善用數位帳戶每月免費跨轉次數</h3><p>數位存款帳戶通常提供每月 <b>10 ~ 99 次免費跨行轉帳/提款</b> 優惠。善用自動化工具：</p><ul><li><b>發薪日自動划轉</b>：設定發薪日隔天自動將 3,000 元轉入高利活存帳戶（先儲蓄後消費）。</li><li><b>零手續費轉帳</b>：利用 LINE Bank 或 Richart 的免費轉帳次數分帳給朋友，每年省下數百元手續費（一次 15 元）。</li></ul><div class=\"data-source-badge\">📌 資料來源：各數位存款帳戶免費跨轉跨提次數統計</div>",
      "en": "<h3>💡 Freshmen Automation: Utilizing 10-99 Free Monthly Transfers</h3><p>Digital accounts offer 10-99 free cross-bank transfers per month. Automation tips:</p><ul><li><b>Payday Auto-Transfer</b>: Automatically transfer $3,000 into high-yield accounts on payday.</li><li><b>Zero Transfer Fees</b>: Use free transfers to split dinner bills, saving $15 per fee.</li></ul><div class=\"data-source-badge\">📌 Source: Taiwan Digital Accounts Free Transfer Comparison</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "數位金融4大金律", "en": "4 Golden Rules" },
    "title": { "zh": "大一新鮮人數位金融理性使用 4 大金律", "en": "4 Golden Rules of Digital Finance for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的數位金融安全與理財習慣</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. 信用卡全額按時繳清</h4><p>絕不安按「最低應繳」，遠離 15% 循環利息噩夢。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. 開啟 2FA 絕不透密碼</h4><p>保護 OTP 驗證碼，不點擊任何簡訊短網址。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. 精算高利活存額度</h4><p>看清優惠金額上限，不為解鎖繁複任務而過度消費。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. 絕不出租出借金融帳戶</h4><p>拒絕高價求租誘惑，保護個人清白信用與法律安全。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會銀行局 (FSC) 消費者金融保護原則</div>",
      "en": "<h3>🛡️ Lifetime Digital Banking Wisdom for Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. Pay Credit Cards in Full</h4><p>Never pay minimum balance; stay away from 15% revolving credit.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. Enable 2FA & Keep OTP Secret</h4><p>Never reveal 6-digit OTP codes; ignore SMS text links.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. Calculate Rate Balance Caps</h4><p>Check promo deposit limits before opening new accounts.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. Never Rent or Sell Bank Accounts</h4><p>Reject account renting offers to safeguard your legal status and credit.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Consumer Financial Protection Principles</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第六週全景知識體系圖與觀念整合", "en": "Week 6 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第六週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>商業銀行本質 (Hour 1)</b>：存放款利差 (NIM) ➔ 信用創造乘數 ➔ 數位帳戶成本優勢 ➔ 高利活存上限算術 ➔ CDIC 300 萬存保。</p><p><b>支付與點數陷阱 (Hour 2)</b>：支付演進 ➔ 信用卡生態系 ➔ 海外 1.5% 手續費與 DDC 陷阱 ➔ 180 天點數過期 ➔ 分期與 15% 循環利息 ➔ 開放銀行 & CBDC。</p><p><b>資安與理財實戰 (Hour 3)</b>：2FA 與 OTP 資安 ➔ 防範釣魚簡訊 ➔ 洗錢防制與人頭帳戶警告 ➔ 1薪轉+2數位配置 ➔ JCIC 聯徵分數 ➔ 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 6 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Banking Foundations (Hour 1)</b>: Net Interest Margin ➔ Money Creation ➔ Digital Cost Advantages ➔ High-Yield Caps ➔ CDIC $3M Guarantee.</p><p><b>Payments & Traps (Hour 2)</b>: Payment Ecosystem ➔ FX 1.5% Fees & DDC Traps ➔ 180-Day Point Expiration ➔ 15% Revolving Interest ➔ Open Banking & CBDC.</p><p><b>Security & Practice (Hour 3)</b>: 2FA & OTP Safety ➔ Anti-Phishing ➔ Money Laundering Warning ➔ 1+2 Account Strategy ➔ JCIC Score ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第七週預告 (個人外匯、匯率變動與國際貿易)", "en": "Reflections & Week 7 Preview (Foreign Exchange & International Trade)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第六週「數位金融、高利活存與銀行業變革」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交本週小組數位帳戶權益比較與防詐計畫報告。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第七週課程預告：個人外匯、匯率變動與國際貿易</h4><p>下週我們將帶大家跨出台幣圈，探索 <b>美金與日圓換匯最佳時機、即期 vs 現金匯率算術、央行外匯存底與護國神山出口升貶值影響！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 6!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your digital banking analysis report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 7 Preview: Foreign Exchange & International Trade</h4><p>Next week we will explore currency exchange (USD/JPY), spot vs cash rates, central bank FX reserves, and export exchange rate impacts!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Digital Savings Interest Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateDigitalInterest() {
  const depositAmt = parseFloat(document.getElementById('depositAmtInput').value) || 50000;
  const promoRate = parseFloat(document.getElementById('promoRateInput').value) || 3.5;
  const rateCap = parseFloat(document.getElementById('rateCapInput').value) || 20000;
  const baseRate = parseFloat(document.getElementById('baseRateInput').value) || 0.8;

  let annualInterest = 0;
  if (depositAmt <= rateCap) {
    annualInterest = depositAmt * (promoRate / 100);
  } else {
    annualInterest = (rateCap * (promoRate / 100)) + ((depositAmt - rateCap) * (baseRate / 100));
  }

  const monthlyInterest = annualInterest / 12;
  const effectiveAnnualRate = (annualInterest / depositAmt) * 100;

  const resultDiv = document.getElementById('digitalInterestResult');
  resultDiv.innerHTML = `
    📊 <b>數位帳戶利息試算結果</b>：<br>
    • 存款本金 <b>${depositAmt.toLocaleString()} 元</b>（額度上限 ${rateCap.toLocaleString()} 元）<br>
    • 預估每年可領利息：<b>${Math.round(annualInterest).toLocaleString()} 元</b>（平均每月 <b>${Math.round(monthlyInterest).toLocaleString()} 元</b>）<br>
    • 實質綜合年化利率 (Effective Rate)：<span style="color:var(--accent-emerald); font-weight:bold;">${effectiveAnnualRate.toFixed(2)}%</span><br>
    💡 <i>注意：超過限額的部分僅能享有 ${baseRate}% 基本利率，因此有效利率會隨存款增加而稀釋！</i>
  `;
}

// HOUR 2 MODAL: Credit Card Cashback & FX Fee Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCardCashback() {
  const spendAmt = parseFloat(document.getElementById('spendAmtInput').value) || 10000;
  const cardRate = parseFloat(document.getElementById('cardRateInput').value) || 3.0;
  const isForeign = document.getElementById('isForeignCheckbox').checked;

  const feeRate = isForeign ? 1.5 : 0.0;
  const rawReward = spendAmt * (cardRate / 100);
  const foreignFee = spendAmt * (feeRate / 100);
  const netReward = rawReward - foreignFee;
  const netRewardRate = cardRate - feeRate;

  const resultDiv = document.getElementById('cashbackResult');
  resultDiv.innerHTML = `
    🔍 <b>刷卡回饋與手續費分析</b>：<br>
    • 消費金額：<b>${spendAmt.toLocaleString()} 元</b> | 宣稱回饋率：<b>${cardRate}%</b><br>
    • 扣除海外交易手續費 (${feeRate}%)：<b>-${foreignFee.toFixed(0)} 元</b><br>
    • 實質淨獲得回饋：<span style="color:var(--accent-gold); font-weight:bold;">+${netReward.toFixed(0)} 元</span> (實質淨回饋率 <b>${netRewardRate.toFixed(1)}%</b>)<br>
    💡 <b>消費建議</b>：${netRewardRate > 0 ? "✅ 該卡片實質淨賺，適合使用！" : "⚠️ 手續費高於回饋率，此刷卡不划算！"}
  `;
}

// HOUR 3 GAME: Digital Banking Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：存款保險保障機制",
    question: "在台灣，只要是經政府核准加入存款保險的銀行或純網銀，每一存款人在同一家銀行的本金加利息最高保障額度為多少新台幣？",
    options: [
      { text: "100 萬元", correct: false },
      { text: "300 萬元 (由 CDIC 全額保障)", correct: true },
      { text: "500 萬元", correct: false },
      { text: "無任何保障，倒閉完全歸零", correct: false }
    ],
    explain: "中央存款保險公司 (CDIC) 依法提供每一存款人在同一家機構最高 300 萬元新台幣的法定保障！"
  },
  {
    level: 2,
    title: "關卡 2：海外刷卡手續費算術",
    question: "在國外網站或出國旅遊刷卡時，法定海外交易國際手續費通常為多少？",
    options: [
      { text: "0.5%", correct: false },
      { text: "1.5% (1% 清算組織費 + 0.5% 發卡行手續費)", correct: true },
      { text: "3.0%", correct: false },
      { text: "完全免手續費", correct: false }
    ],
    explain: "海外交易均需收取 1.5% 國際手續費，因此海外刷卡必須挑選回饋率高於 1.5% 的卡片才能真正淨賺！"
  },
  {
    level: 3,
    title: "關卡 3：信用卡循環利息起算點",
    question: "如果信用卡只繳納了「最低應繳金額」，剩餘未繳金額會被啟動最高 15% 的循環利息，請問利息是從哪一天開始計息？",
    options: [
      { text: "繳款截止日當天", correct: false },
      { text: "商家刷卡入帳日當天 (往前溯及！)", correct: true },
      { text: "下個月開帳單當天", correct: false },
      { text: "一年後開始計息", correct: false }
    ],
    explain: "循環利息會往前溯及自「商家刷卡入帳日」開始按日計息，千萬不能只繳最低金額！"
  },
  {
    level: 4,
    title: "關卡 4：數位資安與人頭帳戶防禦",
    question: "收到簡訊稱「您的銀行帳戶密碼安全異常，請立刻點擊短網址更新密碼否則凍結」，你該怎麼辦？",
    options: [
      { text: "立刻點擊簡訊網址輸入密碼與 OTP 驗證碼", correct: false },
      { text: "絕不點擊簡訊網址！直接透過官方 App 或官網處理並撥打 165", correct: true },
      { text: "把密碼傳給 LINE 上的陌生好友幫忙確認", correct: false },
      { text: "立刻把帳戶出租給他人代為保管", correct: false }
    ],
    explain: "這是典型的釣魚簡訊詐騙！銀行絕不會傳送簡訊網址要求輸入密碼或 OTP，點擊網址輸入帳密會被秒盜存款！"
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
    let badgeText = userScore === 400 ? "🏆 數位金融達人徽章 (Fintech Expert)" : "🥉 數位金融初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第六週「數位金融、高利活存與銀行業變革」核心觀念！</p>
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
function submitW6Homework(e) {
  e.preventDefault();
  alert("🎉 第六週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
