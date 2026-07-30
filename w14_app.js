/**
 * 115 學年度「管理探索二」第十四週：生成式 AI 革命、人工智慧產業鏈與未來職場轉型
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w14_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十四週課程導論：生成式 AI 革命、人工智慧產業鏈與未來職場轉型", "en": "Week 14 Intro: Generative AI Revolution, AI Ecosystem & Future Workplace" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🤖 駕馭 AI 新浪潮：從算力基礎設施到未來職場個人賦能</h2><p>「黃仁勳名言：AI 不會取代你，但懂的使用 AI 的人將會取代你！(AI won't take your job, but a person using AI will!)\"</p></div><p>歡迎來到第十四週！繼十三週半導體產業後，我們進入全球科技最熱門的前沿領域——「生成式 AI (Generative AI)」。本單元將帶領大家拆解 AI 產業鏈三層結構（算力晶片、LLM 大模型、AI 應用）、NVIDIA GPU 霸權、廣達/緯創/鴻海 AI 伺服器供應鏈、提示詞工程 (Prompt Engineering)、AI 對職場的替代與賦能算術，以及防範 Deepfake AI 詐騙。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：AI 產業鏈三層結構</h4><p>算力晶片 (NVIDIA/TSMC) ➔ 大模型 (OpenAI/Google) ➔ 伺服器與應用 (廣達)。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：職場賦能與 ROI</h4><p>提問力、批判思考力、企業 ROI 算術與 Deepfake 防詐 armor。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Gartner / IDC 全球 AI 支出報告 / NVIDIA Investor Relations</div>",
      "en": "<div class=\"hero-box\"><h2>🤖 Harness the AI Wave: Compute Infrastructure & Workplace AI</h2><p>\"Jensen Huang: AI won't take your job, but a person using AI will.\"</p></div><p>Welcome to Week 14! We explore the AI Frontier: Generative AI. We analyze the 3-layer AI supply chain (GPUs, LLMs, Applications), NVIDIA's dominance, Quanta/Wistron/Foxconn AI servers, Prompt Engineering, workplace replacement & ROI, and Deepfake anti-scam defense.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: 3-Layer AI Supply Chain</h4><p>Compute Chips (NVIDIA/TSMC) ➔ LLMs (OpenAI/Google) ➔ AI Servers (Quanta).</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Workplace Empowerment</h4><p>Prompt Engineering, critical thinking, corporate ROI, and Deepfake defense.</p></div></div><div class=\"data-source-badge\">📌 Source: Gartner / IDC Global AI Expenditure Report / NVIDIA IR</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十四週 3 小時學習地圖與核心技能樹", "en": "Week 14 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>生成式 AI 算力與伺服器供應鏈</b> (Slide 01 - 10)<br>生成式AI定義、AI三層結構、NVIDIA GPU霸權、AI伺服器代工 (廣達/緯創/鴻海)、水冷散熱與 Gartner 實證數據</td><td>🎯 <b>1小時活動</b>：AI 算力成本與伺服器供應鏈估值計算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>提示詞工程、企業 ROI 與倫理</b> (Slide 11 - 20)<br>Prompt Engineering 提問技巧、學習/理財實戰應用、企業 ROI 算術、幻覺與智慧財產權、資安與歐盟 AI 法案</td><td>🎯 <b>2小時活動</b>：企業 AI ROI 效益與個人 AI 賦能時間精算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>AI 協作工作流與未來競爭力</b> (Slide 21 - 30)<br>個人 AI 工作流、大一 3 大核心能力、Edge AI (AI PC)、Deepfake 防詐、NVIDIA 財報查閱與 4 大金律</td><td>🎮 <b>3小時小遊戲</b>：生成式 AI 應用達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人 AI 工具協作與未來職場轉型報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 14 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Generative AI Compute & Servers</b> (Slide 01 - 10)<br>Generative AI, 3-Layer Chain, NVIDIA GPUs, AI Servers (Quanta/Wistron), Liquid Cooling & Gartner Data</td><td>🎯 <b>Hour 1 Activity</b>: AI Compute & Server Valuation Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Prompting, Corporate ROI & Ethics</b> (Slide 11 - 20)<br>Prompt Engineering, Finance Study Apps, Corporate ROI Math, Hallucination, IP & EU AI Act</td><td>🎯 <b>Hour 2 Activity</b>: Corporate AI ROI & Personal Time Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>AI Workflows & Future Skills</b> (Slide 21 - 30)<br>Personal AI Workflow, 3 Core Freshman Skills, Edge AI PCs, Deepfake Defense & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: AI Application Master Challenge<br>📝 <b>Class Assignment</b>: Personal AI Collaboration & Career Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "生成式AI突破", "en": "GenAI Breakthrough" },
    "title": { "zh": "什麼是生成式 AI (Generative AI)？從 ChatGPT 到 Sora", "en": "What is Generative AI? From ChatGPT to Sora" },
    "content": {
      "zh": "<h3>🤖 能理解自然語言並自主創造文字、程式碼與影像的 AI 革命</h3><p><b>生成式 AI (Generative AI)</b> 採用深度學習與 Transformer 網絡架構，從傳統「分析數據」跨越至「自主生成全新內容」：</p><ul><li><b>文字與程式碼</b>：ChatGPT (OpenAI)、Claude (Anthropic)、Gemini (Google) 5 秒生成專業分析與程式碼。</li><li><b>多模態與影像視訊</b>：Midjourney、DALL-E 3、Sora (OpenAI 視訊生成模型) 實現文字轉高清影片。</li></ul><div class=\"data-source-badge\">📌 資料來源：OpenAI & Google DeepMind 技術白皮書</div>",
      "en": "<h3>🤖 Deep Learning Creating Text, Code & Video Autonomously</h3><p><b>Generative AI</b> leverages Transformer architectures to move beyond analytics to creative generation:</p><ul><li><b>Text & Code</b>: ChatGPT, Claude, and Gemini generate financial analyses and code in seconds.</li><li><b>Multimodal & Video</b>: Midjourney and OpenAI Sora generate HD videos directly from text prompts.</li></ul><div class=\"data-source-badge\">📌 Source: OpenAI & Google DeepMind Technical Papers</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "AI 產業鏈三層", "en": "3-Layer AI Chain" },
    "title": { "zh": "AI 產業鏈三層結構：算力晶片、LLM 大模型與上層 AI 應用", "en": "3-Layer AI Ecosystem: Compute, LLMs & Applications" },
    "content": {
      "zh": "<h3>⚙️ 拆解龐大 AI 科技帝國的獲利結構</h3><table class=\"data-table\"><thead><tr><th>產業層級</th><th>核心業務與代表企業</th><th>產業地位與利潤率</th></tr></thead><tbody><tr><td><b>1. 底層：算力硬體 (Compute)</b></td><td>GPU/NPU 算力晶片與 AI 伺服器 (NVIDIA, TSMC, 廣達)。</td><td><b>毛利極高！</b>算力為新石油，硬體最先受惠。</td></tr><tr><td><b>2. 中層：大語言模型 (LLM)</b></td><td>基礎模型訓練 (OpenAI, Google Gemini, Meta Llama 3)。</td><td><b>研發資本密集！</b>燒錢訓練模型，競逐模型智商。</td></tr><tr><td><b>3. 上層：AI 應用軟體 (Apps)</b></td><td>垂直領域軟體與 Copilot (Microsoft 365, Midjourney)。</td><td><b>龐大 SaaS 訂閱潛力！</b>直接面向消費者與企業。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：CB Insights 全球 AI 產業鏈結構圖</div>",
      "en": "<h3>⚙️ Dissecting the Profit Structure of the AI Ecosystem</h3><table class=\"data-table\"><thead><tr><th>Layer</th><th>Core Business & Leaders</th><th>Market Status & Margins</th></tr></thead><tbody><tr><td><b>1. Infrastructure: Compute</b></td><td>GPU chips & AI Servers (NVIDIA, TSMC, Quanta).</td><td><b>High Margins!</b> Compute is new oil; hardware wins first.</td></tr><tr><td><b>2. Foundation: LLMs</b></td><td>Model Training (OpenAI, Google Gemini, Meta Llama).</td><td><b>Capital Intensive!</b> High R&D costs racing model IQ.</td></tr><tr><td><b>3. Application: Software</b></td><td>Vertical Apps & Copilots (Microsoft 365, Midjourney).</td><td><b>Huge SaaS Potential!</b> Directly monetization for end users.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: CB Insights Global AI Industry Structure</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "NVIDIA GPU 霸權", "en": "NVIDIA Monopoly" },
    "title": { "zh": "算力就是新石油！NVIDIA GPU 晶片架構與黃仁勳 AI 霸權", "en": "Compute is the New Oil: NVIDIA GPUs & Jensen Huang" },
    "content": {
      "zh": "<h3>⚡ 掌握全球 80% 以上 AI 算力晶片命脈的科技王國</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>CUDA 軟體生態系護城河 🏰</h4><p>NVIDIA 不僅提供 H100/B200 硬體，更憑藉 15 年累積的 CUDA 程式平台，綁定全球數百萬 AI 工程師！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Blackwell 新世代架構 🚀</h4><p>新一代 B200 晶片擁 2,080 億個電晶體，算力提升 5 倍，推動全球資料中心全面升級 AI 工廠！</p></div></div><div class=\"data-source-badge\">📌 資料來源：NVIDIA GTC 大會技術報告</div>",
      "en": "<h3>⚡ Controlling 80%+ of Global AI Compute Lifeblood</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>CUDA Software Ecosystem Moat 🏰</h4><p>Beyond H100/B200 hardware, NVIDIA's 15-year CUDA software ecosystem locks in millions of AI developers!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Blackwell B200 Architecture 🚀</h4><p>B200 boasts 208B transistors, delivering 5x compute power for global AI factories!</p></div></div><div class=\"data-source-badge\">📌 Source: NVIDIA GTC Keynote Technical Announcements</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "AI 伺服器供應鏈", "en": "AI Server Chain" },
    "title": { "zh": "AI 伺服器供應鏈：廣達、緯創、鴻海與英業達的角色", "en": "AI Server Supply Chain: Quanta, Wistron, Foxconn & Inventec" },
    "content": {
      "zh": "<h3>🖥️ 全球 80% 以上的 AI 伺服器均由台灣代工大廠組裝製造！</h3><table class=\"data-table\"><thead><tr><th>台灣代工巨頭</th><th>AI 伺服器供應鏈核心角色</th><th>代表客戶與產品</th></tr></thead><tbody><tr><td><b>廣達 (2382 Quanta)</b></td><td>整機系統組裝 (L10/L11) 與水冷櫃設計。</td><td>NVIDIA NVL72、Microsoft、Google。</td></tr><tr><td><b>緯創 (3231 Wistron)</b></td><td>NVIDIA GPU 晶基板 (Baseboard) 獨家/主要供應商。</td><td>NVIDIA H100/H200 基板。</td></tr><tr><td><b>鴻海 (2317 Foxconn)</b></td><td>提供垂直整合零組件、晶片模組與整機製造。</td><td>NVIDIA NVL72 櫃體、Apple。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：Digitimes Research 全球 AI 伺服器調查</div>",
      "en": "<h3>🖥️ Over 80% of Global AI Servers are Manufactured in Taiwan!</h3><table class=\"data-table\"><thead><tr><th>Taiwan ODM Giant</th><th>Core Role in AI Server Supply Chain</th><th>Key Clients & Products</th></tr></thead><tbody><tr><td><b>Quanta (2382)</b></td><td>System Assembly (L10/L11) & liquid rack design.</td><td>NVIDIA NVL72, Microsoft, Google.</td></tr><tr><td><b>Wistron (3231)</b></td><td>Primary GPU Baseboard Supplier for NVIDIA.</td><td>NVIDIA H100/H200 Baseboards.</td></tr><tr><td><b>Foxconn (2317)</b></td><td>Vertical Integration, chip modules & rack builds.</td><td>NVIDIA NVL72 Racks, Apple.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Digitimes Research Global AI Server Report</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "水冷散熱與CCL", "en": "Liquid Cooling & CCL" },
    "title": { "zh": "散熱與關鍵零組件：水冷散熱 (Liquid Cooling) 與 CCL 板", "en": "Key Components: Liquid Cooling & High-Frequency CCL" },
    "content": {
      "zh": "<h3>🔥 解決 AI 伺服器上千瓦耗電熱能的台灣關鍵零組件</h3><ul><li><b>水冷散熱 (Liquid Cooling)</b>：AI 伺服器單櫃耗電高達 120kW，傳統風扇無法散熱！<b>奇鋐 (3017)、雙鴻 (3324)</b> 提供水冷板與冷卻分配器 (CDU)。</li><li><b>銅箔基板 (CCL)</b>：高頻高速訊號傳輸需要超低損耗 CCL 板，<b>台光電 (2383)</b> 全球市占第一。</li></ul><div class=\"data-source-badge\">📌 資料來源：TrendForce 伺服器散熱與零組件研究</div>",
      "en": "<h3>🔥 Taiwan Components Solving 120kW AI Server Heat</h3><ul><li><b>Liquid Cooling</b>: AI server racks consume up to 120kW; traditional fans fail. <b>AVC (3017) & Auras (3324)</b> lead in liquid cooling plates & CDUs.</li><li><b>Copper Clad Laminate (CCL)</b>: High-frequency signal transmission requires ultra-low loss CCL; <b>EMC (2333)</b> leads globally.</li></ul><div class=\"data-source-badge\">📌 Source: TrendForce Server Cooling Research</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "Gartner 數據", "en": "Gartner AI Data" },
    "title": { "zh": "實證數據：Gartner 與 IDC 全球生成式 AI 支出預測", "en": "Empirical Data: Gartner & IDC Global GenAI Spend Forecast" },
    "content": {
      "zh": "<h3>📊 全球企業狂拋重金建置 AI 算力的實證統計</h3><p>根據 Gartner 與 IDC 2026 最新全球科技支出預測：</p><ul><li><b>全球 AI 產業總支出</b>：將於 2027 年突破 <b>5,000 億美元 (約 16 兆台幣)</b>，年複合成長率 (CAGR) 高達 35%！</li><li><b>AI 伺服器出貨占比</b>：占全球伺服器總採購金額比例已超過 <b>50%</b>，成為資料中心資本出支的第一大主力。</li></ul><div class=\"data-source-badge\">📌 資料來源：Gartner Worldwide IT Spending Forecast / IDC Worldwide AI Tracker</div>",
      "en": "<h3>📊 Enterprise Global AI Compute Investment Forecasts</h3><p>According to Gartner & IDC 2026 Data:</p><ul><li><b>Global AI Spending</b>: Forecasted to surpass <b>$500 Billion USD (~$16T NTD) by 2027</b> (CAGR ~35%).</li><li><b>AI Server Share</b>: AI Servers now account for over <b>50%</b> of global server procurement budgets.</li></ul><div class=\"data-source-badge\">📌 Source: Gartner Worldwide IT Spending / IDC AI Tracker</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "AI職場替代與賦能", "en": "AI Workplace Impact" },
    "title": { "zh": "大一新鮮人看 AI 職場：哪些工作被替代？哪些被賦能？", "en": "AI Workplace Impact: Jobs Replaced vs. Jobs Empowered" },
    "content": {
      "zh": "<h3>💼 AI 時代未來職涯發展的雙刃劍</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ 高度易被 AI 替代的工作</h4><p>重複性資料輸入、基礎翻譯、初級程式除錯、簡易文案撰寫、常規客服。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🚀 被 AI 大幅賦能的工作 🌟</h4><p>跨領域整合者、進階架構師、提示詞工程師、AI 財務分析師、策略決策者。</p></div></div><div class=\"data-source-badge\">📌 資料來源：世界經濟論壇 (WEF)《未來就業報告》</div>",
      "en": "<h3>💼 The Double-Edged Sword of Future AI Careers</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ High AI Replacement Risk</h4><p>Repetitive data entry, basic translation, entry-level coding, routine copywriter.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🚀 High AI Empowerment Potential 🌟</h4><p>Cross-domain integrators, prompt engineers, AI financial analysts, strategic leaders.</p></div></div><div class=\"data-source-badge\">📌 Source: World Economic Forum (WEF) Future of Jobs Report</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>AI 3 層結構</b>：算力硬體 (NVIDIA/TSMC) ➔ 大模型 (OpenAI) ➔ 伺服器與應用 (廣達)。</li><li><b>台灣供應鏈霸權</b>：廣達、緯創、鴻海包辦全台 80% 以上 AI 伺服器代工。</li><li><b>職場策略</b>：不被 AI 替代，成為善用 AI 的跨領域賦能人才。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: AI算力估值器」</b> 按鈕，輸入 AI 伺服器採購量與單價，精算算力建置成本與供應鏈價值！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>3 AI Layers</b>: Compute Hardware (NVIDIA) ➔ LLMs (OpenAI) ➔ AI Servers (Quanta).</li><li><b>Taiwan Monopoly</b>: Quanta, Wistron & Foxconn build 80%+ of global AI servers.</li><li><b>Career Rule</b>: Don't get replaced; become an AI-empowered cross-domain professional.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate AI compute costs!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "提示詞工程基礎", "en": "Prompt Engineering" },
    "title": { "zh": "提示詞工程 (Prompt Engineering) 基礎：精準提問四要素", "en": "Prompt Engineering Basics: The 4 Elements of Prompting" },
    "content": {
      "zh": "<h3>💬 如何像高階主官一樣下指令？精準操控 AI 的公式</h3><div class=\"formula-box\">$$\\text{黃金提示詞公式} = \\text{角色設定 (Role)} + \\text{背景任務 (Context)} + \\text{限制條件 (Constraint)} + \\text{輸出格式 (Output Format)}$$</div><p><b>實例</b>：「你是一位台股資深分析師 (Role)，請分析台積電最新的毛利率表現 (Context)，列出 3 大優劣勢，不要使用複雜專業術語 (Constraint)，以表格形式輸出 (Output Format)。」</p><div class=\"data-source-badge\">📌 資料來源：OpenAI Prompt Engineering 最佳實務指南</div>",
      "en": "<h3>💬 How to Command AI Like a Senior Executive</h3><div class=\"formula-box\">$$\\text{Golden Prompt Formula} = \\text{Role} + \\text{Context} + \\text{Constraint} + \\text{Output Format}$$</div><p><b>Example</b>: \"Act as a Senior Financial Analyst (Role), summarize TSMC's latest Gross Margin (Context), limit to 3 bullet points without jargon (Constraint), output as a markdown table (Format).\"</p><div class=\"data-source-badge\">📌 Source: OpenAI Prompt Engineering Best Practices Guide</div>"
    }
  },
  {
    "id": 12,
    "img": "images/w14_ai_stack.jpg",
    "hour": 2,
    "tag": { "zh": "大一 AI 實戰", "en": "Freshman AI Apps" },
    "title": { "zh": "AI 工具在大一學習與財務分析實戰：數據處理與圖表", "en": "AI Applications in College Study & Financial Analysis" },
    "content": {
      "zh": "<h3>📚 讓 AI 成為你的 24 小時個人台大助教！</h3><ul><li><b>論文與財報速讀</b>：將 100 頁台積電英文年報上傳至 Claude 3.5 / ChatGPT，10 秒摘要核心亮點。</li><li><b>財務數據試算</b>：使用 Advanced Data Analysis 自動生成 Python 程式碼，畫出股票走勢圖。</li><li><b>簡報大綱生成</b>：輸入專案主題，AI 自動梳理 30 頁簡報邏輯結構。</li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案 AI 輔助教學組</div>",
      "en": "<h3>📚 Turning AI into Your 24/7 Personal Study Assistant</h3><ul><li><b>Fast Reading Reports</b>: Upload a 100-page English SEC 10-K to Claude 3.5; get top highlights in 10s.</li><li><b>Financial Data Analytics</b>: Use Code Interpreter to generate Python scripts and stock chart plots.</li><li><b>Presentation Outlines</b>: Input topics to get structured 30-slide presentation architectures.</li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II AI Teaching Team</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "企業 AI ROI", "en": "Corporate AI ROI" },
    "title": { "zh": "企業引進 AI 的 ROI 算術：人力縮減 vs. 算力伺服器成本", "en": "Corporate AI ROI: Labor Savings vs. Server & License Costs" },
    "content": {
      "zh": "<h3>⚖️ 企業花大錢買 AI 伺服器，真的划算嗎？精算效益</h3><div class=\"formula-box\">$$\\text{AI 投資報酬率 (ROI)} = \\frac{\\text{節省人力與時間成本收益} - (\\text{AI 伺服器硬體} + \\text{SaaS 訂閱費})}{\\text{AI 總建置成本}} \\times 100\\%$$</div><p><b>實證結果</b>：成功引進 Copilot AI 的企業，員工每處理一份客戶報告節省 40% 時間，ROI 於 1.2 年內回收！</p><div class=\"data-source-badge\">📌 資料來源：McKinsey 麥肯錫《Generative AI 經濟價值報告》</div>",
      "en": "<h3>⚖️ Is Spending Millions on AI Servers Worth It for Firms?</h3><div class=\"formula-box\">$$\\text{AI ROI} = \\frac{\\text{Labor & Time Savings Value} - (\\text{Hardware} + \\text{License Fees})}{\\text{Total AI Implementation Cost}} \\times 100\\%$$</div><p><b>Finding</b>: Firms deploying AI Copilots save 40% report processing time, achieving positive ROI in 1.2 years!</p><div class=\"data-source-badge\">📌 Source: McKinsey Generative AI Economic Value Report</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "幻覺與著作權", "en": "Hallucination & IP" },
    "title": { "zh": "幻覺 (Hallucination) 與著作權陷阱：AI 產出真實性查證", "en": "AI Hallucinations & Copyright Traps: Fact-Checking Rules" },
    "content": {
      "zh": "<h3>⚠️ 絕對不要盲目信任 AI 給你的每一個字！查證 3 招</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. 幻覺 (Hallucination) 陷阱</h4><p>大語言模型是「機率文本生成器」，有時會本正經地一本胡說八道（引述不存在的法條或數據）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>2. 著作權與侵權爭議</h4><p>AI 訓練集可能包含未授權圖片或文章，直接複製賣錢可能面臨著作權訴訟！</p></div></div><div class=\"data-source-badge\">📌 資料來源：智慧財產局 AI 著作權爭議說明</div>",
      "en": "<h3>⚠️ Never Trust AI Outputs 100% Without Fact-Checking!</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. Hallucination Trap</h4><p>LLMs generate text probabilistically; they can confidently state non-existent laws or stats.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>2. Copyright Disputes</h4><p>Training datasets may include copyrighted work; commercial copy-pasting risks lawsuits!</p></div></div><div class=\"data-source-badge\">📌 Source: Intellectual Property Office AI Copyright Guidelines</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "數據隱私與資安", "en": "Data Privacy & Security" },
    "title": { "zh": "數據隱私與資安風險：企業機密外洩與 Deepfake 詐騙", "en": "Data Privacy Risks: Corporate Leaks & Deepfake Scams" },
    "content": {
      "zh": "<h3>🛡️ 絕對不能把公司未公開財報或個人身分證字號餵給免費 AI！</h3><ul><li><b>企業資安機密外洩</b>：三星工程師曾將未公開晶片原始碼貼入免費版 ChatGPT，導致機密遭訓練集吸收！</li><li><b>Deepfake 偽造技術</b>：詐騙集團利用 3 秒語音樣本複製親友聲音，甚至複製臉部影像進行視訊詐騙。</li></ul><div class=\"data-source-badge\">📌 資料來源：國家資通安全研究院 (NICS) 資安警訊</div>",
      "en": "<h3>🛡️ Never Input Private Financials or SSNs into Public AI!</h3><ul><li><b>Corporate Data Leaks</b>: Engineers pasting proprietary code into public ChatGPT caused leaks into datasets!</li><li><b>Deepfake Scams</b>: Scammers clone voices with 3-second audio clips for fraudulent phone calls.</li></ul><div class=\"data-source-badge\">📌 Source: National Institute of Cyber Security (NICS) Alerts</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "歐盟 AI 法案", "en": "EU AI Act" },
    "title": { "zh": "AI 倫理與法規：歐盟 AI 法案 (EU AI Act) 與全球監管", "en": "AI Ethics & Regulation: EU AI Act & Global Frameworks" },
    "content": {
      "zh": "<h3>⚖️ 全球首部硬性立法監管 AI 的里程碑法案</h3><table class=\"data-table\"><thead><tr><th>風險分級</th><th>監管項目與應用範疇</th><th>合規與處罰要求</th></tr></thead><tbody><tr><td><b>1. 不可接受風險 (Unacceptable)</b></td><td>社交評分系統、即時公共場合生物識別。</td><td><b>全球完全禁止使用！</b></td></tr><tr><td><b>2. 高風險 (High Risk)</b></td><td>醫療設備、自動化招聘求職篩選、信用評分。</td><td>需通過嚴格透明度與人工監督審查。</td></tr><tr><td><b>3. 有限風險 (Limited)</b></td><td>聊天機器人 (ChatGPT)、Deepfake 生成內容。</td><td><b>強制標註「本內容由 AI 生成」！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：歐盟委員會 (European Commission) EU AI Act 官方條文</div>",
      "en": "<h3>⚖️ The World's First Hard Law Regulating Artificial Intelligence</h3><table class=\"data-table\"><thead><tr><th>Risk Level</th><th>Category & Applications</th><th>Compliance & Penalty Rules</th></tr></thead><tbody><tr><td><b>1. Unacceptable Risk</b></td><td>Social scoring systems, real-time public biometric surveillance.</td><td><b>Strictly Banned Globally!</b></td></tr><tr><td><b>2. High Risk</b></td><td>Medical devices, automated hiring filters, credit scoring.</td><td>Requires strict auditing & human oversight.</td></tr><tr><td><b>3. Limited Risk</b></td><td>Chatbots, Deepfake generated media.</td><td><b>Mandatory AI disclosure tags!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: European Commission EU AI Act Official Text</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "投資 AI 策略", "en": "AI Investment Strategy" },
    "title": { "zh": "投資 AI 產業鏈理性策略：硬體賣軍火商 vs 上層軟體公司", "en": "Rational AI Investment: Hardware Picks & Shovels vs. Software" },
    "content": {
      "zh": "<h3>⛏️ 金淘沙淘金熱潮中，買賣鏟子的軍火商最賺錢！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. 淘金熱「賣鏟人」硬體供應鏈 🌟</h4><p>不論哪家大模型贏，都需要向 <b>NVIDIA、台積電、廣達</b> 採購算力與伺服器！獲利能見度極高。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. 上層軟體應用公司 (Software)</h4><p>面臨激烈競爭與模型升級替代風險。需選擇具備龐大訂閱用戶生態系（如 Microsoft）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 科技產業投資架構</div>",
      "en": "<h3>⛏️ In a Gold Rush, the Shovel Sellers Make Surefire Profits!</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>1. \"Picks & Shovels\" Hardware 🌟</h4><p>No matter which LLM wins, all buy GPUs and servers from <b>NVIDIA, TSMC, and Quanta</b>!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>2. Software Applications</h4><p>Facing high competition & model obsolescence. Pick firms with sticky user bases (e.g. Microsoft).</p></div></div><div class=\"data-source-badge\">📌 Source: CFP Tech Sector Investment Framework</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "巨頭 AI 大戰", "en": "Big Tech AI War" },
    "title": { "zh": "全球科技巨頭 AI 大戰：Microsoft+OpenAI vs. Google vs. Meta", "en": "Big Tech AI Wars: Microsoft+OpenAI vs. Google vs. Meta" },
    "content": {
      "zh": "<h3>🌐 三大陣營搶奪次世代作業系統的終極戰役</h3><table class=\"data-table\"><thead><tr><th>陣營名稱</th><th>核心優勢與主力產品</th><th>開源/閉源策略</th></tr></thead><tbody><tr><td><b>Microsoft + OpenAI</b></td><td>ChatGPT-4o、Copilot 綁定 Office 365 企業生態。</td><td>閉源獨占，訂閱收費。</td></tr><tr><td><b>Google (Alphabet)</b></td><td>Gemini 1.5 Pro、搜尋引擎與 Android 系統整合。</td><td>全模態閉源 + 輕量開放。</td></tr><tr><td><b>Meta (Facebook)</b></td><td>Llama 3 開源大模型，號召全球工程師社群。</td><td><b>完全開源 (Open Source)！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：MIT Technology Review 全球 AI 趨勢分析</div>",
      "en": "<h3>🌐 3 Camps Fighting to Control the Next-Gen OS</h3><table class=\"data-table\"><thead><tr><th>Camp Name</th><th>Core Advantage & Key Products</th><th>Open vs. Closed Strategy</th></tr></thead><tbody><tr><td><b>Microsoft + OpenAI</b></td><td>ChatGPT-4o, Copilot integrated with Office 365 ecosystem.</td><td>Closed Source Monetization.</td></tr><tr><td><b>Google</b></td><td>Gemini 1.5 Pro, Search Engine & Android OS integration.</td><td>Multimodal Closed + Light Open.</td></tr><tr><td><b>Meta</b></td><td>Llama 3 open foundation model powering global devs.</td><td><b>100% Open Source!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: MIT Technology Review Global AI Analysis</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "台灣AI伺服器市占", "en": "Taiwan AI Server Share" },
    "title": { "zh": "台灣科技業在全球 AI 浪潮中的硬體獨霸地位 (市占率>80%)", "en": "Taiwan's Global Dominance in AI Servers (80%+ Share)" },
    "content": {
      "zh": "<h3>🇹🇼 全球每一台 AI 伺服器運轉，背後都有台灣科技業的血汗！</h3><p>從晶圓代工 (TSMC 100%)、GPU 基板 (緯創 90%)、散熱 (奇鋐/雙鴻 70%) 到伺服器整機 (廣達/鴻海 80%)：</p><div class=\"formula-box\">$$\\text{台灣 AI 伺服器硬體製造全球市占率} \\ge 80\\%!$$</div><p>台灣無可取代的工程整合能力，讓全美矽谷大廠紛紛來台設立 AI 研發中心！</p><div class=\"data-source-badge\">📌 資料來源：經濟部技術處 AI 產業鏈數據</div>",
      "en": "<h3>🇹🇼 Every AI Server Running Globally Relies on Taiwanese Hardware!</h3><p>From Foundry (TSMC 100%), Baseboards (Wistron 90%), Cooling (AVC 70%) to Assembly (Quanta 80%):</p><div class=\"formula-box\">$$\\text{Taiwan AI Hardware Global Market Share} \\ge 80\\%!$$</div><p>Unmatched engineering integration forces Silicon Valley giants to build AI R&D hubs in Taiwan!</p><div class=\"data-source-badge\">📌 Source: MOEA Department of Industrial Technology AI Report</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>提示詞公式</b>：角色 + 背景任務 + 限制條件 + 輸出格式。</li><li><b>資安與倫理</b>：防範幻覺，絕不將公司數據貼入免費 AI；認明歐盟 AI 法案。</li><li><b>投資賣鏟人</b>：優先投資 GPU 與 AI 伺服器硬體軍火商 (NVIDIA, TSMC, 廣達)。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 企業AI ROI算試算」</b> 按鈕，輸入企業 AI 建置費用與人力省下時間，精算 ROI！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Prompt Formula</b>: Role + Context + Constraint + Output Format.</li><li><b>Security & Ethics</b>: Fact-check hallucinations; comply with EU AI Act.</li><li><b>Invest in Shovel Sellers</b>: Prioritize GPU & AI server hardware leaders (NVIDIA, TSMC, Quanta).</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate Enterprise AI ROI!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "個人 AI 協作流", "en": "Personal AI Workflow" },
    "title": { "zh": "打造個人 AI 協作工作流：融入日常學習、理財與簡報", "en": "Building a Personal AI-Assisted Workflow" },
    "content": {
      "zh": "<h3>🚀 建立個人每日 AI 自動化多工具協作 SOP</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>階段 1：收集與摘要 (Information)</h4><p>使用 Perplexity / Claude 線上搜尋並速讀 50 篇國際財經新聞。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>階段 2：邏輯分析與試算 (Analysis)</h4><p>使用 ChatGPT Code Interpreter 自動跑 Python 分析資產負債表數據。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>階段 3：視覺簡報產出 (Output)</h4><p>使用 AI 生成 Markdown 結構，快速 compile 成美觀雙語 HTML 簡報卡片！</p></div></div><div class=\"data-source-badge\">📌 資料來源：個人 AI 生產力工作流設計</div>",
      "en": "<h3>🚀 Creating Your Daily Multi-Tool AI Workflow SOP</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Stage 1: Gather & Summarize</h4><p>Use Perplexity / Claude to digest 50 global financial news articles.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>Stage 2: Logic & Analytics</h4><p>Use ChatGPT Code Interpreter to auto-run Python scripts on balance sheets.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>Stage 3: Visual Output</h4><p>Use AI to generate markdown structures, rapidly compiling bilingual HTML slides!</p></div></div><div class=\"data-source-badge\">📌 Source: Personal AI Productivity Workflow Design</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "3大關鍵能力", "en": "3 Core AI Skills" },
    "title": { "zh": "大一新鮮人面對 AI 時代 3 大關鍵能力：提問、批判與整合", "en": "3 Critical Skills in the AI Era: Prompting, Critical & Synthesis" },
    "content": {
      "zh": "<h3>🛡️ 機器拿不走的勝出競爭力！修練個人硬核實力</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>💬 1. 精準提問力 (Prompting)</h4><p>能拆解複雜大任務為小子目標，精準引導 AI 給出最優解答。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. 批判思考力 (Critical Thinking)</h4><p>不盲信 AI 的產出，具備事實查證 (Fact-checking) 與辨識邏輯破綻能力。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🧩 3. 跨領域整合力 (Cross-domain Synthesis)</h4><p>將財經、管理、資工與設計跨界結合，解決真實複雜問題。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Harvard Business Review《AI 時代的核心人才能力》</div>",
      "en": "<h3>🛡️ Irreplaceable Competencies Winning in the AI Age</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>💬 1. Precise Prompting</h4><p>Breaking complex problems into sub-tasks, driving AI to optimal solutions.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. Critical Thinking</h4><p>Fact-checking AI outputs; identifying logical flaws and hallucinations.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🧩 3. Cross-Domain Synthesis</h4><p>Combining finance, management, computer science & design to solve real challenges.</p></div></div><div class=\"data-source-badge\">📌 Source: Harvard Business Review Core AI Skills</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "Edge AI 換機潮", "en": "Edge AI PCs" },
    "title": { "zh": "邊緣 AI (Edge AI) 趨勢：AI PC 與 AI 智慧手機換機潮", "en": "Edge AI Trends: AI PCs & AI Smartphone Upgrade Cycles" },
    "content": {
      "zh": "<h3>💻 算力從雲端延伸至個人裝置！NPU 成為終端標配</h3><ul><li><b>AI PC 與 NPU 晶片</b>：內建神經網路處理單元 (NPU)，能在離線狀態下於筆電端即時執行生成式 AI 任務。</li><li><b>換機潮帶動台灣供應鏈</b>：Apple Intelligence 與 Copilot+ PC 引爆全球筆電與手機換機潮，帶動<b>華碩 (2357)、宏碁 (2353)、聯發科</b>新一波成長。</li></ul><div class=\"data-source-badge\">📌 資料來源：IDC 全球 AI PC 出貨量市場報告</div>",
      "en": "<h3>💻 Moving AI from the Cloud directly to Personal Devices!</h3><ul><li><b>AI PCs & NPU Chips</b>: Built-in Neural Processing Units (NPUs) run GenAI offline on laptops instantly.</li><li><b>Global Upgrade Cycle</b>: Apple Intelligence & Copilot+ PCs drive laptop/phone upgrades, boosting <b>ASUS (2357), Acer (2353), and MediaTek</b>.</li></ul><div class=\"data-source-badge\">📌 Source: IDC Global AI PC Market Report</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "Deepfake 防詐", "en": "Deepfake Anti-Scam" },
    "title": { "zh": "AI 時代個人資安防禦：防範 Deepfake 語音/影像複製詐騙", "en": "AI Security Defense: Countering Deepfake Voice & Video Scams" },
    "content": {
      "zh": "<h3>🛡️ 眼見不一定為實！防範 AI 複製親友聲音影像詐騙</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Deepfake 詐騙手法</h4><p>接到電話傳來親友求救聲（AI 3 秒複製聲音），或視訊通話看到親友臉孔（AI 換臉），要求緊急匯款。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 破解防詐 2 招</h4><p>1. <b>設定家人專屬「防詐暗語」</b>；2. 掛斷電話後，<b>親自撥打舊電話號碼重新反查確認！</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙專線 Deepfake 防詐指引</div>",
      "en": "<h3>🛡️ Seeing is No Longer Believing! Countering AI Cloning Scams</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Deepfake Scam Tactics</h4><p>Phone calls with cloned family voices (AI 3s audio clone) or video calls with face swaps asking for urgent money transfers.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 2 Scam Busting Rules</h4><p>1. <b>Set a secret family code word</b>; 2. Hang up and <b>redial their original number directly to verify!</b></p></div></div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Scam Deepfake Defense Guidelines</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "NVIDIA 財報查閱", "en": "NVIDIA IR Guide" },
    "title": { "zh": "實證數據調取：NVIDIA 財報 (investor.nvidia.com) 實務查閱", "en": "Retrieving Real Data: NVIDIA Investor Relations Portal" },
    "content": {
      "zh": "<h3>🌐 手把手教大一學生登入 NVIDIA 官網查閱 AI 數據</h3><ul><li><b>查詢 Data Center 數據中心營收</b>：登入 `investor.nvidia.com` 查閱季度財報中 Data Center 營收年增率 (YoY > 200%)。</li><li><b>查詢 Compute CapEx 預測</b>：追蹤全美四大雲端巨頭 (Microsoft, Amazon, Google, Meta) 的資本支出展望。</li><li><b>實證投資分析</b>：培養直接閱讀科技龍頭英文原版財報的能力。</li></ul><div class=\"data-source-badge\">📌 資料來源：NVIDIA Investor Relations (investor.nvidia.com)</div>",
      "en": "<h3>🌐 Querying Real AI Financials on NVIDIA's IR Portal</h3><ul><li><b>Track Data Center Revenue</b>: Log into `investor.nvidia.com` to review Data Center YoY revenue growth (>200%).</li><li><b>Track Cloud CapEx Forecasts</b>: Follow Big 4 (Microsoft, Amazon, Google, Meta) CapEx guidance.</li><li><b>Data Competency</b>: Build skills to read original English SEC quarterly filings.</li></ul><div class=\"data-source-badge\">📌 Source: NVIDIA Investor Relations</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "AI 時代 4 大金律", "en": "4 AI Rules" },
    "title": { "zh": "大一新鮮人 AI 時代個人競爭力 4 大金律", "en": "4 Golden Rules for Personal Competitiveness in the AI Era" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的 AI 協作與富足心態</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🤖 1. 積極擁抱 AI 成為超級個人</h4><p>將 AI 融入日常學習與理財，提升 300% 生產力，拒絕當抵抗創新的落後者。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. 鍛鍊批判思考與查證能力</h4><p>永遠對 AI 產出進行事實查證，嚴防幻覺與智慧財產權侵權陷阱。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>⛏️ 3. 理性投資 AI 硬體賣鏟人</h4><p>投資選股優先佈局掌握核心技術與產能霸權的半導體與伺服器龍頭。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. 嚴防 Deepfake 複製詐騙</h4><p>設立家族防詐通關暗語，不盲信視訊影像，確保個人與家人的財產安全。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與 AI 科技倫理保護原則</div>",
      "en": "<h3>🛡️ Lifetime Mindset for Thriving in the AI Era</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🤖 1. Embrace AI to Become a Super Individual</h4><p>Integrate AI into study and finance to boost productivity by 300%.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. Master Critical Thinking & Fact-Checking</h4><p>Always verify AI outputs, avoiding hallucination and copyright traps.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>⛏️ 3. Invest in AI Hardware Shovel Sellers</h4><p>Prioritize semiconductor and server leaders with monopoly tech.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. Guard Against Deepfake Scams</h4><p>Set family secret codes; never trust unverified video or voice calls.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & AI Ethics Guidelines</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "提升300%效率SOP", "en": "300% Efficiency SOP" },
    "title": { "zh": "學習實力試算實例：運用 AI 工具提升 300% 學習與理財 SOP", "en": "Practical Case: 300% Efficiency Boost via AI Workflow SOP" },
    "content": {
      "zh": "<h3>💡 大一新鮮人小明運用 AI 進行通識報告與理財試算</h3><ul><li><b>傳統人工方式</b>：閱讀 5 本財經書籍與搜尋網頁 ➔ 耗時 <b>15 小時！</b></li><li><b>AI 協作 SOP</b>：使用 Perplexity 整理架構 + ChatGPT Code Interpreter 跑 Python 圖表 + Claude 生成雙語內容 ➔ 僅需 <b>2 小時完成高品質報告！</b></li><li><b>節省時間轉化效益</b>：將節省下來的 13 小時拿去打工賺錢或運動學習，達成效益最大化。</li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案 AI 生產力研究組</div>",
      "en": "<h3>💡 Student Case: Ming Boosts Report Efficiency by 300%</h3><ul><li><b>Traditional Manual Way</b>: Reading 5 books & manual Googling ➔ Takes <b>15 Hours!</b></li><li><b>AI Workflow SOP</b>: Perplexity for research + ChatGPT for Python plots + Claude for bilingual text ➔ Takes <b>2 Hours!</b></li><li><b>Time Savings Value</b>: Reinvesting 13 saved hours into part-time wages or sports.</li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II AI Research Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "成為 AI 領航者", "en": "Become an AI Leader" },
    "title": { "zh": "擁抱 AI 革命：成為駕馭 AI 的終身學習者與領航者", "en": "Embrace the AI Revolution: Become a Lifetime AI Leader" },
    "content": {
      "zh": "<h3>🌈 AI 是人類歷史上最強大的文明加速器！</h3><p>面對人工智慧時代，恐懼與抗拒毫無意義。大一新鮮人應以積極開放的心態，將 AI 視為個人智力的延伸與輔佐：</p><ol><li><b>保持好奇心</b>：持續學習最新的 AI 工具與提示詞技巧。</li><li><b>堅守人文價值</b>：發揮同理心、道德良知與獨創審美，引領科技善向發展！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🌈 AI is the Most Powerful Accelerator in Human History!</h3><p>Fear and resistance are useless. Freshmen should embrace AI as an extension of personal intellect:</p><ol><li><b>Stay Curious</b>: Continuously learn new AI tools and prompting techniques.</li><li><b>Uphold Human Values</b>: Exercise empathy, ethics, and aesthetics to guide tech for good!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十四週全景知識體系圖與觀念整合", "en": "Week 14 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十四週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>AI 算力與硬體 (Hour 1)</b>：Generative AI突破 ➔ 3層產業結構 (算力/LLM/應用) ➔ NVIDIA GPU與CUDA護城河 ➔ AI伺服器組裝 (廣達/緯創/鴻海) ➔ 水冷散熱/CCL ➔ Gartner支出數據 ➔ 職場替代vs賦能。</p><p><b>提示詞工程與倫理 (Hour 2)</b>：Prompt 4要素 (Role/Context/Constraint/Format) ➔ 學習/理財AI實戰 ➔ 企業AI ROI算術 ➔ 幻覺與著作權 ➔ 數據資安 ➔ 歐盟AI法案 ➔ 投資賣鏟人 ➔ 巨頭AI大戰 ➔ 台灣市占80%。</p><p><b>AI 協作與競爭力 (Hour 3)</b>：個人AI協作工作流 ➔ 大一3大能力 (提問/批判/整合) ➔ Edge AI PC ➔ Deepfake防詐暗語 ➔ NVIDIA IR查閱 ➔ 300%效率SOP ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 14 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Compute & Hardware (Hour 1)</b>: GenAI breakthrough ➔ 3-Layer Chain ➔ NVIDIA CUDA Moat ➔ AI Server Assembly (Quanta/Wistron) ➔ Liquid Cooling ➔ Gartner Data ➔ Job Impact.</p><p><b>Prompting & Ethics (Hour 2)</b>: Prompt 4 Elements ➔ Study Apps ➔ Corporate AI ROI ➔ Hallucinations ➔ Privacy ➔ EU AI Act ➔ Invest Shovel Sellers ➔ Big Tech Wars ➔ Taiwan 80% Share.</p><p><b>Workflows & Competency (Hour 3)</b>: Personal AI Workflow ➔ 3 Core Skills ➔ Edge AI PCs ➔ Deepfake Defense ➔ NVIDIA IR ➔ 300% SOP ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十五週預告 (綠色金融、ESG 永續投資與碳定價經濟學)", "en": "Reflections & Week 15 Preview (Green Finance & ESG Investing)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十四週「生成式 AI 革命、人工智慧產業鏈與未來職場轉型」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人 AI 工具協作與未來職場轉型報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十五週課程預告：綠色金融、ESG 永續投資與碳定價經濟學</h4><p>下週我們將探索全球綠色永續浪潮！解密 <b>ESG 三大柱 (環境/社會/公司治理)、碳費 (Carbon Fee) 碳稅算術、歐盟 CBAM 碳邊境關稅、綠色債券與 ESG 篩選 ETF (00878/00692)！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 14!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your AI Collaboration & Workplace Report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 15 Preview: Green Finance & ESG Investing</h4><p>Next week we explore global sustainability! Unlocking ESG 3 Pillars (E, S, G), Carbon Fee & Tax math, EU CBAM carbon border tariffs, Green Bonds & ESG ETFs (00878/00692)!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: AI Compute Cost & Server Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateAICompute() {
  const serverCount = parseFloat(document.getElementById('serverCountInput').value) || 100; // 100 Racks
  const unitPriceUSD = parseFloat(document.getElementById('unitPriceInput').value) || 300000; // $300k USD per server
  const powerKw = parseFloat(document.getElementById('powerKwInput').value) || 40; // 40kW per rack

  const totalCostUSD = serverCount * unitPriceUSD;
  const totalCostNTD = totalCostUSD * 32.5;
  const totalPowerMw = (serverCount * powerKw) / 1000;

  const resultDiv = document.getElementById('aiComputeResult');
  resultDiv.innerHTML = `
    🤖 <b>AI 算力與伺服器採購成本試算結果</b>：<br>
    • <b>AI 伺服器採購量</b>：${serverCount} 架 | <b>單機預算</b>：$${unitPriceUSD.toLocaleString()} USD<br>
    • <b>硬體採購總投資金額</b>：$${(totalCostUSD / 1000000).toFixed(2)} 百萬美元 (<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">約合 $${(totalCostNTD / 100000000).toFixed(2)} 億元台幣</span>)<br>
    • <b>資料中心整體電力功耗</b>：<span style="color:var(--accent-gold); font-weight:bold;">${totalPowerMw.toFixed(2)} MW (兆瓦)</span><br>
    💡 <i>極致的算力需求驅動了對台灣水冷散熱 (奇鋐/雙鴻) 與代工 (廣達/緯創) 的巨額訂單！</i>
  `;
}

// HOUR 2 MODAL: Corporate AI ROI Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCorporateAIROI() {
  const employeeCount = parseFloat(document.getElementById('employeeCountInput').value) || 50;
  const avgMonthlySalary = parseFloat(document.getElementById('salaryInput').value) || 60000;
  const aiTimeSavedPercent = parseFloat(document.getElementById('timeSavedInput').value) || 30; // 30% saved

  const monthlyLaborCost = employeeCount * avgMonthlySalary;
  const monthlySavingsValue = monthlyLaborCost * (aiTimeSavedPercent / 100);
  const annualSavingsValue = monthlySavingsValue * 12;

  const resultDiv = document.getElementById('aiRoiResult');
  resultDiv.innerHTML = `
    ⚖️ <b>企業引進 AI 之時間與 ROI 效益試算結果</b> (${employeeCount} 名員工)：<br>
    • <b>每月團隊總薪資成本</b>：$${monthlyLaborCost.toLocaleString()} 元台幣<br>
    • <b>AI 提升生產力 (${aiTimeSavedPercent}%) 產出效益</b>：<span style="color:var(--accent-emerald); font-weight:bold;">$${monthlySavingsValue.toLocaleString()} 元/月</span><br>
    • <b>每年為企業創賺/省下時間價值</b>：<span style="color:var(--accent-gold); font-weight:bold; font-size:1.3rem;">$${annualSavingsValue.toLocaleString()} 元台幣/年！</span><br>
    💡 <i>企業導入 Copilot 訂閱費每人每月僅需 $30 USD，投資報酬率 (ROI) 高達數倍！</i>
  `;
}

// HOUR 3 GAME: AI Application Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：AI 產業鏈最受惠硬體層",
    question: "在 AI 淘金熱潮中，掌握全球 80% 以上 AI 算力晶片命脈與 CUDA 軟體護城河的晶片巨頭是誰？",
    options: [
      { text: "NVIDIA (輝達)", correct: true },
      { text: "Intel (英特爾)", correct: false },
      { text: "Nokia (諾基亞)", correct: false },
      { text: "Sony (索尼)", correct: false }
    ],
    explain: "NVIDIA 憑藉 GPU 算力晶片與 CUDA 軟體生態系，獨霸全球 AI 算力基礎設施市場！"
  },
  {
    level: 2,
    title: "關卡 2：黃金提示詞 (Prompt) 公式",
    question: "精準掌控生成式 AI (ChatGPT / Claude) 給出優質答案的黃金提示詞 4 要素公式是什麼？",
    options: [
      { text: "角色 + 背景任務 + 限制條件 + 輸出格式", correct: true },
      { text: "名字 + 年齡 + 性別 + 密碼", correct: false },
      { text: "隨便輸入幾個關鍵字", correct: false },
      { text: "用複雜的專業術語一直重複", correct: false }
    ],
    explain: "精準設定 Role + Context + Constraint + Output Format，能大幅提升 AI 產出品質！"
  },
  {
    level: 3,
    title: "關卡 3：台灣 AI 伺服器代工市占率",
    question: "包含廣達、緯創、鴻海在內的台灣科技代工巨頭，包辦了全球 AI 伺服器製造高達多少比例的市占率？",
    options: [
      { text: "約 10%", correct: false },
      { text: "80% 以上 (全球獨霸地位)", correct: true },
      { text: "5%", correct: false },
      { text: "0%", correct: false }
    ],
    explain: "台灣製造業憑藉龐大的系統組裝與水冷工程技術，掌控全球 80% 以上 AI 伺服器製造！"
  },
  {
    level: 4,
    title: "關卡 4：Deepfake 防詐最佳解法",
    question: "接到親友傳來求救電話或視訊影像，懷疑是用 Deepfake AI 複製語音或換臉時，哪一招是最有效的防範驗證方法？",
    options: [
      { text: "設定家族防詐通關暗語，並掛斷電話撥打對方舊號碼反查", correct: true },
      { text: "立刻依照電話指示匯款", correct: false },
      { text: "在網路上公開親友個人資料", correct: false },
      { text: "相信視訊畫面的每一個細節", correct: false }
    ],
    explain: "設定家族秘密通關暗語，並掛斷親自撥打原電話號碼驗證，是破解 Deepfake 的黃金法則！"
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
    let badgeText = userScore === 400 ? "🏆 AI 應用領航員徽章 (AI Master)" : "🥉 AI 探索者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十四週「生成式 AI 革命與職場轉型」核心觀念！</p>
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
function submitW14Homework(e) {
  e.preventDefault();
  alert("🎉 第十四週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
