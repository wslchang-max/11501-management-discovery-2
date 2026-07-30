import json

def build_w2_app_js():
    # 30 pure teaching slides data for Week 2: Inflation, CPI & Real Purchasing Power
    slides = [
        # SLIDE 1
        {
            "id": 1, "hour": 1, "tag": {"zh": "單元導論", "en": "Unit Introduction"},
            "title": {"zh": "Slide 01 | 第二週課程導論：物價、通膨與實質購買力", "en": "Slide 01 | Introduction: Inflation, CPI & Real Purchasing Power"},
            "img": "images/w2_cover.jpg",
            "content": {
                "zh": """
                    <p>歡迎來到第二週「管理探索二」。本週我們將深入探討影響每個人口袋資產的最核心議題——<b>「物價、通膨與實質購買力」</b>。</p>
                    <p>你是否有感覺：十年前一個排骨便當 70 元，現在動輒 120 元以上？明明薪水稍微調升，買東西卻感覺越來越拮据？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 核心疑問</h4>
                            <p>為什麼物價總是回不去？政府公佈的 CPI 消費者物價指數年增率 2%，為什麼與一般民眾感受到的 10% 漲幅有巨大落差？</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 本週學習目標</h4>
                            <p>拆解 CPI 權數公式、識別隱形縮性通膨 (Shrinkflation)、掌握費雪效應與實質利率，並打造個人的抗通膨資產配置。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Welcome to Week 2 of Financial Exploration II. Today we dive into the core factor affecting your wealth: <b>Inflation & Real Purchasing Power</b>.</p>
                    <p>Do you feel that your money buys less today than 5 years ago? While nominal wages rise slightly, real purchasing power often drops.</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 Key Question</h4>
                            <p>Why is there a huge gap between official CPI statistics (e.g. 2%) and perceived daily price hikes (10%+)?</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 Learning Objectives</h4>
                            <p>Decode CPI weighting formulas, spot Shrinkflation traps, master the Fisher Equation, and build anti-inflation portfolios.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 2
        {
            "id": 2, "hour": 1, "tag": {"zh": "架構總覽", "en": "Learning Roadmap"},
            "title": {"zh": "Slide 02 | 第二週 3 小時學習地圖與核心技能樹", "en": "Slide 02 | 3-Hour Roadmap & Core Skill Tree"},
            "content": {
                "zh": """
                    <p>本週 3 小時（共 180 分鐘）課程分為三大核心階段：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>第一小時：通膨感知與 CPI 結構</h4>
                            <p>• 便當與外食費 10 年時間序列<br>• CPI 指數計算公式與籃子權數<br>• 總體通膨 vs. 核心通膨 (Core CPI)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>第二小時：隱形通膨與理論模型</h4>
                            <p>• 縮性通膨 (Shrinkflation) 隱形吃錢術<br>• 品質調整 (Hedonic Adjustment) 爭議<br>• 費雪效應 ($r = i - \\pi$) 與通膨稅</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>第三小時：實證數據與資產防禦</h4>
                            <p>• 主計總處 CPI 原始數據庫實查<br>• 全球央行 2% 通膨目標對決<br>• 4大抗通膨資產（黃金/房產/TIPS/股票）</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Our 3-hour learning roadmap for Week 2 is structured as follows:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>Hour 1: Inflation Perception & CPI</h4>
                            <p>• 10-year meal price time series<br>• CPI basket & Laspeyres index formula<br>• Headline CPI vs Core CPI</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>Hour 2: Hidden Inflation & Models</h4>
                            <p>• Shrinkflation weight-reduction traps<br>• Hedonic quality adjustment debates<br>• Fisher Effect ($r = i - \\pi$) & Inflation Tax</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>Hour 3: Empirical Data & Asset Protection</h4>
                            <p>• DGBAS CPI database live verification<br>• Central Bank 2% Inflation Target<br>• Anti-inflation assets (Gold, TIPS, Real Estate)</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 3
        {
            "id": 3, "hour": 1, "tag": {"zh": "生活實戰", "en": "Daily Experience"},
            "title": {"zh": "Slide 03 | 便當與外食費漲價體驗：10年價格時間序列", "en": "Slide 03 | Meal Price Hikes: 10-Year Time Series Analysis"},
            "content": {
                "zh": """
                    <p>通膨不是抽象的教科書名詞，而是每天發生在生活中的實體感受：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🍱 台灣外食費時間序列 (2016-2026)</h4>
                            <p>• 2016 年：傳統排骨便當平均 75 元<br>• 2021 年：攀升至 90 元 (漲幅 20%)<br>• 2026 年：突破 125 元 (累積漲幅高達 66.7%)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 實質薪資成長落差</h4>
                            <p>同期名目經常性薪資僅成長 18.5%，外食費漲幅為薪資成長率的 3.6 倍，導致民眾產生強烈的「體感通膨危機」。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Inflation is not an abstract concept; it directly hits daily expenses:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🍱 Taiwan Meal Prices (2016-2026)</h4>
                            <p>• 2016: Average bento meal NT$ 75<br>• 2021: Climbed to NT$ 90 (+20%)<br>• 2026: Exceeded NT$ 125 (+66.7% cumulative)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 Real Wage Lag</h4>
                            <p>Nominal wages grew only 18.5% in the same period. Food inflation outpaced wage growth by 3.6x, causing severe perceived inflation.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 4
        {
            "id": 4, "hour": 1, "tag": {"zh": "CPI公式", "en": "CPI Formula"},
            "title": {"zh": "Slide 04 | 消費者物價指數 (CPI) 計算公式與基期概念", "en": "Slide 04 | Consumer Price Index (CPI) Formula & Base Year"},
            "content": {
                "zh": """
                    <p>消費者物價指數 (CPI) 是衡量一籃子固定商品與服務價格變動的加權指數：</p>
                    <p>學術公式採拉斯皮爾斯 (Laspeyres) 加權綜合指數：</p>
                    $$\\text{CPI}_t = \\frac{\\sum (P_{it} \\times Q_{i0})}{\\sum (P_{i0} \\times Q_{i0})} \\times 100$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 符號說明</h4>
                            <p>$P_{it}$：第 $t$ 期第 $i$ 項商品價格；$P_{i0}$：基期價格；$Q_{i0}$：基期購買數量。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 通膨率 (Inflation Rate) 計算</h4>
                            <p>通膨率即為 CPI 年增率：$$\\text{Inflation Rate} = \\frac{\\text{CPI}_t - \\text{CPI}_{t-1}}{\\text{CPI}_{t-1}} \\times 100\\%$$</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>The Consumer Price Index (CPI) measures the price changes of a representative consumption basket using the Laspeyres index:</p>
                    $$\\text{CPI}_t = \\frac{\\sum (P_{it} \\times Q_{i0})}{\\sum (P_{i0} \\times Q_{i0})} \\times 100$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Component Definitions</h4>
                            <p>$P_{it}$: Price of item $i$ in period $t$; $P_{i0}$: Base year price; $Q_{i0}$: Base year quantity.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 Inflation Rate Formula</h4>
                            <p>$$\\text{Inflation Rate} = \\frac{\\text{CPI}_t - \\text{CPI}_{t-1}}{\\text{CPI}_{t-1}} \\times 100\\%$$</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 5
        {
            "id": 5, "hour": 1, "tag": {"zh": "CPI籃子", "en": "CPI Basket"},
            "title": {"zh": "Slide 05 | CPI 消費籃子權數揭密：為何大眾感受落差巨大？", "en": "Slide 05 | CPI Weight Breakdown: Why Perceptions Diverge?"},
            "img": "images/w2_cpi.jpg",
            "content": {
                "zh": """
                    <p>主計總處調查約 368 個查價項目，分為 7 大類別加權計算：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📊 主要權數結構 (台灣範例)</h4>
                            <p>1. 食物類 (約 25.4%): 購買頻率極高<br>2. 居住類 (約 22.7%): 房租與水電<br>3. 交通通訊類 (約 14.2%)<br>4. 醫藥保健與娛樂等 (約 37.7%)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔍 落差主因：購買頻率偏誤 (Frequency Bias)</h4>
                            <p>民眾天天買外食（頻率高），對便當漲 10% 印象深刻；但 3-5 年才買一次的 3C 電子產品降價，權數卻拉低了總體 CPI，導致統計數字低於體感。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Official CPI tracks ~368 items divided into 7 main categories:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📊 Main Weight Distribution (Taiwan Example)</h4>
                            <p>1. Food & Non-Alcoholic (25.4%)<br>2. Housing & Utilities (22.7%)<br>3. Transportation (14.2%)<br>4. Healthcare, Education, Entertainment (37.7%)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔍 Frequency Bias</h4>
                            <p>Daily food purchases (high frequency) make food price hikes prominent, while infrequently bought electronics price drops drag down overall CPI.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 6
        {
            "id": 6, "hour": 1, "tag": {"zh": "核心通膨", "en": "Core CPI"},
            "title": {"zh": "Slide 06 | 總體通膨 vs. 核心通膨 (Core CPI) 解密", "en": "Slide 06 | Headline CPI vs Core CPI Explained"},
            "content": {
                "zh": """
                    <p>央行貨幣政策主要關注「核心通膨」，而非媒體報導的「總體通膨」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌾 總體通膨 (Headline CPI)</h4>
                            <p>包含所有消費項目。極易受到颱風（蔬菜暴漲）或地緣政治（原油暴漲暴跌）影響，屬於短線高波動數據。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 核心通膨 (Core CPI)</h4>
                            <p><b>扣除波動劇烈的蔬果與能源價格</b>。能反映經濟體長期的真實供需失衡與黏性物價 (Sticky Prices)，為央行升降息的核心依據。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Central banks rely primarily on Core CPI rather than Headline CPI when setting interest rate policy:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌾 Headline CPI</h4>
                            <p>Includes all items. Highly volatile due to weather shocks (vegetables) and geopolitical oil price spikes.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 Core CPI</h4>
                            <p><b>Excludes volatile fresh food & energy</b>. Reflects sticky prices and long-term monetary pressure, serving as the benchmark for central bank policy.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 7
        {
            "id": 7, "hour": 1, "tag": {"zh": "購買力蒸發", "en": "Purchasing Power"},
            "title": {"zh": "Slide 07 | 實質購買力蒸發體驗：72 法則與複利效果", "en": "Slide 07 | Purchasing Power Decay & The Rule of 72"},
            "content": {
                "zh": """
                    <p>通膨是極具破壞力的「隱形財產扣押」：</p>
                    <p>運用 72 法則估算資產實質購買力減半所需年數：</p>
                    $$\\text{Years to Halve Purchasing Power} \\approx \\frac{72}{\\text{Inflation Rate (\\%)}}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 72 法則實算（若通膨率為 3.6%）</h4>
                            <p>$$\\frac{72}{3.6} = 20 \\text{ 年}$$<br>意味著放現金在銀行（若利率為0），20 年後 100 萬元的購買力僅剩 50 萬元！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ 退休金缺口風險</h4>
                            <p>若規劃 30 年後退休，按 3% 通膨計算，未來的 1,000 萬退休金，實質購買力只相當於今天的 412 萬元。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Inflation acts as a silent wealth eraser over time:</p>
                    $$\\text{Years to Halve Purchasing Power} \\approx \\frac{72}{\\text{Inflation Rate (\\%)}}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 Rule of 72 Example (3.6% Inflation)</h4>
                            <p>$$\\frac{72}{3.6} = 20 \\text{ Years}$$<br>Uninvested cash will lose 50% of its real purchasing power in just 20 years!</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ Retirement Shortfall</h4>
                            <p>A $10M retirement fund in 30 years under 3% inflation equals only $4.12M in real purchasing power today.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 8
        {
            "id": 8, "hour": 1, "tag": {"zh": "需求與成本", "en": "Demand vs Cost"},
            "title": {"zh": "Slide 08 | 需求拉動通膨 vs. 成本推動通膨", "en": "Slide 08 | Demand-Pull vs Cost-Push Inflation"},
            "content": {
                "zh": """
                    <p>經濟學將通膨依發生原因分為兩大類型：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🚀 需求拉動通膨 (Demand-Pull)</h4>
                            <p>「太多錢追逐太少商品」。經濟景氣過熱、政府發放消費券或央行大印鈔，總需求曲線 (AD) 右移引發物價上漲。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚡ 成本推動通膨 (Cost-Push)</h4>
                            <p>原物料成本暴漲（如石油危機）、碳關稅 CBAM 或工資大幅調升，總供給曲線 (AS) 左移，可能引發滯脹 (Stagflation)。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Economists classify inflation by its underlying drivers:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🚀 Demand-Pull Inflation</h4>
                            <p>"Too much money chasing too few goods." Economic overheating or quantitative easing shifts AD curve rightward.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚡ Cost-Push Inflation</h4>
                            <p>Raw material surges or carbon taxes shift AS curve leftward, potentially leading to Stagflation.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 9
        {
            "id": 9, "hour": 1, "tag": {"zh": "工資價格螺旋", "en": "Wage-Price Spiral"},
            "title": {"zh": "Slide 09 | 惡性循環：工資—物價螺旋 (Wage-Price Spiral)", "en": "Slide 09 | Wage-Price Spiral Dynamics"},
            "content": {
                "zh": """
                    <p>當通膨預期根深蒂固時，市場將陷入工資與物價相互推升的螺旋機制：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🔄 螺旋四部曲</h4>
                            <p>1. 生活物價上漲 ➡️ 2. 工人要求提高工資 ➡️ 3. 企業生產成本增加 ➡️ 4. 企業提高商品售價轉嫁。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏛️ 央行的硬著陸威脅</h4>
                            <p>為打破工資—物價螺旋，央行往往不得不採取激進升息，甚至以引發經濟衰退與失業率上升為代價。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>When inflation expectations become entrenched, a dangerous self-reinforcing loop emerges:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🔄 The 4-Step Spiral</h4>
                            <p>1. Living costs rise ➡️ 2. Workers demand higher wages ➡️ 3. Business costs surge ➡️ 4. Firms hike end-product prices.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏛️ Central Bank Policy Dilemma</h4>
                            <p>To break this spiral, central banks are forced to hike interest rates aggressively, risking economic recession.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 10
        {
            "id": 10, "hour": 1, "tag": {"zh": "小結與活動", "en": "Hour 1 Summary"},
            "title": {"zh": "Slide 10 | 第一小時小結與專屬活動預告", "en": "Slide 10 | Hour 1 Summary & Activity Preview"},
            "content": {
                "zh": """
                    <p>第一小時重點回顧：我們理解了 CPI 籃子結構、體感落差主因以及 72 法則對實質資產的扣押。</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 專屬活動：個人實質購買力縮水計算盤</h4>
                            <p>請點擊頂部選單「🎯 1小時活動: 購買力計算」，輸入個人月薪與生活花費漲幅，進行個人的實質購買力健檢！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第二小時預告</h4>
                            <p>第二小時我們將揭開廠商不敢明講的「隱形縮性通膨 (Shrinkflation)」與學術經典「費雪效應」！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 1 Summary: We learned CPI weighting, perceived inflation gap, and purchasing power decay via Rule of 72.</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 Hour 1 Activity Preview</h4>
                            <p>Click "Purchasing Power Calc" on the top menu to evaluate your personal real wage loss.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Hour 2 Preview</h4>
                            <p>In Hour 2, we will uncover hidden Shrinkflation tactics and the Fisher Equation!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 11
        {
            "id": 11, "hour": 2, "tag": {"zh": "縮性通膨", "en": "Shrinkflation"},
            "title": {"zh": "Slide 11 | 隱形吃錢術：縮性通膨 (Shrinkflation) 概念", "en": "Slide 11 | Hidden Price Hikes: Shrinkflation Concept"},
            "img": "images/w2_shrinkflation.jpg",
            "content": {
                "zh": """
                    <p>進入第二小時，我們探討廠商最常用的隱形漲價手法——<b>縮性通膨 (Shrinkflation)</b>：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📦 縮性通膨機制</h4>
                            <p>商品包裝售價保持不變（如 50 元），但內含容量或重量被暗中調降（如從 100g 減少至 80g）。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🧮 實質單位價格暴漲</h4>
                            <p>$$\\text{Real Unit Price Increase} = \\frac{50/80 - 50/100}{50/100} = +25\\%$$<br>消費者以為沒漲價，實質上單位成本已暴漲 25%！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 2 begins with consumer product shrinkflation strategies:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📦 Shrinkflation Mechanism</h4>
                            <p>Retail sticker price remains fixed ($50), while package net weight is reduced (from 100g down to 80g).</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🧮 Effective Price Increase</h4>
                            <p>$$\\text{Real Unit Price Increase} = \\frac{50/80 - 50/100}{50/100} = +25\\%$$<br>Consumers believe price hasn't changed, while effective unit cost jumped 25%!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 12
        {
            "id": 12, "hour": 2, "tag": {"zh": "縮減通膨案例", "en": "Shrinkflation Cases"},
            "title": {"zh": "Slide 12 | 經典案例：零食、洋洋片與餐飲份量縮水對照", "en": "Slide 12 | Case Studies: Chips, Snacks & Dining Portion Shrinkage"},
            "content": {
                "zh": """
                    <p>縮性通膨在現代消費市場無所不在：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🍟 知名洋芋片案例</h4>
                            <p>包裝袋尺寸不變、充氣量增加，但淨重從 85g 悄悄縮減至 70g。廠商利用視覺幻象掩蓋重量縮減。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>☕ 巧克力與連鎖餐飲</h4>
                            <p>巧克力三角形間隙變大；連鎖牛丼飯碗底變厚、肉片少 2 片，均屬典型的餐飲縮性通膨。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Shrinkflation tactics span across retail and food industries:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🍟 Potato Chips Case</h4>
                            <p>Bag size remains constant while net weight drops from 85g to 70g, masking weight reduction through visual illusions.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>☕ Chocolates & Fast Food</h4>
                            <p>Wider gaps in chocolate bars; thicker bowl bases in restaurants serving fewer slices of meat.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 13
        {
            "id": 13, "hour": 2, "tag": {"zh": "品質調整", "en": "Hedonic Adjustment"},
            "title": {"zh": "Slide 13 | 享樂品質調整 (Hedonic Quality Adjustment) 爭議", "en": "Slide 13 | Hedonic Quality Adjustment Debates"},
            "content": {
                "zh": """
                    <p>統計局在計算 CPI 時，會進行「享樂品質調整 (Hedonic Adjustment)」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📱 調整邏輯範例</h4>
                            <p>智慧型手機價格從 3 萬元漲到 3.5 萬元 (+16.7%)，但若相機畫素與晶片效能提升 30%，統計局會認定「品質提升覆蓋了價格漲幅」，甚至在 CPI 中記為價格下滑！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🤔 學術爭議點</h4>
                            <p>民眾生活依然需要多掏出 5,000 元現金，品質調整被批評為官方拉低 CPI 數據的統計魔術。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Statistical agencies apply Hedonic Quality Adjustment when calculating CPI:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📱 Hedonic Logic Example</h4>
                            <p>If a phone price rises from $1000 to $1150 (+15%), but camera specs improve 30%, official CPI records it as a price drop due to quality gains!</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🤔 Academic Criticism</h4>
                            <p>Consumers still pay $150 more cash out of pocket. Critics call it statistical accounting tricks.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 14
        {
            "id": 14, "hour": 2, "tag": {"zh": "費雪效應", "en": "Fisher Effect"},
            "title": {"zh": "Slide 14 | 經典學術理論：費雪方程式 (Fisher Equation)", "en": "Slide 14 | Classical Economic Theory: The Fisher Equation"},
            "content": {
                "zh": """
                    <p>經濟學大師歐文·費雪 (Irving Fisher) 提出了衡量實質報酬率的核心方程式：</p>
                    $$r = i - \\pi^e$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 符號解讀</h4>
                            <p>$r$：實質利率 (Real Interest Rate)<br>$i$：名目利率 (Nominal Interest Rate)<br>$\\pi^e$：預期通膨率 (Expected Inflation Rate)</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💸 負實質利率危機 (Negative Real Rate)</h4>
                            <p>當銀行定存名目利率 $i = 1.5\\%$，而實際通膨率 $\\pi = 3.0\\%$ 時：$$r = 1.5\\% - 3.0\\% = -1.5\\%$$<br>存款人在銀行存錢，實質購買力每年倒貼 1.5%！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Economist Irving Fisher established the foundational relationship for real returns:</p>
                    $$r = i - \\pi^e$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Component Definitions</h4>
                            <p>$r$: Real Interest Rate; $i$: Nominal Interest Rate; $\\pi^e$: Expected Inflation Rate.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💸 Negative Real Rates</h4>
                            <p>If bank deposit rate $i = 1.5\\%$ and inflation $\\pi = 3.0\\%$: $$r = 1.5\\% - 3.0\\% = -1.5\\%$$<br>Savers lose 1.5% purchasing power annually!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 15
        {
            "id": 15, "hour": 2, "tag": {"zh": "通膨稅", "en": "Inflation Tax"},
            "title": {"zh": "Slide 15 | 通膨稅 (Inflation Tax) 與財富再分配效應", "en": "Slide 15 | Inflation Tax & Wealth Redistribution"},
            "content": {
                "zh": """
                    <p>通膨是一種不需要經過國會審議的「隱形稅收 (Inflation Tax)」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏦 債務人 (Debtor) 受益</h4>
                            <p>政府與房貸借款人（債務人）發行固定名目金額債務，通膨讓未來還款的實質價值縮水，等同獲取實質補貼。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 債權人 (Creditor) 受害</h4>
                            <p>持有現金、固定收益債券與未隨通膨調薪的受薪階級，財富被無形轉移給實體資產持有者與債務人。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Inflation acts as an unlegislated, hidden tax that redistributes society's wealth:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏦 Debtors Gain</h4>
                            <p>Governments and mortgage borrowers repay debts in future inflated, weaker dollars, effectively getting subsidized.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 Creditors Lose</h4>
                            <p>Cash holders and fixed-wage workers see their real wealth quietly transferred to real estate & equity owners.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 16
        {
            "id": 16, "hour": 2, "tag": {"zh": "交易成本", "en": "Transaction Costs"},
            "title": {"zh": "Slide 16 | 菜單成本 (Menu Costs) 與鞋皮成本 (Shoe-leather Costs)", "en": "Slide 16 | Menu Costs & Shoe-Leather Costs"},
            "content": {
                "zh": """
                    <p>高通膨環境會為社會帶來兩類無謂的微觀交易成本：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📜 菜單成本 (Menu Costs)</h4>
                            <p>商家必須頻繁重新列印價目表、修改POS系統與官網售價，耗費實體印刷與行政人力成本。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>👞 鞋皮成本 (Shoe-leather Costs)</h4>
                            <p>為避免現金縮水，民眾頻繁往返銀行提領與轉帳投資所耗費的時間與精力（磨損鞋皮的意象）。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>High inflation generates deadweight microeconomic costs across society:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📜 Menu Costs</h4>
                            <p>Businesses waste resources continuously updating printed price lists, POS systems, and advertising tags.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>👞 Shoe-Leather Costs</h4>
                            <p>Time and energy wasted by individuals making extra trips to banks to manage liquidity and minimize cash holdings.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 17
        {
            "id": 17, "hour": 2, "tag": {"zh": "通膨預期", "en": "Inflation Expectations"},
            "title": {"zh": "Slide 17 | 認知心理：通膨預期心理 (Inflation Expectations)", "en": "Slide 17 | Behavioral Psychology: Inflation Expectations"},
            "content": {
                "zh": """
                    <p>通膨最可怕的不是當前的數字，而是大眾的「通膨預期」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🧠 自我實現預言 (Self-Fulfilling Prophecy)</h4>
                            <p>當消費者預期明年的車子或房子會再漲 10%，會選擇「提前搶購」，進而推升當前的總需求，讓預期的通膨真正發生。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏛️ 央行的公信力戰役</h4>
                            <p>聯準會與台灣央行必須不斷透過聲明安撫市場「通膨錨定 (Anchored Expectations)」，否則恐引發恐慌性囤貨。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>The most dangerous element of inflation is unanchored public expectation:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🧠 Self-Fulfilling Prophecy</h4>
                            <p>If consumers expect 10% higher prices next year, they rush to buy today, driving up demand and triggering real inflation.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏛️ Central Bank Credibility</h4>
                            <p>Central banks work hard to keep long-term inflation expectations anchored at ~2%.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 18
        {
            "id": 18, "hour": 2, "tag": {"zh": "歷史極限", "en": "Hyperinflation"},
            "title": {"zh": "Slide 18 | 歷史鏡鑑：惡性通膨 (Hyperinflation) 災難", "en": "Slide 18 | Historical Lessons: Hyperinflation Disasters"},
            "content": {
                "zh": """
                    <p>當政府透過央行無節制印鈔彌補財政赤字時，會引發惡性通膨：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🇩🇪 1923 德國魏瑪共和國</h4>
                            <p>物價每 49 小時翻倍，民眾拿一整手推車的馬克紙鈔只能買一條麵包，法幣信用徹底崩解。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🇿🇼 辛巴威與委內瑞拉</h4>
                            <p>發行面額 100 兆辛巴威元紙鈔；貨幣功能喪失，市場倒退至以物易物或改用美金計價。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Unchecked money printing to fund fiscal deficits leads to catastrophic hyperinflation:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🇩🇪 1923 Weimar Germany</h4>
                            <p>Prices doubled every 49 hours. Wheelbarrows of cash were needed to buy a single loaf of bread.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🇿🇼 Zimbabwe & Venezuela</h4>
                            <p>100-Trillion-Dollar notes printed. Local currency abandoned in favor of US dollars or bartering.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 19
        {
            "id": 19, "hour": 2, "tag": {"zh": "防禦工具", "en": "Defense Tools"},
            "title": {"zh": "Slide 19 | 識別隱形通膨的 3 大實用防禦指南", "en": "Slide 19 | 3 Practical Rules to Spot Hidden Inflation"},
            "content": {
                "zh": """
                    <p>作為明智的消費者與投資人，應掌握以下 3 大防禦原則：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>1. 查驗「單位價格 (Unit Price)」</h4>
                            <p>不看外包裝總價，直接計算「每克元」或「每毫升元」，破解縮性通膨迷思。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>2. 算出你的「個人 CPI 權數」</h4>
                            <p>外食比重高者，應以外食費年增率作為個人實質預算編列依據，而非官方平均值。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>3. 追蹤「實質利率 $r$」</h4>
                            <p>確保資產年化報酬率高於實際通膨率 $\\pi$，拒絕負實質利率侵蝕財富。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Master these 3 rules to protect your purchasing power:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>1. Track Unit Price</h4>
                            <p>Ignore sticker prices; always check cost per gram ($/g) or $/ml to spot shrinkflation.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>2. Calculate Personal CPI</h4>
                            <p>Customize your inflation basket based on personal high-frequency spending.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>3. Monitor Real Rate $r$</h4>
                            <p>Ensure your investment returns outpace actual inflation to avoid negative real returns.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 20
        {
            "id": 20, "hour": 2, "tag": {"zh": "第二小時活動", "en": "Hour 2 Activity"},
            "title": {"zh": "Slide 20 | 第二小時小結與專屬活動預告", "en": "Slide 20 | Hour 2 Summary & Activity Preview"},
            "content": {
                "zh": """
                    <p>第二小時小結：我們拆解了縮性通膨、品質調整、費雪效應與通膨稅的財富轉移邏輯。</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 專屬活動：隱形縮性通膨偵探考驗</h4>
                            <p>點擊頂部「🎯 2小時活動: 縮性通膨」，計算經典零食容量縮減後的隱性單位漲價幅度！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第三小時預告</h4>
                            <p>第三小時我們將實查主計總處資料庫，解析全球央行 2% 目標與 4 大抗通膨資產對決！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 2 Summary: We unpacked shrinkflation, hedonic adjustment, Fisher Equation, and Inflation Tax.</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 Hour 2 Activity Preview</h4>
                            <p>Click "Shrinkflation Calc" on the top menu to calculate hidden unit price increases.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Hour 3 Preview</h4>
                            <p>In Hour 3, we verify official DGBAS datasets and compare 4 inflation-hedge asset classes!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 21
        {
            "id": 21, "hour": 3, "tag": {"zh": "數據實查", "en": "Data Audit"},
            "title": {"zh": "Slide 21 | 主計總處 CPI 原始數據庫實查 (DGBAS Data Audit)", "en": "Slide 21 | DGBAS CPI Database Live Verification"},
            "content": {
                "zh": """
                    <p>進入第三小時實證階段，如何親自下載查驗第一手官方物價數據？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌐 台灣行政院主計總處 (DGBAS)</h4>
                            <p>登入「物價統計月報」資料庫，可下載 368 項細項商品（如雞蛋、豬肉、房租）的歷史價格指數 CSV 原始檔。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔍 交叉比對實務</h4>
                            <p>將「外食費子指數」與「總體 CPI 指數」拉出雙軸折線圖，一眼看穿外食費黏性與高漲幅真相。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 3 empirical stage: How to audit official inflation raw datasets?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌐 Taiwan DGBAS Official Portal</h4>
                            <p>Access Price Statistics Monthly Reports to download raw CSV time series for 368 item categories.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔍 Data Cross-Analysis</h4>
                            <p>Plotting "Dining Out Index" against "Headline CPI" reveals the high sticky inflation of food prices.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 22
        {
            "id": 22, "hour": 3, "tag": {"zh": "央行目標", "en": "2% Target"},
            "title": {"zh": "Slide 22 | 全球央行聖杯：2% 通膨目標 (2% Target) 幕後邏輯", "en": "Slide 22 | The Central Bank 2% Inflation Target Mystery"},
            "content": {
                "zh": """
                    <p>為什麼美聯儲 (Fed) 與全球主要央行都把通膨目標設定在 2%，而不是 0%？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ 避免通縮陷阱 (Deflation Spiral)</h4>
                            <p>若通膨為 0% 甚至負數（通縮），消費者會延後消費等待降價，引發企業裁員與經濟流動性陷阱死亡螺旋。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚙️ 提供貨幣政策降息空間</h4>
                            <p>溫和 2% 通膨能保持名目利率在正數區間，讓央行在經濟衰退時有空間降息刺激經濟。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Why do global central banks target 2% inflation instead of 0%?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ Prevent Deflation Spirals</h4>
                            <p>Zero or negative inflation causes buyers to delay spending, triggering corporate layoffs and economic freeze.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚙️ Policy Buffer for Rate Cuts</h4>
                            <p>Moderate 2% inflation keeps nominal interest rates positive, giving central banks room to cut rates in recessions.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 23
        {
            "id": 23, "hour": 3, "tag": {"zh": "抗通膨資產", "en": "Anti-Inflation Assets"},
            "title": {"zh": "Slide 23 | 4 大抗通膨資產對決（黃金 vs. 房產 vs. TIPS vs. 股票）", "en": "Slide 23 | 4 Inflation-Hedge Assets Compared"},
            "content": {
                "zh": """
                    <p>如何對抗通膨對資產的侵蝕？比較四大類資產特性：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🥇 黃金與實體房產</h4>
                            <p>• 黃金：終極貨幣避險，但不產生利息。<br>• 實體房產：租金隨通膨調升，具備槓桿與實體價值。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 TIPS 與優質股票</h4>
                            <p>• TIPS (抗通膨債券)：本金隨 CPI 直按比例調升。<br>• 股票：具備轉嫁成本能力的龍頭企業（如台積電）。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Comparing performance across 4 major inflation-defense asset classes:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🥇 Gold & Real Estate</h4>
                            <p>• Gold: Currency hedge, zero cash yield.<br>• Real Estate: Rental income rises with CPI; leveraged value.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 TIPS & Pricing-Power Equities</h4>
                            <p>• TIPS: Principal adjusts directly with CPI.<br>• Equities: Companies with strong pricing power (e.g. TSMC).</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 24
        {
            "id": 24, "hour": 3, "tag": {"zh": "實質薪資", "en": "Real Wage"},
            "title": {"zh": "Slide 24 | 實質薪資成長率算式：你加薪速度趕得上通膨嗎？", "en": "Slide 24 | Real Wage Growth Rate Calculation"},
            "content": {
                "zh": """
                    <p>計算你的「實質薪資成長率 (Real Wage Growth Rate)」：</p>
                    $$\\text{Real Wage Growth} \\approx \\text{Nominal Wage Growth} - \\text{Inflation Rate}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💼 算例演練</h4>
                            <p>若今年公司幫你加薪 3.0%，但個人體感/地區 CPI 通膨率為 3.8%：$$\\text{Real Wage Growth} = 3.0\\% - 3.8\\% = -0.8\\%$$<br>你的勞動實質價值今年倒退了 0.8%！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🚀 職涯抵抗策略</h4>
                            <p>提升不可替代性專長，確保年薪調幅超越 CPI，並將積蓄投入過往年化報酬 > 7% 的多元資產組合。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Calculate whether your salary hikes outpace inflation:</p>
                    $$\\text{Real Wage Growth} \\approx \\text{Nominal Wage Growth} - \\text{Inflation Rate}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💼 Practical Calculation</h4>
                            <p>If you got a 3.0% raise while inflation hit 3.8%: $$\\text{Real Wage Growth} = 3.0\\% - 3.8\\% = -0.8\\%$$<br>Your real purchasing power decreased by 0.8%!</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🚀 Career Action Plan</h4>
                            <p>Build irreplaceable professional skillsets and invest savings into productive assets yielding >7% long-term.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 25
        {
            "id": 25, "hour": 3, "tag": {"zh": "企業訂價權", "en": "Pricing Power"},
            "title": {"zh": "Slide 25 | 巴菲特的護城河：企業訂價權 (Pricing Power)", "en": "Slide 25 | Warren Buffett's Moat: Pricing Power"},
            "content": {
                "zh": """
                    <p>華倫·巴菲特 (Warren Buffett) 認為評估企業抵禦通膨的最核心指標是<b>「訂價權 (Pricing Power)」</b>：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏰 具備訂價權的企業</h4>
                            <p>擁有強大技術護城河或品牌忠誠度（如蘋果、台積電），即便原物料上漲 20%，能直接轉嫁給客戶而不影響銷量。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ 缺乏訂價權的企業</h4>
                            <p>代工廠或低差異化商品，原物料上漲只能自掏腰包吸收，導致毛利率暴跌甚至轉盈為虧。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Warren Buffett identifies Pricing Power as the single most vital metric during inflationary periods:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏰 High Pricing Power Firms</h4>
                            <p>Firms with strong technological moats (e.g. TSMC, Apple) pass 100% of cost increases onto customers effortlessly.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ Zero Pricing Power Commodity Firms</h4>
                            <p>Contract manufacturers with low differentiation must absorb cost spikes, crushing their gross profit margins.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 26
        {
            "id": 26, "hour": 3, "tag": {"zh": "房租黏性", "en": "Rent Stickiness"},
            "title": {"zh": "Slide 26 | 居住類通膨與房租黏性 (Shelter Inflation & Rent Lag)", "en": "Slide 26 | Shelter Inflation & Rent Lag Mechanics"},
            "content": {
                "zh": """
                    <p>居住類 (Shelter) 佔 CPI 權數超過 20%，且具備強烈的「時間滯後與黏性」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏠 房租合約的滯後效應</h4>
                            <p>租屋合約通常一年一簽。即便房價或利率大漲，房租調漲往往延後 6 至 12 個月反映在 CPI 數據中。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔒 房租的頑固黏性 (Sticky Inflation)</h4>
                            <p>房租一旦調漲便極難下滑，成為驅動中長期核心通膨居高不下的主要推手。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Shelter accounts for >20% of CPI and exhibits strong lag and stickiness:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏠 Lease Contract Lag</h4>
                            <p>Leases are signed annually. Rent increases lag home price surges by 6-12 months before registering in official CPI.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🔒 Sticky Inflation Driver</h4>
                            <p>Once rents increase, they rarely adjust downward, acting as the primary anchor for core inflation.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 27
        {
            "id": 27, "hour": 3, "tag": {"zh": "綠色通膨", "en": "Greenflation"},
            "title": {"zh": "Slide 27 | 前沿議題：綠色通膨 (Greenflation) 與碳定價", "en": "Slide 27 | Greenflation & Carbon Pricing Impact"},
            "content": {
                "zh": """
                    <p>2026 年全球邁入碳關稅 CBAM 與淨零轉型，引發全新的「綠色通膨 (Greenflation)」：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌱 綠能轉型成本</h4>
                            <p>淘汰高碳排煤電、採購高價綠電與鋰/銅/鎳等金屬需求暴增，推升基礎製造業生產成本。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📜 碳費與產品終端加價</h4>
                            <p>鋼鐵、水泥與半導體產業支付碳費後，轉嫁至終端電子產品與建案，形成結構性長期通膨壓力。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>2026 Climate transition and CBAM carbon tariffs create Greenflation:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌱 Green Transition Costs</h4>
                            <p>Phase-out of cheap fossil fuels and massive demand for copper, lithium, and green electricity push up baseline manufacturing costs.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📜 Carbon Taxes Passed to End-Users</h4>
                            <p>Carbon levies paid by steel and semiconductor plants pass directly to consumer electronics and housing prices.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 28
        {
            "id": 28, "hour": 3, "tag": {"zh": "抗通膨心法", "en": "Mindset"},
            "title": {"zh": "Slide 28 | 建立終身抗通膨思維：個人資產防禦 4 大法則", "en": "Slide 28 | Lifelong Inflation Defense: 4 Core Principles"},
            "content": {
                "zh": """
                    <p>總結抗通膨終身財務防線：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ 四大防禦支柱</h4>
                            <p>1. 拒絕純現金死存（僅留 6 個月緊急預備金）。<br>2. 佈局具備訂價權的生產性資產 (Productive Assets)。<br>3. 運用適度固定利率長期房貸對衝貨幣貶值。<br>4. 投資個人人力資本，確保加薪高於 CPI。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Summary of lifelong financial defense against currency erosion:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ 4 Defense Pillars</h4>
                            <p>1. Avoid holding excess idle cash (keep 6 months emergency fund only).<br>2. Invest in productive assets with pricing power.<br>3. Utilize fixed-rate mortgages to hedge currency devaluation.<br>4. Continuously invest in human capital to outpace CPI.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 29
        {
            "id": 29, "hour": 3, "tag": {"zh": "第二週總結", "en": "Week 2 Summary"},
            "title": {"zh": "Slide 29 | 第二週全景知識體系圖與觀念整合", "en": "Slide 29 | Week 2 Knowledge Graph & Synthesis"},
            "content": {
                "zh": """
                    <p>第二週全景知識體系整合：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 觀念關聯鏈條</h4>
                            <p>物價上漲 ➡️ CPI 加權權數落差 ➡️ 縮性通膨隱形吃錢 ➡️ 費雪效應 $r = i - \\pi$ 負利率警告 ➡️ 4大抗通膨資產配置與訂價權護城河。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Week 2 Synthesis Knowledge Roadmap:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 Concept Connection Chain</h4>
                            <p>Price Hikes ➡️ CPI Weighting Gap ➡️ Shrinkflation Traps ➡️ Fisher Equation $r = i - \\pi$ ➡️ 4 Anti-Inflation Asset Defense & Moat.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 30
        {
            "id": 30, "hour": 3, "tag": {"zh": "作業與預告", "en": "Assignment & Preview"},
            "title": {"zh": "Slide 30 | 學習反思與第三週預告 (利率與央行貨幣政策)", "en": "Slide 30 | Reflection & Next Week Preview (Interest Rates & Central Banks)"},
            "content": {
                "zh": """
                    <p>第二週學習任務告一段落！請完成課後實務作業：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📝 本週課堂實務作業</h4>
                            <p>點擊頂部「📝 本週課堂作業」，填寫自訂個人 CPI 消費組合與抗通膨資產調配報告並在線提交。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第三週主題預告</h4>
                            <p>第三週我們將探討【利率、央行貨幣政策與資產價格】，解密聯願會升降息如何撼動全球股市與房市！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Week 2 Conclusion! Complete your classroom assignment:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📝 Weekly Classroom Assignment</h4>
                            <p>Click "Homework Assignment" on top menu to submit your personal CPI weights & asset report.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Week 3 Topic Preview</h4>
                            <p>Next week: "Interest Rates, Central Bank Policy & Asset Prices"!</p>
                        </div>
                    </div>
                """
            }
        }
    ]

    # Convert slides to JSON JS code
    js_content = f"""// 115管理探索二 第二週：物價、通膨與實質購買力
// 30 頁純教學卡片 + 3 大獨立小時活動 + 課堂作業 Modal + 畫布標記工具

let currentLang = 'zh'; // 'zh' or 'en'
let currentSlideIndex = 0;
let activeHourFilter = 'all';

// Annotation Canvas State
let isDrawing = false;
let currentTool = 'off'; // 'pen' or 'highlighter' or 'off'
let penColor = '#F43F5E';
let penSize = 3;
let canvas, ctx;

// 30 PURE TEACHING SLIDES DATA FOR WEEK 2
const slidesData = {json.dumps(slides, ensure_ascii=False, indent=2)};

// Initialize Web App safely
document.addEventListener('DOMContentLoaded', () => {{
  initCanvas();
  renderSlide();
  renderGrid();
}});

// Canvas Annotation Setup
function initCanvas() {{
  canvas = document.getElementById('annotationCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);
}}

function resizeCanvas() {{
  const container = document.querySelector('.presentation-section');
  if (container && canvas) {{
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }}
}}

function setTool(tool) {{
  currentTool = tool;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  if (tool === 'pen') {{
    const btn = document.getElementById('toolPen');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 3;
  }} else if (tool === 'highlighter') {{
    const btn = document.getElementById('toolHighlighter');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 16;
  }} else {{
    if (canvas) canvas.classList.remove('drawing-mode');
  }}
}}

function setPenColor(color, dot) {{
  penColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  if (dot) dot.classList.add('active');
}}

function clearCanvas() {{
  if (ctx && canvas) {{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }}
}}

function toggleFullscreen() {{
  if (!document.fullscreenElement) {{
    document.documentElement.requestFullscreen().catch(function(err){{}});
  }} else {{
    if (document.exitFullscreen) {{
      document.exitFullscreen().catch(function(err){{}});
    }}
  }}
}}

function startDrawing(e) {{
  if (currentTool === 'off' || !ctx || !canvas) return;
  isDrawing = true;
  ctx.beginPath();
  const rect = canvas.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}}

function draw(e) {{
  if (!isDrawing || currentTool === 'off' || !ctx || !canvas) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  
  if (currentTool === 'highlighter') {{
    ctx.strokeStyle = penColor + '66';
    ctx.lineWidth = 18;
  }} else {{
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 3;
  }}
  ctx.lineCap = 'round';
  ctx.stroke();
}}

function stopDrawing() {{
  isDrawing = false;
}}

// Switch Language
function setLanguage(lang) {{
  currentLang = lang;
  document.querySelectorAll('[data-zh]').forEach(el => {{
    el.innerText = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  }});
  renderSlide();
  renderGrid();
}}

// Filter Slides by Hour
function filterHour(hour, btn) {{
  activeHourFilter = hour;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const filtered = activeHourFilter === 'all' ? slidesData : slidesData.filter(s => s.hour == activeHourFilter);
  if (filtered.length > 0) {{
    currentSlideIndex = slidesData.findIndex(s => s.id === filtered[0].id);
  }}
  renderSlide();
  renderGrid();
}}

// Render Current Slide
function renderSlide() {{
  clearCanvas();
  const slide = slidesData[currentSlideIndex];
  if (!slide) return;

  const container = document.getElementById('slideContainer');
  if (!container) return;

  const tagText = (slide.tag && slide.tag[currentLang]) ? slide.tag[currentLang] : '';
  const titleText = (slide.title && slide.title[currentLang]) ? slide.title[currentLang] : '';
  const contentText = (slide.content && slide.content[currentLang]) ? slide.content[currentLang] : '';
  const imgHTML = slide.img ? `<img class="slide-img" src="${{slide.img}}" alt="Slide Visual">` : '';

  container.innerHTML = `
    <div class="slide-header">
      <span class="slide-counter">SLIDE ${{slide.id}} / 30</span>
      <span class="slide-tag">${{tagText}} (Hour ${{slide.hour}})</span>
    </div>
    <div class="slide-content-wrapper">
      <div>
        <h2 class="slide-title">${{titleText}}</h2>
        ${{imgHTML}}
        <div class="slide-body">${{contentText}}</div>
      </div>
    </div>
  `;

  const progressFill = document.getElementById('progressFill');
  if (progressFill) {{
    const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
    progressFill.style.width = `${{progressPercent}}%`;
  }}

  if (window.MathJax && typeof MathJax.typesetPromise === 'function') {{
    try {{
      MathJax.typesetPromise().catch(function(e){{}});
    }} catch(err) {{}}
  }}
}}

// Render 30 Slides Grid
function renderGrid() {{
  const gridView = document.getElementById('slidesGridView');
  if (!gridView) return;

  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.toLowerCase() : '';

  let filtered = slidesData;
  if (activeHourFilter !== 'all') {{
    filtered = filtered.filter(s => s.hour == activeHourFilter);
  }}
  if (query) {{
    filtered = filtered.filter(s => 
      (s.title[currentLang] && s.title[currentLang].toLowerCase().includes(query)) || 
      (s.content[currentLang] && s.content[currentLang].toLowerCase().includes(query))
    );
  }}

  gridView.innerHTML = filtered.map(slide => {{
    const slideIdx = slidesData.findIndex(s => s.id === slide.id);
    const cleanPreview = slide.content[currentLang] ? slide.content[currentLang].replace(/<[^>]*>?/gm, '') : '';
    return `
      <div class="mini-slide-card" onclick="goToSlide(${{slideIdx}})">
        <div class="mini-slide-num">SLIDE ${{slide.id}} • Hour ${{slide.hour}}</div>
        <div class="mini-slide-title">${{slide.title[currentLang]}}</div>
        <div class="mini-slide-preview">${{cleanPreview}}</div>
      </div>
    `;
  }}).join('');
}}

// Navigation
function nextSlide() {{
  if (currentSlideIndex < slidesData.length - 1) {{
    currentSlideIndex++;
    renderSlide();
  }}
}}

function prevSlide() {{
  if (currentSlideIndex > 0) {{
    currentSlideIndex--;
    renderSlide();
  }}
}}

function goToSlide(index) {{
  if (index >= 0 && index < slidesData.length) {{
    currentSlideIndex = index;
    renderSlide();
    window.scrollTo({{ top: 0, behavior: 'smooth' }});
  }}
}}

function searchSlides() {{
  renderGrid();
}}

// Modals
function openActivity1Modal() {{
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.add('active');
}}
function closeActivity1Modal() {{
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.remove('active');
}}
function calculatePurchasingPower() {{
  const wageHike = parseFloat(document.getElementById('wageInput').value) || 0;
  const foodHike = parseFloat(document.getElementById('foodHikeInput').value) || 0;
  const realDiff = (wageHike - foodHike).toFixed(1);
  
  let msg = `你的名目加薪與外食通膨差額為：${{realDiff}}% 。`;
  if (realDiff < 0) msg += " ⚠️ 警告：你的實質購買力正處於衰退狀態！外食物價調幅高於薪資成長。";
  else msg += " 🎉 恭喜：你的加薪幅度成功戰勝了外食通膨率！";

  const resEl = document.getElementById('purchasingPowerResult');
  if (resEl) resEl.innerText = msg;
}}

function openActivity2Modal() {{
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.add('active');
}}
function closeActivity2Modal() {{
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.remove('active');
}}
function calculateShrinkflation() {{
  const oldG = parseFloat(document.getElementById('oldGram').value) || 100;
  const newG = parseFloat(document.getElementById('newGram').value) || 80;
  const price = parseFloat(document.getElementById('packPrice').value) || 50;

  const oldUnitPrice = price / oldG;
  const newUnitPrice = price / newG;
  const increasePct = (((newUnitPrice - oldUnitPrice) / oldUnitPrice) * 100).toFixed(1);

  const resEl = document.getElementById('shrinkResult');
  if (resEl) resEl.innerText = `原單位價格：${{oldUnitPrice.toFixed(2)}}元/g ➡️ 縮水後：${{newUnitPrice.toFixed(2)}}元/g。實質漲價高達：${{increasePct}}%！`;
}}

// Hour 3 Game
const w2GameQuestions = [
  {{
    title_zh: "關卡 1：CPI 權數盲測", title_en: "Level 1: CPI Weighting Test",
    news_zh: "『便當與外食費天天漲 10%，為什麼官方 CPI 物價年增率卻只顯示 2.1%？』", news_en: "'Food hikes 10%, why does official CPI show only 2.1%?'",
    options_zh: ["官方故意隱瞞暴漲數據", "外食權數約佔 25%，加上降價 3C 等不常買項目拉低了總平均"], options_en: ["Official hides data", "Food is 25% weight; tech price drops lower the math average"],
    answer: 1, explain_zh: "正確！因為 CPI 包含了 368 項商品，不常購買的項目降價拉低了平均值。", explain_en: "Correct! CPI averages 368 items including tech goods."
  }},
  {{
    title_zh: "關卡 2：隱形縮性通膨偵測", title_en: "Level 2: Shrinkflation Detection",
    news_zh: "『某餅乾售價維持 50 元，但淨重從 100g 縮減為 80g，請問實質單位漲價多少？』", news_en: "'Snack stays $50, but weight drops 100g to 80g. Effective hike?'",
    options_zh: ["沒有漲價，因為售價都是 50 元", "實質單位價格暴漲 25% (50/80 vs 50/100)"], options_en: ["No hike, price is $50", "Effective price surged +25%"],
    answer: 1, explain_zh: "正確！計算每克單價即可抓出廠商隱形漲價 25%。", explain_en: "Correct! Unit price (cost/g) surged 25%."
  }},
  {{
    title_zh: "關卡 3：費雪效應與負實質利率", title_en: "Level 3: Fisher Effect & Real Rate",
    news_zh: "『銀行定存利率 1.5%，但實際通膨率為 3.5%，請問存款人的實質利率 r 為何？』", news_en: "'Bank rate 1.5%, inflation 3.5%. What is real return r?'",
    options_zh: ["r = +5.0% (資產大幅增值)", "r = -2.0% (實質購買力每年倒貼 2%)"], options_en: ["r = +5.0%", "r = -2.0% (losing 2% real wealth yearly)"],
    answer: 1, explain_zh: "正確！根據費雪公式 r = i - pi = 1.5% - 3.5% = -2.0%。", explain_en: "Correct! Fisher equation r = 1.5% - 3.5% = -2.0%."
  }},
  {{
    title_zh: "關卡 4：抗通膨資產選擇", title_en: "Level 4: Anti-Inflation Asset Choice",
    news_zh: "『面對長期高通膨，下列何者具備最佳的成本轉嫁與資產防禦能力？』", news_en: "'Under persistent inflation, which asset possesses strong defense?'",
    options_zh: ["把全部現金活存在銀行", "具備技術護城河與高訂價權 (Pricing Power) 的龍頭企業股票與房產"], options_en: ["Keep cash in zero-yield checking", "Equities with strong Pricing Power and Real Estate"],
    answer: 1, explain_zh: "正確！具備訂價權的龍頭企業能將通膨成本完全轉嫁給客戶。", explain_en: "Correct! Moat companies pass inflation costs to customers."
  }}
];

let currentW2GameIndex = 0;
let w2GameScore = 0;

function openGameModal() {{
  currentW2GameIndex = 0;
  w2GameScore = 0;
  const el = document.getElementById('gameModal');
  if (el) el.classList.add('active');
  renderW2GameQuestion();
}}

function closeGameModal() {{
  const el = document.getElementById('gameModal');
  if (el) el.classList.remove('active');
}}

function renderW2GameQuestion() {{
  const container = document.getElementById('gameQuestionContainer');
  if (!container) return;

  if (currentW2GameIndex >= w2GameQuestions.length) {{
    container.innerHTML = `
      <div style="text-align:center; padding:2rem;">
        <h3 style="color:var(--accent-gold); font-size:1.8rem; margin-bottom:1rem;">🏆 恭喜完成第二週通膨偵探挑戰！</h3>
        <p style="font-size:1.2rem; margin-bottom:1.5rem;">你的最終得分：<span style="color:var(--accent-rose); font-weight:700;">${{w2GameScore}} / 400 分</span></p>
        <p style="color:var(--text-sub); margin-bottom:2rem;">你已解開 CPI 權數、縮性通膨與費雪效應的所有迷思！獲頒「通膨防禦專家徽章」。</p>
        <button class="btn btn-primary" onclick="closeGameModal()">完成並領取獎勵</button>
      </div>
    `;
    return;
  }}

  const q = w2GameQuestions[currentW2GameIndex];
  const title = currentLang === 'zh' ? q.title_zh : q.title_en;
  const news = currentLang === 'zh' ? q.news_zh : q.news_en;
  const options = currentLang === 'zh' ? q.options_zh : q.options_en;

  container.innerHTML = `
    <div class="activity-box">
      <div style="font-size:0.9rem; color:var(--accent-gold); font-weight:700; margin-bottom:0.5rem;">${{title}} (關卡 ${{currentW2GameIndex + 1}} / 4)</div>
      <p style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin-bottom:1.2rem;">${{news}}</p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
        ${{options.map((opt, idx) => `
          <button class="btn btn-outline" style="text-align:left; justify-content:flex-start; padding:0.75rem 1rem;" onclick="checkW2Answer(${{idx}})">
            ${{idx === 0 ? 'A' : 'B'}}. ${{opt}}
          </button>
        `).join('')}}
      </div>
    </div>
  `;
}}

function checkW2Answer(selectedIdx) {{
  const q = w2GameQuestions[currentW2GameIndex];
  const container = document.getElementById('gameQuestionContainer');
  const isCorrect = selectedIdx === q.answer;
  if (isCorrect) w2GameScore += 100;

  const explain = currentLang === 'zh' ? q.explain_zh : q.explain_en;

  container.innerHTML = `
    <div class="activity-box">
      <h3 style="color:${{isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}}; margin-bottom:0.8rem;">
        ${{isCorrect ? '🎉 回答正確！+100分' : '❌ 判斷錯誤！'}}
      </h3>
      <p style="color:var(--text-main); font-size:1.05rem; margin-bottom:1.5rem;">${{explain}}</p>
      <button class="btn btn-primary" onclick="nextW2Question()">進入下一關卡 →</button>
    </div>
  `;
}}

function nextW2Question() {{
  currentW2GameIndex++;
  renderW2GameQuestion();
}}

function openHomeworkModal() {{
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.add('active');
}}
function closeHomeworkModal() {{
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.remove('active');
}}
function submitW2Homework(e) {{
  if (e) e.preventDefault();
  alert("🎉 第二週課堂實務作業已成功提交！得分已登錄至學習歷程。");
  closeHomeworkModal();
}}
"""

    with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w2_app.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

    print("Created w2_app.js successfully!")

if __name__ == '__main__':
    build_w2_app_js()
