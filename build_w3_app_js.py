import json

def build_w3_app_js():
    # 30 pure teaching slides data for Week 3: Interest Rates, Central Bank Policy & Asset Prices
    slides = [
        # SLIDE 1
        {
            "id": 1, "hour": 1, "tag": {"zh": "單元導論", "en": "Unit Introduction"},
            "title": {"zh": "Slide 01 | 第三週課程導論：利率、央行貨幣政策與資產價格", "en": "Slide 01 | Introduction: Interest Rates, Central Banks & Asset Prices"},
            "img": "images/w3_cover.jpg",
            "content": {
                "zh": """
                    <p>歡迎來到第三週「管理探索二」。本週我們將探討金融市場的「萬物引力之源」——<b>「利率與央行貨幣政策」</b>。</p>
                    <p>華爾街名言：「利率是所有資產價格的重力引力。」當聯準會 (Fed) 宣佈升息或降息一碼 (0.25%)，為什麼全球科技股市值能在幾秒鐘內暴漲或蒸發數千億美元？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 核心疑問</h4>
                            <p>為什麼央行升息會打擊科技股，卻有利於銀行股？為什麼債券價格與殖利率呈現嚴格的反向關係？</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 本週學習目標</h4>
                            <p>掌握折現現值公式 ($PV$)、解碼戈登股利成長模型、看懂 Fed 點陣圖 (Dot Plot) 與殖利率曲線倒掛，掌控資產估值密碼。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Welcome to Week 3 of Financial Exploration II. Today we explore the ultimate gravity of financial markets: <b>Interest Rates & Monetary Policy</b>.</p>
                    <p>Warren Buffett famously noted: "Interest rates are to asset prices what gravity is to apple." Why does a 25 bps rate change swing tech stock values by billions?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 Key Question</h4>
                            <p>Why do rate hikes punish high-growth tech stocks while benefiting banks? Why do bond prices move inversely to yields?</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🎯 Learning Objectives</h4>
                            <p>Master Present Value ($PV$) discounting, decode Gordon Growth Model, read Fed Dot Plots, and analyze Yield Curve Inversions.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 2
        {
            "id": 2, "hour": 1, "tag": {"zh": "架構總覽", "en": "Roadmap"},
            "title": {"zh": "Slide 02 | 第三週 3 小時學習地圖與核心技能樹", "en": "Slide 02 | 3-Hour Roadmap & Core Skill Tree"},
            "content": {
                "zh": """
                    <p>本週 3 小時（共 180 分鐘）課程分為三大核心階段：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>第一小時：無風險利率與折現模型</h4>
                            <p>• 無風險利率 (Risk-Free Rate $R_f$)<br>• 現值與折現公式 ($PV = \\frac{FV}{(1+r)^n}$)<br>• 利率對科技股高估值的「槓桿打擊」</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>第二小時：央行決策與傳導機制</h4>
                            <p>• 戈登股利成長模型 ($P_0 = \\frac{D_1}{r - g}$)<br>• 聯準會點陣圖 (Dot Plot) 讀圖密碼<br>• 貨幣政策 4 大傳導管道與 QE/QT 衝擊</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>第三小時：殖利率曲線與實證對決</h4>
                            <p>• 美國 10 年期公債殖利率 (US10Y) 20 年數據<br>• 殖利率曲線倒掛 (10Y-2Y Spread) 與衰退<br>• 債券價格反向關係 ($P \\propto \\frac{1}{Y}$) 與 Duration</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Our 3-hour learning roadmap for Week 3 is structured as follows:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>Hour 1: Risk-Free Rate & PV Discounting</h4>
                            <p>• Risk-Free Rate ($R_f$) concept<br>• Present Value formula ($PV = \\frac{FV}{(1+r)^n}$)<br>• Rate hike leverage impact on Tech valuations</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>Hour 2: Central Bank Policy & Transmission</h4>
                            <p>• Gordon Growth Model ($P_0 = \\frac{D_1}{r - g}$)<br>• Fed Dot Plot reading masterclass<br>• 4 Transmission channels & QE/QT liquidity</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>Hour 3: Yield Curves & Empirical Data</h4>
                            <p>• US 10-Year Treasury Yield (US10Y) 20y data<br>• Yield Curve Inversion (10Y-2Y) & Recession<br>• Bond price-yield inverse rule ($P \\propto \\frac{1}{Y}$)</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 3
        {
            "id": 3, "hour": 1, "tag": {"zh": "無風險利率", "en": "Risk-Free Rate"},
            "title": {"zh": "Slide 03 | 資產定價基石：無風險利率 (Risk-Free Rate)", "en": "Slide 03 | Cornerstone of Pricing: Risk-Free Rate"},
            "content": {
                "zh": """
                    <p>金融學中所有資產（股票、房地產、黃金、加密貨幣）的定價基準，都建立在<b>「無風險利率 (Risk-Free Rate $R_f$)」</b>之上：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏛️ 無風險利率的代表</h4>
                            <p>通常指美國政府發行的短期/長期公債殖利率（如 US10Y），因為市場假設美國政府具備極高公信力，違約機率接近為零。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 資產預期報酬率公式</h4>
                            <p>$$\\text{Required Return} = R_f + \\text{Risk Premium}$$<br>當無風險利率 $R_f$ 上升，投資人要求所有風險資產提供更高的預期報酬率，否則寧願持有國債。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>All financial asset valuations build upon the <b>Risk-Free Rate ($R_f$)</b> foundation:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏛️ What is Risk-Free Rate?</h4>
                            <p>Typically benchmarked by US Treasury yields (e.g. US10Y), representing zero default risk under sovereign backing.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 Expected Return Equation</h4>
                            <p>$$\\text{Required Return} = R_f + \\text{Risk Premium}$$<br>When $R_f$ rises, investors demand higher returns across all risky assets, driving asset prices down.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 4
        {
            "id": 4, "hour": 1, "tag": {"zh": "折現公式", "en": "Discount Formula"},
            "title": {"zh": "Slide 04 | 金融核心理論：未來現金流折現現值 ($PV$)", "en": "Slide 04 | Core Financial Theory: Discounted Present Value ($PV$)"},
            "content": {
                "zh": """
                    <p>任何資產（如企業、房地產）的內在價值，等於其未來所有現金流折算至今天的「現值 (Present Value)」總和：</p>
                    $$PV = \\frac{FV}{(1+r)^n}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 符號說明</h4>
                            <p>$PV$：現值 (Present Value)；$FV$：未來現金流 (Future Value)；$r$：折現率/利率 (Discount Rate)；$n$：期數 (Years)。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 利率 $r$ 在分母的致命影響</h4>
                            <p>因為折現率 $r$ 位在分母，<b>當利率 $r$ 上升時，現值 $PV$ 必然下降</b>！這解釋了為什麼升息會天然壓低資產估值。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>The intrinsic value of any asset equals the sum of its future cash flows discounted to the present:</p>
                    $$PV = \\frac{FV}{(1+r)^n}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Component Definitions</h4>
                            <p>$PV$: Present Value; $FV$: Future Value; $r$: Discount Rate (Interest Rate); $n$: Years.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 Interest Rate in the Denominator</h4>
                            <p>Because $r$ sits in the denominator, <b>rising interest rates $r$ mathematically force present value $PV$ down</b>!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 5
        {
            "id": 5, "hour": 1, "tag": {"zh": "科技股估值", "en": "Tech Valuation"},
            "title": {"zh": "Slide 05 | 升息對高成長科技股的「遠期現金流槓桿打擊」", "en": "Slide 05 | Rate Hike Leverage Impact on High-Growth Tech Stocks"},
            "content": {
                "zh": """
                    <p>為什麼央行升息時，成長型科技股（如 AI 飆股）的跌幅遠大於傳統金融股與價值股？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🚀 科技股現金流特質 (Long Duration)</h4>
                            <p>高成長科技股當前獲利極低甚至虧損，主要的現金流爆發期集中在 10-20 年後的遠期 ($n$ 很大)。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 分母 $(1+r)^n$ 的次方懲罰</h4>
                            <p>當 $n=15$ 年時，折現率 $r$ 從 2% 升至 5%，使 $(1+r)^{15}$ 從 1.34 暴增至 2.08，現值直接<b>暴跌 35.5%</b>！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Why do high-growth tech stocks plummet much harder than value stocks during Fed rate hikes?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🚀 Long Duration Cash Flow Profile</h4>
                            <p>Tech companies generate little profit today; their big earnings lie 10-20 years in the future ($n$ is very large).</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 The Exponential Discounting Penalty</h4>
                            <p>For $n=15$ years, increasing $r$ from 2% to 5% increases denominator $(1+r)^{15}$ from 1.34 to 2.08, crushing $PV$ by 35.5%!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 6
        {
            "id": 6, "hour": 1, "tag": {"zh": "房貸連動", "en": "Mortgage Impact"},
            "title": {"zh": "Slide 06 | 房貸利率與不動產估值的傳導機制", "en": "Slide 06 | Mortgage Rates & Real Estate Valuation Mechanics"},
            "content": {
                "zh": """
                    <p>利率變動直接決定購屋族群的每月負擔能力，進而震撼房地產價格：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏡 房貸利率從 1.5% 升至 2.5%</h4>
                            <p>以 1,500 萬 30 年期房貸計算，每月房貸本息負擔從 5.17 萬元暴增至 5.92 萬元（每月多掏 7,500 元）。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 不動產資本化率 (Cap Rate)</h4>
                            <p>房地產收益率 $\\text{Cap Rate} = \\frac{\\text{Net Operating Income}}{\\text{Property Value}}$。利率上升拉高 Cap Rate 要求，逼使房價修正。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Interest rates govern monthly home buyer purchasing power, shaping real estate trends:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏡 Mortgage Rate Jump Example</h4>
                            <p>For a $15M 30y mortgage, increasing rates from 1.5% to 2.5% bumps monthly payments from $51.7k to $59.2k.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 Cap Rate Expansion Pressure</h4>
                            <p>$\\text{Cap Rate} = \\frac{\\text{NOI}}{\\text{Price}}$. Higher interest rates force Cap Rates up, pressuring real estate valuations down.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 7
        {
            "id": 7, "hour": 1, "tag": {"zh": "信貸與定存", "en": "Loans & Savings"},
            "title": {"zh": "Slide 07 | 央行政策利率升降對個人信貸與銀行利差之衝擊", "en": "Slide 07 | Impact on Individual Loans & Bank Net Interest Margins"},
            "content": {
                "zh": """
                    <p>央行調整基準利率，如何影響一般個人的信貸與銀行的獲利模式？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💳 個人信用貸款與汽車貸款</h4>
                            <p>浮動利率信貸跟隨央行同步調升，增加家庭利息支出負擔，壓抑民眾自願性消費支出。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏦 銀行淨利息收入 (NIM)</h4>
                            <p>升息初期，銀行貸款放款利率調升速度快於存款付息速度，帶動淨利息收益率 (NIM) 擴張，促成銀行股利多。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>How do benchmark rate decisions trickle down to consumer loans and bank profitability?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💳 Personal & Auto Loans</h4>
                            <p>Floating-rate loans adjust upward, increasing household interest expenses and cooling consumer spending.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🏦 Bank Net Interest Margin (NIM)</h4>
                            <p>In early rate hike cycles, loan rates rise faster than deposit rates, expanding bank NIMs and boosting bank stock earnings.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 8
        {
            "id": 8, "hour": 1, "tag": {"zh": "政策利率與殖利率", "en": "Policy vs Yield"},
            "title": {"zh": "Slide 08 | 區分「央行政策利率 (Policy Rate)」與「市場殖利率 (Yield)」", "en": "Slide 08 | Distinguishing Central Bank Policy Rates vs Market Yields"},
            "content": {
                "zh": """
                    <p>初學者常混淆央行決定的利率與金融市場的國債殖利率：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏛️ 央行政策利率 (Policy Rate)</h4>
                            <p>聯邦基金利率 (Fed Funds Rate) 或台灣央行重貼現率，由央行理監事會議人為宣佈設定的隔夜拆款目標。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 市場殖利率 (Market Yield)</h4>
                            <p>10 年期國債殖利率 (US10Y)，由全球債券市場供需、通膨預期與經濟成長展望，每分每秒動態交易決定。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Novice investors frequently confuse policy rates set by officials with market-traded yields:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🏛️ Central Bank Policy Rate</h4>
                            <p>Fed Funds Rate set by the FOMC; an overnight rate target declared administratively by central bankers.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 Market Bond Yield</h4>
                            <p>US 10-Year Treasury Yield (US10Y), determined 24/7 by supply/demand, inflation expectations, and growth outlook.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 9
        {
            "id": 9, "hour": 1, "tag": {"zh": "資產定價 CAPM", "en": "CAPM Model"},
            "title": {"zh": "Slide 9 | 資本資產定價模型 (CAPM) 中的利率位置", "en": "Slide 09 | The Role of Interest Rates in the CAPM Model"},
            "content": {
                "zh": """
                    <p>財務學諾貝爾獎模型 CAPM 揭示了資產要求報酬率的組成：</p>
                    $$E(R_i) = R_f + \\beta_i [E(R_m) - R_f]$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 算式核心意義</h4>
                            <p>$R_f$ 提升會直接拉高 $E(R_i)$（要求報酬率）。對高 $\\beta$ 股票（高波動科技股），升息的估值扣壓效果呈現倍數放大。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 投資人行為轉變</h4>
                            <p>當無風險利率 $R_f = 5\\%$ 時，投資人不再願意承擔高風險去買市盈率 (P/E) 高達 60 倍的股票。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>The Nobel-winning CAPM model formalizes how interest rates dictate required stock returns:</p>
                    $$E(R_i) = R_f + \\beta_i [E(R_m) - R_f]$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Key Insight</h4>
                            <p>A higher $R_f$ raises $E(R_i)$ across the board. High-$\\beta$ tech stocks experience amplified valuation compression.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 Investor Allocation Shift</h4>
                            <p>When risk-free Treasury yield $R_f = 5\\%$, money flees 60x P/E speculative stocks into safe Treasuries.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 10
        {
            "id": 10, "hour": 1, "tag": {"zh": "第一小時小結", "en": "Hour 1 Summary"},
            "title": {"zh": "Slide 10 | 第一小時小結與專屬活動預告", "en": "Slide 10 | Hour 1 Summary & Activity Preview"},
            "content": {
                "zh": """
                    <p>第一小時小結：我們掌握了無風險利率 $R_f$、折現現值公式 $PV = \\frac{FV}{(1+r)^n}$，以及升息對高科技股的遠期現金流打擊。</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 專屬活動：升息下的房貸負擔與折現計算盤</h4>
                            <p>點擊頂部選單「🎯 1小時活動: 折現計算」，輸入房貸利率與未來現金流，計算現值折扣率！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第二小時預告</h4>
                            <p>第二小時我們將解密華爾街必看的「Fed 點陣圖 (Dot Plot)」與「戈登股利成長模型」！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 1 Summary: We mastered $R_f$, $PV = \\frac{FV}{(1+r)^n}$, and tech stock valuation sensitivity to interest rates.</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 Hour 1 Activity Preview</h4>
                            <p>Click "Discount Calc" on the top menu to calculate Present Value discounts under rate hikes.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Hour 2 Preview</h4>
                            <p>In Hour 2, we unlock Wall Street's favorite tool: The Fed Dot Plot & Gordon Growth Model!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 11
        {
            "id": 11, "hour": 2, "tag": {"zh": "戈登模型", "en": "Gordon Model"},
            "title": {"zh": "Slide 11 | 經典股票估值理論：戈登股利成長模型 (Gordon Model)", "en": "Slide 11 | Classical Valuation: Gordon Dividend Growth Model"},
            "content": {
                "zh": """
                    <p>進入第二小時，我們探討利率對股票合理價格 $P_0$ 的直接數學模型：</p>
                    $$P_0 = \\frac{D_1}{r - g}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 符號解讀</h4>
                            <p>$P_0$：股票合理價格；$D_1$：下一期股利；$r$：投資人要求報酬率 ($r = R_f + \\text{Risk Premium}$)；$g$：股利永續成長率。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 敏感度驚人演算</h4>
                            <p>若 $D_1=5$ 元，$g=3\\%$。當 $r$ 因升息由 5% 增至 6% 時，分母 $(r-g)$ 從 2% 變成 3%，股票合理價格從 250 元<b>暴跌至 166.7 元 (-33.3%)</b>！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 2 begins with the classic mathematical link between interest rates and stock prices:</p>
                    $$P_0 = \\frac{D_1}{r - g}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Component Definitions</h4>
                            <p>$P_0$: Fair Stock Price; $D_1$: Next Dividend; $r$: Required Return ($r = R_f + \\text{Premium}$); $g$: Perpetual Growth Rate.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 Extreme Sensitivity</h4>
                            <p>If $D_1=5$, $g=3\\%$. When $r$ rises from 5% to 6%, denominator $(r-g)$ jumps from 2% to 3%, forcing fair value down from $250 to $166.7 (-33.3%)!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 12
        {
            "id": 12, "hour": 2, "tag": {"zh": "Fed 點陣圖", "en": "Fed Dot Plot"},
            "title": {"zh": "Slide 12 | 華爾街羅盤：聯準會 (Fed) 點陣圖 (Dot Plot) 讀圖大解密", "en": "Slide 12 | Reading the Fed Dot Plot Masterclass"},
            "img": "images/w3_dotplot.jpg",
            "content": {
                "zh": """
                    <p>每季 FOMC 會議後公佈的「點陣圖 (Dot Plot)」，是全球資本市場預測未來利率路徑的核心指引：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 點陣圖組成</h4>
                            <p>由 19 位 FOMC 官員（聯邦理事與分行行長）匿名點出的未來 1-3 年及長期基準利率落點預測。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 鷹派 (Hawkish) vs 鴿派 (Dovish) 中位數</h4>
                            <p>市場交易員專注於「點陣圖中位數」的移轉。若中位數向上拉升 50 bps（鷹派），股市應聲暴跌；反之則引發大慶祝行情。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>The Federal Reserve's quarterly <b>Dot Plot</b> guides global capital market expectations for interest rate paths:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 Anatomy of the Dot Plot</h4>
                            <p>Anonymous rate forecasts from 19 FOMC members for the end of the next 1-3 years and the long run.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 Hawkish vs Dovish Shifts</h4>
                            <p>Traders track the "Median Dot". If the median shifts up 50 bps (Hawkish), stocks drop; if it shifts lower (Dovish), markets rally.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 13
        {
            "id": 13, "hour": 2, "tag": {"zh": "FOMC 聲明", "en": "FOMC Statement"},
            "title": {"zh": "Slide 13 | FOMC 會議聲明與主席記者會字斟句酌 (Fed Speak)", "en": "Slide 13 | FOMC Statements & Press Conference Nuances"},
            "content": {
                "zh": """
                    <p>除了點陣圖，全球金融市場對聯準會主席的發言進行「字詞NLP等級」的解讀：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🦅 鷹派語言 (Hawkish)</h4>
                            <p>強調「通膨風險居高不下」、「將在更長時間維持高利率 (Higher for Longer)」，引發市場避險。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🕊️ 鴿派語言 (Dovish)</h4>
                            <p>強調「政策具備足夠限制性」、「關注就業市場降溫風險」、「考慮預防性降息」，激勵股市上揚。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Markets analyze every word in the FOMC statement and Fed Chair press conference with NLP-level granularity:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🦅 Hawkish Terminology</h4>
                            <p>"Inflation risks remain elevated", "Rates higher for longer". Prompts market risk-off sentiment.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🕊️ Dovish Terminology</h4>
                            <p>"Policy is in restrictive territory", "Monitoring labor cooling", "Risk management approach". Triggers risk-on rallies.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 14
        {
            "id": 14, "hour": 2, "tag": {"zh": "傳導管道", "en": "Transmission"},
            "title": {"zh": "Slide 14 | 貨幣政策傳導機制 (Transmission Mechanism) 4 大管道", "en": "Slide 14 | Monetary Policy Transmission: 4 Major Channels"},
            "content": {
                "zh": """
                    <p>央行改變基準利率後，如何透過四大管道滲透至實體經濟與資產價格？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>1. 利率管道 & 2. 資產價格管道</h4>
                            <p>• 利率管道：借貸成本上升 ➡️ 抑制企業資本支出 CAPEX。<br>• 資產價格管道：折現率上升 ➡️ 股市與房價修正（財富效果減弱）。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>3. 匯率管道 & 4. 信貸管道</h4>
                            <p>• 匯率管道：利差擴大 ➡️ 本國貨幣升值 ➡️ 出口競爭力受壓。<br>• 信貸管道：銀行審核趨嚴 ➡️ 市場信用放款收縮。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>How central bank rate moves filter into the real economy via 4 primary transmission channels:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>1. Interest Rate & 2. Asset Price Channel</h4>
                            <p>• Interest Rate: Higher borrowing costs dampen corporate CAPEX.<br>• Asset Price: Discounting depresses stocks/housing (negative wealth effect).</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>3. Exchange Rate & 4. Credit Channel</h4>
                            <p>• Exchange Rate: Yield spread pushes currency up, impacting exports.<br>• Credit: Banks tighten lending standards, shrinking money supply.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 15
        {
            "id": 15, "hour": 2, "tag": {"zh": "QE與QT", "en": "QE & QT"},
            "title": {"zh": "Slide 15 | 量化寬鬆 (QE) vs. 量化緊縮 (QT) 對市場流動性之衝擊", "en": "Slide 15 | Quantitative Easing (QE) vs Tightening (QT)"},
            "content": {
                "zh": """
                    <p>除了調整利率，央行資產負債表的擴張與收縮直接主宰了全球資產水位：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌊 量化寬鬆 (QE: Quantitative Easing)</h4>
                            <p>央行大舉印鈔在公開市場印錢購買國債與 MBS，將資金注入金融體系，推升股市與房地產超級天花板。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🩸 量化緊縮 (QT: Quantitative Tightening)</h4>
                            <p>央行縮減資產負債表，任由到期國債自然贖回不重新購買，回收市場游資，壓抑高估值資產。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Central bank balance sheet expansion and contraction dictate global liquidity levels:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🌊 Quantitative Easing (QE)</h4>
                            <p>Central banks print money to buy Treasuries & MBS, flooding financial markets with cash and driving asset bubbles.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🩸 Quantitative Tightening (QT)</h4>
                            <p>Central banks shrink balance sheets, withdrawing liquidity and compressing risky asset multiples.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 16
        {
            "id": 16, "hour": 2, "tag": {"zh": "殖利率曲線倒掛", "en": "Inverted Yield Curve"},
            "title": {"zh": "Slide 16 | 學術警告：殖利率曲線倒掛 (Yield Curve Inversion)", "en": "Slide 16 | Academic Recession Warning: Inverted Yield Curve"},
            "content": {
                "zh": """
                    <p>在正常經濟體中，長期國債殖利率應高於短期殖利率（長債面臨更高的時間風險）：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📈 正常殖利率曲線 (Normal Curve)</h4>
                            <p>10 年期國債殖利率 > 2 年期國債殖利率 (10Y-2Y Spread > 0)。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ 殖利率曲線倒掛 (Inverted Curve)</h4>
                            <p>短期利率被央行升息急劇拉高，而市場預測遠期經濟衰退導致長債買盤湧入，使得 <b>10Y-2Y Spread < 0</b>！歷史上倒掛是衰退的百分之百前兆。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>In a healthy economy, long-term yields exceed short-term yields due to time premiums:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📈 Normal Yield Curve</h4>
                            <p>10-Year Yield > 2-Year Yield (10Y-2Y Spread > 0).</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>⚠️ Inverted Yield Curve</h4>
                            <p>Short rates soar via Fed hikes while long-end reflects future growth destruction. <b>10Y-2Y Spread turns negative</b>, historically signaling 100% of US recessions!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 17
        {
            "id": 17, "hour": 2, "tag": {"zh": "泰勒法則", "en": "Taylor Rule"},
            "title": {"zh": "Slide 17 | 計量模型：泰勒法則 (Taylor Rule) 利率估算", "en": "Slide 17 | Econometric Model: The Taylor Rule"},
            "content": {
                "zh": """
                    <p>經濟學家約翰·泰勒 (John Taylor) 提出計算央行理想目標利率的公式：</p>
                    $$i^* = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - y^*)$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 模型參數解讀</h4>
                            <p>$\\pi - \\pi^*$：通膨偏離央行目標幅度；$y - y^*$：產出缺口 (Output Gap)。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 實務意義</h4>
                            <p>泰勒法則提供了一個客觀的計量基準，評估當前央行的政策利率到底屬於「太鬆」還是「太緊」。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>John Taylor formulated an empirical benchmark for target central bank policy rates:</p>
                    $$i^* = r^* + \\pi + 0.5(\\pi - \\pi^*) + 0.5(y - y^*)$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📌 Formula Variables</h4>
                            <p>$\\pi - \\pi^*$: Inflation gap relative to 2% target; $y - y^*$: Output gap.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 Practical Utility</h4>
                            <p>The Taylor Rule provides an objective benchmark assessing whether policy is too accommodative or overly restrictive.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 18
        {
            "id": 18, "hour": 2, "tag": {"zh": "債券價格反向", "en": "Bond Price Inverse"},
            "title": {"zh": "Slide 18 | 債券市場鐵律：價格與殖利率的反向關係", "en": "Slide 18 | Iron Rule of Bonds: Price & Yield Inverse Relationship"},
            "content": {
                "zh": """
                    <p>許多新手無法理解：<b>「為什麼國債殖利率飆升，持有的公債 ETF 卻在暴跌崩盤？」</b></p>
                    $$P_{Bond} = \\sum_{t=1}^n \\frac{C}{(1+y)^t} + \\frac{M}{(1+y)^n}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 殖利率 $y$ 上升 ➡️ 債券價格 $P$ 暴跌</h4>
                            <p>當市場發行全新的 5% 高利國債時，舊發行的 2% 低利國債價值大減，價格必須下跌折價，直到其殖利率與 5% 對齊。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🛡️ 存續期間 (Duration) 風險</h4>
                            <p>長天期債券（如 20年期美債）對殖利率極度敏感，當殖利率上漲 1%，債券價格約下跌 15-20%！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>A fundamental misconception: <b>Why do bond ETF prices crash when Treasury yields surge?</b></p>
                    $$P_{Bond} = \\sum_{t=1}^n \\frac{C}{(1+y)^t} + \\frac{M}{(1+y)^n}$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 Rising Yield $y$ ➡️ Falling Bond Price $P$</h4>
                            <p>When new 5% bonds are issued, existing 2% bonds become unattractive; their market price drops until their yield matches 5%.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>🛡️ Duration Risk</h4>
                            <p>Long-duration 20-year Treasuries are hyper-sensitive: a 1% yield spike drops bond prices by 15-20%!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 19
        {
            "id": 19, "hour": 2, "tag": {"zh": "防禦策略", "en": "Rate Strategies"},
            "title": {"zh": "Slide 19 | 升息與降息循環下的資產板塊輪動策略", "en": "Slide 19 | Asset Sector Rotation in Rate Cycles"},
            "content": {
                "zh": """
                    <p>掌握貨幣政策循環，靈活調整資產配置：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📈 升息循環 (Rate Hike Cycle)</h4>
                            <p>避開長天期美債與高估值零獲利科技股；擁抱貨幣市場基金 (MMF)、短債與高現金流金融股。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 降息循環 (Rate Cut Cycle)</h4>
                            <p>鎖定長天期美債資本利得 (Capital Gains)；重分配至高成長 AI 科技股與房地產投資信託 (REITs)。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Navigate financial cycles by dynamically rotating asset allocation:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📈 Rate Hike Cycle Strategy</h4>
                            <p>Avoid long-duration Treasuries and zero-profit tech stocks; favor Money Market Funds (MMF) and Banks.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📉 Rate Cut Cycle Strategy</h4>
                            <p>Lock in capital gains on long-term Treasuries; allocate to high-growth Tech stocks and REITs.</p>
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
                    <p>第二小時小結：我們解碼了戈登模型、Fed 點陣圖、貨幣傳導機制與殖利率倒掛。</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 專屬活動：Fed 點陣圖 (Dot Plot) 利率估值測試</h4>
                            <p>點擊頂部「🎯 2小時活動: 點陣圖預測」，研判官員降息碼數與股票估值拉升幅度！</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第三小時預告</h4>
                            <p>第三小時我們將實事查核美國 10 年期美債 20 年數據、殖利率倒掛與軟著陸歷史對決！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 2 Summary: We unlocked the Gordon Model, Fed Dot Plot, transmission channels, and inverted yield curves.</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🎯 Hour 2 Activity Preview</h4>
                            <p>Click "Dot Plot Calc" on top menu to calculate rate cut expectations and stock valuation boosts.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Hour 3 Preview</h4>
                            <p>In Hour 3, we audit 20-year US Treasury yield charts and historical soft landing vs hard landing battles!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 21
        {
            "id": 21, "hour": 3, "tag": {"zh": "數據實查", "en": "US10Y Data"},
            "title": {"zh": "Slide 21 | 美國 10 年期公債殖利率 (US10Y) 20 年數據實查", "en": "Slide 21 | US 10-Year Treasury Yield (US10Y) 20-Year Audit"},
            "img": "images/w3_yieldcurve.jpg",
            "content": {
                "zh": """
                    <p>進入第三小時實證階段，分析 FRED 資料庫中 US10Y 20 年的歷史關聯：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 2008-2021 超低利率時代</h4>
                            <p>US10Y 長期低於 2%，低無風險利率創造了全球科技股與房地產的黃金 10 年大多頭。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 2022-2026 高利率回歸</h4>
                            <p>US10Y 一度飆突破 5.0%，無風險利率衝高引發全球債市歷史性暴跌與科技股本益比大洗牌。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Hour 3 empirical section: Analyzing 20 years of US10Y FRED historical data:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📉 2008-2021 Era of Ultra-Low Rates</h4>
                            <p>US10Y remained below 2%, creating the golden decade bull market for tech stocks and real estate.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 2022-2026 Return of High Yields</h4>
                            <p>US10Y spiked above 5.0%, causing a historical bond market sell-off and resetting P/E multiples worldwide.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 22
        {
            "id": 22, "hour": 3, "tag": {"zh": "倒掛與衰退", "en": "Inversion & Recession"},
            "title": {"zh": "Slide 22 | 殖利率倒掛解除 (Un-inversion) 與衰退爆發時間點", "en": "Slide 22 | Yield Curve Un-Inversion & Recession Timing"},
            "content": {
                "zh": """
                    <p>歷史計量數據顯示：經濟衰退往往不是發生在「倒掛時」，而是發生在「倒掛解除時」！</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚠️ 倒掛解除的真相 (Bull Steepening)</h4>
                            <p>當央行因看到經濟出現急劇惡化而開始急促降息，短期利率暴跌使倒掛解除，此時衰退正式爆發。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 歷史時間差 (Lag of 12-18 Months)</h4>
                            <p>從殖利率曲線首次倒掛到經濟正式陷入衰退，平均滯後 12 至 18 個月。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Empirical evidence shows recessions rarely hit during the inversion itself, but when the curve <b>un-inverts</b>!</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚠️ Un-Inversion Mechanics (Bull Steepening)</h4>
                            <p>When the Fed panics and cuts short rates rapidly as growth fails, the curve un-inverts just as recession hits.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 12-18 Month Time Lag</h4>
                            <p>The time lag from initial curve inversion to NBER-declared recession averages 12 to 18 months.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 23
        {
            "id": 23, "hour": 3, "tag": {"zh": "軟著陸對決", "en": "Landing Scenario"},
            "title": {"zh": "Slide 23 | 歷史對決：軟著陸 (Soft Landing) vs. 硬著陸 (Hard Landing)", "en": "Slide 23 | Historical Battle: Soft Landing vs Hard Landing"},
            "content": {
                "zh": """
                    <p>升息循環終點的三大經濟情境對資產表現的影響：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛬 軟著陸 (Soft Landing, 如 1995)</h4>
                            <p>通膨順利降至 2%，經濟未陷入衰退。央行預防性降息，股市迎來無縫接軌的大暴漲。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 硬著陸 (Hard Landing, 如 2008/2000)</h4>
                            <p>高利率過度緊縮壓垮實體經濟與金融體系，企業違約暴增，股市迎來 30-50% 毀滅性修正。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Three macroeconomic landing scenarios at the end of rate hike cycles:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛬 Soft Landing (e.g. 1995)</h4>
                            <p>Inflation returns to 2% without triggering recession. Preventive rate cuts unleash a massive equity bull run.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💥 Hard Landing (e.g. 2000 / 2008)</h4>
                            <p>High rates crush credit markets, triggering corporate defaults and a 30-50% stock market crash.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 24
        {
            "id": 24, "hour": 3, "tag": {"zh": "利率敏感度", "en": "Duration & Beta"},
            "title": {"zh": "Slide 24 | 資產對利率敏感度分析：存續期間 (Duration) 與 Beta", "en": "Slide 24 | Asset Sensitivity Analysis: Duration & Beta"},
            "content": {
                "zh": """
                    <p>如何量化個人投資組合對利率變動的敏感度？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⏱️ 存續期間 (Duration) 衡量</h4>
                            <p>債券或股票現金流回本的加權平均時間。Duration 越長（如零息債券、高成長科技股），受利率影響越劇烈。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 利率 Beta 值</h4>
                            <p>評估個股對 10 年期美債殖利率變動的反應係數。金融股通常具備正相向，科技股呈現強烈負相關。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>How to quantify your portfolio's sensitivity to interest rate fluctuations?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⏱️ Duration Metric</h4>
                            <p>Weighted average time to receive asset cash flows. Longer duration assets experience harsher price swings per 1% rate change.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📊 Rate Beta Coefficient</h4>
                            <p>Measures stock return elasticity relative to US10Y changes. Financials exhibit positive beta; tech exhibits strong negative beta.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 25
        {
            "id": 25, "hour": 3, "tag": {"zh": "債券資本利得", "en": "Bond Capital Gains"},
            "title": {"zh": "Slide 25 | 降息循環前夕佈局長天期美債的資本利得算術", "en": "Slide 25 | Long Bond Capital Gains Math Before Rate Cuts"},
            "content": {
                "zh": """
                    <p>為什麼資本市場在央行停止升息時，會大量湧入長天期美債 (如 TLT)？</p>
                    $$\\Delta P \\approx -\\text{Duration} \\times \\Delta y$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🧮 算式演示 (以 Duration = 17 年之長債為例)</h4>
                            <p>當央行在降息循環中使殖利率下滑 2.0% ($\\Delta y = -2\\%$)：$$\\Delta P \\approx -17 \\times (-2\\%) = +34\\%$$</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💰 雙盈策略 (Yield + Capital Gain)</h4>
                            <p>投資人不僅能鎖定高高無風險利息 (e.g. 4.5%)，還能在降息時賺取高達 30% 以上的債券資本利得價差！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Why do global investors flood into long-duration Treasuries (e.g. TLT) prior to Fed rate cuts?</p>
                    $$\\Delta P \\approx -\\text{Duration} \\times \\Delta y$$
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🧮 Math Example (17-Year Duration Bond)</h4>
                            <p>If yields decline by 2.0% during a rate-cut cycle ($\\Delta y = -2\\%$): $$\\Delta P \\approx -17 \\times (-2\\%) = +34\\%$$</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💰 Double Benefit Strategy</h4>
                            <p>Lock in high risk-free coupon income (4.5%) while gaining over 30%+ in bond capital gains when rates drop!</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 26
        {
            "id": 26, "hour": 3, "tag": {"zh": "高利定存陷阱", "en": "CD Trap"},
            "title": {"zh": "Slide 26 | 警惕高利定存陷阱：再投資風險 (Reinvestment Risk)", "en": "Slide 26 | Beware High-Yield CD Traps: Reinvestment Risk"},
            "content": {
                "zh": """
                    <p>許多散戶在升息末期喜歡鎖定「6 個月 5.5% 高利美元定存」，這存在什麼隱形陷阱？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚠️ 再投資風險 (Reinvestment Risk)</h4>
                            <p>6 個月定存到期後，央行已經啟動急促降息，屆時續存利率可能暴跌至 2%，無法長期鎖定高利。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 錯過債券資本利得</h4>
                            <p>定存不具備價格彈性，無法像長天期國債一樣享受到 30% 以上的價格大漲好處。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Retail investors love 6-month 5.5% US Dollar CDs during peak rates. What is the hidden trap?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚠️ Reinvestment Risk</h4>
                            <p>When the 6-month CD expires, the Fed has cut rates to 2%. You cannot lock in high rates long-term.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>💡 Missing Bond Rallies</h4>
                            <p>CDs carry zero price elasticity, missing out on 30%+ bond capital gains during rate-cut rallies.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 27
        {
            "id": 27, "hour": 3, "tag": {"zh": "中性利率", "en": "R-Star"},
            "title": {"zh": "Slide 27 | 前沿概念：長期中性利率 ($R^*$) 與自然利率拉升", "en": "Slide 27 | Frontier Concept: The Neutral Rate ($R^*$)"},
            "content": {
                "zh": """
                    <p>2026 年華爾街熱議的核心：長期中性利率 ($R^*$) 是否已經顯著拉升？</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚖️ 中性利率 ($R^*$) 的定義</h4>
                            <p>既不刺激經濟也不壓抑經濟的理論平衡利率。過去 20 年約為 0.5%，現今預估拉升至 1.5-2.0%。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 意涵：低利率時代徹底結束</h4>
                            <p>$R^*$ 上移意味著未來央行降息終點利率 (Terminal Rate) 將高於過去，零利率 (ZIRP) 時代不再回頭。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Wall Street's major debate: Has the long-term Neutral Rate ($R^*$) structurally shifted higher?</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>⚖️ What is the Neutral Rate ($R^*$)?</h4>
                            <p>The theoretical interest rate that neither stimulates nor restricts growth. Historically ~0.5%, now estimated at 1.5-2.0%.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4>📈 End of Zero Interest Rate Policy (ZIRP)</h4>
                            <p>A higher $R^*$ means terminal policy rates will settle at higher levels than the post-2008 decade.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 28
        {
            "id": 28, "hour": 3, "tag": {"zh": "資產配置法則", "en": "Allocation Principles"},
            "title": {"zh": "Slide 28 | 建立利率敏捷思維：資產配置 4 大操作法則", "en": "Slide 28 | Building Rate-Agile Portfolios: 4 Core Rules"},
            "content": {
                "zh": """
                    <p>總結因應利率循環的四大黃金法則：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ 四大操作原則</h4>
                            <p>1. 升息末期逐漸增加長天期公債 Duration 鎖定高利與價差。<br>2. 高利率時期重視企業現金流與資產負債表健全度。<br>3. 監控 10Y-2Y 殖利率曲線倒掛與解除訊號。<br>4. 拒絕單一賭注，利用股票、債券與現金做跨資產動態再平衡。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Summary of 4 gold rules for navigating central bank rate cycles:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>🛡️ 4 Action Rules</h4>
                            <p>1. Extend bond Duration near rate hike peaks to capture yield & capital gains.<br>2. Prioritize strong balance sheet companies during high rate eras.<br>3. Monitor 10Y-2Y yield curve inversion and un-inversion signals.<br>4. Dynamic rebalancing across equities, bonds, and cash.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 29
        {
            "id": 29, "hour": 3, "tag": {"zh": "第三週總結", "en": "Week 3 Summary"},
            "title": {"zh": "Slide 29 | 第三週全景知識體系圖與觀念整合", "en": "Slide 29 | Week 3 Knowledge Graph & Synthesis"},
            "content": {
                "zh": """
                    <p>第三週全景知識體系整合：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 觀念關聯鏈條</h4>
                            <p>央行基準利率 ➡️ 無風險利率 $R_f$ ➡️ 折現現值 $PV = \\frac{FV}{(1+r)^n}$ ➡️ 戈登模型估值 ➡️ 點陣圖預測 ➡️ 殖利率倒掛與債券價格反向 $\\Delta P \\approx -\\text{Duration} \\times \\Delta y$。</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Week 3 Synthesis Knowledge Roadmap:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>💡 Concept Connection Chain</h4>
                            <p>Policy Rate ➡️ Risk-Free Rate $R_f$ ➡️ Discounted Present Value $PV$ ➡️ Gordon Model ➡️ Fed Dot Plot ➡️ Inverted Curve & Bond Price Inverse $\\Delta P \\approx -\\text{Duration} \\times \\Delta y$.</p>
                        </div>
                    </div>
                """
            }
        },
        # SLIDE 30
        {
            "id": 30, "hour": 3, "tag": {"zh": "作業與預告", "en": "Assignment & Preview"},
            "title": {"zh": "Slide 30 | 學習反思與第四週預告 (股票市場基礎與企業估值)", "en": "Slide 30 | Reflection & Next Week Preview (Stock Fundamentals & Valuation)"},
            "content": {
                "zh": """
                    <p>第三週學習任務告一段落！請完成課後實務作業：</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📝 本週課堂實務作業</h4>
                            <p>點擊頂部「📝 本週課堂作業」，填寫聯準會降息循環下之 3 大資產調配報告並在線提交。</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview 第四週主題預告</h4>
                            <p>第四週我們將探討【股票市場基礎與企業估值】，深入 P/E、P/B 與 EV/EBITDA 財務指標實戰！</p>
                        </div>
                    </div>
                """,
                "en": """
                    <p>Week 3 Conclusion! Complete your classroom assignment:</p>
                    <div class="slide-grid">
                        <div class="slide-card-box">
                            <h4>📝 Weekly Classroom Assignment</h4>
                            <p>Click "Homework Assignment" on top menu to submit your Rate Cut Cycle Asset Allocation Report.</p>
                        </div>
                        <div class="slide-card-box">
                            <h4> Preview Week 4 Topic Preview</h4>
                            <p>Next week: "Stock Market Fundamentals & Corporate Valuation (P/E, P/B, EV/EBITDA)"!</p>
                        </div>
                    </div>
                """
            }
        }
    ]

    # Convert slides to JSON JS code
    js_content = f"""// 115管理探索二 第三週：利率、央行貨幣政策與資產價格
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

// 30 PURE TEACHING SLIDES DATA FOR WEEK 3
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
function calculateDiscount() {{
  const fv = parseFloat(document.getElementById('fvInput').value) || 1000;
  const rate1 = (parseFloat(document.getElementById('rate1Input').value) || 2.0) / 100;
  const rate2 = (parseFloat(document.getElementById('rate2Input').value) || 5.0) / 100;
  const years = parseFloat(document.getElementById('yearsInput').value) || 15;

  const pv1 = fv / Math.pow(1 + rate1, years);
  const pv2 = fv / Math.pow(1 + rate2, years);
  const dropPct = (((pv2 - pv1) / pv1) * 100).toFixed(1);

  const resEl = document.getElementById('discountResult');
  if (resEl) resEl.innerText = `低利率現值：$${{pv1.toFixed(1)}} ➡️ 高利率現值：$${{pv2.toFixed(1)}}。現值估值暴跌：${{dropPct}}%！`;
}}

function openActivity2Modal() {{
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.add('active');
}}
function closeActivity2Modal() {{
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.remove('active');
}}
function calculateValuation() {{
  const d1 = parseFloat(document.getElementById('d1Input').value) || 5;
  const g = (parseFloat(document.getElementById('gInput').value) || 3.0) / 100;
  const rOld = (parseFloat(document.getElementById('rOldInput').value) || 5.0) / 100;
  const rNew = (parseFloat(document.getElementById('rNewInput').value) || 6.0) / 100;

  const pOld = d1 / (rOld - g);
  const pNew = d1 / (rNew - g);
  const dropPct = (((pNew - pOld) / pOld) * 100).toFixed(1);

  const resEl = document.getElementById('valuationResult');
  if (resEl) resEl.innerText = `原估值合理價：$${{pOld.toFixed(1)}} ➡️ 升息後合理價：$${{pNew.toFixed(1)}}。合理股價大跌：${{dropPct}}%！`;
}}

// Hour 3 Game
const w3GameQuestions = [
  {{
    title_zh: "關卡 1：折現現值公式盲測", title_en: "Level 1: Present Value Discounting Test",
    news_zh: "『當聯準會宣佈升息 2 碼 (0.5%)，請問折現公式 PV = FV / (1+r)^n 中的現值 PV 會如何變化？』", news_en: "'When Fed hikes 50 bps, how does Present Value PV change in PV = FV / (1+r)^n?'",
    options_zh: ["現值 PV 暴跌，因為折現率 r 位在分母，分母變大現值必定縮水", "現值 PV 暴漲，因為利率越高資產越值錢"], options_en: ["PV drops, as r in the denominator increases", "PV surges, higher rates mean higher values"],
    answer: 0, explain_zh: "正確！折現率 r 在分母，升息必定壓低資產現值。", explain_en: "Correct! r in the denominator forces PV down."
  }},
  {{
    title_zh: "關卡 2：Fed 點陣圖解碼", title_en: "Level 2: Fed Dot Plot Decoding",
    news_zh: "『如果最新的 Fed 點陣圖中位數向上拉升了 50 bps（鷹派），股市將會有何反應？』", news_en: "'If the Fed Dot Plot median moves up 50 bps (Hawkish), how does stock market react?'",
    options_zh: ["科技股遭遇估值殺盤暴跌，因為預期未來利率更高等同提高折現率", "科技股大幅慶祝上漲"], options_en: ["Tech stocks sell off due to higher future discount rates", "Tech stocks rally heavily"],
    answer: 0, explain_zh: "正確！鷹派點陣圖代表高利率維持更久，壓縮股票本益比。", explain_en: "Correct! Hawkish dots compress stock P/E multiples."
  }},
  {{
    title_zh: "關卡 3：殖利率曲線倒掛警訊", title_en: "Level 3: Yield Curve Inversion Warning",
    news_zh: "『美債 10 年期殖利率低於 2 年期殖利率 (10Y-2Y Spread < 0)，這在歷史上記錄為何？』", news_en: "'10Y Treasury yield drops below 2Y yield (10Y-2Y < 0). What does history show?'",
    options_zh: ["經濟即將迎來歷史最大擴張榮景", "100% 成功預測未來的經濟衰退 (Recession)，通常滯後 12-18 個月爆發"], options_en: ["Economy will enter unprecedented boom", "100% historical accuracy predicting recessions in 12-18 months"],
    answer: 1, explain_zh: "正確！殖利率曲線倒掛是二戰以來預測衰退最精準的指標。", explain_en: "Correct! Curve inversion predicts 100% of US recessions."
  }},
  {{
    title_zh: "關卡 4：債券價格反向鐵律", title_en: "Level 4: Bond Price Inverse Rule",
    news_zh: "『當美債殖利率從 3.5% 飆升到 5.0% 時，你持有的長天期美債 ETF 價格會如何？』", news_en: "'When US 10Y yield surges 3.5% to 5.0%, what happens to long bond ETF prices?'",
    options_zh: ["價格大幅暴跌，因為債券價格與殖利率呈現嚴格反向關係", "價格上漲，因為利息變高了"], options_en: ["Prices crash due to inverse yield relationship", "Prices rise due to higher coupons"],
    answer: 0, explain_zh: "正確！債券價格與殖利率呈反向關係，殖利率飆升導致債券價格崩盤。", explain_en: "Correct! Bond prices move inversely to market yields."
  }}
];

let currentW3GameIndex = 0;
let w3GameScore = 0;

function openGameModal() {{
  currentW3GameIndex = 0;
  w3GameScore = 0;
  const el = document.getElementById('gameModal');
  if (el) el.classList.add('active');
  renderW3GameQuestion();
}}

function closeGameModal() {{
  const el = document.getElementById('gameModal');
  if (el) el.classList.remove('active');
}}

function renderW3GameQuestion() {{
  const container = document.getElementById('gameQuestionContainer');
  if (!container) return;

  if (currentW3GameIndex >= w3GameQuestions.length) {{
    container.innerHTML = `
      <div style="text-align:center; padding:2rem;">
        <h3 style="color:var(--accent-gold); font-size:1.8rem; margin-bottom:1rem;">🏆 恭喜完成第三週央行政策與利率大挑戰！</h3>
        <p style="font-size:1.2rem; margin-bottom:1.5rem;">你的最終得分：<span style="color:var(--accent-rose); font-weight:700;">${{w3GameScore}} / 400 分</span></p>
        <p style="color:var(--text-sub); margin-bottom:2rem;">你已掌控折現現值、Fed 點陣圖與殖利率倒掛的所有密碼！獲頒「央行貨幣政策分析師徽章」。</p>
        <button class="btn btn-primary" onclick="closeGameModal()">完成並領取獎勵</button>
      </div>
    `;
    return;
  }}

  const q = w3GameQuestions[currentW3GameIndex];
  const title = currentLang === 'zh' ? q.title_zh : q.title_en;
  const news = currentLang === 'zh' ? q.news_zh : q.news_en;
  const options = currentLang === 'zh' ? q.options_zh : q.options_en;

  container.innerHTML = `
    <div class="activity-box">
      <div style="font-size:0.9rem; color:var(--accent-gold); font-weight:700; margin-bottom:0.5rem;">${{title}} (關卡 ${{currentW3GameIndex + 1}} / 4)</div>
      <p style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin-bottom:1.2rem;">${{news}}</p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
        ${{options.map((opt, idx) => `
          <button class="btn btn-outline" style="text-align:left; justify-content:flex-start; padding:0.75rem 1rem;" onclick="checkW3Answer(${{idx}})">
            ${{idx === 0 ? 'A' : 'B'}}. ${{opt}}
          </button>
        `).join('')}}
      </div>
    </div>
  `;
}}

function checkW3Answer(selectedIdx) {{
  const q = w3GameQuestions[currentW3GameIndex];
  const container = document.getElementById('gameQuestionContainer');
  const isCorrect = selectedIdx === q.answer;
  if (isCorrect) w3GameScore += 100;

  const explain = currentLang === 'zh' ? q.explain_zh : q.explain_en;

  container.innerHTML = `
    <div class="activity-box">
      <h3 style="color:${{isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}}; margin-bottom:0.8rem;">
        ${{isCorrect ? '🎉 回答正確！+100分' : '❌ 判斷錯誤！'}}
      </h3>
      <p style="color:var(--text-main); font-size:1.05rem; margin-bottom:1.5rem;">${{explain}}</p>
      <button class="btn btn-primary" onclick="nextW3Question()">進入下一關卡 →</button>
    </div>
  `;
}}

function nextW3Question() {{
  currentW3GameIndex++;
  renderW3GameQuestion();
}}

function openHomeworkModal() {{
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.add('active');
}}
function closeHomeworkModal() {{
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.remove('active');
}}
function submitW3Homework(e) {{
  if (e) e.preventDefault();
  alert("🎉 第三週課堂實務作業已成功提交！得分已登錄至學習歷程。");
  closeHomeworkModal();
}}
"""

    with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w3_app.js', 'w', encoding='utf-8') as f:
        f.write(js_content)

    print("Created w3_app.js successfully!")

if __name__ == '__main__':
    build_w3_app_js()
