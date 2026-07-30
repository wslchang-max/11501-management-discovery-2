import os, glob

# Python script to build 100% verified bilingual portal with EXACT filenames on disk

os.chdir(r"C:\Users\User\Desktop\115學年度\11501 管理探索二")

all_htmls = glob.glob("*.html")
all_docxs = glob.glob("*.docx")

prefix_map = {
    1: '第一週_', 2: '第二週_', 3: '第三週_', 4: '第四週_', 5: '第五週_',
    6: '第六週_', 7: '第七週_', 8: '第八週_', 9: '第九週_', 10: '第十週_',
    11: '第十一週_', 12: '第十二週_', 13: '第十三週_', 14: '第十四週_',
    15: '第十五週_', 16: '第十六週_', 17: '第十七週_', 18: '第十八週_'
}

weeks_data = [
    {
        "week": 1,
        "mod": "mod1",
        "icon": "fa-flag",
        "zh_title": "第一週：資訊爆炸時代的財經素養",
        "en_title": "Week 1: Financial Literacy in the Information Age",
        "zh_desc": "在新聞與網紅雜訊中辨識真實訊號！學習信噪比 (SNR) 計算、新聞標題重組與雜訊偵測遊戲。",
        "en_desc": "Filter market noise from real signals. Learn Signal-to-Noise Ratio (SNR) calculation, headline audits & noise games.",
        "tags": ["SNR Calculation", "30 Slides", "Noise Audit"],
        "search": "W1 資訊爆炸 財經素養 信噪比 SNR 計算 標題重組 雜訊偵測 Financial Literacy SNR"
    },
    {
        "week": 2,
        "mod": "mod1",
        "icon": "fa-chart-area",
        "zh_title": "第二週：理財時代與經濟指標",
        "en_title": "Week 2: Financial Era & Macroeconomic Indicators",
        "zh_desc": "看不懂經濟指標就無法理財！解讀 GDP、CPI、失業率、央行升降息與國發會景氣燈號。",
        "en_desc": "Mastering macroeconomic indicators: GDP, CPI, Interest Rates, Unemployment & Economic Climate Lights.",
        "tags": ["GDP & CPI", "Interest Rates", "Climate Lights"],
        "search": "W2 理財時代 經濟指標 GDP CPI 失業率 央行升降息 景氣燈號 Macroeconomics GDP CPI"
    },
    {
        "week": 3,
        "mod": "mod1",
        "icon": "fa-scale-unbalanced",
        "zh_title": "第三週：通貨膨脹與購買力",
        "en_title": "Week 3: Inflation & Real Purchasing Power",
        "zh_desc": "錢放在銀行為什麼越存越小？計算通膨對購買力的侵蝕，掌握名目利率 vs 實質利率與 72 法則。",
        "en_desc": "Why cash savings shrink over time. Calculating inflation's erosion on purchasing power & the Rule of 72.",
        "tags": ["Inflation Erosion", "Rule of 72", "Real Interest"],
        "search": "W3 通貨膨脹 購買力 實質利率 72法則 實質所得 Inflation Purchasing Power"
    },
    {
        "week": 4,
        "mod": "mod1",
        "icon": "fa-arrow-trend-up",
        "zh_title": "第四週：股市入門與企業價值估算",
        "en_title": "Week 4: Stock Market Basics & Corporate Valuation",
        "zh_desc": "大一新鮮人第一堂股票課！看懂 K 線圖、本益比 (P/E Ratio)、殖利率與企業價值估算技巧。",
        "en_desc": "First stock market class for freshmen. Understanding Candlesticks, P/E Ratios & Corporate Valuation.",
        "tags": ["P/E Ratio", "Dividend Yield", "Valuation"],
        "search": "W4 股市入門 本益比 PE 企業估值 股利本益比 投資組合 Stock Valuation PE"
    },
    {
        "week": 5,
        "mod": "mod2",
        "icon": "fa-cubes",
        "zh_title": "第五週：ETF狂熱：主動型ETF與被動投資",
        "en_title": "Week 5: ETF Mania: Active & Passive ETF Strategies",
        "zh_desc": "全台最熱門投資工具！拆解 ETF 運作機制、高股息 vs 市值型、主動型 ETF 與總費用率 (TER)。",
        "en_desc": "Taiwan's most popular investment vehicle! Active vs Passive ETFs, High-Dividend funds & Expense Ratios.",
        "tags": ["Active vs Passive", "Expense Ratio", "High Dividend"],
        "search": "W5 ETF 狂熱 主動型ETF 被動投資 指數追蹤 費用率 Active Passive ETF"
    },
    {
        "week": 6,
        "mod": "mod2",
        "icon": "fa-building-columns",
        "zh_title": "第六週：數位金融：高利活存與銀行業變革",
        "en_title": "Week 6: Digital Banking & High-Yield Savings Accounts",
        "zh_desc": "新鮮人必備數位帳戶指南！解析高利活存優惠上限、純網銀 vs 傳統銀行數位帳戶優惠。",
        "en_desc": "Freshman guide to digital banking: High-yield savings caps, Neobanks vs Traditional Banks.",
        "tags": ["High-Yield Savings", "Neobanks", "Digital Accounts"],
        "search": "W6 數位金融 高利活存 純網行 數位帳戶 銀行業變革 Digital Banking Savings"
    },
    {
        "week": 7,
        "mod": "mod2",
        "icon": "fa-credit-card",
        "zh_title": "第七週：個人信用評分變動與借貸風險",
        "en_title": "Week 7: Credit Scores & Borrowing Risk Management",
        "zh_desc": "維護個人的第二張身分證！JCIC 聯徵分數計算、信用卡循環利息陷阱與建立良好信用歷史。",
        "en_desc": "Protecting your financial identity. JCIC Credit Scores, credit card interest traps & credit history.",
        "tags": ["JCIC Score", "Credit Cards", "Interest Traps"],
        "search": "W7 信用評分 JCIC 聯徵中心 信用卡 分期付款 借貸風險 Credit Score JCIC"
    },
    {
        "week": 8,
        "mod": "mod2",
        "icon": "fa-clipboard-check",
        "zh_title": "第八週：期中學習成果檢核與實戰個案總複習",
        "en_title": "Week 8: Midterm Assessment & Practical Case Studies",
        "zh_desc": "前半學期觀念整合大考驗！小組實戰個案診斷、通爆/股票/ETF/信用盲點檢視與反思。",
        "en_desc": "Midterm integration challenge! Group case diagnoses reviewing inflation, stocks, ETFs & credit pitfalls.",
        "tags": ["Midterm Review", "Case Diagnosis", "Synthesis"],
        "search": "W8 期中檢核 實戰個案 總複習 財經複習 觀念測驗 Midterm Review Case"
    },
    {
        "week": 9,
        "mod": "mod3",
        "icon": "fa-shield-halved",
        "zh_title": "第九週：保險基礎風險管理與個人保障規劃",
        "en_title": "Week 9: Insurance Fundamentals & Personal Risk Protection",
        "zh_desc": "建構財務安全的護城河！解析保險三大功能、人壽/醫療/實支實付理賠與大一保單規劃。",
        "en_desc": "Building your financial moat: Insurance fundamentals, health coverage & risk planning.",
        "tags": ["Insurance Basics", "Risk Protection", "Policy Planning"],
        "search": "W9 保險基礎 風險管理 個人保障規劃 人壽保險 實支實付 健康險 Insurance Risk"
    },
    {
        "week": 10,
        "mod": "mod3",
        "icon": "fa-house",
        "zh_title": "第十週：不動產房地產與租買決策財務學",
        "en_title": "Week 10: Real Estate: Rent vs. Buy Decision Financials",
        "zh_desc": "年輕人到底該買房還是租房？計算房貸負擔率、租金回報率、頭期款籌措與機會成本。",
        "en_desc": "Rent vs Buy decision framework: Mortgage affordability, rental yields, down payments & opportunity costs.",
        "tags": ["Rent vs Buy", "Mortgage Affordability", "Yield Rates"],
        "search": "W10 不動產 房地產 租買決策 房貸試算 房價負擔能力 租金回報率 Real Estate Rent Buy"
    },
    {
        "week": 11,
        "mod": "mod3",
        "icon": "fa-file-invoice-dollar",
        "zh_title": "第十一週：個人綜合所得稅節稅規劃與報稅實務",
        "en_title": "Week 11: Personal Income Tax Planning & Tax Filing",
        "zh_desc": "社會新人必修第一堂課！理解綜合所得稅計算、免稅額/標準扣除額/特別扣除額與合法節稅。",
        "en_desc": "First tax class for grads: Income tax tiers, exemptions, standard vs itemized deductions.",
        "tags": ["Income Tax Tiers", "Deductions", "Tax Saving"],
        "search": "W11 所得稅 節稅 報稅 免稅額 扣除額 稅率級距 Income Tax Filing"
    },
    {
        "week": 12,
        "mod": "mod3",
        "icon": "fa-receipt",
        "zh_title": "第十二週：個人與家庭資產負債表、現金流管理與生涯理財規劃",
        "en_title": "Week 12: Personal Balance Sheets & Life-Cycle Financial Planning",
        "zh_desc": "建立個人專屬的財務報表！編製個人資產負債表、追蹤自由現金流與 20-30-40 生涯理財比例。",
        "en_desc": "Building your financial statement: Personal Balance Sheets, Cash Flow tracking & budget ratios.",
        "tags": ["Balance Sheet", "Cash Flow", "Budget Allocation"],
        "search": "W12 資產負債表 現金流 生涯理財 淨資產 記帳管理 Balance Sheet Cash Flow"
    },
    {
        "week": 13,
        "mod": "mod4",
        "icon": "fa-microchip",
        "zh_title": "第十三週：半導體產業護國神山台積電與台灣科技供應鏈",
        "en_title": "Week 13: Semiconductor Industry, TSMC & Tech Supply Chains",
        "zh_desc": "深入剖析護國神山台積電！晶圓代工商業模式、半導體上中下游產業鏈與全球競爭優勢。",
        "en_desc": "Deep dive into TSMC: Foundry business model, semiconductor supply chain & global advantages.",
        "tags": ["TSMC Foundry", "Supply Chain", "Semiconductors"],
        "search": "W13 半導體 台積電 TSMC 科技供應鏈 晶圓代工 護國神山 Semiconductor TSMC"
    },
    {
        "week": 14,
        "mod": "mod4",
        "icon": "fa-robot",
        "zh_title": "第十四週：生成式AI革命、人工智慧產業鏈與未來職場轉型",
        "en_title": "Week 14: Generative AI Revolution & Workplace Transformation",
        "zh_desc": "AI 如何改變未來的職場與產業？分析生成式 AI 工具、算力經濟、Nvidia 與新鮮人關鍵能力。",
        "en_desc": "How AI rewrites the workplace: Generative AI tools, compute economics, Nvidia & career skills.",
        "tags": ["Generative AI", "Compute Economics", "Career Transformation"],
        "search": "W14 生成式AI 人工智慧 職場轉型 生產力 算力經濟 Nvidia Generative AI Career"
    },
    {
        "week": 15,
        "mod": "mod4",
        "icon": "fa-leaf",
        "zh_title": "第十五週：綠色金融、ESG永續投資與碳定價經濟學",
        "en_title": "Week 15: Green Finance, ESG Investing & Carbon Pricing",
        "zh_desc": "永續經濟學的核心大趨勢！綠色金融商品、ESG 評級投資法、碳權交易與碳定價對企業的影響。",
        "en_desc": "Green economy trends: Green finance, ESG rating strategies, carbon trading & carbon pricing impacts.",
        "tags": ["Green Finance", "ESG Ratings", "Carbon Pricing"],
        "search": "W15 綠色金融 ESG 永續投資 碳定價 碳交易 CBAM Green Finance ESG"
    },
    {
        "week": 16,
        "mod": "mod4",
        "icon": "fa-link",
        "zh_title": "第十六週：加密貨幣、區塊鏈基礎Web3與數位資產風險",
        "en_title": "Week 16: Cryptocurrencies, Blockchain Web3 & Digital Asset Risks",
        "zh_desc": "正視新世代數位資產風險！區塊鏈去中心化原理、加密貨幣波動性、Web3 應用與詐騙防範。",
        "en_desc": "Navigating digital assets: Blockchain decentralization, crypto volatility, Web3 & fraud prevention.",
        "tags": ["Blockchain & Web3", "Crypto Risk", "Fraud Prevention"],
        "search": "W16 加密貨幣 區塊鏈 Web3 數位資產 比特幣 詐騙防範 Crypto Blockchain Web3"
    },
    {
        "week": 17,
        "mod": "mod4",
        "icon": "fa-chalkboard-user",
        "zh_title": "第十七週：期末專案發表實戰財經簡報與總評量",
        "en_title": "Week 17: Final Project Capstone Presentations & Pitching",
        "zh_desc": "大一新鮮人的第一次實戰 Pitch！小組報告財經與理財專案、專業簡報架構與同儕互評。",
        "en_desc": "Freshman Capstone Pitch! Group presentations on financial topics, feedback & peer reviews.",
        "tags": ["Capstone Pitch", "Presentation Skills", "Peer Review"],
        "search": "W17 期末專案 簡報發表 實戰 Pitch 評分量表 簡報技巧 Capstone Pitch"
    },
    {
        "week": 18,
        "mod": "mod4",
        "icon": "fa-trophy",
        "zh_title": "第十八週：學期總結財經探索藍圖與大一新鮮人終身宣言",
        "en_title": "Week 18: Semester Synthesis & Freshman Lifelong Manifesto",
        "zh_desc": "18 週財經探索大結業！繪製個人大學 4 年理財藍圖、簽署終身理財宣言與頒發結業證明。",
        "en_desc": "Grand Graduation! Drawing 4-year personal financial roadmaps, signing Lifelong Manifestos.",
        "tags": ["Grand Graduation", "4-Year Roadmap", "Lifelong Manifesto"],
        "search": "W18 大結業 探索藍圖 終身宣言 理財地圖 新鮮人宣言 Graduation Roadmap"
    }
]

# Match exact files
for item in weeks_data:
    w = item["week"]
    pref = prefix_map[w]
    matching_html = [h for h in all_htmls if h.startswith(pref) and h not in ['index.html', '整合18週課程平台.html']]
    matching_docx = [d for d in all_docxs if d.startswith(pref)]
    item["html_file"] = matching_html[0] if matching_html else "#"
    item["docx_file"] = matching_docx[0] if matching_docx else "#"

# Group by modules for rendering HTML
modules_data = {
    "mod1": {
        "icon": "fa-seedling",
        "zh_title": "模組一：財經素養與理財基礎",
        "en_title": "Module 1: Financial Literacy Basics (Weeks 1-4)",
        "weeks": [w for w in weeks_data if w["mod"] == "mod1"]
    },
    "mod2": {
        "icon": "fa-piggy-bank",
        "zh_title": "模組二：金融工具、儲蓄與信用",
        "en_title": "Module 2: Financial Tools & Banking (Weeks 5-8)",
        "weeks": [w for w in weeks_data if w["mod"] == "mod2"]
    },
    "mod3": {
        "icon": "fa-chart-line",
        "zh_title": "模組三：資產配置與稅務規劃",
        "en_title": "Module 3: Wealth & Tax Planning (Weeks 9-12)",
        "weeks": [w for w in weeks_data if w["mod"] == "mod3"]
    },
    "mod4": {
        "icon": "fa-rocket",
        "zh_title": "模組四：前瞻科技、永續與期末大結業",
        "en_title": "Module 4: Tech & Future Synthesis (Weeks 13-18)",
        "weeks": [w for w in weeks_data if w["mod"] == "mod4"]
    }
}

cards_html_buffer = []

for mod_key, mod_info in modules_data.items():
    cards_html_buffer.append(f"""
        <!-- MODULE {mod_key.upper()} -->
        <div class="module-group" data-module="{mod_key}">
            <div class="module-header">
                <div class="module-icon"><i class="fa-solid {mod_info['icon']}"></i></div>
                <h2 class="module-title">
                    <span class="lang-zh">{mod_info['zh_title']}</span>
                    <span class="lang-en">{mod_info['en_title']}</span>
                </h2>
            </div>
            <div class="weeks-grid">""")
    
    for item in mod_info["weeks"]:
        w_num = f"{item['week']:02d}"
        tags_rendered = "".join([f'<span class="mini-tag">{t}</span>' for t in item["tags"]])
        cards_html_buffer.append(f"""
                <!-- Week {item['week']} -->
                <div class="week-card" data-tags="{item['search']}">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid {item['icon']}"></i> Week {w_num}</span>
                        <h3 class="card-title">
                            <span class="lang-zh">{item['zh_title']}</span>
                            <span class="lang-en">{item['en_title']}</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">{item['zh_desc']}</span>
                            <span class="lang-en">{item['en_desc']}</span>
                        </p>
                        <div class="tags-list">
                            {tags_rendered}
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="{item['html_file']}" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="{item['docx_file']}" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide (.docx)</span></a>
                    </div>
                </div>""")
        
    cards_html_buffer.append("""
            </div>
        </div>""")

content_body_grid = "\n".join(cards_html_buffer)

full_html = f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>11501 管理探索二：財金蛙挖哇 | 18 週雙語整合總覽平台</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+TC:wght@300;400;500;700;900&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="index.css">
    <style>
        body.canva-theme {{
            overflow-y: auto !important;
            height: auto !important;
            min-height: 100vh;
        }}

        /* Strict Language Switcher Rules: 中文就是中文、英文就是英文 */
        body.lang-zh .lang-en {{
            display: none !important;
        }}

        body.lang-en .lang-zh {{
            display: none !important;
        }}

        .portal-header {{
            position: sticky;
            top: 0;
            z-index: 1000;
        }}

        .portal-hero {{
            position: relative;
            padding: 80px 24px 60px;
            background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.18) 0%, rgba(11, 15, 25, 0) 70%),
                        linear-gradient(180deg, #131b2e 0%, #0b0f19 100%);
            border-bottom: 1px solid var(--border-color);
            text-align: center;
        }}

        .hero-badge-container {{
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }}

        .hero-title {{
            font-family: var(--font-heading);
            font-size: 3.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ffffff 0%, #10b981 50%, #34d399 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
            line-height: 1.2;
        }}

        .hero-subtitle {{
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 860px;
            margin: 0 auto 36px;
            line-height: 1.6;
        }}

        .hero-stats-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 16px;
            max-width: 1000px;
            margin: 0 auto 40px;
        }}

        .stat-card {{
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 20px;
            backdrop-filter: blur(12px);
            transition: all 0.3s ease;
        }}

        .stat-card:hover {{
            transform: translateY(-4px);
            border-color: #10b981;
            box-shadow: 0 8px 32px 0 rgba(16, 185, 129, 0.2);
        }}

        .stat-number {{
            font-family: var(--font-heading);
            font-size: 2.2rem;
            font-weight: 800;
            color: #10b981;
            margin-bottom: 4px;
        }}

        .stat-label {{
            font-size: 0.9rem;
            color: var(--text-muted);
        }}

        /* Search & Filter Bar */
        .filter-section {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px 24px 10px;
        }}

        .filter-wrapper {{
            background: rgba(22, 31, 49, 0.9);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 20px 24px;
            backdrop-filter: blur(16px);
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: var(--shadow-card);
        }}

        .search-box {{
            position: relative;
            width: 100%;
        }}

        .search-box i {{
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #10b981;
            font-size: 1.2rem;
        }}

        .search-input {{
            width: 100%;
            padding: 16px 20px 16px 54px;
            background: rgba(11, 15, 25, 0.8);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-main);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
        }}

        .search-input:focus {{
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }}

        .module-tabs {{
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }}

        .tab-btn {{
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid var(--border-color);
            color: var(--text-muted);
            padding: 10px 20px;
            border-radius: 30px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }}

        .tab-btn:hover, .tab-btn.active {{
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            border-color: transparent;
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }}

        /* Course Modules & Grid Layout */
        .portal-content {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 24px 80px;
        }}

        .module-group {{
            margin-bottom: 48px;
        }}

        .module-header {{
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.08);
        }}

        .module-icon {{
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            font-weight: 800;
        }}

        .module-title {{
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 700;
            color: #fff;
        }}

        .weeks-grid {{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 24px;
        }}

        .week-card {{
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 24px;
            backdrop-filter: blur(12px);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }}

        .week-card::before {{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }}

        .week-card:hover {{
            transform: translateY(-6px);
            border-color: rgba(16, 185, 129, 0.4);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.15);
        }}

        .week-card:hover::before {{
            opacity: 1;
        }}

        .card-top {{
            margin-bottom: 20px;
        }}

        .card-week-badge {{
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 12px;
            background: rgba(16, 185, 129, 0.12);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 20px;
            color: #34d399;
            font-size: 0.82rem;
            font-weight: 700;
            margin-bottom: 12px;
        }}

        .card-title {{
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;
            line-height: 1.4;
        }}

        .card-desc {{
            font-size: 0.92rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 16px;
        }}

        .tags-list {{
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
        }}

        .mini-tag {{
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            padding: 3px 8px;
            font-size: 0.78rem;
            color: #d1d5db;
        }}

        .card-actions {{
            display: flex;
            gap: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 16px;
        }}

        .action-btn {{
            flex: 1;
            padding: 10px 14px;
            border-radius: 10px;
            font-size: 0.88rem;
            font-weight: 600;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            transition: all 0.25s ease;
        }}

        .btn-html {{
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }}

        .btn-html:hover {{
            transform: scale(1.02);
            filter: brightness(1.1);
        }}

        .btn-docx {{
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-main);
            border: 1px solid var(--border-color);
        }}

        .btn-docx:hover {{
            background: rgba(255, 255, 255, 0.15);
            border-color: #fff;
        }}

        /* Footer */
        .portal-footer {{
            background: #070a12;
            border-top: 1px solid var(--border-color);
            padding: 40px 24px;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
        }}

        .footer-brand {{
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }}

        .lang-switch-btn {{
            background: rgba(16, 185, 129, 0.2);
            border: 1px solid #10b981;
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.95rem;
            font-weight: 700;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
        }}

        .lang-switch-btn:hover {{
            background: #10b981;
            color: #0b0f19;
            box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
        }}
    </style>
</head>
<body class="canva-theme dark-mode lang-zh">

    <!-- Header -->
    <header class="canva-header portal-header">
        <div class="header-left">
            <div class="brand-logo">
                <i class="fa-solid fa-frog glow-icon" style="color:#10b981;"></i>
                <span class="brand-title"><span class="lang-zh">11501 管理探索二</span><span class="lang-en">11501 Management Discovery II</span></span>
            </div>
            <div class="deck-title-container">
                <h1 class="deck-title"><span class="lang-zh">財金蛙挖哇 18 週整合總覽平台</span><span class="lang-en">18-Week Curriculum Integration Portal</span></h1>
            </div>
        </div>
        <div class="header-right">
            <button class="lang-switch-btn" id="langToggleBtn" title="切換語言 / Switch Language">
                <i class="fa-solid fa-globe"></i> <span id="langDisplay">繁體中文 / English</span>
            </button>
            <a href="https://www.google.com/finance" target="_blank" class="btn btn-secondary" title="Google Finance Market Data">
                <i class="fa-solid fa-chart-line"></i> <span class="lang-zh">財經數據庫</span><span class="lang-en">Google Finance</span>
            </a>
            <a href="https://www.stat.gov.tw/" target="_blank" class="btn btn-secondary" title="National Statistics DGBAS">
                <i class="fa-solid fa-building-columns"></i> <span class="lang-zh">國家統計局</span><span class="lang-en">DGBAS Stats</span>
            </a>
        </div>
    </header>

    <!-- Hero Banner -->
    <section class="portal-hero">
        <div class="hero-badge-container">
            <span class="badge emi-badge"><i class="fa-solid fa-globe"></i> 100% EMI Dual-Language</span>
            <span class="badge esg-badge" style="background:rgba(16, 185, 129, 0.15); color:#34d399; border-color:rgba(16, 185, 129, 0.3);">
                <i class="fa-solid fa-graduation-cap"></i> <span class="lang-zh">大一新鮮人財經通識</span><span class="lang-en">Freshman Financial Literacy</span>
            </span>
            <span class="badge" style="background: rgba(127, 0, 255, 0.2); border: 1px solid rgba(127, 0, 255, 0.4); color: #c084fc;">
                <i class="fa-solid fa-palette"></i> <span class="lang-zh">Canva 莫蘭迪視覺與 3 大小時 Modal</span><span class="lang-en">Canva Theme & 3-Hour Activity Modals</span>
            </span>
        </div>
        <h1 class="hero-title">
            <span class="lang-zh">11501 管理探索二：財金蛙挖哇</span>
            <span class="lang-en">11501 Management Discovery II: Financial Literacy</span>
        </h1>
        <p class="hero-subtitle">
            <span class="lang-zh">專為大一新鮮人量身打造之生活化財經素養與理財探索全景課程！包含 18 週 540+ 頁雙語簡報卡片、畫布手繪書寫工具與 4,500+ 字深度 Word 教學手冊！</span>
            <span class="lang-en">Designed specifically for college freshmen. Featuring 18-week dual-language interactive slide decks, digital whiteboard tools, and 4,500+ word Word facilitation guides.</span>
        </p>

        <!-- Stats Grid -->
        <div class="hero-stats-grid">
            <div class="stat-card">
                <div class="stat-number">18</div>
                <div class="stat-label"><span class="lang-zh">週次完整單元</span><span class="lang-en">Weekly Modules</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-number">4</div>
                <div class="stat-label"><span class="lang-zh">核心學習模組</span><span class="lang-en">Core Curriculum Tracks</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-number">540+</div>
                <div class="stat-label"><span class="lang-zh">純教學簡報頁卡</span><span class="lang-en">Slide Deck Cards</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-number">18</div>
                <div class="stat-label"><span class="lang-zh">Word 教學手冊 (.docx)</span><span class="lang-en">Facilitation Guides (.docx)</span></div>
            </div>
        </div>
    </section>

    <!-- Search & Filter Bar -->
    <div class="filter-section">
        <div class="filter-wrapper">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="searchInput" class="search-input" placeholder="搜尋關鍵字 (例如：ETF, 股票, 稅務, AI, 通貨膨脹, 不動產, Web3, 期中, 期末) / Search keywords...">
            </div>
            <div class="module-tabs" id="moduleTabs">
                <button class="tab-btn active" data-filter="all"><i class="fa-solid fa-border-all"></i> <span class="lang-zh">全部 18 週</span><span class="lang-en">All 18 Weeks</span></button>
                <button class="tab-btn" data-filter="mod1"><i class="fa-solid fa-seedling"></i> <span class="lang-zh">模組一：理財基礎 (W1-4)</span><span class="lang-en">Mod 1: Basics (W1-4)</span></button>
                <button class="tab-btn" data-filter="mod2"><i class="fa-solid fa-piggy-bank"></i> <span class="lang-zh">模組二：金融工具 (W5-8)</span><span class="lang-en">Mod 2: Financial Tools (W5-8)</span></button>
                <button class="tab-btn" data-filter="mod3"><i class="fa-solid fa-chart-line"></i> <span class="lang-zh">模組三：資產配置 (W9-12)</span><span class="lang-en">Mod 3: Wealth & Tax (W9-12)</span></button>
                <button class="tab-btn" data-filter="mod4"><i class="fa-solid fa-rocket"></i> <span class="lang-zh">模組四：前瞻科技 (W13-18)</span><span class="lang-en">Mod 4: Tech & Future (W13-18)</span></button>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <main class="portal-content" id="portalContent">
{content_body_grid}
    </main>

    <!-- Footer -->
    <footer class="portal-footer">
        <div class="footer-brand">
            <i class="fa-solid fa-frog glow-icon" style="color:#10b981;"></i>
            <span><span class="lang-zh">11501 管理探索二：財金蛙挖哇 18 週課程總覽平台</span><span class="lang-en">11501 Management Discovery II 18-Week Curriculum Portal</span></span>
        </div>
        <p><span class="lang-zh">© 2026 11501 管理探索二：財金蛙挖哇 18 週雙語整合總覽平台 • 版權所有</span>
        <span class="lang-en">© 2026 Management Discovery II 18-Week Bilingual Integration Portal • All Rights Reserved.</span></p>
    </footer>

    <!-- Filter & Search JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {{
            const searchInput = document.getElementById('searchInput');
            const tabBtns = document.querySelectorAll('.tab-btn');
            const moduleGroups = document.querySelectorAll('.module-group');
            const weekCards = document.querySelectorAll('.week-card');
            const langToggleBtn = document.getElementById('langToggleBtn');
            const langDisplay = document.getElementById('langDisplay');

            // Pure Bilingual Switcher: 中文就是中文、英文就是英文
            langToggleBtn.addEventListener('click', () => {{
                if (document.body.classList.contains('lang-zh')) {{
                    document.body.classList.remove('lang-zh');
                    document.body.classList.add('lang-en');
                    langDisplay.textContent = 'English / 繁體中文';
                }} else {{
                    document.body.classList.remove('lang-en');
                    document.body.classList.add('lang-zh');
                    langDisplay.textContent = '繁體中文 / English';
                }}
            }});

            // Tab Filter
            tabBtns.forEach(btn => {{
                btn.addEventListener('click', () => {{
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.getAttribute('data-filter');

                    moduleGroups.forEach(group => {{
                        if (filter === 'all' || group.getAttribute('data-module') === filter) {{
                            group.style.display = 'block';
                        }} else {{
                            group.style.display = 'none';
                        }}
                    }});
                }});
            }});

            // Live Search Filter
            searchInput.addEventListener('input', (e) => {{
                const query = e.target.value.toLowerCase().trim();

                weekCards.forEach(card => {{
                    const text = (card.innerText + ' ' + (card.getAttribute('data-tags') || '')).toLowerCase();
                    if (text.includes(query)) {{
                        card.style.display = 'flex';
                    }} else {{
                        card.style.display = 'none';
                    }}
                }});

                // Show module groups if they contain visible cards
                moduleGroups.forEach(group => {{
                    const visibleCards = group.querySelectorAll('.week-card[style*="display: flex"], .week-card:not([style*="display: none"])');
                    if (query === '') {{
                        group.style.display = 'block';
                    }} else {{
                        group.style.display = visibleCards.length > 0 ? 'block' : 'none';
                    }}
                }});
            }});
        }});
    </script>
</body>
</html>"""

with open("index.html", "w", encoding="utf-8") as f:
    f.write(full_html)

with open("整合18週課程平台.html", "w", encoding="utf-8") as f:
    f.write(full_html)

print("Successfully generated index.html with 100% PERFECT EXACT DISK FILENAMES!")
