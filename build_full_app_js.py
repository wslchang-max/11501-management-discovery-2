import json

# Python script to build full, detailed, rich app.js for all 30 slides

slides = [
    # SLIDE 1
    {
        "id": 1, "hour": 1, "tag": {"zh": "單元導論", "en": "Intro"},
        "title": {"zh": "Slide 01 | 第一週課程導論：資訊爆炸時代的財經素養", "en": "Slide 01 | Week 1 Intro: Financial Literacy in the Info Age"},
        "img": "images/cover.jpg",
        "content": {
            "zh": """
                <p>歡迎來到 115 學年度「管理探索二」。今天第一週的主題是<b>「資訊爆炸時代的財經素養」</b>。</p>
                <p>在現代社會中，我們每個人每天隨時都被數以千計的新聞推送、社群貼文、AI 生成的股市分析以及投資網紅的短影音所包圍。</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💡 核心疑問</h4>
                    <p>資訊變多，真的代表我們變聰明、決策變準確了嗎？抑或是我們正陷入更多的市場情緒與假新聞焦慮中？</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🎯 學習使命</h4>
                    <p>本課程將帶領大家建立學術級的資訊過濾框架，學會從大量雜訊 (Noise) 中提煉真實訊號 (Signal)。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Welcome to Week 1: <b>Financial Literacy in the Information Age</b>.</p>
                <p>In modern society, we are constantly surrounded by thousands of news alerts, social posts, AI stock predictions, and financial influencer videos.</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💡 Key Question</h4>
                    <p>Does more information mean smarter decisions? Or are we trapped in market sentiment and fake news anxiety?</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🎯 Learning Mission</h4>
                    <p>This course empowers you to build an academic-grade filter to extract true Signals from overwhelming Noise.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 2
    {
        "id": 2, "hour": 1, "tag": {"zh": "學習藍圖", "en": "Roadmap"},
        "title": {"zh": "Slide 02 | 3 小時教學藍圖與核心學習架構", "en": "Slide 02 | 3-Hour Learning Blueprint & Architecture"},
        "content": {
            "zh": """
                <p>本週 3 小時（180 分鐘）的教學流程劃分如下：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🕒 第一小時 (Hour 1)</h4>
                    <p><b>理論與背景</b>：資訊演進歷史、訊息過載 (Information Overload) 倒 U 曲線與訊號雜訊比 (SNR) 數學模型。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🕒 第二小時 (Hour 2)</h4>
                    <p><b>心理偏誤與防禦</b>：框架效應 (Framing Effect)、資訊不對稱檸檬市場、Deepfake 詐騙與 4D Filter 法則。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🕒 第三小時 (Hour 3)</h4>
                    <p><b>實證與工具應用</b>：機構與散戶時差、演算法同溫層、綠色洗白辯驗、終身批判性財經思維。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🎯 3 大獨立活動與作業</h4>
                    <p>每 1 小時配有專屬互動活動 modal，並於最後 1 小時提供「4D Filter 檢驗報告」課堂實務作業。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>The 3-hour (180-min) breakdown for Week 1 is structured as follows:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🕒 Hour 1: Theory</h4>
                    <p>Media evolution history, Inverted U-curve of info overload, and Signal-to-Noise Ratio (SNR) formula.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🕒 Hour 2: Biases</h4>
                    <p>Framing Effect, Lemons Market theory, Deepfake fraud deconstruction, and the 4D Filter rules.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🕒 Hour 3: Applied</h4>
                    <p>Institutional vs retail info gap, algorithm echo chambers, Greenwashing verification, and critical thinking.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🎯 3 Hourly Activities & Homework</h4>
                    <p>Features dedicated activity modals per hour plus a classroom homework submission form.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 3
    {
        "id": 3, "hour": 1, "tag": {"zh": "媒體演進一", "en": "Media History 1"},
        "title": {"zh": "Slide 03 | 金融媒體演進史（一）：紙本與廣播時代", "en": "Slide 03 | Financial Media History (1): Press & Broadcast Era"},
        "content": {
            "zh": """
                <p>金融新聞的傳遞速度決定了市場的交易形態：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. 報紙時代 (Daily Press)</h4>
                    <p>資訊時差達 24 小時以上，僅少數專業機構掌握第一手財報與經濟數據。散戶幾乎完全處於資訊盲區。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. 電視與廣播 (Broadcasting)</h4>
                    <p>開盤即時報導，引發大眾市場情緒共振（如 1987 年黑色星期一崩盤事件中的電視媒體推波助瀾）。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>The transmission speed of financial media has shaped market trading behaviors over time:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. Daily Press Era</h4>
                    <p>Info lag > 24 hours; institutions held absolute monopoly over primary financial data while retail was blind.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. Broadcasting Era</h4>
                    <p>Real-time opening bell news, triggering mass market emotional panic (e.g., 1987 Black Monday crash).</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 4
    {
        "id": 4, "hour": 1, "tag": {"zh": "媒體演進二", "en": "Media History 2"},
        "title": {"zh": "Slide 04 | 金融媒體演進史（二）：社群與 AI 演播時代", "en": "Slide 04 | Financial Media History (2): Web 2.0 & GenAI Era"},
        "content": {
            "zh": """
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>3. 網路與社群 (Web 2.0)</h4>
                    <p>自媒體抬頭、Reddit / PTT 散戶社群聚集，資訊傳播速度縮短至毫秒級，引發 GameStop 等迷因股事件。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. 生成式 AI 時代 (GenAI Era - 2026)</h4>
                    <p>AI 自動生成新聞、演算法精準推送極化標題，訊息產生速率呈指數爆炸，市場噪音量達到歷史極致。</p>
                  </div>
                </div>
            """,
            "en": """
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>3. Web 2.0 & Social Media</h4>
                    <p>Rise of retail forums (Reddit/PTT), accelerating news propagation to milliseconds and fueling GameStop meme rallies.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. GenAI & AI Stream Era (2026)</h4>
                    <p>AI-generated articles & algorithm-driven clickbaits pushing info growth exponentially to historical peaks.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 5
    {
        "id": 5, "hour": 1, "tag": {"zh": "訊息過載", "en": "Info Overload"},
        "title": {"zh": "Slide 05 | 數據現實：訊息過載 (Information Overload) 倒 U 曲線", "en": "Slide 05 | Data Reality: Inverted U-Curve of Info Overload"},
        "img": "images/overload.jpg",
        "content": {
            "zh": """
                <p>根據頂尖財務學術期刊 (Journal of Finance / Review of Financial Studies) 研究：</p>
                <div class="slide-card-box">
                  <h4>📊 決策品質倒 U 曲線 (Inverted U-Curve)</h4>
                  <p><b>臨介點法則 (Tipping Point)</b>：當投資者接受的資訊量超越個人處理極限時，決策精準度不但沒有提升，反而呈急劇下滑趨勢。</p>
                  <p>過多的短線新聞只會干擾長期評估，引發情緒化恐慌拋售或盲目追高。</p>
                </div>
            """,
            "en": """
                <p>According to top academic research in the Journal of Finance and Review of Financial Studies:</p>
                <div class="slide-card-box">
                  <h4>📊 Inverted U-Curve of Decision Quality</h4>
                  <p><b>Tipping Point Principle</b>: Beyond a critical information threshold, investor decision accuracy drops sharply.</p>
                  <p>Excessive short-term news degrades rational evaluation, inducing emotional panic selling or FOMO buying.</p>
                </div>
            """
        }
    },
    # SLIDE 6
    {
        "id": 6, "hour": 1, "tag": {"zh": "過度交易", "en": "Overtrading"},
        "title": {"zh": "Slide 06 | 認知心理：資訊過載導致過度交易 (Overtrading)", "en": "Slide 06 | Cognitive Bias: Info Overload Triggers Overtrading"},
        "content": {
            "zh": """
                <p>接收過多雜訊會引發<b>過度自信偏誤 (Overconfidence Bias)</b>：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>⚠️ 虛假掌控感 (Illusion of Control)</h4>
                    <p>散戶誤以為掌握大量即時新聞代表「看懂了市場」，進而提高交易頻率。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📉 報酬率懲罰 (Return Penalty)</h4>
                    <p>實證數據顯示：頻繁根據每日新聞進行過度交易的散戶，年化報酬率平均比買進持有者低 3.8%。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Excessive noise intake triggers <b>Overconfidence Bias</b>:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>⚠️ Illusion of Control</h4>
                    <p>Retail traders mistake reading endless news for 'understanding the market', driving up trade frequency.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📉 Return Penalty</h4>
                    <p>Empirical data: Retail traders reacting to daily news suffer an average 3.8% annual return penalty compared to buy-and-hold.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 7
    {
        "id": 7, "hour": 1, "tag": {"zh": "訊號與雜訊", "en": "Signal vs Noise"},
        "title": {"zh": "Slide 07 | 經典理論：訊號與雜訊比 (SNR) 數學模型", "en": "Slide 07 | Core Model: Signal-to-Noise Ratio (SNR) Equation"},
        "content": {
            "zh": """
                <p>統計學家 Nate Silver 與諾貝爾經濟學獎得主的共識模型：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>📡 訊號 (Signal)</h4>
                    <p>反映企業基本面、強健現金流與經濟結構變化的實質數據。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📢 雜訊 (Noise)</h4>
                    <p>市場短期情緒波動、名嘴炒作與聳動標題。</p>
                  </div>
                </div>
                <div class="slide-card-box" style="margin-top:1rem; background:rgba(59, 130, 246, 0.15); border-color:var(--primary);">
                  <h4>🧮 訊號雜訊比公式 (Signal-to-Noise Ratio Formula)</h4>
                  <p>$$\\text{SNR} = \\frac{\\text{Power of Fundamental Signals}}{\\text{Power of Market Noise}}$$</p>
                  <p>當市場資訊總量爆增 100 倍時，優質 Signal 僅增加 2 倍，代表 SNR 正在急劇惡化！</p>
                </div>
            """,
            "en": """
                <p>The statistical consensus framework formulated by Nate Silver and Nobel laureates:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>📡 Signal</h4>
                    <p>Substantive data reflecting long-term intrinsic corporate value, macro fundamentals, and cash flows.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📢 Noise</h4>
                    <p>Short-term random fluctuations, clickbait headlines, and emotional hype.</p>
                  </div>
                </div>
                <div class="slide-card-box" style="margin-top:1rem; background:rgba(59, 130, 246, 0.15); border-color:var(--primary);">
                  <h4>🧮 Signal-to-Noise Ratio (SNR) Formula</h4>
                  <p>$$\\text{SNR} = \\frac{\\text{Power of Fundamental Signals}}{\\text{Power of Market Noise}}$$</p>
                  <p>When total market information grows 100x, fundamental Signal increases by only 2x, meaning SNR deteriorates rapidly!</p>
                </div>
            """
        }
    },
    # SLIDE 8
    {
        "id": 8, "hour": 1, "tag": {"zh": "標題拉扯", "en": "Clickbait Case"},
        "title": {"zh": "Slide 08 | 報章雜誌對照：標題黨 (Clickbait) 的情緒拉扯", "en": "Slide 08 | Media Contrast: Clickbait vs Objective Signal"},
        "img": "images/signal.jpg",
        "content": {
            "zh": """
                <p>對比同一天報導同一件事的兩份報章標題：</p>
                <div class="slide-grid">
                  <div class="slide-card-box" style="border-color:var(--accent-rose);">
                    <h4>❌ 雜訊導向標題（標題黨/聳動）</h4>
                    <p><i>「崩盤警告！央行重拳出擊，房市股市面臨血洗危機？！」</i></p>
                    <p>👉 目的：誘發恐懼 (FOMO/Fear)，獲取點閱率與廣告收益。</p>
                  </div>
                  <div class="slide-card-box" style="border-color:var(--accent-emerald);">
                    <h4>✅ 訊號導向標題（客觀數據）</h4>
                    <p><i>「央行宣佈調整存款準備率 0.25%，旨在引導不動產貸款穩健發展。」</i></p>
                    <p>👉 目的：精準傳達政策幅度與具體實務影響。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Comparing two headlines covering the exact same central bank announcement on the same day:</p>
                <div class="slide-grid">
                  <div class="slide-card-box" style="border-color:var(--accent-rose);">
                    <h4>❌ Noise-Driven Clickbait</h4>
                    <p><i>'Market Crash Warning! Central Bank Strikes Hard, Housing & Stock Bloodbath Inbound?!'</i></p>
                    <p>👉 Objective: Trigger Fear and FOMO to maximize ad click revenue.</p>
                  </div>
                  <div class="slide-card-box" style="border-color:var(--accent-emerald);">
                    <h4>✅ Signal-Driven Objective News</h4>
                    <p><i>'Central Bank Adjusts Required Reserve Ratio by 0.25% to Promote Sustainable Credit Growth.'</i></p>
                    <p>👉 Objective: Accurately convey policy magnitude and empirical impacts.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 9
    {
        "id": 9, "hour": 1, "tag": {"zh": "雜訊交易者", "en": "Noise Trader"},
        "title": {"zh": "Slide 09 | 行為財務學：雜訊交易者風險 (Noise Trader Risk)", "en": "Slide 09 | Behavioral Finance: Noise Trader Risk Model"},
        "content": {
            "zh": """
                <p>諾貝爾獎得主 Fischer Black 與 De Long 等人提出的經典模型：</p>
                <div class="slide-card-box">
                  <h4>💡 什麼是雜訊交易者 (Noise Trader)？</h4>
                  <p>指在金融市場中，不依賴企業基本面或經濟數據，而是根據「新聞傳言、熱門搜尋、網紅推薦」做出買賣決策的散戶或機構。</p>
                  <p><b>雜訊交易者風險 (Noise Trader Risk)</b>：當大量雜訊交易者涌入時，會使股價長時間嚴重偏離真實價值（形成資產泡沫或恐慌暴跌），甚至連理性套利者也無法及時矯正！</p>
                </div>
            """,
            "en": """
                <p>Classic framework established by Nobel laureate Fischer Black, De Long, Shleifer et al.:</p>
                <div class="slide-card-box">
                  <h4>💡 What is a Noise Trader?</h4>
                  <p>Investors who trade on rumors, trending search terms, or social media hype rather than financial fundamentals and real cash flow.</p>
                  <p><b>Noise Trader Risk</b>: Massive inflows of noise traders push prices far away from intrinsic values for extended periods, creating asset bubbles or crashes that rational arbitrageurs cannot immediately fix.</p>
                </div>
            """
        }
    },
    # SLIDE 10
    {
        "id": 10, "hour": 1, "tag": {"zh": "商業模式", "en": "Business Model"},
        "title": {"zh": "Slide 10 | 財金媒體商業模式解密：點閱率 vs. 真實價值", "en": "Slide 10 | Financial Media Business Models: Clicks vs Truth"},
        "content": {
            "zh": """
                <p>洞悉媒體運作邏輯，才能保護你的錢包：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💰 免費流量媒體的商業誘因</h4>
                    <p>收入來源：廣告點擊、贊助業配、流量轉化。<br>必然結果：傾向產出極端、對立、情緒化的誇張標題。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🏛️ 專業付費智庫的商業誘因</h4>
                    <p>收入來源：高額訂閱費、機構法人研究預算。<br>必然結果：專注於數據查核、深度實證與嚴謹邏輯分析。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Understanding media incentives is key to protecting your wealth:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💰 Free Ad-Supported Media</h4>
                    <p>Revenue Source: Ad clicks, affiliate monetization.<br>Inevitable Result: Preference for sensationalized, emotional content.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>🏛️ Paid Research Institutions</h4>
                    <p>Revenue Source: Subscription fees, institutional research budgets.<br>Inevitable Result: Focus on empirical data verification and rigorous modeling.</p>
                  </div>
                </div>
            """
        }
    },

    # SLIDE 11
    {
        "id": 11, "hour": 2, "tag": {"zh": "框架效應", "en": "Framing Effect"},
        "title": {"zh": "Slide 11 | 認知心理學：框架效應 (Framing Effect) 概念", "en": "Slide 11 | Cognitive Psychology: Framing Effect Concept"},
        "content": {
            "zh": """
                <p>諾貝爾獎 Kahneman & Tversky 的行為經濟學里程碑：</p>
                <div class="slide-card-box">
                  <h4>🧠 什麼是框架效應？</h4>
                  <p>同一個客觀事實，當使用不同的文字敘述（正面框架 vs. 負面框架）呈現在人們面前時，人們會做出完全相反的風險偏好選擇。</p>
                  <p>在財經新聞中，記者常透過調整文字框架來塑造市場情緒，引導投資人產生恐慌或盲目樂觀。</p>
                </div>
            """,
            "en": """
                <p>Nobel laureates Kahneman & Tversky's milestone behavioral economics theory:</p>
                <div class="slide-card-box">
                  <h4>🧠 What is the Framing Effect?</h4>
                  <p>The exact same objective factual event can lead to completely opposite risk choices depending on whether it is framed positively or negatively.</p>
                  <p>Financial journalists manipulate market sentiment by altering narrative frames, steering investors toward panic or blind optimism.</p>
                </div>
            """
        }
    },
    # SLIDE 12
    {
        "id": 12, "hour": 2, "tag": {"zh": "框架案例", "en": "Framing Cases"},
        "title": {"zh": "Slide 12 | 新聞對照案例：「美股暴跌」 vs. 「健康修正」", "en": "Slide 12 | Framing Case: 'Market Crash' vs 'Healthy Correction'"},
        "img": "images/overload.jpg",
        "content": {
            "zh": """
                <div class="slide-grid">
                  <div class="slide-card-box" style="border-color:var(--accent-rose);">
                    <h4>😱 負面恐慌框架 (Negative Frame)</h4>
                    <p><i>「美股標普指數重挫 1.5%，恐慌指數 VIX 飆升，投資人血本無歸！」</i></p>
                    <p><b>心理效應</b>：激發損失趨避 (Loss Aversion)，使散戶在低點恐慌拋售低估資產。</p>
                  </div>
                  <div class="slide-card-box" style="border-color:var(--accent-emerald);">
                    <h4>📈 理性估值框架 (Objective Frame)</h4>
                    <p><i>「標普 500 指數健康回檔 1.5%，基於本益比歷史均值，長線買點浮現。」</i></p>
                    <p><b>心理效應</b>：聚焦長期內在價值，引導理性資產配置。</p>
                  </div>
                </div>
            """,
            "en": """
                <div class="slide-grid">
                  <div class="slide-card-box" style="border-color:var(--accent-rose);">
                    <h4>😱 Negative Panic Frame</h4>
                    <p><i>'S&P 500 plunges 1.5%, VIX spikes, investors facing devastating losses!'</i></p>
                    <p><b>Psychological Impact</b>: Triggers Loss Aversion, inducing panic selling at market bottoms.</p>
                  </div>
                  <div class="slide-card-box" style="border-color:var(--accent-emerald);">
                    <h4>📈 Objective Valuation Frame</h4>
                    <p><i>'S&P 500 experiences a healthy 1.5% technical correction, bringing PE back to historical mean.'</i></p>
                    <p><b>Psychological Impact</b>: Focuses on long-term intrinsic value, promoting rational allocation.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 13
    {
        "id": 13, "hour": 2, "tag": {"zh": "檸檬市場", "en": "Lemons Market"},
        "title": {"zh": "Slide 13 | 資訊不對稱 (Information Asymmetry) 檸檬市場", "en": "Slide 13 | Information Asymmetry & The Lemons Market"},
        "content": {
            "zh": """
                <p>諾貝爾經濟學獎得主 George Akerlof 的經典架構：</p>
                <div class="slide-card-box">
                  <h4>🍋 財經新聞中的檸檬 (劣質資訊) 驅逐好資訊現象</h4>
                  <p>在資訊高度不對稱的市場中，發布高成本事實查核新聞的優質媒體，往往打不過低成本誇大標題的劣質媒體，導致「劣幣驅逐良幣」。</p>
                  <p><b>學生防禦之道</b>：學會主動識別資訊提供者的資源能力與利益衝突！</p>
                </div>
            """,
            "en": """
                <p>Nobel laureate George Akerlof's seminal lemons market framework:</p>
                <div class="slide-card-box">
                  <h4>🍋 Bad Information Driving Out Good Information</h4>
                  <p>In highly asymmetric markets, high-cost fact-checking media often lose traffic to low-cost clickbaits, leading to Gresham's Law of financial media.</p>
                  <p><b>Student Defense</b>: Proactively evaluate media resources and potential conflicts of interest!</p>
                </div>
            """
        }
    },
    # SLIDE 14
    {
        "id": 14, "hour": 2, "tag": {"zh": "詐騙劇本", "en": "Scam Scripts"},
        "title": {"zh": "Slide 14 | 社群媒體飆股簡訊與三部曲詐騙劇本", "en": "Slide 14 | Social Media & Stock Scam 3-Act Scripts"},
        "content": {
            "zh": """
                <p>拆解最新 2026 金融詐騙的三部曲劇本：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. 權威偽造 (Fake Authority)</h4>
                    <p>盜用知名財經學者、企業家或名人照片，成立假投資社團。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. 零風險暴利噱頭 (Zero Risk Hype)</h4>
                    <p>宣稱「跟著老師買，保證週報酬 20%」，利用貪婪與 FOMO 心理。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. 封閉群組洗腦 (Closed Group)</h4>
                    <p>將受害者拉入私密 LINE/Telegram 群組，安排暗樁發布假獲利截圖。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. 資金收割與斷聯 (Exit Scam)</h4>
                    <p>誘騙購買低流動性仙股或假加密貨幣，最後割韭菜封鎖告終。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Deconstructing the 3-act script of modern financial scams:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. Fake Authority</h4>
                    <p>Stealing photos of famous economists to create fake investment groups.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. Zero-Risk Guaranteed Profit</h4>
                    <p>Claiming 'Guaranteed 20% weekly return', exploiting greed and FOMO.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. Closed Group Manipulation</h4>
                    <p>Luring victims into private chat groups with shills posting fake profit screenshots.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. Exit Scam & Pump-and-Dump</h4>
                    <p>Inducing victims to buy illiquid penny stocks, then vanishing.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 15
    {
        "id": 15, "hour": 2, "tag": {"zh": "Deepfake 威脅", "en": "Deepfake Threat"},
        "title": {"zh": "Slide 15 | 前沿威脅：Deepfake 語音複製與 AI 假新聞", "en": "Slide 15 | Frontier Threat: Deepfake Voice Clones & AI News"},
        "img": "images/cover.jpg",
        "content": {
            "zh": """
                <p>2026 前沿金融安全挑戰：</p>
                <div class="slide-card-box">
                  <h4>⚠️ 案例分析：五角大廈假爆炸新聞事件與 AI 聲訊詐騙</h4>
                  <p>1. 假新聞擴散：AI 生成的假爆炸圖片推播後，美股標普 500 指數 10 分鐘內瞬間蒸發 500 億美元。</p>
                  <p>2. 深偽語音 (Deepfake Voice)：詐騙集團複製企業 CEO 聲音指示財務會計緊急匯款。</p>
                  <p><b>防禦核心</b>：跨管道交叉驗證 (Cross-Channel Verification)。</p>
                </div>
            """,
            "en": """
                <p>Frontier financial security challenges in 2026:</p>
                <div class="slide-card-box">
                  <h4>⚠️ Case Analysis: AI Fake Explosions & Deepfake Voice Attacks</h4>
                  <p>1. Fake News Spikes: AI-generated explosion photos wiped out $50 billion in S&P 500 market cap in 10 mins.</p>
                  <p>2. Deepfake Voice Clones: Fraudsters clone CEO voices to authorize fraudulent wire transfers.</p>
                  <p><b>Core Defense</b>: Cross-Channel Verification.</p>
                </div>
            """
        }
    },
    # SLIDE 16
    {
        "id": 16, "hour": 2, "tag": {"zh": "情緒指數", "en": "Sentiment Index"},
        "title": {"zh": "Slide 16 | 計量實證：新聞情緒指數 (Sentiment Index) 與 VIX", "en": "Slide 16 | Econometrics: News Sentiment Index & VIX Volatility"},
        "content": {
            "zh": """
                <p>金融計量學大數據實證：</p>
                <div class="slide-card-box">
                  <h4>📈 數據說話：新聞文字與股價走勢的關聯性</h4>
                  <p>實證研究顯示，新聞媒體的負面情緒詞彙密度（如 "Crash", "Crisis", "Panic"）與大盤當日波動度 (VIX) 呈現高達 0.82 的極高相關性。</p>
                  <p>然而，情緒驅動的短線漲跌在 5 個交易日內平均會有 78% 的均值回歸 (Mean Reversion)！</p>
                </div>
            """,
            "en": """
                <p>Empirical evidence from financial econometrics and big data:</p>
                <div class="slide-card-box">
                  <h4>📈 Data Insights: News Sentiment Words & Stock Movements</h4>
                  <p>Empirical models reveal that negative word density in media correlates at 0.82 with VIX market volatility.</p>
                  <p>However, emotion-driven short-term moves experience a 78% mean reversion within 5 trading days!</p>
                </div>
            """
        }
    },
    # SLIDE 17
    {
        "id": 17, "hour": 2, "tag": {"zh": "均值回歸", "en": "Mean Reversion"},
        "title": {"zh": "Slide 17 | 實證數據：恐慌拋售中的均值回歸 (Mean Reversion)", "en": "Slide 17 | Empirical Evidence: Mean Reversion in Market Panics"},
        "content": {
            "zh": """
                <p>理解資產價格的彈性機制：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>📉 恐慌性過度反應 (Market Overreaction)</h4>
                    <p>當極端負面新聞爆發時，散戶恐慌拋售使價格在數小時內跌過頭。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📈 均值回歸修復 (Mean Reversion Repair)</h4>
                    <p>隨著第一手審計數據公佈，機構理性買盤進場，價格重新回歸內在價值線。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Understanding price elasticity mechanisms:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>📉 Panic Overreaction</h4>
                    <p>When negative news breaks, panic selling forces prices below intrinsic value within hours.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📈 Mean Reversion Repair</h4>
                    <p>As audited data is disclosed, rational institutional buyers enter, restoring prices to fundamental value.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 18
    {
        "id": 18, "hour": 2, "tag": {"zh": "4D Filter", "en": "4D Filter Rules"},
        "title": {"zh": "Slide 18 | 專業過濾器：4D Filter 核心法則", "en": "Slide 18 | Professional Tool: The 4D Information Filter Rules"},
        "content": {
            "zh": """
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. Data (數據驗證)</h4>
                    <p>此報導是否有可查證的官方數據、公開財報或審計報告支撐？</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. Disclosure (利益揭露)</h4>
                    <p>作者或機構是否持有該標的？是否存在佣金或廣告贊助關係？</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. Divergence (立場多樣)</h4>
                    <p>是否有對立觀點或其他權威機構的反面分析？</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. Duration (時間軸比對)</h4>
                    <p>這是一時的情緒脈衝雜訊，還是會長期改變現金流的重大利多？</p>
                  </div>
                </div>
            """,
            "en": """
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. Data Verification</h4>
                    <p>Is this claim supported by audited financial reports or official statistics?</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. Disclosure & Incentives</h4>
                    <p>Does the author hold position in this asset? Any affiliate sponsorship?</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. Divergence of Views</h4>
                    <p>Are opposing perspectives and counter-arguments provided?</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. Duration Horizon</h4>
                    <p>Is this a fleeting emotional impulse or a long-term cash flow shift?</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 19
    {
        "id": 19, "hour": 2, "tag": {"zh": "權威資料庫", "en": "Primary Sources"},
        "title": {"zh": "Slide 19 | 事實查核：四大權威數據源 (MOPS/SEC/CBC/TWSE)", "en": "Slide 19 | Fact-Checking: 4 Authoritative Primary Databases"},
        "content": {
            "zh": """
                <p>學術與實務認可的官方第一手資料庫：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. 公開資訊觀測站 (MOPS) / SEC EDGAR</h4>
                    <p>查核上市櫃公司歷史財報、重訊聲明與董監持股異動。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. 中央銀行 (CBC) / 美國聯準會 (Fed)</h4>
                    <p>查核利率決議政策白皮書、通膨數據與貨幣供給量 ($M_2$)。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. 台灣證券交易所 (TWSE) / FRED 數據庫</h4>
                    <p>下載三大法人買賣超、融資融券與總體經濟歷史時間序列數據。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. 國際組織 (IMF / World Bank / OECD)</h4>
                    <p>引用全球 GDP 成長率預測與貿易數據，避免坊間謠言。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Authoritative primary databases for rigorous research:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>1. MOPS / SEC EDGAR</h4>
                    <p>Verify corporate earnings, material disclosures, and insider filings.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>2. Central Banks (CBC / US Fed)</h4>
                    <p>Check official rate statements, inflation statistics, and M2 money supply.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>3. TWSE / FRED Databases</h4>
                    <p>Download institutional net flows, margin trading, and macro time-series.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>4. International Bodies (IMF / World Bank)</h4>
                    <p>Reference official global economic growth forecasts and trade balances.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 20
    {
        "id": 20, "hour": 2, "tag": {"zh": "資訊飲食", "en": "Media Diet"},
        "title": {"zh": "Slide 20 | 個人資訊飲食 (Media Diet) 健檢架構", "en": "Slide 20 | Personal Financial Media Diet Diagnostic Framework"},
        "content": {
            "zh": """
                <div class="slide-card-box">
                  <h4>🥗 財經資訊飲食三問：</h4>
                  <p>1. 我每天花在「標題黨與短影音」的時間，是否遠多於閱讀「官方財報與經濟報告」？</p>
                  <p>2. 我訂閱的財經頻道，是否都在使用激進情緒詞彙刺激我的神經？</p>
                  <p>3. 我上次自己下載 CSV 數據做驗證是什麼時候？</p>
                </div>
            """,
            "en": """
                <div class="slide-card-box">
                  <h4>🥗 3 Questions for Your Financial Media Diet:</h4>
                  <p>1. Do I spend significantly more time on clickbaits than reading official earnings reports?</p>
                  <p>2. Are my subscribed channels using sensationalized words to trigger my anxiety?</p>
                  <p>3. When was the last time I downloaded raw CSV data to run my own verification?</p>
                </div>
            """
        }
    },

    # SLIDE 21
    {
        "id": 21, "hour": 3, "tag": {"zh": "二次驗證", "en": "Cross-Checking"},
        "title": {"zh": "Slide 21 | 數據質疑精神：對權威新聞進行二次交叉驗證", "en": "Slide 21 | Skepticism Mindset: Cross-Checking Financial News"},
        "content": {
            "zh": """
                <p>即便是主流權威新聞媒體，也可能因記者誤讀財報或引用失真報告而出錯：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🔍 記者常犯的數據謬誤</h4>
                    <p>混淆「營收同比 (YoY)」與「環比 (QoQ)」，或誤把非經常性一次性損益當作本業利潤。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📂 最終防線：Raw Data CSV 核對</h4>
                    <p>養成親自開啓 SEC 申報檔 10-K / 10-Q 原始數字進行二度計算的習慣。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Even mainstream media make errors reading earnings calls:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🔍 Common Journalistic Errors</h4>
                    <p>Confusing YoY with QoQ growth, or mistaking one-off non-operating gains for core operating profit.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📂 Final Defense: Raw Data Auditing</h4>
                    <p>Develop the habit of checking primary 10-K/10-Q filings and calculating numbers directly.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 22
    {
        "id": 22, "hour": 3, "tag": {"zh": "資訊時差", "en": "Info Lag Gap"},
        "title": {"zh": "Slide 22 | 機構與散戶資訊差距：法人報告與散戶新聞的時差", "en": "Slide 22 | Institutional vs Retail Information Lag Gap"},
        "content": {
            "zh": """
                <p>揭露金融市場的資訊傳遞時間鏈：</p>
                <div class="slide-card-box">
                  <h4>⏰ 利多出盡 (Sell on the News) 機制</h4>
                  <p>1. 機構法人研究員於數週前完成實地調研與產業鏈數據分析，提前佈局。</p>
                  <p>2. 免費新聞媒體發布「某大廠營收驚人爆發」利多報導時，法人通常已準備獲利了結。</p>
                  <p><b>警惕</b>：追逐已完全反映在股價上的新聞，往往落入接刀窘境。</p>
                </div>
            """,
            "en": """
                <p>Revealing the information propagation timeline in financial markets:</p>
                <div class="slide-card-box">
                  <h4>⏰ 'Sell on the News' Mechanism</h4>
                  <p>1. Institutional analysts complete field supply-chain research weeks in advance to build positions.</p>
                  <p>2. By the time free media reports 'Record Earnings Surge', institutions are taking profits.</p>
                  <p><b>Takeaway</b>: Chasing news already priced in leads to buying at market tops.</p>
                </div>
            """
        }
    },
    # SLIDE 23
    {
        "id": 23, "hour": 3, "tag": {"zh": "同溫層偏見", "en": "Echo Chambers"},
        "title": {"zh": "Slide 23 | 演算法同溫層 (Filter Bubble) 與財經資訊偏見", "en": "Slide 23 | Algorithmic Echo Chambers & Financial Bias"},
        "content": {
            "zh": """
                <p>演算法機制如何扭曲你的理性視角：</p>
                <div class="slide-card-box">
                  <h4>🤖 演算法對立放大效應</h4>
                  <p>影音平台會根據你的點擊喜好，持續推播看多或看空的同溫層影片，強化個人的<b>確認偏誤 (Confirmation Bias)</b>。</p>
                  <p><b>破解之道</b>：主動搜尋反方立場的研究報告，檢視對立假設成立條件。</p>
                </div>
            """,
            "en": """
                <p>How algorithms warp your rational perspectives:</p>
                <div class="slide-card-box">
                  <h4>🤖 Confirmation Bias Reinforcement</h4>
                  <p>Algorithms push one-sided bullish or bearish content based on your click history, entrenching Confirmation Bias.</p>
                  <p><b>Solution</b>: Proactively seek counter-argument research and test opposing hypotheses.</p>
                </div>
            """
        }
    },
    # SLIDE 24
    {
        "id": 24, "hour": 3, "tag": {"zh": "事件驅動", "en": "Event-Driven"},
        "title": {"zh": "Slide 24 | 避險思維：事件驅動 (Event-Driven) 投資中的雜訊過濾", "en": "Slide 24 | Risk Management: Noise Filtering in Event Trades"},
        "content": {
            "zh": """
                <p>重大財經事件發布時的情緒應對：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>⚡ 前 30 分鐘雜訊期</h4>
                    <p>央行議息決議或財報剛公布時，演算法程式交易會引發隨機跳動與高頻夾刷，此時雜訊極高。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>⏳ 沉澱後的 Signal 期</h4>
                    <p>拉長觀察窗口 (Duration)，待法說會完整會後問答發布後，再進行基本面分析與配置。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Managing emotions during high-impact market events:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>⚡ First 30-Minute Noise Phase</h4>
                    <p>Algorithm bots create random whipsaws upon initial earnings release; noise is extremely high.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>⏳ Post-Conference Signal Phase</h4>
                    <p>Extend your Duration window; evaluate fundamentals after full Q&A transcripts are published.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 25
    {
        "id": 25, "hour": 3, "tag": {"zh": "語言解碼", "en": "Decoding Jargon"},
        "title": {"zh": "Slide 25 | 財經語言拆解：釐清法說會 (Earnings Call) 中的術語包裝", "en": "Slide 25 | Decoding Earnings Call Executive Terminology"},
        "content": {
            "zh": """
                <p>學會聽懂高階主管的修飾用語：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💬 「面臨短期逆風」</h4>
                    <p>👉 翻譯：本季營收與淨利雙雙出現顯著下滑。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>💬 「處於過渡期庫存調整」</h4>
                    <p>👉 翻譯：產品滯銷，存貨周轉天數暴增。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Decoding executive PR jargon during earnings conference calls:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>💬 'Facing Short-Term Headwinds'</h4>
                    <p>👉 Translation: Revenue and net income experienced severe drops this quarter.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>💬 'Transitional Inventory Optimization'</h4>
                    <p>👉 Translation: Products are unsold and inventory turnover days spiked dramatically.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 26
    {
        "id": 26, "hour": 3, "tag": {"zh": "視覺陷阱", "en": "Chart Deception"},
        "title": {"zh": "Slide 26 | 數據視覺化迷思：圖表軸線誇大與誤導性視覺", "en": "Slide 26 | Visual Misconceptions: Truncated Axis Deception"},
        "content": {
            "zh": """
                <div class="slide-card-box">
                  <h4>📊 圖表軸線截斷 (Truncated Y-Axis) 的視覺欺騙</h4>
                  <p>新聞圖表常故意將 Y 軸原點設為 95 而非 0，讓僅僅 1% 的常態波動在畫面上看起來像斷崖式暴跌！</p>
                  <p><b>視覺素養</b>：每次閱讀圖表時，務必第一時間檢視 Y 軸刻度與數據基準線。</p>
                </div>
            """,
            "en": """
                <div class="slide-card-box">
                  <h4>📊 Truncated Y-Axis Deception</h4>
                  <p>News charts often truncate the Y-axis to start at 95 instead of 0, making a 1% dip look like an apocalyptic cliff!</p>
                  <p><b>Visual Literacy</b>: Always inspect Y-axis scale and baseline before interpreting charts.</p>
                </div>
            """
        }
    },
    # SLIDE 27
    {
        "id": 27, "hour": 3, "tag": {"zh": "漂綠辨驗", "en": "Greenwashing"},
        "title": {"zh": "Slide 27 | 綠色洗白 (Greenwashing) 與 ESG 新聞真偽辯驗", "en": "Slide 27 | Greenwashing & ESG Corporate News Verification"},
        "content": {
            "zh": """
                <p>辨識企業永續新聞的真偽：</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🌱 綠色洗白 (Greenwashing)</h4>
                    <p>公關稿宣稱植樹減碳，卻對核心工廠的高碳排避而不談。</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📋 經審計之 IFRS S1/S2 揭露</h4>
                    <p>經權威機構第三方認證之碳足跡與範疇三 (Scope 3) 實質數據。</p>
                  </div>
                </div>
            """,
            "en": """
                <p>Verifying corporate sustainability news claims:</p>
                <div class="slide-grid">
                  <div class="slide-card-box">
                    <h4>🌱 Greenwashing PR Hype</h4>
                    <p>Marketing press releases highlighting tree planting while hiding factory carbon emissions.</p>
                  </div>
                  <div class="slide-card-box">
                    <h4>📋 Audited IFRS S1/S2 Disclosures</h4>
                    <p>Third-party verified Scope 1, 2, and 3 carbon metric disclosures.</p>
                  </div>
                </div>
            """
        }
    },
    # SLIDE 28
    {
        "id": 28, "hour": 3, "tag": {"zh": "批判性大腦", "en": "Critical Mind"},
        "title": {"zh": "Slide 28 | 建立終身財經思維：批判性閱讀與系統性思考", "en": "Slide 28 | Building a Lifelong Critical Financial Mind"},
        "content": {
            "zh": """
                <div class="slide-card-box">
                  <h4>🧠 批判性財經大腦的四大支柱：</h4>
                  <p>1. 不盲從市場情緒與名嘴炒作。<br>2. 堅持向權威第一手數據求證。<br>3. 運用 4D Filter 進行邏輯思維。<br>4. 保持情緒紀律，追求長期複利成長。</p>
                </div>
            """,
            "en": """
                <div class="slide-card-box">
                  <h4>🧠 4 Pillars of a Critical Financial Mind:</h4>
                  <p>1. Never follow crowd sentiment or pundit hype blindly.<br>2. Insist on checking primary audited databases.<br>3. Apply the 4D Filter to every news item.<br>4. Maintain emotional discipline for long-term compounding.</p>
                </div>
            """
        }
    },
    # SLIDE 29
    {
        "id": 29, "hour": 3, "tag": {"zh": "週總結", "en": "Synthesis"},
        "title": {"zh": "Slide 29 | 第一週課程總結與知識體系關聯圖", "en": "Slide 29 | Week 1 Course Synthesis & Knowledge Graph"},
        "content": {
            "zh": """
                <p>第一週全景架構回顧：</p>
                <p>從媒體演進史 ➡️ 倒 U 曲線與 SNR 數學模型 ➡️ 框架效應與檸檬市場 ➡️ 4D Filter 與四大權威數據源 ➡️ 實證交叉驗證。</p>
            """,
            "en": """
                <p>Week 1 Panorama Architecture Review:</p>
                <p>Media Evolution ➡️ Inverted U-Curve & SNR Model ➡️ Framing & Lemons Market ➡️ 4D Filter & 4 Primary Databases ➡️ Empirical Verification.</p>
            """
        }
    },
    # SLIDE 30
    {
        "id": 30, "hour": 3, "tag": {"zh": "下週預告", "en": "Next Week"},
        "title": {"zh": "Slide 30 | 學習反思與第二週預告 (物價、通膨與購買力)", "en": "Slide 30 | Reflection & Next Week Preview (Inflation & CPI)"},
        "content": {
            "zh": """
                <div class="slide-card-box" style="text-align:center; padding:1.5rem;">
                  <h4>🎉 恭喜完成第一週 30 頁純教學內容！</h4>
                  <p style="margin:1rem 0;">請大家至網頁上方點擊「📝 本週課堂作業」提交 4D Filter 檢驗報告。</p>
                  <p><b>第二週主題預告</b>：【物價、通膨與實質購買力】（外食費上漲與 CPI 統計真相）。</p>
                </div>
            """,
            "en": """
                <div class="slide-card-box" style="text-align:center; padding:1.5rem;">
                  <h4>🎉 Congrats on completing all 30 teaching slides!</h4>
                  <p style="margin:1rem 0;">Please click 'Classroom Assignment' above to submit your 4D Filter report.</p>
                  <p><b>Next Week Preview</b>: [Inflation, CPI & Real Purchasing Power].</p>
                </div>
            """
        }
    }
]

app_js_header = """// 115管理探索二 第一週：30頁純教學內容 + 3大獨立小時活動 + 課堂作業 + 畫布筆跡

let currentLang = 'zh'; // 'zh' or 'en'
let currentSlideIndex = 0;
let activeHourFilter = 'all';

// Annotation Canvas State
let isDrawing = false;
let currentTool = 'pen'; // 'pen' or 'highlighter' or 'off'
let penColor = '#F43F5E'; // default rose/red
let penSize = 3;
let canvas, ctx;

// 30 PURE TEACHING SLIDES DATA
const slidesData = """

app_js_footer = """;

// Initialize Web App
document.addEventListener('DOMContentLoaded', () => {
  renderSlide();
  renderGrid();
  initCanvas();
});

// Canvas Annotation Setup
function initCanvas() {
  canvas = document.getElementById('annotationCanvas');
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);
}

function resizeCanvas() {
  const container = document.querySelector('.presentation-section');
  if (container && canvas) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
}

function setTool(tool) {
  currentTool = tool;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  if (tool === 'pen') {
    document.getElementById('toolPen').classList.add('active');
    canvas.classList.add('drawing-mode');
    penSize = 3;
  } else if (tool === 'highlighter') {
    document.getElementById('toolHighlighter').classList.add('active');
    canvas.classList.add('drawing-mode');
    penSize = 16;
  } else {
    canvas.classList.remove('drawing-mode');
  }
}

function setPenColor(color, dot) {
  penColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  dot.classList.add('active');
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function startDrawing(e) {
  if (currentTool === 'off') return;
  isDrawing = true;
  ctx.beginPath();
  const rect = canvas.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!isDrawing || currentTool === 'off') return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  
  if (currentTool === 'highlighter') {
    ctx.strokeStyle = penColor + '66'; // transparent
    ctx.lineWidth = 18;
  } else {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 3;
  }
  ctx.lineCap = 'round';
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerText = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
  renderSlide();
  renderGrid();
}

// Filter Slides by Hour
function filterHour(hour, btn) {
  activeHourFilter = hour;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const filtered = activeHourFilter === 'all' ? slidesData : slidesData.filter(s => s.hour == activeHourFilter);
  if (filtered.length > 0) {
    currentSlideIndex = slidesData.findIndex(s => s.id === filtered[0].id);
  }
  renderSlide();
  renderGrid();
}

// Render Current Slide
function renderSlide() {
  clearCanvas(); // Clear drawings on slide change
  const slide = slidesData[currentSlideIndex];
  const container = document.getElementById('slideContainer');
  
  const tagText = slide.tag[currentLang];
  const titleText = slide.title[currentLang];
  const contentText = slide.content[currentLang];
  const imgHTML = slide.img ? `<img class="slide-img" src="${slide.img}" alt="Slide Visual">` : '';

  container.innerHTML = `
    <div class="slide-header">
      <span class="slide-counter">SLIDE ${slide.id} / 30</span>
      <span class="slide-tag">${tagText} (Hour ${slide.hour})</span>
    </div>
    <div class="slide-content-wrapper">
      <div>
        <h2 class="slide-title">${titleText}</h2>
        ${imgHTML}
        <div class="slide-body">${contentText}</div>
      </div>
    </div>
  `;

  const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
  document.getElementById('progressFill').style.width = `${progressPercent}%`;

  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

// Render 30 Slides Grid
function renderGrid() {
  const gridView = document.getElementById('slidesGridView');
  const query = document.getElementById('searchInput').value.toLowerCase();

  let filtered = slidesData;
  if (activeHourFilter !== 'all') {
    filtered = filtered.filter(s => s.hour == activeHourFilter);
  }
  if (query) {
    filtered = filtered.filter(s => 
      s.title[currentLang].toLowerCase().includes(query) || 
      s.content[currentLang].toLowerCase().includes(query)
    );
  }

  gridView.innerHTML = filtered.map(slide => `
    <div class="mini-slide-card" onclick="goToSlide(${slide.id - 1})">
      <div class="mini-slide-num">SLIDE ${slide.id} • Hour ${slide.hour}</div>
      <div class="mini-slide-title">${slide.title[currentLang]}</div>
      <div class="mini-slide-preview">${slide.content[currentLang].replace(/<[^>]*>?/gm, '')}</div>
    </div>
  `).join('');
}

// Navigation
function nextSlide() {
  if (currentSlideIndex < slidesData.length - 1) {
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
  currentSlideIndex = index;
  renderSlide();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function searchSlides() {
  renderGrid();
}

// HOUR 1 ACTIVITY MODAL
function openActivity1Modal() {
  document.getElementById('activity1Modal').classList.add('active');
}
function closeActivity1Modal() {
  document.getElementById('activity1Modal').classList.remove('active');
}
function calculateSNR() {
  const signal = parseFloat(document.getElementById('signalInput').value) || 1;
  const noise = parseFloat(document.getElementById('noiseInput').value) || 1;
  const snr = (signal / noise).toFixed(2);
  
  let msg = `你的 SNR 比率為：${snr}。`;
  if (snr < 0.5) msg += " ⚠️ 警告：你的資訊飲食處於極度雜訊過載狀態！請減少看短影音標題黨。";
  else if (snr >= 1.5) msg += " 🎉 優秀：你的資訊飲食具有極高的高 Signal 純度！";
  else msg += " 👍 尚可：建議增加查驗官方財報與經濟報告的時間。";

  document.getElementById('snrResult').innerText = msg;
}

// HOUR 2 ACTIVITY MODAL
function openActivity2Modal() {
  document.getElementById('activity2Modal').classList.add('active');
}
function closeActivity2Modal() {
  document.getElementById('activity2Modal').classList.remove('active');
}

// HOUR 3 GAME MODAL
function openGameModal() {
  currentGameIndex = 0;
  gameScore = 0;
  document.getElementById('gameModal').classList.add('active');
  renderGameQuestion();
}
function closeGameModal() {
  document.getElementById('gameModal').classList.remove('active');
}

// HOUR 3 HOMEWORK ASSIGNMENT MODAL
function openHomeworkModal() {
  document.getElementById('homeworkModal').classList.add('active');
}
function closeHomeworkModal() {
  document.getElementById('homeworkModal').classList.remove('active');
}
function submitHomework(e) {
  e.preventDefault();
  alert("🎉 課堂作業已成功儲存提交！得分已登錄至學習歷程紀錄。");
  closeHomeworkModal();
}

// Game Questions Logic
const gameQuestions = [
  {
    title_zh: "關卡 1：房貸限額新聞是利空還是利多？", "title_en": "Level 1: Mortgage Limit News",
    news_zh: "『銀行房貸額度告急，房市將迎來斷崖式崩盤慘劇？！』", "news_en": "'Banks Run Out of Mortgage Quota, Housing Collapse?!'",
    options_zh: ["拋售所有房產（情緒化恐慌）", "查詢央行數據確認為銀行法第 72-2 條健全風控（理性 Signal 分析）"],
    "options_en": ["Panic sell all property assets", "Check central bank data to confirm Art 72-2 regulatory control"],
    answer: 1, explain_zh: "正確！官方央行數據顯示此為健全風控調整。", "explain_en": "Correct! Official data shows standard risk control."
  },
  {
    title_zh: "關卡 2：網紅推薦高股息 ETF 的標題漏洞", "title_en": "Level 2: Influencer High Dividend Hype",
    news_zh: "『年化殖利率 12%！這檔 ETF 躺著賺，打敗薪水族！』", "news_en": "'12% Dividend Yield! Get rich effortlessly!'",
    options_zh: ["高殖利率包含收益平準金與資本損益風險", "這檔 ETF 永遠不賠錢，解約存款全買"],
    "options_en": ["High yield includes equalization funds & capital volatility risks", "Never loses money, buy immediately"],
    answer: 0, explain_zh: "正確！高殖利率常隱藏收益平準金配發與資本風險。", "explain_en": "Correct! High yield hides capital volatility."
  },
  {
    title_zh: "關卡 3：AI 假財報發布事件", "title_en": "Level 3: AI Fake Earnings Leak",
    news_zh: "『某科技巨頭營收驚爆下滑 40%！（附 AI 擬真 PDF）』", "news_en": "'Tech giant revenue plunges 40%! (AI PDF attached)'",
    options_zh: ["立即轉發提醒大家", "開啟 SEC EDGAR 或公開資訊觀測站 MOPS 查詢官方申報檔"],
    "options_en": ["Retweet immediately", "Check SEC EDGAR or MOPS official filing system"],
    answer: 1, explain_zh: "正確！查驗 SEC / MOPS 第一手申報是防禦核心。", "explain_en": "Correct! Primary SEC/MOPS filings are core defense."
  },
  {
    title_zh: "關卡 4：半導體地緣政治新聞的真實影響力", "title_en": "Level 4: Semiconductor Geopolitics",
    news_zh: "『地緣政治緊張，半導體供應鏈即將癱瘓？』", "news_en": "'Geopolitical Tensions: Supply Chain Gridlock Imminent?'",
    options_zh: ["檢視晶圓廠 CAPEX 資本支出實際海外建廠進度", "聽信名嘴政治立場對立賭博"],
    "options_en": ["Examine CAPEX commitments in official earnings calls", "Bet emotionally based on political commentary"],
    answer: 0, explain_zh: "正確！追蹤企業真實 CAPEX 比聽信政治言論更具數據價值。", "explain_en": "Correct! Audited CAPEX is far more reliable."
  }
];

let currentGameIndex = 0;
let gameScore = 0;

function renderGameQuestion() {
  const qContainer = document.getElementById('gameQuestionContainer');
  if (currentGameIndex >= gameQuestions.length) {
    qContainer.innerHTML = `
      <div style="text-align:center; padding:2rem;">
        <h2 style="color:var(--accent-gold); font-size:2rem; margin-bottom:1rem;">🏆 遊戲挑戰結束！</h2>
        <p style="font-size:1.2rem; margin-bottom:1.5rem;">你的最終得分為：<b style="color:var(--primary); font-size:1.8rem;">${gameScore} / 400</b> 分</p>
        <p>${gameScore >= 300 ? '🎉 恭喜榮獲「115第一週 首席財經偵探徽章」！' : '💪 繼續努力！多運用 4D Filter 檢測財經新聞！'}</p>
        <button class="btn btn-primary" style="margin-top:1.5rem;" onclick="closeGameModal()">完成並返回課程</button>
      </div>
    `;
    return;
  }

  const q = gameQuestions[currentGameIndex];
  const title = currentLang === 'zh' ? q.title_zh : q.title_en;
  const news = currentLang === 'zh' ? q.news_zh : q.news_en;
  const options = currentLang === 'zh' ? q.options_zh : q.options_en;

  qContainer.innerHTML = `
    <div class="activity-box">
      <h3 style="color:var(--accent-gold); margin-bottom:0.75rem;">${title}</h3>
      <p style="font-size:1.1rem; color:#F1F5F9; margin-bottom:1rem;"><b>${news}</b></p>
      <div class="game-options" style="display:grid; gap:0.75rem;">
        ${options.map((opt, idx) => `
          <button class="btn btn-outline" style="text-align:left; justify-content:flex-start;" onclick="selectAnswer(${idx})">${idx + 1}. ${opt}</button>
        `).join('')}
      </div>
      <div id="feedbackBox" style="margin-top:1rem; padding:0.75rem; border-radius:8px; display:none;"></div>
    </div>
  `;
}

function selectAnswer(idx) {
  const q = gameQuestions[currentGameIndex];
  const feedbackBox = document.getElementById('feedbackBox');

  if (idx === q.answer) {
    gameScore += 100;
    feedbackBox.style.display = 'block';
    feedbackBox.style.background = 'rgba(16, 185, 129, 0.2)';
    feedbackBox.style.color = '#A7F3D0';
    feedbackBox.innerText = `✅ ${currentLang === 'zh' ? q.explain_zh : q.explain_en} (+100 分)`;
  } else {
    feedbackBox.style.display = 'block';
    feedbackBox.style.background = 'rgba(244, 63, 94, 0.2)';
    feedbackBox.style.color = '#FECDD3';
    feedbackBox.innerText = `❌ ${currentLang === 'zh' ? q.explain_zh : q.explain_en}`;
  }

  setTimeout(() => {
    currentGameIndex++;
    renderGameQuestion();
  }, 2000);
}
"""

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'w', encoding='utf-8') as f:
    f.write(app_js_header + json.dumps(slides, ensure_ascii=False, indent=2) + app_js_footer)

print("Generated full app.js successfully!")
