/**
 * 115 學年度「管理探索二」第四週：股市入門與企業價值估算
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w4_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第四週課程導論：股市入門與企業價值估算", "en": "Week 4 Intro: Stock Market Fundamentals & Valuation" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>📈 買股票到底是在買什麼？解碼企業內在價值與價格脈動</h2><p>「巴菲特名言：價格是你付出的，價值是你獲得的。(Price is what you pay. Value is what you get.)」</p></div><p>歡迎來到第四週！許多新鮮人常以為買股票是「賭博」或「數字遊戲」，但股票的本質是<b>企業的微型股權</b>。當你買進一張台積電或蘋果股票時，你便成為這家全球巨擘的合夥股東。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：股權本質</h4><p>擁有股票等於享有企業未來的現金流分紅權與剩餘財產請求權。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：價值與價格</h4><p>股市短期是投票機（情緒波動），長期是計重器（內在價值）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) / 華爾街經典估值理論</div>",
      "en": "<div class=\"hero-box\"><h2>📈 What Are You Buying in Stocks? Decoding Value vs. Price</h2><p>\"Warren Buffett: Price is what you pay. Value is what you get.\"</p></div><p>Welcome to Week 4! Many freshmen confuse stock investing with gambling, but a stock represents fractional ownership in a real business. Owning shares of TSMC or Apple makes you a real co-owner.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Stock Ownership</h4><p>Owning stock grants you rights to future dividend cash flows and residual claims.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Value vs. Price</h4><p>In the short run, the market is a voting machine; in the long run, it is a weighing machine.</p></div></div><div class=\"data-source-badge\">📌 Source: Taiwan Stock Exchange (TWSE) / Financial Valuation Theory</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第四週 3 小時學習地圖與核心技能樹", "en": "Week 4 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學模組</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>股票本質與資本市場</b> (Slide 01 - 10)<br>IPO、二級市場、股東四權與台積電股權結構</td><td>🎯 <b>1小時活動</b>：台積電 / 蘋果股權與零股股利試算盤</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>企業估值三大指標</b> (Slide 11 - 20)<br>本益比 P/E、股價淨值比 P/B、EV/EBITDA 與河流圖</td><td>🎯 <b>2小時活動</b>：珍奶店 A vs. B 本益比 P/E & 估值比較器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>實證財報與估值實戰</b> (Slide 21 - 30)<br>三大財報、ROE 杜邦分析、護城河與盲點避開</td><td>🎮 <b>3小時小遊戲</b>：股市估值大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：標的企業本益比與 ROE 估值分析報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 4 3-Hour (180 Mins) Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Stock Fundamentals & Markets</b> (Slide 01 - 10)<br>IPO, Secondary Market, Shareholder Rights & TSMC Case</td><td>🎯 <b>Hour 1 Activity</b>: TSMC/Apple Share Ownership Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Valuation Multiples: P/E, P/B, EV/EBITDA</b> (Slide 11 - 20)<br>P/E Bands, River Charts, Value vs. Growth</td><td>🎯 <b>Hour 2 Activity</b>: Bubble Tea Shop P/E Valuation Comparator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Financial Statements & Empirical Valuation</b> (Slide 21 - 30)<br>3 Statements, ROE DuPont Analysis & Moats</td><td>🎮 <b>Hour 3 Game</b>: Stock Valuation Master Challenge<br>📝 <b>Class Assignment</b>: Firm Valuation & ROE Analysis Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "股票本質", "en": "Ownership" },
    "title": { "zh": "股票的本質：買股票到底是在買什麼？", "en": "The Essence of Stock: Buying a Piece of a Real Business" },
    "content": {
      "zh": "<h3>🏪 從開一家「連鎖早餐店」理解股票發行</h3><p>假設你與 3 位朋友合夥開一家手搖飲料店，總資本需要 <b>1,000 萬元</b>。你們將資本拆分為 <b>100 萬股</b>，每股面額 10 元：</p><ul><li><b>你的持股</b>：出資 250 萬元，持有 25 萬股（持股比例 <b>25%</b>）。</li><li><b>年度獲利分紅</b>：若飲料店一年淨賺 200 萬元，按 25% 持股，你可分得 <b>50 萬元股利</b>。</li><li><b>股票上市 (IPO)</b>：當飲料店擴大經營並在證交所掛牌上市，公眾便能在公開市場買賣這 100 萬股。</li></ul><div class=\"highlight-box\">💡 <b>Key Takeaway</b>：股票不是空氣或純數字，每張股票背後都對應著真實的企業資產、門市、設備與未來營利能力！</div><div class=\"data-source-badge\">📌 資料來源：經濟部商業署 (MOEA) 公司法與證券交易法通用原理</div>",
      "en": "<h3>🏪 Understanding Stock Issuance Through a Bubble Tea Shop</h3><p>Imagine you and 3 friends open a tea shop requiring $10,000,000 NTD capital, divided into 1,000,000 shares at $10 par value:</p><ul><li><b>Your Ownership</b>: Invested $2,500,000 NTD for 250,000 shares (25% stake).</li><li><b>Annual Dividend</b>: If annual net profit is $2,000,000 NTD, your 25% stake yields $500,000 NTD in dividends.</li><li><b>Initial Public Offering (IPO)</b>: Listing the company on the stock exchange allows the public to buy and sell these shares.</li></ul><div class=\"highlight-box\">💡 <b>Key Takeaway</b>: Shares correspond directly to tangible corporate assets, operations, and future cash generation.</div><div class=\"data-source-badge\">📌 Source: Ministry of Economic Affairs (MOEA) Company Act Principles</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "資本市場", "en": "Capital Markets" },
    "title": { "zh": "資本市場雙重輪廓：一級市場 (IPO) vs. 二級市場 (TWSE)", "en": "Primary Market (IPO) vs. Secondary Market (TWSE/NYSE)" },
    "content": {
      "zh": "<h3>🏛️ 股票在哪裡買賣？區分初級與次級市場</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1️⃣ 一級市場 / 初級市場 (Primary Market)</h4><p><b>功能</b>：企業發行新股籌集資金（IPO / 承銷現金增資）。</p><p><b>資金流向</b>：投資人的資金直接流入<b>公司帳戶</b>，用於蓋工廠、買設備或研發。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>2️⃣ 二級市場 / 次級市場 (Secondary Market)</h4><p><b>功能</b>：投資人之間互相買賣已發行股票（如台灣證交所 TWSE、紐約證交所 NYSE）。</p><p><b>資金流向</b>：資金在<b>買方與賣方投資人之間轉移</b>，公司本身不會收到這筆交易金額。</p></div></div><p style=\"margin-top: 1rem;\">大學生在券商 App（如元大、富邦、國泰）下單買進 2330 台積電，屬於<b>二級市場交易</b>。</p><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 證券市場基礎架構說明</div>",
      "en": "<h3>🏛️ Where Are Stocks Traded? Primary vs. Secondary Markets</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1️⃣ Primary Market (IPO & Underwriting)</h4><p><b>Function</b>: Issuing new shares to raise fresh capital for expansion.</p><p><b>Flow of Funds</b>: Money goes directly to the <b>company's treasury</b> for R&D and CAPEX.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>2️⃣ Secondary Market (TWSE / NYSE)</h4><p><b>Function</b>: Trading existing shares among public investors.</p><p><b>Flow of Funds</b>: Money transfers <b>between buyer and seller investors</b>; the firm receives $0 from daily trades.</p></div></div><p style=\"margin-top: 1rem;\">Buying TSMC via a broker app represents secondary market trading.</p><div class=\"data-source-badge\">📌 Source: Taiwan Stock Exchange (TWSE) Market Infrastructure Guide</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "股東權益", "en": "Shareholder Rights" },
    "title": { "zh": "股東的四大基本權益：分紅、投票與剩餘財產", "en": "4 Fundamental Shareholder Rights" },
    "content": {
      "zh": "<h3>📜 持有股票你享有何種法律與經濟權益？</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>💰 1. 盈餘分配權 (Dividends)</h4><p>公司賺錢時，股東有權按持股比例領取現金股利或股票股利。</p></div><div class=\"concept-card\"><h4>🗳️ 2. 表決投票權 (Voting Rights)</h4><p>參與股東常會，對董事選任、重大資產處分與章程修訂進行投票。</p></div><div class=\"concept-card\"><h4>🏗️ 3. 剩餘財產請求權 (Residual Claim)</h4><p>若公司不幸解散清算，在清償所有債權人後，剩餘資產按股本分配。</p></div><div class=\"concept-card\"><h4>🔄 4. 股份自由轉讓權 (Transferability)</h4><p>可在公開市場隨時將股票賣出變現，享有流動性溢價。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國公司法第 156 條至第 201 條規範</div>",
      "en": "<h3>📜 Legal & Economic Rights of Shareholders</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>💰 1. Dividend Claim</h4><p>Entitled to cash or stock dividends proportional to share ownership.</p></div><div class=\"concept-card\"><h4>🗳️ 2. Voting Rights</h4><p>Vote at annual general meetings (AGM) for board directors and M&A proposals.</p></div><div class=\"concept-card\"><h4>🏗️ 3. Residual Claim</h4><p>Right to remaining assets after paying off all debt holders in liquidation.</p></div><div class=\"concept-card\"><h4>🔄 4. Free Transferability</h4><p>Ability to sell shares anytime on the secondary market for high liquidity.</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Company Act Articles 156-201</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "實證案例", "en": "Case Study" },
    "title": { "zh": "實證案例：台積電 (2330 / TSM) 全球股權結構與市值", "en": "Empirical Case: TSMC Global Ownership Structure & Market Cap" },
    "content": {
      "zh": "<h3>🇹🇼 護國神山台積電 (2330) 的股權結構誰在擁有？</h3><p>截至 2026 最新官方數據，台積電總發行股數為 <b>259.3 億股 (25,930,380 千股)</b>。當股價為 1,000 元時，市值高達 <b>25.93 兆元新台幣</b>：</p><table class=\"data-table\"><thead><tr><th>股東類別</th><th>持股比例 (%)</th><th>主要代表機構 / 說明</th></tr></thead><tbody><tr><td><b>外資及陸資 (Foreign Financial Inst.)</b></td><td><b>73.2%</b></td><td>花旗託管專戶、挪威主權基金、貝萊德 (BlackRock)、先鋒 (Vanguard)</td></tr><tr><td><b>國家發展基金 (NDF Govt Fund)</b></td><td><b>6.38%</b></td><td>行政院國發基金（創始大股東，持有約 16.5 億股）</td></tr><tr><td><b>國內金融與法人 (Local Financial)</b></td><td><b>11.5%</b></td><td>本國人壽保險公司、投信基金與自營商</td></tr><tr><td><b>本國自然人 (Local Retail Investors)</b></td><td><b>9.0%</b></td><td>台灣廣大散戶投資人與零股交易者（超過 140 萬股東）</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：公開資訊觀測站 (MOPS) & 台灣證券交易所 (TWSE) 最新股東結構公告</div>",
      "en": "<h3>🇹🇼 Who Owns TSMC (2330)? Global Ownership Breakdown</h3><p>TSMC has <b>25.93 billion shares</b> outstanding. At $1,000 NTD per share, total market cap reaches <b>$25.93 Trillion NTD</b>:</p><table class=\"data-table\"><thead><tr><th>Shareholder Category</th><th>Ownership (%)</th><th>Key Representative Institutions</th></tr></thead><tbody><tr><td><b>Foreign Institutions</b></td><td><b>73.2%</b></td><td>Citibank Custody, Norges Bank Sovereign Fund, BlackRock, Vanguard</td></tr><tr><td><b>National Development Fund</b></td><td><b>6.38%</b></td><td>ROC Executive Yuan NDF (~1.65 billion shares)</td></tr><tr><td><b>Domestic Institutions</b></td><td><b>11.5%</b></td><td>Taiwan Insurance Companies, Mutual Funds & Brokerages</td></tr><tr><td><b>Local Retail Investors</b></td><td><b>9.0%</b></td><td>Individual Taiwanese investors & odd-lot traders (1.4M+ shareholders)</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Market Observation Post System (MOPS) & TWSE Official Filings</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "股票種類", "en": "Stock Types" },
    "title": { "zh": "普通股 (Common) vs. 優先股 (Preferred) 的權益比較", "en": "Common Stock vs. Preferred Stock: Rights & Claims" },
    "content": {
      "zh": "<h3>⚖️ 公司發行不同類型的股票有何差別？</h3><table class=\"data-table\"><thead><tr><th>比較項目</th><th>普通股 (Common Stock)</th><th>優先股 / 特別股 (Preferred Stock)</th></tr></thead><tbody><tr><td><b>股利分配 (Dividends)</b></td><td>變動利息（視公司盈餘多寡而定）</td><td><b>固定股利</b>（類似債券派息，如 4%~5%）</td></tr><tr><td><b>清償優先權 (Liquidation)</b></td><td>最後順位（承受最大殘值風險）</td><td><b>優先於普通股</b>，次於債權人 (Bondholders)</td></tr><tr><td><b>表決投票權 (Voting)</b></td><td><b>具備完整投票權</b>（一股一票）</td><td>通常<b>無投票權</b>（僅純領息）</td></tr><tr><td><b>價格波動度 (Volatility)</b></td><td>高（反映企業成長與資本利得）</td><td>低（受市場利率變動影響較大）</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：美國 SEC & 金管會證期局 (FSC) 證券發行審查規範</div>",
      "en": "<h3>⚖️ Comparing Common Stock and Preferred Stock</h3><table class=\"data-table\"><thead><tr><th>Feature</th><th>Common Stock</th><th>Preferred Stock</th></tr></thead><tbody><tr><td><b>Dividends</b></td><td>Variable (depends on corporate profit)</td><td><b>Fixed Dividend</b> (e.g. 4%-5% coupon rate)</td></tr><tr><td><b>Liquidation Priority</b></td><td>Last claim (bears ultimate residual risk)</td><td><b>Senior to Common</b>, junior to Bondholders</td></tr><tr><td><b>Voting Rights</b></td><td><b>Full Voting Rights</b> (1 share = 1 vote)</td><td>Usually <b>No Voting Rights</b></td></tr><tr><td><b>Price Volatility</b></td><td>High (reflects capital appreciation)</td><td>Lower (sensitive to market interest rates)</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: US SEC & Taiwan FSC Securities Standards</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "市值算術", "en": "Market Cap" },
    "title": { "zh": "股票發行與市值算術：市值 (Market Cap) 公式", "en": "Stock Math: Market Capitalization Formula" },
    "content": {
      "zh": "<h3>🧮 衡量一家公司「規模大小」的最精準尺規</h3><div class=\"formula-box\">$$\\text{總市值 (Market Cap)} = \\text{當前每股股價 (Stock Price)} \\times \\text{在外流通總股數 (Shares Outstanding)}$$</div><p><b>大一常見迷思</b>：「A 股票一張 500 元，B 股票一張 50 元，所以 A 公司比 B 公司貴 10 倍？」<b>這是嚴重錯誤！</b>公司價值取決於<b>總市值</b>，而非單股價格。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏢 公司 A（高單價，股數少）</h4><p>股價 500 元 × 1 億股 = <b>市值 500 億元</b></p></div><div class=\"concept-card\"><h4>🏭 公司 B（低單價，股數多）</h4><p>股價 50 元 × 20 億股 = <b>市值 1,000 億元 (公司 B 規模大 2 倍！)</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 市值統計標準定義</div>",
      "en": "<h3>🧮 Measuring Corporate Size Accurately</h3><div class=\"formula-box\">$$\\text{Market Cap} = \\text{Stock Price} \\times \\text{Shares Outstanding}$$</div><p><b>Freshman Fallacy</b>: \"Stock A is $500/share and Stock B is $50/share, so Firm A is 10x larger.\" <b>Completely False!</b> Corporate size depends on <b>Total Market Cap</b>, not nominal stock price.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏢 Firm A (High Price, Few Shares)</h4><p>$500 × 100M shares = <b>$50 Billion Market Cap</b></p></div><div class=\"concept-card\"><h4>🏭 Firm B (Low Price, Many Shares)</h4><p>$50 × 2,000M shares = <b>$100 Billion Market Cap (Firm B is 2x Larger!)</b></p></div></div><div class=\"data-source-badge\">📌 Source: TWSE Market Capitalization Standard Definition</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "報酬來源", "en": "Return Sources" },
    "title": { "zh": "買股票能賺什麼？資本利得 (Capital Gain) vs. 股息 (Dividend)", "en": "Two Sources of Stock Return: Capital Gains & Dividends" },
    "content": {
      "zh": "<h3>💵 股票總回報 (Total Return) 的雙引擎拆解</h3><div class=\"formula-box\">$$\\text{股票總報酬 (Total Return)} = \\text{資本利得 (Capital Gain)} + \\text{股息收益 (Dividend Yield)}$$</div><div class=\"concept-grid\"><div class=\"concept-card\"><h4>📈 1. 資本利得 (Capital Gain)</h4><p>低價買進、高價賣出的<b>價差收益</b>。來自企業獲利成長推升內在價值。</p><p><i>公式</i>：$\\text{Capital Gain} = P_{\\text{sell}} - P_{\\text{buy}}$</p></div><div class=\"concept-card\"><h4>🎁 2. 股息收益 (Dividend Yield)</h4><p>公司將部分年度盈餘以<b>現金發還給股東</b>。</p><p><i>公式</i>：$\\text{Dividend Yield} = \\frac{\\text{每股現金股利 (DPS)}}{\\text{買進股價 (Price)}}$</p></div></div><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署與證券投資人保護中心 (SFIPO) 宣導手冊</div>",
      "en": "<h3>💵 Decomposing Total Stock Return</h3><div class=\"formula-box\">$$\\text{Total Return} = \\text{Capital Gains} + \\text{Dividend Yield}$$</div><div class=\"concept-grid\"><div class=\"concept-card\"><h4>📈 1. Capital Gains</h4><p>Profit from selling shares at a higher price than purchased, driven by earnings growth.</p><p><i>Formula</i>: $\\text{Capital Gain} = P_{\\text{sell}} - P_{\\text{buy}}$</p></div><div class=\"concept-card\"><h4>🎁 2. Dividend Yield</h4><p>Direct cash payout distributed from annual net profit to shareholders.</p><p><i>Formula</i>: $\\text{Dividend Yield} = \\frac{\\text{DPS}}{\\text{Stock Price}}$</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Ministry of Finance & SFIPO Investor Guide</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>股票本質</b>：股票是企業的微型股權，買股票是成為公司股東而非下注數字。</li><li><b>兩大市場</b>：IPO 一級市場資金融通給公司；TWSE 二級市場流動轉讓給投資人。</li><li><b>市值與規模</b>：市值 = 股價 × 總股數。切勿以單股價格評估公司大小！</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 零股試算」</b> 按鈕，輸入預算（例如 10,000 元），試算你能買到幾股台積電或蘋果，並計算你每年可領到的現金股利！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Equity Essence</b>: Stocks represent fractional ownership in real businesses.</li><li><b>Two Markets</b>: Primary (IPO) funds company expansion; Secondary (TWSE) provides liquidity.</li><li><b>Market Cap</b>: Price × Shares. Never judge company size by nominal stock price!</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button in the navbar to test buying fractional shares of TSMC/Apple with a $10,000 NTD budget and calculating your annual dividends!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "估值靈魂", "en": "Valuation Intro" },
    "title": { "zh": "企業估值的核心靈魂：價格 (Price) 不等於價值 (Value)", "en": "The Essence of Valuation: Price Is Not Equal to Value" },
    "content": {
      "zh": "<h3>⚖️ 為什麼需要估值？評估股票是「貴」還是「便宜」</h3><p>在菜市場買蘋果，1 顆 30 元很直觀。但在股市買公司，100 元的股票可能比 20 元的股票<b>便宜得多</b>！因為估值比較的是<b>「你支付的價格」與「公司產生的獲利/資產」之相對比率</b>。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏷️ 股票 A：股價 100 元</h4><p>每股每年賺 10 元 (EPS = 10)</p><p><b>10 年回本</b> (P/E = 10 倍) 👉 <b>便宜！</b></p></div><div class=\"concept-card\"><h4>🏷️ 股票 B：股價 20 元</h4><p>每股每年賺 0.4 元 (EPS = 0.4)</p><p><b>50 年回本</b> (P/E = 50 倍) 👉 <b>昂貴！</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：華爾街經典《證券分析》(Security Analysis, Graham & Dodd)</div>",
      "en": "<h3>⚖️ Why Valuation Matters: Assessing Cheap vs. Expensive</h3><p>In stock markets, a $100 stock can be much <b>cheaper</b> than a $20 stock, because valuation compares price paid to the earnings generated.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏷️ Stock A: $100 / share</h4><p>Annual EPS = $10</p><p><b>10 years payback</b> (P/E = 10x) 👉 <b>Cheap!</b></p></div><div class=\"concept-card\"><h4>🏷️ Stock B: $20 / share</h4><p>Annual EPS = $0.4</p><p><b>50 years payback</b> (P/E = 50x) 👉 <b>Expensive!</b></p></div></div><div class=\"data-source-badge\">📌 Source: Security Analysis (Graham & Dodd)</div>"
    }
  },
  {
    "id": 12,
    "img": "images/w4_pe_bands.jpg",
    "hour": 2,
    "tag": { "zh": "本益比", "en": "P/E Ratio" },
    "title": { "zh": "最普及的估值工具：本益比 (Price-to-Earnings Ratio, P/E)", "en": "The Most Popular Metric: Price-to-Earnings Ratio (P/E)" },
    "content": {
      "zh": "<h3>🧮 本益比 (P/E) 的公式與實務含義</h3><div class=\"formula-box\">$$\\text{本益比 (P/E Ratio)} = \\frac{\\text{每股股價 (Stock Price)}}{\\text{每股盈餘 (Earnings Per Share, EPS)}} = \\frac{\\text{總市值 (Market Cap)}}{\\text{稅後淨利 (Net Income)}}$$</div><p><b>直觀含義</b>：若以當前獲利能力不變為前提，<b>投資這家公司需要幾年能回本</b>？</p><ul><li><b>EPS (每股盈餘)</b> = 稅後淨利 ÷ 總股數。例如台積電年度 EPS 為 40 元，股價 800 元，本益比為 <b>800 ÷ 40 = 20 倍</b>。</li><li><b>台股歷史平均本益比</b>：約在 <b>12 倍至 18 倍</b> 之間常態輪動。</li></ul><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 發行量加權股價指數本益比統計</div>",
      "en": "<h3>🧮 P/E Ratio Formula & Practical Meaning</h3><div class=\"formula-box\">$$\\text{P/E Ratio} = \\frac{\\text{Stock Price}}{\\text{EPS}} = \\frac{\\text{Market Cap}}{\\text{Net Income}}$$</div><p><b>Intuitive Meaning</b>: Assuming earnings stay constant, <b>how many years will it take to pay back your investment?</b></p><ul><li><b>EPS</b> = Net Income ÷ Shares. If TSMC EPS is $40 and price is $800, P/E = <b>800 ÷ 40 = 20x</b>.</li><li><b>Taiwan Market Historical Average P/E</b>: Trades between <b>12x and 18x</b>.</li></ul><div class=\"data-source-badge\">📌 Source: TWSE Official P/E Historical Statistics</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "河流圖", "en": "River Charts" },
    "title": { "zh": "本益比河流圖 (P/E River Chart) 與歷史區間比對", "en": "P/E River Charts & Historical Valuation Bands" },
    "content": {
      "zh": "<h3>🌊 如何判斷個股處於歷史「相對高點」或「相對低點」？</h3><p>單看 P/E 數字（如 20 倍）無法判斷貴賤，必須與<b>公司自身的 5 年歷史本益比區間</b>比對：</p><table class=\"data-table\"><thead><tr><th>本益比河流圖位階</th><th>對應歷史 P/E 倍數</th><th>市場評價與投資策略</th></tr></thead><tbody><tr><td><span style=\"color:var(--accent-rose); font-weight:bold;\">紅色河流頂部</span></td><td><b>> 25 倍</b> (如歷史高點)</td><td>情緒過熱、估值過度反映未來夢想，修正風險高。</td></tr><tr><td><span style=\"color:var(--accent-gold); font-weight:bold;\">黃色河流中游</span></td><td><b>15 ~ 20 倍</b> (歷史均值)</td><td>合理估值區間，反映穩健企業成長。</td></tr><tr><td><span style=\"color:var(--accent-emerald); font-weight:bold;\">綠色河流底部</span></td><td><b>< 12 倍</b> (歷史低點)</td><td>市場過度悲觀抛售、內在價值具備安全邊際 (Margin of Safety)。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：TEJ 台灣經濟新報與券商法人研究報告標準規範</div>",
      "en": "<h3>🌊 Assessing Relative Historical Highs & Lows with P/E Bands</h3><p>Comparing current P/E against the company's 5-year historical river bands:</p><table class=\"data-table\"><thead><tr><th>P/E River Band Position</th><th>Historical P/E Range</th><th>Market Sentiment & Action</th></tr></thead><tbody><tr><td><span style=\"color:var(--accent-rose); font-weight:bold;\">Red Upper Band</span></td><td><b>> 25x</b> (Historical High)</td><td>Overheated sentiment, high risk of valuation correction.</td></tr><tr><td><span style=\"color:var(--accent-gold); font-weight:bold;\">Yellow Middle Band</span></td><td><b>15 ~ 20x</b> (Historical Mean)</td><td>Fair valuation, reflecting steady corporate growth.</td></tr><tr><td><span style=\"color:var(--accent-emerald); font-weight:bold;\">Green Lower Band</span></td><td><b>< 12x</b> (Historical Low)</td><td>Undervalued / panic selling; offers Margin of Safety.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: TEJ Financial Database & Institutional Research Standards</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "成長 vs 價值", "en": "Growth vs Value" },
    "title": { "zh": "價值型 vs. 成長型企業：本益比高低的背後含義", "en": "High P/E vs. Low P/E: Growth Stocks vs. Value Traps" },
    "content": {
      "zh": "<h3>🚀 為什麼科技飆股本益比可以高達 40 倍，而水泥股只有 10 倍？</h3><p>本益比反應了市場對企業<b>「未來盈餘成長率 ($g$)」的預期</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⚡ 高本益比企業（成長股，如 AI / 半導體）</h4><p><b>市場預期</b>：未來幾年 EPS 將以 30%~50% 爆發式成長。</p><p><b>特徵</b>：買的是「未來的獲利潛力」，若成長不如預期易遭殺估值。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🧱 低本益比企業（價值股，如 金融 / 鋼鐵 / 水泥）</h4><p><b>市場預期</b>：獲利穩定但無大幅成長空間 ($g \\approx 2\\%$)。</p><p><b>特徵</b>：提供穩定現金股利，但需防範衰退型企業的「本益比陷阱」。</p></div></div><div class=\"data-source-badge\">📌 資料來源：證券分析理論與 Morningstar 股票風格箱分類標準</div>",
      "en": "<h3>🚀 Why Do Tech Stocks Command 40x P/E While Cement Stocks Trade at 10x?</h3><p>P/E reflects the market's expectation of future earnings growth ($g$):</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⚡ High P/E Stocks (Growth Stocks: AI / Semiconductors)</h4><p><b>Expectation</b>: EPS growing at 30%-50% annually.</p><p><b>Feature</b>: Buying future potential; vulnerable to valuation cuts if growth stumbles.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🧱 Low P/E Stocks (Value Stocks: Banking / Steel / Cement)</h4><p><b>Expectation</b>: Stable earnings with low growth rates ($g \\approx 2\\%$).</p><p><b>Feature</b>: High dividend payouts; beware of value traps in declining industries.</p></div></div><div class=\"data-source-badge\">📌 Source: Morningstar Style Box Classification & Financial Theory</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "股價淨值比", "en": "P/B Ratio" },
    "title": { "zh": "第二大估值工具：股價淨值比 (Price-to-Book Ratio, P/B)", "en": "Second Core Metric: Price-to-Book Ratio (P/B)" },
    "content": {
      "zh": "<h3>🏦 虧損公司或重資產產業怎麼估值？看 P/B 淨值比</h3><div class=\"formula-box\">$$\\text{股價淨值比 (P/B Ratio)} = \\frac{\\text{每股股價 (Stock Price)}}{\\text{每股淨值 (Book Value Per Share, BVPS)}}$$</div><p><b>每股淨值 (BVPS)</b> = (總資產 - 總負債) ÷ 總股數。代表若公司今天清算清償債務後，每股清算殘值。</p><ul><li><b>P/B < 1.0 倍</b>：股價低於淨值清算價，常出現在景氣循環股（鋼鐵、航運、金控）的景氣谷底。</li><li><b>適用產業</b>：銀行業、壽險業、面板、鋼鐵、記憶體等<b>重資產與景氣循環產業</b>。輕資產科技股因軟體資產未計入，P/B 常偏高失真。</li></ul><div class=\"data-source-badge\">📌 資料來源：金管會銀銀行局與 TWSE 景氣循環股評價規範</div>",
      "en": "<h3>🏦 Valuing Heavy-Asset & Cyclical Firms with P/B</h3><div class=\"formula-box\">$$\\text{P/B Ratio} = \\frac{\\text{Stock Price}}{\\text{Book Value Per Share (BVPS)}}$$</div><p><b>BVPS</b> = (Total Assets - Total Liabilities) ÷ Shares. Represents liquidation value per share.</p><ul><li><b>P/B < 1.0x</b>: Stock trades below liquidation value, common at cyclical troughs.</li><li><b>Best Suited For</b>: Financials, Steel, Shipping, Memory Chips (heavy assets).</li></ul><div class=\"data-source-badge\">📌 Source: FSC Banking Bureau & TWSE Cyclical Stocks Guide</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "EV/EBITDA", "en": "Advanced Metrics" },
    "title": { "zh": "法人機構高級工具：企業價值倍數 (EV/EBITDA)", "en": "Institutional Metric: Enterprise Value Multiple (EV/EBITDA)" },
    "content": {
      "zh": "<h3>🏢 排除負債利息與折舊干擾的跨國併購估值利器</h3><div class=\"formula-box\">$$\\text{EV/EBITDA} = \\frac{\\text{企業價值 (Enterprise Value, EV)}}{\\text{息稅折舊攤銷前盈餘 (EBITDA)}}$$</div><ul><li><b>企業價值 EV</b> = 市值 + 淨負債（總負債 - 現金）。代表併購整家公司需要的真實花費。</li><li><b>EBITDA</b> = 營業利益 + 折舊與攤銷。反映營運產生的真實現金流能力。</li><li><b>優勢</b>：不受各國資本結構（負債比例）、稅率差異與折舊攤銷政策影響，常用於<b>跨國科技巨擘與併購交易 (M&A) 估值</b>。</li></ul><div class=\"data-source-badge\">📌 資料來源：彭博 (Bloomberg) & 華爾街投資銀行 (CFA Institute) 估值標準</div>",
      "en": "<h3>🏢 Advanced Metric for M&A and Cross-Border Valuation</h3><div class=\"formula-box\">$$\\text{EV/EBITDA} = \\frac{\\text{Enterprise Value (EV)}}{\\text{EBITDA}}$$</div><ul><li><b>Enterprise Value (EV)</b> = Market Cap + Net Debt. True cost to acquire the entire firm.</li><li><b>EBITDA</b> = Operating Income + Depreciation & Amortization. Pure cash-generating power.</li><li><b>Advantage</b>: Neutralizes debt leverage, tax rates, and depreciation differences in M&A.</li></ul><div class=\"data-source-badge\">📌 Source: Bloomberg & CFA Institute Valuation Standards</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "DCF 模型", "en": "DCF Basics" },
    "title": { "zh": "自由現金流折現 (DCF) 估值法簡介", "en": "Discounted Cash Flow (DCF) Valuation Basics" },
    "content": {
      "zh": "<h3>🔮 華爾街理論上最嚴謹的絕對估值法 (Absolute Valuation)</h3><div class=\"formula-box\">$$\\text{企業絕對內在價值 (Intrinsic Value)} = \\sum_{t=1}^N \\frac{\\text{FCFF}_t}{(1+\\text{WACC})^t} + \\frac{\\text{Terminal Value}}{(1+\\text{WACC})^N}$$</div><p>DCF 模型認為：一家公司的價值等於它在未來營運生命週期內，所能產生的<b>所有自由現金流 (Free Cash Flow) 折現回今天的總和</b>。</p><p><b>大一觀念</b>：雖然 DCF 假設參數敏感度極高（WACC 與永續成長率差 1% 估值差 30%），但它奠定了「資產價值取決於未來現金流」的底層邏輯。</p><div class=\"data-source-badge\">📌 資料來源：紐約大學 Stern 商學院 Aswath Damodaran 教授估值體系</div>",
      "en": "<h3>🔮 The Absolute Valuation Standard on Wall Street</h3><div class=\"formula-box\">$$\\text{Intrinsic Value} = \\sum_{t=1}^N \\frac{\\text{FCFF}_t}{(1+\\text{WACC})^t} + \\frac{\\text{Terminal Value}}{(1+\\text{WACC})^N}$$</div><p>DCF states that a firm's true worth equals the <b>present value of all future Free Cash Flows</b>.</p><p><b>Freshman Insight</b>: Though highly sensitive to inputs (WACC & growth rates), it forms the foundation of all asset pricing.</p><div class=\"data-source-badge\">📌 Source: NYU Stern Prof. Aswath Damodaran Valuation Framework</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "同業比對法", "en": "Relative Valuation" },
    "title": { "zh": "相對估值法：同業比對法 (Multiples Approach) 實務", "en": "Relative Valuation: Peer Group Multiples Approach" },
    "content": {
      "zh": "<h3>🔍 實務上如何幫一家新上市的公司打分數？</h3><p>當要評估一家半導體 IC 設計新創公司時，交易員常用的 3 步驟同業比對法：</p><ol><li><b>選定同業同群 (Peer Group)</b>：挑選規模與業務相似的上市公司（如 聯發科、瑞昱、聯詠）。</li><li><b>計算同業平均本益比</b>：假設同業平均 P/E 為 <b>18 倍</b>。</li><li><b>計算目標合理股價</b>：若該新創公司預估今年 EPS 為 10 元，則合理估值為 <b>10 × 18 = 180 元</b>。</li></ol><div class=\"data-source-badge\">📌 資料來源：券商承銷部 (Underwriting Dept) 新股上市訂價與承銷手冊</div>",
      "en": "<h3>🔍 Step-by-Step Peer Multiples Valuation</h3><p>3 steps used by investment bankers to price IPOs:</p><ol><li><b>Select Peer Group</b>: Choose comparable listed firms in the same sector (e.g. MediaTek, Realtek).</li><li><b>Calculate Peer Average P/E</b>: Suppose peer average P/E = <b>18x</b>.</li><li><b>Derive Target Target Price</b>: If target firm EPS = $10, target price = <b>$10 × 18 = $180</b>.</li></ol><div class=\"data-source-badge\">📌 Source: Investment Banking IPO Underwriting Handbook</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "估值陷阱", "en": "Valuation Traps" },
    "title": { "zh": "估值陷阱防禦：避開本益比陷阱與一次性獲利誤導", "en": "Avoiding Valuation Traps & One-Off Gain Distortions" },
    "content": {
      "zh": "<h3>⚠️ 為什麼 P/E 只有 3 倍的股票反而千萬不能買？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 陷阱 1：一次性業外暴利誤導</h4><p>某公司賣掉土地門市賺了 10 億，使今年 EPS 暴增至 20 元，股價 60 元（P/E 僅 3 倍）。但明年本業繼續虧損，<b>P/E 低是假象！</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 陷阱 2：產業結構性衰退 (Value Trap)</h4><p>傳統底片或老舊技術公司，獲利逐年衰退 50%。雖然 P/E 便宜，但 EPS 將持續崩跌使<b>真實成本極高</b>。</p></div></div><div class=\"data-source-badge\">📌 資料來源：證券投資人保護中心 (SFIPO) 防範財報與估值陷阱案例分析</div>",
      "en": "<h3>⚠️ Why a 3x P/E Stock Can Be a Dangerous Trap</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Trap 1: One-Off Non-Operating Gain</h4><p>A firm sells real estate earning $20 EPS, making $60 stock look like 3x P/E. But core business is losing money—<b>fake cheapness!</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Trap 2: Structural Industry Decline (Value Trap)</h4><p>Legacy tech losing 50% profit yearly. Low P/E is misleading because future EPS will collapse.</p></div></div><div class=\"data-source-badge\">📌 Source: Securities & Futures Investors Protection Center (SFIPO)</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>本益比 P/E</b>：股價 ÷ EPS，最常用的回本年限指標。必須搭配河流圖與同業比較。</li><li><b>股價淨值比 P/B</b>：股價 ÷ 每股淨值，適用於金融、鋼鐵重資產與景氣循環股。</li><li><b>陷阱防範</b>：扣除一次性業外獲利，確保獲利來自本業持續現金流。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 珍奶店估值」</b> 按鈕，親自 PK 兩家營運狀況不同的珍奶店，計算 P/E 本益比並找出真正的估值明珠！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>P/E Ratio</b>: Price ÷ EPS. Payback period metric; best paired with river bands.</li><li><b>P/B Ratio</b>: Price ÷ BVPS. Best for financials and heavy asset cyclical stocks.</li><li><b>Trap Avoidance</b>: Strip out one-off gains to evaluate true core operating capability.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to compare two bubble tea shops, calculate P/E ratios, and spot valuation traps!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "id": 21,
    "hour": 3,
    "tag": { "zh": "三大財報", "en": "3 Statements" },
    "title": { "zh": "大一財報速讀法：三大財務報表核心連動", "en": "Financial Statements 101: The 3 Core Statements" },
    "content": {
      "zh": "<h3>📊 讀懂企業體檢表：損益表、資產負債表與現金流量表</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1️⃣ 損益表 (Income Statement)</h4><p><b>動態儀表板</b>：記載一段期間（如一年）公司賺多少錢。</p><p><i>關鍵項目</i>：營業收入 ➔ 毛利 ➔ 營業利益 ➔ 稅後淨利 (EPS)。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>2️⃣ 資產負債表 (Balance Sheet)</h4><p><b>靜態快照</b>：特定時間點公司的口袋家當與欠債。</p><p><i>等式</i>：<b>資產 = 負債 + 股東權益</b>。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>3️⃣ 現金流量表 (Cash Flow)</h4><p><b>防詐照妖鏡</b>：紀錄真金白銀的進出流量。</p><p><i>三大流</i>：營運現金流 (CFO)、投資現金流 (CFI)、籌資現金流 (CFF)。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) IFRS 國際財務報導準則編製規範</div>",
      "en": "<h3>📊 Financial Statements 101 for Freshmen</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1️⃣ Income Statement</h4><p><b>Performance Movie</b>: Tracks revenue, margins, and Net Profit (EPS) over a period.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>2️⃣ Balance Sheet</h4><p><b>Financial Snapshot</b>: Assets = Liabilities + Shareholders' Equity.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>3️⃣ Cash Flow Statement</h4><p><b>Reality Check</b>: Tracks actual cash inflow/outflow (CFO, CFI, CFF).</p></div></div><div class=\"data-source-badge\">📌 Source: FSC IFRS Financial Reporting Standards</div>"
    }
  },
  {
    "id": 22,
    "img": "images/w4_dupont.jpg",
    "hour": 3,
    "tag": { "zh": "獲利能力", "en": "Margin Analysis" },
    "title": { "zh": "獲利能力三大指標：毛利率、營業利益率與純益率", "en": "Margin Analysis: Gross, Operating & Net Margins" },
    "content": {
      "zh": "<h3>🔍 剖析企業的產品競爭力與營運效率</h3><table class=\"data-table\"><thead><tr><th>獲利指標</th><th>計算公式</th><th>經濟含義與檢驗重點</th></tr></thead><tbody><tr><td><b>毛利率 (Gross Margin)</b></td><td>$$\\frac{\\text{營業毛利}}{\\text{營業收入}} \\times 100\\%$$</td><td>產品定價權與技術壁壘（如台積電毛利率高達 <b>53%~55%</b>）。</td></tr><tr><td><b>營業利益率 (Operating Margin)</b></td><td>$$\\frac{\\text{營業利益}}{\\text{營業收入}} \\times 100\\%$$</td><td>扣除行銷與研發費用後的<b>本業真實獲利效率</b>。</td></tr><tr><td><b>純益率 (Net Margin)</b></td><td>$$\\frac{\\text{稅後淨利}}{\\text{營業收入}} \\times 100\\%$$</td><td>最終留在公司口袋裡的淨利比率。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：公開資訊觀測站 (MOPS) 企業財務比率統計</div>",
      "en": "<h3>🔍 Analyzing Product Competitiveness & Operational Efficiency</h3><table class=\"data-table\"><thead><tr><th>Margin Metric</th><th>Formula</th><th>Economic Meaning</th></tr></thead><tbody><tr><td><b>Gross Margin</b></td><td>$$\\frac{\\text{Gross Profit}}{\\text{Revenue}} \\times 100\\%$$</td><td>Pricing power & technology moat (TSMC Gross Margin ~<b>53%-55%</b>).</td></tr><tr><td><b>Operating Margin</b></td><td>$$\\frac{\\text{Operating Income}}{\\text{Revenue}} \\times 100\\%$$</td><td>Core business profitability after OpEx and R&D.</td></tr><tr><td><b>Net Margin</b></td><td>$$\\frac{\\text{Net Income}}{\\text{Revenue}} \\times 100\\%$$</td><td>Final bottom-line profit margin kept by shareholders.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Market Observation Post System (MOPS) Ratios</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "ROE 與杜邦", "en": "ROE DuPont" },
    "title": { "zh": "股東回報極致：股東權益報酬率 (ROE) 與杜邦拆解", "en": "The Ultimate Return Metric: ROE & DuPont Analysis" },
    "content": {
      "zh": "<h3>👑 巴菲特最看重的第一指標：ROE 與杜邦分析</h3><div class=\"formula-box\">$$\\text{ROE} = \\frac{\\text{稅後淨利}}{\\text{股東權益}} = \\underbrace{\\frac{\\text{稅後淨利}}{\\text{營業收入}}}_{\\text{純益率 (獲利力)}} \\times \\underbrace{\\frac{\\text{營業收入}}{\\text{總資產}}}_{\\text{資產週轉率 (效率)}} \\times \\underbrace{\\frac{\\text{總資產}}{\\text{股東權益}}}_{\\text{權益乘數 (槓桿)}}$$</div><p>巴菲特指出：連續 5 年 ROE 高於 <b>15%~20%</b> 的企業是極為罕見的優秀公司！杜邦分析將 ROE 拆解為三大驅動引擎：<b>高獲利能力、高轉動效率，或高財務槓桿</b>。</p><div class=\"data-source-badge\">📌 資料來源：杜邦公司 (DuPont) 經典財務管理分析模型</div>",
      "en": "<h3>👑 Warren Buffett's Favorite Metric: ROE & DuPont Formula</h3><div class=\"formula-box\">$$\\text{ROE} = \\frac{\\text{Net Income}}{\\text{Equity}} = \\underbrace{\\frac{\\text{Net Income}}{\\text{Revenue}}}_{\\text{Net Margin}} \\times \\underbrace{\\frac{\\text{Revenue}}{\\text{Assets}}}_{\\text{Asset Turnover}} \\times \\underbrace{\\frac{\\text{Assets}}{\\text{Equity}}}_{\\text{Equity Multiplier}}$$</div><p>Buffett considers companies with consistent ROE > <b>15%-20%</b> to be exceptional franchises. DuPont analysis breaks ROE into three drivers: <b>margin, efficiency, and leverage</b>.</p><div class=\"data-source-badge\">📌 Source: DuPont Classic Financial Management Model</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "官方數據", "en": "Official Data" },
    "title": { "zh": "實證數據調取：臺灣證券交易所 (TWSE) 與 MOPS 查閱", "en": "Retrieving Official Data from TWSE & MOPS" },
    "content": {
      "zh": "<h3>🌐 拒絕假新聞與明牌！學會查詢權威官方公開數據</h3><p>大一新鮮人做投資分析時，必須習慣直接從官方網站查詢第一手資料：</p><ul><li><b>公開資訊觀測站 (MOPS)</b>：查詢上市櫃公司每季財報、每月營收公告與重訊（<a href=\"https://mops.twse.com.tw\" target=\"_blank\" style=\"color:var(--accent-sky);\">mops.twse.com.tw</a>）。</li><li><b>臺灣證券交易所 (TWSE)</b>：查詢每日收盤價、本益比、殖利率、股價淨值比與外資買賣超統計。</li><li><b>金管會證期局 (FSC)</b>：查詢證券發行審規與裁罰紀錄，防範詐騙標的。</li></ul><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 公開數據服務平台</div>",
      "en": "<h3>🌐 Accessing Official Data: Rejecting Rumors & Fake Tips</h3><p>Freshmen must rely on authoritative first-hand financial databases:</p><ul><li><b>MOPS (mops.twse.com.tw)</b>: Official portal for quarterly financial reports and monthly revenue updates.</li><li><b>TWSE (twse.com.tw)</b>: Official statistics for P/E ratios, dividend yields, P/B ratios, and institutional fund flows.</li><li><b>FSC Securities Bureau</b>: Regulatory compliance and investor protection.</li></ul><div class=\"data-source-badge\">📌 Source: TWSE Official Data Portal</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "實證比對", "en": "TSMC vs UMC" },
    "title": { "zh": "實證案例：台積電 (2330) vs. 聯電 (2303) P/E 與 ROE 比對", "en": "Empirical Comparison: TSMC (2330) vs. UMC (2303)" },
    "content": {
      "zh": "<h3>⚔️ 晶圓代工雙雄實證估值比對 (2026 最新數據範例)</h3><table class=\"data-table\"><thead><tr><th>指標項目</th><th>台積電 (2330 TSMC)</th><th>聯電 (2303 UMC)</th><th>實證分析與估值差異</th></tr></thead><tbody><tr><td><b>技術與定位</b></td><td>先進行程霸主 (2nm/3nm)</td><td>成熟行程與特殊製程</td><td>台積電擁有強大定價權與技術溢價。</td></tr><tr><td><b>毛利率 (Gross Margin)</b></td><td><b>54.2%</b></td><td><b>32.1%</b></td><td>台積電產品附加價值高出 22 個百分點。</td></tr><tr><td><b>ROE (股東權益報酬率)</b></td><td><b>28.5%</b></td><td><b>13.8%</b></td><td>台積電股東權益回報率顯著優秀。</td></tr><tr><td><b>市場本益比 (P/E)</b></td><td><b>20 ~ 24 倍</b></td><td><b>10 ~ 12 倍</b></td><td>市場願意給予高 ROE 的台積電更高的估值溢價！</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 暨財報實證統計</div>",
      "en": "<h3>⚔️ Empirical Valuation: TSMC (2330) vs. UMC (2303)</h3><table class=\"data-table\"><thead><tr><th>Metric</th><th>TSMC (2330)</th><th>UMC (2303)</th><th>Empirical Insight</th></tr></thead><tbody><tr><td><b>Technology Node</b></td><td>Leading Edge (2nm/3nm)</td><td>Mature & Specialty Nodes</td><td>TSMC commands massive pricing power premium.</td></tr><tr><td><b>Gross Margin</b></td><td><b>54.2%</b></td><td><b>32.1%</b></td><td>TSMC gross margin is +22% higher.</td></tr><tr><td><b>ROE</b></td><td><b>28.5%</b></td><td><b>13.8%</b></td><td>TSMC delivers double the shareholder return rate.</td></tr><tr><td><b>Market P/E</b></td><td><b>20 ~ 24x</b></td><td><b>10 ~ 12x</b></td><td>Market pays a higher valuation premium for higher ROE!</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: TWSE & Corporate Financial Reports</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "殖利率與除息", "en": "Dividend Yield" },
    "title": { "zh": "現金殖利率 (Dividend Yield) 與填息安全檢視", "en": "Cash Dividend Yield & Dividend Safety Analysis" },
    "content": {
      "zh": "<h3>🎁 領股息也要賺價差！擺脫「貼息」陷阱</h3><div class=\"formula-box\">$$\\text{現金殖利率 (Cash Dividend Yield)} = \\frac{\\text{每股現金股利 (DPS)}}{\\text{買進股價 (Price)}} \\times 100\\%$$</div><p><b>除息 (Ex-Dividend) 鐵律</b>：發放 5 元股利時，除息當天股價會<b>扣除 5 元</b>。若股價沒有漲回原價（填息），發股利只是「左手換右手」，甚至還要繳股利所得稅！</p><div class=\"highlight-box\">⚠️ <b>防範貼息陷阱 2 大指標</b>：1. 盈餘發放率 (Payout Ratio) 適中 (50%~70%)；2. 本業營收維持成長，確保填息動力。</div><div class=\"data-source-badge\">📌 資料來源：證券投資人保護中心 (SFIPO) 除權息說明手冊</div>",
      "en": "<h3>🎁 Earning Dividends Without Capital Losses</h3><div class=\"formula-box\">$$\\text{Dividend Yield} = \\frac{\\text{Cash Dividend Per Share (DPS)}}{\\text{Stock Price}} \\times 100\\%$$</div><p><b>Ex-Dividend Rule</b>: When a $5 dividend is paid, stock price drops by $5 on ex-date. Unless price recovers (dividend payout completion), paying dividend is merely shifting cash from right pocket to left pocket.</p><div class=\"highlight-box\">⚠️ <b>Dividend Safety Rules</b>: 1. Moderate Payout Ratio (50%-70%); 2. Solid core revenue growth to ensure recovery.</div><div class=\"data-source-badge\">📌 Source: SFIPO Ex-Dividend Investor Guide</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "護城河理論", "en": "Economic Moats" },
    "title": { "zh": "評估企業經濟護城河 (Economic Moats) 與溢價", "en": "Assessing Economic Moats & Valuation Premiums" },
    "content": {
      "zh": "<h3>🏰 為什麼巴菲特強調企業必須擁有「護城河」？</h3><p>護城河是保護企業高 ROE 與高利潤率不受競爭者侵蝕的結構性優勢：</p><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🛡️ 1. 無形資產 (Intangible Assets)</h4><p>專利技術（如台積電半導體專利）、強大品牌（如 Apple、Coca-Cola）。</p></div><div class=\"concept-card\"><h4>🕸️ 2. 網絡效應 (Network Effects)</h4><p>用戶越多越有價值（如 Meta、LINE、Visa 支付網路）。</p></div><div class=\"concept-card\"><h4>🔄 3. 高轉換成本 (Switching Costs)</h4><p>客戶更換供應商成本極高（如 Enterprise ERP 系統、ASML 曝光機）。</p></div><div class=\"concept-card\"><h4>💰 4. 成本優勢 (Cost Advantage)</h4><p>規模經濟帶來的超低單位成本（如 亞馬遜 Amazon、Costco）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Morningstar 經濟護城河評估體系 (Pat Dorsey)</div>",
      "en": "<h3>🏰 Why Buffett Demands a Durable Economic Moat</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🛡️ 1. Intangible Assets</h4><p>Patents (TSMC semiconductor IPs) and brand power (Apple, Coca-Cola).</p></div><div class=\"concept-card\"><h4>🕸️ 2. Network Effects</h4><p>Value expands as user base grows (Meta, Visa, LINE).</p></div><div class=\"concept-card\"><h4>🔄 3. High Switching Costs</h4><p>Painful and expensive for clients to switch (Enterprise ERP, ASML lithography).</p></div><div class=\"concept-card\"><h4>💰 4. Cost Advantage</h4><p>Unbeatable economies of scale (Amazon, Costco).</p></div></div><div class=\"data-source-badge\">📌 Source: Morningstar Economic Moat Rating System (Pat Dorsey)</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "投資金律", "en": "Golden Rules" },
    "title": { "zh": "大一新鮮人理性投資四大金律", "en": "4 Golden Rules of Rational Investing for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 遠離炒作陷阱，建立終身受用的投資思維</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 1. 絕不聽明牌炒作</h4><p>不買不懂的公司，拒絕 Line 飆股群組與社交媒體煽動。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🔍 2. 堅持基本面與估值</h4><p>買進前先算 P/E、查看 ROE 與官方財報，確定具備安全邊際。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🧺 3. 分散風險不壓單押</h4><p>利用 ETF 或跨產業配置，避免單一公司黑天鵝衝擊。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>⏳ 4. 陪同好企業長期成長</h4><p>讓複利效應 (Compounding) 成為你財富增長的最佳盟友。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會證期局 (FSC) 投資人教育與保護關懷原則</div>",
      "en": "<h3>🛡️ Building Lifetime Financial Wisdom</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 1. Never Trade on Hot Tips</h4><p>Avoid buying what you don't understand; reject spam investment groups.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🔍 2. Focus on Fundamentals & Valuation</h4><p>Check P/E, ROE, and official reports to ensure a Margin of Safety.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🧺 3. Diversify Portfolio</h4><p>Spread capital across sectors or ETFs to prevent black swan hits.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>⏳ 4. Compound with Great Businesses</h4><p>Let long-term compounding work as your powerful financial ally.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Securities Bureau Investor Protection Guide</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第四週全景知識體系圖與觀念整合", "en": "Week 4 Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第四週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>股權本質 (Hour 1)</b>：股票 = 企業微型股權 ➔ IPO 一級市場 / TWSE 二級市場 ➔ 市值 = 股價 × 股數 ➔ 總報酬 = 價差 + 股息。</p><p><b>估值指標 (Hour 2)</b>：價格 ≠ 價值 ➔ 本益比 P/E (回本年限) ➔ P/E 河流圖與歷史位階 ➔ P/B 淨值比 (重資產) ➔ 同業比對法與陷阱防範。</p><p><b>財報實證 (Hour 3)</b>：三大財報連動 ➔ 毛利率/營業利益率/純益率 ➔ 巴菲特第一指標 ROE (杜邦拆解) ➔ 台積電 vs. 聯電實證 ➔ 護城河與 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 4 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Equity Basics (Hour 1)</b>: Shares = Fractional Ownership ➔ IPO vs. TWSE ➔ Market Cap = Price × Shares ➔ Total Return = Gain + Dividend.</p><p><b>Valuation Multiples (Hour 2)</b>: Price ≠ Value ➔ P/E Ratio (Payback) ➔ P/E River Bands ➔ P/B Ratio ➔ Peer Multiples & Traps.</p><p><b>Empirical Analysis (Hour 3)</b>: 3 Financial Statements ➔ Margins ➔ ROE DuPont Formula ➔ TSMC vs. UMC Empirical ➔ Moats & 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第五週預告 (ETF 狂熱與被動投資)", "en": "Reflections & Week 5 Preview (ETF Mania & Passive Investing)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第四週「股市入門與企業價值估算」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交本週小組評估報告。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第五週課程預告：ETF 狂熱、主動型 ETF 與被動投資</h4><p>下週我們將探討近兩年席捲全台的 <b>0050、00940 高股息 ETF 狂熱</b>，拆解被動式 ETF 與主動型 ETF 的差異、成分股替換機制與複利效果！</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 4!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button in the navbar to submit your team valuation report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 5 Preview: ETF Mania, Active ETFs & Passive Investing</h4><p>Next week, we'll dive into high-dividend ETF crazes (0050, 00940), analyzing active vs. passive ETFs, index rebalancing, and compounding!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: TSMC / Apple Share Ownership Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateStockOwnership() {
  const budget = parseFloat(document.getElementById('budgetInput').value) || 10000;
  const price = parseFloat(document.getElementById('stockPriceInput').value) || 1000;
  const dps = parseFloat(document.getElementById('dpsInput').value) || 18.0;
  const sharesOut = parseFloat(document.getElementById('sharesOutInput').value) || 25.93; // in billions

  const shares = budget / price; // fractional shares
  const annualDividend = shares * dps;
  const dividendYield = (dps / price) * 100;
  const totalMarketCap = price * sharesOut; // in billions NTD

  const resultDiv = document.getElementById('ownershipResult');
  resultDiv.innerHTML = `
    📊 <b>計算結果分析</b>：<br>
    • 以 <b>${budget.toLocaleString()} 元</b> 預算買進 (每股 ${price} 元)：可持有 <b>${shares.toFixed(2)} 股</b>。<br>
    • 估算每年可領取現金股利：<b>${annualDividend.toFixed(1)} 元</b> (現金殖利率 <b>${dividendYield.toFixed(2)}%</b>)。<br>
    • 該公司總市值高達：<b>${totalMarketCap.toLocaleString(undefined, {maximumFractionDigits:1})} 億元新台幣</b>。<br>
    💡 <i>在零股交易制度下，即使只有 10,000 元，你也是該企業真正的合法股東！</i>
  `;
}

// HOUR 2 MODAL: Bubble Tea Shop P/E Valuation Comparison
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculatePEValuation() {
  const pA = parseFloat(document.getElementById('priceAInput').value) || 120;
  const epsA = parseFloat(document.getElementById('epsAInput').value) || 10.0;
  const pB = parseFloat(document.getElementById('priceBInput').value) || 30;
  const epsB = parseFloat(document.getElementById('epsBInput').value) || 1.0;

  const peA = pA / epsA;
  const peB = pB / epsB;

  const resultDiv = document.getElementById('peValuationResult');
  let winnerText = "";
  if (peA < peB) {
    winnerText = `珍奶店 A 本益比 (${peA.toFixed(1)} 倍) 低於 珍奶店 B (${peB.toFixed(1)} 倍)！儘管單股價格較高，但從回本年限來看，珍奶店 A 相對更便宜！`;
  } else if (peA > peB) {
    winnerText = `珍奶店 B 本益比 (${peB.toFixed(1)} 倍) 高於 珍奶店 A (${peA.toFixed(1)} 倍)。請檢驗珍奶店 B 是否具備更高的成長率！`;
  } else {
    winnerText = `兩家珍奶店本益比均為 ${peA.toFixed(1)} 倍，估值位階相同。`;
  }

  resultDiv.innerHTML = `
    🔍 <b>估值分析結果</b>：<br>
    • <b>珍奶店 A</b>：股價 ${pA} 元 ÷ EPS ${epsA} 元 = 本益比 <b>${peA.toFixed(1)} 倍</b>（需 ${peA.toFixed(1)} 年回本）<br>
    • <b>珍奶店 B</b>：股價 ${pB} 元 ÷ EPS ${epsB} 元 = 本益比 <b>${peB.toFixed(1)} 倍</b>（需 ${peB.toFixed(1)} 年回本）<br>
    💡 <b>結論</b>：${winnerText}
  `;
}

// HOUR 3 GAME: Stock Valuation Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：市值比較盲測 (Market Cap Check)",
    question: "公司 A 單股股價 1,000 元，總股數 1 億股；公司 B 單股股價 50 元，總股數 50 億股。請問哪一家公司規模總市值較大？",
    options: [
      { text: "公司 A 比較大 (因為股價 1,000 元較貴)", correct: false },
      { text: "公司 B 比較大 (市值 2,500 億元 > 公司 A 1,000 億元)", correct: true },
      { text: "兩家公司規模完全一樣大", correct: false },
      { text: "無法比較", correct: false }
    ],
    explain: "市值 = 股價 × 總股數。公司 B 市值為 50 × 50億 = 2,500 億元，大於公司 A 的 1,000 × 1億 = 1,000 億元！"
  },
  {
    level: 2,
    title: "關卡 2：本益比 (P/E) 回本算術",
    question: "某家半導體公司當前股價 600 元，今年預估每股盈餘 (EPS) 為 30 元。請問其本益比為幾倍？投資人需幾年回本？",
    options: [
      { text: "本益比 10 倍 (需 10 年回本)", correct: false },
      { text: "本益比 20 倍 (需 20 年回本)", correct: true },
      { text: "本益比 30 倍 (需 30 年回本)", correct: false },
      { text: "本益比 18 倍 (需 18 年回本)", correct: false }
    ],
    explain: "P/E = 股價 ÷ EPS = 600 ÷ 30 = 20 倍。代表在獲利不變下需 20 年回本。"
  },
  {
    level: 3,
    title: "關卡 3：避開一次性獲利陷阱 (P/E Trap)",
    question: "某紡織廠出售閒置土地獲利，使今年 EPS 暴增至 15 元，股價 45 元 (P/E 僅 3 倍)，但其本業連年虧損。你該如何評價這張股票？",
    options: [
      { text: "非常划算，P/E 3 倍應該立刻重押買進", correct: false },
      { text: "這是本益比陷阱！一次性土地獲利不可持續，應扣除非經常性損益", correct: true },
      { text: "P/E 越低越安全，無須關注本業", correct: false },
      { text: "代表公司經營團隊具備優良土地開發能力", correct: false }
    ],
    explain: "業外賣地屬於一次性處分損益，不能反映本業營運現金流。扣除非經常性損益後本業為負，3 倍 P/E 屬於典型的估值陷阱！"
  },
  {
    level: 4,
    title: "關卡 4：巴菲特 ROE 與經濟護城河",
    question: "巴菲特最看重的股東權益報酬率 (ROE)，可以透過杜邦拆解為哪三大驅動引擎？",
    options: [
      { text: "毛利率、營業利益率、稅後純益率", correct: false },
      { text: "純益率 (獲利力)、資產週轉率 (效率)、權益乘數 (財務槓桿)", correct: true },
      { text: "本益比、股價淨值比、現金殖利率", correct: false },
      { text: "股價、總股數、淨資產", correct: false }
    ],
    explain: "杜邦公式：ROE = (稅後淨利/營業收入) × (營業收入/總資產) × (總資產/股東權益) = 純益率 × 資產週轉率 × 權益乘數！"
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
    let badgeText = userScore === 400 ? "🏆 股市估值大師徽章 (Master Analyst)" : "🥉 股市估值初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第四週「股市入門與企業價值估算」核心觀念！</p>
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
function submitW4Homework(e) {
  e.preventDefault();
  alert("🎉 第四週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
