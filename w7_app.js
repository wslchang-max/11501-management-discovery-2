/**
 * 115 學年度「管理探索二」第七週：個人外匯、匯率變動與國際貿易
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w7_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第七週課程導論：個人外匯、匯率變動與國際貿易", "en": "Week 7 Intro: Personal Forex, Exchange Rates & Global Trade" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>✈️ 跨越台幣圈：解碼全球貨幣價值與匯率脈動</h2><p>「保羅·薩繆爾森名言：匯率是連繫一國經濟與世界經濟最敏感的神經網路！(Exchange rates are the most sensitive neural network connecting a national economy to the world economy!)」</p></div><p>歡迎來到第七週！當大一新鮮人規劃去日本旅遊換日圓、在 Amazon/淘寶跨境網購、或關注台積電出口獲利時，都會深刻接觸到「匯率 (Exchange Rate)」。但你看得懂銀行牌告看板上的「即期匯率 vs. 現金匯率」與「買入 vs. 賣出」嗎？新台幣升值或貶值對我們生活有何影響？本單元將帶領大家拆解個人外匯與國際貿易。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：匯率本質</h4><p>匯率是兩種貨幣之間的相對價格，反映國家間購買力與資金流向。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：銀行點差</h4><p>看懂銀行的買入與賣出價，利用即期匯率與外幣帳戶避開現金點差磨損。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 外匯局 / 臺灣銀行 (Bank of Taiwan) 牌告匯率</div>",
      "en": "<div class=\"hero-box\"><h2>✈️ Stepping Outside TWD: Decoding Global Currencies</h2><p>\"Paul Samuelson: Exchange rates are the neural network connecting a national economy to the world.\"</p></div><p>Welcome to Week 7! Traveling to Japan, shopping on Amazon/Taobao, or tracking TSMC's export earnings all involve Foreign Exchange (Forex). We will demystify Spot vs. Cash rates, Bank Buy vs. Sell spreads, and TWD appreciation/depreciation.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Rate Essence</h4><p>Exchange rates represent the relative price between two currencies.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Bank Spreads</h4><p>Understand Bank Buy vs. Sell rates to minimize cash FX friction costs.</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) / Bank of Taiwan Board Rates</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第七週 3 小時學習地圖與核心技能樹", "en": "Week 7 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>外匯基礎與牌告匯率算術</b> (Slide 01 - 10)<br>即期 vs 現金匯率、銀行買入與賣出點差、旅遊換匯 3 大管道、雙幣卡與美元指數 DXY</td><td>🎯 <b>1小時活動</b>：旅遊與網購換匯計算器（即期 vs 現金點差）</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>匯率理論與升貶值雙刃劍</b> (Slide 11 - 20)<br>大麥克指數 PPP、美台利差 IRP、貿易流 vs 資本流、台幣升貶值贏家輸家、央行外匯存底與日圓套利</td><td>🎯 <b>2小時活動</b>：大麥克指數與幣值高低估檢測器 (PPP)</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>實證比對與新鮮人外匯實戰</b> (Slide 21 - 30)<br>換匯 4 金律、美元高利定存匯損風險、台幣 27.5 貶至 32.5 實證對決、10% 美元配置與均值回歸</td><td>🎮 <b>3小時小遊戲</b>：外匯交易達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：自選外幣換匯與升貶值影響報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 7 3-Hour (180 Mins) Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Forex Basics & Rate Board Math</b> (Slide 01 - 10)<br>Spot vs Cash Rates, Bank Buy vs Sell Spreads, 3 FX Channels & DXY Index</td><td>🎯 <b>Hour 1 Activity</b>: Spot vs. Cash FX Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Valuation Theories & Appreciation</b> (Slide 11 - 20)<br>Big Mac Index (PPP), Rate Differentials (IRP), TWD Win-Loss, FX Reserves & JPY Carry</td><td>🎯 <b>Hour 2 Activity</b>: Big Mac Index PPP Valuation Checker</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Empirical Cases & Forex Battle</b> (Slide 21 - 30)<br>4 FX Rules, USD High Yield FX Loss Risk, TWD 27.5 to 32.5 Battle & Asset Allocation</td><td>🎮 <b>Hour 3 Game</b>: Forex Master Challenge<br>📝 <b>Class Assignment</b>: Foreign Currency Exchange Plan Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "匯率本質", "en": "Rate Basics" },
    "title": { "zh": "什麼是匯率？(Exchange Rate: 兩種貨幣的相對價格)", "en": "What Is an Exchange Rate? The Relative Price of Money" },
    "content": {
      "zh": "<h3>💱 購買外國商品與資產的「貨幣轉換鑰匙」</h3><p><b>匯率 (Exchange Rate)</b> 指一種貨幣兌換另一種貨幣的比率。以美金兌新台幣 (USD/TWD = 32.5) 為例，代表<b>買進 1 美元需要支付 32.5 元新台幣</b>。</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 新台幣升值 (Appreciation)</h4><p>USD/TWD 從 32.5 降至 30.0（台幣變強！1 美元只需 30 元台幣即可換到）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📉 新台幣貶值 (Depreciation)</h4><p>USD/TWD 從 32.5 升至 35.0（台幣變弱！需花 35 元台幣才能換到 1 美元）。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 外匯局每日匯率發布說明</div>",
      "en": "<h3>💱 The Currency Key for Global Trade and Travel</h3><p>An <b>Exchange Rate</b> is the relative price of one currency against another. For USD/TWD = 32.5, it costs <b>$32.5 NTD to buy $1 USD</b>.</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📈 TWD Appreciation</h4><p>USD/TWD drops from 32.5 to 30.0 (TWD strengthens; buying $1 USD costs only $30 NTD).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📉 TWD Depreciation</h4><p>USD/TWD rises from 32.5 to 35.0 (TWD weakens; buying $1 USD costs $35 NTD).</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Daily FX Releases</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "即期 vs 現金", "en": "Spot vs Cash" },
    "title": { "zh": "揭開銀行牌告匯率看板：即期匯率 (Spot) vs. 現金匯率 (Cash)", "en": "Bank Exchange Board: Spot Rate vs. Cash Rate" },
    "content": {
      "zh": "<h3>🏦 為什麼去臨櫃換美金現鈔，比在手機 App 上換貴？</h3><table class=\"data-table\"><thead><tr><th>匯率類型</th><th>交易含義與結算方式</th><th>優缺點與點差比較</th></tr></thead><tbody><tr><td><b>即期匯率 (Spot Rate)</b></td><td><b>電子帳戶數字交割</b>。在 App 將台幣帳戶扣款轉入外幣存款帳戶。</td><td><b>匯率最優惠！</b>銀行不需負擔實體現鈔押運、保險與保管成本。</td></tr><tr><td><b>現金匯率 (Cash Rate)</b></td><td><b>實體現鈔手對手交割</b>。去銀行臨櫃點交美金/日圓現鈔。</td><td><b>匯率較貴（點差大）</b>！銀行需向顧客收取現鈔運送、防偽與資金積壓成本。</td></tr></tbody></table><div class=\"highlight-box\">💡 <b>Key Takeaway</b>：大一新鮮人理財第一招——平時先在 App 上用「即期匯率」分批買外幣，出國前再領現鈔，省下大筆點差！</div><div class=\"data-source-badge\">📌 資料來源：臺灣銀行 (Bank of Taiwan) 歷史牌告匯率說明</div>",
      "en": "<h3>🏦 Why Are Physical Cash Dollars More Expensive Than App Transfers?</h3><table class=\"data-table\"><thead><tr><th>Rate Type</th><th>Trading Mechanism</th><th>Pros & Cons Comparison</th></tr></thead><tbody><tr><td><b>Spot Rate (即期匯率)</b></td><td><b>Electronic Account Settlement</b> via Mobile App transfers.</td><td><b>Best Exchange Rate!</b> Banks incur zero physical cash shipping and security costs.</td></tr><tr><td><b>Cash Rate (現金匯率)</b></td><td><b>Physical Banknote Exchange</b> over the counter.</td><td><b>More Expensive!</b> Banks charge extra for cash vaulting, insurance, and transport.</td></tr></tbody></table><div class=\"highlight-box\">💡 <b>Key Takeaway</b>: Buy foreign currencies via mobile apps at Spot Rates in advance to minimize FX spreads.</div><div class=\"data-source-badge\">📌 Source: Bank of Taiwan Official Board Rate Guide</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "買入 vs 賣出", "en": "Bank Buy vs Sell" },
    "title": { "zh": "買入價 (Bank Buy) vs. 賣出價 (Bank Sell) 的銀行視角點差", "en": "Bank Buy vs. Bank Sell: The Bank's Perspective" },
    "content": {
      "zh": "<h3>👁️ 永遠從「銀行的角度」看牌告看板，才不會看反！</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📤 銀行賣出價 (Bank Sell)</h4><p><b>你拿台幣向銀行買外幣</b>。價格較貴（例如 1 美元賣你 32.6 元台幣）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📥 銀行買入價 (Bank Buy)</h4><p><b>你把外幣賣回給銀行換回台幣</b>。價格較便宜（例如 1 美元向你買 32.4 元台幣）。</p></div></div><div class=\"formula-box\">$$\\text{銀行點差利潤 (FX Spread)} = \\text{銀行賣出價} - \\text{銀行買入價} = 32.6 - 32.4 = 0.2 \\text{ 元}$$</div><p><b>結論</b>：如果買了外幣立刻賣回給銀行，因為點差 (Spread) 的存在，你會立刻虧損這筆中間價差！</p><div class=\"data-source-badge\">📌 資料來源：臺灣銀行 (Bank of Taiwan) 牌告匯率買賣價標準定義</div>",
      "en": "<h3>👁️ Always Read the Board From the BANK'S Perspective</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📤 Bank Sell (銀行賣出)</h4><p><b>You use TWD to BUY foreign currency from the bank</b> (Expensive: $32.6 NTD).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>📥 Bank Buy (銀行買入)</h4><p><b>You SELL foreign currency back to the bank for TWD</b> (Cheaper: $32.4 NTD).</p></div></div><div class=\"formula-box\">$$\\text{Bank FX Spread Profit} = \\text{Bank Sell} - \\text{Bank Buy} = 32.6 - 32.4 = 0.2 \\text{ NTD}$$</div><p><b>Conclusion</b>: Buying FX and immediately selling it back incurs an instant loss from the Spread!</p><div class=\"data-source-badge\">📌 Source: Bank of Taiwan Board Rate Definition</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "換匯 3 管道", "en": "3 FX Channels" },
    "title": { "zh": "實戰旅遊換匯 3 大管道：臨櫃換鈔 vs. 線上結匯 vs. 外幣 ATM", "en": "3 FX Channels for Travel: Counter, Online & FX ATMs" },
    "content": {
      "zh": "<h3>🏖️ 大一出國玩換外幣，哪種管道最划算省錢？</h3><table class=\"data-table\"><thead><tr><th>換匯管道</th><th>操作方式與匯率優惠</th><th>適合場景與注意事項</th></tr></thead><tbody><tr><td><b>1. 銀行臨櫃換鈔</b></td><td>持身分證至分行臨櫃現鈔交易，按<b>「現金賣出價」</b>。</td><td>適合臨時急用；點差最貴，且常需外加 100 元手續費。</td></tr><tr><td><b>2. 線上結匯 (指定機場提領)</b></td><td>在 App/網頁用<b>「即期優惠價」</b>預定，選擇桃園機場提領。</td><td><b>最省錢省時！</b>免手續費且享有即期匯率優惠。</td></tr><tr><td><b>3. 外幣 ATM 提領</b></td><td>持金融卡至指定外幣 ATM（如兆豐、玉山）提領日圓/美元。</td><td>24 小時皆可領；直接從台幣帳戶扣款，按優惠現鈔價。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：兆豐銀行 & 臺灣銀行外匯服務管道比較</div>",
      "en": "<h3>🏖️ Which Channel Saves the Most Money for Travel?</h3><table class=\"data-table\"><thead><tr><th>Channel</th><th>Mechanism & Rate Perks</th><th>Best Use Case & Notes</th></tr></thead><tbody><tr><td><b>1. Bank Counter</b></td><td>In-person cash purchase at <b>Cash Sell Rate</b>.</td><td>Expensive spread; often incurs an extra $100 NTD fee.</td></tr><tr><td><b>2. Online FX (Airport Pick-up)</b></td><td>Book online at <b>Spot Rates</b>; pick up cash at Taoyuan Airport.</td><td><b>Most Cost-Effective!</b> Zero handling fees and best rates.</td></tr><tr><td><b>3. Foreign Currency ATMs</b></td><td>Use debit card at FX ATMs to withdraw JPY/USD cash 24/7.</td><td>24/7 convenience; deducts directly from TWD account.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Mega Bank & Bank of Taiwan FX Service Comparison</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "雙幣信用卡", "en": "Dual Currency Cards" },
    "title": { "zh": "雙幣信用卡 (Dual Currency Card) 的扣款機制與鎖匯優勢", "en": "Dual Currency Cards: Locking FX Rates for Overseas Spend" },
    "content": {
      "zh": "<h3>💳 趁日圓便宜時先買好，去日本直接扣日圓帳戶！</h3><p><b>雙幣信用卡</b>是指一張卡片同時綁定「新台幣帳戶」與「指定外幣帳戶（如日圓/美元）」：</p><ul><li><b>國內消費</b>：直接扣新台幣帳戶。</li><li><b>國外消費</b>：直接從你的<b>外幣帳戶扣除外幣</b>，不需在刷卡當天按即時匯率換算！</li></ul><div class=\"highlight-box\">💡 <b>鎖匯優勢</b>：當你發現日圓處於歷史低點（如 0.20）時，先在 App 上用即期匯率買好日圓存著。半年後去日本刷卡時直接扣除這筆便宜日圓，完全免受屆時匯率暴漲影響！</div><div class=\"data-source-badge\">📌 資料來源：玉山銀行、國泰世華雙幣信用卡業務公告</div>",
      "en": "<h3>💳 Buy Cheap Yen Now, Spend Directly from JPY Account Later!</h3><p>A <b>Dual Currency Credit Card</b> links both your TWD account and a foreign currency account (USD/JPY):</p><ul><li><b>Domestic Spend</b>: Deducts from TWD account.</li><li><b>Overseas Spend</b>: Deducts directly from your <b>foreign currency deposit account</b>!</li></ul><div class=\"highlight-box\">💡 <b>FX Lock Benefit</b>: Buy JPY on your app when rates drop. Spend that cheap JPY abroad 6 months later with zero rate risk!</div><div class=\"data-source-badge\">📌 Source: E.SUN Bank & Cathay United Dual Currency Card Disclosures</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "外幣存款數據", "en": "FX Deposit Data" },
    "title": { "zh": "實證數據：全台外幣存款突破 14 兆新台幣", "en": "Empirical Data: Taiwan Foreign Currency Deposits Pass $14T" },
    "content": {
      "zh": "<h3>🇹🇼 台灣人有多愛存外幣？最新權威統計數據</h3><p>根據中央銀行 2026 最新統計，全台國人外幣存款總額已創下歷史新高，突破 <b>14.2 兆元新台幣</b>（佔整體總存款近三成）：</p><table class=\"data-table\"><thead><tr><th>外幣幣別占比</th><th>代表貨幣</th><th>持有機制與國人偏好理由</th></tr></thead><tbody><tr><td><b>第一名 (佔比 > 70%)</b></td><td><b>美元 (USD)</b></td><td>全球儲備貨幣，高利率美幣定存 (4%~5%) 與美股投資需求。</td></tr><tr><td><b>第二名 (佔比 ~ 15%)</b></td><td><b>日圓 (JPY)</b></td><td>台灣人赴日旅遊龐大需求與便宜日圓逢低避險囤積。</td></tr><tr><td><b>其他 (佔比 ~ 15%)</b></td><td>人民幣 (RMB)、歐元 (EUR)、澳幣 (AUD)</td><td>跨境貿易資產配置與高利定存套利。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 外匯局 2026 全體金融機構外幣存款統計月報</div>",
      "en": "<h3>🇹🇼 Taiwan's FX Deposit Total Reaches Historical $14.2 Trillion NTD</h3><p>Central Bank official statistics show total foreign currency deposits have passed <b>$14.2 Trillion NTD</b>:</p><table class=\"data-table\"><thead><tr><th>Share Category</th><th>Currency</th><th>Primary Holding Reasons</th></tr></thead><tbody><tr><td><b>#1 (> 70% Share)</b></td><td><b>US Dollar (USD)</b></td><td>Global reserve currency, 4%-5% USD high yield, and US stock investments.</td></tr><tr><td><b>#2 (~ 15% Share)</b></td><td><b>Japanese Yen (JPY)</b></td><td>Massive travel demand and low-rate Yen hoarding.</td></tr><tr><td><b>Others (~ 15%)</b></td><td>RMB, EUR, AUD</td><td>Cross-border trade and currency yield diversification.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) FX Deposit Monthly Report</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "美元指數", "en": "DXY Index" },
    "title": { "zh": "美元指數 (DXY) 與全球貨幣的連動王者地位", "en": "The US Dollar Index (DXY) & Global Currency Dominance" },
    "content": {
      "zh": "<h3>👑 全球外匯市場的大老：美元指數 (DXY) 代表什麼？</h3><p><b>美元指數 (U.S. Dollar Index, DXY)</b> 是衡量美元兌全球 6 大主要貨幣（歐元 57.6%、日圓 13.6%、英鎊 11.9%、加幣 9.1%、瑞典克朗 4.2%、瑞士法郎 3.6%）的綜合加權指數。</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>📈 美元指數走強 (DXY 突破 105)</h4><p>美元資產吸引力爆發，資金從非美國家（台灣、日本、歐洲）回流美國，非美貨幣普遍面臨貶值壓力。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>📉 美元指數回落 (DXY 跌破 100)</h4><p>聯聯準會進入降息週期，資金湧入新興市場與亞洲股市。</p></div></div><div class=\"data-source-badge\">📌 資料來源：洲際交易所 (ICE) 美元指數編算規範</div>",
      "en": "<h3>👑 The King of Forex Markets: What Does DXY Measure?</h3><p>The <b>U.S. Dollar Index (DXY)</b> tracks the USD against 6 major currencies (EUR 57.6%, JPY 13.6%, GBP 11.9%, CAD 9.1%, SEK 4.2%, CHF 3.6%).</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-sky);\"><h4>📈 Strong DXY (> 105)</h4><p>Capital flows back to US assets; emerging currencies (TWD, JPY, EUR) face depreciation pressures.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>📉 Weak DXY (< 100)</h4><p>Fed enters rate cuts; capital flows out to Asian and emerging markets.</p></div></div><div class=\"data-source-badge\">📌 Source: Intercontinental Exchange (ICE) DXY Index Methodology</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>匯率本質</b>：兩種貨幣相對價格。即期匯率比現金匯率省錢，買賣價需從銀行視角看。</li><li><b>換匯管道</b>：線上結匯機場提領最划算；雙幣卡可提前鎖定便宜匯率。</li><li><b>美元地位</b>：美元佔台人外幣存款 70% 以上；DXY 美元指數主導全球資金流向。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 換匯計算器」</b> 按鈕，輸入預計換匯金額，比較「即期匯率 vs. 現金匯率」的差額，精算你能省下多少手續費點差！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Forex Fundamentals</b>: Spot rates beat cash rates; always read Buy/Sell from the Bank's view.</li><li><b>FX Channels</b>: Online FX airport pick-up saves fees; Dual Currency Cards lock low rates.</li><li><b>USD Supremacy</b>: USD comprises >70% of Taiwan's FX deposits; DXY drives global flows.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate your Spot vs. Cash savings!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "大麥克指數", "en": "Big Mac Index" },
    "title": { "zh": "購買力平價説 (PPP) 與經濟學人「大麥克指數」", "en": "Purchasing Power Parity (PPP) & The Big Mac Index" },
    "content": {
      "zh": "<h3>🍔 用大麥克漢堡看懂一種貨幣是被「高估」還是「低估」？</h3><p><b>購買力平價説 (Purchasing Power Parity, PPP)</b> 認為：長期而言，相同的商品在全世界經過匯率換算後價格應該相同（一價定律）。《經濟學人》創立<b>大麥克指數 (Big Mac Index)</b>：</p><div class=\"formula-box\">$$\\text{PPP 隱含匯率} = \\frac{\\text{大麥克在台灣售價 (75 元 TWD)}}{\\text{大麥克在美國售價 (5.6 美元 USD)}} = 13.39 \\text{ TWD/USD}$$</div><p>若實際市場匯率為 32.5，表示依大麥克購買力計算，<b>新台幣被市場低估了約 58%！</b></p><div class=\"data-source-badge\">📌 資料來源：英國《經濟學人》(The Economist) 官方 Big Mac Index 最新報告</div>",
      "en": "<h3>🍔 Is a Currency Overvalued or Undervalued? The Big Mac Index</h3><p><b>Purchasing Power Parity (PPP)</b> states that identical goods should cost the same across nations (Law of One Price). The Economist's <b>Big Mac Index</b>:</p><div class=\"formula-box\">$$\\text{Implied PPP Rate} = \\frac{\\text{Big Mac Price in Taiwan (\$75 TWD)}}{\\text{Big Mac Price in US (\$5.60 USD)}} = 13.39 \\text{ TWD/USD}$$</div><p>If market rate is 32.5, TWD is <b>undervalued by ~58% against USD</b> based on burger purchasing power!</p><div class=\"data-source-badge\">📌 Source: The Economist Big Mac Index Official Report</div>"
    }
  },
  {
    "id": 12,
    "img": "images/w7_fx_trend.jpg",
    "hour": 2,
    "tag": { "zh": "美台利差", "en": "IRP & Rate Gap" },
    "title": { "zh": "利率平價説 (IRP)：美台利差與資金跨國搬家", "en": "Interest Rate Parity (IRP) & The US-Taiwan Rate Gap" },
    "content": {
      "zh": "<h3>💵 為什麼美國聯準會升息，新台幣就會面臨貶值壓力？</h3><p><b>利率平價説 (Interest Rate Parity, IRP)</b> 說明資金永遠追逐高報酬。當美國利率高達 5.25% 而台灣利率僅 2.0% 時（<b>美台利差廣達 3.25%</b>）：</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏦 1. 資金外流搬家</h4><p>外資與台灣投資人賣掉台幣、換成美元，存入美國高利定存或買美債。</p></div><div class=\"concept-card\"><h4>📉 2. 台幣面臨貶值壓力</h4><p>市場上大量拋售台幣買進美元，使 USD/TWD 匯率從 30 一路推升至 32.5！</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 理監事會議美台利差與匯率分析報告</div>",
      "en": "<h3>💵 Why Does Fed Rate Hiking Cause TWD Depreciation Pressure?</h3><p><b>Interest Rate Parity (IRP)</b> states capital chases higher yields. When US rates are 5.25% vs Taiwan's 2.0% (3.25% rate gap):</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🏦 1. Capital Outflows</h4><p>Investors sell TWD to buy USD for 5% US yields or Treasuries.</p></div><div class=\"concept-card\"><h4>📉 2. TWD Depreciation</h4><p>High demand for USD pushes USD/TWD exchange rate up from 30 to 32.5!</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Rate Differential Analysis</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "貿易流 vs 資本流", "en": "Trade vs Capital Flows" },
    "title": { "zh": "影響匯率供需的兩大力量：進出口貿易流 vs. 跨國資本投資流", "en": "Two Forces Driving Forex Rates: Trade vs. Capital Flows" },
    "content": {
      "zh": "<h3>🌊 決定一國貨幣漲跌的背後水龍頭</h3><table class=\"data-table\"><thead><tr><th>驅動力量</th><th>交易主體與行為</th><th>對新台幣匯率的影響</th></tr></thead><tbody><tr><td><b>1. 經常帳貿易流 (Trade Flows)</b></td><td><b>台積電等出口商賺取美元外銷財</b>。將美元賣掉換回新台幣給發員工薪水與繳稅。</td><td><b>推升台幣升值！</b>（賣美元買台幣需求強勁）。</td></tr><tr><td><b>2. 金融帳資本流 (Capital Flows)</b></td><td><b>外資熱錢 (Hot Money) 買賣台股</b>、本國投信買美債 ETF 或民眾買美股。</td><td><b>引發劇烈短線升貶值！</b>資本流數量遠大於實體貿易流。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 國際收支帳 (Balance of Payments) 統計</div>",
      "en": "<h3>🌊 The Two Main Taps Driving Currency Values</h3><table class=\"data-table\"><thead><tr><th>Driving Force</th><th>Market Actors & Behavior</th><th>Impact on TWD Exchange Rate</th></tr></thead><tbody><tr><td><b>1. Current Account (Trade Flows)</b></td><td><b>Exporters (TSMC) earn USD</b> and sell USD for TWD to pay local wages.</td><td><b>Drives TWD Appreciation!</b> (Strong TWD buying demand).</td></tr><tr><td><b>2. Financial Account (Capital Flows)</b></td><td><b>Foreign hot money buying/selling Taiwan stocks</b> or Taiwanese buying US ETFs.</td><td><b>Causes Short-Term Volatility!</b> Capital flows dwarf physical trade flows.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Balance of Payments Statistics</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "台幣升值利弊", "en": "Appreciation Win-Loss" },
    "title": { "zh": "新台幣升值 (Appreciation) 的贏家與輸家分析", "en": "TWD Appreciation: Who Wins and Who Loses?" },
    "content": {
      "zh": "<h3>⚖️ 當 USD/TWD 從 32.5 強升至 28.0 時，誰笑誰哭？</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎉 升值大贏家</h4><ul><li><b>出國旅遊國人</b>：換日圓美元超便宜，出國購物打折。</li><li><b>進口業者/消費者</b>：進口石油、黃豆、小麥、iPhone 成本下降，緩解國內通膨壓力。</li></ul></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>😭 升值大輸家</h4><ul><li><b>出口廠商 (如工具機、電子廠)</b>：美元營收換回台幣變少，面臨<b>匯兌損失 (FX Loss)</b> 與國際價格競爭力下降。</li></ul></div></div><div class=\"data-source-badge\">📌 資料來源：經濟部國家發展委員會 (NDC) 匯率變動對產業衝擊報告</div>",
      "en": "<h3>⚖️ When USD/TWD Strengthens from 32.5 to 28.0: Who Wins & Loses?</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>🎉 Appreciation Winners</h4><ul><li><b>Outbound Travelers</b>: Buying USD/JPY gets much cheaper; abroad shopping discounts.</li><li><b>Importers/Consumers</b>: Lower costs for imported oil, soybeans, and iPhones; cools inflation.</li></ul></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>😭 Appreciation Losers</h4><ul><li><b>Exporters (Machinery, Tech)</b>: USD revenue translates into fewer TWD, causing FX losses.</li></ul></div></div><div class=\"data-source-badge\">📌 Source: National Development Council (NDC) FX Impact Report</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "台幣貶值影響", "en": "Depreciation Impact" },
    "title": { "zh": "新台幣貶值對出口產業 (台積電) 與進口物價的影響", "en": "TWD Depreciation: TSMC Export Profits vs. Imported Inflation" },
    "content": {
      "zh": "<h3>⚔️ 當 USD/TWD 從 30.0 貶至 33.0 時的經濟雙刃劍</h3><ul><li><b>台積電與出口商毛利率提升</b>：台積電晶圓代工以美金計價。當台幣貶值 1 元，台積電營業利益率可提升約 <b>0.4 個百分點！</b> 財報獲利表現極亮眼。</li><li><b>輸入型通膨 (Imported Inflation) 警訊</b>：台灣能源 97% 依賴進口。台幣貶值導致進口天然氣、原油與糧食價格暴漲，汽油加滿變貴，加劇國內物價上漲壓力。</li></ul><div class=\"data-source-badge\">📌 資料來源：台積電 (TSMC) 法人說明會財務敏感度分析數據</div>",
      "en": "<h3>⚔️ Double-Edged Sword: TWD Depreciating from 30.0 to 33.0</h3><ul><li><b>TSMC Margin Boost</b>: TSMC bills in USD. A $1 TWD depreciation boosts TSMC operating margin by <b>~0.4%</b>, sparkling financial earnings.</li><li><b>Imported Inflation Warning</b>: Taiwan imports 97% of energy. A weaker TWD inflates oil and grain import costs, worsening domestic CPI inflation.</li></ul><div class=\"data-source-badge\">📌 Source: TSMC Earnings Call Financial Sensitivity Disclosures</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "外匯存底", "en": "FX Reserves" },
    "title": { "zh": "央行外匯存底 (FX Reserves) 的功用與台灣 5,700 億美元實力", "en": "Central Bank FX Reserves: Taiwan's $570B War Chest" },
    "content": {
      "zh": "<h3>🛡️ 台灣安然渡過亞洲金融風暴的硬實力底氣</h3><p><b>外匯存底 (Foreign Exchange Reserves)</b> 是中央銀行手裡持有的外幣資產總和（主要為美元國債、黃金與外幣存款）。</p><ul><li><b>全球第六大外匯存底水庫</b>：截至 2026 最新數據，台灣外匯存底高達 <b>5,750 億美元</b>！</li><li><b>核心功用</b>：1. 清償國際貿易進口帳款；2. 當金融海嘯外資抽離時，央行能動用外匯存底拋售美元、護盤新台幣，防止台幣崩盤。</li></ul><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 外匯局 2026 外匯存底統計</div>",
      "en": "<h3>🛡️ The Financial Fortress Protecting Taiwan: $570B+ FX Reserves</h3><p><b>Foreign Exchange Reserves</b> are foreign assets held by the central bank (US Treasuries, Gold):</p><ul><li><b>6th Largest Globally</b>: Taiwan's FX reserves stand at <b>$575 Billion USD</b>!</li><li><b>Core Function</b>: Settles international trade imports and defends TWD stability during financial crises.</li></ul><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Official FX Reserve Release</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "柳樹理論", "en": "Willow Tree Policy" },
    "title": { "zh": "央行匯率政策：柳樹理論 (Willow Tree Policy) 與動態穩定", "en": "Central Bank Policy: The Willow Tree Philosophy" },
    "content": {
      "zh": "<h3>🌿 隨風彎曲卻絕不折斷：彭淮南與楊金龍總裁的匯率哲學</h3><p>台灣央行採取<b>「有管理的浮動匯率制度 (Managed Float)」</b>，最經典的戰略被稱為「柳樹理論」：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🌿 柳樹理論 (Willow Tree)</h4><p>匯率應像柳樹枝條一樣，順應國際市場供需與美元走勢「隨風擺動」，不硬性死盯固定匯率。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🌪️ 逆風操作 (Smoothing)</h4><p>當市場出現熱錢暴進暴出、波動過度劇烈時，央行會進場「拉尾盤」熨平波動，維持動態穩定。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 匯率政策與金融穩定報告</div>",
      "en": "<h3>🌿 Bending with the Wind Without Breaking: The Willow Philosophy</h3><p>Taiwan's CBC employs a <b>Managed Floating Exchange Rate System</b> known as the Willow Tree Policy:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🌿 Willow Tree Analogy</h4><p>Exchange rates should bend gracefully with market winds rather than snapping under rigid pegs.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🌪️ Smoothing Interventions</h4><p>When hot money swings wildly, CBC steps in to smooth excess market volatility.</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC (CBC) Monetary Policy Reports</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "日圓套利", "en": "JPY Carry Trade" },
    "title": { "zh": "日圓貶值 (JPY) 狂潮：利差交易 (Carry Trade) 運作與旅遊效應", "en": "Yen Depreciation Craze: JPY Carry Trade & Japan Travel Boom" },
    "content": {
      "zh": "<h3>💴 為什麼日圓兌台幣一度跌破 0.21？解密日圓套利交易</h3><p>日本央行長期維持超低負利率 (0%~0.1%)，而美國利率高達 5.25%。全球對沖基金發起<b>日圓套利交易 (JPY Carry Trade)</b>：借超便宜日圓 ➔ 換成美元 ➔ 買美債賺 5% 利差。大量拋售日圓導致日圓歷史性暴跌，引發台灣全民哈日赴日旅遊掃貨狂潮！</p><div class=\"data-source-badge\">📌 資料來源：日本銀行 (BOJ) & 國際清算銀行 (BIS) 跨境套利交易報告</div>",
      "en": "<h3>💴 Why Did JPY/TWD Drop Below 0.21? The JPY Carry Trade Unveiled</h3><p>Bank of Japan kept zero rates while US rates were 5.25%. Hedge funds ran <b>JPY Carry Trades</b>: borrow cheap Yen -> sell Yen for USD -> buy 5% US Treasuries. Selling Yen crashed JPY value, sparking a massive Taiwan travel boom to Japan!</p><div class=\"data-source-badge\">📌 Source: Bank of Japan (BOJ) & BIS Cross-Border Carry Trade Reports</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "外匯避險", "en": "FX Hedging" },
    "title": { "zh": "企業外匯避險 (FX Hedging)：遠期外匯 (Forward Contract) 簡介", "en": "Corporate FX Hedging: Forward Contracts Basics" },
    "content": {
      "zh": "<h3>🛡️ 出口廠商如何防止「努力做工卻被匯率吃光利潤」？</h3><p>假設鴻海接獲蘋果 1 億美元訂單，約定 6 個月後交貨收款。若鸿海擔心 6 個月後台幣大升值導致美元換回台幣變少，鴻海會與銀行簽訂<b>遠期外匯合約 (Forward Contract)</b>：</p><div class=\"formula-box\">$$\\text{事先鎖定 6 個月後履約匯率} = 32.0 \\text{ TWD/USD}$$</div><p>不管半年後市場匯率升到 28 還是貶到 35，銀行與鴻海都必須按 32.0 履約交割，成功將匯率風險完全轉移給銀行！</p><div class=\"data-source-badge\">📌 資料來源：台北外匯市場發展基金會與企業外匯避險實務手冊</div>",
      "en": "<h3>🛡️ How Exporters Prevent FX Losses from Wiping Out Profits</h3><p>Foxconn receives a $100M USD Apple order to be paid in 6 months. To prevent FX loss from TWD appreciation, Foxconn signs a <b>Forward Contract</b> with a bank:</p><div class=\"formula-box\">$$\\text{Pre-locked 6-Month Forward Rate} = 32.0 \\text{ TWD/USD}$$</div><p>Regardless of future market rates, both parties settle at 32.0, completely hedging FX risk!</p><div class=\"data-source-badge\">📌 Source: Taipei Forex Market Development Foundation Guide</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>匯率理論</b>：PPP 大麥克指數評估貨幣高低估；IRP 美台利差引發資金跨國搬家。</li><li><b>升貶值雙刃劍</b>：升值利於旅遊與進口抗通膨；貶值利於台積電出口獲利表現。</li><li><b>央行與避險</b>：台灣 5,700 億外匯存底底氣；柳樹理論熨平波動；企業利用遠期外匯鎖匯避險。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 大麥克 PPP」</b> 按鈕，輸入各國大麥克售價，計算 PPP 隱含匯率並判定新台幣是被高估還是低估！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Rate Theories</b>: Big Mac PPP evaluates valuation; Rate Gaps (IRP) drive capital flows.</li><li><b>Appreciation Double-Edge</b>: Strong TWD helps travel; Weak TWD boosts TSMC exports.</li><li><b>Reserves & Hedging</b>: $570B+ FX reserve shield; Willow Tree policy; Forwards lock rates.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate PPP Big Mac Index valuations!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "換匯 4 金律", "en": "4 Golden Rules" },
    "title": { "zh": "大一新鮮人外匯換匯 4 大指標：即期、分批、外幣戶與拒絕 DDC", "en": "4 Golden Rules of FX Exchange for Freshmen" },
    "content": {
      "zh": "<h3>🔍 大一新鮮人聰明換匯四大黃金守則</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>📱 1. 優先選擇即期匯率</h4><p>在手機 App 上用「即期買賣價」線上換匯，享受最優匯率並省下現鈔點差。</p></div><div class=\"concept-card\"><h4>📅 2. 分批買進平滑成本</h4><p>切勿單筆梭哈！利用「定期定額」或「分 3-4 批逢低買進」平滑匯率波動。</p></div><div class=\"concept-card\"><h4>🏦 3. 善用外幣數位帳戶</h4><p>開立外幣數位存款帳戶，平時存美金/日圓領高利活存，出國直接刷雙幣卡。</p></div><div class=\"concept-card\"><h4>🚫 4. 海外結算拒絕 DDC</h4><p>國外刷卡一律勾選「當地貨幣」，絕不選擇新台幣 (DDC) 結算避免 5% 惡劣手續費。</p></div></div><div class=\"data-source-badge\">📌 資料來源：臺灣銀行與兆豐銀行外匯理財實務指南</div>",
      "en": "<h3>🔍 4 Golden Rules for Freshmen Foreign Exchange</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>📱 1. Prioritize Spot Rates</h4><p>Exchange online via mobile apps to get superior Spot Rates over Cash Rates.</p></div><div class=\"concept-card\"><h4>📅 2. Tranche FX Purchases</h4><p>Never buy in a single lump sum; use 3-4 tranches to smooth out rate volatility.</p></div><div class=\"concept-card\"><h4>🏦 3. Leverage Digital FX Accounts</h4><p>Open digital FX accounts to earn interest on USD deposits and pair with Dual Currency Cards.</p></div><div class=\"concept-card\"><h4>🚫 4. Reject DDC at Checkout</h4><p>Always bill in local currency overseas to dodge terrible 5% DDC markup fees.</p></div></div><div class=\"data-source-badge\">📌 Source: Bank of Taiwan & Mega Bank FX Management Guide</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "美幣定存風險", "en": "FX Yield vs Loss" },
    "title": { "zh": "美幣定存 (USD Time Deposit) 高利 5% 的風險：賺利息賠匯差", "en": "USD 5% High Yield Risk: Earning Interest but Losing on FX" },
    "content": {
      "zh": "<h3>⚠️ 為什麼宣稱 5.5% 的美元定存，存一年換回台幣反而虧錢？</h3><p>大一新鮮人常被「美元定存年利率 5.5%」吸引，卻忽略了<b>匯率波動風險 (FX Risk)</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💰 利息收益 (+5.5%)</h4><p>存入 10,000 美元，一年後獲得利息 550 美元，本利和為 10,550 美元。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📉 匯率損失 (-8.0%)</h4><p>買進時 USD/TWD = 32.5（本金 32.5 萬台幣）。一年後台幣大升值至 29.5，換回台幣僅得 `10,550 * 29.5 = 31.1 萬元`！</p></div></div><div class=\"highlight-box\">😭 <b>結算</b>：雖然賺了 5.5% 美元利息，但因為台幣升值賠了 8% 匯差，<b>總帳淨虧損 14,000 元台幣！</b></div><div class=\"data-source-badge\">📌 資料來源：中央銀行與金管會銀行局外幣定存風險警示手冊</div>",
      "en": "<h3>⚠️ Why a 5.5% USD Deposit Can Net You a Loss in TWD Terms</h3><p>Freshmen are attracted by USD 5.5% rates but forget Foreign Exchange Rate Risk:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💰 Interest Gained (+5.5%)</h4><p>Deposited $10,000 USD; 1 year later principal + interest = $10,550 USD.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>📉 FX Loss (-8.0%)</h4><p>Bought at 32.5 ($325k TWD). 1 year later TWD appreciates to 29.5; converting back yields only $311k TWD!</p></div></div><div class=\"highlight-box\">😭 <b>Result</b>: Despite gaining 5.5% USD interest, an 8% FX loss causes a <b>net loss of $14,000 NTD!</b></div><div class=\"data-source-badge\">📌 Source: Central Bank & FSC FX Risk Disclosures</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "實證案例", "en": "Empirical Battle" },
    "title": { "zh": "實證案例：新台幣從 27.5 貶至 32.5 對留學與 iPhone 的成本計算", "en": "Empirical Case: TWD 27.5 to 32.5 Impact on Study Abroad & iPhones" },
    "content": {
      "zh": "<h3>⚔️ 當新台幣大幅貶值 18% 時，你的錢包如何被無形縮水？</h3><table class=\"data-table\"><thead><tr><th>消費項目</th><th>當 USD/TWD = 27.5 時 (強勢台幣)</th><th>當 USD/TWD = 32.5 時 (弱勢台幣)</th><th>實質金額增加與影響</th></tr></thead><tbody><tr><td><b>美國留學學費 (每年 50,000 美元)</b></td><td>需支付 <b>137.5 萬元台幣</b></td><td>需支付 <b>162.5 萬元台幣</b></td><td><b>學費一年暴增 25 萬元台幣！</b></td></tr><tr><td><b>進口 iPhone (單價 1,000 美元)</b></td><td>折合約 <b>27,500 元台幣</b></td><td>折合約 <b>32,500 元台幣</b></td><td><b>手機售價無形暴漲 5,000 元！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：教育部海外留學費用統計與 Apple 台灣官方定價歷史</div>",
      "en": "<h3>⚔️ How a 18% TWD Depreciation Shrinks Your Purchasing Power</h3><table class=\"data-table\"><thead><tr><th>Expense Item</th><th>At USD/TWD = 27.5 (Strong TWD)</th><th>At USD/TWD = 32.5 (Weak TWD)</th><th>Real Cost Increase</th></tr></thead><tbody><tr><td><b>US Tuition ($50,000 USD / yr)</b></td><td>Costs <b>$1,375,000 TWD</b></td><td>Costs <b>$1,625,000 TWD</b></td><td><b>Tuition explodes by +$250k TWD/yr!</b></td></tr><tr><td><b>Imported iPhone ($1,000 USD)</b></td><td>Equivalent to <b>$27,500 TWD</b></td><td>Equivalent to <b>$32,500 TWD</b></td><td><b>Price rises by +$5,000 TWD!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: ROC Ministry of Education Study Abroad Cost Surveys</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "官方數據", "en": "Official Data" },
    "title": { "zh": "實證數據調取：中央銀行 (CBC) 外匯局與臺灣銀行每日牌告查閱", "en": "Retrieving Official FX Data from CBC & Bank of Taiwan" },
    "content": {
      "zh": "<h3>🌐 學會從官方網站查詢第一手權威外匯數據</h3><ul><li><b>中央銀行外匯局 (cbc.gov.tw)</b>：查詢每日主要貨幣對新台幣收盤匯率、外匯存底統計與外匯市場交易量。</li><li><b>臺灣銀行牌告匯率 (rate.bot.com.tw)</b>：查詢 19 種外幣的歷史即期與現金買賣匯率走勢圖。</li><li><b>經濟部國際貿易署 (trade.gov.tw)</b>：查詢台灣主要出口國家與進口物資統計。</li></ul><div class=\"data-source-badge\">📌 資料來源：中央銀行 (CBC) 暨臺灣銀行 (BOT) 官方數據門戶</div>",
      "en": "<h3>🌐 Querying Official FX Data Databases</h3><ul><li><b>CBC FX Bureau (cbc.gov.tw)</b>: Daily closing FX rates, FX reserves, and trading volumes.</li><li><b>Bank of Taiwan Board Rates (rate.bot.com.tw)</b>: Historical Spot/Cash Buy and Sell charts for 19 currencies.</li><li><b>International Trade Administration</b>: Taiwan's major export destinations and import statistics.</li></ul><div class=\"data-source-badge\">📌 Source: Central Bank of the ROC & Bank of Taiwan Portals</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "新鮮人外匯配置", "en": "Freshmen FX Allocation" },
    "title": { "zh": "大一新鮮人外匯資產配置：10% 美元短期定存 + 旅遊外幣預備金", "en": "Freshmen FX Asset Allocation: 10% USD + Travel Fund" },
    "content": {
      "zh": "<h3>🏰 大一新鮮人理性的外匯資產配比規劃</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>💵 1. 美元資產 (10% 總流動資產)</h4><p>利用數位帳戶於 USD/TWD 處於 31.0 以下時分批買進，存入美金高利活存/定存，作為未來美股投资或美債 ETF 備用金。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💴 2. 旅遊預備金 (小額分批)</h4><p>規劃出國前 6 個月，逢低分 3 批買進日圓/韓元存入外幣帳戶，辦理雙幣卡方便海外消費。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 外匯資產配置實務建議</div>",
      "en": "<h3>🏰 Rational FX Allocation Strategy for College Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>💵 1. USD Assets (10% Liquid Portfolio)</h4><p>Buy USD in tranches when USD/TWD < 31.0 for US stock or bond ETF reserves.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>💴 2. Travel Fund (Tranche Buying)</h4><p>Buy JPY/KRW in 3 tranches 6 months before traveling abroad; pair with Dual Currency Cards.</p></div></div><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) FX Allocation Standards</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "跨境網購算術", "en": "E-Commerce FX Math" },
    "title": { "zh": "跨境網購 (Amazon, Taobao) 匯率與海外刷卡手續費最佳化", "en": "Cross-Border E-Commerce FX Math: Amazon & Taobao Optimization" },
    "content": {
      "zh": "<h3>🛒 在外國網站買東西，怎麼結帳才不會被默默坑錢？</h3><p>在 Amazon、Taobao 或 Steam 購物時，精明結算 3 步驟：</p><ol><li><b>結算幣別選擇</b>：Amazon 選美元/日圓；Taobao 選人民幣。<b>絕對不選 TWD 結算！</b></li><li><b>卡片選擇</b>：挑選海外回饋率 <b>> 2.5%</b> 的信用卡（扣除 1.5% 手續費後仍淨賺 1.0%）。</li><li><b>關稅注意</b>：海外網購單筆 > 2,000 元或半年超過 6 次，將被財政部關務署收取進口關稅與營業稅！</li></ol><div class=\"data-source-badge\">📌 資料來源：財政部關務署海外網購進口稅費說明</div>",
      "en": "<h3>🛒 How to Shop on Foreign Sites Without Getting Ripped Off</h3><p>3 steps for smart cross-border e-commerce checkout:</p><ol><li><b>Select Local Currency</b>: Choose USD/JPY on Amazon, RMB on Taobao; <b>Never select TWD!</b></li><li><b>Pick High Cashback Card</b>: Use a card offering <b>> 2.5% FX cashback</b> (Nets > 1.0% after 1.5% fee).</li><li><b>Import Duty Cap</b>: Single purchases > $2,000 NTD or > 6 orders per half-year incur import tariffs!</li></ol><div class=\"data-source-badge\">📌 Source: ROC Customs Administration Import Duty Rules</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "均值回歸", "en": "Mean Reversion" },
    "title": { "zh": "避免追高殺低：外匯市場無升不貶、無貶不升的常態輪動", "en": "Avoiding Panic Buying: Mean Reversion in FX Markets" },
    "content": {
      "zh": "<h3>🔄 匯率是循環的擺鐘：切勿在美元暴漲時盲目追高！</h3><p>外匯市場具備強烈的<b>「均值回歸 (Mean Reversion)」特質</b>。新台幣過去 20 年在 <b>27.5 至 35.0</b> 的區間內常態震盪：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 盲目追高風險</h4><p>當 USD/TWD 飆到 33.5、全網新聞熱捧時追高買美元，常買在相對高點，面臨隨後台幣強彈的匯損。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 理性區間思維</h4><p>在台幣強勢（USD/TWD < 30.0）時分批儲備美元；在台幣弱勢（> 33.0）時分批減碼獲利結算。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中央銀行 20 年新台幣匯率歷史走勢統計</div>",
      "en": "<h3>🔄 Exchange Rates Are Pendulums: Never Chase USD at Peak Highs!</h3><p>FX markets exhibit strong <b>Mean Reversion</b>. TWD has oscillated between <b>27.5 and 35.0</b> over the past 20 years:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Panic Chasing Risk</h4><p>Buying USD when USD/TWD hits 33.5 and headlines rage often locks in top-trough FX losses.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Range Trading Mindset</h4><p>Accumulate USD when TWD is strong (< 30.0); trim USD when TWD is weak (> 33.0).</p></div></div><div class=\"data-source-badge\">📌 Source: Central Bank 20-Year TWD Historical Rate Data</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "外匯 4 大金律", "en": "4 Golden Rules" },
    "title": { "zh": "大一新鮮人個人外匯理性使用 4 大金律", "en": "4 Golden Rules of Personal Forex for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的外匯觀念與換匯思維</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. 即期分批換匯</h4><p>在 App 上用即期匯率分 3-4 批買進外幣，平滑波動與點差。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. 拒絕 DDC 雙幣結算</h4><p>海外消費一律選擇「當地貨幣」，絕不接受 5% DDC 加成。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. 警惕美幣高利匯損</h4><p>看清匯率風險，不為 5% 美金定存利息而承擔 8% 匯率貶值損害。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. 堅守均值回歸不追高</h4><p>在台幣強勢時分批儲備，不在市場發瘋暴漲時盲目追高。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與中央銀行外匯消費者保護原則</div>",
      "en": "<h3>🛡️ Lifetime Personal Forex Wisdom for Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. Tranche Spot Purchases</h4><p>Buy FX online via Spot Rates in 3-4 tranches to smooth volatility.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. Reject DDC Conversions</h4><p>Always bill in local foreign currency overseas; reject 5% DDC markups.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. Mind High-Yield FX Losses</h4><p>Evaluate FX risk before chasing 5% USD yield to avoid 8% currency losses.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. Stick to Mean Reversion</h4><p>Accumulate foreign currency when TWD is strong; never chase peak spikes.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & CBC FX Consumer Protection Standards</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第七週全景知識體系圖與觀念整合", "en": "Week 7 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第七週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>外匯基礎 (Hour 1)</b>：兩種貨幣相對價格 ➔ 即期 vs 現金匯率點差 ➔ 銀行買賣視角 ➔ 線上結匯與雙幣卡 ➔ 美元指數 DXY。</p><p><b>匯率理論 (Hour 2)</b>：PPP 大麥克指數高低估 ➔ IRP 美台利差資金搬家 ➔ 貿易流 vs 資本流 ➔ 台幣升貶值雙刃劍 ➔ 5,700 億外匯存底 ➔ 柳樹理論 ➔ 遠期外匯避險。</p><p><b>實證與實戰 (Hour 3)</b>：換匯 4 金律 ➔ 美金定存匯損風險 ➔ 台幣 27.5 貶至 32.5 留學iPhone對決 ➔ 10% 美元配置 ➔ 網購 DDC 避坑 ➔ 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 7 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Forex Basics (Hour 1)</b>: Relative Currency Price ➔ Spot vs Cash Spread ➔ Bank View Buy/Sell ➔ Airport Pick-up & Dual Cards ➔ DXY Index.</p><p><b>Forex Theories (Hour 2)</b>: Big Mac PPP ➔ US-TW Rate Gap (IRP) ➔ Trade vs Capital Flows ➔ TWD Win-Loss ➔ $570B FX Reserves ➔ Willow Policy ➔ Forward Hedging.</p><p><b>Empirical Battle (Hour 3)</b>: 4 FX Rules ➔ USD Yield FX Loss Risk ➔ TWD 27.5 to 32.5 Battle ➔ 10% USD Allocation ➔ DDC E-Commerce ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第八週預告 (期中學習成果檢核與實戰複習)", "en": "Reflections & Week 8 Preview (Midterm Review & Assessment)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第七週「個人外匯、匯率變動與國際貿易」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交本週小組外幣換匯規劃與升貶值分析報告。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第八週課程預告：期中學習成果檢核與實戰個案總複習</h4><p>下週我們將迎來期中週！將針對前七週（財經素養、通膨、利率、股市估值、ETF、數位金融、外匯）進行<b>綜合實戰個案總複習與期中會考挑戰！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 7!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your foreign currency exchange analysis report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 8 Preview: Midterm Review & Case Assessment</h4><p>Next week is Midterm Week! We will conduct a comprehensive case review and midterm assessment covering Weeks 1-7!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Spot vs. Cash FX Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateFXSpread() {
  const amountTwd = parseFloat(document.getElementById('amountTwdInput').value) || 30000;
  const spotSell = parseFloat(document.getElementById('spotSellInput').value) || 0.2150;
  const cashSell = parseFloat(document.getElementById('cashSellInput').value) || 0.2200;

  const spotYen = amountTwd / spotSell;
  const cashYen = amountTwd / cashSell;
  const diffYen = spotYen - cashYen;
  const diffTwd = diffYen * spotSell;

  const resultDiv = document.getElementById('fxSpreadResult');
  resultDiv.innerHTML = `
    📊 <b>即期 vs. 現金換匯試算分析 (以 ${amountTwd.toLocaleString()} 元台幣換日圓)</b>：<br>
    • <b>App 即期優惠價 (匯率 ${spotSell})</b>：可換得 <b>${Math.round(spotYen).toLocaleString()} 日圓</b><br>
    • <b>臨櫃現鈔價 (匯率 ${cashSell})</b>：可換得 <b>${Math.round(cashYen).toLocaleString()} 日圓</b><br>
    • 即期換匯多賺：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">+${Math.round(diffYen).toLocaleString()} 日圓</span>（相當於省下 <b>${Math.round(diffTwd).toLocaleString()} 元新台幣！</b>）<br>
    💡 <i>線上結匯機場提領或先存即期再提領，能幫你多省下好幾碗拉麵錢！</i>
  `;
}

// HOUR 2 MODAL: Big Mac Index PPP Valuation Checker
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateBigMacPPP() {
  const twdPrice = parseFloat(document.getElementById('twdPriceInput').value) || 75;
  const usdPrice = parseFloat(document.getElementById('usdPriceInput').value) || 5.60;
  const marketRate = parseFloat(document.getElementById('marketRateInput').value) || 32.5;

  const impliedPPP = twdPrice / usdPrice;
  const valuationDiff = ((marketRate - impliedPPP) / impliedPPP) * 100;

  const resultDiv = document.getElementById('pppResult');
  let statusText = "";
  if (marketRate > impliedPPP) {
    statusText = `<span style="color:var(--accent-rose);">📉 新台幣被市場低估約 ${valuationDiff.toFixed(1)}%！</span> 依實體購買力，1 美元合理價值約為 ${impliedPPP.toFixed(2)} 元新台幣。`;
  } else {
    statusText = `<span style="color:var(--accent-emerald);">📈 新台幣被市場高估！</span>`;
  }

  resultDiv.innerHTML = `
    🔍 <b>大麥克指數 PPP 檢測結果</b>：<br>
    • 台灣大麥克：${twdPrice} 元 TWD | 美國大麥克：${usdPrice} 美元 USD<br>
    • 購買力平價 (PPP) 隱含匯率：<b>1 美元 = ${impliedPPP.toFixed(2)} 元台幣</b><br>
    • 當前市場真實匯率：<b>1 美元 = ${marketRate} 元台幣</b><br>
    💡 <b>結論</b>：${statusText}
  `;
}

// HOUR 3 GAME: Forex Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：即期匯率 vs 現金匯率",
    question: "為什麼在手機 App 上用「即期匯率」換外幣，通常比去銀行臨櫃拿「現金現鈔」換更省錢？",
    options: [
      { text: "即期匯率是假的數字", correct: false },
      { text: "即期匯率為電子帳戶交割，銀行不需負擔實體現鈔運輸、保險與保管成本", correct: true },
      { text: "臨櫃換鈔銀行不收手續費", correct: false },
      { text: "兩者匯率完全一模一樣", correct: false }
    ],
    explain: "現金匯率包含銀行現鈔運送、防偽、保險與資金積壓成本，因此點差較貴；即期匯率為電子交割，匯率最優惠！"
  },
  {
    level: 2,
    title: "關卡 2：銀行賣出價 vs 買入價視角",
    question: "當你拿著新台幣去銀行要換成美金現鈔時，你應該看銀行牌告看板上的哪一個價格？",
    options: [
      { text: "現金買入價 (Bank Buy)", correct: false },
      { text: "現金賣出價 (Bank Sell)", correct: true },
      { text: "即期買入價", correct: false },
      { text: "美金指數", correct: false }
    ],
    explain: "永遠從銀行的角度看！是你向銀行買美金（等於銀行把美金賣給你），所以看「銀行賣出價」！"
  },
  {
    level: 3,
    title: "關卡 3：新台幣貶值的經濟影響",
    question: "當新台幣兌美元大幅貶值（例如從 30 貶至 33）時，下列哪一個現象是正確的？",
    options: [
      { text: "出國留學與購買進口 iPhone 變得更便宜", correct: false },
      { text: "台積電等出口廠商美金營收換回台幣變多，毛利率獲得提升；但進口原油物價上漲", correct: true },
      { text: "對進口商與出口商完全沒有任何影響", correct: false },
      { text: "台灣外匯存底瞬間清零", correct: false }
    ],
    explain: "台幣貶值有利於出口商（美金營收換回更多台幣），但會引發輸入型通膨，增加進口商品與留學成本！"
  },
  {
    level: 4,
    title: "關卡 4：海外結算 DDC 避坑",
    question: "在國外網站 (Amazon/Steam) 或國外店家刷卡時，結算畫面詢問要用「新台幣 (TWD)」還是「當地貨幣 (USD/JPY)」，你該如何選擇？",
    options: [
      { text: "選擇新台幣 (TWD) 結算比較安心", correct: false },
      { text: "堅決選擇「當地貨幣 (USD/JPY)」！選擇台幣結算會被扣高達 5% 的 DDC 惡劣手續費", correct: true },
      { text: "隨便選都可以，價格完全相同", correct: false },
      { text: "直接關掉網頁不買", correct: false }
    ],
    explain: "選擇 TWD 結算屬於動態貨幣轉換 (DDC)，店家與中間銀行會收取高達 4%~5% 的極惡劣匯率轉換費！永遠選當地貨幣！"
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
    let badgeText = userScore === 400 ? "🏆 外匯交易達人徽章 (Forex Master)" : "🥉 外匯初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第七週「個人外匯、匯率變動與國際貿易」核心觀念！</p>
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
function submitW7Homework(e) {
  e.preventDefault();
  alert("🎉 第七週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
