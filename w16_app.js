/**
 * 115 學年度「管理探索二」第十六週：加密貨幣、區塊鏈基礎、Web3 與數位資產風險
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w16_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第十六週課程導論：加密貨幣、區塊鏈基礎、Web3 與數位資產風險", "en": "Week 16 Intro: Cryptocurrency, Blockchain, Web3 & Digital Risks" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>⚡ 探索數位新金融：從區塊鏈去中心化到 Web3 資安防禦</h2><p>「中本聰名言：密碼學貨幣的核心優勢，在於它不需要信任第三方仲介！(Trustless Financial Infrastructure)\"</p></div><p>歡迎來到第十六週！我們進入最前端的數位資產領域——「加密貨幣與 Web3 區塊鏈」。本單元將帶領大家拆解區塊鏈去中心化帳本、比特幣 (BTC) 減半機制與 2,100 萬枚上限、以太坊 (ETH) 智慧合約、冷熱錢包私鑰保管、FTX 倒閉教訓、台灣 VASP 監管與 P2P 幣圈防詐 SOP。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：區塊鏈與比特幣減半</h4><p>去中心化帳本、BTC 4 年減半、以太坊 DApp 與 Web3 所有權。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：私鑰資安與 5% 配置</h4><p>冷錢包「Not Your Keys, Not Your Coins」、FTX 歷史教訓與 5% 資產控管。</p></div></div><div class=\"data-source-badge\">📌 資料來源：CoinMarketCap / 金管會 VASP 洗錢防制聲明名單 / 美國 SEC</div>",
      "en": "<div class=\"hero-box\"><h2>⚡ Exploring Digital Finance: Blockchain, Web3 & Security</h2><p>\"Satoshi Nakamoto: A purely peer-to-peer version of electronic cash allows payments without trusted 3rd parties.\"</p></div><p>Welcome to Week 16! We explore Digital Assets & Web3: Blockchain ledgers, Bitcoin (BTC) halving & 21M cap, Ethereum (ETH) Smart Contracts, Cold Wallets, FTX collapse lessons, Taiwan VASP regulations, and P2P scam prevention.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Blockchain & Bitcoin Halving</h4><p>Decentralized ledgers, 4-yr BTC Halving, Ethereum DApps, and Web3 asset ownership.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Private Key Security & 5% Cap</h4><p>Cold wallets \"Not Your Keys, Not Your Coins\", FTX lessons, and 5% asset limit.</p></div></div><div class=\"data-source-badge\">📌 Source: CoinMarketCap / Taiwan FSC VASP AML List / US SEC</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第十六週 3 小時學習地圖與核心技能樹", "en": "Week 16 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>區塊鏈、比特幣減半與 Web3</b> (Slide 01 - 10)<br>區塊鏈定義、比特幣2100萬枚上限、BTC減半經濟學、以太坊智慧合約、Web3演進、冷熱錢包私鑰保管</td><td>🎯 <b>1小時活動</b>：比特幣減半產量與冷熱錢包資安評估計算器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>DeFi、穩定幣與 VASP 監管</b> (Slide 11 - 20)<br>DeFi去中心化金融、NFT數位資產、USDT/USDC穩定幣、FTX倒閉危機、台灣VASP監管與比特幣現貨ETF</td><td>🎯 <b>2小時活動</b>：DeFi 年化收益風險與數位資產配置試算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>防詐 SOP、數位資產配置與 4 大金律</b> (Slide 21 - 30)<br>Telegram幣圈防詐、Web3三大素養、RWA資產代幣化、合法交易所KYC出入金、CoinGecko查閱與4大金律</td><td>🎮 <b>3小時小遊戲</b>：Web3 數位資產防詐大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人數位資產風險評估與 Web3 報告</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 16 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Blockchain, Bitcoin Halving & Web3</b> (Slide 01 - 10)<br>Blockchain, BTC 21M Cap, Halving Economics, Ethereum Smart Contracts, Web3 & Cold Wallets</td><td>🎯 <b>Hour 1 Activity</b>: BTC Halving & Wallet Security Calculator</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>DeFi, Stablecoins & VASP Regulations</b> (Slide 11 - 20)<br>DeFi Yields, NFTs, USDT/USDC Stablecoins, FTX Collapse, Taiwan VASP Regulations & Spot ETFs</td><td>🎯 <b>Hour 2 Activity</b>: DeFi Risk & Asset Allocation Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Anti-Scam SOP, 5% Allocation & 4 Rules</b> (Slide 21 - 30)<br>Telegram Crypto Anti-Scam, 3 Web3 Competencies, RWA Tokenization, Legal KYC SOP & 4 Golden Rules</td><td>🎮 <b>Hour 3 Game</b>: Web3 Master Challenge<br>📝 <b>Class Assignment</b>: Personal Crypto Risk & Web3 Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "區塊鏈原理", "en": "Blockchain Principles" },
    "title": { "zh": "什麼是區塊鏈 (Blockchain)？去中心化分散式帳本技術", "en": "What is Blockchain? Decentralized Ledger Technology" },
    "content": {
      "zh": "<h3>🔗 不可篡改、透明公開的去中心化數位帳本</h3><p><b>區塊鏈 (Blockchain)</b> 是一種將交易數據包裝成「區塊 (Block)」，並透過密碼學哈希 (Hash) 串聯成「鏈 (Chain)」的分散式帳本技術：</p><ul><li><b>去中心化 (Decentralized)</b>：無須依賴中央銀行或中介機構，全球數萬個節點共同記帳驗證。</li><li><b>不可篡改 (Immutability)</b>：歷史交易紀錄一旦寫入區塊鏈，無法被任何單一集體修改刪除。</li></ul><div class=\"data-source-badge\">📌 資料來源：MIT Center for Future Blockchain Research</div>",
      "en": "<h3>🔗 Immutable, Transparent Decentralized Digital Ledgers</h3><p><b>Blockchain</b> packages transaction data into \"Blocks\" linked cryptographically into a \"Chain\":</p><ul><li><b>Decentralized</b>: Operates across thousands of global nodes without central banks or intermediaries.</li><li><b>Immutable</b>: Historical records once written cannot be altered or deleted by any single party.</li></ul><div class=\"data-source-badge\">📌 Source: MIT Center for Future Blockchain Research</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "比特幣誕生", "en": "Bitcoin Birth" },
    "title": { "zh": "比特幣 (Bitcoin BTC) 的誕生：2,100 萬枚總量上限抗通膨", "en": "Birth of Bitcoin (BTC): 21 Million Supply Cap Hardcoded" },
    "content": {
      "zh": "<h3>🪙 數位黃金！對抗中央銀行印鈔通膨的貨幣實驗</h3><p>2008 年金融海嘯期間，化名中本聰 (Satoshi Nakamoto) 發布創世白皮書《點對點電子現金系統》：</p><div class=\"formula-box\">$$\\text{比特幣全球發行總量上限} = 21,000,000 \\text{ 枚 (永遠無法增發！)}$$</div><p><b>稀缺性 (Scarcity)</b>：硬性編碼總量上限，使其具備類似黃金的抗通膨特質，被譽為「數位黃金」。</p><div class=\"data-source-badge\">📌 資料來源：Bitcoin Whitepaper (bitcoin.org)</div>",
      "en": "<h3>🪙 Digital Gold: Inflation Hedge Experiment Born in 2008</h3><p>In 2008, Satoshi Nakamoto released the seminal Bitcoin Whitepaper:</p><div class=\"formula-box\">$$\\text{Max Bitcoin Supply Cap} = 21,000,000 \\text{ BTC (Hardcoded Cap)}$$</div><p><b>Scarcity</b>: Fixed 21M supply cap grants BTC inflation-hedging properties, earned as \"Digital Gold\".</p><div class=\"data-source-badge\">📌 Source: Bitcoin Whitepaper (bitcoin.org)</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "比特幣減半", "en": "BTC Halving" },
    "title": { "zh": "比特幣減半機制 (BTC Halving) 與發行產量減半經濟學", "en": "Bitcoin Halving Mechanism: Supply Shock Economics" },
    "content": {
      "zh": "<h3>📉 每 21 萬個區塊 (約 4 年) 獎勵減半一次的供給衝擊</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>減半歷史軌跡 📜</h4><p>2009年 50 BTC ➔ 2012年 25 BTC ➔ 2016年 12.5 BTC ➔ 2020年 6.25 BTC ➔ <b>2024年 3.125 BTC！</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>供給衝擊經濟學 (Supply Shock)</h4><p>新幣產出速度減半，若市場需求保持不變或增加，將對價格形成長期的供給卡位升力。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Blockchain.com 比特幣網絡歷史數據</div>",
      "en": "<h3>📉 Every 210,000 Blocks (~4 Years) Block Rewards Cut 50%</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>Halving Timeline 📜</h4><p>2009 (50 BTC) ➔ 2012 (25 BTC) ➔ 2016 (12.5 BTC) ➔ 2020 (6.25 BTC) ➔ <b>2024 (3.125 BTC)!</b></p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>Supply Shock Economics</h4><p>New supply halving pushes upward price pressure when demand stays constant or grows.</p></div></div><div class=\"data-source-badge\">📌 Source: Blockchain.com Bitcoin Network Historical Data</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "以太坊智慧合約", "en": "Ethereum & DApps" },
    "title": { "zh": "以太坊 (Ethereum ETH) 與智慧合約：DApp 去中心化應用", "en": "Ethereum (ETH) & Smart Contracts: DApp Revolution" },
    "content": {
      "zh": "<h3>💻 不僅是貨幣，更是全球去中心化世界電腦！</h3><ul><li><b>智慧合約 (Smart Contracts)</b>：Vitalik Buterin 創立以太坊，引入可程式化的自動執行合約 code，滿足條件即自動劃撥資產（如自動理算理賠）。</li><li><b>去中心化應用 (DApp)</b>：支撐起去中心化金融 (DeFi)、NFT 與 Web3 遊戲龐大生態系。</li></ul><div class=\"data-source-badge\">📌 資料來源：Ethereum Foundation (ethereum.org)</div>",
      "en": "<h3>💻 More Than Currency: The World's Decentralized Computer</h3><ul><li><b>Smart Contracts</b>: Vitalik Buterin created Ethereum, executing self-enforcing code automatically when conditions are met.</li><li><b>Decentralized Apps (DApps)</b>: Powers Decentralized Finance (DeFi), NFTs & Web3 gaming ecosystems.</li></ul><div class=\"data-source-badge\">📌 Source: Ethereum Foundation (ethereum.org)</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "Web1-Web3演進", "en": "Web1 to Web3" },
    "title": { "zh": "Web1 -> Web2 -> Web3 演進：個人數位資產所有權革命", "en": "Web1 to Web3 Evolution: Personal Digital Asset Ownership" },
    "content": {
      "zh": "<h3>🌐 網路文明演進的第三大階段：從唯讀、互動到擁有</h3><table class=\"data-table\"><thead><tr><th>網絡世代</th><th>核心互動特徵</th><th>代表平台與資產歸屬</th></tr></thead><tbody><tr><td><b>Web1 (1990s)</b></td><td><b>唯讀 (Read-only)</b>：靜態網頁與新聞。</td><td>Yahoo, 靜態 HTML (數據歸網站)。</td></tr><tr><td><b>Web2 (2000s)</b></td><td><b>讀寫互動 (Read-Write)</b>：社群平台。</td><td>Facebook, IG, YouTube (數據歸巨頭)。</td></tr><tr><td><b>Web3 (現今)</b></td><td><b>讀寫與擁有 (Read-Write-Own)</b>。</td><td>比特幣, 以太坊 (<b>個人擁有私鑰主權！</b>)</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：a16z Crypto《Web3 產業發展報告》</div>",
      "en": "<h3>🌐 3rd Stage of Internet Evolution: Read, Write & Own</h3><table class=\"data-table\"><thead><tr><th>Era</th><th>Interaction Feature</th><th>Platforms & Asset Ownership</th></tr></thead><tbody><tr><td><b>Web1 (1990s)</b></td><td><b>Read-Only</b>: Static web pages & news.</td><td>Yahoo, Static HTML (Data owned by sites).</td></tr><tr><td><b>Web2 (2000s)</b></td><td><b>Read-Write</b>: Social networks.</td><td>Facebook, IG, YouTube (Data owned by Big Tech).</td></tr><tr><td><b>Web3 (Present)</b></td><td><b>Read-Write-Own</b>.</td><td>Bitcoin, Ethereum (<b>User owns private keys!</b>)</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: a16z Crypto State of Web3 Report</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "CoinMarketCap數據", "en": "CoinMarketCap Data" },
    "title": { "zh": "實證數據：CoinMarketCap 與金管會 VASP 登記專區", "en": "Empirical Data: CoinMarketCap & Taiwan FSC VASP Portal" },
    "content": {
      "zh": "<h3>📊 全球加密貨幣市值與台灣合法監管業者名單查閱</h3><ul><li><b>全球加密貨幣總市值</b>：突破 <b>2.5 兆美元 (約 80 兆台幣)</b>，比特幣市占率 (BTC Dominance) 約 55%。</li><li><b>金管會 VASP 洗錢防制專區</b>：台灣完成洗錢防制法令遵循聲明之合法虛擬資產平台（如 MAX、ACE、遠東 Bankee）。</li></ul><div class=\"data-source-badge\">📌 資料來源：CoinMarketCap / 衛生福利部 / 金管會證期局 VASP 專區</div>",
      "en": "<h3>📊 Global Crypto Market Cap & Taiwan FSC VASP List</h3><ul><li><b>Global Crypto Market Cap</b>: Surpasses <b>$2.5 Trillion USD (~$80T NTD)</b>, with BTC dominance ~55%.</li><li><b>FSC Taiwan VASP Portal</b>: Compliant exchanges registered under AML laws (e.g. MAX, ACE).</li></ul><div class=\"data-source-badge\">📌 Source: CoinMarketCap / Taiwan FSC Securities and Futures Bureau</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "冷熱錢包資安", "en": "Cold vs Hot Wallet" },
    "title": { "zh": "冷錢包 (Cold Wallet) vs. 熱錢包 (Hot Wallet)：私鑰鐵律", "en": "Cold Wallet vs. Hot Wallet: Private Key Iron Rule" },
    "content": {
      "zh": "<h3>🔑 「Not Your Keys, Not Your Coins!」私鑰即資產</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. 熱錢包 (Hot Wallet - 聯網)</h4><p>手機 App 或網頁外掛 (Metamask, TrustWallet)。方便交易，但易遭木馬駭客攻擊。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 冷錢包 (Cold Wallet - 離線) 🌟</h4><p>硬體 USB 設備 (Ledger, Trezor)。私鑰完全離線儲存，資安等級最高，防駭客遠端竊取！</p></div></div><div class=\"data-source-badge\">📌 資料來源：國家資通安全研究院 (NICS) 區塊鏈資安指引</div>",
      "en": "<h3>🔑 \"Not Your Keys, Not Your Coins!\" Private Key Rule</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>1. Hot Wallet (Connected)</h4><p>Mobile Apps or browser extensions (Metamask). Easy to trade, but exposed to malware.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Cold Wallet (Offline) 🌟</h4><p>Hardware USB devices (Ledger, Trezor). Private keys offline; highest anti-hack security!</p></div></div><div class=\"data-source-badge\">📌 Source: National Institute of Cyber Security (NICS) Web3 Guidelines</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>區塊鏈特徵</b>：去中心化、不可篡改、公開透明。</li><li><b>比特幣稀缺性</b>：總量上限 2,100 萬枚，每 4 年產量減半一次。</li><li><b>資安鐵律</b>：Not Your Keys, Not Your Coins！冷錢包離線保管私鑰。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 比特幣資安計算器」</b> 按鈕，輸入比特幣持有量與錢包類型，精算減半產量與資安評估！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Blockchain Traits</b>: Decentralized, immutable, and transparent.</li><li><b>Bitcoin Scarcity</b>: 21 Million fixed cap, halving every 4 years.</li><li><b>Security Rule</b>: Not Your Keys, Not Your Coins! Use Cold Wallets.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to calculate BTC Halving & Wallet Security!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "DeFi 去中心化金融", "en": "DeFi Principles" },
    "title": { "zh": "去中心化金融 (DeFi) 運作原理：流動性挖礦與 AMM 協議", "en": "DeFi Mechanics: Liquidity Mining & Automated Market Makers" },
    "content": {
      "zh": "<h3>🏦 拿掉銀行的去中心化借貸與交易協議</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 自動做市商 (AMM) 🤖</h4><p>如 Uniswap，透過數學公式 $x \\cdot y = k$ 替代傳統券商搓合，實現無中介幣幣交易。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 流動性挖礦 (Yield Farming)</h4><p>將加密貨幣注入資金池提供流動性，賺取交易手續費分潤與治理代幣獎勵。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Uniswap Whitepaper & DeFi Pulse 數據</div>",
      "en": "<h3>🏦 Bankless Lending & Trading Protocols</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Automated Market Maker (AMM) 🤖</h4><p>Uniswap replaces order books with $x \\cdot y = k$ math formulas for instant crypto swaps.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Yield Farming</h4><p>Depositing crypto into liquidity pools to earn trading fee cuts & governance tokens.</p></div></div><div class=\"data-source-badge\">📌 Source: Uniswap Whitepaper & DeFi Pulse Reports</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "NFT 與數位資產", "en": "NFTs & Digital Art" },
    "title": { "zh": "非同質化代幣 (NFT) 與數位藝術：智慧財產權與 Web3 憑證", "en": "Non-Fungible Tokens (NFTs): Digital Asset Certificates" },
    "content": {
      "zh": "<h3>🎨 賦予數位檔案獨一無二的智慧財產權所有權憑證</h3><ul><li><b>NFT (Non-Fungible Token) 定義</b>：具備獨一無二、不可替代特性的區塊鏈代幣。可用於數位藝術品、演唱會門票、遊戲虛寶與品牌會員憑證。</li><li><b>智慧財產權授權</b>：買方擁有區塊鏈上寫死的數位所有權證明與轉售分潤智慧合約。</li></ul><div class=\"data-source-badge\">📌 資料來源：OpenSea 數位資產交易白皮書</div>",
      "en": "<h3>🎨 Providing Unique Ownership Proof for Digital Files</h3><ul><li><b>NFT Definition</b>: Unique, non-interchangeable tokens on a blockchain representing digital art, tickets, in-game items, or membership passes.</li><li><b>IP Royalty Contracts</b>: Buyers get immutable blockchain ownership proofs with smart contract royalties.</li></ul><div class=\"data-source-badge\">📌 Source: OpenSea Digital Asset Whitepaper</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "穩定幣經濟學", "en": "Stablecoins" },
    "title": { "zh": "穩定幣 (Stablecoins) 經濟學：USDT/USDC 錨定與演算法暴雷", "en": "Stablecoin Economics: USDT/USDC 1:1 Pegs & Algo Risks" },
    "content": {
      "zh": "<h3>💵 連結傳統法幣與加密世界的避風港橋樑</h3><table class=\"data-table\"><thead><tr><th>穩定幣類型</th><th>錨定機制與儲備資產</th><th>代表幣別與風險評估</th></tr></thead><tbody><tr><td><b>1. 法幣儲備型 (Fiat-backed)</b></td><td>1:1 存入真實美元現金與短天期美債。</td><td><b>USDT (Tether), USDC (Circle)</b> (相對穩健)。</td></tr><tr><td><b>2. 演算法型 (Algorithmic)</b></td><td>依靠套利雙代幣數學演算法維持價格。</td><td><b>UST (Luna 體系 - 2022 年歸零暴雷！)</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：BIS 國際清算銀行穩定幣報告</div>",
      "en": "<h3>💵 Bridging Fiat Currencies to the Crypto Universe</h3><table class=\"data-table\"><thead><tr><th>Type</th><th>Pegging & Reserve Mechanism</th><th>Tokens & Risk Profile</th></tr></thead><tbody><tr><td><b>1. Fiat-Backed</b></td><td>1:1 backed by real USD cash and US T-bills.</td><td><b>USDT, USDC</b> (Relatively robust).</td></tr><tr><td><b>2. Algorithmic</b></td><td>Relies on dual-token math arbitrage algorithms.</td><td><b>UST (Terra/Luna - Collapsed to ZERO in 2022!)</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: BIS International Settlements Stablecoin Report</div>"
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": { "zh": "FTX 倒閉教訓", "en": "FTX Collapse Lessons" },
    "title": { "zh": "重大歷史教訓：FTX 交易所倒閉事件 (2022) 剖析與資產隔離", "en": "Historical Lesson: FTX Exchange Collapse (2022) & Asset Segregation" },
    "content": {
      "zh": "<h3>💥 全球第二大加密交易所 72 小時破產倒閉的血淚教訓</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ FTX 倒閉主因</h4><p>創辦人 SBF 違法挪用數十億美元客戶存款至旗下對沖基金 (Alameda) 炒股與高槓桿爆倉，導致流動性枯竭倒閉！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 給投資人的核心教訓</h4><p>絕對不要把 100% 資產放在中心化交易所，務必將長期資產提領至個人冷錢包！</p></div></div><div class=\"data-source-badge\">📌 資料來源：美國德拉瓦州破產法院 FTX 案件訴訟卷宗</div>",
      "en": "<h3>💥 2nd Largest Exchange Bankrupt in 72 Hours: Hard Lessons</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ FTX Collapse Root Cause</h4><p>SBF illegally siphoned billions in user deposits to Alameda hedge fund for leverage bets, causing a bank run!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Key Investor Takeaway</h4><p>Never store 100% of assets on centralized exchanges; transfer long-term crypto to cold wallets!</p></div></div><div class=\"data-source-badge\">📌 Source: US Bankruptcy Court Delaware FTX Court Filings</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "台灣 VASP 監管", "en": "Taiwan VASP Framework" },
    "title": { "zh": "台灣 VASP 虛擬資產監管框架：洗錢防制 (AML) 與 KYC", "en": "Taiwan VASP Regulatory Framework: AML & KYC Rules" },
    "content": {
      "zh": "<h3>🏛️ 金管會出手納管！台灣業者四大監管鐵律</h3><ul><li><b>洗錢防制 (AML) 聲明</b>：業者必須向金管會完成洗錢防制法遵聲明。</li><li><b>實名認證 (KYC)</b>：用戶開戶必須上傳雙證件進行嚴格身分驗證。</li><li><b>客戶資產隔離信託</b>：客戶新台幣資產必須交由台灣本土銀行（如遠東、凱基）進行信託保管，嚴防挪用！</li></ul><div class=\"data-source-badge\">📌 資料來源：金管會《虛擬資產平台及交易業務事業 (VASP) 指導原則》</div>",
      "en": "<h3>🏛️ FSC Oversight: 4 Iron Regulatory Rules in Taiwan</h3><ul><li><b>AML Statement</b>: Exchanges must register anti-money laundering statements with FSC.</li><li><b>KYC Verification</b>: Strict identity checks requiring dual ID uploads.</li><li><b>Bank Trust Asset Segregation</b>: NTD funds held in segregated bank trusts (e.g. Far Eastern Bank).</li></ul><div class=\"data-source-badge\">📌 Source: Taiwan FSC VASP Regulatory Guidelines</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "加密貨幣風險解析", "en": "Crypto Risks" },
    "title": { "zh": "加密貨幣投資風險解析：波動性、Rug Pull 與私鑰遺失", "en": "Deconstructing Crypto Risks: Volatility, Rug Pulls & Keys" },
    "content": {
      "zh": "<h3>⚠️ 高報酬伴隨極致高風險！幣圈 4 大致命風險</h3><ul><li><b>價格劇烈波動 (Volatility)</b>：單日暴漲暴跌 30% 是常態。</li><li><b>Rug Pull (拉地毯詐騙)</b>：匿名團隊發行新項目，募集上百萬美元後瞬間抽乾資金池逃跑！</li><li><b>黑客合約漏洞 (Exploit)</b>：智慧合約漏洞遭攻擊，資產瞬間遭清空。</li><li><b>私鑰或助記詞遺失</b>：忘記助記詞或硬碟損壞，資產永遠無法找回。</li></ul><div class=\"data-source-badge\">📌 資料來源：Chainalysis 全球加密貨幣犯罪報告</div>",
      "en": "<h3>⚠️ High Returns Paired with Extreme Risks: 4 Crypto Hazards</h3><ul><li><b>Extreme Volatility</b>: Daily 30% price swings are common.</li><li><b>Rug Pulls</b>: Anonymous dev teams pump new tokens, drain liquidity pools, and vanish overnight!</li><li><b>Smart Contract Exploits</b>: Code vulnerabilities targeted by hackers clearing liquidity pools.</li><li><b>Lost Private Keys</b>: Losing seed phrases locks funds permanently with ZERO recovery options.</li></ul><div class=\"data-source-badge\">📌 Source: Chainalysis Global Crypto Crime Report</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "合理配置數位資產", "en": "5% Asset Allocation" },
    "title": { "zh": "合理配置數位資產：小資族上限 (5%-10%) 避險戰術", "en": "Rational Crypto Allocation: 5%-10% Portfolio Cap Strategy" },
    "content": {
      "zh": "<h3>🛡️ 嚴格控制風險曝險！小資大一新鮮人避險比例</h3><div class=\"formula-box\">$$\\text{加密貨幣占個人總投資資產比率} \\le 5\\% \\sim 10\\% \\text{ (絕對不要槓桿借錢！)}$$</div><p><b>戰術守則</b>：將 90% 資金安穩配置於 0050/00878 等傳統優質 ETF；僅用 5% 閒錢參與加密貨幣，即使歸零也不影響正常生活，卻能享受潛在爆發力！</p><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 數位資產風險控管模型</div>",
      "en": "<h3>🛡️ Strict Exposure Control for Freshman Investors</h3><div class=\"formula-box\">$$\\text{Crypto Share of Total Portfolio} \\le 5\\% - 10\\% \\text{ (NEVER Use Leverage!)}$$</div><p><b>Tactical Rule</b>: Allocate 90%+ to traditional ETFs (0050); use 5% spare cash for crypto. If it goes to zero, lifestyle is unaffected, yet offers upside!</p><div class=\"data-source-badge\">📌 Source: CFP Digital Asset Risk Control Model</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "現貨 ETF 里程碑", "en": "Spot ETF Milestones" },
    "title": { "zh": "全球現貨 ETF 批准里程碑：美國 SEC 批准 BTC/ETH 現貨 ETF", "en": "Global Spot ETF Milestones: US SEC Approves BTC/ETH ETFs" },
    "content": {
      "zh": "<h3>🏛️ 進入傳統主流金融體系！加密貨幣歷史性突破</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>BTC 現貨 ETF 批准 (2024 年 1 月) 🚀</h4><p>貝萊德 (BlackRock)、富達等巨頭推出的 BTC 現貨 ETF 獲美國 SEC 批准上市，引進數百億美元機構資金！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>ETH 現貨 ETF 批准</h4><p>以太坊現貨 ETF 隨後獲批，標誌著加密貨幣合法登陸美股交易市場。</p></div></div><div class=\"data-source-badge\">📌 資料來源：美國證券交易委員會 (SEC) 批准公告</div>",
      "en": "<h3>🏛️ Crypto Enters Wall Street Mainstream Systems</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>BTC Spot ETF Approval (Jan 2024) 🚀</h4><p>BlackRock & Fidelity Spot BTC ETFs approved by SEC, injecting tens of billions in institutional capital!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>ETH Spot ETF Approval</h4><p>Spot Ethereum ETFs approved subsequently, marking legitimate US stock market listings.</p></div></div><div class=\"data-source-badge\">📌 Source: US Securities and Exchange Commission (SEC) Releases</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "CBDC 與數位新台幣", "en": "CBDC & Digital NTD" },
    "title": { "zh": "央行數位貨幣 (CBDC) 趨勢：數位新台幣與去中心化對決", "en": "Central Bank Digital Currencies (CBDC) vs. Crypto" },
    "content": {
      "zh": "<h3>🏛️ 國家級數位貨幣！中央銀行發行的法幣數位版</h3><ul><li><b>CBDC (Central Bank Digital Currency) 定義</b>：由國家中央銀行直接發行與背書的數位法定貨幣（如中央銀行實驗中的「數位新台幣 e-NTD」）。</li><li><b>核心差異</b>：CBDC 為<b>高度中心化監管</b>；比特幣/以太坊為<b>去中心化抗審查</b>。兩者平行發展。</li></ul><div class=\"data-source-badge\">📌 資料來源：中華民國中央銀行 CBDC 研究報告</div>",
      "en": "<h3>🏛️ Sovereign Digital Money Issued by Central Banks</h3><ul><li><b>CBDC Definition</b>: Digital fiat currency issued directly by a nation's Central Bank (e.g. Taiwan CBC's experimental e-NTD).</li><li><b>Core Difference</b>: CBDC is <b>highly centralized</b>; Bitcoin/Ethereum are <b>decentralized & censorship-resistant</b>.</li></ul><div class=\"data-source-badge\">📌 Source: Central Bank of the Republic of China (CBC) CBDC Reports</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>DeFi 與穩定幣</b>：Uniswap AMM 協議；USDT/USDC 1:1 儲備；防範演算法暴雷。</li><li><b>FTX 倒閉教訓</b>：切勿將 100% 資產放在交易所；認明台灣 VASP 銀行信託保管。</li><li><b>5% 避險配置</b>：傳統資產 95% + 數位資產 5%，嚴禁高槓桿借錢。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: DeFi風險與5%配置試算器」</b> 按鈕，輸入個人資產與加密貨幣比例，精算避險配置！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>DeFi & Stablecoins</b>: AMM protocol math; USDT/USDC reserves; avoiding algo collapses.</li><li><b>FTX Lessons</b>: Never hold 100% on exchanges; check Taiwan VASP FSC registration.</li><li><b>5% Cap Rule</b>: 95% traditional assets + 5% crypto max; NO leverage.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate 5% Risk Allocation!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "Telegram 幣圈防詐", "en": "Telegram Anti-Scam" },
    "title": { "zh": "大一新鮮人資安防禦：防範假交易所與 Telegram 幣圈詐騙", "en": "Crypto Security: Countering Fake Exchanges & Telegram Scams" },
    "content": {
      "zh": "<h3>🛡️ 幣圈詐騙手法層出不窮！大學生常陷 3 大陷阱</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 幣圈常見 3 大詐騙手法</h4><p>1. Telegram 私訊「美女客服教你搬磚套利」；2. 假冒 MAX 交易所釣魚網址；3. Line 群組「老師帶盤保證獲利 100%」。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 破解防詐 2 鐵律</h4><p>1. 絕對不點擊陌生私訊網址；2. 交易僅限金管會 VASP 洗錢防制聲明核准之正規交易所！</p></div></div><div class=\"data-source-badge\">📌 資料來源：內政部警政署 165 反詐騙專線幣圈防詐指引</div>",
      "en": "<h3>🛡️ Protecting College Students from 3 Crypto Traps</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 3 Common Crypto Scams</h4><p>1. Telegram DMs offering \"crypto arbitrage\"; 2. Phishing websites impersonating MAX; 3. Line groups promising \"100% guaranteed gains\".</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 2 Anti-Scam Rules</h4><p>1. Never click unknown DM links; 2. Trade exclusively on FSC registered VASP exchanges!</p></div></div><div class=\"data-source-badge\">📌 Source: NPA 165 Anti-Scam Hotline Crypto Guidelines</div>"
    }
  },
  {
    "id": 22,
    "img": "images/w16_crypto_risk.jpg",
    "hour": 3,
    "tag": { "zh": "Web3 3大素養", "en": "3 Web3 Competencies" },
    "title": { "zh": "大一新鮮人面對 Web3 時代 3 大素養：密碼、資安與風險", "en": "3 Web3 Competencies for Freshmen: Tech, Security & Risk" },
    "content": {
      "zh": "<h3>🛡️ 成為能自我管理數位資產主權的現代財經公民</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔐 1. 密碼學與私鑰保管素養</h4><p>理解非對稱加密與助記詞保管，落實「Not Your Keys, Not Your Coins」。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. 資安自治與網址查驗能力</h4><p>養成每筆交易檢查 Smart Contract 授權權限與 URL 域名防釣魚習慣。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>⚖️ 3. 風險控制與紀律執行力</h4><p>將數位資產嚴格限制在總資產 5% 以內，拒絕合約高倍槓桿賭博。</p></div></div><div class=\"data-source-badge\">📌 資料來源：Stanford Center for Blockchain Research 指南</div>",
      "en": "<h3>🛡️ Essential Skills for Managing Digital Asset Sovereignty</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔐 1. Cryptography & Seed Phrase Mastery</h4><p>Understanding asymmetric encryption, practicing \"Not Your Keys, Not Your Coins\".</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔍 2. Cyber Autonomy & URL Verification</h4><p>Checking smart contract permissions and domain URLs before signing transactions.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>⚖️ 3. Risk Control & Discipline</h4><p>Limiting crypto exposure strictly within 5% of total portfolio; avoiding high leverage.</p></div></div><div class=\"data-source-badge\">📌 Source: Stanford Center for Blockchain Research Guidelines</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "RWA 資產代幣化", "en": "RWA Tokenization" },
    "title": { "zh": "區塊鏈在傳統金融的應用：跨國清算與資產代幣化 (RWA)", "en": "Blockchain in Traditional Finance: Cross-Border & RWA" },
    "content": {
      "zh": "<h3>🏢 華爾街巨頭搶進！真實世界資產代幣化 (RWA) 趨勢</h3><ul><li><b>真實世界資產代幣化 (RWA)</b>：將美債、房地產、黃金與私債等實體資產轉化為區塊鏈代幣（如 BlackRock BUIDL 美債基金）。</li><li><b>優勢</b>：實現 24/7 全天候即時清算、分割微型化投資與大幅降低跨境手續費。</li></ul><div class=\"data-source-badge\">📌 資料來源：BlackRock 貝萊德 RWA 白皮書</div>",
      "en": "<h3>🏢 Wall Street Racing into Real World Asset Tokenization</h3><ul><li><b>Real World Assets (RWA)</b>: Converting US Treasuries, real estate, and gold into blockchain tokens (e.g. BlackRock BUIDL US Treasury Fund).</li><li><b>Benefits</b>: Enabling 24/7 instant settlement, fractionalized micro-investments, and lower fees.</li></ul><div class=\"data-source-badge\">📌 Source: BlackRock RWA Tokenization Whitepaper</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "合法 KYC 出入金 SOP", "en": "Legal KYC Deposit SOP" },
    "title": { "zh": "幣圈出金/入金法幣 SOP：台灣合法監管交易所 KYC 驗證", "en": "Crypto Fiat On/Off-Ramp SOP: Taiwan Registered KYC Rules" },
    "content": {
      "zh": "<h3>💳 安全合法的法幣出入金管道教學</h3><ol><li><b>步驟 1：註冊台灣合法 VASP 交易所</b>（如 MAX / ACE 交易所）。</li><li><b>步驟 2：完成實名認證 (KYC) 與銀行帳戶綁定</b>（進行身分證與雙證件驗證）。</li><li><b>步驟 3：使用綁定銀行帳戶台幣入金</b>（資金享銀行信託保管）。</li><li><b>步驟 4：出金回台幣銀行帳戶</b>（依法留存紀錄，防止洗錢風險）。</li></ol><div class=\"data-source-badge\">📌 資料來源：台灣虛擬資產同業公會 (VASP Guild) 安全指南</div>",
      "en": "<h3>💳 Legal Fiat Deposit & Withdrawal Execution SOP</h3><ol><li><b>Step 1: Register FSC-Compliant VASP Exchange</b> (e.g. MAX Exchange).</li><li><b>Step 2: Complete KYC & Bank Account Binding</b> (Upload IDs).</li><li><b>Step 3: Deposit NTD via Bound Bank Account</b> (Protected by bank trust).</li><li><b>Step 4: Withdraw NTD to Local Bank</b> (Audited under AML laws).</li></ol><div class=\"data-source-badge\">📌 Source: Taiwan VASP Guild Security Operating Manual</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "CoinGecko Portal 查閱", "en": "CoinGecko Portal Guide" },
    "title": { "zh": "實證數據調取：CoinGecko (coingecko.com) 實務查閱", "en": "Retrieving Real Data: CoinGecko Crypto Portal Guide" },
    "content": {
      "zh": "<h3>🌐 手把手教大一學生登入 CoinGecko 查閱鏈上數據</h3><ul><li><b>查詢加密貨幣排名與流通量</b>：登入 `coingecko.com` 查閱 BTC / ETH 流通供給量與交易量。</li><li><b>查驗合約地址防詐</b>：在 CoinGecko 複製正版 Token 合約地址，避免買到假代幣！</li><li><b>對照金管會 VASP 洗錢防制專區</b>：交叉驗證交易所之合法監管狀態。</li></ul><div class=\"data-source-badge\">📌 資料來源：CoinGecko (coingecko.com) / 金管會證期局</div>",
      "en": "<h3>🌐 Querying Real Crypto Data on CoinGecko</h3><ul><li><b>Query Rankings & Circulating Supply</b>: Visit `coingecko.com` to inspect BTC/ETH metrics.</li><li><b>Verify Token Contract Addresses</b>: Copy official contract addresses to avoid fake scam tokens!</li><li><b>Cross-Check Taiwan FSC VASP List</b>: Verify exchange compliance status.</li></ul><div class=\"data-source-badge\">📌 Source: CoinGecko / Taiwan FSC Securities Bureau</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "Web3 4大金律", "en": "4 Web3 Rules" },
    "title": { "zh": "大一新鮮人 Web3 與數位資產 4 大金律", "en": "4 Golden Rules of Web3 & Digital Asset Investing" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性資安防禦與風險控管心態</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔑 1. 私鑰即資產 (Not Your Keys, Not Your Coins)</h4><p>長期資產務必提領至冷錢包保管私鑰，絕對不信任第三方個人。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>⚖️ 2. 數位資產嚴格限制 5% 比率</h4><p>將 95% 資金配置於傳統優質資產，僅用 5% 閒錢參與，絕不借錢槓桿賭博。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🏛️ 3. 交易僅限金管會 VASP 合法平台</h4><p>法幣出入金認明完成洗錢防制法遵聲明且資金享銀行信託保管之交易所。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. 嚴防 Telegram 與 P2P 幣圈詐騙</h4><p>拒絕點擊陌生網址，不聽信保證獲利群組，守護個人血汗錢。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會與區塊鏈資安保護原則</div>",
      "en": "<h3>🛡️ Lifetime Mindset for Web3 Security & Portfolio Control</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🔑 1. Not Your Keys, Not Your Coins</h4><p>Hold long-term crypto in cold wallets with private keys off exchanges.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>⚖️ 2. Cap Crypto at 5% of Portfolio</h4><p>Keep 95% in traditional ETFs; invest 5% spare cash max without leverage.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>🏛️ 3. Trade Exclusively on FSC VASP Platforms</h4><p>Use exchanges registered under Taiwan AML laws with bank trusts.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🛡️ 4. Block Telegram & P2P Scams</h4><p>Never click unknown links or join \"guaranteed profit\" groups.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC & Blockchain Security Principles</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "5%資產配置SOP", "en": "5% Allocation SOP" },
    "title": { "zh": "數位資產配置試算實例：5% 避險配置兼顧爆發力與本金安全", "en": "Practical Case: 5% Crypto Allocation for Safety & Upside" },
    "content": {
      "zh": "<h3>💡 大一新鮮人小明 10 萬元資產配置 SOP</h3><ul><li><b>傳統資產 95% (95,000 元)</b>：定期定額配置 0050 (70,000 元) + 00878 (25,000 元)，奠定穩健收益根基。</li><li><b>數位資產 5% (5,000 元)</b>：定期定額買入比特幣 (BTC 3,500 元) 與以太幣 (ETH 1,500 元)，並提領至冷錢包。</li><li><b>避險效果</b>：即使幣圈遇到黑天鵝暴跌，最大損失僅 5,000 元，完全不影響生活；若大漲則能共享加密貨幣爆發力！</li></ul><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案數位資產組</div>",
      "en": "<h3>💡 Student Case: Ming's $100,000 NTD 5% Portfolio SOP</h3><ul><li><b>95% Traditional ($95,000)</b>: $70k in 0050 ETF + $25k in 00878 ETF for solid foundation.</li><li><b>5% Digital ($5,000)</b>: DCA into BTC ($3,500) and ETH ($1,500) transferred to a cold wallet.</li><li><b>Hedging Impact</b>: If crypto crashes, max loss is $5k; if it surges, Ming enjoys exponential gains safely!</li></ul><div class=\"data-source-badge\">📌 Source: Management Exploration II Digital Asset Team</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "Web3 未來總整合", "en": "Web3 Future Synthesis" },
    "title": { "zh": "Web3 數位資產與未來金融技術總整合", "en": "Web3 Digital Assets & Future Financial Tech Synthesis" },
    "content": {
      "zh": "<h3>🌐 理性看待技術革新：擁抱 Web3 的去中心化智慧！</h3><p>區塊鏈與 Web3 正在深刻重塑全球金融基礎設施。大一新鮮人身為數位原住民 (Digital Native)：</p><ol><li><b>技術為我所用</b>：理解去中心化與密碼學優勢，不盲目排斥新技術。</li><li><b>紀律控制風險</b>：堅守資安防線與 5% 資金上限，成為有智慧的數位金融公民！</li></ol><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」核心價值</div>",
      "en": "<h3>🌐 Embracing Innovation Rationally with Web3 Wisdom!</h3><p>Blockchain is reshaping global financial infrastructure. As digital natives, freshmen should:</p><ol><li><b>Harness the Tech</b>: Understand cryptographic benefits without blind fear.</li><li><b>Control Risks Discipinedly</b>: Hold strict 5% caps and cybersecurity to thrive!</li></ol><div class=\"data-source-badge\">📌 Source: Management Exploration II Core Values</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第十六週全景知識體系圖與觀念整合", "en": "Week 16 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第十六週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>區塊鏈與比特幣 (Hour 1)</b>：區塊鏈定義 ➔ 比特幣 2,100 萬枚上限 ➔ BTC 減半經濟學 ➔ 以太坊智慧合約 ➔ Web1-Web3 演進 ➔ CoinMarketCap 數據 ➔ 冷熱錢包私鑰保管。</p><p><b>DeFi、穩定幣與監管 (Hour 2)</b>：DeFi AMM 協議 ➔ NFT 數位資產 ➔ USDT/USDC 穩定幣 ➔ FTX 倒閉歷史教訓 ➔ 台灣 VASP 四大監管鐵律 ➔ 加密貨幣 4 大風險 ➔ 5% 配置上限 ➔ 美國現貨 ETF ➔ CBDC 數位新台幣。</p><p><b>防詐與 5% 配置 (Hour 3)</b>：Telegram 幣圈防詐 ➔ Web3 三大素養 ➔ RWA 資產代幣化 ➔ 法幣合法 KYC 出入金 ➔ CoinGecko Portal 查閱 ➔ 5% 配置 SOP ➔ 4 大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 16 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Blockchain & BTC (Hour 1)</b>: Blockchain definition ➔ BTC 21M Cap ➔ Halving Economics ➔ Ethereum Smart Contracts ➔ Web1-3 Evolution ➔ Cold vs Hot Wallets.</p><p><b>DeFi, Stablecoins & FSC (Hour 2)</b>: DeFi AMM Protocols ➔ NFTs ➔ USDT/USDC ➔ FTX Collapse Lessons ➔ Taiwan VASP FSC Rules ➔ 4 Crypto Risks ➔ 5% Cap ➔ Spot ETFs ➔ CBDC.</p><p><b>Anti-Scam & 5% SOP (Hour 3)</b>: Telegram Anti-Scam ➔ 3 Web3 Skills ➔ RWA Tokenization ➔ KYC On/Off-Ramp ➔ CoinGecko Portal ➔ 5% SOP ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十七週預告 (期末專案發表、實戰財經簡報與總評量)", "en": "Reflections & Week 17 Preview (Final Project Presentations)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第十六週「加密貨幣、區塊鏈基礎、Web3 與數位資產風險」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人數位資產風險評估與 Web3 報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十七週課程預告：期末專案發表、實戰財經簡報與總評量</h4><p>下週我們將迎來學期重頭戲！大一新鮮人團隊將同台發表<b>「大一理財與管理探索實戰專案簡報」</b>，展示 16 週累積的財務分析、資產配置與簡報實力，由教官與專家評審講評！</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 16!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your Crypto Risk & Web3 Report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 17 Preview: Final Project Presentations & Evaluations</h4><p>Next week brings our Capstone Event! Student teams present their <b>Freshman Financial & Management Exploration Projects</b>, showcasing 16 weeks of financial analysis and slide presentation mastery!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: BTC Halving & Wallet Security Calculator
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function calculateBtcSecurity() {
  const btcHolding = parseFloat(document.getElementById('btcHoldingInput').value) || 0.1; // 0.1 BTC
  const walletType = document.getElementById('walletTypeSelect').value; // 'cold' or 'exchange'

  const btcPriceUSD = 65000;
  const totalValueUSD = btcHolding * btcPriceUSD;
  const totalValueNTD = totalValueUSD * 32.5;

  let securityRating = walletType === 'cold' ? "🛡️ 極高資安 (100% 離線保管私鑰)" : "⚠️ 中低風險 (存於交易所，面臨提款暫停或駭客風險)";

  const resultDiv = document.getElementById('btcSecurityResult');
  resultDiv.innerHTML = `
    🪙 <b>比特幣資產價值與資安評估結果</b> (${btcHolding} BTC)：<br>
    • <b>加密貨幣資產估值</b>：$${totalValueUSD.toLocaleString()} 美元 (<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">約合 $${totalValueNTD.toLocaleString()} 元台幣</span>)<br>
    • <b>錢包保管資安評級</b>：<span style="color:var(--accent-gold); font-weight:bold;">${securityRating}</span><br>
    💡 <i>鐵律提醒：「Not Your Keys, Not Your Coins！」資產超過 1,000 美元建議提領至冷錢包！</i>
  `;
}

// HOUR 2 MODAL: DeFi Risk & 5% Asset Allocation Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateCryptoAllocation() {
  const totalAsset = parseFloat(document.getElementById('totalAssetInput').value) || 100000;
  const cryptoPercent = parseFloat(document.getElementById('cryptoPercentInput').value) || 5;

  const cryptoAmount = totalAsset * (cryptoPercent / 100);
  const tradAmount = totalAsset - cryptoAmount;

  const resultDiv = document.getElementById('cryptoAllocResult');
  resultDiv.innerHTML = `
    ⚖️ <b>數位資產 5% 風險控管試算結果</b> (總資產 $${totalAsset.toLocaleString()} 元)：<br>
    • <b>傳統資產 (0050/00878 等穩健配置)</b>：$${tradAmount.toLocaleString()} 元 (95%)<br>
    • <b>加密貨幣數位資產配置 (5% 避險上限)</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">$${cryptoAmount.toLocaleString()} 元台幣</span><br>
    💡 <i>即使加密貨幣遭遇極端黑天鵝暴跌 100%，對總資產影響僅 5%，完全不傷害生活根基，卻能參與爆發力！</i>
  `;
}

// HOUR 3 GAME: Web3 Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：比特幣總量上限",
    question: "在比特幣 (Bitcoin BTC) 創世白皮書中，硬性編碼寫死的全球發行總量上限是多少枚？",
    options: [
      { text: "2,100 萬枚 (永遠無法增發！)", correct: true },
      { text: "1 億枚", correct: false },
      { text: "無上限，隨便印", correct: false },
      { text: "1,000 枚", correct: false }
    ],
    explain: "比特幣硬性編碼總量上限為 2,100 萬枚，具備絕對稀缺性與抗通膨特徵！"
  },
  {
    level: 2,
    title: "關卡 2：幣圈資安黃金鐵律",
    question: "幣圈流傳的資安鐵律「Not Your Keys, Not Your Coins」是指什麼意思？",
    options: [
      { text: "密碼太長不要記", correct: false },
      { text: "不掌握私鑰就不算真正擁有該資產 (應用冷錢包保管私鑰)", correct: true },
      { text: "把加密貨幣存在借來的電腦裡", correct: false },
      { text: "把私鑰貼在 FB 公開塗鴉牆上", correct: false }
    ],
    explain: "私鑰代表區塊鏈上的絕對處分權。把幣放在交易所隨時有遭挪用或駭客風險，冷錢包保管私鑰才是真擁有！"
  },
  {
    level: 3,
    title: "關卡 3：台灣 VASP 監管規定",
    question: "在台灣，合法營運的加密貨幣交易所必須向哪一個政府機關完成「洗錢防制法遵聲明」？",
    options: [
      { text: "衛生福利部", correct: false },
      { text: "金融監督管理委員會 (金管會 FSC)", correct: true },
      { text: "教育部", correct: false },
      { text: "氣象署", correct: false }
    ],
    explain: "台灣加密貨幣交易所 (VASP) 必須向金管會辦理洗錢防制法令遵循聲明，並將台幣客戶資產交由銀行信託！"
  },
  {
    level: 4,
    title: "關卡 4：數位資產避險配置比例",
    question: "對於大一新鮮人或小資族而言，理財專家建議加密貨幣占個人總投資資產的比率上限最好控制在多少？",
    options: [
      { text: "100% 借錢開高槓桿", correct: false },
      { text: "5% ~ 10% (嚴禁高槓桿借錢)", correct: true },
      { text: "80%", correct: false },
      { text: "0.0001%", correct: false }
    ],
    explain: "將加密貨幣控制在 5%-10% 閒錢上限，既能分享 Web3 爆發力，又能在極端暴跌時保護本金安全！"
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
    let badgeText = userScore === 400 ? "🏆 Web3 數位資產達人徽章 (Web3 Master)" : "🥉 區塊鏈初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第十六週「加密貨幣、Web3 與數位資產風險」核心觀念！</p>
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
function submitW16Homework(e) {
  e.preventDefault();
  alert("🎉 第十六週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
