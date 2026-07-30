/**
 * 115 學年度「管理探索二」第十三週：半導體產業、護國神山台積電與台灣科技供應鏈
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w13_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十三週課程導論：半導體產業、護國神山台積電與台灣科技供應鏈", "en": "Week 13 Intro: Semiconductor Industry & TSMC Supply Chain" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>晶圓代工霸主：解密台灣護國神山與矽島產業鏈</h2><p>「張忠謀名言：沒有台積電的晶圓代工模式，就沒有今天全球科技與 AI 的榮景！(Pure-play foundry unlocked tech innovation!)\"</p></div><p>歡迎來到第十三週！進入產業探索單元，我們首先聚焦於台灣經濟與全球科技核心——「半導體產業」。本單元將帶領大家剖析晶圓代工創始者台積電 (2330 TSMC) 的三大護城河、IC 設計與封裝測試分工、CoWoS 先進封裝、2nm 先進製程、資本支出 (CapEx) 與毛利率財報密碼，以及台灣矽島供應鏈全球地位。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：晶圓代工模式</h4><p>IC 設計 (聯發科) ➔ 晶圓代工 (台積電) ➔ 封裝測試 (日月光) 分工機制。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：TSMC 護城河與 CoWoS</h4><p>毛利率 > 53% 財報密碼、CoWoS 先進封裝與 0050 ETF 50% 權重配置。</p></div></div><div class=\"data-source-badge\">📌 資料來源：台灣證券交易所 (TWSE) / 台積電 (2330) 企業年報與 MOPS</div>",
      "en": "<div class=\"hero-box\"><h2>Foundry Dominance: TSMC & Taiwan's Silicon Island</h2><p>\"Morris Chang: Without TSMC's pure-play foundry model, modern tech and AI would not exist.\"</p></div><p>Welcome to Week 13! We explore Taiwan's economic backbone—the Semiconductor Industry. We break down TSMC's 3 moats, IC design vs OSAT split, CoWoS advanced packaging, 2nm nodes, CapEx & Gross Margin metrics, and 0050 ETF weighting.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Pure-Play Foundry</h4><p>IC Design (MediaTek) ➔ Pure-Play Foundry (TSMC) ➔ OSAT (ASE) Ecosystem.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: TSMC Moats & CoWoS</h4><p>53%+ Gross Margin secret, CoWoS advanced packaging & 0050 ETF 50% weighting.</p></div></div><div class=\"data-source-badge\">📌 Source: Taiwan Stock Exchange (TWSE) / TSMC (2330) Annual Report</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十三週 3 小時學習地圖與核心技能樹", "en": "Week 13 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>半導體產業鏈與台積電護城河</b> (Slide 01 - 10)<br>生活中的半導體、摩爾定律、IC設計/代工/封測三分工、張忠謀破壞式創新、台積電3大護城河與TWSE實證數據</td><td>🎯 <b>1小時活動</b>：台積電先進製程與毛利率估值試算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>CoWoS 先進封裝與地緣政治</b> (Slide 11 - 20)<br>CoWoS技術、美日德全球建廠、毛利率53%密碼、半導體景氣循環、3大財報指標 (CapEx/GM/利用率) 與巨頭競合</td><td>🎯 <b>2小時活動</b>：半導體產業鏈與 CapEx 估值精算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>0050 成分股與新鮮人產業觀</b> (Slide 21 - 30)<br>0050台積電權重50%、科技職涯探索、ASML EUV曝光機、商業間諜防禦、公開資訊觀測站查閱與4大金律</td><td>🎮 <b>3小時小遊戲</b>：半導體產業達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：台積電財務指標與矽島產業鏈分析報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 13 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Semiconductor Chain & TSMC Moats</b> (Slide 01 - 10)<br>Moore's Law, IC Design/Foundry/OSAT split, TSMC 3 Moats, TWSE metrics</td><td>🎯 <b>Hour 1 Activity</b>: TSMC Node & Gross Margin Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>CoWoS & Geopolitics</b> (Slide 11 - 20)<br>CoWoS packaging, Global Fabs (US/JP/DE), 53% GM secret, Semiconductor Cycle & CapEx</td><td>🎯 <b>Hour 2 Activity</b>: Semiconductor Chain CapEx Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>0050 Weighting & Career Vision</b> (Slide 21 - 30)<br>0050 50% TSMC share, ASML EUV machines, IP Protection, MOPS Portal & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: Semiconductor Master Challenge<br>📝 <b>Class Assignment</b>: TSMC Financial Audit & Silicon Island Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "摩爾定律", "en": "Moore's Law" },
    "title": { "zh": "晶片在哪裡？生活中的半導體與摩爾定律 (Moore's Law)", "en": "Chips Everywhere: Semiconductors & Moore's Law" },
    "content": {
      "zh": "<h3>📱 從智慧型手機到電動車，無處不在的心臟</h3><p><b>半導體 (Semiconductor)</b> 是導電性介於導體與絕緣體之間的材料（如矽 Silicon）。幾乎所有電子產品都依賴晶片運算：</p><div class=\"formula-box\">$$\\text{摩爾定律 (Moore's Law)}: \\text{積體電路上可容納的電晶體數目，約每 18 ~ 24 個月翻倍，效能提升 100%!}$$</div><p>這條由 Intel 創辦人 Gordon Moore 提出法則，驅動了過去 50 年全球科技資訊革命！</p><div class=\"data-source-badge\">📌 資料來源：TSMC 科技博物館半導體歷史</div>",
      "en": "<h3>📱 The Brain Behind Smartphones, AI Servers & EVs</h3><p><b>Semiconductors</b> are materials (like Silicon) with electrical conductivity between conductors and insulators:</p><div class=\"formula-box\">$$\\text{Moore's Law}: \\text{Transistor count on microchips doubles every 18-24 months, doubling performance!}$$</div><p>Proposed by Intel co-founder Gordon Moore, this law drove 50 years of tech revolution!</p><div class=\"data-source-badge\">📌 Source: TSMC Museum of Innovation</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "產業鏈三大分工", "en": "3-Stage Chain" },
    "title": { "zh": "半導體產業鏈三大分工：IC 設計、晶圓代工與封裝測試", "en": "3 Semiconductor Stages: Design, Foundry & OSAT" },
    "content": {
      "zh": "<h3>⚙️ 專業分工打造效率極致的垂直共生體系</h3><table class=\"data-table\"><thead><tr><th>產業階段</th><th>核心業務與代表企業</th><th>台灣代表性龍頭廠商</th></tr></thead><tbody><tr><td><b>1. 上游：IC 設計 (Design)</b></td><td>設計電路藍圖（無晶圓廠 Fabless）。如 NVIDIA、高通。</td><td><b>聯發科 (2454 MediaTek)</b>、聯詠。</td></tr><tr><td><b>2. 中游：晶圓代工 (Foundry)</b></td><td>將電路圖轉化為高純度矽晶圓實體。昂貴資本支出。</td><td><b>台積電 (2330 TSMC)</b>、聯電 (2303)。</td></tr><tr><td><b>3. 下游：封裝測試 (OSAT)</b></td><td>切割晶圓、切割封裝並測試電路功能品質。</td><td><b>日月光投控 (3711 ASE)</b>、京元電。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：工研院產科國際所 (ISTI) 半導體產業鏈地圖</div>",
      "en": "<h3>⚙️ Vertical Specialization Building Peak Global Efficiency</h3><table class=\"data-table\"><thead><tr><th>Stage</th><th>Core Business & Global Leaders</th><th>Taiwan Industry Champions</th></tr></thead><tbody><tr><td><b>1. Upstream: IC Design</b></td><td>Design circuit blueprints (Fabless). e.g. NVIDIA, Qualcomm.</td><td><b>MediaTek (2454)</b>, Novatek.</td></tr><tr><td><b>2. Midstream: Foundry</b></td><td>Fabricate circuits onto silicon wafers. High CapEx.</td><td><b>TSMC (2330)</b>, UMC (2303).</td></tr><tr><td><b>3. Downstream: OSAT</b></td><td>Cut, package, and test chip functionalities.</td><td><b>ASE Group (3711)</b>, KYEC.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: ITRI ISTI Taiwan Semiconductor Industry Map</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "純晶圓代工模式", "en": "Foundry Model" },
    "title": { "zh": "為什麼晶圓代工模式能改變世界？張忠謀與台積電的破壞式創新", "en": "How Pure-Play Foundry Changed the World: TSMC Innovation" },
    "content": {
      "zh": "<h3>💡 1987 年張忠謀創立台積電：只做代工，不設計晶片！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>傳統 IDM 整合模式 (Intel, Samsung)</h4><p>自己設計、自己製造、自己銷售。與 IC 設計客戶存在直接競爭衝突！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>台積電純晶圓代工 (Pure-play Foundry) 🌟</h4><p><b>「絕對不與客戶競爭！」</b>吸引全世界 IC 設計公司 (Apple, NVIDIA, AMD) 將製造全交給台積電！</p></div></div><div class=\"data-source-badge\">📌 資料來源：張忠謀自傳與台積電企業史</div>",
      "en": "<h3>💡 Morris Chang Founded TSMC in 1987: Pure Manufacturing</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>Traditional IDM Model (Intel, Samsung)</h4><p>Design, build, and sell internally. Direct competition conflicts with design clients!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>TSMC Pure-Play Foundry 🌟</h4><p><b>\"Never compete with clients!\"</b> Won 100% trust from Apple, NVIDIA, and AMD!</p></div></div><div class=\"data-source-badge\">📌 Source: Morris Chang Autobiography & TSMC Corporate History</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "TSMC 3大護城河", "en": "TSMC 3 Moats" },
    "title": { "zh": "台積電 (2330) 的三大護城河：技術領先、製造卓越與客戶信任", "en": "TSMC's 3 Moats: Tech Leadership, Manufacturing & Trust" },
    "content": {
      "zh": "<h3>🏰 為何對手砸重金也無法超越台積電？3 大不可替代性</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>⚡ 1. 技術領先 (Technology Leadership)</h4><p>全球首家量產 3nm/2nm 先進製程，良率 (Yield) 碾壓競爭對手。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🏭 2. 製造卓越 (Manufacturing Excellence)</h4><p>全天候 24 小時極致自動化生產，成本控制與產能規模龐大。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🤝 3. 客戶信任 (Customer Trust)</h4><p>嚴守商業機密與 IP，成為 Apple 與 NVIDIA 最放心的獨家製造夥伴。</p></div></div><div class=\"data-source-badge\">📌 資料來源：台積電 (2330) 投資人關係 (IR) 簡報</div>",
      "en": "<h3>🏰 Why Rivals Fail to Overtake TSMC: 3 Irreplaceable Moats</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>⚡ 1. Technology Leadership</h4><p>First to mass-produce 3nm/2nm nodes with superior yields over rivals.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🏭 2. Manufacturing Excellence</h4><p>24/7 automated fab operations, driving unmatched cost efficiency.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🤝 3. Customer Trust</h4><p>Strict IP protection making TSMC the sole trusted partner for Apple & NVIDIA.</p></div></div><div class=\"data-source-badge\">📌 Source: TSMC Investor Relations Presentation</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "先進製程微縮", "en": "Node Shrinking" },
    "title": { "zh": "從晶圓 (Wafer) 到晶片 (Chip)：奈米 (nm) 製程與昂貴 Fab", "en": "Wafer to Chip: Nanometer Nodes & Billion-Dollar Fabs" },
    "content": {
      "zh": "<h3>🔬 髮絲直徑萬分之一的極致微觀工程</h3><ul><li><b>晶圓 (Wafer)</b>：由高純度單晶矽棒切成薄片（常用 12 吋/300mm 晶圓）。</li><li><b>奈米製程 (3nm / 2nm)</b>：指閘極長度微縮度。晶體越小，相同晶片面積容納更多電晶體，運算更快且省電。</li><li><b>晶圓廠 (Fab) 造價昂貴</b>：一座最新 2nm 晶圓廠造價高達 <b>200 億美元 (約 6,500 億台幣)</b>！是一般企業無法企及的巨額資本壁壘。</li></ul><div class=\"data-source-badge\">📌 資料來源：TSMC 技術論壇 (Technology Symposium)</div>",
      "en": "<h3>🔬 Extreme Micro-Engineering at 1/10,000th of Hair Width</h3><ul><li><b>Wafer</b>: Thin slices cut from ultra-pure monocrystalline silicon ingots (12-inch/300mm).</li><li><b>Nanometer Nodes (3nm/2nm)</b>: Smaller gate sizes allow billions more transistors, boosting speed & power efficiency.</li><li><b>Astronomical Fab Cost</b>: A modern 2nm Fab costs <b>$20 Billion USD (~$650B NTD)</b>!</li></ul><div class=\"data-source-badge\">📌 Source: TSMC Technology Symposium Announcements</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "TSMC 財務數據", "en": "TSMC Financial Data" },
    "title": { "zh": "實證數據：台灣證券交易所 (TWSE) 台積電市值、毛利率與研發", "en": "Empirical Data: TSMC Market Cap, Gross Margin & R&D" },
    "content": {
      "zh": "<h3>🇹🇼 全球半導體龍頭台積電 (2330) 官方財報實證數據</h3><p>根據台灣證券交易所 (TWSE) 與台積電 2026 最新財報：</p><ul><li><b>總市值 (Market Cap)</b>：突破 <b>25 兆元台幣 (約 8,000 億美元)</b>，名列全球前 10 大企業！</li><li><b>毛利率 (Gross Margin)</b>：長期穩定保持在 <b>53% 以上</b>（高科技製造業的奇蹟！）。</li><li><b>研發費用率 (R&D)</b>：每年砸下超過 <b>500 億元台幣</b> 於研發，占營收近 8%。</li></ul><div class=\"data-source-badge\">📌 資料來源：台灣證券交易所 (TWSE) 與 MOPS 2026 最新數據</div>",
      "en": "<h3>🇹🇼 Global Semiconductor Leader TSMC Official Stats</h3><p>According to TWSE & MOPS 2026 Data:</p><ul><li><b>Market Capitalization</b>: Exceeds <b>$25 Trillion NTD (~$800B USD)</b>, ranking Top 10 globally!</li><li><b>Gross Margin</b>: Consistently maintains <b>53%+</b> (A miracle in high-tech manufacturing!).</li><li><b>R&D Expenses</b>: Invests over <b>$50 Billion NTD annually</b> (~8% of revenue).</li></ul><div class=\"data-source-badge\">📌 Source: TWSE & MOPS Official Corporate Reports</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "台灣矽島產業鏈", "en": "Silicon Island" },
    "title": { "zh": "台灣半導體矽島產業鏈：聯發科、日月光與設備材料鏈", "en": "Taiwan's Silicon Island Chain: MediaTek, ASE & Equipment" },
    "content": {
      "zh": "<h3>🏝️ 不只是台積電！全台灣建構了最完整的半導體生態系</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>IC 設計霸主：聯發科 (2454)</h4><p>全球智慧型手機晶片市占率第一，擴展至 AI 天璣晶片與車用電子。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>封測全球第一：日月光 (3711)</h4><p>全球最大的半導體封裝測試服務商，包辦先進 SiP 與 CoWoS 後段封測。</p></div></div><div class=\"data-source-badge\">📌 資料來源：經濟部產業發展署半導體產業生態系報告</div>",
      "en": "<h3>🏝️ Beyond TSMC: Taiwan's Complete Semiconductor Ecosystem</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>IC Design Leader: MediaTek (2454)</h4><p>Global #1 in smartphone chip market share; expanding into AI Dimensity chips.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>OSAT World #1: ASE Group (3711)</h4><p>World's largest semiconductor packaging and testing provider.</p></div></div><div class=\"data-source-badge\">📌 Source: MOEA Industrial Development Administration Report</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>三分工體系</b>：IC 設計 (聯發科) ➔ 晶圓代工 (台積電) ➔ 封裝測試 (日月光)。</li><li><b>台積電 3 護城河</b>：技術領先 (3nm/2nm)、製造卓越、客戶絕對信任。</li><li><b>財務奇蹟</b>：市值破 25 兆台幣，毛利率高達 53% 以上。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 台積電估值試算」</b> 按鈕，輸入先進製程營收占比與毛利率，精算台積電估值！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>3-Stage Chain</b>: IC Design (MediaTek) ➔ Foundry (TSMC) ➔ OSAT (ASE).</li><li><b>TSMC 3 Moats</b>: Tech Leadership (3nm/2nm), Manufacturing Excellence, Client Trust.</li><li><b>Financial Miracle</b>: Market Cap > $25T NTD with 53%+ Gross Margins.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate TSMC valuations!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "CoWoS先進封裝", "en": "CoWoS Packaging" },
    "title": { "zh": "什麼是 CoWoS 先進封裝？超越摩爾定律 (More than Moore)", "en": "What is CoWoS Advanced Packaging? More than Moore" },
    "content": {
      "zh": "<h3>📦 AI 晶片的算力催化劑！台積電獨霸 AI 晶片封裝技術</h3><p><b>CoWoS (Chip-on-Wafer-on-Substrate)</b> 是台積電發展的 2.5D/3D 異質整合封裝技術：</p><ul><li><b>技術原理解析</b>：將 GPU (如 NVIDIA H100/B200) 與高頻寬記憶體 (HBM) 垂直/水平緊密拼接在同晶圓上。</li><li><b>解決瓶頸</b>：大幅縮短電路傳輸距離、降低功耗並提升資料傳輸頻寬！**沒有 CoWoS 封裝產能，NVIDIA AI 晶片就無法出貨！**</li></ul><div class=\"data-source-badge\">📌 資料來源：TSMC CoWoS 技術白皮書</div>",
      "en": "<h3>📦 The Catalyst for AI Compute! TSMC's Monopoly in AI Packaging</h3><p><b>CoWoS</b> is TSMC's 2.5D/3D heterogeneous packaging technology:</p><ul><li><b>Technical Mechanism</b>: Connects GPUs (NVIDIA B200) closely with High Bandwidth Memory (HBM).</li><li><b>Solving Bottlenecks</b>: Drastically cuts signal latency and boosts bandwidth! Without CoWoS, AI chips can't ship!</li></ul><div class=\"data-source-badge\">📌 Source: TSMC CoWoS Technology White Paper</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "地緣政治與建廠", "en": "Geopolitics & Fabs" },
    "title": { "zh": "地緣政治與半導體供應鏈：美國 CHIPS Act、日本熊本與德國廠", "en": "Geopolitics & Global Fabs: US CHIPS Act, JP Kumamoto & DE" },
    "content": {
      "zh": "<h3>🌐 「矽盾 (Silicon Shield)」與台積電全球晶圓廠布局</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 美國亞利桑那廠 (Fab 21)</h4><p>因應美國《晶片法案》(CHIPS Act) 補貼，設置 4nm/3nm 先進製程。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 日本熊本廠 (JASM)</h4><p>攜手 Sony 與 Toyota 滿足日本車用與影像感測晶片強勁需求。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. 德國德勒斯登廠 (ESMC)</h4><p>深入歐洲車用半導體樞紐，提供車規級特殊製程。</p></div></div><div class=\"data-source-badge\">📌 資料來源：台積電全球營運拓展說明</div>",
      "en": "<h3>🌐 The \"Silicon Shield\" & TSMC's Global Fab Footprint</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. US Arizona Fab (Fab 21)</h4><p>Supported by the US CHIPS Act, deploying 4nm/3nm advanced nodes.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Japan Kumamoto Fab (JASM)</h4><p>Partnering with Sony & Toyota for automotive and image sensors.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. Germany Dresden Fab (ESMC)</h4><p>Entering Europe's automotive hub for specialized auto-grade chips.</p></div></div><div class=\"data-source-badge\">📌 Source: TSMC Global Operations Expansion Reports</div>"
    }
  },
  {
    "id": 13,
    "img": "images/w13_tsmc_share.jpg",
    "hour": 2,
    "tag": { "zh": "定價權與毛利率", "en": "Pricing Power & GM" },
    "title": { "zh": "晶圓代工定價權 (Pricing Power) 與毛利率 53% 財報密碼", "en": "Foundry Pricing Power & 53% Gross Margin Code" },
    "content": {
      "zh": "<h3>💰 為何獨家技術能帶來強大的商品「定價權」？</h3><p>在先進製程領域（3nm），台積電擁有超過 <b>90% 的全球獨家市占率</b>！這帶來了極強的<b>訂價權 (Pricing Power)</b>：</p><div class=\"formula-box\">$$\\text{毛利率 (Gross Margin)} = \\frac{\\text{營業收入} - \\text{營業成本}}{\\text{營業收入}} \\times 100\\% \\ge 53\\%$$</div><p>即使每片先進晶圓售價漲至 20,000 美元，Apple 與 NVIDIA 依然爭相預訂產能，確保了台積電穩固的超高獲利能力！</p><div class=\"data-source-badge\">📌 資料來源：台積電 (2330) 法人說明會 (Earnings Call)</div>",
      "en": "<h3>💰 Why Exclusive Tech Delivers Massive Pricing Power?</h3><p>TSMC holds over <b>90% global market share in advanced 3nm nodes</b>, creating unmatched <b>Pricing Power</b>:</p><div class=\"formula-box\">$$\\text{Gross Margin} = \\frac{\\text{Revenue} - \\text{COGS}}{\\text{Revenue}} \\times 100\\% \\ge 53\\%$$</div><p>Even at $20,000 USD per wafer, Apple & NVIDIA compete for capacity, securing high profitability!</p><div class=\"data-source-badge\">📌 Source: TSMC Earnings Call Transcripts</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "半導體景氣循環", "en": "Semiconductor Cycle" },
    "title": { "zh": "半導體景氣循環 (Semiconductor Cycle)：庫存調整與終端需求", "en": "Understanding the Semiconductor Cycle & End Demand" },
    "content": {
      "zh": "<h3>📉 告別暴起暴落！掌握晶片產業 3-4 年循環律動</h3><table class=\"data-table\"><thead><tr><th>循環階段</th><th>產業特徵與市場現象</th><th>投資人觀測指標</th></tr></thead><tbody><tr><td><b>1. 繁榮擴張期 (Boom)</b></td><td>終端需求暴增、客戶搶產能、晶圓代工漲價。</td><td>產能利用率 > 100%、毛利率上升。</td></tr><tr><td><b>2. 庫存調整期 (Bust)</b></td><td>消費電子疲軟、客戶砍單、產業去庫存。</td><td><b>天數 (DOI) 攀升、股價基期修正。</b></td></tr><tr><td><b>3. 復甦上升期 (Recovery)</b></td><td>新應用（如 AI/電動車）帶動需求重啟。</td><td>客戶庫存去化完畢、資本支出重啟。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：WSTS 世界半導體貿易統計組織報告</div>",
      "en": "<h3>📉 Navigating the 3-4 Year Semiconductor Boom & Bust Cycles</h3><table class=\"data-table\"><thead><tr><th>Cycle Stage</th><th>Industry Characteristics</th><th>Key Metrics to Monitor</th></tr></thead><tbody><tr><td><b>1. Boom Phase</b></td><td>End demand surges, clients hoard capacity, prices rise.</td><td>Capacity Utilization > 100%, GM expands.</td></tr><tr><td><b>2. Bust Phase</b></td><td>Consumer tech slows, orders cut, inventory cleared.</td><td><b>Days of Inventory (DOI) rise; stock corrects.</b></td></tr><tr><td><b>3. Recovery Phase</b></td><td>New drivers (AI/EV) restart demand cycle.</td><td>Inventory normalization, CapEx resumes.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: WSTS Semiconductor Market Reports</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "出口數據與經濟", "en": "Export Stats" },
    "title": { "zh": "台灣電子零組件出口占比與經濟部/財政部海關數據", "en": "Taiwan Electronic Components Export & Customs Data" },
    "content": {
      "zh": "<h3>📊 一個產業撐起台灣出口半壁江山！</h3><p>根據經濟部與財政部海關最新統計數據：</p><ul><li><b>電子零組件出口占比</b>：占全台總出口金額高達 <b>40% ~ 45%！</b> 其中積體電路 (IC) 為最核心大宗。</li><li><b>貿易順差主力</b>：半導體產業為台灣每年帶來數千億美元的巨額貿易順差，維繫了新台幣匯率與外匯存底穩定。</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部關務署進出口貿易統計報告</div>",
      "en": "<h3>📊 One Single Industry Powers Nearly Half of Taiwan's Exports!</h3><p>According to MOF Customs statistics:</p><ul><li><b>Electronic Component Export Share</b>: Accounts for <b>40%-45% of Taiwan's total exports!</b> ICs dominate this category.</li><li><b>Trade Surplus Engine</b>: Generates hundreds of billions in trade surplus, bolstering TWD currency stability.</li></ul><div class=\"data-source-badge\">📌 Source: MOF Customs Administration Trade Statistics</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "3大財報指標", "en": "3 Financial Metrics" },
    "title": { "zh": "大學生看懂半導體財報 3 大指標：CapEx、GM 與利用率", "en": "3 Key Financial Metrics: CapEx, GM & Utilization" },
    "content": {
      "zh": "<h3>🔍 3 分鐘學會評估晶圓代工廠企業競爭力</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 資本支出 (CapEx)</h4><p>每年購買昂貴曝光機與蓋廠的金額。<b>CapEx 增加代表公司對未來先進製程需求極具信心！</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 毛利率 (Gross Margin)</h4><p>反應技術獨佔性與成本控管能力。台積電長期標竿門檻為 53%。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. 產能利用率 (Utilization)</h4><p>晶圓廠設備滿載運作程度。> 95% 代表訂單塞爆供不應求。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 科技股財報分析標準</div>",
      "en": "<h3>🔍 3 Minutes to Analyze Foundry Competitiveness</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Capital Expenditure (CapEx)</h4><p>Annual budget for buying EUV tools and Fabs. Higher CapEx signals strong future demand!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Gross Margin (GM)</h4><p>Reflects tech monopoly & cost control. TSMC's gold benchmark is 53%+.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. Capacity Utilization</h4><p>How fully equipment operates. > 95% indicates booming demand!</p></div></div><div class=\"data-source-badge\">📌 Source: CFP Tech Stock Analysis Standards</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "科技股投資風險", "en": "Tech Stock Risks" },
    "title": { "zh": "科技股投資風險：景氣循環谷底、資本支出過度與斷鏈風險", "en": "Tech Stock Investment Risks: Cycles, Over-CapEx & Risks" },
    "content": {
      "zh": "<h3>⚠️ 投資半導體股不能只看光鮮亮麗的優點！</h3><ul><li><b>景氣循環谷底風險</b>：終端消費電子（手機/PC）需求下滑時，晶圓代工廠產能利用率下降，導致毛利率驟降。</li><li><b>資本支出過度沉沒</b>：若建廠投資過度，未來巨大的固定折舊費用會侵蝕企業獲利。</li><li><b>地緣政治與斷鏈風險</b>：戰爭、地震或貿易制裁可能導致關鍵原材料或設備中斷供應。</li></ul><div class=\"data-source-badge\">📌 資料來源：公開資訊觀測站 (MOPS) 台積電風險因素揭露</div>",
      "en": "<h3>⚠️ Don't Ignore the Downside Risks in Semiconductor Investing!</h3><ul><li><b>Cyclical Downturn Risk</b>: Slower smartphone/PC sales reduce fab utilization and compress margins.</li><li><b>Over-CapEx Depreciation Trap</b>: Excessive expansion creates massive fixed depreciation costs.</li><li><b>Geopolitical & Supply Risks</b>: Conflicts, earthquakes, or sanctions may disrupt raw material supply.</li></ul><div class=\"data-source-badge\">📌 Source: MOPS TSMC Risk Factors Disclosure</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "全球巨頭競合", "en": "Global Tech Giants" },
    "title": { "zh": "全球半導體巨頭競合：TSMC vs. NVIDIA vs. Intel vs. ASML", "en": "Global Tech Giants Ecosystem: TSMC, NVIDIA, Intel & ASML" },
    "content": {
      "zh": "<h3>🌐 誰在掌控世界科技產業的命脈？巨頭生態圈</h3><table class=\"data-table\"><thead><tr><th>企業名稱</th><th>產業角色的核心地位</th><th>與台積電的競合關係</th></tr></thead><tbody><tr><td><b>NVIDIA (輝達)</b></td><td>全球 AI 晶片霸主 (GPU 設計)。</td><td><b>台積電最大客戶之一！</b> 100% 依賴台積電 CoWoS 產能。</td></tr><tr><td><b>ASML (艾司摩爾)</b></td><td>全球唯一 EUV 光刻機設備商。</td><td><b>台積電關鍵設備軍火商！</b> 雙方技術緊密合作。</td></tr><tr><td><b>Intel / Samsung</b></td><td>IDM 晶圓製造與設計競爭對手。</td><td><b>既是代工對手，同時亦委託台積電代工先進晶片！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：TrendForce 集邦科技半導體研究報告</div>",
      "en": "<h3>🌐 Who Controls the Global Technology Ecosystem?</h3><table class=\"data-table\"><thead><tr><th>Company</th><th>Core Role in Global Tech</th><th>Relationship with TSMC</th></tr></thead><tbody><tr><td><b>NVIDIA</b></td><td>Global AI GPU Design Titan.</td><td><b>TSMC's Key Client!</b> 100% reliant on CoWoS packaging.</td></tr><tr><td><b>ASML</b></td><td>Sole supplier of EUV lithography tools.</td><td><b>TSMC's Essential Vendor!</b> Deep R&D collaboration.</td></tr><tr><td><b>Intel / Samsung</b></td><td>IDM Manufacturing & Design Rivals.</td><td><b>Foundry rivals, yet outsource advanced nodes to TSMC!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: TrendForce Semiconductor Market Research</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "矽谷與S廊帶", "en": "Silicon Corridor" },
    "title": { "zh": "台灣科技供應鏈群聚效應：竹科、中科、南科與高雄 S 廊帶", "en": "Taiwan's Tech Clusters: Hsinchu, Central, Southern & Kaohsiung" },
    "content": {
      "zh": "<h3>🚄 世界上效率最高的「一小時半導體供應鏈」</h3><p>從新竹科學園區 (竹科)、中部科學園區 (中科)、南部科學園區 (南科) 到高雄半導體 S 廊帶：</p><ul><li><b>高鐵 1 小時支援網路</b>：工程師、設備商與研發團隊搭高鐵可以在 1 小時內趕赴全台任何一座 Fab 廠調試解決問題。</li><li><b>極致聚落效率</b>：全世界沒有任何國家能複製台灣這種超高效率的半導體地理聚落！</li></ul><div class=\"data-source-badge\">📌 資料來源：國科會三大科學園區統計年報</div>",
      "en": "<h3>🚄 World's Most Efficient 1-Hour Semiconductor Cluster</h3><p>From Hsinchu (HSP), Central (CTSP), Southern (STSP) to Kaohsiung S-Corridor:</p><ul><li><b>1-Hour High-Speed Rail Support</b>: Engineers travel between any Taiwanese Fab in under 1 hour.</li><li><b>Unmatched Cluster Efficiency</b>: No nation can easily replicate Taiwan's geographic cluster advantage!</li></ul><div class=\"data-source-badge\">📌 Source: NSTC Science Parks Annual Report</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>CoWoS 封裝</b>：異質整合 GPU 與 HBM 記憶體，AI 晶片出貨關鍵。</li><li><b>地緣政治與財報</b>：美日德布局全球；毛利率 53% 展現定價權。</li><li><b>3 大財報指標</b>：資本支出 (CapEx)、毛利率 (GM)、產能利用率。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: CapEx估值器」</b> 按鈕，輸入台積電資本支出與利用率，精算公司未來產能擴充！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>CoWoS Packaging</b>: 2.5D/3D GPU & HBM integration; core bottleneck for AI chips.</li><li><b>Geopolitics & GM</b>: Global Fabs (US/JP/DE); 53%+ Gross Margin proves pricing power.</li><li><b>3 Metrics</b>: Capital Expenditure (CapEx), Gross Margin (GM), Capacity Utilization.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate TSMC CapEx!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "0050權重占比", "en": "0050 Weighting" },
    "title": { "zh": "從投資者角度看台積電 (2330) 與 0050 ETF 權重成分", "en": "Investor View: TSMC (2330) & 0050 ETF 50% Weighting" },
    "content": {
      "zh": "<h3>📈 買 0050 ETF 等同於半張股票都在投資台積電！</h3><p>在台灣市值型 ETF (元大台灣 50 / 0050) 中：</p><div class=\"formula-box\">$$\\text{台積電 (2330) 占 0050 比重} \\ge 50\\%!$$</div><p><b>投資決策觀點</b>：當你買入 0050 ETF 時，有一半的資金直接參與了台積電的先進製程成長；另一半資金則分散至聯發科、鴻海、日月光等台灣半導體與科技供應鏈核心！</p><div class=\"data-source-badge\">📌 資料來源：元大投信 0050 成分股最新比重公告</div>",
      "en": "<h3>📈 Buying 0050 ETF Means Half Your Money is in TSMC!</h3><p>In Taiwan's top market-cap ETF (Yuanta Taiwan 50 / 0050):</p><div class=\"formula-box\">$$\\text{TSMC Weight in 0050} \\ge 50\\%!$$</div><p><b>Investment Takeaway</b>: Buying 0050 automatically puts 50% of capital into TSMC and 50% into top supply chain peers!</p><div class=\"data-source-badge\">📌 Source: Yuanta Funds 0050 Portfolio Holdings Announcement</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "科技職涯探索", "en": "Tech Career" },
    "title": { "zh": "大一新鮮人科技產業職涯探索：工程師 vs 供應鏈 vs 理財", "en": "Freshman Tech Careers: Engineering, Supply Chain & Finance" },
    "content": {
      "zh": "<h3>🎓 不是理工科也能參與半導體紅利！跨領域職涯機會</h3><ul><li><b>研發與製程工程師</b>：電機、物理、化學、材料背景，於 Fab 廠挑戰先進製程極限。</li><li><b>供應鏈與營運管理</b>：商管、企管、資管背景，負責全球資材採購、物流配送與客戶專案。</li><li><b>科技財務與法務</b>：財金、法律背景，處理百億美元資本支出投資、專利 IP 訴訟與稅務布局。</li></ul><div class=\"data-source-badge\">📌 資料來源：104 人力銀行科技產業人才白皮書</div>",
      "en": "<h3>🎓 Non-Tech Majors Participate in Semiconductor Dividends Too!</h3><ul><li><b>R&D & Process Engineers</b>: EE, Physics, Chemistry, Materials majors optimizing Fabs.</li><li><b>Supply Chain & Operations</b>: Business, Management, IM majors managing global procurement & logistics.</li><li><b>Tech Finance & Legal</b>: Finance & Law majors handling multi-billion dollar CapEx & IP patent law.</li></ul><div class=\"data-source-badge\">📌 Source: 104 Job Bank Tech Industry Talent Report</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "ASML EUV 曝光機", "en": "ASML EUV Machine" },
    "title": { "zh": "關鍵材料與設備供應商：ASML 極紫外光 (EUV) 曝光機", "en": "Critical Equipment: ASML Extreme Ultraviolet (EUV) Tools" },
    "content": {
      "zh": "<h3>🔬 一台售價 1.8 億美元的世界上最精密機器！</h3><p><b>ASML 荷蘭艾司摩爾</b> 是全球唯一能製造極紫外光 (EUV) 曝光機的廠商：</p><ul><li><b>EUV 波長極短 (13.5nm)</b>：使用高能雷射擊打二氧化錫微滴產生極紫外光，在晶圓上記錄幾奈米大小的電路圖。</li><li><b>台積電擁全台最多 EUV 機器</b>：台積電擁有全球最大規模的 EUV 曝光機陣容，確保先進製程產能傲視全球！</li></ul><div class=\"data-source-badge\">📌 資料來源：ASML 艾司摩爾官方技術年報</div>",
      "en": "<h3>🔬 The $180 Million USD Machine: Most Precise Tool on Earth</h3><p><b>ASML (Netherlands)</b> is the sole manufacturer of Extreme Ultraviolet (EUV) scanners:</p><ul><li><b>13.5nm EUV Wavelength</b>: Uses lasers vaporizing tin droplets to etch nanometer circuit patterns.</li><li><b>TSMC Operates Largest EUV Fleet</b>: TSMC owns the world's largest EUV fleet, guaranteeing advanced capacity!</li></ul><div class=\"data-source-badge\">📌 Source: ASML Corporate Technology Report</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "商業間諜防禦", "en": "IP & Anti-Espionage" },
    "title": { "zh": "產業資安與智慧財產權 (IP)：防範商業間諜與技術外洩", "en": "Industrial Security & IP: Protecting Tech Secrets" },
    "content": {
      "zh": "<h3>🛡️ 護國神山的機密保護！營業秘密法與國家核心關鍵技術</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ 商業間諜威脅</h4><p>外國競爭對手高薪挖角、竊取 3nm/2nm 關鍵參數。中華民國《國家安全法》修法將核心關鍵技術竊密列為重罪！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 企業資安護甲 (PIP)</h4><p>台積電實施最高規格專利與營業秘密保護系統 (PIP)，嚴禁攜帶未授權儲蓄裝置進入 Fab 廠區。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《國家安全法》與《營業秘密法》條文</div>",
      "en": "<h3>🛡️ Safeguarding Silicon Secrets: National Key Technology Laws</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ Corporate Espionage Threats</h4><p>Rivals poaching key engineers or stealing 2nm parameters. ROC National Security Act imposes severe penalties!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Corporate Security Armor</h4><p>TSMC enforces Proprietary Information Protection (PIP), banning unauthorized devices inside Fabs.</p></div></div><div class=\"data-source-badge\">📌 Source: ROC National Security Act & Trade Secrets Act</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "MOPS 營收查閱", "en": "MOPS Portal Guide" },
    "title": { "zh": "實證數據調取：公開資訊觀測站 (mops.twse.com.tw) 查閱營收", "en": "Retrieving Real Data: MOPS Portal TSMC Monthly Revenue" },
    "content": {
      "zh": "<h3>🌐 每月 10 日手把手查閱台積電最新營收數字</h3><ul><li><b>查詢每月營收通報</b>：登入 `mops.twse.com.tw` 輸入股票代號 `2330`，查閱最新單月合併營收與年增率 (YoY)。</li><li><b>查詢法說會簡報與季報</b>：查閱每季公布之先進製程 (3nm/5nm) 營收占比與毛利率數據。</li><li><b>培養資料庫實證能力</b>：拒絕聽信市場謠言，直接從官方公告數據驗證企業成長性！</li></ul><div class=\"data-source-badge\">📌 資料來源：公開資訊觀測站 (mops.twse.com.tw)</div>",
      "en": "<h3>🌐 Querying TSMC Monthly Revenue Data on MOPS</h3><ul><li><b>Monthly Revenue Release</b>: Visit `mops.twse.com.tw`, type `2330`, and verify monthly YoY revenue growth.</li><li><b>Quarterly Reports</b>: Track advanced 3nm/5nm revenue shares and Gross Margins on quarterly filings.</li><li><b>Data-Driven Investing</b>: Base decisions on official filings, ignoring market rumors!</li></ul><div class=\"data-source-badge\">📌 Source: Market Observation Post System (MOPS)</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "半導體投資4金律", "en": "4 Tech Rules" },
    "title": { "zh": "大一新鮮人半導體與科技投資 4 大金律", "en": "4 Golden Rules for Semiconductor & Tech Investing" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性科技產業投資心態</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🏭 1. 認清護城河與定價權</h4><p>投資半導體優先選擇具備技術獨占與毛利率 > 50% 之產業龍頭 (台積電)。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📊 2. 善用 0050 ETF 分散風險</h4><p>透過市值型 ETF 一次打包台積電與整體科技供應鏈，避免單一公司個股波動。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📉 3. 理解景氣循環不追高</h4><p>半導體具備 3-4 年庫存循環，在去庫存谷底理性分批布局。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🌐 4. 密切關注地緣政治</h4><p>追蹤美中科技戰與海外建廠進度，理性評估全球供應鏈移轉成本。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與半導體產業分析保護原則</div>",
      "en": "<h3>🛡️ Lifetime Mindset for Tech Industry Investing</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🏭 1. Identify Tech Moats</h4><p>Prioritize industry leaders with monopoly tech and 50%+ Gross Margins (TSMC).</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📊 2. Diversify via 0050 ETF</h4><p>Use market-cap ETFs to gain broad exposure to TSMC and the tech supply chain.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📉 3. Master Semiconductor Cycles</h4><p>Accumulate shares calmly during 3-4 year inventory trough cycles.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🌐 4. Track Geopolitical Shifts</h4><p>Monitor US-China tech tensions and overseas Fab expansion costs.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & Semiconductor Industry Analysis Standards</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "半導體投資SOP", "en": "TSMC DCA SOP" },
    "title": { "zh": "投資試算實例：定期定額參與台灣半導體成長股利複利 SOP", "en": "Practical Case: DCA Strategy for Semiconductor Dividends" },
    "content": {
      "zh": "<h3>💡 定期定額零股買入台積電 (2330) 或 0050 ETF SOP</h3><ul><li><b>零股交易機制</b>：每月只需 <b>1,000 ~ 3,000 元</b> 即可在各大券商 App 設定自動定期定額買入台積電零股。</li><li><b>股利再投資 (Dividend Reinvestment)</b>：台積電採按季配息（每季配發約 4 元以上）。將發放之季度股利自動再買入零股，發揮股利滾存複利威力！</li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案科技投資組</div>",
      "en": "<h3>💡 Fractional Shares DCA Strategy for TSMC (2330) & 0050</h3><ul><li><b>Fractional Share DCA</b>: Invest <b>$1,000-$3,000 NTD monthly</b> via brokerage apps automatically.</li><li><b>Dividend Reinvestment</b>: TSMC pays quarterly dividends ($4+ NTD/share). Reinvest dividends to accelerate compounding!</li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II Tech Investment Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "矽島展望", "en": "Silicon Outlook" },
    "title": { "zh": "矽島台灣與國際財經宏觀展望", "en": "Silicon Island Taiwan & Global Macro Outlook" },
    "content": {
      "zh": "<h3>🌏 台灣在 AI 算力時代扮演全球不可或缺的核心樞紐！</h3><p>隨著 Generative AI 與次世代超級運算爆發，世界對晶片算力的需求呈現爆發性成長。大一新鮮人立足台灣，具備：</p><ol><li><b>在地產業優勢</b>：第一線觀察全球頂尖半導體巨頭營運與技術動向。</li><li><b>全球財經視野</b>：理解晶片如何串連全球地緣政治、外匯匯率與資本市場！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🌏 Taiwan as the Indispensable Hub of the AI Compute Era</h3><p>Generative AI and supercomputing drive explosive demand for chips. Taiwanese freshmen gain:</p><ol><li><b>Local Industry Advantage</b>: First-hand insight into global semiconductor operations.</li><li><b>Global Macro Vision</b>: Understanding how chips connect geopolitics, FX rates, and capital markets!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十三週全景知識體系圖與觀念整合", "en": "Week 13 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十三週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>半導體基礎 (Hour 1)</b>：摩爾定律 ➔ 3大階段分工 (IC設計/代工/封測) ➔ 純代工模式 ➔ 台積電3護城河 ➔ 先進製程與Fab造價 ➔ 2330市值/毛利53%/研發數據 ➔ 矽島生態系 (聯發科/日月光)。</p><p><b>CoWoS 與地緣政治 (Hour 2)</b>：CoWoS先進封裝 ➔ 全球建廠布局 (美亞利桑那/日熊本/德德勒斯登) ➔ 53%毛利率定價權 ➔ 3-4年景氣循環 ➔ 電子出口40% ➔ 3財報指標 (CapEx/GM/利用率) ➔ 巨頭競合 ➔ S廊帶聚落。</p><p><b>0050 與職涯實戰 (Hour 3)</b>：0050台積電權重50% ➔ 跨領域科技職涯 ➔ ASML EUV曝光機 ➔ 商業間諜防禦 ➔ MOPS Portal營收查閱 ➔ 定期定額SOP ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 13 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Semiconductor Basics (Hour 1)</b>: Moore's Law ➔ 3-Stage Split ➔ Pure-Play Model ➔ TSMC 3 Moats ➔ Fab Costs ➔ 2330 Metrics ➔ Silicon Ecosystem (MediaTek/ASE).</p><p><b>CoWoS & Geopolitics (Hour 2)</b>: CoWoS Packaging ➔ Global Fabs (US/JP/DE) ➔ Pricing Power ➔ 3-4 Yr Cycles ➔ Export Share 40% ➔ 3 Financial Metrics ➔ S-Corridor.</p><p><b>0050 & Careers (Hour 3)</b>: 0050 50% TSMC Weight ➔ Tech Careers ➔ ASML EUV ➔ IP Protection ➔ MOPS Portal ➔ DCA SOP ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十四週預告 (生成式 AI 革命、人工智慧產業鏈與未來職場)", "en": "Reflections & Week 14 Preview (Generative AI & Future Workplace)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十三週「半導體產業、護國神山台積電與台灣科技供應鏈」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「台積電財務指標與矽島產業鏈分析報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十四週課程預告：生成式 AI 革命、人工智慧產業鏈與未來職場轉型</h4><p>下週我們將進入科技最前沿！探索<b>生成式 AI (ChatGPT/Claude) 算力革命、NVIDIA AI 晶片、廣達/緯創/鴻海 AI 伺服器供應鏈，以及 AI 對大一新鮮人未來職場之職務替代與賦能！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 13!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your TSMC & Silicon Chain Report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 14 Preview: Generative AI Revolution & Future Workplace</h4><p>Next week we explore the tech frontier! Generative AI compute revolution, NVIDIA GPU servers (Quanta/Wistron/Foxconn), and AI workplace replacement & empowerment!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: TSMC Valuation Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateTSMCValuation() {
  const revBillion = parseFloat(document.getElementById('revenueInput').value) || 2800; // 2.8 Trillion NTD
  const gmRatio = parseFloat(document.getElementById('gmRatioInput').value) || 54; // 54%
  const peRatio = parseFloat(document.getElementById('peRatioInput').value) || 20; // PE 20x

  const grossProfit = revBillion * (gmRatio / 100);
  const estNetProfit = grossProfit * 0.75; // Approx net profit after OPEX & Tax
  const estMarketCap = estNetProfit * peRatio;

  const resultDiv = document.getElementById('tsmcValuationResult');
  resultDiv.innerHTML = `
    🏭 <b>台積電 (2330) 估值試算結果</b>：<br>
    • <b>預估全年營收</b>：$${revBillion.toLocaleString()} 億元台幣 | <b>毛利率目標</b>：${gmRatio}%<br>
    • <b>預估毛利總額</b>：$${grossProfit.toFixed(0).toLocaleString()} 億元 | <b>估算稅後淨利</b>：$${estNetProfit.toFixed(0).toLocaleString()} 億元<br>
    • <b>本益比 (P/E ${peRatio}x) 下預估合理總市值</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;">$${(estMarketCap / 10000).toFixed(2)} 兆元台幣</span><br>
    💡 <i>53%+ 的超高毛利率與獨占先進製程，是台積電市值突破 25 兆台幣的核心支柱！</i>
  `;
}

// HOUR 2 MODAL: Semiconductor CapEx & Capacity Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCapExImpact() {
  const capexBillionUSD = parseFloat(document.getElementById('capexInput').value) || 32; // $32 Billion USD
  const utilization = parseFloat(document.getElementById('utilizationInput').value) || 95; // 95%

  const capexNTD = capexBillionUSD * 32.5; // TWD Exchange
  const futureRevGrowth = utilization > 90 ? capexBillionUSD * 0.45 : capexBillionUSD * 0.25;

  const resultDiv = document.getElementById('capexResult');
  resultDiv.innerHTML = `
    ⚙️ <b>半導體資本支出 (CapEx) 與產能效益試算結果</b>：<br>
    • <b>年度資本支出</b>：$${capexBillionUSD} 億美元 (約折合 <span style="color:var(--accent-sky); font-weight:bold;">$${capexNTD.toFixed(0).toLocaleString()} 億元台幣</span>)<br>
    • <b>晶圓廠產能利用率</b>：<span style="color:var(--accent-gold); font-weight:bold;">${utilization}%</span><br>
    • <b>預估未來 2 年帶動新增年營收</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.3rem;">+$${futureRevGrowth.toFixed(1)} 億美元！</span><br>
    💡 <i>高產能利用率 (${utilization}%) 確保龐大 CapEx 投資快速轉化為營收爆發力！</i>
  `;
}

// HOUR 3 GAME: Semiconductor Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：晶圓代工模式創始者",
    question: "1987 年提出「純晶圓代工 (Pure-play Foundry)」模式、堅持「絕對不與客戶競爭」並創立台積電 (2330) 的科技領袖是誰？",
    options: [
      { text: "黃仁勳 (Jensen Huang)", correct: false },
      { text: "張忠謀 (Morris Chang)", correct: true },
      { text: "郭台銘 (Terry Gou)", correct: false },
      { text: "蘇姿丰 (Lisa Su)", correct: false }
    ],
    explain: "張忠謀創立台積電純晶圓代工模式，徹底扭轉了全球半導體產業的運作規則！"
  },
  {
    level: 2,
    title: "關卡 2：台積電毛利率標竿",
    question: "台積電憑藉獨占的先進製程技術與強大的定價權 (Pricing Power)，財務報表上的毛利率 (Gross Margin) 長期保持在多少水平？",
    options: [
      { text: "10% ~ 15%", correct: false },
      { text: "53% 以上", correct: true },
      { text: "30%", correct: false },
      { text: "完全沒有毛利", correct: false }
    ],
    explain: "台積電長期毛利率穩定保持在 53% 以上，展現高科技製造業的頂級獲利能力！"
  },
  {
    level: 3,
    title: "關卡 3：CoWoS 先進封裝地位",
    question: "台積電開發的 CoWoS (Chip-on-Wafer-on-Substrate) 先進封裝技術，主要將 GPU 與哪種關鍵元件緊密結合，成為 AI 晶片出貨的瓶頸？",
    options: [
      { text: "高頻寬記憶體 (HBM)", correct: true },
      { text: "傳統機械硬碟", correct: false },
      { text: "藍牙晶片", correct: false },
      { text: "太陽能電池", correct: false }
    ],
    explain: "CoWoS 技術將 GPU 與高頻寬記憶體 (HBM) 緊密整合，是 NVIDIA AI 晶片能高速運算的唯一關鍵！"
  },
  {
    level: 4,
    title: "關卡 4：0050 ETF 的台積電權重",
    question: "在台灣市值型 ETF (0050 元大台灣 50) 中，護國神山台積電 (2330) 的成分股權重占比約為多少？",
    options: [
      { text: "約 5%", correct: false },
      { text: "約 50% (高達一半以上)", correct: true },
      { text: "100%", correct: false },
      { text: "0%", correct: false }
    ],
    explain: "台積電在 0050 ETF 中的權重占比高達 50% 以上，買入 0050 就等於直接參與台積電與台灣矽島成長！"
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
    let badgeText = userScore === 400 ? "🏆 半導體產業達人徽章 (Semiconductor Master)" : "🥉 科技初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十三週「半導體產業、台積電與矽島供應鏈」核心觀念！</p>
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
function submitW13Homework(e) {
  e.preventDefault();
  alert("🎉 第十三週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
