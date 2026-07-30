/**
 * 115 學年度「管理探索二」第十五週：綠色金融、ESG 永續投資與碳定價經濟學
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w15_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十五週課程導論：綠色金融、ESG 永續投資與碳定價經濟學", "en": "Week 15 Intro: Green Finance, ESG Investing & Carbon Pricing" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🌱 投資綠色未來：從 ESG 永續指標到碳定價經濟學</h2><p>「卡尼 (Mark Carney) 名言：氣候變遷是終極的市場失靈，但永續金融將是本世紀最大的財富轉型契機！(Sustainability is the greatest wealth opportunity!)\"</p></div><p>歡迎來到第十五週！當前全球經濟正面臨「2050 淨零排放 (Net Zero)」的劇烈轉型。本單元將帶領大家拆解 ESG 三大柱 (環境/社會/公司治理)、碳費 (Carbon Fee) 碳稅算術、歐盟 CBAM 碳邊境關稅、企業漂綠 (Greenwashing) 辨識、ESG 篩選 ETF (00878/00692)、範疇 1-3 碳盤查，以及綠色職涯展望。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：ESG 三大柱與碳定價</h4><p>E (環境)、S (社會)、G (治理)，掌握 碳費 = 碳排放量 × 費率 算術。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：CBAM 與 ESG ETF</h4><p>歐盟 CBAM 碳關稅衝擊、00878 篩選機制與綠色資產配置。</p></div></div><div class=\"data-source-badge\">📌 資料來源：環境部氣候變遷署 / 金管會綠色金融行動方案 / 台灣碳權交易所</div>",
      "en": "<div class=\"hero-box\"><h2>🌱 Investing in a Green Future: ESG & Carbon Economics</h2><p>\"Mark Carney: Climate change is ultimate market failure; sustainable finance is the decade's biggest opportunity.\"</p></div><p>Welcome to Week 15! We explore global 2050 Net Zero transitions: ESG 3 Pillars (E, S, G), Carbon Fee math, EU CBAM carbon border tariffs, Greenwashing identification, ESG ETFs (00878/00692), and Scope 1-3 carbon audits.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: ESG & Carbon Pricing</h4><p>E (Environmental), S (Social), G (Governance). Master Carbon Fee = Emissions × Rate.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: CBAM Tariffs & ESG ETFs</h4><p>EU CBAM border tariffs, 00878 ESG screening rules, and green portfolios.</p></div></div><div class=\"data-source-badge\">📌 Source: MOENV Climate Change Administration / FSC Green Finance Plan / TCX</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十五週 3 小時學習地圖與核心技能樹", "en": "Week 15 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>永續浪潮、ESG 與碳定價經濟學</b> (Slide 01 - 10)<br>2050淨零目標、ESG三大柱、碳費vs碳稅算術、歐盟CBAM碳關稅、漂綠辨識與環境部公告費率</td><td>🎯 <b>1小時活動</b>：企業碳費成本與 CBAM 關稅衝擊試算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>ESG ETF、碳權交易與綠色金融</b> (Slide 11 - 20)<br>00878/00692 ESG ETF篩選、台灣碳權交易所 (TCX)、範疇1-3碳盤查SOP、綠色溢價與赤道原則融資</td><td>🎯 <b>2小時活動</b>：ESG 篩選 ETF 與綠色溢價評估試算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>永續理財組合與綠色職涯</b> (Slide 21 - 30)<br>大一ESG資產配置、綠色職涯 (永續管理師)、減碳生活、防假綠色基金詐騙、碳交所查閱與4大金律</td><td>🎮 <b>3小時小遊戲</b>：ESG 永續理財達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人 carbon 體檢與 ESG 永續投資計畫</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 15 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Net Zero, ESG & Carbon Pricing</b> (Slide 01 - 10)<br>2050 Net Zero, ESG 3 Pillars, Carbon Fee vs Tax, EU CBAM Tariffs, Greenwashing & MOENV rates</td><td>🎯 <b>Hour 1 Activity</b>: Corporate Carbon Fee & CBAM Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>ESG ETFs, Carbon Trading & Finance</b> (Slide 11 - 20)<br>00878/00692 ESG ETFs, TCX Exchange, Scope 1-3 Audits, Green Premium & Equator Principles</td><td>🎯 <b>Hour 2 Activity</b>: ESG ETF & Green Premium Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Sustainable Portfolios & Green Careers</b> (Slide 21 - 30)<br>Freshman ESG Portfolio, Green Careers, Carbon App, Anti-Greenwashing Scam & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: ESG Master Challenge<br>📝 <b>Class Assignment</b>: Personal Carbon Audit & ESG Portfolio Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "2050 淨零排放", "en": "2050 Net Zero" },
    "title": { "zh": "永續浪潮來襲：氣候變遷經濟學與 2050 淨零排放 (Net Zero)", "en": "Sustainability Wave: Climate Economics & 2050 Net Zero" },
    "content": {
      "zh": "<h3>🌍 翻轉全球商業規則：從極端氣候到碳中和目標</h3><p><b>2050 淨零排放 (Net Zero)</b> 指透過減碳、再生能源與碳捕捉技術，使人為溫室氣體排放量與移除量達成抵銷相等的「淨零」狀態：</p><ul><li><b>巴黎氣候協定 (Paris Agreement)</b>：目標將全球平均升溫控制在工業化前 <b>1.5°C</b> 以內。</li><li><b>商業經濟效應</b>：高碳排企業將面臨鉅額碳費用負擔，低碳綠色企業獲得全球資本追捧！</li></ul><div class=\"data-source-badge\">📌 資料來源：UNFCCC 聯合國氣候變遷公約</div>",
      "en": "<h3>🌍 Reshaping Business Rules: Extreme Weather to Net Zero</h3><p><b>2050 Net Zero</b> means offsetting all human greenhouse gas emissions via renewables and capture:</p><ul><li><b>Paris Agreement Target</b>: Cap global temperature warming within <b>1.5°C</b> above pre-industrial levels.</li><li><b>Economic Impact</b>: High-carbon firms face massive carbon taxes; green firms win global capital!</li></ul><div class=\"data-source-badge\">📌 Source: UNFCCC Paris Agreement Guidelines</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "ESG 三大柱", "en": "ESG 3 Pillars" },
    "title": { "zh": "ESG 三大柱拆解：環境 (E)、社會 (S) 與公司治理 (G)", "en": "Unpacking ESG: Environmental, Social & Governance" },
    "content": {
      "zh": "<h3>🔍 評估企業永續經營競爭力的三大非財務指標</h3><table class=\"data-table\"><thead><tr><th>ESG 維度</th><th>核心指標與考量範疇</th><th>具體企業行動範例</th></tr></thead><tbody><tr><td><b>E (Environmental 環境)</b></td><td>溫室氣體減量、水資源管理、再生能源 RE100。</td><td>台積電承諾 2040 年 100% 使用綠電。</td></tr><tr><td><b>S (Social 社會)</b></td><td>員工多元包容 (DEI)、職場安全、社區關懷。</td><td>友善育兒假、工安零事故目標。</td></tr><tr><td><b>G (Governance 公司治理)</b></td><td>董事會獨立性、反貪腐、股東權益保障。</td><td>獨立董事過半、誠信經營守則。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：MSCI ESG Rating 評級架構</div>",
      "en": "<h3>🔍 3 Non-Financial Pillars Assessing Sustainable Enterprise</h3><table class=\"data-table\"><thead><tr><th>ESG Pillar</th><th>Core Metrics & Scope</th><th>Corporate Action Examples</th></tr></thead><tbody><tr><td><b>E (Environmental)</b></td><td>Emissions, water management, RE100 renewables.</td><td>TSMC commits to 100% green power by 2040.</td></tr><tr><td><b>S (Social)</b></td><td>Diversity (DEI), workplace safety, community.</td><td>Childcare leave, zero workplace accident goal.</td></tr><tr><td><b>G (Governance)</b></td><td>Board independence, anti-corruption, shareholder rights.</td><td>Independent directors, business ethics code.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MSCI ESG Rating Framework</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "碳定價算術", "en": "Carbon Pricing" },
    "title": { "zh": "什麼是碳定價 (Carbon Pricing)？碳費 (Fee) vs. 碳稅 (Tax)", "en": "What is Carbon Pricing? Carbon Fee vs. Carbon Tax Math" },
    "content": {
      "zh": "<h3>💰 為污染排碳付費！外部成本內部化的經濟學算術</h3><div class=\"formula-box\">$$\\text{企業年度碳費負擔 (Carbon Fee)} = \\text{溫室氣體總排放量 (公噸 \\text{CO}_2\\text{e})} \\times \\text{指定碳費費率 (元/公噸)}$$</div><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 碳費 (Carbon Fee - 台灣採用)</h4><p>環境部徵收，專款專用於國家溫室氣體減量與綠色轉型基金。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 碳稅 (Carbon Tax - 歐洲採用)</h4><p>財政部當作一般稅收徵收，納入國家整體國庫通用。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《氣候變遷因應法》第 28 條規定</div>",
      "en": "<h3>💰 Internalizing Pollution Costs: Carbon Pricing Math</h3><div class=\"formula-box\">$$\\text{Corporate Annual Carbon Fee} = \\text{Total GHG Emissions (Tons \\text{CO}_2\\text{e})} \\times \\text{Carbon Rate (\$NTD/Ton)}$$</div><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Carbon Fee (Taiwan System)</h4><p>Collected by MOENV into a dedicated climate fund for green transition.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Carbon Tax (European System)</h4><p>Collected by Treasury as general revenue for public budgets.</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Climate Change Response Act Article 28</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "歐盟 CBAM", "en": "EU CBAM" },
    "title": { "zh": "歐盟碳邊境調整機制 (CBAM) 與台灣出口製造業衝擊", "en": "EU Carbon Border Adjustment Mechanism (CBAM) Impact" },
    "content": {
      "zh": "<h3>🇪🇺 出口歐洲要被加徵「碳關稅」！台灣出口業震撼彈</h3><ul><li><b>歐盟 CBAM 運作原理</b>：進口至歐盟的高碳排產品（鋼鐵、水泥、鋁材、化肥、電力），進口商必須購買 CBAM 憑證，彌補歐盟與生產國之間的碳價差。</li><li><b>台灣製造業衝擊</b>：鋼鐵、金屬扣件（螺絲螺帽）為出口歐盟重鎮。若台灣未先行在國內繳納碳費，產品將被歐盟補徵高額碳關稅！</li></ul><div class=\"data-source-badge\">📌 資料來源：歐盟委員會 CBAM 官方法規白皮書</div>",
      "en": "<h3>🇪🇺 Carbon Tariffs on Exports to Europe: A Wake-Up Call</h3><ul><li><b>EU CBAM Mechanism</b>: High-carbon imports (steel, cement, aluminum) must buy CBAM certificates covering carbon price gaps.</li><li><b>Taiwan Export Impact</b>: Taiwan steel and fasteners exports to the EU face tariffs unless carbon fees are paid locally!</li></ul><div class=\"data-source-badge\">📌 Source: European Commission CBAM Regulations</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "辨識企業漂綠", "en": "Identify Greenwashing" },
    "title": { "zh": "企業漂綠 (Greenwashing) 辨識指南與 SASB / GRI 標準", "en": "Greenwashing Identification Guide & SASB/GRI Standards" },
    "content": {
      "zh": "<h3>🔍 拒絕假綠色！看穿企業公關文宣與真實永續揭露</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 企業漂綠 (Greenwashing) 行為</h4><p>花大錢拍廣告宣傳種植 1,000 棵樹，卻隱瞞工廠每年排放 100 萬噸廢水與碳排！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 查驗國際權威揭露標準</h4><p>查閱企業永續報告書是否通過 **GRI (全球報告倡導組織)** 或 **SASB (永續會計準則委員會)** 第三方獨立查證。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會防範企業漂綠行為監管指引</div>",
      "en": "<h3>🔍 Spotting Fake Green PR vs. Real Sustainability</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Corporate Greenwashing</h4><p>Spending millions advertising 1,000 trees planted while hiding 1M tons of carbon pollution!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Check International Standards</h4><p>Verify if Sustainability Reports comply with **GRI** or **SASB** 3rd-party audits.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Anti-Greenwashing Regulatory Guidelines</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "台灣碳費數字", "en": "Taiwan Carbon Rates" },
    "title": { "zh": "實證數據：環境部與金管會台灣碳費徵收費率公告", "en": "Empirical Data: Taiwan MOENV Carbon Rates Announcement" },
    "content": {
      "zh": "<h3>🇹🇼 台灣正式邁入碳有價時代！官方實證費率公告</h3><p>根據環境部 2026 最新碳費費率審議委員會決議公告：</p><ul><li><b>一般碳費基準費率</b>：每公噸溫室氣體排放徵收 <b>300 元台幣</b>。</li><li><b>優惠費率 A/B (自主減量計畫)</b>：企業若提出符合科學減量目標 (SBTi) 之自主減量計畫，費率大幅降低至 <b>100 元 ~ 50 元/公噸</b>。鼓勵企業積極設備轉型！</li></ul><div class=\"data-source-badge\">📌 資料來源：環境部氣候變遷署 2026 碳費費率公告</div>",
      "en": "<h3>🇹🇼 Taiwan Enters Carbon Pricing Era: Official Rates</h3><p>According to MOENV 2026 Official Announcements:</p><ul><li><b>Base Carbon Rate</b>: Set at <b>$300 NTD per ton CO2e</b> for large emitters.</li><li><b>Discounted Rates A/B</b>: Reduced to <b>$100 - $50 NTD/ton</b> for firms adopting Science Based Targets (SBTi)!</li></ul><div class=\"data-source-badge\">📌 Source: MOENV Climate Change Administration Announcements</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "綠色債券機制", "en": "Green Bonds" },
    "title": { "zh": "綠色債券 (Green Bonds) 與永續發展債券市場運作機制", "en": "Green Bonds & Sustainable Debt Market Mechanics" },
    "content": {
      "zh": "<h3>💚 專錢專用！發行固定收益債券為綠色專案籌資</h3><ul><li><b>綠色債券 (Green Bonds) 定義</b>：企業或政府發行債券，募集資金<b>限制 100% 用於綠能、提升能效、污染防治等綠色專案</b>（如台積電發行綠債興建低碳晶圓廠）。</li><li><b>櫃買中心 (TPEx) 永續債券專區</b>：台灣設有完整審核與追蹤機制，確保資金不被移作他用。</li></ul><div class=\"data-source-badge\">📌 資料來源：證券櫃檯買賣中心 (TPEx) 永續發展債券專區</div>",
      "en": "<h3>💚 Dedicated Fixed Income Funding Green Projects</h3><ul><li><b>Green Bonds Definition</b>: Debt issued where 100% of proceeds must fund renewable energy or efficiency (e.g. TSMC issuing green bonds for low-carbon Fabs).</li><li><b>TPEx Sustainable Debt Market</b>: Taiwan's GreTai Securities Market enforces tracking mechanisms.</li></ul><div class=\"data-source-badge\">📌 Source: Taipei Exchange (TPEx) Sustainable Bond Market Portal</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>ESG 三大柱</b>：Environment (環境)、Social (社會)、Governance (公司治理)。</li><li><b>碳費算術</b>：碳費 = 總碳排量 × 300元/噸；優惠費率低至 50-100 元/噸。</li><li><b>歐盟 CBAM</b>：出口高碳排產品將被課徵碳關稅，推動台灣綠色轉型。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 碳費關卡試算」</b> 按鈕，輸入企業碳排放量與費率，精算企業年度碳費與 CBAM 衝擊！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>ESG 3 Pillars</b>: Environment, Social, Governance.</li><li><b>Carbon Fee Math</b>: Emissions × $300 NTD/ton (discounted to $50-$100 NTD/ton).</li><li><b>EU CBAM</b>: Carbon border tariffs push exports toward green transitions.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate Carbon Fees & CBAM!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "ESG 篩選 ETF", "en": "ESG Filtered ETFs" },
    "title": { "zh": "ESG 篩選 ETF 解析：高股息 + ESG 篩選 (00878 / 00692) 原理", "en": "ESG Filtered ETFs: 00878 & 00692 Screening Mechanics" },
    "content": {
      "zh": "<h3>📈 小資族如何用 ETF 投資永續好公司？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. 國泰永續高股息 (00878) 🌟</h4><p>追蹤 MSCI 台灣 ESG 永續高股息精選 30 指數。排除 ESG 評級低劣者，結合永續與高股息。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. 富邦公司治理 (00692)</h4><p>篩選臺灣公司治理評鑑前 20% 優良企業，涵蓋台積電等優質永續成分股。</p></div></div><div class=\"data-source-badge\">📌 資料來源：投信投顧公會 ESG ETF 專區數據</div>",
      "en": "<h3>📈 How Retail Investors Support Sustainability via ETFs</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. Cathay Sustainability High Dividend (00878) 🌟</h4><p>Tracks MSCI Taiwan ESG Dividend Index. Filters out low-ESG rated firms.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. Fubon Corporate Governance (00692)</h4><p>Screens Top 20% firms in TWSE Corporate Governance evaluations (includes TSMC).</p></div></div><div class=\"data-source-badge\">📌 Source: SITCA ESG ETF Section Reports</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "碳權交易與TCX", "en": "Carbon Trading & TCX" },
    "title": { "zh": "碳權交易 (Carbon Trading) 與台灣碳權交易所 (TCX) 機制", "en": "Carbon Trading & Taiwan Carbon Solution Exchange (TCX)" },
    "content": {
      "zh": "<h3>🏬 排放權可以買賣！台灣碳權交易所交易實務</h3><ul><li><b>碳權 (Carbon Credit) 定義</b>：1 單位碳權代表 <b>1 公噸 CO2e 的排放額度</b>。多減碳者可將剩餘碳權賣給超額排碳者。</li><li><b>台灣碳權交易所 (TCX)</b>：總部設於高雄，提供國內自主減量碳權與國外高品質碳權買賣平台，促進市場化減碳。</li></ul><div class=\"data-source-badge\">📌 資料來源：台灣碳權交易所 (TCX) 交易規則說明</div>",
      "en": "<h3>🏬 Carbon Rights Traded Like Commodities at TCX</h3><ul><li><b>Carbon Credit Definition</b>: 1 Credit equals <b>1 Ton of CO2e emission quota</b>. Low emitters sell surplus credits to high emitters.</li><li><b>Taiwan Carbon Solution Exchange (TCX)</b>: Headquartered in Kaohsiung, providing trading platforms for domestic & international credits.</li></ul><div class=\"data-source-badge\">📌 Source: Taiwan Carbon Solution Exchange (TCX) Trading Rules</div>"
    }
  },
  {
    "id": 13,
    "img": "images/w15_esg_pillars.jpg",
    "hour": 2,
    "tag": { "zh": "範疇 1-3 碳盤查", "en": "Scope 1-3 Audits" },
    "title": { "zh": "企業碳盤查 (Carbon Footprint) SOP：範疇一、二與範疇三", "en": "Corporate Carbon Audits: Scope 1, Scope 2 & Scope 3 SOP" },
    "content": {
      "zh": "<h3>🔍 算清企業從原料到廢棄的全生命週期碳排</h3><table class=\"data-table\"><thead><tr><th>碳盤查範疇</th><th>涵蓋排放源分類與定義</th><th>企業範例</th></tr></thead><tbody><tr><td><b>範疇一 (Scope 1) 直接排放</b></td><td>工廠煙囪、公司公務車汽油燃燒、發電機。</td><td>自有工廠鍋爐燃燒燃料。</td></tr><tr><td><b>範疇二 (Scope 2) 間接外購</b></td><td>外購外包電力、外購蒸氣能源。</td><td>外購台電電力運作機房。</td></tr><tr><td><b>範疇三 (Scope 3) 價值鏈上下游</b></td><td>供應鏈原料生產、員工差旅、產品使用廢棄。</td><td>蘋果要求供應鏈廠商全碳盤查。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：ISO 14064-1 溫室氣體盤查國際標準</div>",
      "en": "<h3>🔍 Measuring Emissions Across the Entire Supply Chain</h3><table class=\"data-table\"><thead><tr><th>Scope Category</th><th>Emission Source Definition</th><th>Corporate Example</th></tr></thead><tbody><tr><td><b>Scope 1: Direct</b></td><td>Factory chimneys, company fleet gasoline.</td><td>Fuel burned in owned boilers.</td></tr><tr><td><b>Scope 2: Indirect Power</b></td><td>Purchased electricity, steam & cooling.</td><td>Buying Taipower electricity for Fabs.</td></tr><tr><td><b>Scope 3: Value Chain</b></td><td>Upstream supply chain, business trips, product waste.</td><td>Apple auditing supplier footprint.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: ISO 14064-1 Greenhouse Gas Standard</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "綠色溢價", "en": "Green Premium" },
    "title": { "zh": "綠色溢價 (Green Premium) 與產品碳足跡對消費者的影響", "en": "Green Premium & Carbon Footprint Impact on Consumers" },
    "content": {
      "zh": "<h3>🏷️ 為了環保，你願意多支付多少價格？綠色經濟算術</h3><p><b>綠色溢價 (Green Premium)</b> 指買零碳/低碳技術產品比起傳統高碳產品額外高出的成本：</p><div class=\"formula-box\">$$\\text{綠色溢價 (Green Premium)} = \\text{零碳產品售價 (如 35 元環保杯)} - \\text{高碳傳統產品售價 (30 元)}$$</div><p>隨著技術進步與規模化生產，綠色溢價將逐漸歸零，使低碳產品成為消費市場主流！</p><div class=\"data-source-badge\">📌 資料來源：比爾·蓋茲《如何避免氣候災難》綠色溢價模型</div>",
      "en": "<h3>🏷️ How Much Extra Will Consumers Pay for Green Products?</h3><p><b>Green Premium</b> measures the additional cost of zero-carbon tech over traditional options:</p><div class=\"formula-box\">$$\\text{Green Premium} = \\text{Zero-Carbon Product Price (\$35)} - \\text{High-Carbon Traditional Price (\$30)}$$</div><p>As green tech scales up, the Green Premium shrinks toward zero, making green goods mainstream!</p><div class=\"data-source-badge\">📌 Source: Bill Gates \"How to Avoid a Climate Disaster\"</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "赤道原則融資", "en": "Equator Principles" },
    "title": { "zh": "綠色金融與銀行授信：赤道原則 (Equator Principles) 融資", "en": "Green Finance & Banking: Equator Principles Financing" },
    "content": {
      "zh": "<h3>🏦 污染大戶借不到錢！銀行業的綠色授信防線</h3><ul><li><b>赤道原則 (Equator Principles)</b>：全球大型商業銀行採納的風險管理架構，在審核大型專案融資（> 1,000 萬美元）時，必須評估其對環境與社會的衝擊。</li><li><b>不給高污染放款</b>：台灣主要金控（富邦、國泰、玉山）已簽署赤道原則，停止向新採煤電廠放款！</li></ul><div class=\"data-source-badge\">📌 資料來源：赤道原則協會 (Equator Principles Association) 指南</div>",
      "en": "<h3>🏦 Pollution Giants Denied Bank Loans! Green Credit Defense</h3><ul><li><b>Equator Principles</b>: Global banking framework mandating environmental and social impact audits for large project financing (>$10M USD).</li><li><b>No Financing for Coal</b>: Major Taiwanese banks (Fubon, Cathay, E.Sun) signed EP, halting new coal plant loans!</li></ul><div class=\"data-source-badge\">📌 Source: Equator Principles Association Guidelines</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "永續投資策略", "en": "Sustainable Investing" },
    "title": { "zh": "永續投資策略：負向排除 vs. 正向篩選 vs. 影響力投資", "en": "Sustainable Investment Strategies: Exclusion vs. Impact" },
    "content": {
      "zh": "<h3>🎯 三種主流 ESG 法定投資選股戰術</h3><table class=\"data-table\"><thead><tr><th>投資策略</th><th>作法與選股原則</th><th>代表性投資組合</th></tr></thead><tbody><tr><td><b>1. 負向排除 (Exclusion)</b></td><td>剔除菸草、軍火、煤炭高污染企業。</td><td>標普 500 ESG 排除指數。</td></tr><tr><td><b>2. 正向最佳選股 (Best-in-Class)</b></td><td>同產業中優先選擇 ESG 評分最高的龍頭。</td><td>00878、00692 ETF。</td></tr><tr><td><b>3. 影響力投資 (Impact)</b></td><td>資金直接投入能產生可衡量綠色社會效益計畫。</td><td>綠色綠能專案基金。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：全球永續投資聯盟 (GSIA) 投資策略分類</div>",
      "en": "<h3>🎯 3 Mainstream ESG Investment Selection Strategies</h3><table class=\"data-table\"><thead><tr><th>Strategy</th><th>Method & Stock Selection Rules</th><th>Representative Portfolios</th></tr></thead><tbody><tr><td><b>1. Negative Exclusion</b></td><td>Filter out tobacco, weapons, and coal firms.</td><td>S&P 500 ESG Exclusions Index.</td></tr><tr><td><b>2. Best-in-Class</b></td><td>Pick top ESG scoring leaders in each sector.</td><td>00878, 00692 ETFs.</td></tr><tr><td><b>3. Impact Investing</b></td><td>Funds invested directly for measurable green impact.</td><td>Renewable Infrastructure Funds.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Global Sustainable Investment Alliance (GSIA) Report</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "ESG 投資風險", "en": "ESG Investment Risks" },
    "title": { "zh": "ESG 投資風險：漂綠罰款、碳費侵蝕利潤與 RE100 綠電瓶頸", "en": "ESG Risks: Greenwashing Fines, Margin Squeeze & RE100" },
    "content": {
      "zh": "<h3>⚠️ 買 ESG 概念股不能忽視的隱形轉型風險</h3><ul><li><b>漂綠監管重罰風險</b>：美 SEC 與歐盟加強監管，基金若誇大 ESG 將面臨鉅額罰款與撤資。</li><li><b>碳費侵蝕營業利潤</b>：高碳排製造業若無法順利設備轉型，年度碳費與 CBAM 會直接侵蝕獲利。</li><li><b>RE100 綠電取得瓶頸</b>：台灣綠電需求遠大於供給，企業買不到綠電面臨國際客戶抽單風險。</li></ul><div class=\"data-source-badge\">📌 資料來源：金管會與綠電交易市場監管警訊</div>",
      "en": "<h3>⚠️ Hidden Transition Risks in ESG Investing</h3><ul><li><b>Greenwashing Fines</b>: US SEC and EU enforce heavy fines on funds exaggerating ESG scores.</li><li><b>Margin Squeeze from Carbon Fees</b>: High-emission manufacturers face profit hits from carbon fees.</li><li><b>RE100 Renewable Shortage</b>: Taiwan green power supply lags demand, risking client order losses.</li></ul><div class=\"data-source-badge\">📌 Source: FSC & Green Electricity Market Warnings</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "RE100與綠能", "en": "RE100 & Renewables" },
    "title": { "zh": "全球綠能巨頭與台灣綠能供應鏈：台積電 RE100 與風光發電", "en": "Global Renewables & Taiwan Chain: TSMC RE100 & Wind/Solar" },
    "content": {
      "zh": "<h3>⚡ 搶購全台離岸風電！護國神山的綠電淨零之路</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>台積電 RE100 承諾 🌟</h4><p>承諾於 2040 年達到 100% 全面使用再生能源 (RE100)，並包下全台絕大部分離岸風電廠之綠電發電量！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>台灣綠能供應鏈</h4><p>離岸風電水下基礎、太陽能模組與儲能系統（世紀鋼、森崴能源、台達電）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：RE100 氣候組織官方報告與台積電永續報告書</div>",
      "en": "<h3>⚡ Buying Out Taiwan's Offshore Wind: TSMC's RE100 Path</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>TSMC RE100 Commitment 🌟</h4><p>Commits to 100% renewable electricity by 2040 (RE100), buying out major offshore wind capacity!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Taiwan Green Energy Supply Chain</h4><p>Offshore wind jacket foundations, solar modules & storage (Century Iron, Shinfox, Delta).</p></div></div><div class=\"data-source-badge\">📌 Source: RE100 Climate Group & TSMC Sustainability Report</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "科技業低碳轉型", "en": "Tech Low-Carbon" },
    "title": { "zh": "台灣科技業綠色轉型：低碳製造與綠色供應鏈競爭力", "en": "Taiwan Tech Green Transition & Low-Carbon Competitiveness" },
    "content": {
      "zh": "<h3>🏭 減碳力就是接單力！蘋果要求的綠色供應鏈法條</h3><p>Apple、Microsoft 等國際科技巨頭已強制要求其供應鏈於 2030 年達成碳中和。台灣電子廠：</p><ul><li><b>綠色製造技術升級</b>：引進高能效機器、廢水回收系統與智慧能源管理。</li><li><b>低碳產品勝出</b>：產品碳足跡越低的廠商，越能穩拿蘋果與微軟長期的獨家大單！</li></ul><div class=\"data-source-badge\">📌 資料來源：Apple 供應鏈清潔能源計畫年報</div>",
      "en": "<h3>🏭 Carbon Reduction Equals Order Winning Power!</h3><p>Apple and Microsoft mandate 100% carbon-neutral supply chains by 2030. Taiwan electronics firms:</p><ul><li><b>Green Manufacturing Tech</b>: Installing high-efficiency tools, water recycling, and smart energy grids.</li><li><b>Low-Carbon Products Win Orders</b>: Lower carbon footprint guarantees long-term exclusive orders!</li></ul><div class=\"data-source-badge\">📌 Source: Apple Supplier Clean Energy Program Annual Report</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>ESG ETF</b>：00878 與 00692 結合 ESG 篩選與優質股息。</li><li><b>碳權交易</b>：TCX 提供國內外碳權買賣平台；範疇 1-3 盤查涵蓋全供應鏈。</li><li><b>赤道原則</b>：銀行綠色授信，停止向高污染電廠放款。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: ESG ETF試算器」</b> 按鈕，輸入 00878/00692 配置與綠色溢價，精算永續投資回報！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>ESG ETFs</b>: 00878 and 00692 combine ESG screening with solid dividend yields.</li><li><b>Carbon Trading</b>: TCX enables credit trading; Scope 1-3 audits cover total value chains.</li><li><b>Equator Principles</b>: Green banking stops loans to high-pollution projects.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate ESG ETF returns!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "大一ESG資產配置", "en": "Freshman ESG Portfolio" },
    "title": { "zh": "打造大一新鮮人永續理財組合：結合 0050/00878 與 ESG 思維", "en": "Building a Freshman Sustainable Portfolio: 0050 & 00878" },
    "content": {
      "zh": "<h3>🌱 讓你的每一塊錢資金，都為地球永續發揮影響力！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>核心組合：0050 (70%) + 00878 (30%)</h4><p>70% 資金配置全市場台積電龍頭成長；30% 資金配置 ESG 永續高股息，兼顧收益與永續。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>影響力效果</h4><p>拒絕投資高污染黑名單企業，用資本力量支持積極減碳綠能轉型的優秀公司！</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) ESG 個人資產配置模型</div>",
      "en": "<h3>🌱 Making Every Dollar Fight for Earth's Sustainability!</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Core Portfolio: 0050 (70%) + 00878 (30%)</h4><p>70% in market-cap growth (TSMC); 30% in ESG high-dividend, balancing yield and planet.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>Impact Effect</h4><p>Refuse funding high-pollution blacklists; use capital to back low-carbon leaders!</p></div></div><div class=\"data-source-badge\">📌 Source: CFP ESG Personal Asset Allocation Model</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "大一綠色職涯", "en": "Green Careers" },
    "title": { "zh": "大一新鮮人綠色職涯展望：永續管理師、碳盤查員與 ESG 分析師", "en": "Freshman Green Careers: Sustainability Managers & ESG Analysts" },
    "content": {
      "zh": "<h3>🎓 淨零轉型帶爆的新興職缺！綠金人才薪資水漲船高</h3><ul><li><b>永續管理師 (CSO/Sustainability Manager)</b>：撰寫企業永續報告書、規劃 RE100 與 ESG 策略。</li><li><b>碳盤查查驗員 (ISO 14064 Auditor)</b>：輔導企業進行範疇 1-3 碳盤查，需求暴增。</li><li><b>ESG 永續分析師 (ESG Analyst)</b>：於投信、銀行與評級機構分析企業 ESG 風險。</li></ul><div class=\"data-source-badge\">📌 資料來源：104 人力銀行綠色人才薪資白皮書</div>",
      "en": "<h3>🎓 Exploding Demand for Green Talent Driven by Net Zero!</h3><ul><li><b>Sustainability Managers</b>: Writing corporate sustainability reports, planning RE100 & ESG strategies.</li><li><b>Carbon Auditors (ISO 14064)</b>: Helping enterprises execute Scope 1-3 GHG footprint audits.</li><li><b>ESG Analysts</b>: Analyzing corporate ESG risks for investment funds, banks, and rating agencies.</li></ul><div class=\"data-source-badge\">📌 Source: 104 Job Bank Green Talent Salary Report</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "減碳生活App", "en": "Green Lifestyle Apps" },
    "title": { "zh": "綠色生活與消費減碳：減塑、循環經濟與個人碳足跡 App", "en": "Green Lifestyle & Consumption: Circular Economy & Carbon Apps" },
    "content": {
      "zh": "<h3>♻️ 理財同時減碳！從日常消費實踐永續減碳行動</h3><ul><li><b>自備環保杯優惠</b>：折抵 5 元（每年省下 1,800 元 + 減少 360 個塑膠杯）。</li><li><b>個人碳足跡追蹤 App</b>：記錄通勤搭乘捷運/公車比起開車減少的碳排放量。</li><li><b>循環經濟二手二手交易</b>：二手教科書與衣物循環利用，減少物資浪費。</li></ul><div class=\"data-source-badge\">📌 資料來源：環境部全民綠生活推廣專區</div>",
      "en": "<h3>♻️ Save Money While Cutting Carbon in Daily Life!</h3><ul><li><b>Bring Your Own Cup Discount</b>: Save $5 NTD/cup ($1,800 NTD/yr saved + 360 plastic cups eliminated).</li><li><b>Personal Carbon Apps</b>: Track carbon saved taking MRT/busses over driving cars.</li><li><b>Circular Economy</b>: Reusing secondhand textbooks and clothes to minimize waste.</li></ul><div class=\"data-source-badge\">📌 Source: MOENV Green Lifestyle Campaign</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "綠色資安防詐", "en": "Anti-Greenwashing Scam" },
    "title": { "zh": "綠色投資資安防詐：防範假冒綠色債券與偽 ESG 基金詐騙", "en": "Green Investment Security: Rejecting Fake Green Bond Scams" },
    "content": {
      "zh": "<h3>🛡️ 警惕打著「愛地球」旗號的高收益詐騙陷阱！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 偽綠色高收益詐騙</h4><p>宣稱「投資亞馬遜雨林碳權，保證年化報酬率 20%」。99% 是詐騙資金盤！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 認明金管會核准名單</h4><p>買綠色債券或 ESG 基金，認明金管會「ESG 基金專區」核准之正規合法基金。</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙專線警訊</div>",
      "en": "<h3>🛡️ Guard Against High-Yield Scams Disguised as Eco-Friendly!</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Fake Green High-Yield Scams</h4><p>Claims saying \"Invest in Amazon carbon credits for 20% guaranteed returns\". 99% Scam!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Verify FSC Approved List</h4><p>Verify ESG funds against the FSC official ESG Fund Portal list before buying.</p></div></div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Scam Hotline Warning</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "碳交所 Portal 查閱", "en": "TCX Portal Guide" },
    "title": { "zh": "實證數據調取：台灣碳權交易所 (tcx.com.tw) 查閱", "en": "Retrieving Real Data: Taiwan Carbon Exchange Portal Guide" },
    "content": {
      "zh": "<h3>🌐 手把手教大一學生登入碳交所查閱碳權交易數據</h3><ul><li><b>查詢國際碳權交易板塊</b>：登入 `tcx.com.tw` 查閱最新國際碳權專區成報價與交易公噸數。</li><li><b>查詢國內碳權額度</b>：查閱台灣企業自主減量專案之碳權審核核發進度。</li><li><b>培養永續數據分析力</b>：將課堂碳定價理論與真實碳交易數據互相驗證。</li></ul><div class=\"data-source-badge\">📌 資料來源：台灣碳權交易所 (tcx.com.tw)</div>",
      "en": "<h3>🌐 Querying Real Carbon Data on the TCX Portal</h3><ul><li><b>Query International Carbon Credits</b>: Visit `tcx.com.tw` for volume and price data.</li><li><b>Query Domestic Credit Quotas</b>: Check progress on Taiwanese corporate voluntary reduction credits.</li><li><b>Build Sustainability Competency</b>: Verify pricing theory against live exchange data.</li></ul><div class=\"data-source-badge\">📌 Source: Taiwan Carbon Solution Exchange (TCX)</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "ESG 永續 4 大金律", "en": "4 ESG Rules" },
    "title": { "zh": "大一新鮮人 ESG 永續理財 4 大金律", "en": "4 Golden Rules of ESG & Sustainable Investing" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性永續投資與世代責任心態</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🌱 1. 優先配置 ESG 篩選 ETF</h4><p>選擇 00878 / 00692 等透明篩選 ETF，用資本力量支持減碳好企業。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. 嚴防企業漂綠行為</h4><p>查驗 GRI/SASB 獨立第三方認證，不聽信企業公關廣告包裝。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>💰 3. 理解碳費對企業獲利衝擊</h4><p>追蹤高碳排企業之碳費負擔與 CBAM 關稅，評估轉型能力。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. 實踐日常低碳省錢生活</h4><p>自備環保杯與搭乘大眾運輸，理財與減碳並行，守護世代正義。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與永續投資 (GSIA) 保護原則</div>",
      "en": "<h3>🛡️ Lifetime Mindset for Sustainable Wealth & Intergenerational Equity</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🌱 1. Allocate to ESG Filtered ETFs</h4><p>Pick 00878 / 00692 ETFs to back low-carbon enterprises with your capital.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. Guard Against Corporate Greenwashing</h4><p>Check GRI/SASB 3rd-party audits over fancy PR ads.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>💰 3. Track Carbon Fee Earnings Impact</h4><p>Monitor high-emission firms' carbon fees and CBAM tariff transition abilities.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. Practice Low-Carbon Daily Living</h4><p>Use eco-cups and public transit, cutting expenses while saving the planet.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & GSIA Sustainable Investment Guidelines</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "ESG 定期定額 SOP", "en": "ESG DCA SOP" },
    "title": { "zh": "永續投資試算實例：定期定額 ESG ETF 兼顧收益與永續", "en": "Practical Case: ESG ETF DCA Strategy for Returns & Planet" },
    "content": {
      "zh": "<h3>💡 大一打工族每月 3,000 元定期定額買 00878 SOP</h3><ul><li><b>每月投資方案</b>：打工月薪 15,000 元，按 20% 比例提撥 <b>3,000 元</b> 定期定額買 00878。</li><li><b>永續與收益雙贏</b>：00878 具備約 6% 年化股息率，且成分股皆通過 ESG 評級篩選。</li><li><b>4 年累積成果</b>：`3,000 元 * 48 個月 = 14.4 萬本金 + 複利約 3 萬元 = ` <span style=\"color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;\">17.4 萬元永續積蓄！</span></li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案永續理財組</div>",
      "en": "<h3>💡 Student Case: Ming DCA $3,000/mo into 00878 ESG ETF</h3><ul><li><b>Monthly Strategy</b>: Allocate 20% ($3,000 NTD) of $15,000 student wages into 00878 ETF automatically.</li><li><b>Double Win</b>: 00878 yields ~6% annual dividends, with all constituents screened for high ESG ratings.</li><li><b>4-Year Graduation Result</b>: `$3k * 48 mos = $144k principal + $30k compounding = ` <span style=\"color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;\">$174,000 NTD Green Savings!</span></li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II Sustainable Finance Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "世代正義總整合", "en": "Intergenerational Equity" },
    "title": { "zh": "永續發展與世代正義總整合", "en": "Sustainability & Intergenerational Equity Synthesis" },
    "content": {
      "zh": "<h3>🌏 理財不只是賺錢，更是為了讓下一代擁有美好的地球！</h3><p>綠色金融的核心精神在於實現<b>「世代正義 (Intergenerational Equity)」</b>。大一新鮮人身為未來社會棟樑：</p><ol><li><b>聰明消費</b>：用選票與錢包支持低碳友善環境的永續品牌。</li><li><b>責任投資</b>：運用 ESG 資產配置，引導資本流向真正守護地球的綠色企業！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🌏 Finance is Not Just Wealth, But Safeguarding the Planet!</h3><p>Green Finance embodies <b>Intergenerational Equity</b>. As future leaders, freshmen should:</p><ol><li><b>Consume Smartly</b>: Vote with your wallet for eco-friendly sustainable brands.</li><li><b>Invest Responsibly</b>: Drive capital toward green firms protecting our planet!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十五週全景知識體系圖與觀念整合", "en": "Week 15 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十五週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>永續與碳定價 (Hour 1)</b>：2050淨零目標 ➔ ESG三大柱 (E/S/G) ➔ 碳費公式 (碳排量×300元/噸) ➔ 歐盟CBAM碳關稅 ➔ 漂綠辨識 (GRI/SASB) ➔ 環境部費率公告 ➔ 綠色債券機制。</p><p><b>ESG ETF與碳交易 (Hour 2)</b>：00878/00692 ESG ETF ➔ 碳權交易 (TCX) ➔ 範疇1-3碳盤查SOP ➔ 綠色溢價算術 ➔ 赤道原則銀行融資 ➔ 3大永續策略 (排除/正向/影響力) ➔ 漂綠與RE100風險 ➔ 台積電RE100風電。</p><p><b>理財組合與職涯 (Hour 3)</b>：0050+00878 ESG配置 ➔ 綠色職涯 (永續管理師) ➔ 減碳生活 ➔ 防假綠色基金詐騙 ➔ 碳交所Portal查閱 ➔ 定期定額SOP ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 15 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Net Zero & Carbon (Hour 1)</b>: 2050 Net Zero ➔ ESG 3 Pillars ➔ Carbon Fee Math ($300/ton) ➔ EU CBAM ➔ Greenwashing ➔ MOENV Rates ➔ Green Bonds.</p><p><b>ESG ETFs & Carbon Trade (Hour 2)</b>: 00878/00692 ETFs ➔ Carbon Credits (TCX) ➔ Scope 1-3 Audits ➔ Green Premium ➔ Equator Principles ➔ 3 Strategies ➔ TSMC RE100.</p><p><b>Portfolios & Careers (Hour 3)</b>: 0050+00878 Portfolio ➔ Green Careers ➔ Low-Carbon Living ➔ Anti-Scam ➔ TCX Portal ➔ DCA SOP ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十六週預告 (加密貨幣、區塊鏈基礎、Web3 與數位資產)", "en": "Reflections & Week 16 Preview (Cryptocurrency, Web3 & Digital Risks)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十五週「綠色金融、ESG 永續投資與碳定價經濟學」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人 carbon 體檢與 ESG 永續投資計畫」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十六週課程預告：加密貨幣、區塊鏈基礎、Web3 與數位資產風險</h4><p>下週我們將探索數位新金融！解密<b>區塊鏈 (Blockchain) 去中心化帳本、比特幣 (Bitcoin BTC) 減半算術、以太坊 (ETH)、冷熱錢包資安、FTX 倒閉事件與防範 P2P 幣圈詐騙！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 15!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your Carbon Audit & ESG Report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 16 Preview: Cryptocurrency, Blockchain & Web3 Risks</h4><p>Next week we explore Digital Finance! Unlocking Blockchain ledgers, Bitcoin (BTC) halving math, Ethereum (ETH), Cold Wallets, FTX collapse lessons, and crypto scam protection!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Carbon Fee & CBAM Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCarbonFee() {
  const emissionsTon = parseFloat(document.getElementById('emissionsInput').value) || 500000; // 500k tons CO2e
  const feeRate = parseFloat(document.getElementById('feeRateInput').value) || 300; // $300 NTD/ton
  const euExportPercent = parseFloat(document.getElementById('euExportPercentInput').value) || 20; // 20% exported to EU

  const totalFeeNTD = emissionsTon * feeRate;
  const cbamTariffNTD = emissionsTon * (euExportPercent / 100) * 1500; // EU CBAM ~ $1500 NTD/ton difference

  const resultDiv = document.getElementById('carbonFeeResult');
  resultDiv.innerHTML = `
    🌱 <b>企業年度碳費與歐盟 CBAM 衝擊試算結果</b>：<br>
    • <b>溫室氣體總排放量</b>：${emissionsTon.toLocaleString()} 公噸 CO2e | <b>碳費費率</b>：$${feeRate} 元/公噸<br>
    • <b>國內應繳納碳費總額</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">$${(totalFeeNTD / 10000).toFixed(0)} 萬元台幣</span><br>
    • <b>若未繳國內碳費，外銷歐盟被課徵 CBAM 碳關稅金額</b>：<span style="color:var(--accent-rose); font-weight:bold; font-size:1.2rem;">$${(cbamTariffNTD / 10000).toFixed(0)} 萬元台幣！</span><br>
    💡 <i>提前提出自主減量計畫申請 $100 元優惠費率，每年可省下近千萬元碳費支出！</i>
  `;
}

// HOUR 2 MODAL: ESG ETF & Green Premium Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateEsgEtf() {
  const monthlyAmount = parseFloat(document.getElementById('esgMonthlyInput').value) || 3000;
  const esgDividendYield = parseFloat(document.getElementById('esgYieldInput').value) || 6.5; // 6.5% yield

  const annualInvestment = monthlyAmount * 12;
  const estAnnualDividend = annualInvestment * (esgDividendYield / 100);

  const resultDiv = document.getElementById('esgEtfResult');
  resultDiv.innerHTML = `
    📈 <b>ESG 篩選 ETF (00878/00692) 試算結果</b> (月投資 $${monthlyAmount.toLocaleString()} 元)：<br>
    • <b>全年累積投入本金</b>：$${annualInvestment.toLocaleString()} 元台幣<br>
    • <b>預估年化股息收益率</b>：<span style="color:var(--accent-gold); font-weight:bold;">${esgDividendYield}%</span><br>
    • <b>預估每年領取綠色股息</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;">$${estAnnualDividend.toFixed(0).toLocaleString()} 元台幣！</span><br>
    💡 <i>定期定額配置 ESG ETF，兼顧穩定股息收益與支持綠色企業減碳轉型！</i>
  `;
}

// HOUR 3 GAME: ESG Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：ESG 三大柱涵蓋維度",
    question: "全球評估企業永續經營非財務績效的 ESG 三大柱中，「E」代表哪一個維度？",
    options: [
      { text: "Environmental (環境維度 - 減碳、RE100與水資源)", correct: true },
      { text: "Education (教育)", correct: false },
      { text: "Economy (經濟)", correct: false },
      { text: "Entertainment (娛樂)", correct: false }
    ],
    explain: "E 代表 Environmental (環境維度)，涵蓋溫室氣體減量、再生能源與水資源管理！"
  },
  {
    level: 2,
    title: "關卡 2：台灣碳費基準費率",
    question: "根據環境部最新公告，台灣排碳大戶的一般碳費基準費率設定為每公噸多少金額？",
    options: [
      { text: "10 元台幣", correct: false },
      { text: "300 元台幣 (優惠費率低至 50-100 元)", correct: true },
      { text: "10,000 元台幣", correct: false },
      { text: "完全免費", correct: false }
    ],
    explain: "一般碳費基準費率為每公噸 300 元台幣，若提出自主減量計畫可享受 50-100 元優惠費率！"
  },
  {
    level: 3,
    title: "關卡 3：歐盟 CBAM 機制目的",
    question: "歐盟實施的 CBAM (碳邊境調整機制) 主要對進口至歐盟的高碳排產品課徵什麼費用？",
    options: [
      { text: "進口關稅折扣", correct: false },
      { text: "CBAM 碳邊境關稅 (彌補碳價差距)", correct: true },
      { text: "運費補貼", correct: false },
      { text: "個人所得稅", correct: false }
    ],
    explain: "歐盟 CBAM 對高碳排進口商品課徵碳邊境關稅，促使全球出口製造業加速綠色轉型！"
  },
  {
    level: 4,
    title: "關卡 4：範疇三 (Scope 3) 碳盤查",
    question: "在企業溫室氣體碳盤查 (ISO 14064-1) 中，涵蓋供應鏈原料生產與員工差旅的碳排屬於哪一個範疇？",
    options: [
      { text: "範疇一 (Scope 1 直接排放)", correct: false },
      { text: "範疇三 (Scope 3 價值鏈上下游間接排放)", correct: true },
      { text: "範疇二 (Scope 2 外購電力)", correct: false },
      { text: "完全不需盤查", correct: false }
    ],
    explain: "範疇三涵蓋供應鏈上下游原料製造、員工差旅與產品廢棄處理之溫室氣體排放！"
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
    let badgeText = userScore === 400 ? "🏆 ESG 永續理財達人徽章 (ESG Master)" : "🥉 綠色初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十五週「綠色金融、ESG 與碳定價經濟學」核心觀念！</p>
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
function submitW15Homework(e) {
  e.preventDefault();
  alert("🎉 第十五週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
