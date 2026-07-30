/**
 * 115 學年度「管理探索二」第五週：ETF 狂熱、主動型 ETF 與被動投資
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w5_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第五週課程導論：ETF 狂熱、主動型 ETF 與被動投資", "en": "Week 5 Intro: ETF Craze, Active ETFs & Passive Investing" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🧺 買進一包頂級綜合堅果：解碼 ETF 掀起的全球投資革命</h2><p>「約翰·柏格名言：不要在乾草堆裡找針，把整座乾草堆買下來！(Don't look for the needle in the haystack. Just buy the haystack!)」</p></div><p>歡迎來到第五週！近兩年全台灣吹起前所未有的 ETF 狂熱，從 0050、0056 到 00940，全民掀起「定期定額買 ETF」風潮。但 ETF 到底是什麼？買高股息 ETF 真的等於穩定賺錢嗎？本單元將帶領大家拆解被動投資與主動型 ETF 的核心原理。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：籃子精神</h4><p>ETF 是一籃子股票的組合，買進 1 股等於一次擁有數十家優秀企業。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：指數化投資</h4><p>追蹤大盤指數，以極低管理成本獲取市場平均長期獲利。</p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) / SITCA 投信投顧公會</div>",
      "en": "<div class=\"hero-box\"><h2>🧺 Buying a Basket of Top Firms: Decoding the Global ETF Revolution</h2><p>\"John Bogle: Don't look for the needle in the haystack. Just buy the haystack!\"</p></div><p>Welcome to Week 5! Taiwan is witnessing an unprecedented ETF craze (0050, 0056, 00940). Is high-dividend ETF investing a silver bullet? We will demystify passive indexing and active ETFs.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Basket Principle</h4><p>An ETF is a basket of stocks; buying 1 share spreads risk across 50+ firms.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Passive Indexing</h4><p>Tracking market indices to capture average market returns at low cost.</p></div></div><div class=\"data-source-badge\">📌 Source: Taiwan Stock Exchange (TWSE) / SITCA Official Statistics</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第五週 3 小時學習地圖與核心技能樹", "en": "Week 5 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學模組</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>ETF 本質與被動投資</b> (Slide 01 - 10)<br>約翰柏格指數革命、全台 ETF 狂熱、定期定額微笑曲線與費用率打擊</td><td>🎯 <b>1小時活動</b>：0050 / 00940 定期定額與複利計算盤</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>高股息陷阱與主動型 ETF 解禁</b> (Slide 11 - 20)<br>高殖利率 ≠ 高總報酬、收益平準金、市價與淨值折溢價、主動型 ETF 政策解禁</td><td>🎯 <b>2小時活動</b>：ETF 市價淨值折溢價與套利檢測器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>實證比對與資產配置</b> (Slide 21 - 30)<br>選牌 4 金律、0050 vs. 0056 10年對決、核心衛星策略與美股 VOO/QQQ</td><td>🎮 <b>3小時小遊戲</b>：ETF 投資專家大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：自選 ETF 成分股與費用率分析報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 5 3-Hour (180 Mins) Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>ETF Basics & Passive Indexing</b> (Slide 01 - 10)<br>John Bogle Revolution, DCA Smile Curve & Expense Ratios</td><td>🎯 <b>Hour 1 Activity</b>: DCA Compounding Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>High Dividends & Active ETFs</b> (Slide 11 - 20)<br>Yield vs Return, Equalization Funds, Premium/Discount & Active ETFs</td><td>🎯 <b>Hour 2 Activity</b>: ETF Premium/Discount Checker</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Empirical Battles & Allocation</b> (Slide 21 - 30)<br>4 Criteria, 0050 vs 0056 10-Yr Battle, Core-Satellite & VOO/QQQ</td><td>🎮 <b>Hour 3 Game</b>: ETF Master Challenge<br>📝 <b>Class Assignment</b>: ETF Holdings & Expense Analysis Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "ETF 本質", "en": "ETF Basics" },
    "title": { "zh": "什麼是 ETF？(Exchange Traded Funds: 交易所交易基金的比喻)", "en": "What Is an ETF? A Basket of Stocks Traded Like a Stock" },
    "content": {
      "zh": "<h3>🍱 從買「綜合水果便當」理解 ETF 的發行機制</h3><p>假設你到水果店買水果，單買 1 顆進口哈密瓜要 500 元（類似高單價個股）。但如果水果店幫你把蘋果、香蕉、哈密瓜與葡萄切好打包成 <b>100 元的「綜合水果盒」</b>，你只要花 100 元就能一次吃到 5 種水果！</p><ul><li><b>ETF 的定義</b>：指數股票型基金 (Exchange Traded Fund)。將一籃子符合特定規則的股票（如台灣市值前 50 大企業）打包成一個檔號（如 0050）。</li><li><b>掛牌交易</b>：像普通股票一樣在證交所（二級市場）即時買賣，流動性極高。</li></ul><div class=\"highlight-box\">💡 <b>Key Takeaway</b>：買進 1 股 ETF = 瞬間將資金分散投資至幾十甚至上千家企業，告別單一公司倒閉黑天鵝！</div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) ETF 投資人教育專區</div>",
      "en": "<h3>🍱 Understanding ETFs Through a Fruit Basket Analogy</h3><p>Buying a single premium melon costs $500 (like buying a single expensive stock). But a fruit box with apples, bananas, grapes, and melons costs $100—allowing you to enjoy 5 fruits at once!</p><ul><li><b>ETF Definition</b>: Exchange Traded Fund. A fund tracking a specific index (e.g. Taiwan's top 50 firms) bundled into a single stock ticker (e.g. 0050).</li><li><b>Exchange Traded</b>: Trades on the stock exchange in real-time just like individual shares.</li></ul><div class=\"highlight-box\">💡 <b>Key Takeaway</b>: Buying 1 share of an ETF instantly diversifies your capital across dozens of companies.</div><div class=\"data-source-badge\">📌 Source: Taiwan Stock Exchange (TWSE) ETF Investor Education</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "被動哲學", "en": "Bogle Revolution" },
    "title": { "zh": "被動投資哲學：約翰·柏格 (John Bogle) 與 Vanguard 指數革命", "en": "Passive Philosophy: John Bogle & Vanguard Index Revolution" },
    "content": {
      "zh": "<h3>🏛️ 為什麼指數化投資能戰勝 90% 的華爾街基金經理人？</h3><p>1975 年，Vanguard 創辦人約翰·柏格 (John Bogle) 推出全球第一檔追蹤標普 500 的指數基金，當時被華爾街嘲笑為「追求平庸」。然而 50 年數據證明：<b>超過 85% 的主動型基金在 10 年期累積報酬上打不贏大盤指數！</b></p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>👔 主動型基金 (Active Fund)</h4><p>靠基金經理人擇時選股，收取高額管理費 (1.5%~2.0%)，頻繁換股產生摩擦成本。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 被動型指數基金 (Passive ETF)</h4><p>不預測市場，複製大盤指數，收取極低費用 (0.1%~0.3%)，享受整體經濟成長。 </p></div></div><div class=\"data-source-badge\">📌 資料來源：S&P Dow Jones SPIVA 報告與 Vanguard 歷史數據統計</div>",
      "en": "<h3>🏛️ Why Indexing Beats 90% of Wall Street Fund Managers</h3><p>In 1975, Vanguard founder John Bogle launched the first S&P 500 index fund. History shows over 85% of active funds fail to beat the index over 10-year horizons!</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>👔 Active Mutual Funds</h4><p>Rely on managers for stock picking, charging high fees (1.5%-2.0%) with high turnover costs.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 Passive Index ETFs</h4><p>Replicate index holdings automatically at ultra-low costs (0.1%-0.3%) to capture market growth.</p></div></div><div class=\"data-source-badge\">📌 Source: S&P Dow Jones SPIVA Scorecard & Vanguard Historical Reports</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "工具比較", "en": "Comparison" },
    "title": { "zh": "個股 vs. 共同基金 vs. ETF 的成本與交易機制比較", "en": "Comparing Individual Stocks, Mutual Funds & ETFs" },
    "content": {
      "zh": "<h3>⚖️ 投資三大主流工具的全方位能力大比拼</h3><table class=\"data-table\"><thead><tr><th>比較項目</th><th>個股 (Individual Stock)</th><th>傳統共同基金 (Mutual Fund)</th><th>指數型 ETF (Passive ETF)</th></tr></thead><tbody><tr><td><b>交易場所</b></td><td>證券交易所 (即時成交)</td><td>向申購銀行/投信 (每日 1 個淨值)</td><td><b>證券交易所 (盤中即時成交)</b></td></tr><tr><td><b>管理費用率</b></td><td>0% (僅交易手續費)</td><td>高 (1.5% ~ 2.5% / 年)</td><td><b>極低 (0.1% ~ 0.4% / 年)</b></td></tr><tr><td><b>持股透明度</b></td><td>100% 明確</td><td>每月/每季才公佈前 10 大持股</td><td><b>每日 100% 完全透明</b></td></tr><tr><td><b>風險分散度</b></td><td>極低 (承受單一公司黑天鵝)</td><td>高 (分散數十檔)</td><td><b>高 (依指數規則分散)</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：金管會證期局 (FSC) 與投信投顧公會 (SITCA) 投資工具比較</div>",
      "en": "<h3>⚖️ Comparing Stocks, Mutual Funds, and ETFs</h3><table class=\"data-table\"><thead><tr><th>Feature</th><th>Individual Stocks</th><th>Traditional Mutual Funds</th><th>Index ETFs</th></tr></thead><tbody><tr><td><b>Trading Venue</b></td><td>Stock Exchange (Real-time)</td><td>Bank/Fund House (End-of-day NAV)</td><td><b>Stock Exchange (Real-time)</b></td></tr><tr><td><b>Expense Ratio</b></td><td>0% (Trades only)</td><td>High (1.5% - 2.5% / year)</td><td><b>Ultra-low (0.1% - 0.4% / year)</b></td></tr><tr><td><b>Transparency</b></td><td>100% Direct</td><td>Delayed Monthly/Quarterly</td><td><b>100% Daily Transparency</b></td></tr><tr><td><b>Risk Diversification</b></td><td>Very Low (Single firm risk)</td><td>High (Dozens of stocks)</td><td><b>High (Index-rules based)</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Taiwan FSC & SITCA Comparison Standards</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "全台狂熱", "en": "Taiwan Craze" },
    "title": { "zh": "實證數據：台灣 ETF 狂熱 (0050, 00940) 規模突破 5 兆元", "en": "Empirical Data: Taiwan ETF Assets Surpass $5 Trillion NTD" },
    "content": {
      "zh": "<h3>🇹🇼 全民掀起 ETF 投資浪潮的真實統計數據</h3><p>截至 2026 最新官方數據，台灣 ETF 市場規模已強勢突破 <b>5.5 兆元新台幣</b>，受益人數突破 <b>1,100 萬人次</b>（幾乎每兩名台灣人就有一人持有 ETF）：</p><table class=\"data-table\"><thead><tr><th>ETF 類型代號</th><th>代表標的</th><th>規模 (AUM) 與受益人數實證</th><th>特色與投資人迷思</th></tr></thead><tbody><tr><td><b>市值型 (Market Cap)</b></td><td>0050 元大台灣50</td><td>規模超過 <b>4,000 億元</b>，股東 70 萬人</td><td>追蹤台股前 50 大市值巨擘，長期總報酬強勁。</td></tr><tr><td><b>高股息型 (High Yield)</b></td><td>0056 / 00878 / 00940</td><td>高股息總規模突破 <b>1.8 兆元</b></td><td>強調月配息/季配息，深受退休族與新鮮人追捧。</td></tr><tr><td><b>債券型 (Bond ETFs)</b></td><td>00679B 元大美債20年</td><td>美債 ETF 規模突破 <b>2.5 兆元</b></td><td>鎖定美國高利率長債息與未來降息資本利得。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：中華民國證券投資信託暨顧問商業同業公會 (SITCA) 2026 最新統計</div>",
      "en": "<h3>🇹🇼 Taiwan ETF AUM Exceeds $5.5 Trillion NTD</h3><p>Taiwan's ETF market size has surpassed <b>$5.5 Trillion NTD</b> with over <b>11 million investors</b>:</p><table class=\"data-table\"><thead><tr><th>ETF Category</th><th>Ticker</th><th>AUM & Investors</th><th>Characteristics</th></tr></thead><tbody><tr><td><b>Broad Market</b></td><td>0050 Yuanta TW50</td><td>AUM > <b>$400 Billion NTD</b></td><td>Tracks top 50 market-cap firms for long-term total return.</td></tr><tr><td><b>High Dividend</b></td><td>0056 / 00878 / 00940</td><td>High Dividend AUM > <b>$1.8 Trillion</b></td><td>Monthly/Quarterly payouts popular among retail investors.</td></tr><tr><td><b>Bond ETFs</b></td><td>00679B 20Y US Treasury</td><td>Bond ETF AUM > <b>$2.5 Trillion</b></td><td>Locks in high US yields and potential rate cut gains.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: SITCA Official Monthly Statistics</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "指數篩選", "en": "Index Rules" },
    "title": { "zh": "追蹤指數機制：成分股如何選出？(市值加權 vs 股息加權)", "en": "Index Selection Rules: Market-Cap vs. High-Dividend Weighting" },
    "content": {
      "zh": "<h3>⚙️ 決定 ETF 績效優劣的底層演算法規則</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🏛️ 1. 市值加權法 (Market-Cap Weighted)</h4><p><b>代表</b>：0050 (追蹤台灣 50 指數)、標普 500 (VOO)。</p><p><b>規則</b>：公司市值越大，佔 ETF 比重越高。自動讓贏家（如台積電 50%）權重放大，汰弱留強。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>💰 2. 股息率加權法 (Dividend Weighted)</h4><p><b>代表</b>：0056、00878、00940。</p><p><b>規則</b>：依歷史股息率或預估股息率排名篩選成分股。容易納入低成長價值股，剔除不發股利的暴利科技飆股。</p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣指數公司 (TIP) 與 FTSE 富時指數編算規則書</div>",
      "en": "<h3>⚙️ The Underlying Algorithms Shaping ETF Performance</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>🏛️ 1. Market-Cap Weighting</h4><p><b>Examples</b>: 0050 (Taiwan 50 Index), S&P 500 (VOO).</p><p><b>Rule</b>: Larger market cap = higher weight. Automatically lets winning giants grow.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>💰 2. Dividend-Yield Weighting</h4><p><b>Examples</b>: 0056, 00878, 00940.</p><p><b>Rule</b>: Ranks stocks by historical or predicted dividend yield. May exclude high-growth tech non-dividend payers.</p></div></div><div class=\"data-source-badge\">📌 Source: Taiwan Index Plus (TIP) & FTSE Russell Methodology</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "定期定額", "en": "Dollar-Cost Averaging" },
    "title": { "zh": "定期定額 (DCA) 的數學優勢：微笑曲線 (Smile Curve)", "en": "Dollar-Cost Averaging (DCA) & The Smile Curve Effect" },
    "content": {
      "zh": "<h3>📉 跌市反而是扣款的好時機！微笑曲線解密</h3><p>定期定額 (Dollar-Cost Averaging, DCA) 指固定時間（如每月 6 日）投入固定金額（如 5,000 元）買進 ETF。其數學優勢在於：<b>高價時自動買少，低價時自動買多！</b></p><div class=\"formula-box\">$$\\text{平均持股成本} = \\frac{\\text{累積總投入資金}}{\\text{累積買進總股數}} < \\text{平均股票單價}$$</div><div class=\"highlight-box\">😊 <b>微笑曲線 (Smile Curve)</b>：當市場從高點拉回再反彈時，定期定額能在谷底累積大量低價單位數，待行情回升時率先轉虧為盈暴賺！</div><div class=\"data-source-badge\">📌 資料來源：證券投資人保護中心 (SFIPO) 定期定額投資理財手冊</div>",
      "en": "<h3>📉 Market Dips Become Buying Opportunities: The DCA Smile Curve</h3><p>Dollar-Cost Averaging (DCA) means investing a fixed amount (e.g. $5,000 NTD) on a fixed monthly date regardless of price. Math advantage: <b>Buys fewer shares when expensive, buys more shares when cheap!</b></p><div class=\"formula-box\">$$\\text{Average Unit Cost} = \\frac{\\text{Total Invested Capital}}{\\text{Total Accumulated Shares}} < \\text{Average Stock Price}$$</div><div class=\"highlight-box\">😊 <b>Smile Curve Effect</b>: Accumulates maximum shares during market troughs to generate rapid profits upon recovery.</div><div class=\"data-source-badge\">📌 Source: SFIPO Dollar-Cost Averaging Investor Guide</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "內扣費用", "en": "Expense Ratios" },
    "title": { "zh": "總管理費用率 (Expense Ratio) 對長期複利財富的打擊", "en": "Expense Ratios: The Silent Killer of Long-Term Wealth" },
    "content": {
      "zh": "<h3>💸 內扣費用不在帳單上，卻每天默默從淨值扣除！</h3><p>ETF 的總管理費用率 (Total Expense Ratio) 包含：<b>經理費、保管費、指數授權費與換股交易稅</b>。這些費用不需投資人拿現金繳納，而是每天直接從 ETF 淨值中扣除。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🐢 高費用率 ETF (內扣 1.5% / 年)</h4><p>投資 30 年，$1,000 萬本金將被吃掉超過 <b>280 萬元費用！</b></p></div><div class=\"concept-card\"><h4>⚡ 超低費用率 ETF (內扣 0.15% / 年)</h4><p>投資 30 年，總費用僅約 <b>35 萬元</b> (幫你省下 245 萬元！)</p></div></div><div class=\"data-source-badge\">📌 資料來源：投信投顧公會 (SITCA) 各檔 ETF 總內扣費用率實證統計</div>",
      "en": "<h3>💸 Total Expense Ratios: Daily Deduction from NAV</h3><p>Total Expense Ratio includes <b>management fees, custody fees, index licensing, and rebalancing taxes</b>, deducted directly from daily NAV.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🐢 High Expense ETF (1.5% / Year)</h4><p>Over 30 years, a $10M portfolio loses over <b>$2.8 Million in fees!</b></p></div><div class=\"concept-card\"><h4>⚡ Low Expense ETF (0.15% / Year)</h4><p>Over 30 years, total fee is only <b>$350k</b> (Saves $2.45 Million!).</p></div></div><div class=\"data-source-badge\">📌 Source: SITCA Official Expense Ratio Disclosures</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>ETF 本質</b>：一籃子股票，交易所即時買賣，具備極高流動性與風險分散力。</li><li><b>被動優勢</b>：柏格指數革命證明被動追蹤長期勝過 85% 的主動經理人。</li><li><b>定期定額與費用</b>：利用微笑曲線降低成本，務必選擇低內扣費用率標的。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: DCA試算盤」</b> 按鈕，輸入每月扣款金額（例如 3,000 元）與預期年化報酬率，親自見證 20 年定期定額的複利威力！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>ETF Essence</b>: A basket of stocks offering high liquidity and instant diversification.</li><li><b>Indexing Power</b>: Bogle's revolution showed passive indexing beats 85% of active managers.</li><li><b>DCA & Fees</b>: Harness the Smile Curve and choose ETFs with ultra-low expense ratios.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to test monthly DCA compounding over 20 years!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "高股息陷阱", "en": "High-Dividend Traps" },
    "title": { "zh": "高股息 ETF 狂熱真相：高殖利率 (Yield) 不等於高總報酬", "en": "The High-Dividend Trap: High Yield ≠ High Total Return" },
    "content": {
      "zh": "<h3>⚠️ 為什麼宣稱 10% 高殖利率的 ETF，長期賺得比 0050 還少？</h3><p>大一新鮮人最常犯的錯就是把「現金殖利率」誤當成「投資報酬率」。<b>總報酬率 = 股息 + 價差</b>。若 ETF 為了發放高額股息而選入缺乏成長動能的衰退企業，其股價長期跌破發行價，便會陷入「左手換右手」的貼息窘境。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🎁 00878 / 00940 (高股息型)</h4><p>年化殖利率 7%~9%，但成分股缺乏台積電等高成長飆股，<b>資本利得較慢</b>。</p></div><div class=\"concept-card\"><h4>🚀 0050 (市值型)</h4><p>年化殖利率僅 2%~3%，但台積電等大股推升股價，<b>10 年總報酬大幅領先！</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 歷史總報酬指數 (Total Return Index) 比對</div>",
      "en": "<h3>⚠️ Why 10% High Yield ETFs Often Lag Broad Market Total Returns</h3><p>Freshmen confuse Dividend Yield with Total Return (Total Return = Dividends + Capital Gains). High dividends from declining firms result in capital losses.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🎁 High Dividend ETFs (00878 / 00940)</h4><p>7%-9% yield, but lacks high-growth semiconductor giants; slower capital gains.</p></div><div class=\"concept-card\"><h4>🚀 Broad Market ETF (0050)</h4><p>2%-3% yield, but TSMC growth drives price up; 10-year total return leads by far!</p></div></div><div class=\"data-source-badge\">📌 Source: TWSE Total Return Index Empirical History</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "收益平準金", "en": "Equalization Funds" },
    "title": { "zh": "收益平準金 (Equalization Fund) 機制與金管會新制規範", "en": "Revenue Equalization Funds: Mechanism & FSC Regulations" },
    "content": {
      "zh": "<h3>🛡️ 避免新股東稀釋舊股東股息的平準金真相</h3><p>當一檔高股息 ETF 突然暴紅、湧入數千億新資金時，若無平準金機制，原本可發放的股息會被大量新進投資人稀釋。<b>收益平準金</b>是將新進投資人本金中的一部分撥入平準金帳戶，專款專用於維持配息穩定。</p><div class=\"highlight-box\">📜 <b>金管會 2024 新規三大鐵律</b>：1. 配息率不得高於追蹤指數息率；2. 必須達到啟動門檻（如溢價或稀釋程度）；3. 明確揭露配息來源成分（股利、資本利得、平準金比例）。</div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 證期局收益平準金資訊揭露規範</div>",
      "en": "<h3>🛡️ Preventing Dividend Dilution for Existing Shareholders</h3><p>When a popular ETF receives massive new cash inflows, an Equalization Fund uses a portion of new capital to prevent dividend dilution.</p><div class=\"highlight-box\">📜 <b>FSC Regulatory Rules</b>: 1. Payout yield cannot exceed benchmark index yield; 2. Activation thresholds required; 3. Mandatory disclosure of payout sources (dividends, gains, capital).</div><div class=\"data-source-badge\">📌 Source: FSC Securities Bureau Equalization Fund Rules</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "市價與淨值", "en": "Market Price vs NAV" },
    "title": { "zh": "ETF 的兩大價格：市價 (Market Price) vs. 淨值 (NAV)", "en": "The Two Prices of an ETF: Market Price vs. Net Asset Value (NAV)" },
    "content": {
      "zh": "<h3>🔍 看懂你到底買貴了還是買便宜了？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🏷️ 1. 市值 / 市價 (Market Price)</h4><p><b>交易所買賣價</b>：投資人在 App 上下單交易的撮合成交價格（由市場供需決定）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>⚖️ 2. 淨值 (Net Asset Value, NAV)</h4><p><b>真實資產價值</b>：投信結算 ETF 所持有的所有股票真實價值總和 ÷ 總發行單位數。</p></div></div><p style=\"margin-top: 1rem;\"><b>黃金法則</b>：市價應該緊密貼合淨值。若兩者出現顯著偏差，即產生折溢價風險！</p><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 即時折溢價查詢平台</div>",
      "en": "<h3>🔍 Are You Paying Over or Under the True Asset Value?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🏷️ 1. Market Price</h4><p><b>Traded Price</b>: The matching price executing on the stock exchange app driven by supply/demand.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>⚖️ 2. Net Asset Value (NAV)</h4><p><b>True Underlying Worth</b>: Total value of all underlying stocks held ÷ Total ETF units.</p></div></div><p style=\"margin-top: 1rem;\"><b>Golden Rule</b>: Market price must closely track NAV. Divergence creates premium/discount risks!</p><div class=\"data-source-badge\">📌 Source: TWSE Real-Time Premium/Discount Portal</div>"
    }
  },
  {
    "id": 14,
    "img": "images/w5_active_vs_passive.jpg",
    "hour": 2,
    "tag": { "zh": "折溢價套利", "en": "Premium Discount" },
    "title": { "zh": "折價 (Discount) 與溢價 (Premium) 的形成與套利機制", "en": "Understanding ETF Premiums, Discounts & Arbitrage" },
    "content": {
      "zh": "<h3>⚖️ 為什麼溢價超過 1% 千萬不要追高下單？</h3><div class=\"formula-box\">$$\\text{折溢價率 (\\%)} = \\frac{\\text{市價 (Market Price)} - \\text{淨值 (NAV)}}{\\text{淨值 (NAV)}} \\times 100\\%$$</div><ul><li><b>溢價 (Premium)</b>：市價 > 淨值（買貴了！散戶瘋狂追價，如 00940 掛牌前夕）。投信與授權參與者 (PD) 會透過申購新單位進行<b>申購套利</b>，拉低市價回歸淨值。</li><li><b>折價 (Discount)</b>：市價 < 淨值（買便宜了！市場拋售下打折）。PD 會買進市價 ETF 申請贖回股票進行<b>贖回套利</b>。</li></ul><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 初級市場申購贖回與套利機制</div>",
      "en": "<h3>⚖️ Why You Should Never Buy an ETF Trading at >1% Premium</h3><div class=\"formula-box\">$$\\text{Premium/Discount Ratio (\\%)} = \\frac{\\text{Market Price} - \\text{NAV}}{\\text{NAV}} \\times 100\\%$$</div><ul><li><b>Premium</b>: Market Price > NAV (Overpaid!). Authorized Participants (APs) create new units to arbitrage price back to NAV.</li><li><b>Discount</b>: Market Price < NAV (Undervalued!). APs buy discounted ETF units to redeem underlying shares.</li></ul><div class=\"data-source-badge\">📌 Source: TWSE Primary Market Creation/Redemption Arbitrage Guide</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "豆腐牌效應", "en": "Front Running" },
    "title": { "zh": "指數替換效應：成分股豆腐牌與吃豆腐現象 (Front-Running)", "en": "Index Rebalancing Drag: Front-Running the Tofu Trades" },
    "content": {
      "zh": "<h3>🧊 被動指數公佈成分股時，市場游資如何搶先「吃豆腐」？</h3><p>由於被動型 ETF 必須完全依照公開的指數規則買賣股票，當巨無霸 ETF（如千億級高股息 ETF）預告將於特定日期納入某檔新成分股時，市場上的游資與主力會<b>提前卡位買進</b>（抬高股價），等到 ETF 依規定高價接盤時再賣出獲利了結。這種現象被稱為「吃豆腐 / 被吃豆腐」，會拉高 ETF 的建倉成本。</p><div class=\"data-source-badge\">📌 資料來源：證券自營商與量化交易法人的指數調整套利研究</div>",
      "en": "<h3>🧊 Front-Running Index Rebalancing: The Tofu Trade Phenomenon</h3><p>Because passive ETFs must buy newly announced index constituents on fixed dates, hedge funds and speculators front-run by buying early to dump shares on the ETF at elevated prices, incurring rebalancing drag.</p><div class=\"data-source-badge\">📌 Source: Quantitative Trading Arbitrage Research</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "主動型 ETF", "en": "Active ETFs" },
    "title": { "zh": "前沿政策解禁：主動型 ETF (Active ETFs) 運作機制", "en": "Active ETFs Policy Unlocking: Mechanisms & Manager Discretion" },
    "content": {
      "zh": "<h3>🚀 金管會 2025-2026 重大政策：開放主動型 ETF 審查掛牌</h3><p>過去台灣 ETF 均為追蹤固定指數的「被動型」。隨著政策解禁，投信獲准發行<b>主動型 ETF (Active ETFs)</b>：</p><ul><li><b>靈活性</b>：由專業基金經理人團隊主導選股與換股時機，不需死板貼合特定指數。</li><li><b>優勢組合</b>：兼具傳統主動基金的「打敗大盤潛力」與 ETF 的「盤中即時交易、透明度高與低交易成本」。</li><li><b>代表標的</b>：美國木頭姐 ARK Innovation ETF (ARKK)、主動型半導體 ETF。</li></ul><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 主動型 ETF 開放法規法規草案與公聽會紀錄</div>",
      "en": "<h3>🚀 Taiwan FSC Opens Doors to Active ETFs</h3><p>Unlike traditional passive ETFs, Active ETFs allow professional fund managers to dynamically pick stocks and time the market:</p><ul><li><b>Flexibility</b>: No rigid index constraints; managers actively seek alpha.</li><li><b>Hybrid Benefits</b>: Combines active stock-picking potential with exchange liquidity, transparency, and lower trading costs.</li><li><b>Global Benchmark</b>: Cathie Wood's ARK Innovation ETF (ARKK).</li></ul><div class=\"data-source-badge\">📌 Source: FSC Active ETF Regulatory Release</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "主動 vs 被動", "en": "Active vs Passive" },
    "title": { "zh": "主動型 ETF vs. 被動型 ETF 的核心差異對照", "en": "Active ETFs vs. Passive ETFs Side-by-Side" },
    "content": {
      "zh": "<h3>⚖️ 新時代投資人的雙軌 ETF 工具箱對照</h3><table class=\"data-table\"><thead><tr><th>比較項目</th><th>傳統被動型 ETF (Passive ETF)</th><th>新世代主動型 ETF (Active ETF)</th></tr></thead><tbody><tr><td><b>選股決策</b></td><td>完全依照「指數規則」自動化換股</td><td>由「基金經理人與研究團隊」主觀選股</td></tr><tr><td><b>核心目標</b></td><td>貼近大盤指數回報 (Zero Tracking Error)</td><td><b>尋求超越大盤的超額報酬 (Alpha)</b></td></tr><tr><td><b>管理費用率</b></td><td>極低 (0.1% ~ 0.4% / 年)</td><td>中等 (0.5% ~ 0.9% / 年)</td></tr><tr><td><b>揭露頻率</b></td><td>每日 100% 公開完整持股</td><td>每日或每月定期公開持股與投資組合</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 主動型與被動型 ETF 規格比較</div>",
      "en": "<h3>⚖️ Side-by-Side Comparison of Active and Passive ETFs</h3><table class=\"data-table\"><thead><tr><th>Feature</th><th>Traditional Passive ETF</th><th>New-Generation Active ETF</th></tr></thead><tbody><tr><td><b>Stock Selection</b></td><td>Automated based on fixed index rules</td><td>Active stock picking by fund managers</td></tr><tr><td><b>Primary Goal</b></td><td>Track market index return closely</td><td><b>Beat the benchmark to generate Alpha</b></td></tr><tr><td><b>Expense Ratio</b></td><td>Ultra-low (0.1% - 0.4% / year)</td><td>Moderate (0.5% - 0.9% / year)</td></tr><tr><td><b>Transparency</b></td><td>100% Daily Full Holdings Disclosure</td><td>Daily or Monthly Holdings Disclosure</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: TWSE Active & Passive ETF Specification Standards</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "主題式 ETF", "en": "Thematic ETFs" },
    "title": { "zh": "主題式 ETF (Thematic ETFs) 的熱潮與警訊：AI、半導體", "en": "Thematic ETFs: AI, Semiconductor Hype & Concentration Risks" },
    "content": {
      "zh": "<h3>🤖 買特定趨勢主題 ETF（如 AI、電動車、低軌衛星）的利與弊</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎯 亮點優勢</h4><p>精準押注高成長熱門趨勢（如 AI 晶片爆發），短線獲利爆發力極強。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ 風險警訊</h4><p>持股集中度過高（如前 5 大持股佔 70%），且主題熱度退燒後易面臨大幅修正與成交量萎縮下市。</p></div></div><div class=\"data-source-badge\">📌 資料來源：晨星 (Morningstar) 全球主題式 ETF 存續期實證研究</div>",
      "en": "<h3>🤖 Pros and Cons of Investing in Hot Thematic ETFs (AI, EVs)</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎯 Advantage</h4><p>Concentrated exposure to high-growth mega-trends for strong short-term momentum.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>⚠️ Warning</h4><p>High concentration risk (top 5 holdings > 70%); vulnerable when hype cools down.</p></div></div><div class=\"data-source-badge\">📌 Source: Morningstar Global Thematic ETF Persistence Research</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "債券型 ETF", "en": "Bond ETFs" },
    "title": { "zh": "債券型 ETF (Bond ETFs) 的資產配置角色與稅務優勢", "en": "Bond ETFs: Asset Allocation & Tax Advantages" },
    "content": {
      "zh": "<h3>🛡️ 為什麼大戶與散戶都瘋搶美債 ETF (如 00679B, 00720B)？</h3><ul><li><b>資產避險鎖利</b>：在聯準會高利率末期買進長天期美國國債 ETF，鎖定 4%~5% 無風險利息。</li><li><b>免徵證交稅優勢</b>：台灣停徵債券型 ETF 證券交易稅（省下 0.1% 交易稅）。</li><li><b>海外所得免稅額度</b>：美債 ETF 配息屬於「海外所得」，適用個人基本所得額 750 萬元免稅額度，大幅優於台股股利課稅！</li></ul><div class=\"data-source-badge\">📌 資料來源：財政部賦稅署債券型 ETF 停徵證券交易稅與所得稅規範</div>",
      "en": "<h3>🛡️ Why Retail and Institutional Investors Flock to US Bond ETFs</h3><ul><li><b>Yield Lock-In</b>: Lock in 4%-5% yields on long-term US Treasuries at rate peaks.</li><li><b>Zero Transaction Tax</b>: Taiwan exempts securities transaction tax on bond ETFs (saves 0.1%).</li><li><b>Tax-Free Overseas Income Threshold</b>: US bond ETF payouts count as overseas income under the $7.5M NTD tax-free threshold.</li></ul><div class=\"data-source-badge\">📌 Source: ROC Ministry of Finance Tax Exemptions for Bond ETFs</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>殖利率 vs 總報酬</b>：高股息不等於高報酬，小心左手換右手的貼息與平準金新規。</li><li><b>市價 vs 淨值</b>：市價偏離淨值超過 1% 即為過度溢價，切勿追高避免遭受套利抹平。</li><li><b>主動型 ETF</b>：開放經理人彈性選股，兼具主動超額報酬與 ETF 即時流動性。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 折溢價檢測」</b> 按鈕，輸入某檔 ETF 的市價與淨值，計算折溢價率並判定是否具備套利風險！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Yield vs Return</b>: Beware of dividend traps and understand Equalization Fund rules.</li><li><b>Price vs NAV</b>: Avoid buying ETFs with >1% premium to prevent arbitrage losses.</li><li><b>Active ETFs</b>: Grants manager flexibility to pursue Alpha while retaining ETF liquidity.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate real-time ETF premium/discount ratios!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "選牌 4 金律", "en": "4 Golden Criteria" },
    "title": { "zh": "大一 ETF 選牌 4 大指標：規模、流動性、費用率與追蹤偏離", "en": "4 Golden Criteria for Picking ETFs: AUM, Liquidity, Fees & Tracking" },
    "content": {
      "zh": "<h3>🔍 挑選優質 ETF 的四大黃金檢驗指標</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🏢 1. 資產規模 (AUM)</h4><p>優先選擇規模 > <b>100 億元</b> 的標的，避免規模過小觸及清算下市門檻（< 2 億）。</p></div><div class=\"concept-card\"><h4>💧 2. 每日成交量 (Liquidity)</h4><p>日均量 > <b>3,000 張</b>，確保隨時能以合理市價買賣變現，不會面臨流動性折價。</p></div><div class=\"concept-card\"><h4>📉 3. 超低費用率 (Low Fees)</h4><p>總內扣費用率小於 <b>0.4% / 年</b>，避免管理費侵蝕長期複利。</p></div><div class=\"concept-card\"><h4>🎯 4. 低追蹤偏離度 (Low Tracking Error)</h4><p>淨值走勢必須高度貼合追蹤指數，反映優異的投信追蹤複製能力。</p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) ETF 清算下市規範與選牌指南</div>",
      "en": "<h3>🔍 4 Golden Criteria for Selecting Top ETFs</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🏢 1. Asset Size (AUM)</h4><p>Prefer AUM > <b>$10 Billion NTD</b> to prevent liquidation under regulatory thresholds.</p></div><div class=\"concept-card\"><h4>💧 2. Daily Liquidity</h4><p>Daily volume > <b>3,000 shares</b> to ensure seamless execution without price impact.</p></div><div class=\"concept-card\"><h4>📉 3. Low Expense Ratio</h4><p>Total expense ratio < <b>0.4% / year</b> to preserve long-term compounding returns.</p></div><div class=\"concept-card\"><h4>🎯 4. Low Tracking Error</h4><p>NAV must closely match the index, demonstrating excellent portfolio replication.</p></div></div><div class=\"data-source-badge\">📌 Source: TWSE ETF Listing & Liquidation Rules</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "追蹤偏離", "en": "Tracking Error" },
    "title": { "zh": "追蹤偏離度 (Tracking Error) 與追蹤差距 (Difference)", "en": "Tracking Error & Tracking Difference Explained" },
    "content": {
      "zh": "<h3>🎯 為什麼 ETF 的報酬率不會 100% 完全等於指數？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>偏離原因 1：內扣管理費用</h4><p>經理費與保管費每天扣除，使 ETF 淨值自然略低於指數。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>偏離原因 2：成分股調整交易稅</h4><p>指數調整成分股時，投信在市場買賣產生的證交稅與手續費磨損。</p></div></div><div class=\"formula-box\">$$\\text{追蹤差距 (Tracking Difference)} = \\text{ETF 淨值報酬率} - \\text{追蹤指數報酬率}$$</div><div class=\"data-source-badge\">📌 資料來源：彭博 (Bloomberg) & Morningstar 追蹤品質評估指標</div>",
      "en": "<h3>🎯 Why ETF Returns Don't Match the Index 100%</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>Reason 1: Management Fees</h4><p>Daily fee deductions cause NAV to lag index slightly over time.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>Reason 2: Rebalancing Taxes</h4><p>Transaction taxes and brokerage fees incurred during index rebalancing.</p></div></div><div class=\"formula-box\">$$\\text{Tracking Difference} = \\text{ETF NAV Return} - \\text{Index Return}$$</div><div class=\"data-source-badge\">📌 Source: Bloomberg & Morningstar Tracking Evaluation Standards</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "10年實證對決", "en": "10-Yr Empirical Battle" },
    "title": { "zh": "實證比對：市值型 0050 vs. 高股息 0056 10 年累積報酬對決", "en": "Empirical Battle: Market-Cap 0050 vs. High-Dividend 0056" },
    "content": {
      "zh": "<h3>⚔️ 歷史真實大數據對決：報酬率勝負一目瞭然 (2016-2026)</h3><table class=\"data-table\"><thead><tr><th>比較指標</th><th>0050 (市值型)</th><th>0056 (高股息型)</th><th>實證洞察與結論</th></tr></thead><tbody><tr><td><b>10 年累積總報酬率</b></td><td><b>+260% ~ +310%</b></td><td>+140% ~ +170%</td><td><b>0050 總報酬大幅拉開超過 1.3 倍！</b></td></tr><tr><td><b>平均年化現金殖利率</b></td><td>約 3.2%</td><td><b>約 6.5%</b></td><td>0056 現金股利較高，適合退休族現金流。</td></tr><tr><td><b>核心成分股驅動</b></td><td>含台積電 50%+ 權重</td><td>分散至 30~50 檔高息股</td><td>台積電的晶願代工暴利推升了 0050 的總回報。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 歷史含息總報酬率指數實證</div>",
      "en": "<h3>⚔️ Historical Empirical Battle: 0050 vs. 0056 (2016-2026)</h3><table class=\"data-table\"><thead><tr><th>Metric</th><th>0050 (Broad Market)</th><th>0056 (High Dividend)</th><th>Empirical Insight</th></tr></thead><tbody><tr><td><b>10-Yr Total Return</b></td><td><b>+260% ~ +310%</b></td><td>+140% ~ +170%</td><td><b>0050 outperforms total return by >1.3x!</b></td></tr><tr><td><b>Annual Dividend Yield</b></td><td>~3.2%</td><td><b>~6.5%</b></td><td>0056 pays higher cash dividends for retirement income.</td></tr><tr><td><b>Core Growth Engine</b></td><td>TSMC (~50% weight)</td><td>30-50 High-Yield Stocks</td><td>TSMC semiconductor boom powers 0050 total return.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: TWSE Official Total Return Index Historical Data</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "官方數據", "en": "Official Data" },
    "title": { "zh": "實證數據調取：臺灣證券交易所 (TWSE) ETF 專區查閱", "en": "Retrieving Official ETF Data from TWSE & SITCA" },
    "content": {
      "zh": "<h3>🌐 學會從官方網站查詢第一手 ETF 費用率與折溢價</h3><ul><li><b>TWSE ETF 專區</b>：查詢每檔 ETF 盤中即時折溢價、每日資產規模 (AUM) 與配息公告（<a href=\"https://www.twse.com.tw/zh/ETF/\" target=\"_blank\" style=\"color:var(--accent-sky);\">twse.com.tw/ETF</a>）。</li><li><b>SITCA 投信投顧公會</b>：查詢每檔 ETF 每月的「完整內扣總費用率」（含經理費、保管費與交易手續費）。</li><li><b>公開資訊觀測站 (MOPS)</b>：查詢 ETF 收益平準金組成項目明細。</li></ul><div class=\"data-source-badge\">📌 資料來源：臺灣證券交易所 (TWSE) 暨投信投顧公會公開數據</div>",
      "en": "<h3>🌐 Accessing First-Hand Official ETF Data</h3><ul><li><b>TWSE ETF Portal (twse.com.tw/ETF)</b>: Real-time premium/discount ratios, daily AUM, and payout announcements.</li><li><b>SITCA Portal</b>: Official monthly disclosure of Total Expense Ratios for all Taiwanese ETFs.</li><li><b>MOPS</b>: Detailed breakdown of Equalization Fund components.</li></ul><div class=\"data-source-badge\">📌 Source: TWSE & SITCA Official Public Portals</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "資產配置", "en": "Asset Allocation" },
    "title": { "zh": "核心與衛星策略 (Core-Satellite Strategy) 實務應用", "en": "Core-Satellite Strategy: Building a Resilient Portfolio" },
    "content": {
      "zh": "<h3>🏰 大一新鮮人最佳組合：70% 核心 + 30% 衛星</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏛️ 核心資產 (Core: 70%)</h4><p><b>配置標的</b>：市值型 ETF (0050 / VOO)。</p><p><b>目的</b>：獲取大盤長期經濟成長總報酬，擔任資產穩固的基石底座。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>🛰️ 衛星資產 (Satellite: 30%)</h4><p><b>配置標的</b>：高股息 ETF (00878)、主題型 (AI/半導體) 或 美債 ETF。</p><p><b>目的</b>：創造穩定現金流或追求特定強勢趨勢的超額爆發力。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Vanguard & BlackRock 經典資產配置理論</div>",
      "en": "<h3>🏰 Optimal Portfolio for Freshmen: 70% Core + 30% Satellite</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>🏛️ Core Assets (70%)</h4><p><b>Holdings</b>: Broad Market ETF (0050 / VOO).</p><p><b>Goal</b>: Capture overall economic growth as the resilient portfolio foundation.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>🛰️ Satellite Assets (30%)</h4><p><b>Holdings</b>: High Dividend (00878), Thematic (AI/Semis), or Bond ETFs.</p><p><b>Goal</b>: Generate cash flow or boost returns from tactical mega-trends.</p></div></div><div class=\"data-source-badge\">📌 Source: Vanguard & BlackRock Portfolio Construction Theory</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "美股 ETF", "en": "US-Listed ETFs" },
    "title": { "zh": "美股 ETF 投資入門：VOO、QQQ、VT 全球資產配置", "en": "US-Listed ETFs 101: VOO, QQQ, VT Global Asset Allocation" },
    "content": {
      "zh": "<h3>🌎 放眼全球資本市場：美股三大天王級 ETF</h3><table class=\"data-table\"><thead><tr><th>美股 ETF 代號</th><th>追蹤標的指數</th><th>內扣費用率 (Expense)</th><th>特色與投資適用性</th></tr></thead><tbody><tr><td><b>VOO</b> (Vanguard S&P 500)</td><td>標普 500 指數</td><td><b>0.03% / 年</b> (極低!)</td><td>一次擁有美股 500 大企業（蘋果、微軟、輝達）。</td></tr><tr><td><b>QQQ</b> (Invesco Nasdaq)</td><td>納斯達克 100 指數</td><td>0.20% / 年</td><td>聚焦全球科技巨擘與 AI 創新引擎。</td></tr><tr><td><b>VT</b> (Vanguard Total World)</td><td>富時全球股市指數</td><td><b>0.07% / 年</b></td><td>打包全球 9,000+ 家企業，真正實踐全地球資產配置。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：US SEC Filings & Vanguard / Invesco 官方說明書</div>",
      "en": "<h3>🌎 Global Allocation via US-Listed Mega ETFs</h3><table class=\"data-table\"><thead><tr><th>Ticker</th><th>Index Tracked</th><th>Expense Ratio</th><th>Investment Feature</th></tr></thead><tbody><tr><td><b>VOO</b> (Vanguard S&P 500)</td><td>S&P 500 Index</td><td><b>0.03% / yr</b> (Ultra-low!)</td><td>Owns top 500 US giants (Apple, Microsoft, Nvidia).</td></tr><tr><td><b>QQQ</b> (Invesco Nasdaq 100)</td><td>Nasdaq 100 Index</td><td>0.20% / yr</td><td>Focuses on tech leaders and AI growth engines.</td></tr><tr><td><b>VT</b> (Vanguard Total World)</td><td>FTSE Global All Cap</td><td><b>0.07% / yr</b></td><td>Bundles 9,000+ global stocks for worldwide allocation.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: US SEC Filings & Vanguard/Invesco Official Prospectuses</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "重複持股盲點", "en": "Overlapping Holdings" },
    "title": { "zh": "避免假分散：持有多檔重覆成分股 ETF 的投資盲點", "en": "Avoiding Fake Diversification: Overlapping Holdings Drag" },
    "content": {
      "zh": "<h3>⚠️ 買了 5 檔不同 ETF，結果裡面的股票全是台積電？</h3><p>許多投資人以為同時買進 0050、0052、006208、00940 是「分散風險」，但拆解成分股後發現：<b>台積電與聯發科在這些 ETF 裡的重覆持股比例高達 70%！</b>這並未達成真正的風險分散，反而白白多付了數筆經理費與手續費。</p><div class=\"data-source-badge\">📌 資料來源：公開資訊觀測站 (MOPS) 成分股交叉比對分析</div>",
      "en": "<h3>⚠️ Buying 5 Different ETFs Full of the Same TSMC Shares?</h3><p>Investors think buying 0050, 0052, and 006208 diversifies risk, but overlapping holdings analysis shows >70% weight concentration in TSMC and MediaTek! This is fake diversification.</p><div class=\"data-source-badge\">📌 Source: MOPS Cross-Holdings Analysis</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "ETF 4大金律", "en": "4 Golden Rules" },
    "title": { "zh": "大一新鮮人 ETF 理性投資 4 大金律", "en": "4 Golden Rules of ETF Investing for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的 ETF 理性投資策略</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. 優先選擇廣基市值型</h4><p>以 0050 或 VOO 作為核心底座，共享整體經濟成長複利。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📉 2. 嚴格控管內扣費用率</h4><p>選擇費用率 < 0.4% 的標的，不讓隱形費用吃掉財富。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📅 3. 堅持定期定額紀律</h4><p>利用微笑曲線克服心理恐慌，不輕易停扣。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>⚠️ 4. 不盲追過度溢價 ETF</h4><p>買進前先查即時折溢價，溢價 > 1% 絕不上當。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會證期局 (FSC) 投資人教育關懷原則</div>",
      "en": "<h3>🛡️ Lifetime ETF Investment Wisdom for Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. Prioritize Broad Market ETFs</h4><p>Build 0050 or VOO as core holdings to compound with GDP growth.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>📉 2. Minimize Expense Ratios</h4><p>Select ETFs with fees < 0.4% to protect long-term wealth.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📅 3. Stick to Monthly DCA Discipline</h4><p>Harness the Smile Curve and stay invested through drawdowns.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>⚠️ 4. Avoid High Premium ETFs</h4><p>Check NAV before buying; never pay premiums > 1%.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Investor Protection Principles</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第五週全景知識體系圖與觀念整合", "en": "Week 5 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第五週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>ETF 本質 (Hour 1)</b>：一籃子股票 ➔ 柏格指數革命 ➔ 定期定額微笑曲線 ➔ 內扣費用率殺手。</p><p><b>高股息與主動 (Hour 2)</b>：殖利率 ≠ 總報酬 ➔ 收益平準金新規 ➔ 市價 vs 淨值折溢價 ➔ 主動型 ETF 解禁與主題風險。</p><p><b>實證配置 (Hour 3)</b>：選牌 4 大指標 ➔ 0050 vs 0056 10年實證 ➔ 70/30 核心衛星策略 ➔ 美股 VOO/QQQ/VT ➔ 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 5 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>ETF Basics (Hour 1)</b>: Stock Basket ➔ Bogle Revolution ➔ DCA Smile Curve ➔ Expense Ratio Impact.</p><p><b>High Dividend & Active (Hour 2)</b>: Yield ≠ Return ➔ Equalization Rules ➔ Price vs NAV Premiums ➔ Active ETFs Unlocking.</p><p><b>Empirical Allocation (Hour 3)</b>: 4 Selection Criteria ➔ 0050 vs 0056 Battle ➔ 70/30 Core-Satellite ➔ US ETFs (VOO/QQQ) ➔ 4 Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第六週預告 (數位金融與高利活存)", "en": "Reflections & Week 6 Preview (Digital Banking & High-Yield Savings)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第五週「ETF 狂熱、主動型 ETF 與被動投資」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交本週小組 ETF 成分股與費用率報告。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第六週課程預告：數位金融、高利活存與銀行業變革</h4><p>下週我們將帶大家探索大一新鮮人最關心的 <b>純網銀高利活存、數位帳戶優惠條件刷卡回饋計算</b>，與商業銀行利差商業模式！</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 5!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your ETF analysis report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 6 Preview: Digital Banking & High-Yield Savings</h4><p>Next week we'll cover digital bank high-yield accounts, card cashback math, and commercial bank business models!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: DCA Compounding Simulator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateDCA() {
  const monthlyInput = parseFloat(document.getElementById('monthlyDcaInput').value) || 5000;
  const rateInput = parseFloat(document.getElementById('annualReturnInput').value) || 7.0;
  const yearsInput = parseInt(document.getElementById('dcaYearsInput').value) || 20;

  const r = rateInput / 100 / 12; // monthly rate
  const n = yearsInput * 12; // total months
  
  // Future Value Formula for Annuity: FV = P * (((1 + r)^n - 1) / r)
  const totalInvested = monthlyInput * n;
  const futureValue = monthlyInput * ((Math.pow(1 + r, n) - 1) / r);
  const profit = futureValue - totalInvested;

  const resultDiv = document.getElementById('dcaResult');
  resultDiv.innerHTML = `
    📊 <b>定期定額試算結果 (投資 ${yearsInput} 年)</b>：<br>
    • 累積投入總本金：<b>${totalInvested.toLocaleString()} 元</b><br>
    • 預估期末資產總額：<b>${Math.round(futureValue).toLocaleString()} 元</b><br>
    • 複利滾存淨利潤：<span style="color:var(--accent-emerald); font-size:1.2rem; font-weight:bold;">+${Math.round(profit).toLocaleString()} 元</span><br>
    💡 <i>越早開始定期定額，時間複利威力越驚人！</i>
  `;
}

// HOUR 2 MODAL: ETF Premium/Discount Checker
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculatePremiumDiscount() {
  const marketPrice = parseFloat(document.getElementById('marketPriceInput').value) || 15.2;
  const navPrice = parseFloat(document.getElementById('navInput').value) || 15.0;

  const diffRatio = ((marketPrice - navPrice) / navPrice) * 100;
  const resultDiv = document.getElementById('premiumDiscountResult');

  let statusText = "";
  if (diffRatio > 1.0) {
    statusText = `<span style="color:var(--accent-rose);">⚠️ 嚴重溢價 (+${diffRatio.toFixed(2)}%)！</span> 股市市價顯著高於真實淨值，切勿追高買進，否則面臨套利抹平巨損！`;
  } else if (diffRatio < -1.0) {
    statusText = `<span style="color:var(--accent-emerald);">🛒 折價特價 (${diffRatio.toFixed(2)}%)！</span> 市價低於淨值，屬於相對打折安全區間。`;
  } else {
    statusText = `<span style="color:var(--accent-gold);">✅ 估值合理 (${diffRatio.toFixed(2)}%)。</span> 市價緊貼淨值，屬於正常交易區間。`;
  }

  resultDiv.innerHTML = `
    🔍 <b>折溢價檢測分析</b>：<br>
    • ETF 當前市價：${marketPrice} 元 | 官方真實淨值：${navPrice} 元<br>
    • 折溢價率算式：(市價 - 淨值) ÷ 淨值 = <b>${diffRatio.toFixed(2)}%</b><br>
    💡 <b>檢測判定</b>：${statusText}
  `;
}

// HOUR 3 GAME: ETF Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：約翰·柏格指數革命",
    question: "根據歷史實證統計，10 年長期累積報酬上，有多少比例的主動型基金經理人無法打贏被動大盤指數？",
    options: [
      { text: "約 10% 經理人輸給大盤", correct: false },
      { text: "超過 85% 經理人輸給大盤 (指數化投資勝出)", correct: true },
      { text: "主動經理人 100% 打勝仗", correct: false },
      { text: "無法統計", correct: false }
    ],
    explain: "S&P SPIVA 報告長期統計顯示，超 85% 的主動型基金經理人在 10 年期累積報酬上無法擊敗大盤指數！"
  },
  {
    level: 2,
    title: "關卡 2：高股息殖利率 vs 總報酬",
    question: "關於高股息 ETF，下列哪一個說法是正確的？",
    options: [
      { text: "殖利率高就代表投資報酬率一定最高", correct: false },
      { text: "高股息可能面臨貼息窘境；總報酬率 = 現金股利 + 資本利得價差", correct: true },
      { text: "高股息 ETF 完全沒有內扣管理費用", correct: false },
      { text: "配息發完後股價不會扣除同等金額", correct: false }
    ],
    explain: "總報酬 = 股息 + 價差。若選入衰退企業，發放高額股息可能導致股價貼息，總報酬落後市值型 ETF！"
  },
  {
    level: 3,
    title: "關卡 3：折溢價套利防禦",
    question: "某檔新掛牌 ETF 的真實淨值為 10 元，但散戶搶購使交易所市價飆到 11 元 (溢價 +10%)。你該如何決策？",
    options: [
      { text: "立刻重押買進，因為溢價代表大家很看好", correct: false },
      { text: "堅決不追高！+10% 嚴重溢價會被初級市場申購套利迅速拉回 10 元淨值", correct: true },
      { text: "市價跟淨值沒有任何關聯", correct: false },
      { text: "立刻申請強制作廢", correct: false }
    ],
    explain: "溢價高達 +10% 代表買貴 10%。授權參與者 (PD) 會申購新單位進行套利，市價將迅速修正回歸 10 元淨值，追高散戶必虧！"
  },
  {
    level: 4,
    title: "關卡 4：核心衛星資產配置",
    question: "在經典 Core-Satellite 配置中，大一新鮮人最適宜的 ETF 比率安排為何？",
    options: [
      { text: "100% 押注單一主題型 ETF", correct: false },
      { text: "70% 廣基市值型 (0050/VOO) 核心 + 30% 高股息/衛星型", correct: true },
      { text: "100% 定存不買任何 ETF", correct: false },
      { text: "50% 槓桿 3 倍 ETF + 50% 仙股", correct: false }
    ],
    explain: "70% 市值型 ETF 作為穩固核心底座共享 GDP 成長，30% 衛星創造股息或趨勢爆發力，兼具防守與攻擊！"
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
    let badgeText = userScore === 400 ? "🏆 ETF 投資專家徽章 (ETF Master)" : "🥉 ETF 初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第五週「ETF 狂熱、主動型 ETF 與被動投資」核心觀念！</p>
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
function submitW5Homework(e) {
  e.preventDefault();
  alert("🎉 第五週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
