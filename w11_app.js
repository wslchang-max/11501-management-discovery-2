/**
 * 115 學年度「管理探索二」第十一週：個人綜合所得稅、節稅規劃與報稅實務
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w11_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十一週課程導論：個人綜合所得稅、節稅規劃與報稅實務", "en": "Week 11 Intro: Personal Income Tax & Legal Tax Planning" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🧾 掌握國民財政權利：打工報稅、合法節稅與退稅算術</h2><p>「班傑明·富蘭克林名言：世界上唯有死亡與納稅無可避免！(In this world nothing is certain but death and taxes!)\"</p></div><p>歡迎來到第十一週！每年五月是台灣的「綜合所得稅報稅季」。許多大一打工族誤以為自己收入不高就不需要報稅，反而錯失了拿回被預先扣繳 5% 稅款的「退稅」機會！本單元將帶領大家拆解綜所稅免稅額、扣除額、5 大課稅級距算術、手機報稅 App 流程與合法節稅 3 大管道。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：應納稅額算術</h4><p>掌握 所得總額 - 免稅額 - 扣除額 = 淨額，乘以級距稅率與累進差額。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：打工退稅與節稅</h4><p>善用薪資扣除額與預扣憑單，實現打工族稅額歸零並順利退稅！</p></div></div><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署 / 財政部電子申報繳稅服務網 (tax.nat.gov.tw)</div>",
      "en": "<div class=\"hero-box\"><h2>🧾 Personal Income Tax & Legal Tax Planning</h2><p>\"Benjamin Franklin: In this world nothing can be said to be certain, except death and taxes.\"</p></div><p>Welcome to Week 11! May is Taiwan's tax season. Many college students working part-time overlook filing, missing out on refunds from pre-withheld taxes. We will master tax brackets, deductions, smartphone filing, and legal tax savings.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Net Taxable Income</h4><p>Master Total Income - Exemptions - Deductions = Net Taxable Income.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Student Tax Refunds</h4><p>Leverage special salary deductions and pre-withholding tax refunds.</p></div></div><div class=\"data-source-badge\">📌 Source: MOF Taxation Agency / E-Tax Portal</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十一週 3 小時學習地圖與核心技能樹", "en": "Week 11 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>所得稅算術與課稅級距解析</b> (Slide 01 - 10)<br>納稅義務、課稅淨額公式、2026最新免稅額與扣除額數字、打工扣繳憑單、5大課稅級距與累進差額</td><td>🎯 <b>1小時活動</b>：綜所稅淨額與稅率級距計算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>打工退稅、合法節稅與報稅 App</b> (Slide 11 - 20)<br>打工族退稅算術、預先扣繳 5%、節稅 3 大管道（房租、醫藥、捐贈）、扶養親屬切換與手機報稅 5 分鐘 SOP</td><td>🎯 <b>2小時活動</b>：打工族預先扣繳與退稅精算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>綜合節稅算術與新鮮人實戰</b> (Slide 21 - 30)<br>薪資扣除與房租扣除配置、股利課稅、防範稅務詐騙、官方資料庫查閱、打工族年納稅歸零與 4 大金律</td><td>🎮 <b>3小時小遊戲</b>：綜所稅報稅達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人打工所得稅體檢與退稅試算報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 11 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Tax Formulas & Brackets</b> (Slide 01 - 10)<br>Tax Net Formula, 2026 Exemptions, Part-time withholding, 5 tax brackets (5%-40%)</td><td>🎯 <b>Hour 1 Activity</b>: Tax Net & Bracket Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Tax Refunds & Mobile Filing</b> (Slide 11 - 20)<br>Part-time tax refund math, 3 Tax Channels (Rent, Medical, Charity), Dependents & Mobile Filing SOP</td><td>🎯 <b>Hour 2 Activity</b>: Tax Refund Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Tax Optimization & Action</b> (Slide 21 - 30)<br>Dividend Taxing, Tax Phishing Protection, Official Portals, Zero Tax Plan & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: Tax Master Challenge<br>📝 <b>Class Assignment</b>: Student Tax Audit & Refund Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "納稅義務", "en": "Tax Obligation" },
    "title": { "zh": "為什麼要繳稅？國家財政稅收與個人納稅義務", "en": "Why Pay Taxes? Public Finance & Citizen Obligations" },
    "content": {
      "zh": "<h3>🏛️ 稅收是公共建設與社會安全網的基石</h3><p>根據中華民國《憲法》第 19 條規定：「人民有依法律納稅之義務。」國家徵收<b>綜合所得稅 (Personal Income Tax)</b> 用於：</p><ul><li><b>公共基礎建設</b>：道路交通、捷運系統、國防安全與警察治安維護。</li><li><b>社會福利與教育</b>：健保補貼、義務教育、大學補助與低收入戶扶助。</li><li><b>租稅公平原則</b>：所得越高者適用越高稅率（量能課稅），進行社會財富二次重分配。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署租稅教育手冊</div>",
      "en": "<h3>🏛️ Taxes Fund Infrastructure and Social Safety Nets</h3><p>Article 19 of the ROC Constitution specifies the duty to pay taxes. <b>Income Tax</b> revenue funds:</p><ul><li><b>Public Infrastructure</b>: Roads, mass transit, national defense, and public safety.</li><li><b>Social Welfare & Education</b>: Healthcare subsidies, public education, and welfare aid.</li><li><b>Tax Fairness Principle</b>: Higher earners face higher tax brackets (ability-to-pay).</li></ul><div class=\"data-source-badge\">📌 Source: MOF Taxation Agency Education Manual</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "綜所稅算術", "en": "Tax Formula" },
    "title": { "zh": "個人綜合所得稅核心算術公式：所得總額 - 免稅額 - 扣除額 = 淨額", "en": "Core Tax Formula: Total Income - Exemptions - Deductions" },
    "content": {
      "zh": "<h3>📐 一張公式搞懂你今年到底要繳多少稅！</h3><div class=\"formula-box\">$$\\text{綜合所得淨額 (Net Taxable Income)} = \\text{年度所得總額} - \\text{個人免稅額} - \\text{標準/列舉扣除額} - \\text{特別扣除額}$$</div><div class=\"formula-box\">$$\\text{應納稅額 (Tax Payable)} = \\text{綜合所得淨額} \\times \\text{適用稅率} - \\text{累進差額}$$</div><p><b>核心觀念</b>：政府並非針對你的「每一塊錢總收入」課稅！只有扣除掉生活基本維持費用後的<b>「所得淨額」</b>才需要按級距課稅。</p><div class=\"data-source-badge\">📌 資料來源：中華民國《所得稅法》第 13 條與第 14 條規定</div>",
      "en": "<h3>📐 The Single Formula That Calculates Your Annual Tax Bill</h3><div class=\"formula-box\">$$\\text{Net Taxable Income} = \\text{Total Income} - \\text{Exemptions} - \\text{Deductions} - \\text{Special Deductions}$$</div><div class=\"formula-box\">$$\\text{Tax Payable} = \\text{Net Taxable Income} \\times \\text{Tax Rate} - \\text{Progressive Difference}$$</div><p><b>Core Concept</b>: Taxes apply only to <b>Net Taxable Income</b> after basic living allowances!</p><div class=\"data-source-badge\">📌 Source: ROC Income Tax Law Articles 13 & 14</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "2026扣除額數字", "en": "2026 Tax Figures" },
    "title": { "zh": "2026 最新綜所稅免稅額、標準扣除額與薪資特別扣除額數字", "en": "2026 Tax Exemption, Standard & Salary Deduction Figures" },
    "content": {
      "zh": "<h3>💰 2026 報稅最新基本免稅與扣除額度公告</h3><table class=\"data-table\"><thead><tr><th>扣除額度項目</th><th>2026 最新法定金額 (單身)</th><th>適用條件與說明</th></tr></thead><tbody><tr><td><b>1. 個人免稅額</b></td><td><b>97,000 元</b></td><td>每人皆可扣除的基本額度。</td></tr><tr><td><b>2. 標準扣除額 (單身)</b></td><td><b>131,000 元</b></td><td>單身未婚無須提供收據直接扣除。</td></tr><tr><td><b>3. 薪資所得特別扣除額</b></td><td><b>218,000 元</b></td><td>有上班打工領薪水者最高可扣除。</td></tr><tr><td><b>單身打工族免稅門檻</b></td><td><b>總計 446,000 元！</b></td><td><b>年收入未達 44.6 萬元完全免繳綜所稅！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財政部 2026 最新綜合所得稅免稅額及扣除額公告</div>",
      "en": "<h3>💰 2026 Income Tax Exemption and Deduction Figures</h3><table class=\"data-table\"><thead><tr><th>Tax Deduction Item</th><th>2026 Official Amount (Single)</th><th>Conditions & Explanation</th></tr></thead><tbody><tr><td><b>1. Personal Exemption</b></td><td><b>$97,000 NTD</b></td><td>Base exemption per taxpayer.</td></tr><tr><td><b>2. Standard Deduction (Single)</b></td><td><b>$131,000 NTD</b></td><td>Single taxpayers without itemized receipts.</td></tr><tr><td><b>3. Special Salary Deduction</b></td><td><b>$218,000 NTD</b></td><td>Applies to wages earned from employment.</td></tr><tr><td><b>Single Student Zero-Tax Threshold</b></td><td><b>Total $446,000 NTD!</b></td><td><b>Zero tax if annual income is under $446,000 NTD!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Ministry of Finance 2026 Income Tax Figures Announcement</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "打工扣繳憑單", "en": "Part-Time Withholding" },
    "title": { "zh": "大一打工族稅務常識：薪資所得、扣繳憑單 54C 與兼職所得", "en": "Part-Time Student Tax Basics: 54C Withholding Statements" },
    "content": {
      "zh": "<h3>💼 在飲料店、餐廳打工領薪水，老闆會向國稅局申報什麼？</h3><ul><li><b>50 薪資所得</b>：一般兼職或正職打工收入，適用薪資特別扣除額 (218,000元)。</li><li><b>扣繳憑單 (Withholding Statement)</b>：雇主每年 1 月底前向國稅局申報上一年度發給你的總薪資與代扣稅額。</li><li><b>預先扣繳 5% 規定</b>：單筆兼職薪資若超過起扣門檻（如 88,501 元），公司依法會先預扣 5% 稅款繳給國稅局。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部各地區國稅局兼職所得扣繳規範</div>",
      "en": "<h3>💼 Working Part-Time: What Employers Report to the IRS</h3><ul><li><b>Category 50 Salary Income</b>: Regular part-time wages eligible for salary deduction ($218k).</li><li><b>Withholding Statement (54C)</b>: Annual tax form logged by employers with the tax bureau.</li><li><b>5% Pre-Withholding Rule</b>: Single payments above thresholds trigger 5% pre-withheld taxes.</li></ul><div class=\"data-source-badge\">📌 Source: National Taxation Bureau Part-Time Income Withholding Rules</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "5大課稅級距", "en": "5 Tax Brackets" },
    "title": { "zh": "綜所稅 5 大課稅級距 (5%, 12%, 20%, 30%, 40%) 與累進差額", "en": "5 Income Tax Brackets (5%-40%) & Progressive Difference" },
    "content": {
      "zh": "<h3>📊 賺越多繳越高的累進稅率算術</h3><table class=\"data-table\"><thead><tr><th>課稅級距淨額區間</th><th>稅率 (%)</th><th>累進差額 (減項公式)</th></tr></thead><tbody><tr><td><b>0 ~ 590,000 元</b></td><td><b>5%</b></td><td><b>0 元</b></td></tr><tr><td><b>590,001 ~ 1,330,000 元</b></td><td><b>12%</b></td><td><b>41,300 元</b></td></tr><tr><td><b>1,330,001 ~ 2,660,000 元</b></td><td><b>20%</b></td><td><b>147,700 元</b></td></tr><tr><td><b>2,660,001 ~ 4,980,000 元</b></td><td><b>30%</b></td><td><b>413,700 元</b></td></tr><tr><td><b>4,980,001 元以上</b></td><td><b>40% (最高)</b></td><td><b>911,700 元</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財政部 2026 綜合所得稅課稅級距表</div>",
      "en": "<h3>📊 Progressive Tax Rates: Higher Net Income, Higher Rate</h3><table class=\"data-table\"><thead><tr><th>Net Taxable Income Range</th><th>Tax Rate (%)</th><th>Progressive Difference (Deduction)</th></tr></thead><tbody><tr><td><b>$0 - $590,000 NTD</b></td><td><b>5%</b></td><td><b>$0 NTD</b></td></tr><tr><td><b>$590,001 - $1,330,000 NTD</b></td><td><b>12%</b></td><td><b>$41,300 NTD</b></td></tr><tr><td><b>$1,330,001 - $2,660,000 NTD</b></td><td><b>20%</b></td><td><b>$147,700 NTD</b></td></tr><tr><td><b>$2,660,001 - $4,980,000 NTD</b></td><td><b>30%</b></td><td><b>$413,700 NTD</b></td></tr><tr><td><b>> $4,980,001 NTD</b></td><td><b>40% (Max)</b></td><td><b>$911,700 NTD</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MOF 2026 Tax Bracket Schedule</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "綜所稅數據", "en": "Tax Data" },
    "title": { "zh": "實證數據：財政部賦稅署全台綜所稅稅收與納稅戶數統計", "en": "Empirical Data: Taiwan Income Tax Filings & Revenue Stats" },
    "content": {
      "zh": "<h3>🇹🇼 台灣誰在繳綜所稅？官方實證統計</h3><p>根據財政部賦稅署 2026 最新統計數據：</p><ul><li><b>全台申報總戶數</b>：約 <b>670 萬納稅戶</b>。其中約 <b>47% 的家戶適用 0% 稅率</b>（完全不用繳稅！）。</li><li><b>主要稅收貢獻</b>：適用 5% 與 12% 稅率者占申報戶數近 85%；而適用最高 40% 稅率的前 1% 高收入戶，貢獻了全台近半數的綜所稅稅收！</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部財政資訊中心國家稅務統計年報</div>",
      "en": "<h3>🇹🇼 Who Pays Income Taxes in Taiwan? Official Stats</h3><p>According to MOF Taxation Data:</p><ul><li><b>Total Filings</b>: ~<b>6.7 million households</b>. Approximately <b>47% pay 0% tax</b> (no tax liability!).</li><li><b>Revenue Distribution</b>: 5% & 12% brackets account for 85% of households; top 1% (40% rate) contributes nearly half of total tax revenue!</li></ul><div class=\"data-source-badge\">📌 Source: MOF Financial Information Center Tax Annual Report</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "標準 vs 列舉", "en": "Standard vs Itemized" },
    "title": { "zh": "標準扣除額 vs. 列舉扣除額 (房租、捐贈、醫藥費) 的選擇算術", "en": "Standard Deduction vs. Itemized Deductions Math" },
    "content": {
      "zh": "<h3>⚖️ 哪一種扣除方式能讓你少繳更多稅？擇優算術</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 標準扣除額 (單身 131,000 元)</h4><p>無須收集任何單據發票，政府直接給予的固定扣除額。適合無特殊大額開銷者。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 列舉扣除額 (房租+醫藥+捐贈+保險)</h4><p>將實報實銷之項目加總。<b>若「列舉總額 > 131,000 元」，選擇列舉扣除更划算！</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《所得稅法》第 17 條扣除額規定</div>",
      "en": "<h3>⚖️ Which Deduction Method Minimizes Your Tax Bill?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Standard Deduction ($131,000 NTD)</h4><p>Fixed deduction requiring zero receipts. Ideal for taxpayers with low expense items.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Itemized Deductions (Rent + Medical + Charity)</h4><p>Sum of eligible expenses. <b>If Itemized Sum > $131,000 NTD, choose Itemized!</b></p></div></div><div class=\"data-source-badge\">📌 Source: ROC Income Tax Law Article 17</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>所得稅公式</b>：所得總額 - 免稅額 - 扣除額 = 課稅淨額；乘以級距稅率減累進差額。</li><li><b>2026 免稅門檻</b>：單身打工族所得未達 44.6 萬元完全免繳綜所稅。</li><li><b>選擇算術</b>：列舉扣除額總額 > 131,000 元時，改用列舉扣除額更省稅。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 綜所稅算試算」</b> 按鈕，輸入個人年收入，精算你的綜合所得淨額與適用稅率級距！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Tax Formula</b>: Net Income = Total - Exemptions - Deductions. Apply 5%-40% rate brackets.</li><li><b>2026 Threshold</b>: Single workers earning under $446k pay 0% income tax.</li><li><b>Deduction Rule</b>: Switch to Itemized if total itemized expenses exceed $131,000 NTD.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate your Net Taxable Income!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "打工族退稅", "en": "Part-Time Tax Refund" },
    "title": { "zh": "大一新鮮打工族「免繳稅還能退稅」的退稅算術真相", "en": "Student Part-Time Tax Refunds: How to Claim Your Money Back" },
    "content": {
      "zh": "<h3>💵 為什麼沒達到課稅門檻，你依然一定要上網報稅？</h3><p>許多學生打工單筆收入較高時被公司<b>預先扣繳 5% 稅金</b>（例如打工賺 10 萬元，被預扣 5,000 元）。</p><div class=\"formula-box\">$$\\text{應納稅額 (0元)} - \\text{預先扣繳稅額 (5,000元)} = -5,000 \\text{元 (國稅局退還 5,000 元退稅款!)}$$</div><p><b>真相</b>：如果你不辦理五月綜所稅申報，國稅局就<b>不會自動把這 5,000 元退還給你！</b>報稅就是把屬於你的錢要回來！</p><div class=\"data-source-badge\">📌 資料來源：財政部國稅局退稅申報與直撥退稅作業要點</div>",
      "en": "<h3>💵 Why You Must File Taxes Even With Zero Tax Liability?</h3><p>Part-time jobs may pre-withhold 5% taxes ($100k earned -> $5k withheld):</p><div class=\"formula-box\">$$\\text{Tax Liability (\$0)} - \\text{Pre-Withheld Tax (\$5k)} = -\$5,000 \\text{ NTD (Refunded by IRS!)}$$</div><p><b>Truth</b>: If you don't file income taxes in May, the IRS will <b>NOT automatically refund your $5,000 NTD!</b></p><div class=\"data-source-badge\">📌 Source: National Taxation Bureau Direct Refund Guidelines</div>"
    }
  },
  {
    "id": 12,
    "img": "images/w11_tax_brackets.jpg",
    "hour": 2,
    "tag": { "zh": "預先扣繳機制", "en": "Pre-Withholding" },
    "title": { "zh": "扣繳憑單 (Withholding Statement) 與預先扣繳 5% 機制", "en": "Decoding 54C Withholding Statements & 5% Rules" },
    "content": {
      "zh": "<h3>📜 看懂扣繳憑單上的「扣繳稅額」欄位</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 幾月會收到扣繳憑單？</h4><p>每年 2 月底前，公司會寄送或電子提供上一年度的薪資扣繳憑單。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 檢查「扣繳稅金」數字</h4><p>確認是否有被公司扣繳 5% 稅金。這個數字就是五月報稅時能拿回來的退稅總額！</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《所得稅法》第 88 條扣除與扣繳規定</div>",
      "en": "<h3>📜 Understanding the \"Withheld Tax\" Field on Form 54C</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. When Do You Receive Form 54C?</h4><p>Employers issue electronic or paper withholding forms by late February annually.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Check Withheld Tax Column</h4><p>Verify pre-withheld taxes. This number equals your cash refund in May!</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Income Tax Law Article 88 Withholding Rules</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "節稅管道 1 房租", "en": "Tax Saving: Rent" },
    "title": { "zh": "合法節稅 3 大管道 (一)：租屋族房租特別扣除額上限與憑證", "en": "Legal Tax Saving 1: Housing Rent Special Deductions" },
    "content": {
      "zh": "<h3>🏠 租屋族利多！房租改列「特別扣除額」大幅省稅</h3><p>最新稅法改革將房租支出改列為<b>「房屋租金支出特別扣除額」</b>：</p><ul><li><b>扣除額度上限</b>：每年最高可扣除 <b>180,000 元</b>（原本為列舉 12 萬）。</li><li><b>憑證準備</b>：保留租賃契約書、租金轉帳匯款證明與戶籍設籍/自住切結書。</li><li><b>排富條款</b>：適用綜所稅稅率 20% 以上者不適用。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部所得稅法房屋租金支出特別扣除額修正案</div>",
      "en": "<h3>🏠 Renters Rejoice! Housing Rent Converted to Special Deduction</h3><p>Recent tax reforms upgraded housing rent deductions:</p><ul><li><b>Max Deduction Cap</b>: Up to <b>$180,000 NTD per year</b> (previously $120k itemized).</li><li><b>Required Proof</b>: Retain lease contracts, rent wire receipts, and residence declarations.</li><li><b>Income Threshold</b>: Ineligible for taxpayers in the 20%+ tax brackets.</li></ul><div class=\"data-source-badge\">📌 Source: MOF Housing Rent Special Deduction Reform</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "節稅管道 2 醫藥", "en": "Tax Saving: Medical" },
    "title": { "zh": "合法節稅 3 大管道 (二)：醫藥生育費列舉扣除額與無上限條件", "en": "Legal Tax Saving 2: Medical Expense Itemized Deductions" },
    "content": {
      "zh": "<h3>🏥 健保沒給付的自費醫療收據，全數列舉扣除！</h3><ul><li><b>無扣除金額上限</b>：個人與受扶養親屬在公立醫院或健保特約醫院的醫療自費收據，<b>全數實報實銷無上限！</b></li><li><b>除外條件</b>：已經獲得實支實付醫療險保險理賠補貼的部分，<b>不得重複列舉扣除！</b>（符合損害填補）。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署醫藥及生育費列舉扣除規定</div>",
      "en": "<h3>🏥 Self-Paid Medical Expenses Deductible Without Caps!</h3><ul><li><b>No Deduction Cap</b>: Medical receipts at public/NHI hospitals can be itemized <b>100% with no ceiling!</b></li><li><b>Exclusion</b>: Expenses reimbursed by insurance policies <b>cannot be duplicate itemized!</b></li></ul><div class=\"data-source-badge\">📌 Source: MOF Medical Expenses Itemized Deduction Rules</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "節稅管道 3 捐贈", "en": "Tax Saving: Charity" },
    "title": { "zh": "合法節稅 3 大管道 (三)：公益捐贈列舉扣除額與收據抵稅", "en": "Legal Tax Saving 3: Charitable Donation Deductions" },
    "content": {
      "zh": "<h3>❤️ 做公益還能合法抵稅！看清捐贈扣除上限</h3><table class=\"data-table\"><thead><tr><th>捐贈對象分類</th><th>列舉扣除金額上限</th><th>證明文件要求</th></tr></thead><tbody><tr><td><b>1. 一般合憲公益慈善團體</b></td><td>最高不得超過綜合所得總額的 <b>20%</b></td><td>需索取正式抬頭捐贈收據。</td></tr><tr><td><b>2. 對政府機關/國防捐贈</b></td><td><b>100% 完全無上限！</b></td><td>政府機關開立之受贈收據。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：中華民國《所得稅法》第 17 條捐贈扣除規定</div>",
      "en": "<h3>❤️ Supporting Charities While Legally Reducing Income Taxes</h3><table class=\"data-table\"><thead><tr><th>Donation Recipient</th><th>Itemized Deduction Limit</th><th>Required Proof</th></tr></thead><tbody><tr><td><b>1. Registered Charities</b></td><td>Up to <b>20%</b> of total annual income</td><td>Official tax-deductible receipts.</td></tr><tr><td><b>2. Government & Defense</b></td><td><b>100% Unlimited!</b></td><td>Government issued donation receipts.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: ROC Income Tax Law Article 17 Donations</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "扶養親屬切換", "en": "Dependents Choice" },
    "title": { "zh": "扶養親屬節稅法：大一學生被父母申報扶養 vs. 獨立報稅", "en": "Filing as Dependent vs. Independent Taxpayer Choice" },
    "content": {
      "zh": "<h3>👨‍👩‍👧 被父母申報扶養比較划算，還是自己獨立報稅？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 被父母申報扶養 (首選)</h4><p>父母可多扣除你的<b>免稅額 (9.7萬) + 大專院校教育特別扣除額 (2.5萬)</b>！若父母適用 12% 稅率，可省下近 1.5 萬元稅金！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>2. 學生獨立報稅切換點</h4><p>當學生打工年薪超過 44.6 萬元，或者父母已經無須繳稅時，才考慮獨立報稅。</p></div></div><div class=\"data-source-badge\">📌 資料來源：財政部國稅局扶養親屬申報規定說明</div>",
      "en": "<h3>👨‍👩‍👧 Should Parents Claim You as a Dependent or File Independently?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Claimed by Parents (Preferred)</h4><p>Parents get your <b>Exemption ($97k) + College Tuition Special Deduction ($25k)</b>, saving ~$15k tax!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>2. Independent Filing Threshold</h4><p>Consider independent filing only if student income exceeds $446k NTD annually.</p></div></div><div class=\"data-source-badge\">📌 Source: National Taxation Bureau Dependent Filing Rules</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "手機報稅App", "en": "Mobile Filing App" },
    "title": { "zh": "手機報稅 App 與戶口名簿/健保卡 5 分鐘線上報稅點擊 SOP", "en": "5-Minute Mobile Tax Filing via Smartphone App SOP" },
    "content": {
      "zh": "<h3>📱 不用去國稅局排隊！手機 5 步驟輕鬆完成報稅</h3><ol><li><b>開啟手機瀏覽器進入申報網</b>：連線至 `tax.nat.gov.tw` 點選手機報稅。</li><li><b>身分驗證 3 管道</b>：使用「行動電話認證（電信號碼）」、「戶口名簿戶號 + 健保卡號」或「行動自然人憑證」。</li><li><b>確認所得與扣除額</b>：系統自動帶入扣繳憑單與醫藥房租扣除額。</li><li><b>選擇繳稅或退稅方式</b>：輸入個人銀行帳號進行直撥退稅。</li><li><b>點擊申報上傳成功</b>：下載申報 PDF 留存，全程只需 5 分鐘！</li></ol><div class=\"data-source-badge\">📌 資料來源：財政部電子申報繳稅服務網手機報稅操作手冊</div>",
      "en": "<h3>📱 Skip the IRS Line! 5-Step Mobile Filing in 5 Minutes</h3><ol><li><b>Access Tax Portal</b>: Go to `tax.nat.gov.tw` on your smartphone browser.</li><li><b>Authentication</b>: Verify via Mobile Auth, Household Registration + NHI Card, or Digital ID.</li><li><b>Verify Income & Deductions</b>: System auto-populates Form 54C and medical/rent data.</li><li><b>Select Refund Account</b>: Input your bank account for direct refund deposit.</li><li><b>Submit & Save</b>: Upload filing and download PDF confirmation in under 5 minutes!</li></ol><div class=\"data-source-badge\">📌 Source: MOF E-Tax Mobile Filing User Manual</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "逃漏稅罰則", "en": "Tax Evasion Rules" },
    "title": { "zh": "逃漏稅的法律後果：補稅與罰鍰、滯納金計算", "en": "Legal Consequences of Tax Evasion & Late Penalties" },
    "content": {
      "zh": "<h3>⚠️ 漏報打工收入會怎樣？國稅局大數據連線比對！</h3><ul><li><b>國稅局電腦系統自動比對</b>：公司申報的扣繳憑單會直接與個人申報紀錄連線，匿報打工收入一定會被抓包！</li><li><b>滯納金與利息</b>：逾期未繳者，每逾 3 日加徵 <b>1% 滯納金</b>，最高加徵 10%，並加計加郵政儲金利率利息。</li><li><b>逃漏稅罰鍰</b>：故意漏報所得者，除補繳稅款外，處以所漏稅額 <b>2 倍以下罰鍰！</b></li></ul><div class=\"data-source-badge\">📌 資料來源：中華民國《稅捐稽徵法》第 24 條與第 41 條罰則</div>",
      "en": "<h3>⚠️ Hidden Income Caught via Big Data Matching!</h3><ul><li><b>IRS Big Data Matching</b>: Employer withholding logs cross-match automatically with personal filings!</li><li><b>Late Penalties</b>: Late payments accrue <b>1% late fee every 3 days</b> (capped at 10%) plus interest.</li><li><b>Evasion Fines</b>: Willful tax evasion incurs mandatory back-taxes plus <b>fines up to 2x unpaid tax!</b></li></ul><div class=\"data-source-badge\">📌 Source: ROC Tax Collection Act Articles 24 & 41 Penalties</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "股利所得課稅", "en": "Dividend Taxes" },
    "title": { "zh": "股利所得課稅方式：合併計稅 (8.5% 抵減) vs 分離課稅 (28%)", "en": "Dividend Taxing Options: 8.5% Tax Credit vs 28% Separate" },
    "content": {
      "zh": "<h3>📈 買 0050 或台積電領到的股息，怎麼報稅最省？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. 合併計稅 (享 8.5% 抵減稅額) 🌟</h4><p>股利併入所得總額計算，享有<b>股利金額 8.5% 可抵減稅額 (上限 8 萬元)</b>！適用 5% 或 12% 稅率的小資族還能拿回退稅！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. 分離課稅 (單一稅率 28%)</h4><p>股利獨立按 28% 稅率計稅。適合綜所稅適用 30% 或 40% 的高收入富豪。</p></div></div><div class=\"data-source-badge\">📌 資料來源：財政部股利所得課稅新制說明</div>",
      "en": "<h3>📈 Taxing Stock Dividends: Which Option Saves More?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. Merged Taxing (8.5% Tax Credit) 🌟</h4><p>Dividend merged into income with an <b>8.5% Tax Credit (capped at $80k)</b>. Small investors (5%/12% rates) get extra refunds!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. Separate Taxing (Flat 28%)</h4><p>Dividends taxed separately at a flat 28%. Designed for high-income earners in 30%+ brackets.</p></div></div><div class=\"data-source-badge\">📌 Source: MOF Dividend Income Taxation Rules</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>退稅真相</b>：被預扣 5% 稅金者，即使免繳稅也必須報稅才能拿回退稅款。</li><li><b>節稅管道</b>：房租特別扣除上限 18 萬；醫藥費實報實銷無上限；公益捐贈最高 20%。</li><li><b>手機報稅</b>：5 分鐘線上完成；買 0050 股利採合併計稅享 8.5% 可抵減稅額。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 退稅精算器」</b> 按鈕，輸入兼職打工收入與預扣稅額，精算五月能拿回多少退稅現金！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Tax Refund Truth</b>: Pre-withheld 5% taxes require filing to unlock cash refunds.</li><li><b>3 Channels</b>: Housing rent special deduction up to $180k; medical expenses unlimited.</li><li><b>Mobile Filing</b>: 5-minute smartphone app filing; 8.5% dividend tax credit for ETF investors.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate your tax refund cash!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "薪資與房租配置", "en": "Salary & Rent Allocation" },
    "title": { "zh": "薪資特別扣除額 vs. 房租特別扣除額的綜合節稅配置", "en": "Combining Salary & Housing Rent Special Deductions" },
    "content": {
      "zh": "<h3>💡 雙扣除額加總高達 39.8 萬元！小資租屋族大福音</h3><p>對於剛進入職場的小資族與打工租屋學生，可同時享有兩大特別扣除額：</p><div class=\"formula-box\">$$\\text{總特別扣除額} = \\text{薪資特別扣除額 (218,000元)} + \\text{房租特別扣除額 (最高 180,000元)} = 398,000 \\text{ 元！}$$</div><p>加上個人免稅額 9.7 萬與標準扣除額 13.1 萬，<b>單身租屋族年薪高達 62.6 萬元以下完全零稅負！</b></p><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署特別扣除額綜合試算</div>",
      "en": "<h3>💡 Dual Special Deductions Total $398,000 NTD!</h3><p>Young workers renting apartments leverage dual special deductions:</p><div class=\"formula-box\">$$\\text{Total Special Deductions} = \\text{Salary (\$218k)} + \\text{Rent (\$180k)} = \$398,000 \\text{ NTD!}$$</div><p>Single renters earning under $626,000 NTD annually face <b>ZERO income tax liability!</b></p><div class=\"data-source-badge\">📌 Source: MOF Taxation Agency Dual Deduction Analysis</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "報稅時間軸", "en": "Tax Timeline" },
    "title": { "zh": "報稅季時間軸：每年 5 月 1 日至 5 月 31 日納稅申報期", "en": "Tax Season Timeline: May 1 to May 31 Filing Window" },
    "content": {
      "zh": "<h3>📅 錯過 5 月 31 日期限，退稅會被延後甚至罰款！</h3><table class=\"data-table\"><thead><tr><th>關鍵時間節點</th><th>應辦理稅務事項</th><th>注意事項與技巧</th></tr></thead><tbody><tr><td><b>4 月 25 日起</b></td><td>預查所得與扣除額資料（線上查詢）</td><td>確認公司是否有漏報或多報所得。</td></tr><tr><td><b>5 月 1 日 ~ 5 月 31 日</b></td><td><b>正式綜所稅申報與繳退稅時間</b></td><td>使用手機報稅 App 5 分鐘線上完成。</td></tr><tr><td><b>7 月 31 日起</b></td><td><b>第一批直撥退稅款入帳！</b></td><td>5 月底前完成網路申報者優先領退稅金。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財政部電子申報繳稅服務網申報日程公告</div>",
      "en": "<h3>📅 Miss the May 31 Deadline and Risk Fines & Delayed Refunds</h3><table class=\"data-table\"><thead><tr><th>Key Date</th><th>Required Tax Action</th><th>Important Tips</th></tr></thead><tbody><tr><td><b>From April 25</b></td><td>Pre-query income and deduction records online</td><td>Check for missing or duplicate employer entries.</td></tr><tr><td><b>May 1 - May 31</b></td><td><b>Official Tax Filing & Payment/Refund Window</b></td><td>Complete via Smartphone App in 5 mins.</td></tr><tr><td><b>From July 31</b></td><td><b>First Batch Direct Refund Deposits!</b></td><td>Online filers get early July refund payouts.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MOF E-Tax Portal Filing Schedule</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "最低稅負制", "en": "AMT & CFC" },
    "title": { "zh": "海外所得與基本所得額 (CFC/AMT) 個人最低稅負制簡介", "en": "Overseas Income & Alternative Minimum Tax (AMT) Basics" },
    "content": {
      "zh": "<h3>🌐 買美股、海外複委託賺錢，需要繳台灣所得稅嗎？</h3><ul><li><b>海外所得免稅門檻</b>：個人全年海外所得（包含美股價差、海外股利）全家加總<b>未達 100 萬元新台幣，完全免申報！</b></li><li><b>基本所得額 (AMT) 課稅門檻</b>：海外所得超過 100 萬元且基本所得額超過 <b>750 萬元</b> 者，超出部分按 20% 單一稅率課徵最低稅負。大一學生小額買美股無須擔心！</li></ul><div class=\"data-source-badge\">📌 資料來源：中華民國《所得基本稅額條例》規定</div>",
      "en": "<h3>🌐 Investing in US Stocks: Do You Owe Taiwan Income Taxes?</h3><ul><li><b>$1M Overseas Tax Exemption Threshold</b>: Annual overseas gains under <b>$1,000,000 NTD need ZERO filing!</b></li><li><b>Alternative Minimum Tax (AMT) Threshold</b>: Overseas gains over $1M with total AMT base over <b>$7,500,000 NTD</b> trigger 20% flat tax. Small US stock investors need not worry!</li></ul><div class=\"data-source-badge\">📌 Source: ROC Income Basic Tax Act (AMT) Rules</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "稅務資安防詐", "en": "Tax Phishing Protection" },
    "title": { "zh": "稅務資安：防範偽冒財政部簡訊詐騙與假補稅通知", "en": "Tax Phishing Protection: Identifying Fake IRS SMS Scams" },
    "content": {
      "zh": "<h3>🛡️ 認明 `.gov.tw` 官方網址，國稅局絕不會簡訊要求點連結退稅！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 詐騙簡訊陷阱</h4><p>收到簡訊稱：「您有 3,500 元退稅款未領取，請點擊短網址 `tax-gov-tw.xyz` 輸入信用卡號領取」。99% 是詐騙！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 官方退稅真相</h4><p>國稅局退稅<b>一律採直接匯入指定銀行帳戶</b>或寄送實體退稅憑單，絕不透過簡訊連結要求提供信用卡號！</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙諮詢專線警訊</div>",
      "en": "<h3>🛡️ Verify `.gov.tw` Domain: IRS Never Sends Refund SMS Links!</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Scam SMS Traps</h4><p>SMS saying \"Unclaimed $3,500 refund, click `tax-gov-tw.xyz` to input credit card.\" 99% Scam!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Official Refund Reality</h4><p>IRS refunds are <b>deposited directly into bank accounts</b> or issued as paper checks; NEVER via SMS credit card links!</p></div></div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Scam Hotline Warning</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "官方報稅 Portal", "en": "Official Tax Portal" },
    "title": { "zh": "實證數據調取：財政部電子申報繳稅服務網 (tax.nat.gov.tw) 查閱", "en": "Official Portals: MOF E-Tax Portal (tax.nat.gov.tw) Guide" },
    "content": {
      "zh": "<h3>🌐 一站式完成所得試算、申報與直撥退稅</h3><ul><li><b>線上所得試算服務</b>：登入網站自動查詢個人名下上一年度所有 54C 薪資、利息與股利扣繳憑單金額。</li><li><b>直撥退稅指定帳戶設定</b>：填寫個人銀行或郵局帳號，第一批退稅款於 7 月 31 日自動入帳！</li><li><b>下載電子申報收執聯 PDF</b>：申報完成下載加密 PDF 存檔，作為個人合法納稅與所得證明。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部電子申報繳稅服務網 (tax.nat.gov.tw)</div>",
      "en": "<h3>🌐 One-Stop Tax Calculation, Filing, and Direct Refund Portal</h3><ul><li><b>Online Income Query</b>: Log in to auto-query Form 54C wages, bank interest, and dividend logs.</li><li><b>Direct Refund Bank Setting</b>: Input bank/post office account to receive July 31 auto-deposits!</li><li><b>Download PDF Receipt</b>: Save password-protected PDF filing confirmations as official income proofs.</li></ul><div class=\"data-source-badge\">📌 Source: MOF E-Tax Service Portal</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "打工族 4 大金律", "en": "4 Student Tax Rules" },
    "title": { "zh": "大一新鮮打工族個人理財稅務 4 大金律", "en": "4 Golden Tax Rules for College Part-Time Students" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性納稅與退稅防禦觀念</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🧾 1. 免繳稅依然一定要申報</h4><p>即使年收入未達 44.6 萬免稅門檻，仍要申報才能拿回被預扣的 5% 退稅款。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🏠 2. 善用房租與特別扣除額</h4><p>租屋打工族保留租約與轉帳憑證，列報最高 180,000 元房租特別扣除額。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📱 3. 採用手機報稅 5 分鐘 SOP</h4><p>使用健保卡或行動電話認證，5 分鐘於 `tax.nat.gov.tw` 線上輕鬆報稅。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. 嚴防簡訊連結退稅詐騙</h4><p>認明 `.gov.tw` 官方網址，絕不在簡訊連結中輸入信用卡資訊。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與財政部賦稅署保護原則</div>",
      "en": "<h3>🛡️ Lifetime Tax Wisdom for College Students</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🧾 1. File Taxes Even at Zero Tax</h4><p>Always file in May to claim back pre-withheld 5% tax refunds.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🏠 2. Leverage Rent Special Deductions</h4><p>Keep rent receipts to claim up to $180,000 NTD housing rent special deductions.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📱 3. Master 5-Min Mobile Filing</h4><p>Use Mobile Auth to complete filing at `tax.nat.gov.tw` in 5 minutes.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. Reject Tax SMS Phishing</h4><p>Verify `.gov.tw` URLs; never enter credit card numbers via SMS links.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & MOF Consumer Protection Guidelines</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "年納稅額歸零SOP", "en": "Zero Tax SOP" },
    "title": { "zh": "稅務試算實例：月薪 3 萬打工族年納稅額完美歸零 SOP", "en": "Practical Case: Zeroing Out Tax for $30k/mo Part-Timer" },
    "content": {
      "zh": "<h3>💡 大一打工族小明 (年薪 36 萬元) 稅務實算示範</h3><ul><li><b>所得總額</b>：$360,000 元 (打工薪資所得)。</li><li><b>免稅額與扣除額</b>：個人免稅額 $97,000 + 標準扣除額 $131,000 + 薪資特別扣除額 $218,000 = <b>$446,000 元</b>。</li><li><b>綜合所得淨額</b>：`36 萬 - 44.6 萬 = 0 元 (負值)`。</li><li><b>最終應納稅額</b>：<b>0 元！</b> 若之前有被預扣 2,000 元稅金，可成功拿回 2,000 元退稅！</li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案稅務精算組</div>",
      "en": "<h3>💡 Student Case: Ming Earning $360,000 NTD Annually</h3><ul><li><b>Total Income</b>: $360,000 NTD (part-time wages).</li><li><b>Exemptions & Deductions</b>: Exemption $97k + Standard $131k + Salary $218k = <b>$446,000 NTD</b>.</li><li><b>Net Taxable Income</b>: `$360k - $446k = $0 NTD`.</li><li><b>Final Tax Liability</b>: <b>$0 NTD!</b> Unlocks $2,000 NTD cash refund for pre-withheld taxes!</li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II Case Study Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "公民財政素養", "en": "Financial Literacy" },
    "title": { "zh": "理性納稅與公民財政素養總整合", "en": "Rational Taxpaying & Civil Financial Literacy Synthesis" },
    "content": {
      "zh": "<h3>🏛️ 了解稅務是邁向成年健全個人財務管理的第一步</h3><p>納稅不只是義務，更是理解個人與社會運作財務關係的關鍵途徑。透過了解綜所稅扣除額與退稅，大一新鮮人能建立：</p><ol><li><b>薪資價值全貌觀</b>：看懂名目薪資 vs 實領薪資 vs 稅後淨收入差距。</li><li><b>合法的權益保護力</b>：善用租屋扣除額與申報退稅，不讓個人合法資產睡著。</li><li><b>健全的信用與稅務資歷</b>：建立連續合法的政府納稅申報紀錄，為未來申請房貸與創業加分！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🏛️ Understanding Taxes is Step One in Financial Literacy</h3><p>Tax filing provides insights into your relationship with public finance. You gain:</p><ol><li><b>Gross vs. Net Salary Perspective</b>: Understanding nominal wage vs. take-home pay.</li><li><b>Legal Rights Protection</b>: Claiming rent deductions and refunds proactively.</li><li><b>Solid Credit Record</b>: Establishing clean tax histories for future mortgages!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十一週全景知識體系圖與觀念整合", "en": "Week 11 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十一週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>所得稅與級距 (Hour 1)</b>：憲法納稅義務 ➔ 所得淨額公式 ➔ 2026免稅額9.7萬/標準13.1萬/薪資21.8萬 (44.6萬免稅門檻) ➔ 打工54C扣繳憑單 ➔ 預扣5% ➔ 5大課稅級距 (5%-40%) ➔ 670萬戶納稅統計 ➔ 標準vs列舉擇優。</p><p><b>打工退稅與節稅 (Hour 2)</b>：預扣5%退稅算術 ➔ 54C憑單檢查 ➔ 節稅3管道 (房租特扣18萬、醫藥無上限、捐贈20%) ➔ 扶養親屬切換 ➔ 手機報稅5分鐘SOP ➔ 逃漏稅罰則 ➔ 股利8.5%可抵減。</p><p><b>綜合實戰與防詐 (Hour 3)</b>：雙特扣39.8萬 ➔ 5月1-31日報稅季 ➔ 海外所得100萬免稅 ➔ 認明.gov.tw防詐 ➔ 官方Portal ➔ 打工年納稅歸零 ➔ 理性納稅 ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 11 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Formulas & Brackets (Hour 1)</b>: Tax Obligation ➔ Net Formula ➔ 2026 Figures ($446k Zero Tax) ➔ Form 54C ➔ 5% Pre-withholding ➔ 5 Brackets (5%-40%) ➔ Standard vs Itemized.</p><p><b>Refunds & Channels (Hour 2)</b>: Refund Math ➔ Form 54C Check ➔ 3 Channels (Rent $180k, Medical unlimited, Charity 20%) ➔ Dependents Choice ➔ Mobile App 5-Min SOP ➔ 8.5% Dividend Credit.</p><p><b>Action & Phishing (Hour 3)</b>: Dual Deductions $398k ➔ May 1-31 Timeline ➔ AMT $1M Exemption ➔ Verify `.gov.tw` Anti-Phishing ➔ Zero Tax Case ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十二週預告 (個人與家庭資產負債表與現金流管理)", "en": "Reflections & Week 12 Preview (Balance Sheets & Cash Flow)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十一週「個人綜合所得稅、節稅規劃與報稅實務」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人打工所得稅體檢與退稅試算報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十二週課程預告：個人與家庭資產負債表、現金流管理與生涯理財規劃</h4><p>下週我們將帶大家進入個人財務管理的核心核心！學習編製<b>個人資產負債表 (BS)、現金流量表 (CF)、發薪日先儲蓄後消費算術與人生 5 大財務目標規劃！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 11!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your tax refund report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 12 Preview: Balance Sheets, Cash Flow & Financial Life Planning</h4><p>Next week we dive into core personal finance! Learn to build your Personal Balance Sheet (BS), Cash Flow Statement (CF), Pay Yourself First rules, and 5 Life Financial Goals!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Tax Net & Bracket Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateTaxNet() {
  const totalIncome = parseFloat(document.getElementById('totalIncomeInput').value) || 360000;
  const exemption = 97000;
  const stdDeduction = 131000;
  const salaryDeduction = 218000;

  const totalDeductions = exemption + stdDeduction + salaryDeduction; // 446,000
  const netIncome = Math.max(0, totalIncome - totalDeductions);

  let rate = 0;
  let diff = 0;
  if (netIncome <= 590000) {
    rate = 0.05; diff = 0;
  } else if (netIncome <= 1330000) {
    rate = 0.12; diff = 41300;
  } else if (netIncome <= 2660000) {
    rate = 0.20; diff = 147700;
  } else if (netIncome <= 4980000) {
    rate = 0.30; diff = 413700;
  } else {
    rate = 0.40; diff = 911700;
  }

  const taxPayable = netIncome > 0 ? (netIncome * rate - diff) : 0;

  const resultDiv = document.getElementById('taxNetResult');
  resultDiv.innerHTML = `
    🧾 <b>2026 個人綜所稅淨額與稅額試算結果</b>：<br>
    • <b>年度所得總額</b>：$${totalIncome.toLocaleString()} 元<br>
    • <b>基本扣除總額 (免稅+標準+薪資特扣)</b>：$${totalDeductions.toLocaleString()} 元<br>
    • <b>綜合所得淨額</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">$${netIncome.toLocaleString()} 元</span><br>
    • <b>適用稅率級距</b>：<span style="color:var(--accent-gold); font-weight:bold;">${(rate*100).toFixed(0)}%</span> | <b>預估應納稅額</b>：<span style="color:var(--accent-sky); font-weight:bold; font-size:1.2rem;">$${Math.round(taxPayable).toLocaleString()} 元</span>
  `;
}

// HOUR 2 MODAL: Tax Refund Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateTaxRefund() {
  const annualIncome = parseFloat(document.getElementById('partTimeIncomeInput').value) || 120000;
  const withheldTax = parseFloat(document.getElementById('withheldTaxInput').value) || 6000;

  // Single student threshold $446,000 -> Tax Payable = $0
  const taxPayable = annualIncome <= 446000 ? 0 : (annualIncome - 446000) * 0.05;
  const refundAmount = withheldTax - taxPayable;

  const resultDiv = document.getElementById('refundResult');
  resultDiv.innerHTML = `
    💵 <b>打工族預先扣繳與退稅精算結果</b>：<br>
    • <b>打工總收入</b>：$${annualIncome.toLocaleString()} 元 | <b>公司預先扣繳 5% 稅金</b>：$${withheldTax.toLocaleString()} 元<br>
    • <b>五月申報實際應納稅額</b>：$${taxPayable.toLocaleString()} 元<br>
    • <b>國稅局 7 月 31 日直撥退稅現金</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;">$${refundAmount.toLocaleString()} 元！</span><br>
    💡 <i>只要在 5 月 31 日前完成手機線上報稅，這 $${refundAmount.toLocaleString()} 元退稅款就會自動匯入你的銀行帳戶！</i>
  `;
}

// HOUR 3 GAME: Tax Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：單身打工族免稅門檻",
    question: "2026 年單身大一學生小明打工領薪水，包含個人免稅額 (9.7萬)、標準扣除額 (13.1萬) 與薪資特別扣除額 (21.8萬)，年收入未達多少金額完全免繳綜所稅？",
    options: [
      { text: "100 萬元", correct: false },
      { text: "446,000 元 (44.6 萬元)", correct: true },
      { text: "20 萬元", correct: false },
      { text: "完全沒有任何免稅額度", correct: false }
    ],
    explain: "免稅額 9.7萬 + 標準扣除額 13.1萬 + 薪資特扣 21.8萬 = 44.6 萬元，未達門檻完全零稅負！"
  },
  {
    level: 2,
    title: "關卡 2：打工預扣稅退稅機制",
    question: "小明暑假打工賺了 10 萬元，被公司依照規定預先扣繳了 5% 稅金 (5,000 元)。小明五月時應該怎麼做才能拿回這 5,000 元？",
    options: [
      { text: "什麼都不做，國稅局會自動寄現金給他", correct: false },
      { text: "在 5 月 31 日前完成手機線上綜所稅申報，填寫退稅銀行帳號", correct: true },
      { text: "打電話去公司罵老闆", correct: false },
      { text: "直接放棄這 5,000 元", correct: false }
    ],
    explain: "只有在五月報稅季完成綜所稅申報，國稅局才會在 7 月 31 日將預扣的 5,000 元退還到指定帳戶！"
  },
  {
    level: 3,
    title: "關卡 3：房租特別扣除額上限",
    question: "最新稅法改革將租屋族的房租改列為「房屋租金支出特別扣除額」，單身租屋族每年最高可扣除多少金額？",
    options: [
      { text: "120,000 元", correct: false },
      { text: "180,000 元 (18 萬元)", correct: true },
      { text: "50,000 元", correct: false },
      { text: "完全不能扣除", correct: false }
    ],
    explain: "最新稅制將房租改列特別扣除額，每年扣除上限提高至 180,000 元！"
  },
  {
    level: 4,
    title: "關卡 4：稅務資安與防詐認明",
    question: "收到簡訊通知「您有 3,500 元退稅金未領取，請點擊連結填寫信用卡號」，下列哪一項是正確的處理方式？",
    options: [
      { text: "這是詐騙簡訊！國稅局退稅一律採直撥入帳或退稅憑單，絕不簡訊要求信用卡號", correct: true },
      { text: "立刻點擊連結輸入信用卡資料", correct: false },
      { text: "將信用卡密碼回覆給對方", correct: false },
      { text: "轉傳給所有同學", correct: false }
    ],
    explain: "認明 .gov.tw 官方網址！國稅局絕不會透過簡訊連結要求提供信用卡資訊。"
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
    let badgeText = userScore === 400 ? "🏆 綜所稅報稅達人徽章 (Tax Master)" : "🥉 報稅初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十一週「個人綜合所得稅、節稅規劃與報稅實務」核心觀念！</p>
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
function submitW11Homework(e) {
  e.preventDefault();
  alert("🎉 第十一週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
