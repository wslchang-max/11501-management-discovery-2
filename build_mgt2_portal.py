import os, glob

# Python script to build 11501 管理探索二 18-week portal index.html & 整合18週課程平台.html

html_content = """<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>11501 管理探索二：財金蛙挖哇 | 18 週整合總覽平台 (Management Discovery II Portal)</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Noto+Sans+TC:wght@300;400;500;700;900&family=Outfit:wght@400;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="index.css">
    <style>
        body.canva-theme {
            overflow-y: auto !important;
            height: auto !important;
            min-height: 100vh;
        }

        .portal-header {
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .portal-hero {
            position: relative;
            padding: 80px 24px 60px;
            background: radial-gradient(circle at 50% 20%, rgba(16, 185, 129, 0.18) 0%, rgba(11, 15, 25, 0) 70%),
                        linear-gradient(180deg, #131b2e 0%, #0b0f19 100%);
            border-bottom: 1px solid var(--border-color);
            text-align: center;
        }

        .hero-badge-container {
            display: flex;
            justify-content: center;
            gap: 12px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .hero-title {
            font-family: var(--font-heading);
            font-size: 3.2rem;
            font-weight: 800;
            background: linear-gradient(135deg, #ffffff 0%, #10b981 50%, #34d399 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--text-muted);
            max-width: 860px;
            margin: 0 auto 36px;
            line-height: 1.6;
        }

        .hero-stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
            gap: 16px;
            max-width: 1000px;
            margin: 0 auto 40px;
        }

        .stat-card {
            background: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: 16px;
            padding: 20px;
            backdrop-filter: blur(12px);
            transition: all 0.3s ease;
        }

        .stat-card:hover {
            transform: translateY(-4px);
            border-color: #10b981;
            box-shadow: 0 8px 32px 0 rgba(16, 185, 129, 0.2);
        }

        .stat-number {
            font-family: var(--font-heading);
            font-size: 2.2rem;
            font-weight: 800;
            color: #10b981;
            margin-bottom: 4px;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--text-muted);
        }

        /* Search & Filter Bar */
        .filter-section {
            max-width: 1200px;
            margin: 0 auto;
            padding: 30px 24px 10px;
        }

        .filter-wrapper {
            background: rgba(22, 31, 49, 0.9);
            border: 1px solid var(--border-color);
            border-radius: 20px;
            padding: 20px 24px;
            backdrop-filter: blur(16px);
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: var(--shadow-card);
        }

        .search-box {
            position: relative;
            width: 100%;
        }

        .search-box i {
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            color: #10b981;
            font-size: 1.2rem;
        }

        .search-input {
            width: 100%;
            padding: 16px 20px 16px 54px;
            background: rgba(11, 15, 25, 0.8);
            border: 1px solid var(--border-color);
            border-radius: 12px;
            color: var(--text-main);
            font-size: 1rem;
            outline: none;
            transition: all 0.3s ease;
        }

        .search-input:focus {
            border-color: #10b981;
            box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
        }

        .module-tabs {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .tab-btn {
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
        }

        .tab-btn:hover, .tab-btn.active {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            border-color: transparent;
            font-weight: 700;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }

        /* Course Modules & Grid Layout */
        .portal-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px 24px 80px;
        }

        .module-group {
            margin-bottom: 48px;
        }

        .module-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 2px solid rgba(255, 255, 255, 0.08);
        }

        .module-icon {
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
        }

        .module-title {
            font-family: var(--font-heading);
            font-size: 1.6rem;
            font-weight: 700;
            color: #fff;
        }

        .weeks-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 24px;
        }

        .week-card {
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
        }

        .week-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .week-card:hover {
            transform: translateY(-6px);
            border-color: rgba(16, 185, 129, 0.4);
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4), 0 0 20px rgba(16, 185, 129, 0.15);
        }

        .week-card:hover::before {
            opacity: 1;
        }

        .card-top {
            margin-bottom: 20px;
        }

        .card-week-badge {
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
        }

        .card-title {
            font-family: var(--font-heading);
            font-size: 1.25rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;
            line-height: 1.4;
        }

        .card-desc {
            font-size: 0.92rem;
            color: var(--text-muted);
            line-height: 1.5;
            margin-bottom: 16px;
        }

        .tags-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 20px;
        }

        .mini-tag {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 6px;
            padding: 3px 8px;
            font-size: 0.78rem;
            color: #d1d5db;
        }

        .card-actions {
            display: flex;
            gap: 10px;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            padding-top: 16px;
        }

        .action-btn {
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
        }

        .btn-html {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .btn-html:hover {
            transform: scale(1.02);
            filter: brightness(1.1);
        }

        .btn-docx {
            background: rgba(255, 255, 255, 0.08);
            color: var(--text-main);
            border: 1px solid var(--border-color);
        }

        .btn-docx:hover {
            background: rgba(255, 255, 255, 0.15);
            border-color: #fff;
        }

        /* Footer */
        .portal-footer {
            background: #070a12;
            border-top: 1px solid var(--border-color);
            padding: 40px 24px;
            text-align: center;
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        .footer-brand {
            font-family: var(--font-heading);
            font-size: 1.2rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
    </style>
</head>
<body class="canva-theme dark-mode lang-zh">

    <!-- Header -->
    <header class="canva-header portal-header">
        <div class="header-left">
            <div class="brand-logo">
                <i class="fa-solid fa-frog glow-icon" style="color:#10b981;"></i>
                <span class="brand-title">11501 管理探索二</span>
            </div>
            <div class="deck-title-container">
                <h1 class="deck-title">財金蛙挖哇 18 週整合總覽平台</h1>
            </div>
        </div>
        <div class="header-right">
            <button class="btn btn-secondary" id="langToggleBtn" title="Switch Language (中/EN)">
                <i class="fa-solid fa-language"></i> <span id="langDisplay">中 / EN</span>
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
                <i class="fa-solid fa-graduation-cap"></i> 大一新鮮人財經通識
            </span>
            <span class="badge" style="background: rgba(127, 0, 255, 0.2); border: 1px solid rgba(127, 0, 255, 0.4); color: #c084fc;">
                <i class="fa-solid fa-palette"></i> Canva 莫蘭迪視覺與 3 大小時 Modal
            </span>
        </div>
        <h1 class="hero-title">
            <span class="lang-zh">11501 管理探索二：財金蛙挖哇</span>
            <span class="lang-en">11501 Management Discovery II: Financial Literacy</span>
        </h1>
        <p class="hero-subtitle">
            <span class="lang-zh">專為大一新鮮人量身打造之生活化財經素養與理財探索全景課程！包含 18 週 540+ 頁雙語簡報卡片、畫布手繪書寫工具與 4,500+ 字深度 Word 教學手冊！</span>
            <span class="lang-en">Designed for college freshmen. Featuring 18-week dual-language interactive slides, digital whiteboards, and 4,500+ word Word facilitation guides.</span>
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
                <div class="stat-label"><span class="lang-zh">純教學簡報頁卡</span><span class="lang-en">Slide Cards</span></div>
            </div>
            <div class="stat-card">
                <div class="stat-number">18</div>
                <div class="stat-label"><span class="lang-zh">Word 教學手冊 (.docx)</span><span class="lang-en">Facilitation Guides</span></div>
            </div>
        </div>
    </section>

    <!-- Search & Filter Bar -->
    <div class="filter-section">
        <div class="filter-wrapper">
            <div class="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="searchInput" class="search-input" placeholder="搜尋關鍵字（例如：ETF, 股票, 稅務, AI, 通貨膨脹, 不動產, Web3, 期中, 期末）...">
            </div>
            <div class="module-tabs" id="moduleTabs">
                <button class="tab-btn active" data-filter="all"><i class="fa-solid fa-border-all"></i> <span class="lang-zh">全部 18 週</span><span class="lang-en">All 18 Weeks</span></button>
                <button class="tab-btn" data-filter="mod1"><i class="fa-solid fa-seedling"></i> <span class="lang-zh">模組一：理財基礎 (W1-4)</span><span class="lang-en">Mod 1: Basics</span></button>
                <button class="tab-btn" data-filter="mod2"><i class="fa-solid fa-piggy-bank"></i> <span class="lang-zh">模組二：金融工具 (W5-8)</span><span class="lang-en">Mod 2: Tools & Banking</span></button>
                <button class="tab-btn" data-filter="mod3"><i class="fa-solid fa-chart-line"></i> <span class="lang-zh">模組三：資產配置 (W9-12)</span><span class="lang-en">Mod 3: Wealth & Tax</span></button>
                <button class="tab-btn" data-filter="mod4"><i class="fa-solid fa-rocket"></i> <span class="lang-zh">模組四：前瞻科技 (W13-18)</span><span class="lang-en">Mod 4: Tech & Future</span></button>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <main class="portal-content" id="portalContent">

        <!-- MODULE 1 -->
        <div class="module-group" data-module="mod1">
            <div class="module-header">
                <div class="module-icon"><i class="fa-solid fa-seedling"></i></div>
                <h2 class="module-title">
                    <span class="lang-zh">模組一：財經素養與理財基礎 (Module 1: Financial Literacy Basics)</span>
                    <span class="lang-en">Module 1: Financial Literacy Basics (Weeks 1-4)</span>
                </h2>
            </div>
            <div class="weeks-grid">
                <!-- Week 1 -->
                <div class="week-card" data-tags="W1 資訊爆炸 財經素養 信噪比 SNR 計算 標題重組 雜訊偵測">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-flag"></i> Week 01</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第一週：資訊爆炸時代的財經素養</span>
                            <span class="lang-en">Week 1: Financial Literacy in Information Age</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">在新聞與網紅雜訊中辨識真實訊號！學習信噪比 (SNR) 計算、新聞標題重組與雜訊偵測。</span>
                            <span class="lang-en">Filtering noise from real market signals. Learning SNR calculation, headline audits & noise games.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">SNR Calculation</span>
                            <span class="mini-tag">30 Slides</span>
                            <span class="mini-tag">Noise Detection</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第一週_資訊爆炸時代的財經素養.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第一週_課程教學指引_資訊爆炸時代的財經素養.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 2 -->
                <div class="week-card" data-tags="W2 理財時代 經濟指標 GDP CPI 失業率 央行升降息 景氣燈號">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-chart-area"></i> Week 02</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第二週：理財時代與經濟指標</span>
                            <span class="lang-en">Week 2: Financial Era & Economic Indicators</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">看不懂經濟指標就無法理財！解讀 GDP、CPI、失業率、央行升降息與國發會景氣燈號。</span>
                            <span class="lang-en">Mastering macro indicators: GDP, CPI, Interest Rates, Unemployment & Economic Climate Lights.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">GDP & CPI</span>
                            <span class="mini-tag">Interest Rates</span>
                            <span class="mini-tag">Climate Lights</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第二週_理財時代與經濟指標.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第二週_課程教學指引_理財時代與經濟指標.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 3 -->
                <div class="week-card" data-tags="W3 通貨膨脹 購買力 實質利率 72法則 實質所得">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-scale-unbalanced"></i> Week 03</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第三週：通貨膨脹與購買力</span>
                            <span class="lang-en">Week 3: Inflation & Purchasing Power</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">錢放在銀行為什麼越存越小？計算通膨對購買力的侵蝕，掌握名目利率 vs 實質利率與 72 法則。</span>
                            <span class="lang-en">Why savings shrink over time. Calculating inflation's erosion on purchasing power & Rule of 72.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Inflation Erosion</span>
                            <span class="mini-tag">Rule of 72</span>
                            <span class="mini-tag">Real Interest</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第三週_通貨膨脹與購買力.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第三週_課程教學指引_通貨膨脹與購買力.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 4 -->
                <div class="week-card" data-tags="W4 股市入門 本益比 PE 企業估值 股利本益比 投資組合">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-arrow-trend-up"></i> Week 04</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第四週：股市入門與企業價值估算</span>
                            <span class="lang-en">Week 4: Stock Market Basics & Valuation</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">大一新鮮人第一堂股票課！看懂 K 線圖、本益比 (P/E Ratio)、殖利率與企業價值估算技巧。</span>
                            <span class="lang-en">First stock market class for freshmen. Understanding Candlesticks, P/E Ratios & Valuation.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">P/E Ratio</span>
                            <span class="mini-tag">Dividend Yield</span>
                            <span class="mini-tag">Valuation</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第四週_股市入門與企業價值估算.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第四週_課程教學指引_股市入門與企業價值估算.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODULE 2 -->
        <div class="module-group" data-module="mod2">
            <div class="module-header">
                <div class="module-icon"><i class="fa-solid fa-piggy-bank"></i></div>
                <h2 class="module-title">
                    <span class="lang-zh">模組二：金融工具、儲蓄與信用 (Module 2: Financial Tools & Banking)</span>
                    <span class="lang-en">Module 2: Financial Tools & Banking (Weeks 5-8)</span>
                </h2>
            </div>
            <div class="weeks-grid">
                <!-- Week 5 -->
                <div class="week-card" data-tags="W5 ETF 狂熱 主動型ETF 被動投資 指數追蹤 費用率 0050 0056">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-cubes"></i> Week 05</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第五週：ETF狂熱：主動型ETF與被動投資</span>
                            <span class="lang-en">Week 5: ETF Mania: Active & Passive ETFs</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">全台最熱門投資工具！拆解 ETF 運作機制、高股息 vs 市值型、主動型 ETF 與總費用率 (TER)。</span>
                            <span class="lang-en">Taiwan's most popular tool! Active vs Passive ETFs, High-Dividend funds & Expense Ratios.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Active vs Passive</span>
                            <span class="mini-tag">Expense Ratio</span>
                            <span class="mini-tag">High Dividend</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第五週_ETF狂熱主動型ETF與被動投資.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第五週_課程教學指引_ETF狂熱主動型ETF與被動投資.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 6 -->
                <div class="week-card" data-tags="W6 數位金融 高利活存 純網行 數位帳戶 銀行業變革">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-building-columns"></i> Week 06</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第六週：數位金融：高利活存與銀行業變革</span>
                            <span class="lang-en">Week 6: Digital Banking & High-Yield Savings</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">新鮮人必備數位帳戶指南！解析高利活存優惠上限、純網銀 vs 傳統銀行數位帳戶優惠。</span>
                            <span class="lang-en">Freshman guide to digital accounts: High-yield savings caps, Neobanks vs Traditional Banks.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">High-Yield Savings</span>
                            <span class="mini-tag">Neobanks</span>
                            <span class="mini-tag">Digital Accounts</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第六週_數位金融高利活存與銀行業變革.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第六週_課程教學指引_數位金融高利活存與銀行業變革.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 7 -->
                <div class="week-card" data-tags="W7 信用評分 JCIC 聯徵中心 信用卡 分期付款 借貸風險">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-credit-card"></i> Week 07</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第七週：個人信用評分變動與借貸風險</span>
                            <span class="lang-en">Week 7: Credit Scores & Borrowing Risks</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">維護個人的第二張身分證！JCIC 聯徵分數計算、信用卡循環利息陷阱與建立良好信用歷史。</span>
                            <span class="lang-en">Protecting your financial reputation. JCIC Credit Scores, credit card interest traps & credit history.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">JCIC Score</span>
                            <span class="mini-tag">Credit Cards</span>
                            <span class="mini-tag">Interest Traps</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第七週_個人信用評分變動與借貸風險.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第七週_課程教學指引_個人信用評分變動與借貸風險.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 8 -->
                <div class="week-card" data-tags="W8 期中檢核 實戰個案 總複習 財經複習 觀念測驗">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-clipboard-check"></i> Week 08</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第八週：期中學習成果檢核與實戰個案總複習</span>
                            <span class="lang-en">Week 8: Midterm Review & Case Studies</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">前半學期觀念整合大考驗！小組實戰個案診斷、通爆/股票/ETF/信用盲點檢視與反思。</span>
                            <span class="lang-en">Midterm integration! Group case diagnoses reviewing inflation, stocks, ETFs & credit pitfalls.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Midterm Review</span>
                            <span class="mini-tag">Case Diagnosis</span>
                            <span class="mini-tag">Synthesis</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第八週_期中學習成果檢核與實戰個案總複習.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第八週_課程教學指引_期中學習成果檢核與實戰個案總複習.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODULE 3 -->
        <div class="module-group" data-module="mod3">
            <div class="module-header">
                <div class="module-icon"><i class="fa-solid fa-chart-line"></i></div>
                <h2 class="module-title">
                    <span class="lang-zh">模組三：資產配置與稅務規劃 (Module 3: Wealth & Tax Planning)</span>
                    <span class="lang-en">Module 3: Wealth & Tax Planning (Weeks 9-12)</span>
                </h2>
            </div>
            <div class="weeks-grid">
                <!-- Week 9 -->
                <div class="week-card" data-tags="W9 複利效應 個人儲蓄 定期定額 時間價值 緊急預備金">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-wand-magic-sparkles"></i> Week 09</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第九週：複利效應與個人儲蓄規劃</span>
                            <span class="lang-en">Week 9: Compound Interest & Savings Planning</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">愛因斯坦口中的世界第八大奇蹟！計算單利 vs 複利差異、定期定額試算與緊急預備金規劃。</span>
                            <span class="lang-en">The 8th wonder of the world! Simple vs Compound interest, Dollar-Cost Averaging & Emergency Funds.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Compound Interest</span>
                            <span class="mini-tag">Dollar-Cost Averaging</span>
                            <span class="mini-tag">Emergency Fund</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第九週_複利效應與個人儲蓄規劃.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第九週_課程教學指引_複利效應與個人儲蓄規劃.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 10 -->
                <div class="week-card" data-tags="W10 不動產 房地產 租買決策 房貸試算 房價負擔能力 租金回報率">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-house"></i> Week 10</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十週：不動產房地產與租買決策財務學</span>
                            <span class="lang-en">Week 10: Real Estate: Rent vs Buy Decisions</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">年輕人到底該買房還是租房？計算房貸負擔率、租金回報率、頭期款籌措與機會成本。</span>
                            <span class="lang-en">Rent vs Buy decision framework: Mortgage affordability, rental yields, down payments & opportunity costs.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Rent vs Buy</span>
                            <span class="mini-tag">Mortgage Affordability</span>
                            <span class="mini-tag">Yield Rates</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十週_不動產房地產與租買決策財務學.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十週_課程教學指引_不動產房地產與租買決策財務學.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 11 -->
                <div class="week-card" data-tags="W11 所得稅 節稅 報稅 免稅額 扣除額 稅率級距">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-file-invoice-dollar"></i> Week 11</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十一週：個人綜合所得稅節稅規劃與報稅</span>
                            <span class="lang-en">Week 11: Personal Income Tax Planning</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">社會新人必修第一堂課！理解綜合所得稅計算、免稅額/標準扣除額/特別扣除額與合法節稅。</span>
                            <span class="lang-en">First tax class for grads: Income tax tiers, exemptions, standard vs itemized deductions.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Income Tax Tiers</span>
                            <span class="mini-tag">Deductions</span>
                            <span class="mini-tag">Tax Saving</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十一週_個人綜合所得稅節稅規劃與報稅實務.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十一週_課程教學指引_個人綜合所得稅節稅規劃與報稅實務.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 12 -->
                <div class="week-card" data-tags="W12 資產負債表 現金流 生涯理財 淨資產 記帳管理">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-receipt"></i> Week 12</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十二週：資產負債表與現金流管理</span>
                            <span class="lang-en">Week 12: Personal Balance Sheet & Cash Flow</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">建立個人專屬的財務報表！編製個人資產負債表、追蹤自由現金流與 20-30-40 生涯理財比例。</span>
                            <span class="lang-en">Building your financial statement: Personal Balance Sheets, Cash Flow tracking & budget ratios.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Balance Sheet</span>
                            <span class="mini-tag">Cash Flow</span>
                            <span class="mini-tag">Budget Allocation</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十二週_個人與家庭資產負債表現金流管理與生涯理財規劃.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十二週_課程教學指引_個人與家庭資產負債表現金流管理與生涯理財規劃.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- MODULE 4 -->
        <div class="module-group" data-module="mod4">
            <div class="module-header">
                <div class="module-icon"><i class="fa-solid fa-rocket"></i></div>
                <h2 class="module-title">
                    <span class="lang-zh">模組四：前瞻科技、永續與期末大結業 (Module 4: Tech & Future Synthesis)</span>
                    <span class="lang-en">Module 4: Tech & Future Synthesis (Weeks 13-18)</span>
                </h2>
            </div>
            <div class="weeks-grid">
                <!-- Week 13 -->
                <div class="week-card" data-tags="W13 半導體 台積電 TSMC 科技供應鏈 晶圓代工 護國神山">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-microchip"></i> Week 13</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十三週：半導體產業台積電與台灣科技供應鏈</span>
                            <span class="lang-en">Week 13: Semiconductor Industry & TSMC</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">深入剖析護國神山台積電！晶圓代工商業模式、半導體上中下游產業鏈與全球競爭優勢。</span>
                            <span class="lang-en">Deep dive into TSMC: Foundry business model, semiconductor supply chain & global advantages.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">TSMC Foundry</span>
                            <span class="mini-tag">Supply Chain</span>
                            <span class="mini-tag">Semiconductors</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十三週_半導體產業護國神山台積電與台灣科技供應鏈.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十三週_課程教學指引_半導體產業護國神山台積電與台灣科技供應鏈.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 14 -->
                <div class="week-card" data-tags="W14 生成式AI 人工智慧 職場轉型 生產力 算力經濟 Nvidia">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-robot"></i> Week 14</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十四週：生成式AI革命與未來職場轉型</span>
                            <span class="lang-en">Week 14: Generative AI & Career Transformation</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">AI 如何改變未來的職場與產業？分析生成式 AI 工具、算力經濟、Nvidia 與新鮮人關鍵能力。</span>
                            <span class="lang-en">How AI rewrites the workplace: Generative AI tools, compute economics, Nvidia & career skills.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Generative AI</span>
                            <span class="mini-tag">Compute Economics</span>
                            <span class="mini-tag">Career Transformation</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十四週_生成式AI革命人工智慧產業鏈與未來職場轉型.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十四週_課程教學指引_生成式AI革命人工智慧產業鏈與未來職場轉型.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 15 -->
                <div class="week-card" data-tags="W15 綠色金融 ESG 永續投資 碳定價 碳交易 CBAM">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-leaf"></i> Week 15</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十五週：綠色金融ESG永續投資與碳定價</span>
                            <span class="lang-en">Week 15: Green Finance, ESG Investing & Carbon Pricing</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">永續經濟學的核心大趨勢！綠色金融商品、ESG 評級投資法、碳權交易與碳定價對企業的影響。</span>
                            <span class="lang-en">Green economy trends: Green finance, ESG rating strategies, carbon trading & carbon pricing impacts.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Green Finance</span>
                            <span class="mini-tag">ESG Ratings</span>
                            <span class="mini-tag">Carbon Pricing</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十五週_綠色金融ESG永續投資與碳定價經濟學.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十五週_課程教學指引_綠色金融ESG永續投資與碳定價經濟學.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 16 -->
                <div class="week-card" data-tags="W16 加密貨幣 區塊鏈 Web3 數位資產 比特幣 詐騙防範">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-link"></i> Week 16</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十六週：加密貨幣區塊鏈Web3與數位資產</span>
                            <span class="lang-en">Week 16: Cryptocurrency, Blockchain & Web3 Risk</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">正視新世代數位資產風險！區塊鏈去中心化原理、加密貨幣波動性、Web3 應用與詐騙防範。</span>
                            <span class="lang-en">Navigating digital assets: Blockchain decentralization, crypto volatility, Web3 & fraud prevention.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Blockchain & Web3</span>
                            <span class="mini-tag">Crypto Risk</span>
                            <span class="mini-tag">Fraud Prevention</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十六週_加密貨幣區塊鏈基礎Web3與數位資產風險.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十六週_課程教學指引_加密貨幣區塊鏈基礎Web3與數位資產風險.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 17 -->
                <div class="week-card" data-tags="W17 期末專案 簡報發表 實戰 Pitch 評分量表 簡報技巧">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-chalkboard-user"></i> Week 17</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十七週：期末專案發表實戰財經簡報與總評量</span>
                            <span class="lang-en">Week 17: Final Project Presentations & Pitching</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">大一新鮮人的第一次實戰 Pitch！小組報告財經與理財專案、專業簡報架構與同儕互評。</span>
                            <span class="lang-en">Freshman Capstone Pitch! Group presentations on financial topics, feedback & peer reviews.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Capstone Pitch</span>
                            <span class="mini-tag">Presentation Skills</span>
                            <span class="mini-tag">Peer Review</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十七週_期末專案發表實戰財經簡報與總評量.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十七週_課程教學指引_期末專案發表實戰財經簡報與總評量.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>

                <!-- Week 18 -->
                <div class="week-card" data-tags="W18 大結業 探索藍圖 終身宣言 理財地圖 新鮮人宣言">
                    <div class="card-top">
                        <span class="card-week-badge"><i class="fa-solid fa-trophy"></i> Week 18</span>
                        <h3 class="card-title">
                            <span class="lang-zh">第十八週：學期總結財經探索藍圖與大一新鮮人終身宣言</span>
                            <span class="lang-en">Week 18: Semester Synthesis & Freshman Lifelong Manifesto</span>
                        </h3>
                        <p class="card-desc">
                            <span class="lang-zh">18 週財經探索大結業！繪製個人大學 4 年理財藍圖、簽署終身理財宣言與頒發結業證明。</span>
                            <span class="lang-en">Grand Graduation! Drawing 4-year personal financial roadmaps, signing Lifelong Manifestos.</span>
                        </p>
                        <div class="tags-list">
                            <span class="mini-tag">Grand Graduation</span>
                            <span class="mini-tag">4-Year Roadmap</span>
                            <span class="mini-tag">Lifelong Manifesto</span>
                        </div>
                    </div>
                    <div class="card-actions">
                        <a href="第十八週_學期總結財經探索藍圖與大一新鮮人終身宣言.html" class="action-btn btn-html"><i class="fa-solid fa-play"></i> <span class="lang-zh">網頁簡報</span><span class="lang-en">Presentation</span></a>
                        <a href="第十八週_課程教學指引_學期總結財經探索藍圖與大一新鮮人終身宣言.docx" download class="action-btn btn-docx"><i class="fa-regular fa-file-word"></i> <span class="lang-zh">指引 (.docx)</span><span class="lang-en">Guide</span></a>
                    </div>
                </div>
            </div>
        </div>

    </main>

    <!-- Footer -->
    <footer class="portal-footer">
        <div class="footer-brand">
            <i class="fa-solid fa-frog glow-icon" style="color:#10b981;"></i>
            <span>11501 管理探索二：財金蛙挖哇 18 週課程總覽平台</span>
        </div>
        <p><span class="lang-zh">© 2026 11501 管理探索二：財金蛙挖哇 18 週整合總覽平台 • 版權所有</span>
        <span class="lang-en">© 2026 Management Discovery II 18-Week Curriculum Portal • All Rights Reserved.</span></p>
    </footer>

    <!-- Filter & Search JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const searchInput = document.getElementById('searchInput');
            const tabBtns = document.querySelectorAll('.tab-btn');
            const moduleGroups = document.querySelectorAll('.module-group');
            const weekCards = document.querySelectorAll('.week-card');
            const langToggleBtn = document.getElementById('langToggleBtn');
            const langDisplay = document.getElementById('langDisplay');

            // Bilingual Switcher
            langToggleBtn.addEventListener('click', () => {
                if (document.body.classList.contains('lang-zh')) {
                    document.body.classList.remove('lang-zh');
                    document.body.classList.add('lang-en');
                    langDisplay.textContent = 'EN / 中';
                } else {
                    document.body.classList.remove('lang-en');
                    document.body.classList.add('lang-zh');
                    langDisplay.textContent = '中 / EN';
                }
            });

            // Tab Filter
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    tabBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.getAttribute('data-filter');

                    moduleGroups.forEach(group => {
                        if (filter === 'all' || group.getAttribute('data-module') === filter) {
                            group.style.display = 'block';
                        } else {
                            group.style.display = 'none';
                        }
                    });
                });
            });

            // Live Search Filter
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();

                weekCards.forEach(card => {
                    const text = (card.innerText + ' ' + (card.getAttribute('data-tags') || '')).toLowerCase();
                    if (text.includes(query)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Show module groups if they contain visible cards
                moduleGroups.forEach(group => {
                    const visibleCards = group.querySelectorAll('.week-card[style*="display: flex"], .week-card:not([style*="display: none"])');
                    if (query === '') {
                        group.style.display = 'block';
                    } else {
                        group.style.display = visibleCards.length > 0 ? 'block' : 'none';
                    }
                });
            });
        });
    </script>
</body>
</html>"""

dir_path = r"C:\Users\User\Desktop\115學年度\11501 管理探索二"
with open(os.path.join(dir_path, "index.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

with open(os.path.join(dir_path, "整合18週課程平台.html"), "w", encoding="utf-8") as f:
    f.write(html_content)

print("Successfully generated 11501 管理探索二 Portal index.html & 整合18週課程平台.html!")
