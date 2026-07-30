/**
 * 115 學年度「管理探索二」第十週：不動產、房地產與租買決策財務學
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w10_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十週課程導論：不動產、房地產與租買決策財務學", "en": "Week 10 Intro: Real Estate Economics & Rent vs Buy Math" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🏠 告別盲目買房迷思：解碼不動產價值、房貸算術與租買決策</h2><p>「羅伯特·清崎名言：除非房子能為你帶來淨現金流，否則自住房是你最大的負債而非資產！(Unless a house generates cash flow, your home is a liability!)\"</p></div><p>歡迎來到第十週！從大一在學校附近租房簽合約、點交押金，到未來畢業成家面臨人生最大筆消費「買房」，不動產都是我們無法迴避的重大財務決策。本單元將帶領大家看懂房屋權狀公設比、租屋專法保護、房貸本息與本金攤還算術、新青安與央行限貸令，並建立租買決策的機會成本觀念。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：租屋與權狀</h4><p>看懂權狀主建物與公設比，掌握押金 2 個月上限與電費計費規範。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：房貸與租買</h4><p>精算本息均等月繳額，評估房貸負擔率 <= 33% 與租買機會成本。</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部地政司 / 財政部新青安專案 / 中央銀行選擇性信用管制</div>",
      "en": "<div class=\"hero-box\"><h2>🏠 Real Estate Economics & Financial Rent vs Buy Decisions</h2><p>\"Robert Kiyosaki: Unless a house generates cash flow, your home is a liability, not an asset.\"</p></div><p>Welcome to Week 10! From college apartment renting to future homeownership, real estate represents life's largest financial commitment. We will decode property title public area ratios, tenant protection laws, mortgage math, and rent vs buy opportunity costs.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Rental & Title</h4><p>Decode public area ratios and master tenant protection laws and deposit caps.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Mortgages & Renting</h4><p>Calculate equal repayment installments; cap DTI at 33% and evaluate opportunity cost.</p></div></div><div class=\"data-source-badge\">📌 Source: MOI Dept of Land Affairs / MOF Youth Housing Loans / CBC Credit Controls</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十週 3 小時學習地圖與核心技能樹", "en": "Week 10 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>不動產特質、權狀坪數與租屋實務</b> (Slide 01 - 10)<br>不動產 4 特質、主建物 vs 公設比算術、實價登錄 2.0、租賃專法押金電費規範、頭期款與 LTV</td><td>🎯 <b>1小時活動</b>：房屋權狀公設比與主建物扣除計算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>房貸試算算術、新青安與限貸令</b> (Slide 11 - 20)<br>本息均等 vs 本金均等攤還、寬限期陷阱、新青安 4 大優惠、央行第 7 波限貸令與 DTI 負擔率 33%</td><td>🎯 <b>2小時活動</b>：房貸本息均等 vs 本金均等試算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>租買決策財務學與新鮮人實戰</b> (Slide 21 - 30)<br>租買機會成本算術、淨租金收益率、房地合一稅 2.0 閉鎖期、10 年頭期款超前部署與 4 大金律</td><td>🎮 <b>3小時小遊戲</b>：不動產租買達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人大學租屋體檢與未來租買試算</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 10 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Real Estate Basics, Titles & Renting</b> (Slide 01 - 10)<br>4 Real Estate features, Public Area Ratio, Price Registration 2.0, Tenant Laws & Down Payment</td><td>🎯 <b>Hour 1 Activity</b>: Public Area Ratio Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Mortgage Math, Youth Loans & Credit Rules</b> (Slide 11 - 20)<br>Equal Installment vs Principal, Grace period traps, Youth Loans, CBC Credit Controls & DTI cap</td><td>🎯 <b>Hour 2 Activity</b>: Mortgage Repayment Method Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Rent vs Buy Economics & Action</b> (Slide 21 - 30)<br>Rent vs Buy Opportunity Cost, Net Rental Yields, Property Tax 2.0, 10-Yr Plan & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: Real Estate Master Challenge<br>📝 <b>Class Assignment</b>: Student Rental Audit & Housing Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "不動產特質", "en": "Property Features" },
    "title": { "zh": "不動產 (Real Estate) 的 4 大特性：異質、不可移動、高總價與長壽命", "en": "4 Core Characteristics of Real Estate Assets" },
    "content": {
      "zh": "<h3>🏢 為什麼房地產市場與一般商品交易完全不同？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 異質性 (Heterogeneity)</h4><p>世界上沒有兩間完全相同的房子！即使同棟大樓、不同樓層與採光價格都不同。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 不可移動性 (Immobility)</h4><p>房屋與土地位置固定，無法像股票或商品般跨區搬運套利（Location, Location, Location!）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. 高總價與高槓桿 (High Value)</h4><p>動輒數百萬至數千萬元，必須透過銀行房屋貸款 (80% 槓桿) 才能完成交易。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>4. 長生命週期與低流動性</h4><p>房屋使用壽命長達 50-70 年，但買賣變現需要數月時間，流動性遠低於股票。</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部地政司不動產市場概論</div>",
      "en": "<h3>🏢 Why Is Real Estate Trading Fundamentally Different?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Heterogeneity (異質性)</h4><p>No two properties are identical! Floor height, view, and orientation create price gaps.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Immobility (不可移動性)</h4><p>Land location is fixed; cannot be moved for cross-market arbitrage (Location, Location!).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. High Value & High Leverage</h4><p>High price tags require 80% bank mortgage leverage to complete transactions.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>4. Long Life & Low Liquidity</h4><p>Buildings last 50-70 years, but selling takes months, offering lower liquidity than stocks.</p></div></div><div class=\"data-source-badge\">📌 Source: MOI Department of Land Affairs Overview</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "權狀與公設比", "en": "Title & Public Area" },
    "title": { "zh": "看懂房屋權狀坪數：主建物、陽台附屬建物與「公設比」", "en": "Decoding Property Titles: Main Living Area vs. Public Area Ratio" },
    "content": {
      "zh": "<h3>📐 買 30 坪房子，為什麼進去住起來感覺只有 20 坪？</h3><p>台灣房屋權狀坪數包含三大塊：<b>主建物（室內實際面積）+ 附屬建物（陽台、雨遮）+ 共用部分（大廳、電梯、梯廳、公設）</b>。</p><div class=\"formula-box\">$$\\text{公設比 (Public Area Ratio)} = \\frac{\\text{共用部分坪數}}{\\text{權狀總坪數 (主建物 + 附屬 + 共用)}} \\times 100\\%$$</div><p><b>算術實例</b>：買了 30 坪房子，若公設比高達 <b>35%</b>，表示你花了 35% 的錢買走廊、電梯與公設！室內主建物僅剩 `30 * (1 - 0.35) = 19.5 坪`！</p><div class=\"data-source-badge\">📌 資料來源：內政部地政司建物所有權狀登記規範</div>",
      "en": "<h3>📐 You Bought 30 Pings, But Indoor Space Feels Like 20 Pings?</h3><p>Property title area consists of <b>Main Living Area + Balcony + Public Shared Area (Lobby, Elevators)</b>.</p><div class=\"formula-box\">$$\\text{Public Area Ratio} = \\frac{\\text{Shared Area}}{\\text{Total Registered Title Area}} \\times 100\\%$$</div><p><b>Example</b>: A 30-ping apartment with a <b>35% Public Area Ratio</b> leaves only `30 * (1 - 0.35) = 19.5 pings` of real indoor living space!</p><div class=\"data-source-badge\">📌 Source: MOI Property Title Registration Regulations</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "實價登錄 2.0", "en": "Price Registration 2.0" },
    "title": { "zh": "實價登錄 2.0 門牌完整揭露與預售屋換約限制", "en": "Real Estate Price Registration 2.0 & Anti-Speculation Rules" },
    "content": {
      "zh": "<h3>🔍 房價資訊透明化！告別過去房仲漫天要價時代</h3><p>內政部推動<b>「實價登錄 2.0」與《平均地權條例》修正案</b>：</p><ul><li><b>門牌完整揭露至門牌號碼</b>：成交價格查閱從過去「1-30 號區間」透明化揭露至「具體門牌與樓層」，查房價一目了然。</li><li><b>預售屋即時登錄與禁止換約</b>：預售屋簽約 30 天內必須申報實價登錄；全面禁止預售屋換約轉售炒作，打擊紅單轉售飆價。</li></ul><div class=\"data-source-badge\">📌 資料來源：內政部地政司實價登錄 2.0 官方門戶 (lvr.land.moi.gov.tw)</div>",
      "en": "<h3>🔍 Complete Price Transparency: Ending Market Price Gouging</h3><p>MOI enacted <b>Price Registration 2.0 & Land Rights Equalization Act Amendments</b>:</p><ul><li><b>Exact Address Disclosure</b>: Transaction records now disclose exact door numbers and floor details.</li><li><b>Pre-sale 30-Day Registration & Transfer Ban</b>: Contracts must be logged within 30 days; pre-sale contract flipping is banned to stop speculation.</li></ul><div class=\"data-source-badge\">📌 Source: MOI Real Estate Price Registration Portal</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "租屋防坑 1", "en": "Rental Laws 1" },
    "title": { "zh": "大一新鮮人租屋防坑實務 (一)：租賃專法與押金最高 2 個月限制", "en": "Freshman Rental Guide 1: Tenant Protection & 2-Month Deposit Cap" },
    "content": {
      "zh": "<h3>🔑 大一新鮮人簽租屋合約第一課：保護個人法律權益</h3><p>根據內政部《住宅租賃契約應約定及不得約定事項》（租賃專法）：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💵 1. 押金上限最高 2 個月</h4><p>房東收取的押金<b>最高不得超過 2 個月租金</b>！若月租 8,000 元，押金上限為 16,000 元，退租時房東必須無息返還。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>📝 2. 採用內政部定型化契約範本</h4><p>絕不安裝或簽署房東自行修改的惡意私約！認明內政部官方定型化契約，條款最公平。</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部地政司住宅租賃定型化契約範本</div>",
      "en": "<h3>🔑 Lesson 1 for College Renters: Protect Your Legal Rights</h3><p>According to the MOI Residential Rental Contract Standards:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💵 1. Security Deposit Capped at 2 Months</h4><p>Deposits cannot exceed <b>2 months' rent</b> ($8k rent -> max deposit $16k), fully refundable upon lease end.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>📝 2. Use Official MOI Contract Templates</h4><p>Never sign unfair private contracts! Always demand official MOI standardized templates.</p></div></div><div class=\"data-source-badge\">📌 Source: MOI Standardized Rental Contract Terms</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "租屋防坑 2", "en": "Rental Laws 2" },
    "title": { "zh": "大一新鮮人租屋防坑實務 (二)：電費計費上限、修繕與點差陷阱", "en": "Freshman Rental Guide 2: Electricity Caps & Damage Disputes" },
    "content": {
      "zh": "<h3>⚡ 拒絕房東超收電費！看清修繕責任與退租點交細節</h3><ul><li><b>電費計費上限新規</b>：金管會與內政部規定，分租套房電費每度<b>不得超過台電當月用電最高級距電價（或按台電帳單平均電費計收）</b>，房東不得濫收一度 7 元高價！</li><li><b>修繕責任歸屬</b>：房屋設備自然老化損壞（如冷氣故障、漏水）由房東負擔修繕；房客故意損壞才由房客賠償。</li><li><b>入住點交拍照留存</b>：搬進去第一天，將牆面、地板、家電現況<b>全拍照錄影留存存證</b>，防止退租時被房東扣押金！</li></ul><div class=\"data-source-badge\">📌 資料來源：內政部住宅租賃新版電費計費規範</div>",
      "en": "<h3>⚡ Reject Electricity Gouging! Move-in Photo Evidence Essentials</h3><ul><li><b>Electricity Rate Cap</b>: Landlords cannot charge over Taipower's max seasonal rate tier (or average bill rate)!</li><li><b>Maintenance Responsibility</b>: Normal wear and tear (AC breakdown, leaks) is paid by the landlord.</li><li><b>Move-in Photo Inspection</b>: Take date-stamped photos/videos of walls, floors, and appliances on Day 1 to safeguard your deposit!</li></ul><div class=\"data-source-badge\">📌 Source: MOI New Electricity Fee Rules for Rental Housing</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "房價所得比", "en": "Price-to-Income" },
    "title": { "zh": "實證數據：全台主要縣市房價所得比 (Price-to-Income Ratio)", "en": "Empirical Data: Taiwan Housing Price-to-Income Ratios" },
    "content": {
      "zh": "<h3>📊 不吃不喝幾年才買得起房？最新權威地政統計</h3><p><b>房價所得比 (Price-to-Income Ratio)</b> 代表中位數房價除以中位數家庭年可支配所得：</p><table class=\"data-table\"><thead><tr><th>縣市區域</th><th>房價所得比 (倍)</th><th>房貸負擔率 (%)</th><th>國際合理標準與負擔壓力</th></tr></thead><tbody><tr><td><b>台北市</b></td><td><b>約 16.0 倍</b></td><td><b>> 67%</b></td><td><b>極度沉重！</b>不吃不喝 16 年才買得起。</td></tr><tr><td><b>新北市 / 台中市</b></td><td><b>約 12.5 倍 / 11.8 倍</b></td><td><b>> 50%</b></td><td>負擔過重（房貸占家庭收入一半以上）。</td></tr><tr><td><b>全國平均 / 國際標準</b></td><td><b>全國約 10.2 倍 (國際 3-5倍)</b></td><td><b>全國約 43%</b></td><td>顯示買房負擔沉重，必須精算財務槓桿。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：內政部地政司 2026 最新房價負擔能力統計季度報告</div>",
      "en": "<h3>📊 How Many Years of Zero-Spending to Buy a Home?</h3><p><b>Price-to-Income Ratio</b> = Median Housing Price / Median Annual Family Income:</p><table class=\"data-table\"><thead><tr><th>Region</th><th>Price-to-Income Ratio</th><th>Mortgages Burden Rate</th><th>International Standard & Stress</th></tr></thead><tbody><tr><td><b>Taipei City</b></td><td><b>~ 16.0x</b></td><td><b>> 67%</b></td><td><b>Extremely Heavy!</b> 16 years of zero spending.</td></tr><tr><td><b>New Taipei / Taichung</b></td><td><b>~ 12.5x / 11.8x</b></td><td><b>> 50%</b></td><td>Heavy stress (Mortgage > 50% family income).</td></tr><tr><td><b>National Avg / Int'l Std</b></td><td><b>National ~ 10.2x (Int'l 3-5x)</b></td><td><b>National ~ 43%</b></td><td>Highlighting the need for strict leverage planning.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MOI Housing Affordability Quarterly Report</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "頭期款與LTV", "en": "Down Payment & LTV" },
    "title": { "zh": "買房頭期款 (Down Payment) 20% 與貸款成數 LTV (80%) 概念", "en": "Down Payments (20%) & Loan-to-Value (LTV 80%) Ratios" },
    "content": {
      "zh": "<h3>💰 買 1,000 萬元的房子，自己手上需要準備多少現金？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. 貸款成數 LTV (Loan-to-Value)</h4><p>銀行最高貸款成數通常為 <b>80% (8 成)</b>。買 1,000 萬房子，銀行最高借你 800 萬元。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>2. 自備頭期款 (Down Payment)</h4><p>買方必須自行準備 <b>20% (2 成)</b> 現金頭期款！買 1,000 萬房子，自備款為 <b>200 萬元現金</b>。</p></div></div><div class=\"highlight-box\">⚠️ <b>隱形交易成本</b>：除了 20% 頭期款，還需額外準備 <b>5% 現金 (約 50 萬元)</b> 支付契稅、仲介費、代書費與基本家具裝修預算！</div><div class=\"data-source-badge\">📌 資料來源：中央銀行銀行房貸成數授信規範</div>",
      "en": "<h3>💰 Buying a $10M NTD Home: How Much Cash Do You Need?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. Loan-to-Value (LTV 80%)</h4><p>Banks lend up to <b>80%</b> of property valuation. For a $10M home, bank lends $8M.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>2. Down Payment (20%)</h4><p>Buyer must provide <b>20%</b> cash down payment ($2M cash for a $10M home).</p></div></div><div class=\"highlight-box\">⚠️ <b>Hidden Transaction Costs</b>: Prepare an extra <b>5% ($500k cash)</b> for deed taxes, agent fees, and furniture!</div><div class=\"data-source-badge\">📌 Source: Central Bank Mortgage LTV Regulations</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>不動產特質</b>：異質性、不可移動性、高總價與低流動性。看懂權狀主建物與公設比。</li><li><b>租屋權益</b>：押金上限 2 個月；電費不得超收；入住拍照存證保護押金。</li><li><b>買房基礎</b>：全國房價所得比 10.2 倍；準備 20% 頭期款 + 5% 交易雜費。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 公設比計算器」</b> 按鈕，輸入房屋權狀總坪數與公設坪數，精算你的實質室內主建物坪數與公設比例！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Real Estate Basics</b>: Heterogeneity, Immobility, High Value. Decode Public Area Ratios.</li><li><b>Tenant Rights</b>: 2-month deposit cap; electricity rate caps; take move-in photos.</li><li><b>Homebuying</b>: National Price-to-Income ratio 10.2x; prepare 20% down payment + 5% fees.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate net living space!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "房貸還款方式", "en": "Mortgage Methods" },
    "title": { "zh": "房貸兩大還款方式：本息平均攤還 (Equal Total) vs. 本金平均攤還 (Equal Principal)", "en": "Mortgage Math: Equal Installment vs. Equal Principal" },
    "content": {
      "zh": "<h3>💵 選擇哪種房貸還款方式，利息總額相差幾十萬？</h3><table class=\"data-table\"><thead><tr><th>還款方式</th><th>月繳金額特徵</th><th>利息總額負擔</th></tr></thead><tbody><tr><td><b>1. 本息平均攤還 (Equal Total)</b> 🌟</td><td><b>每月繳款金額固定的相同金額</b>（如每月繳 32,000 元）。初期大部分還利息，後期大部分還本金。</td><td><b>理財首選！</b>現金流好規劃，為全台 90% 房貸族採用。</td></tr><tr><td><b>2. 本金平均攤還 (Equal Principal)</b></td><td><b>每月還固定本金 + 剩餘利息</b>。前期月繳額極高（如首月 42,000 元），逐月遞減。</td><td><b>利息總額較省</b>，但前期現金流負擔極大，適合高收入族。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：中華民國銀行商業同業公會房貸試算標準說明</div>",
      "en": "<h3>💵 Which Repayment Method Saves Tens of Thousands in Interest?</h3><table class=\"data-table\"><thead><tr><th>Repayment Method</th><th>Monthly Payment Profile</th><th>Total Interest Burden</th></tr></thead><tbody><tr><td><b>1. Equal Installment (本息攤還)</b> 🌟</td><td><b>Fixed monthly payment amount</b> ($32k/mo). Early payments mostly interest, later mostly principal.</td><td><b>Popular Choice!</b> Predictable cash flows; used by 90% of borrowers.</td></tr><tr><td><b>2. Equal Principal (本金攤還)</b></td><td><b>Fixed principal + declining interest</b>. Early monthly payments are high ($42k/mo), decreasing over time.</td><td><b>Saves Total Interest</b>, but heavy early cash flow burden.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: The Bankers Association of ROC Repayment Guide</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "寬限期陷阱", "en": "Grace Period Traps" },
    "title": { "zh": "寬限期 (Grace Period) 的利與弊：前 3-5 年只繳利息，期滿後月繳額暴增算術", "en": "Grace Period Traps: Interest-Only Years vs. Payment Spikes" },
    "content": {
      "zh": "<h3>⚠️ 前 5 年輕鬆爽，第 6 年月繳額瞬間暴增 2.5 倍！</h3><p><b>房貸寬限期 (Grace Period)</b> 指前 3-5 年「只繳利息，不還本金」：</p><div class=\"formula-box\">$$\\text{30年期 800萬房貸 (利率 2.2%)}: \\text{寬限期內月繳 } \$14,667 \\text{ 元} \\rightarrow \\text{期滿後月繳 } \$34,800 \\text{ 元！}$$</div><p><b>陷阱警示</b>：若買房時只考量寬限期內負擔得起（月繳 1.4 萬），期滿後本金被迫在剩餘 25 年內攤還，月繳額暴增至 3.4 萬，常導致房客無法負擔而被逼斷供賣房！</p><div class=\"data-source-badge\">📌 資料來源：中央銀行與金管會銀行局房貸風險警示手冊</div>",
      "en": "<h3>⚠️ Easy First 5 Years, But Payments Spike 2.5x in Year 6!</h3><p>A <b>Grace Period</b> allows paying <b>interest only for the first 3-5 years</b>:</p><div class=\"formula-box\">$$\$8\text{M 30-Yr Mortgage (2.2%)}: \text{Grace Period: } \$14,667/\text{mo} \rightarrow \text{Post Grace: } \$34,800/\text{mo!}$$</div><p><b>Trap Warning</b>: Budgeting based on low interest-only payments leads to mortgage default when full principal repayments kick in!</p><div class=\"data-source-badge\">📌 Source: Central Bank & FSC Mortgage Risk Disclosures</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "新青安貸款", "en": "Youth Housing Loan" },
    "title": { "zh": "財政部「新青年安心成家購屋優惠貸款 (新青安)」四大優惠解析", "en": "MOF New Youth Housing Loan 4 Major Perks" },
    "content": {
      "zh": "<h3>🏡 專為無房青年設計！政府補貼利息的全台熱潮貸款</h3><table class=\"data-table\"><thead><tr><th>新青安優惠維度</th><th>政策規定與數據細節</th><th>實務優勢與注意事項</th></tr></thead><tbody><tr><td><b>1. 最高貸款額度</b></td><td><b>最高 1,000 萬元新台幣</b></td><td>額度大幅提升，符合首購族需求。</td></tr><tr><td><b>2. 最長貸款年限</b></td><td><b>最長 40 年期 (原本 30 年)</b></td><td>拉長年限降低每月攤還金額負擔。</td></tr><tr><td><b>3. 最長寬限期</b></td><td><b>最長 5 年 (原本 3 年)</b></td><td>給予首購族更長初期資金彈性。</td></tr><tr><td><b>4. 利息補貼優惠</b></td><td><b>政府補貼利息 1.5 碼 (0.375%)</b></td><td>實質年利率降至約 1.775% 低點！</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財政部公股銀行新青年安心成家貸款業務公告</div>",
      "en": "<h3>🏡 Government Interest Subsidies for First-Time Homebuyers</h3><table class=\"data-table\"><thead><tr><th>Perk Dimension</th><th>Policy Rules & Details</th><th>Practical Advantages & Notes</th></tr></thead><tbody><tr><td><b>1. Max Loan Amount</b></td><td><b>Up to $10,000,000 NTD</b></td><td>Significantly boosted for first-time buyers.</td></tr><tr><td><b>2. Max Loan Term</b></td><td><b>Up to 40 Years (vs 30 yrs)</b></td><td>Lowers monthly installment burdens.</td></tr><tr><td><b>3. Max Grace Period</b></td><td><b>Up to 5 Years (vs 3 yrs)</b></td><td>Offers extended early cash flow flexibility.</td></tr><tr><td><b>4. Interest Rate Subsidy</b></td><td><b>Subsidized by 0.375% (1.5 ticks)</b></td><td>Nets low interest rate around ~1.775%!</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Ministry of Finance Youth Housing Loan Disclosures</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "央行限貸令", "en": "Credit Controls" },
    "title": { "zh": "央行第七波選擇性信用管制 (限貸令)：取消寬限期與降成數", "en": "Central Bank Selective Credit Controls: 7th Wave Rules" },
    "content": {
      "zh": "<h3>🛑 打擊囤房炒作！央行史上最嚴限貸令新規內容</h3><p>為了抑制房市過熱與投機炒房，中央銀行祭出<b>「第七波選擇性信用管制」</b>：</p><ul><li><b>名下有房者 (第 1 戶無房貸名下有屋)</b>：申請購屋貸款<b>取消寬限期！</b>（第一個月起必須本息攤還）。</li><li><b>自然人第 2 戶購屋貸款</b>：全國不分區域，貸款成數上限降至 <b>5 成 (50%)</b>，且一律無寬限期！</li><li><b>公司法人與豪宅貸款</b>：貸款成數上限降至 3 成。</li></ul><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 第七波選擇性信用管制規定公告</div>",
      "en": "<h3>🛑 Tightening Mortgage Rules to Cool Speculative Housing</h3><p>The Central Bank issued the <b>7th Wave Selective Credit Controls</b>:</p><ul><li><b>Homeowners with 1st Property</b>: Buying additional property gets <b>ZERO Grace Period!</b></li><li><b>Natural Persons 2nd Home Mortgages</b>: Nationwide LTV capped at <b>50% (5成)</b> with ZERO Grace Period!</li><li><b>Corporations & Luxury Housing</b>: LTV capped at 30%.</li></ul><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Credit Control Press Release</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "房貸負擔率DTI", "en": "DTI Cap 33%" },
    "title": { "zh": "房貸負擔率 (DTI) 警戒線：每月房貸扣款不超過總收入 33%", "en": "Mortgage Debt-to-Income (DTI) Cap: Keep Below 33%" },
    "content": {
      "zh": "<h3>📐 防範成為「房奴」的個人財務安全警戒線</h3><p><b>房貸負擔率 (Debt-to-Income, DTI)</b> 是評估房貸對生活品質影響的核心指標：</p><div class=\"formula-box\">$$\\text{房貸負擔率 (DTI)} = \\frac{\\text{每月房貸本息攤還金額}}{\\text{每月家庭總可支配收入}} \\times 100\\% \\le 33\\%$$</div><table class=\"data-table\"><thead><tr><th>DTI 比例區間</th><th>財務健康狀態</th><th>生活品質與風險評估</th></tr></thead><tbody><tr><td><b><= 33% (1/3 理想線)</b> 🌟</td><td><b>健康安全！</b></td><td>兼顧生活品質、儲蓄投資與生活娛樂。</td></tr><tr><td><b>34% - 50% (警戒區)</b></td><td><b>負擔沉重！</b></td><td>生活品質壓縮，無力應對突發失業或疾病事故。</td></tr><tr><td><b>> 50% (房奴危險區)</b></td><td><b>極度危險！</b></td><td>淪為「房奴」，高度面臨斷供法拍風險！</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 房貸安全負擔標準</div>",
      "en": "<h3>📐 The Financial Safety Line Protecting You from House Slavery</h3><p><b>Debt-to-Income (DTI) Ratio</b> assesses the impact of mortgages on living standards:</p><div class=\"formula-box\">$$\\text{Mortgage DTI} = \\frac{\\text{Monthly Mortgage Installment}}{\\text{Monthly Family Disposable Income}} \\times 100\\% \\le 33\\%$$</div><table class=\"data-table\"><thead><tr><th>DTI Ratio Tier</th><th>Health Status</th><th>Living Standard & Risk Assessment</th></tr></thead><tbody><tr><td><b><= 33% (1/3 Ideal)</b> 🌟</td><td><b>Healthy & Safe!</b></td><td>Balances living quality, savings, and investments.</td></tr><tr><td><b>34% - 50% (Alert Zone)</b></td><td><b>Heavy Stress!</b></td><td>Squeezes lifestyle; vulnerable to unemployment.</td></tr><tr><td><b>> 50% (Danger Zone)</b></td><td><b>Extreme Risk!</b></td><td>Risk of mortgage default and foreclosure!</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) Housing DTI Rules</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "房貸利率算術", "en": "Mortgage Rates" },
    "title": { "zh": "房貸利率算術：指標利率 (一段式 vs 分段式) 與加碼碼數", "en": "Mortgage Rate Math: Index Rates vs. Margin Spread" },
    "content": {
      "zh": "<h3>📊 看懂房貸合約書上的利率定價公式</h3><div class=\"formula-box\">$$\\text{房貸總利率} = \\text{指標利率 (通常為 6 大行庫定儲平均利率)} + \\text{加碼利率 (根據個人信用分數定計)}$$</div><ul><li><b>一段式利率</b>：整個貸款期間按「指標利率 + 固定加碼」浮動計息（如 2.185%）。現金流最透明可預測。</li><li><b>分段式利率</b>：前 2 年給予低利率誘惑（如 1.85%），第 3 年起加碼暴增（如 2.45%）。大一新鮮人需精算長期平均成本！</li></ul><div class=\"data-source-badge\">📌 資料來源：臺灣銀行與中華民國銀行公會利率揭露規範</div>",
      "en": "<h3>📊 Decoding the Mortgage Rate Formula in Your Bank Contract</h3><div class=\"formula-box\">$$\\text{Total Mortgage Rate} = \\text{Index Rate (Bank Avg Savings Rate)} + \text{Margin Spread (Based on Credit Score)}$$</div><ul><li><b>Single-Stage Rate</b>: Uses \"Index Rate + Fixed Margin\" for the entire term (e.g. 2.185%). Highly predictable.</li><li><b>Stepped-Stage Rate</b>: Low teaser rate for early years ($1.85\%$), jumping significantly in Year 3 ($2.45\%$). Calculate lifetime average costs!</li></ul><div class=\"data-source-badge\">📌 Source: Bank of Taiwan & Bankers Association Rate Guidelines</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "隱形交易成本", "en": "Hidden Transaction Costs" },
    "title": { "zh": "購屋隱形交易成本：契稅、印花稅、代書費、仲介費與裝修", "en": "Hidden Costs of Homebuying: Taxes, Agent Fees & Repairs" },
    "content": {
      "zh": "<h3>💸 別以為準備好 20% 頭期款就夠了！隱形費用算術</h3><table class=\"data-table\"><thead><tr><th>交易成本項目</th><th>計算方式與實例</th><th>預估金額 (以 1,000 萬中古屋為例)</th></tr></thead><tbody><tr><td><b>1. 買方房屋仲介費</b></td><td>成交總價之 <b>1.0%~2.0%</b> 上限</td><td>約 <b>10 ~ 20 萬元</b></td></tr><tr><td><b>2. 契稅與印花稅</b></td><td>房屋評定現值之 6% 與權狀貼花</td><td>約 <b>3 ~ 6 萬元</b></td></tr><tr><td><b>3. 代書費與登記規費</b></td><td>按件計酬與地政規費</td><td>約 <b>2 ~ 3 萬元</b></td></tr><tr><td><b>4. 基本裝修與家電</b></td><td>老屋翻新裝修與傢俱家電買置</td><td>約 <b>30 ~ 80 萬元</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：不動產仲介公會與地政士公會收費標準</div>",
      "en": "<h3>💸 Don't Assume 20% Down Payment is All You Need!</h3><table class=\"data-table\"><thead><tr><th>Cost Component</th><th>Calculation Basis</th><th>Estimated Cash ($10M Home)</th></tr></thead><tbody><tr><td><b>1. Buyer Agent Fee</b></td><td>Max <b>1.0%-2.0%</b> of transaction price</td><td>~$100k - $200k NTD</td></tr><tr><td><b>2. Deed Tax & Stamp Tax</b></td><td>6% of assessed building value</td><td>~$30k - $60k NTD</td></tr><tr><td><b>3. Escrow & Registry Fees</b></td><td>Per transaction escrow rates</td><td>~$20k - $30k NTD</td></tr><tr><td><b>4. Repairs & Appliances</b></td><td>Basic renovation and essential appliances</td><td>~$300k - $800k NTD</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Real Estate Agent Association & Escrow Standards</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "房地合一稅2.0", "en": "Property Tax 2.0" },
    "title": { "zh": "不動產持有稅與交易稅：房屋稅、地價稅與房地合一稅 2.0", "en": "Holding & Transaction Taxes: Property Tax & Capital Gains 2.0" },
    "content": {
      "zh": "<h3>⚖️ 重稅抑制短期炒作！房地合一稅 2.0 閉鎖期稅率</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🔥 持有 2 年內轉手 (極重稅)</h4><p>按房地產交易獲利課徵 <b>45% 重稅！</b>（賺 200 萬要繳 90 萬稅）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⚠️ 持有 2 ~ 5 年轉手</h4><p>按交易獲利課徵 <b>35% 重稅！</b>打擊中短期房市炒作行為。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🏡 自住滿 6 年優惠 (輕稅)</h4><p>個人或配偶設籍自住滿 6 年，享 <b>400 萬元免稅額</b>，超出部分僅按 <b>10% 優惠稅率</b> 課徵！</p></div></div><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署房地合一課徵所得稅申報作業要點</div>",
      "en": "<h3>⚖️ Heavy Taxes Curb Short-Term Speculation: Property Tax 2.0</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🔥 Sold Within 2 Years (Heavy Tax)</h4><p>Capital gains taxed at a <b>45% rate!</b> ($2M gain -> $900k tax).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⚠️ Sold Within 2 to 5 Years</h4><p>Capital gains taxed at a <b>35% rate!</b> Curbs short-term contract flipping.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🏡 Self-Occupied for 6+ Years</h4><p>Enjoys a <b>$4M NTD tax-free threshold</b>; excess gains taxed at a low <b>10% rate</b>!</p></div></div><div class=\"data-source-badge\">📌 Source: MOF Taxation Agency Real Estate Tax Rules</div>"
    }
  },
  {
    "id": 19,
    "hour": 1,
    "tag": { "zh": "預售屋 vs 中古屋", "en": "Pre-sale vs Used" },
    "title": { "zh": "預售屋 (Pre-sale) vs. 中古屋 (Second-hand) 的付款結構比較", "en": "Pre-sale vs. Second-Hand Homes: Payment Structure Comparison" },
    "content": {
      "zh": "<h3>🏠 買預售屋跟買中古屋，頭期款繳納時間完全不同！</h3><table class=\"data-table\"><thead><tr><th>房屋類型</th><th>頭期款繳納方式與時間</th><th>優缺點與適合族群</th></tr></thead><tbody><tr><td><b>預售屋 (Pre-sale)</b></td><td>頭期款 20% 分為訂簽開 (10%) + 工程期 2-3 年分期繳納 (10%)。</td><td><b>前期資金壓力小！</b>適合月收入穩定但短期無大額現金者；但有建商爛尾風險。</td></tr><tr><td><b>中古屋 (Second-hand)</b></td><td>簽約與完稅 1-2 個月內，必須<b>一次拿出 20% 現金頭期款！</b></td><td>屋況實體可見、屋齡較舊需翻新；適合手上備有整筆現金者。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：不動產企劃研訓協會建案付款結構說明</div>",
      "en": "<h3>🏠 Pre-sale vs. Used Homes: Payment Timelines Differ Greatly</h3><table class=\"data-table\"><thead><tr><th>Property Type</th><th>Down Payment Timeline</th><th>Pros & Cons Comparison</th></tr></thead><tbody><tr><td><b>Pre-sale Homes (預售屋)</b></td><td>20% down payment split across signing (10%) and 2-3 years construction (10%).</td><td><b>Lower immediate cash strain!</b> Fits steady earners; risk of developer delay.</td></tr><tr><td><b>Second-Hand Homes (中古屋)</b></td><td>Must provide <b>full 20% cash down payment within 1-2 months!</b></td><td>Physical house visible; older structure; requires lump-sum down payment.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Real Estate Planning & Training Association Guide</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>房貸還款</b>：本息均等（固定金額好規劃）；寬限期前甜後苦，第 6 年月繳額暴增。</li><li><b>政策規範</b>：新青安最高 1,000 萬 40 年期；央行第 7 波限貸令取消有房者寬限期。</li><li><b>財務安全</b>：房貸負擔率 (DTI) 嚴格控制在 <= 33%；房地合一稅 2.0 自住滿 6 年享 400 萬免稅。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 房貸試算器」</b> 按鈕，輸入房屋總價、貸款成數與利率，比對「本息均等 vs 本金均等」的月繳額與利息差額！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Mortgage Methods</b>: Equal installment offers steady cash flows; Grace periods spike in Yr 6.</li><li><b>Policy Controls</b>: Youth loans offer $10M 40-yr terms; CBC 7th wave caps 2nd home LTV at 50%.</li><li><b>Financial Health</b>: Keep DTI <= 33%; Self-occupied 6+ yrs gets $4M tax exemption.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to compare Mortgage Repayment methods!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "租買決策財務", "en": "Rent vs Buy Math" },
    "title": { "zh": "租房 vs. 買房 (Rent vs. Buy) 的財務決策架構：機會成本", "en": "Rent vs. Buy Economics: Opportunity Costs & Cash Flows" },
    "content": {
      "zh": "<h3>🏠 買房不一定永遠贏！租房也不等於幫房東養房</h3><p><b>租買決策 (Rent vs. Buy)</b> 是經典的財務機會成本比較。不能只比「每月租金 vs 每月房貸」：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏠 買房成本 (Buy Costs)</h4><p>房貸利息 + 房屋折舊 + 地價稅房屋稅 + 機會成本（200萬頭期款無法投資 ETF 的收益）。收益來自房價上漲增值。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🔑 租房成本 (Rent Costs)</h4><p>每月租金支出（純沉沒成本）。優點是保留 200 萬頭期款現金靈活性，可將頭期款投入 0050 ETF 獲取年化 8% 複利！</p></div></div><div class=\"data-source-badge\">📌 資料來源：薩繆爾森《房地產經濟學與投資學》</div>",
      "en": "<h3>🏠 Buying Isn't Always Better! Renting Isn't Wasting Money</h3><p>The <b>Rent vs. Buy Decision</b> evaluates full financial opportunity costs:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏠 Buying Costs</h4><p>Mortgage interest + Taxes + Opportunity Cost ($2M down payment locked from ETF returns). Gain comes from capital appreciation.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🔑 Renting Costs</h4><p>Monthly rent (sunk cost). Benefit: Retains $2M cash to invest in 0050 ETF for 8% compounding returns!</p></div></div><div class=\"data-source-badge\">📌 Source: Samuelson's Real Estate Economics Framework</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "租買機會成本", "en": "Opportunity Cost" },
    "title": { "zh": "租買機會成本算術：頭期款投入 0050 ETF 複利 vs 買房增值", "en": "Down Payment in 0050 ETF vs. Home Equity Growth" },
    "content": {
      "zh": "<h3>📈 200 萬元頭期款如果不買房，投資 ETF 20 年會變成多少？</h3><p><b>試算比較</b>：將 200 萬元頭期款投入年化報酬率 8% 之市值型 ETF (如 0050/VOO)：</p><div class=\"formula-box\">$$200 \\text{ 萬元} \\times (1 + 8\\%)^{20 \\text{ 年}} = 932 \\text{ 萬元！}$$</div><p><b>結論</b>：如果買房後的房價年化增值率低於 4%（加上房貸利息消耗），租房並將頭期款投資 ETF 的<b>總資產累積完全有可能打敗買房者！</b></p><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 租買資產複利模型</div>",
      "en": "<h3>📈 If You Invested That $2M Down Payment in 0050 ETF for 20 Years?</h3><p><b>Compounding Simulation</b>: Investing $2M down payment in an 8% ETF (0050/VOO):</p><div class=\"formula-box\">\$2\text{M} \times (1 + 8\%)^{20 \text{ Years}} = \$9.32\text{M NTD!}$$</div><p><b>Conclusion</b>: If housing appreciation falls below 4% net of interest, renting + investing in ETFs can beat homeownership!</p><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) Rent vs Buy Models</div>"
    }
  },
  {
    "id": 23,
    "img": "images/w10_rent_buy.jpg",
    "hour": 3,
    "tag": { "zh": "淨租金收益率", "en": "Rental Yield" },
    "title": { "zh": "淨租金收益率 (Net Rental Yield) 算術：為什麼台灣租金收益率低？", "en": "Net Rental Yield Math: Why Are Taiwan Rental Yields Low?" },
    "content": {
      "zh": "<h3>📊 房東算術：1,500 萬元房子，一個月租 2.5 萬划算嗎？</h3><div class=\"formula-box\">$$\\text{毛租金收益率 (Gross Yield)} = \\frac{\\text{全年租金收入 (2.5萬 } \\times 12 = 30\\text{萬)}}{\\text{房屋總價 (1,500 萬)}} = 2.0\\%$$</div><p>扣除房屋稅、地價稅、維修費與空置期後，<b>淨租金收益率僅約 1.5%</b>，比銀行定存與債券殖利率還低！說明台灣房東主要靠「房價暴漲增值」，而非靠「租金收益」賺錢。</p><div class=\"data-source-badge\">📌 資料來源：內政部不動產資訊平台全台租金收益率統計</div>",
      "en": "<h3>📊 Landlord Math: A $15M Property Rented at $25k/mo</h3><div class=\"formula-box\">$$\\text{Gross Rental Yield} = \\frac{\\text{Annual Rent (\$25k } \times 12 = \$300\text{k)}}{\\text{Property Value (\$15M)}} = 2.0\%$$</div><p>Net rental yields drop to <b>~1.5%</b> after taxes and maintenance! Taiwanese landlords rely on capital appreciation, not rental yield.</p><div class=\"data-source-badge\">📌 Source: MOI Real Estate Information Platform Statistics</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "房地合一稅重稅", "en": "Capital Gains Tax" },
    "title": { "zh": "房地合一稅 2.0 閉鎖期：5 年內轉手課徵 35%~45% 重稅的防炒房效應", "en": "Property Tax 2.0: 5-Year Lockup & 35%-45% Capital Gains Tax" },
    "content": {
      "zh": "<h3>🛡️ 預防短進短出炒作！閉鎖期稅率與自住免稅額</h3><table class=\"data-table\"><thead><tr><th>持有期間</th><th>房地合一稅 2.0 適用稅率</th><th>對炒房客與自住族之影響</th></tr></thead><tbody><tr><td><b>持有 2 年以內</b></td><td><b>45% (極重稅)</b></td><td>打擊預售屋與紅單 short-term 炒作。</td></tr><tr><td><b>持有 2 ~ 5 年</b></td><td><b>35% (重稅)</b></td><td>抑制 5 年以內短進短出投機買賣。</td></tr><tr><td><b>持有 5 ~ 10 年</b></td><td>20% (標準稅率)</td><td>回歸長期持有理性稅率。</td></tr><tr><td><b>自住滿 6 年優惠</b></td><td><b>400 萬免稅額 + 10% 優惠</b></td><td><b>保護真實自住首購族！</b>大幅減輕稅負。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署房地合一稅 2.0 規定</div>",
      "en": "<h3>🛡️ Stopping Short-Term Flipping: Tax 2.0 Lockup Tiers</h3><table class=\"data-table\"><thead><tr><th>Holding Period</th><th>Property Tax 2.0 Rate</th><th>Impact on Speculators vs Homeowners</th></tr></thead><tbody><tr><td><b>Under 2 Years</b></td><td><b>45% (Heavy Tax)</b></td><td>Crushes short-term contract flipping.</td></tr><tr><td><b>2 to 5 Years</b></td><td><b>35% (Heavy Tax)</b></td><td>Curbs 5-year short-term speculative trading.</td></tr><tr><td><b>5 to 10 Years</b></td><td>20% (Standard)</td><td>Standard rate for long-term holding.</td></tr><tr><td><b>Self-Occupied 6+ Yrs</b></td><td><b>$4M Exemption + 10%</b></td><td><b>Protects genuine first-time buyers!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MOF Taxation Agency Capital Gains Tax Rules</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "實價登錄查閱", "en": "Query Registration" },
    "title": { "zh": "實證數據調取：內政部實價登錄 2.0 網 (lvr.land.moi.gov.tw) 查閱", "en": "Retrieving Real Data: MOI Price Registration Portal Guide" },
    "content": {
      "zh": "<h3>🌐 手把手教大一學生查詢周邊租金與房價真實成交紀錄</h3><ul><li><b>輸入搜尋區域與路段</b>：查詢學校附近特定社區或路段最新 1 年實價登錄成交單價（每坪金額）。</li><li><b>扣除車位計算真實單價</b>：買房切記把車位坪數與車位總價扣除，計算純房屋每坪真實單價！</li><li><b>查詢租賃實價登錄</b>：查詢學校周邊套房與雅房之真實租金揭露行情，避免被不肖房東坑錢。</li></ul><div class=\"data-source-badge\">📌 資料來源：內政部實價登錄 2.0 官方門戶 (lvr.land.moi.gov.tw)</div>",
      "en": "<h3>🌐 Step-by-Step Guide to Querying Campus Rent & House Prices</h3><ul><li><b>Search Neighborhoods</b>: Query exact 1-year transaction prices per ping for specific apartments near campus.</li><li><b>Deduct Parking Space Price</b>: Always deduct parking pings and parking cost to reveal true housing price per ping!</li><li><b>Query Rental Registrations</b>: Check disclosed market rents for studios near campus to avoid getting gouged.</li></ul><div class=\"data-source-badge\">📌 Source: MOI Real Estate Price Registration Portal</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "10年買房計畫", "en": "10-Yr Housing Plan" },
    "title": { "zh": "大一新鮮人 10 年買房超前部署計畫：儲蓄頭期款與 JCIC 信用", "en": "Freshman 10-Year Housing Plan: Down Payments & JCIC Scores" },
    "content": {
      "zh": "<h3>🏰 大一到 28 歲：踏實積累第一筆 200 萬頭期款 3 步驟</h3><ol><li><b>大一至大四 (積累種子資金)</b>：每月儲蓄打工收入 20%~30%，定期定額買 0050 ETF，培育複利種子。</li><li><b>養好 JCIC 信用評分</b>：辦第一張信用卡並每月全額按時繳清，累積良好信用分數（未來爭取 8 成房貸與 2.18% 低利）。</li><li><b>畢業工作 1-6 年 (集中蓄力)</b>：工作薪資成長後，拉高月儲蓄率至 40%，於 28-30 歲順利解鎖人生第一頭期款！</li></ol><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 青年首購資產累積藍圖</div>",
      "en": "<h3>🏰 From Freshman to Age 28: 3 Steps to Accumulate $2M Down Payment</h3><ol><li><b>College Years (Seed Capital)</b>: Save 20%-30% of part-time income into 0050 ETF to grow compound seeds.</li><li><b>Build JCIC Credit Score</b>: Use credit card responsibly and pay in full monthly to lock 80% LTV & low rates later.</li><li><b>Early Career Years (Focus)</b>: Raise savings rate to 40% as income grows; unlock your down payment by age 28-30!</li></ol><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) Homeownership Blueprint</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "看房避坑指南", "en": "House Inspection" },
    "title": { "zh": "看房避坑指南：海砂屋、輻射屋、凶宅揭露與驗屋清單", "en": "House Buying Inspection: Avoiding Radiation & Structural Flaws" },
    "content": {
      "zh": "<h3>⚠️ 買房看房絕對不能忽視的 4 大結構與法律地雷</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. 凶宅與重大瑕疵揭露</h4><p>要求房仲提供「不動產現況說明書」，依法據實揭露是否曾發生非自然死亡事件 (凶宅)。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>2. 海砂屋與輻射屋檢測</h4><p>查驗混凝土氯離子含量（防海砂屋天花板掉落）與原子能委員會輻射屋檢測報告。</p></div></div><div class=\"highlight-box\">💡 <b>驗屋細節</b>：交屋前務必進行專業驗屋（測試排水順暢度、浴室積水、漏水與窗框滲水狀況）！</div><div class=\"data-source-badge\">📌 資料來源：內政部不動產現況說明書標準範本</div>",
      "en": "<h3>⚠️ 4 Structural & Legal Flaws You Must Inspect Before Buying</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. Stigmatized Property Disclosure</h4><p>Demand official Property Status Statements disclosing unnatural deaths or structural flaws.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>2. High-Chloride & Radiation Tests</h4><p>Inspect concrete chloride levels (preventing spalling) and AEC radiation safety reports.</p></div></div><div class=\"highlight-box\">💡 <b>Inspection Rule</b>: Hire professional inspectors before handover to test water drainage, leaks, and seepage!</div><div class=\"data-source-badge\">📌 Source: MOI Property Status Disclosure Standards</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "租買 4 大金律", "en": "4 Housing Rules" },
    "title": { "zh": "大一新鮮人不動產理性租買 4 大金律", "en": "4 Golden Rules of Real Estate for College Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性居住與不動產財務思維</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔑 1. 租屋簽約保護權益</h4><p>押金上限 2 個月，認明電費上限規範，入住拍照存證保護押金。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📐 2. 房貸負擔率 <= 33%</h4><p>每月房貸嚴格控制於家庭收入 1/3 以內，絕不透支做「房奴」。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📈 3. 租買決策算機會成本</h4><p>評估頭期款投資 0050 ETF 的複利收益，不盲目認為買房必勝。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🏡 4. 善用新青安與自住優惠</h4><p>未來購屋善用新青安與自住滿 6 年 400 萬房地合一免稅額。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與內政部地政司消費者保護原則</div>",
      "en": "<h3>🛡️ Lifetime Real Estate Principles for Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔑 1. Tenant Rights First</h4><p>2-month deposit cap; check electricity caps; take move-in photos.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📐 2. Cap DTI at 33%</h4><p>Keep monthly mortgage installments below 1/3 of income to avoid house slavery.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📈 3. Calculate Rent vs Buy Math</h4><p>Evaluate down payment compounding in 0050 ETF over blind home buying.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🏡 4. Leverage Youth Loans & Tax Perks</h4><p>Use Youth Housing Loans and $4M tax-free exemptions for self-occupied homes.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & MOI Consumer Protection Guidelines</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十週全景知識體系圖與觀念整合", "en": "Week 10 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>不動產與租屋 (Hour 1)</b>：不動產 4 特徵 ➔ 權狀主建物與公設比 ➔ 實價登錄 2.0 門牌揭露 ➔ 租賃專法押金 2 個月上限 ➔ 電費計費規範 ➔ 房價所得比 10.2 倍 ➔ 20% 頭期款與 LTV。</p><p><b>房貸與政策 (Hour 2)</b>：本息均等 vs 本金均等 ➔ 寬限期後月繳額暴增 ➔ 新青安 4 大優惠 ➔ 央行第 7 波限貸令 ➔ 房貸負擔率 DTI <= 33% ➔ 指標利率加碼 ➔ 隱形交易成本 ➔ 房地合一稅 2.0 閉鎖期 ➔ 預售 vs 中古。</p><p><b>租買與實戰 (Hour 3)</b>：租買機會成本算術 ➔ 頭期款投資 0050 複利 ➔ 淨租金收益率 1.5% ➔ 5年閉鎖期課稅 ➔ 實價登錄網查閱 ➔ 10年頭期款部署 ➔ 看房驗屋避坑 ➔ 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 10 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Basics & Renting (Hour 1)</b>: Real Estate Features ➔ Title & Public Area ➔ Price Registration 2.0 ➔ 2-Month Deposit Cap ➔ Electricity Rules ➔ Price-to-Income 10.2x ➔ 20% Down Payment.</p><p><b>Mortgages & Policy (Hour 2)</b>: Equal Installment vs Principal ➔ Grace Period Spikes ➔ Youth Loans ➔ CBC 7th Credit Control ➔ DTI <= 33% ➔ Rate Math ➔ Hidden Costs ➔ Tax 2.0 ➔ Pre-sale vs Used.</p><p><b>Rent vs Buy & Action (Hour 3)</b>: Opportunity Cost Math ➔ Down Payment in 0050 ETF ➔ Net Yield 1.5% ➔ 5-Yr Tax Lockup ➔ Price Registration Portal ➔ 10-Yr Plan ➔ Inspection ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十一週預告 (個人綜合所得稅、節稅規劃與報稅實務)", "en": "Reflections & Week 11 Preview (Personal Income Tax & Tax Planning)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十週「不動產、房地產與租買決策財務學」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人大學租屋體檢與未來租買試算報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十一週課程預告：個人綜合所得稅、節稅規劃與報稅實務</h4><p>下週我們將帶大家進入五月報稅季必備的稅務領域！探索<b>個人綜合所得稅級距算術、免稅額與標準扣除額、打工薪資扣繳與合法節稅技巧！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 10!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your housing audit report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 11 Preview: Personal Income Tax & Tax Planning</h4><p>Next week we cover tax season essentials! Income tax brackets, tax-free thresholds, deduction items, and legal tax-saving strategies for part-time income!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Public Area Ratio Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculatePublicRatio() {
  const totalPing = parseFloat(document.getElementById('totalPingInput').value) || 30;
  const publicPing = parseFloat(document.getElementById('publicPingInput').value) || 10.5;
  const balconyPing = parseFloat(document.getElementById('balconyPingInput').value) || 2.5;

  const publicRatio = (publicPing / totalPing) * 100;
  const mainLivingPing = totalPing - publicPing - balconyPing;

  const resultDiv = document.getElementById('publicRatioResult');
  resultDiv.innerHTML = `
    📐 <b>房屋權狀坪數扣除試算結果</b>：<br>
    • 權狀總坪數：<b>${totalPing} 坪</b> | 公設坪數：<b>${publicPing} 坪</b><br>
    • <b>公設比 (Public Area Ratio)</b>：<span style="color:var(--accent-rose); font-weight:bold; font-size:1.2rem;">${publicRatio.toFixed(1)}%</span><br>
    • <b>實質室內主建物坪數</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">${mainLivingPing.toFixed(1)} 坪</span> (占權狀 ${( (mainLivingPing/totalPing)*100 ).toFixed(1)}%)<br>
    💡 <i>買房時切記看清楚主建物坪數，公設比越高代表買走廊與公設花掉的錢越多！</i>
  `;
}

// HOUR 2 MODAL: Mortgage Method Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateMortgageMethods() {
  const housePrice = parseFloat(document.getElementById('housePriceInput').value) || 1000;
  const ltvPct = parseFloat(document.getElementById('ltvPctInput').value) || 80;
  const ratePct = parseFloat(document.getElementById('mortgageRateInput').value) || 2.2;
  const years = parseInt(document.getElementById('mortgageYearsInput').value) || 30;

  const loanAmount = housePrice * (ltvPct / 100) * 10000; // Total loan NTD
  const monthlyRate = (ratePct / 100) / 12;
  const totalMonths = years * 12;

  // Equal Installment Formula: M = P * [r(1+r)^n] / [(1+r)^n - 1]
  const monthlyEqTotal = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  const totalPayEqTotal = monthlyEqTotal * totalMonths;
  const totalInterestEqTotal = totalPayEqTotal - loanAmount;

  // Equal Principal Method: Principal/month = P/n; 1st Month Pay = P/n + P*r
  const monthlyPrincipal = loanAmount / totalMonths;
  const firstMonthEqPrin = monthlyPrincipal + (loanAmount * monthlyRate);
  const totalInterestEqPrin = ((totalMonths + 1) * loanAmount * monthlyRate) / 2;
  const totalPayEqPrin = loanAmount + totalInterestEqPrin;

  const interestDiff = totalInterestEqTotal - totalInterestEqPrin;

  const resultDiv = document.getElementById('mortgageResult');
  resultDiv.innerHTML = `
    💵 <b>房貸兩大還款方式 30 年期試算比對 (貸款 ${(loanAmount/10000).toFixed(0)} 萬元)</b>：<br>
    • <b>1. 本息平均攤還 (Equal Total)</b>：每月固定負擔 <span style="color:var(--accent-sky); font-weight:bold;">$${Math.round(monthlyEqTotal).toLocaleString()} 元</span> | 30年總利息 <span style="color:var(--accent-rose); font-weight:bold;">$${Math.round(totalInterestEqTotal/10000).toFixed(1)} 萬元</span><br>
    • <b>2. 本金平均攤還 (Equal Principal)</b>：首月需繳高達 <span style="color:var(--accent-purple); font-weight:bold;">$${Math.round(firstMonthEqPrin).toLocaleString()} 元</span> (逐月遞減) | 30年總利息 <span style="color:var(--accent-emerald); font-weight:bold;">$${Math.round(totalInterestEqPrin/10000).toFixed(1)} 萬元</span><br>
    💡 <b>結論</b>：本金攤還法可省下約 <span style="color:var(--accent-emerald); font-weight:bold;">$${Math.round(interestDiff/10000).toFixed(1)} 萬元利息</span>，但前期現金流負擔極重！
  `;
}

// HOUR 3 GAME: Real Estate Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：房屋權狀公設比算術",
    question: "小明買了一間權狀 40 坪的公寓，若公設比為 35%，在不考慮陽台的情況下，室內實際主建物坪數為多少？",
    options: [
      { text: "35 坪", correct: false },
      { text: "26 坪 (主建物佔 65%)", correct: true },
      { text: "14 坪", correct: false },
      { text: "40 坪滿滿", correct: false }
    ],
    explain: "主建物坪數 = 權狀總坪數 × (1 - 公設比) = 40 × 0.65 = 26 坪！"
  },
  {
    level: 2,
    title: "關卡 2：租賃專法押金上限",
    question: "根據內政部租賃專法規定，出租套房時房東收取的押金上限最高不得超過幾個月租金？",
    options: [
      { text: "1 個月", correct: false },
      { text: "2 個月租金", correct: true },
      { text: "6 個月", correct: false },
      { text: "完全沒有任何上限限制", correct: false }
    ],
    explain: "租賃專法明確規定，押金最高不得超過 2 個月租金！退租時必須無息返還。"
  },
  {
    level: 3,
    title: "關卡 3：房貸負擔率 (DTI) 警戒線",
    question: "為了兼顧生活品質與防範斷供風險，每月房貸本息攤還金額應嚴格控制於每月家庭總收入的多少百分比以內？",
    options: [
      { text: "不超過 33% (1/3 理想線)", correct: true },
      { text: "不超過 70%", correct: false },
      { text: "不超過 90%", correct: false },
      { text: "100% 梭哈", correct: false }
    ],
    explain: "房貸負擔率 (DTI) 理想線為 <= 33% (1/3)，超過 50% 將淪為生活品質慘淡的「房奴」！"
  },
  {
    level: 4,
    title: "關卡 4：房地合一稅 2.0 重稅閉鎖期",
    question: "根據房地合一稅 2.0 規定，買房後在幾年內短進短出轉手出售，將被課徵高達 45% 的極重資本利得稅？",
    options: [
      { text: "10 年以內", correct: false },
      { text: "持有 2 年以內", correct: true },
      { text: "20 年以內", correct: false },
      { text: "完全不課稅", correct: false }
    ],
    explain: "房地合一稅 2.0 规定持有 2 年內轉手課徵 45% 重稅；2-5 年內課徵 35% 重稅，打擊 short-term 炒作！"
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
    let badgeText = userScore === 400 ? "🏆 不動產理財達人徽章 (Real Estate Master)" : "🥉 不動產初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十週「不動產、房地產與租買決策財務學」核心觀念！</p>
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
function submitW10Homework(e) {
  e.preventDefault();
  alert("🎉 第十週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
