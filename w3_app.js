// 115管理探索二 第三週：利率、央行與我們的荷包 (大一非財金素養生活化版)
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

// 30 PURE TEACHING SLIDES DATA FOR WEEK 3 (FRESHMAN FRIENDLY)
const slidesData = [
  {
    "id": 1,
    "hour": 1,
    "tag": {
      "zh": "單元導論",
      "en": "Introduction"
    },
    "title": {
      "zh": "Slide 01 | 第三週課程導論：利率、央行與我們的荷包",
      "en": "Slide 01 | Introduction: Interest Rates, Central Banks & Your Wallet"
    },
    "img": "images/w3_cover.jpg",
    "content": {
      "zh": "\n                    <p>歡迎來到第三週「管理探索二」。本週我們不講複雜的算式，我們要來聊聊每天都在影響你我荷包的熱門話題——<b>「利率、央行與我們的生活」</b>。</p>\n                    <p>你有沒有看過新聞報導：「央行宣佈升息一碼，房貸族每月多繳數千元！」或是「美聯儲宣佈降息，台股大暴漲！」？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💡 核心疑問</h4>\n                            <p>央行開個會決定「升息」或「降息」，為什麼會影響到我們的學貸、房租、信用卡分期，甚至我們存銀行的利息？</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 本週學習目標</h4>\n                            <p>弄懂利率的白話文意義、看懂央行新聞標題、避開刷卡分期陷阱，並規劃大學生的第一筆理財存款。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Welcome to Week 3. Today we strip away heavy academic formulas and talk about real life: <b>Interest Rates & Your Wallet</b>.</p>\n                    <p>Have you seen news headlines like \"Central bank hikes rates by 25 bps, mortgage costs rise\" or \"Fed cuts rates, global stocks rally\"?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💡 Core Question</h4>\n                            <p>Why do central bank rate moves affect student loans, rent, credit card installments, and bank savings interest?</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 Learning Goals</h4>\n                            <p>Master interest rate basics in plain language, decode financial news headlines, and plan your student savings.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": {
      "zh": "學習地圖",
      "en": "Roadmap"
    },
    "title": {
      "zh": "Slide 02 | 第二週 3 小時生活化學習地圖",
      "en": "Slide 02 | 3-Hour Practical Learning Roadmap"
    },
    "content": {
      "zh": "\n                    <p>本週 3 小時（共 180 分鐘）課程專為大一非財金系學生設計，內容輕鬆、生活化且實用：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>第一小時：生活中的利率與借貸</h4>\n                            <p>• 學貸、車貸與便當錢算術<br>• 白話文：什麼是「利率」與「升息一碼」？<br>• 數位帳戶 3% 高利活存是真的嗎？</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>第二小時：新聞時事與央行開會</h4>\n                            <p>• 唯一理論：利息與金錢時間價值<br>• 新聞時事：台灣央行總裁與美聯儲 (Fed)<br>• 刷卡「零利率分期」背後的隱形手續費</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>第三小時：看懂財經新聞與防禦理財</h4>\n                            <p>• 新聞說的「債券殖利率與價格」是什麼？<br>• 什麼是經濟「軟著陸」與「硬著陸」？<br>• 大學生第一筆 10 萬元的抗通膨理財法</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Our 3-hour learning roadmap for Week 3 is practical and story-driven:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>Hour 1: Rates in Daily Life</h4>\n                            <p>• Student loans, auto loans & budget impacts<br>• What is \"Interest Rate\" & \"25 bps Hike\"?<br>• Are 3% digital bank savings accounts real?</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>Hour 2: News & Central Banks</h4>\n                            <p>• Only Theory: Interest & Time Value of Money<br>• Current Events: Taiwan Central Bank & US Fed<br>• The hidden cost of \"0% Credit Card Installments\"</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": {
      "zh": "生活體驗",
      "en": "Life Experience"
    },
    "title": {
      "zh": "Slide 03 | 生活體驗：學貸、買車分期與房貸每個月差多少？",
      "en": "Slide 03 | Daily Experience: Loans & Monthly Payments"
    },
    "content": {
      "zh": "\n                    <p>利率絕不是冰冷的數字，它直接決定你每個月要從口袋掏出多少錢：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎓 學貸與青年創業貸款</h4>\n                            <p>當利率從 1.15% 調升到 1.65%，貸款 40 萬元的學生，每年要多付 2,000 元利息，相當於少吃 20 個排骨便當！</p>\n                            <div class=\"data-source-badge\">📌 資料來源：中華民國中央銀行 (CBC) 政策利率與學貸利息補貼統計</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🏡 父母的房屋貸款壓力</h4>\n                            <p>貸款 1,000 萬元的家庭，升息 0.5% 代表每年要多繳約 50,000 元利息，相當於少了一趟全家國內旅遊預算。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：聯徵中心 (JCIC) 購屋貸款平均利率資料庫</div>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Interest rates directly dictate how much cash leaves your wallet each month:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎓 Student Loan Example</h4>\n                            <p>If rate rises 1.15% to 1.65%, a $400k loan costs $2,000 extra per year—equal to 20 bento meals lost!</p>\n                            <div class=\"data-source-badge\">📌 Source: Central Bank of ROC (CBC) Policy Rate Data</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🏡 Mortgage Family Burden</h4>\n                            <p>For a $10M mortgage, a 0.5% rate hike adds $50,000 in annual interest—taking away a family vacation.</p>\n                            <div class=\"data-source-badge\">📌 Source: JCIC Mortgage Rate Statistics</div>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": {
      "zh": "白話利率",
      "en": "What is Rate?"
    },
    "title": {
      "zh": "Slide 04 | 白話文：什麼是「利率」？借錢的租金與存錢的報酬",
      "en": "Slide 04 | In Plain English: What is an Interest Rate?"
    },
    "content": {
      "zh": "\n                    <p>如果要給「利率」下一個最簡單的生活化定義，那就是<b>「使用金錢的租金」</b>：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🚗 就像租車要付租金一樣</h4>\n                            <p>你去租車公司租車一天要付 1,500 元租金；你向銀行「租錢（借錢）」，付給銀行的代價就叫做「利息 (Interest)」。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💰 存錢則是把錢「出租給銀行」</h4>\n                            <p>當你把錢存在銀行，等於你把錢借給銀行去投資，銀行付給你的報酬就是「存款利息」。利率越高，存錢越划算！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>The simplest way to understand interest rates: <b>It's the rent for using money!</b></p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🚗 Just Like Renting a Car</h4>\n                            <p>You pay $1,500/day to rent a car. When you 'rent money' from a bank, the rent you pay is called 'Interest'.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💰 Savings: Renting Money TO the Bank</h4>\n                            <p>Depositing cash means lending money to the bank. The higher the rate, the more rental income you earn.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": {
      "zh": "新聞解密",
      "en": "Headline Decoding"
    },
    "title": {
      "zh": "Slide 05 | 新聞解密：什麼是「升息一碼」、「半碼」？",
      "en": "Slide 05 | News Decoding: What is a 'Basis Point'?"
    },
    "content": {
      "zh": "\n                    <p>電視新聞主播常說：「央行理監事會議決定升息半碼！」到底「一碼」是多少？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📏 換算大補帖</h4>\n                            <p>• <b>一碼 (1 Basis Point / 25 bps)</b> = <b>0.25%</b><br>• <b>半碼</b> = <b>0.125%</b><br>• <b>二碼 (50 bps)</b> = <b>0.50%</b></p>\n                            <div class=\"data-source-badge\">📌 資料來源：台灣中央銀行 (CBC) 暨美國聯準會 (FOMC) 聲明發布標準</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📰 讀懂新聞標題</h4>\n                            <p>當新聞說「央行升息半碼」，意思就是銀行借錢和存錢的基準年利率，通通調高了 0.125 個百分點。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Financial news often says 'Central bank raised rates by 1 quarter point (25 bps)'. What does it mean?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📏 Quick Unit Conversion</h4>\n                            <p>• <b>1 碼 (1 Quarter Point / 25 bps)</b> = <b>0.25%</b><br>• <b>半碼 (Half Quarter Point)</b> = <b>0.125%</b><br>• <b>2 碼 (50 bps)</b> = <b>0.50%</b></p>\n                            <div class=\"data-source-badge\">📌 Source: CBC & US Federal Reserve FOMC Standards</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📰 News Headline Translation</h4>\n                            <p>'Rate hike of 12.5 bps' means annual borrowing and saving rates went up by 0.125% across banks.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": {
      "zh": "高利活存陷阱",
      "en": "Digital Bank Trap"
    },
    "title": {
      "zh": "Slide 06 | 數位帳戶「3% 高利活存」是真的嗎？條款大揭密",
      "en": "Slide 06 | Are '3% High-Yield Digital Accounts' Real?"
    },
    "content": {
      "zh": "\n                    <p>很多大學生會被廣告吸引「數位帳戶年利率 3% 活存」，真的有這麼好康嗎？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🔍 隱藏小字條件 (Terms & Conditions)</h4>\n                            <p>1. <b>額度上限限制</b>：通常只給 5 萬元或 10 萬元額度享 3%，超過的部分回歸 0.8% 一般活存。<br>2. <b>任務解鎖條件</b>：要求每月轉帳 3 次或刷卡滿額。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：國內主要數位銀行 (Richart / DAWHO / KOKO) 官網公開資費公開資料</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💡 大學生聰明做法</h4>\n                            <p>把緊急預備金 10 萬元放在高利活存賺取利息，但要看清優惠期限（常為 6 個月），到期後要記得靈活搬家！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Many students sign up for '3% High-Yield Digital Savings'. What are the hidden traps?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🔍 Fine Print Conditions</h4>\n                            <p>1. <b>Cap Limit</b>: The 3% applies only to the first $50k-$100k; excess yields standard 0.8%.<br>2. <b>Task Requirements</b>: Requires 3 monthly transfers or minimum card spends.</p>\n                            <div class=\"data-source-badge\">📌 Source: Official Digital Bank Product Declarations</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💡 Smart Action Plan</h4>\n                            <p>Use high-yield digital accounts for emergency funds up to the cap limit, but track expiration dates!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": {
      "zh": "刷卡分期陷阱",
      "en": "0% Installment Trap"
    },
    "title": {
      "zh": "Slide 07 | 零利率分期付款真的免費嗎？手續費換算真實利率",
      "en": "Slide 07 | Is '0% Credit Card Installment' Free?"
    },
    "content": {
      "zh": "\n                    <p>買最新 iPhone 選擇「12 期零利率分期」，看似沒有利息，但背後隱藏了什麼手續費與心理陷阱？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛍️ 手續費換算年利率 (APR)</h4>\n                            <p>若商品標價 30,000 元，分期收取「帳款管理費 1,500 元」，雖然聲稱零利率，實質年利率高達 9.2%！</p>\n                            <div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 銀行局信用卡手續費披露標準</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🧠 心理過度消費偏誤</h4>\n                            <p>分期付款讓人產生「每個月只要付 2,500 元很便宜」的錯覺，導致大學生不知不覺累積十幾筆分期，演變成卡債。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Buying a smartphone with '12-month 0% interest installments'—is it truly free?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛍️ Processing Fee = Real Interest</h4>\n                            <p>A $30,000 purchase with a $1,500 'processing fee' actually carries an effective annual interest rate of 9.2%!</p>\n                            <div class=\"data-source-badge\">📌 Source: Taiwan Banking Bureau (FSC) Credit Disclosure Rules</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🧠 Psychological Trap</h4>\n                            <p>Splitting costs into $2,500/month tricks the brain into overspending, accumulating dangerous credit card debt.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": {
      "zh": "第一筆理財",
      "en": "First $100k Savings"
    },
    "title": {
      "zh": "Slide 08 | 大學生第一筆 10 萬元存款該怎麼擺才不吃虧？",
      "en": "Slide 08 | How Students Should Store Their First $100k Savings"
    },
    "content": {
      "zh": "\n                    <p>大學時期辛苦打工存到的第一筆 10 萬元，應該擺在哪裡？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>❌ 放在一般活期存款 (最差)</h4>\n                            <p>活存年利率僅約 0.7%，10 萬元放一年只有 700 元利息，直接被通膨默默吃掉購買力。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>✅ 拆分成「緊急預備金 + 高利活存」</h4>\n                            <p>5 萬放數位帳戶 3% 高利活存（年利 1,500 元），5 萬放定期存款 (1.7%)，保持彈性又能賺取穩健利息。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Where should you put your hard-earned first $100,000 savings from part-time jobs?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>❌ Regular Checking Account (Worst)</h4>\n                            <p>Yielding only 0.7%, $100k earns a measly $700 per year, easily eaten away by inflation.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>✅ Split: Emergency Fund + High-Yield Digital Savings</h4>\n                            <p>Put $50k in 3% high-yield digital accounts ($1,500 interest) and $50k in CDs (1.7%) to balance safety & returns.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": {
      "zh": "生活討論",
      "en": "Class Discussion"
    },
    "title": {
      "zh": "Slide 09 | 課堂討論：央行升息會讓房東調漲我們的房租嗎？",
      "en": "Slide 09 | Class Discussion: Do Rate Hikes Cause Rent Surges?"
    },
    "content": {
      "zh": "\n                    <p>請大家討論：當新聞報導央行升息時，租屋的大學生會受到影響嗎？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏠 房東的成本轉嫁邏輯</h4>\n                            <p>房東買房若有房貸，央行升息導致房東每月房貸負擔增加，房東常會藉由續約時「調漲房租」將利息轉嫁給租客。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：行政院主計總處 (DGBAS) 居住類租金指數時間序列</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🗣️ 小組討論題目</h4>\n                            <p>如果你租屋處的房東說：「因為央行升息房貸變貴，下個月起房租要漲 1,000 元」，你覺得合理嗎？該如何應對？</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Group discussion: How do central bank rate hikes affect college students renting apartments?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏠 Landlord Cost Pass-Through</h4>\n                            <p>Landlords with mortgages face higher monthly payments after rate hikes, often raising rent to pass costs to tenants.</p>\n                            <div class=\"data-source-badge\">📌 Source: DGBAS Residential Rent Index Statistics</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🗣️ Group Discussion Prompt</h4>\n                            <p>If your landlord says 'Rent goes up $1,000 next month because of Fed rate hikes', is it fair? How would you respond?</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": {
      "zh": "第一小時活動",
      "en": "Hour 1 Activity"
    },
    "title": {
      "zh": "Slide 10 | 第一小時小結與專屬活動預告",
      "en": "Slide 10 | Hour 1 Summary & Activity Preview"
    },
    "content": {
      "zh": "\n                    <p>第一小時小結：我們瞭解了利率的白話文意義（使用金錢的租金）、升息一碼 (0.25%)，以及刷卡分期的隱形手續費。</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 專屬活動：升息下的房貸與學貸月付金計算盤</h4>\n                            <p>點擊頂部選單「🎯 1小時活動: 房貸學貸計算」，輸入學貸與房貸金額，算算看升息會讓你多花多少便當錢！</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4> Preview 第二小時預告</h4>\n                            <p>第二小時我們將看懂熱門財經新聞：台灣央行總裁楊金龍與美聯儲 (Fed) 開會到底是怎麼回事！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Hour 1 Summary: We learned interest rate basics (money rent), basis points (25 bps), and hidden installment fees.</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 Hour 1 Activity Preview</h4>\n                            <p>Click 'Loan Calculator' on top menu to compute your extra monthly loan expenses under rate hikes.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4> Preview Hour 2 Preview</h4>\n                            <p>In Hour 2, we demystify news headlines: What happens when the Fed & Central Bank hold rate meetings?</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": {
      "zh": "唯一學術觀念",
      "en": "Core Theory"
    },
    "title": {
      "zh": "Slide 11 | 本週唯一核心觀念：金錢的時間價值 (Time Value of Money)",
      "en": "Slide 11 | Week 3 Only Core Concept: Time Value of Money"
    },
    "content": {
      "zh": "\n                    <p>本週我們只學一個最基礎也最重要的財務觀念——<b>「金錢的時間價值」</b>：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💰 「今天的 100 元」＞「明年的 100 元」</h4>\n                            <p>因為今天的 100 元拿去存銀行或投資，一年後會變成 102 元；而且明年的 100 元會因為通膨而買不到一樣多的便當。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💡 生活簡單算式</h4>\n                            <p>金錢在未來的價值 = 現在的金額 $\\times (1 + \\text{利率})$。利息就是對你「延後消費」所給予的補償獎勵！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Our single core concept for Week 3: <b>The Time Value of Money</b>!</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💰 'Today's $100' > 'Next Year's $100'</h4>\n                            <p>Because $100 today deposited in a bank grows into $102 next year, plus inflation reduces future purchasing power.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💡 Simple Plain Formula</h4>\n                            <p>Future Value = Present Amount $\\times (1 + \\text{Interest Rate})$. Interest is the reward for delaying spending!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": {
      "zh": "時事討論",
      "en": "Current Events"
    },
    "title": {
      "zh": "Slide 12 | 新聞時事：台灣央行總裁開會「升息打房」有效嗎？",
      "en": "Slide 12 | News Debate: Does Central Bank Rate Hiking Curb House Prices?"
    },
    "img": "images/w3_dotplot.jpg",
    "content": {
      "zh": "\n                    <p>每每央行召開理監事會議宣佈升息，新聞常下標「央行重拳升息打房」：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📰 媒體新聞說法</h4>\n                            <p>升息提高房貸利息成本 ➡️ 買房負擔變重 ➡️ 購屋族觀望 ➡️ 抑制房價過熱飆漲。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：中央銀行理監事會議決議紀錄與金融新聞統計</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🤔 實務生活真實狀況</h4>\n                            <p>若升息幅度過小（如僅半碼 0.125%），對每月房貸影響有限，且建造成本與通膨居高不下，房價往往依然堅挺。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Every time Taiwan's Central Bank meets, headlines scream 'Rate Hikes to Curb Housing Prices!':</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📰 News Media Logic</h4>\n                            <p>Rate hikes increase mortgage costs ➡️ Home buying slows ➡️ Property prices cool down.</p>\n                            <div class=\"data-source-badge\">📌 Source: Central Bank Monetary Policy Decision Minutes</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🤔 Real-World Experience</h4>\n                            <p>If rate hikes are small (e.g. 12.5 bps), mortgage impacts are minor, and high construction costs keep prices sticky.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": {
      "zh": "美聯儲 Fed",
      "en": "US Fed Impact"
    },
    "title": {
      "zh": "Slide 13 | 新聞時事：美國阿伯開會降息，為什麼全球股市大暴動？",
      "en": "Slide 13 | News Debate: Why Does the US Fed Control Global Markets?"
    },
    "content": {
      "zh": "\n                    <p>為什麼美國聯準會 (Fed) 主席發表談話，全台灣的財經新聞都在連線直播？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🌐 美元是全球最強水龍頭</h4>\n                            <p>美元是全球貿易與投資的主要貨幣。當美聯儲「降息（開大水龍頭）」，大量美元資金會湧向全球（包含台灣股市）。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：美國聯邦準備理事會 (FRED) 國際資本流動數據 (TIC)</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🚀 護國神山台積電與台幣連動</h4>\n                            <p>外資拿到便宜的美元資金後，會大舉買進台積電等台股龍頭，同時將美金換成台幣，帶動台幣強勢升值。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Why does the US Fed Chair's speech get live broadcasts across news channels globally?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🌐 US Dollar is the Global Money Tap</h4>\n                            <p>The USD dominates international trade. When Fed cuts rates, cheap dollars flood into global stock markets.</p>\n                            <div class=\"data-source-badge\">📌 Source: US Federal Reserve (FRED) TIC Capital Flow Data</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🚀 TSMC & NT Dollar Impact</h4>\n                            <p>Foreign investors use cheap US dollars to buy Taiwan Tech giants like TSMC, boosting the NT Dollar.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 14,
    "hour": 2,
    "tag": {
      "zh": "科技股暴跌",
      "en": "Tech Stocks"
    },
    "title": {
      "zh": "Slide 14 | 為什麼升息時，新聞常寫「科技股大暴跌」？",
      "en": "Slide 14 | Why Do Rate Hikes Cause Tech Stock Sell-Offs?"
    },
    "content": {
      "zh": "\n                    <p>用最簡單的生活常理，解釋為什麼升息會打擊科技股：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏦 替代效應：有 safe 5% 誰要冒險？</h4>\n                            <p>當銀行定存和無風險國債能輕鬆拿到 5% 利息時，大金主就不太想冒風險去買股價很貴、本益比高的科技股票了。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💳 科技公司借錢研發變貴</h4>\n                            <p>科技公司需要借大筆錢買伺服器與研發 AI，升息讓借款利息暴增，會直接吃掉公司的利潤。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>A plain-English explanation for why rate hikes hurt tech stocks:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏦 Safe 5% Returns Competition</h4>\n                            <p>When Treasuries give a safe 5% yield, investors feel less inclined to gamble on expensive high-P/E tech stocks.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💳 Borrowing Costs Eat Profits</h4>\n                            <p>Tech giants borrow heavily for R&D. Rate hikes surge borrowing interest expenses, directly cutting net income.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": {
      "zh": "銀行股利多",
      "en": "Bank Stocks"
    },
    "title": {
      "zh": "Slide 15 | 為什麼升息對銀行股反而是好消息？",
      "en": "Slide 15 | Why Are Rate Hikes Good News for Banks?"
    },
    "content": {
      "zh": "\n                    <p>升息打擊科技股，但對金融銀行股卻是獲利的強心針：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📈 借貸利差 (NIM) 擴大</h4>\n                            <p>央行一升息，銀行借給客戶房貸與信貸的利率立刻調高 0.25%，但付給民眾的活存利息只調高 0.1%，中間賺取的利差大增！</p>\n                            <div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 本國銀行獲利與存放利差統計</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📰 新聞關鍵字：金融股發高股利</h4>\n                            <p>利差擴大讓銀行獲利創新高，吸引許多喜歡拿穩健股利的存股族進場買進金控股票。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>While rate hikes pressure tech, they act as a profit boost for financial banks:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📈 Expanding Net Interest Margin</h4>\n                            <p>Banks instantly raise loan interest rates by 0.25%, but bump savings rates by only 0.1%, pocketing the extra spread!</p>\n                            <div class=\"data-source-badge\">📌 Source: Taiwan Financial Supervisory Commission (FSC) Bank NIM Data</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📰 Bank Dividend Stocks Rally</h4>\n                            <p>Wider interest spreads boost bank profits, attracting dividend investors seeking stable income.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": {
      "zh": "消費陷阱",
      "en": "Consumer Traps"
    },
    "title": {
      "zh": "Slide 16 | 生活實戰：信用卡「預支現金」與「循環利息」噩夢",
      "en": "Slide 16 | Life Practice: Credit Card Revolving Interest Nightmares"
    },
    "content": {
      "zh": "\n                    <p>年輕人一定要知道的個人理財地雷——信用卡「循環利息」：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>⚠️ 只繳「最低應繳金額」的恐怖代價</h4>\n                            <p>如果信用卡账單 2 萬元只繳最低 2,000 元，剩下的 1.8 萬元會被啟動高達 <b>15% 的年利率</b> 計算滾利息！</p>\n                            <div class=\"data-source-badge\">📌 資料來源：銀行公會信用卡循環信用利率公開標準</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💸 利滾利陷阱</h4>\n                            <p>15% 的高利息比任何銀行定存高出 10 倍以上，會讓年輕人快速陷入永遠還不清的卡奴債務深淵。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>A vital financial trap every college student must avoid: Revolving credit card interest!</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>⚠️ Paying Only the Minimum Amount</h4>\n                            <p>If your bill is $20k and you pay only $2k minimum, the remaining $18k gets charged up to <b>15% annual revolving interest</b>!</p>\n                            <div class=\"data-source-badge\">📌 Source: Taiwan Bankers Association Credit Rules</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💸 Compounding Debt Spiral</h4>\n                            <p>A 15% rate is 10x higher than bank deposit rates, trapping young adults in debt spirals.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": {
      "zh": "買房 vs 租房",
      "en": "Rent vs Buy"
    },
    "title": {
      "zh": "Slide 17 | 理財情境思考：高利率時代，買房還是租房划算？",
      "en": "Slide 17 | Practical Thinking: Rent or Buy in High Rate Eras?"
    },
    "content": {
      "zh": "\n                    <p>高利率環境下，社會新鮮人該如何選擇住屋方案？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏡 買房房貸負擔</h4>\n                            <p>優點：擁有自己的資產與強迫儲蓄；缺點：高利率下每月利息負擔極沉重，且首付款侵蝕流動資金。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🏢 租房靈活理財</h4>\n                            <p>優點：不需承擔沉重房貸本息，可將節省下來的首付款投資高收益資產；缺點：幫房東繳房貸，面臨漲租風險。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>How should young adults evaluate renting versus buying when interest rates stay high?</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🏡 Buying a Home</h4>\n                            <p>Pros: Builds long-term asset ownership; Cons: Heavy monthly interest burdens during high rate periods.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🏢 Renting & Investing the Gap</h4>\n                            <p>Pros: Preserves liquidity to invest in liquid assets; Cons: Subject to landlord rent increases.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": {
      "zh": "防詐理財",
      "en": "Scam Prevention"
    },
    "title": {
      "zh": "Slide 18 | 防詐警訊：宣稱「月報酬 10% 零風險」的必定是詐騙！",
      "en": "Slide 18 | Scam Alert: Anything Promising '10% Monthly Zero Risk' is Fake!"
    },
    "content": {
      "zh": "\n                    <p>學會利率基礎後，你就能獲得完美的金融防詐免疫力：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛑 記住無風險利率基準 (e.g. 1.7% ~ 4%)</h4>\n                            <p>連全世界最強的美國政府和台灣銀行，無風險年利率也才 1.7% 到 4% 左右。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：美國財政部 10 年期國債 (US10Y) 暨台灣銀行一年期定存利率</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>⚠️ 破解話術法則</h4>\n                            <p>如果有投資群組或網紅宣稱「保本零風險、每月保證獲利 10%（年化 120%）」，這必定是龐氏騙局收割資金！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Mastering basic interest rates gives you immunity against financial scams:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛑 Remember the Risk-Free Benchmark (~2-4%)</h4>\n                            <p>Even US Treasuries and central bank deposits only offer ~2-4% risk-free annual returns.</p>\n                            <div class=\"data-source-badge\">📌 Source: US Treasury 10Y Yields & Bank of Taiwan CD Rates</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>⚠️ Spotting Ponzi Schemes</h4>\n                            <p>Any group claiming 'Guaranteed Zero Risk 10% Monthly Returns (120% yearly)' is 100% a Ponzi fraud!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": {
      "zh": "實用理財規則",
      "en": "Practical Rules"
    },
    "title": {
      "zh": "Slide 19 | 大學生個人利率理財 3 大黃金法則",
      "en": "Slide 19 | 3 Golden Rules of Interest Rates for College Students"
    },
    "content": {
      "zh": "\n                    <p>將本小時所學總結為 3 個實用日常生活動作：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>1. 絕對不繳信用卡循環利息</h4>\n                            <p>每月信用卡賬單堅持全額繳清，絕不只繳最低應繳金額。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>2. 善用數位帳戶高利活存</h4>\n                            <p>將打工積蓄放在 2%-3% 高利活存，賺取高於一般活存 3 倍的利息。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>3. 算清分期付款真實手續費</h4>\n                            <p>買大件商品分期前，先算算看手續費折合年利率是否划算。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Summarizing 3 daily financial habits for every student:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>1. Never Pay Revolving Credit Interest</h4>\n                            <p>Always pay your monthly credit card bill in full.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>2. Maximize Digital High-Yield Accounts</h4>\n                            <p>Place savings in 2-3% digital accounts to earn 3x standard interest.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>3. Calculate Real Fees Before Installments</h4>\n                            <p>Check the effective APR of installment fees before buying expensive items.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": {
      "zh": "第二小時活動",
      "en": "Hour 2 Activity"
    },
    "title": {
      "zh": "Slide 20 | 第二小時小結與專屬活動預告",
      "en": "Slide 20 | Hour 2 Summary & Activity Preview"
    },
    "content": {
      "zh": "\n                    <p>第二小時小結：我們瞭解了金錢的時間價值、央行新聞解密與信用卡循環利息陷阱。</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 專屬活動：刷卡分期付款真實利率計算大考驗</h4>\n                            <p>點擊頂部「🎯 2小時活動: 分期利率」，輸入商品價格與分期手續費，算出暗藏的真實年利率！</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4> Preview 第三小時預告</h4>\n                            <p>第三小時我們將用最白話的方式解密「債券殖利率」與經濟「軟著陸 vs 硬著陸」！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Hour 2 Summary: We explored time value of money, Fed news, and revolving card traps.</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🎯 Hour 2 Activity Preview</h4>\n                            <p>Click 'Installment Calc' on top menu to calculate the true annual interest rate of card fees.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4> Preview Hour 3 Preview</h4>\n                            <p>In Hour 3, we explain bond yields and 'Soft vs Hard Landing' in plain language!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": {
      "zh": "白話債券",
      "en": "Bonds Made Simple"
    },
    "title": {
      "zh": "Slide 21 | 新聞說的「債券殖利率」到底是什麼？白話文大解密",
      "en": "Slide 21 | Plain English: What is 'Bond Yield'?"
    },
    "img": "images/w3_yieldcurve.jpg",
    "content": {
      "zh": "\n                    <p>進入第三小時，新聞標題常寫「美國 10 年期國債殖利率飆升」，到底什麼是「債券」與「殖利率」？</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📜 債券 (Bond) 白話文</h4>\n                            <p>政府或大企業向你借錢發給你的「借據借條」。上面寫著每年會付你多少利息，以及到期歸還本金。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：美國財政部 (US Treasury) 10年期公債數據</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📊 殖利率 (Yield) 白話文</h4>\n                            <p>簡單說就是你買下這張借條後，<b>每年實際上能拿到的利息報酬百分比</b>！殖利率越高，代表這張借據利息越甜。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Hour 3 starts with decoding 'Bond Yields' seen in daily news headlines:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📜 What is a Bond?</h4>\n                            <p>A formal IOU issued by governments or corporations promising to pay regular interest and return principal at maturity.</p>\n                            <div class=\"data-source-badge\">📌 Source: US Treasury 10Y Bond Market Data</div>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📊 What is Bond Yield?</h4>\n                            <p>In plain terms: <b>The effective annual percentage of interest return</b> you get from holding the bond.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": {
      "zh": "價格與殖利率",
      "en": "Price vs Yield"
    },
    "title": {
      "zh": "Slide 22 | 為什麼新聞說「利率上升，債券價格下跌」？",
      "en": "Slide 22 | Why Do Bond Prices Fall When Rates Rise?"
    },
    "content": {
      "zh": "\n                    <p>用最貼近生活的二手買賣例子，解釋這個看似矛盾的現象：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛍️ 生活二手拍賣例子</h4>\n                            <p>假設你手上有一張舊的債券，每年只給 2% 利息。現在銀行宣布推出全新的 5% 高利定存，大家都跑去銀行了。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📉 舊債券只能降價求售</h4>\n                            <p>你如果想在二手市場把這張 2% 的舊債券賣掉，就必須**打折降價**賣給別人，別人覺得便宜才願意買。這就是「利率升，舊債價格跌」！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Explaining why bond prices fall when interest rates rise using a second-hand market example:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛍️ Second-Hand Market Example</h4>\n                            <p>Suppose you hold an old bond paying 2% interest. Suddenly, banks offer new 5% deposit rates. Nobody wants your 2% bond.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>📉 Discounting Old Bonds</h4>\n                            <p>To sell your 2% bond, you must **discount its price** until the buyer gets an effective 5% return. Thus, rate hikes drop bond prices!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": {
      "zh": "軟著陸與硬著陸",
      "en": "Soft vs Hard Landing"
    },
    "title": {
      "zh": "Slide 23 | 新聞用語解密：什麼是經濟「軟著陸」與「硬著陸」？",
      "en": "Slide 23 | News Terms: What is 'Soft Landing' vs 'Hard Landing'?"
    },
    "content": {
      "zh": "\n                    <p>新聞播報聯準會降息時，常提到「軟著陸」與「硬著陸」，這就像開飛機降落一樣：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛬 軟著陸 (Soft Landing) —— 完美降落</h4>\n                            <p>央行成功讓過熱的通膨降溫，但經濟沒有陷入衰退、大家都有工作。股市隨後迎接溫和快樂的大上漲！</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💥 硬著陸 (Hard Landing) —— 墜機事故</h4>\n                            <p>央行升息過頭踩煞車過猛，導致企業大量倒閉、失業率暴增、經濟崩盤衰退。股市大跌 30% 以上。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Economic landings explained like landing an airplane:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🛬 Soft Landing — Perfect Touchdown</h4>\n                            <p>Central bank cools inflation without causing a recession. Employment stays solid and markets rally nicely.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>💥 Hard Landing — Airplane Crash</h4>\n                            <p>Rate hikes hit the brakes too hard, causing corporate defaults, mass unemployment, and market crashes.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": {
      "zh": "第一筆理財計畫",
      "en": "First Plan"
    },
    "title": {
      "zh": "Slide 24 | 大學生如何建立第一個抗通膨與利率風險理財計畫？",
      "en": "Slide 24 | Building Your First Anti-Inflation Financial Plan"
    },
    "content": {
      "zh": "\n                    <p>大一新鮮人不必等到畢業，現在就能開始的 3 步驟實務理財計畫：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>第一步：建立 3-6 個月生活預備金</h4>\n                            <p>將預備金存在數位帳戶高利活存，保持隨時可提領的流動性。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>第二步：定期定額投資原型 ETF (如 0050 / 006208)</h4>\n                            <p>每個月從打工錢拿出 1,000-3,000 元，長期參與台灣龍頭企業的成長，用企業獲利抗通膨。</p>\n                            <div class=\"data-source-badge\">📌 資料來源：台灣證券交易所 (TWSE) 元大台灣50與富邦台50定期定額統計</div>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>A 3-step practical financial plan for freshman college students:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>Step 1: 3-6 Months Emergency Fund</h4>\n                            <p>Keep your liquid emergency cash in high-yield digital bank accounts for instant access.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>Step 2: Dollar-Cost-Average Index ETFs</h4>\n                            <p>Invest $1,000-$3,000/month from part-time jobs into broad market ETFs to share corporate growth.</p>\n                            <div class=\"data-source-badge\">📌 Source: TWSE 0050 & 006208 Monthly Investment Statistics</div>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": {
      "zh": "理財傻事",
      "en": "Mistakes to Avoid"
    },
    "title": {
      "zh": "Slide 25 | 升息時代大學生絕對不能做的 3 個理財傻事",
      "en": "Slide 25 | 3 Financial Mistakes College Students Must Avoid"
    },
    "content": {
      "zh": "\n                    <p>避免踩中以下 3 個常見的理財地雷：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>❌ 1. 借高利貸或當鋪分期買機車 / 奢侈品</h4>\n                            <p>許多地下機車分期號稱低月付，換算實質年利率常高達 18%-20%，直接吃掉生活費。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>❌ 2. 把全部積蓄拿去聽信明牌開槓桿炒股</h4>\n                            <p>在高利率時代，沒有本業基礎與風險控制的當沖開槓桿，往往導致本金歸零血本無歸。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Avoid these 3 common financial mistakes during high-rate eras:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>❌ 1. High-Interest Loans for Motorcycles/Luxury</h4>\n                            <p>Financing bikes via shadow lenders with 18-20% hidden APR crushes monthly student budgets.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>❌ 2. Gambling Savings on Leveraged Day Trading</h4>\n                            <p>Speculating with high leverage without risk controls leads directly to capital wipeout.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": {
      "zh": "新聞閱讀練習",
      "en": "News Reading"
    },
    "title": {
      "zh": "Slide 26 | 實務演練：看懂今日財經新聞的三個步驟",
      "en": "Slide 26 | Practice: 3 Steps to Read Any Financial News Headline"
    },
    "content": {
      "zh": "\n                    <p>以後打開手機看財經新聞，請按照這 3 個步驟解讀：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>1. 抓出主角與動作</h4>\n                            <p>新聞寫是「美聯儲降息」還是「台灣央行升息」？</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>2. 思考對荷包的直接影響</h4>\n                            <p>這會讓我定存利息變多還是變少？房貸/學貸負擔增加還是減輕？</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>3. 評估對股市大方向的衝擊</h4>\n                            <p>降息資金變多有利股市，升息資金變緊促使高本益比股票修正。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Use these 3 steps whenever you read financial news on your phone:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>1. Identify the Actor & Action</h4>\n                            <p>Is it 'US Fed Rate Cut' or 'Taiwan Central Bank Rate Hike'?</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>2. Connect to Your Wallet</h4>\n                            <p>Does this increase or decrease my loan payments or savings yield?</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>3. Assess Market Sentiment</h4>\n                            <p>Rate cuts add market liquidity; rate hikes tighten capital and compress multiples.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": {
      "zh": "理財心法",
      "en": "Financial Wisdom"
    },
    "title": {
      "zh": "Slide 27 | 理財心法：先理健康腦，再理口袋錢",
      "en": "Slide 27 | Financial Wisdom: Train Your Brain Before Your Money"
    },
    "content": {
      "zh": "\n                    <p>投資自己是大學時期回報率最高的防禦武器：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🧠 人力資本是最好的抗通膨資產</h4>\n                            <p>大學時期專注於提升專業專長、外語能力與程式技能。未來職場本業加薪 20%，遠勝過盲目炒股的幾百元損益。</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🛡️ 建立理性冷靜的財經頭腦</h4>\n                            <p>不被媒體標題黨嚇到恐慌，也不聽信保證暴利的詐騙，這就是最棒的財金素養！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Investing in yourself yields the highest non-linear return during college years:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>🧠 Human Capital is the Best Inflation Hedge</h4>\n                            <p>Focus on building core professional skills. A 20% career salary jump beats stock speculation.</p>\n                        </div>\n                        <div class=\"slide-card-box\">\n                            <h4>🛡️ Build a Cool, Rational Mindset</h4>\n                            <p>Staying calm amidst clickbait headlines and ignoring scam promises is true financial literacy!</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": {
      "zh": "第三週總結",
      "en": "Week 3 Summary"
    },
    "title": {
      "zh": "Slide 28 | 第三週全景生活化觀念總整理",
      "en": "Slide 28 | Week 3 Practical Concept Summary"
    },
    "content": {
      "zh": "\n                    <p>第三週核心觀念快速複習：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💡 觀念整合串聯</h4>\n                            <p>利率是金錢的租金 ➡️ 升息一碼 (0.25%) 增加借貸負擔 ➡️ 金錢時間價值（今天的錢大於未來的錢） ➡️ 避開信用卡循環利息與分期陷阱 ➡️ 看懂美聯儲降息與債券白話文。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Quick recap of Week 3 core practical concepts:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>💡 Concept Synthesis</h4>\n                            <p>Interest = Money Rent ➡️ 1 碼 (25 bps) Hike ➡️ Time Value of Money ➡️ Avoid Revolving Card Traps ➡️ Understand Fed Cuts & Bond Basics.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": {
      "zh": "課後作業",
      "en": "Homework Assignment"
    },
    "title": {
      "zh": "Slide 29 | 本週課後作業說明：央行新聞閱讀與個人存款計畫",
      "en": "Slide 29 | Homework Guide: News Reading & Student Savings Plan"
    },
    "content": {
      "zh": "\n                    <p>請前往雙語網頁完成本週實務作業：</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📝 課堂實務作業填寫引導</h4>\n                            <p>1. 挑選一份近期央行升降息新聞，說明其對你個人學貸或生活費的影響。<br>2. 規劃你個人的 10 萬元存款擺放組合（數位高利活存與預備金比率）。</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Head over to the web app to complete your practical assignment:</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4>📝 Assignment Prompts</h4>\n                            <p>1. Select recent rate news and explain its impact on your student life.<br>2. Propose your $100k savings allocation between digital accounts and emergency cash.</p>\n                        </div>\n                    </div>\n                "
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": {
      "zh": "第四週預告",
      "en": "Next Week Preview"
    },
    "title": {
      "zh": "Slide 30 | 學習反思與第四週預告 (股票市場基礎與如何挑選第一支股票)",
      "en": "Slide 30 | Reflection & Next Week Preview (Stock Fundamentals & Buying Your First Stock)"
    },
    "content": {
      "zh": "\n                    <p>第三週學習順利完成！恭喜大家具備了基礎的利率與央行新聞素養！</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4> Preview 第四週主題預告</h4>\n                            <p>第四週我們將深入【股票市場基礎與如何挑選第一支股票】，用最白話的方式解密本益比 (P/E) 與台積電護城河，教大一新生如何零基礎開始理財！</p>\n                        </div>\n                    </div>\n                ",
      "en": "\n                    <p>Congratulations on completing Week 3! You now master interest rate news & savings basics!</p>\n                    <div class=\"slide-grid\">\n                        <div class=\"slide-card-box\">\n                            <h4> Preview Week 4 Topic Preview</h4>\n                            <p>Next week: 'Stock Market Fundamentals & How to Buy Your First Stock (P/E ratio & TSMC Moat)'!</p>\n                        </div>\n                    </div>\n                "
    }
  }
];

// Initialize Web App safely
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderSlide();
  renderGrid();
});

// Canvas Annotation Setup
function initCanvas() {
  canvas = document.getElementById('annotationCanvas');
  if (!canvas) return;
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
    const btn = document.getElementById('toolPen');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 3;
  } else if (tool === 'highlighter') {
    const btn = document.getElementById('toolHighlighter');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 16;
  } else {
    if (canvas) canvas.classList.remove('drawing-mode');
  }
}

function setPenColor(color, dot) {
  penColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  if (dot) dot.classList.add('active');
}

function clearCanvas() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(function(err){});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(function(err){});
    }
  }
}

function startDrawing(e) {
  if (currentTool === 'off' || !ctx || !canvas) return;
  isDrawing = true;
  ctx.beginPath();
  const rect = canvas.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!isDrawing || currentTool === 'off' || !ctx || !canvas) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  
  if (currentTool === 'highlighter') {
    ctx.strokeStyle = penColor + '66';
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
  if (btn) btn.classList.add('active');

  const filtered = activeHourFilter === 'all' ? slidesData : slidesData.filter(s => s.hour == activeHourFilter);
  if (filtered.length > 0) {
    currentSlideIndex = slidesData.findIndex(s => s.id === filtered[0].id);
  }
  renderSlide();
  renderGrid();
}

// Render Current Slide
function renderSlide() {
  clearCanvas();
  const slide = slidesData[currentSlideIndex];
  if (!slide) return;

  const container = document.getElementById('slideContainer');
  if (!container) return;

  const tagText = (slide.tag && slide.tag[currentLang]) ? slide.tag[currentLang] : '';
  const titleText = (slide.title && slide.title[currentLang]) ? slide.title[currentLang] : '';
  const contentText = (slide.content && slide.content[currentLang]) ? slide.content[currentLang] : '';
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

  const progressFill = document.getElementById('progressFill');
  if (progressFill) {
    const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }

  if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
    try {
      MathJax.typesetPromise().catch(function(e){});
    } catch(err) {}
  }
}

// Render 30 Slides Grid
function renderGrid() {
  const gridView = document.getElementById('slidesGridView');
  if (!gridView) return;

  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.toLowerCase() : '';

  let filtered = slidesData;
  if (activeHourFilter !== 'all') {
    filtered = filtered.filter(s => s.hour == activeHourFilter);
  }
  if (query) {
    filtered = filtered.filter(s => 
      (s.title[currentLang] && s.title[currentLang].toLowerCase().includes(query)) || 
      (s.content[currentLang] && s.content[currentLang].toLowerCase().includes(query))
    );
  }

  gridView.innerHTML = filtered.map(slide => {
    const slideIdx = slidesData.findIndex(s => s.id === slide.id);
    const cleanPreview = slide.content[currentLang] ? slide.content[currentLang].replace(/<[^>]*>?/gm, '') : '';
    return `
      <div class="mini-slide-card" onclick="goToSlide(${slideIdx})">
        <div class="mini-slide-num">SLIDE ${slide.id} • Hour ${slide.hour}</div>
        <div class="mini-slide-title">${slide.title[currentLang]}</div>
        <div class="mini-slide-preview">${cleanPreview}</div>
      </div>
    `;
  }).join('');
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
  if (index >= 0 && index < slidesData.length) {
    currentSlideIndex = index;
    renderSlide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function searchSlides() {
  renderGrid();
}

// Modals
function openActivity1Modal() {
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.add('active');
}
function closeActivity1Modal() {
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.remove('active');
}
function calculateLoanImpact() {
  const loanAmt = parseFloat(document.getElementById('loanAmtInput').value) || 400000;
  const hikeBps = parseFloat(document.getElementById('hikeBpsInput').value) || 0.25;
  const extraYearInterest = loanAmt * (hikeBps / 100);
  const bentos = Math.round(extraYearInterest / 100);

  const resEl = document.getElementById('loanImpactResult');
  if (resEl) resEl.innerText = `央行升息 ${CalculatedHike(hikeBps)}，每年多付利息：$${extraYearInterest.toFixed(0)} 元！相當於一年少吃 ${bentos} 個排骨便當！`;
}

function CalculatedHike(bps) {
  if (bps === 0.25) return "一碼 (0.25%)";
  if (bps === 0.125) return "半碼 (0.125%)";
  if (bps === 0.5) return "二碼 (0.50%)";
  return `${bps}%`;
}

function openActivity2Modal() {
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.add('active');
}
function closeActivity2Modal() {
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.remove('active');
}
function calculateInstallmentFee() {
  const price = parseFloat(document.getElementById('itemPriceInput').value) || 30000;
  const fee = parseFloat(document.getElementById('feeInput').value) || 1500;
  const months = parseFloat(document.getElementById('monthsInput').value) || 12;

  const apr = (((fee / price) / (months / 12)) * 100).toFixed(1);

  const resEl = document.getElementById('installmentResult');
  if (resEl) resEl.innerText = `看似免費的分期手續費 $${fee}元，折合真實年利率高達：${apr}%！遠高於銀行定存！`;
}

// Hour 3 Game
const w3GameQuestions = [
  {
    title_zh: "關卡 1：什麼是一碼？", title_en: "Level 1: What is a Basis Point?",
    news_zh: "『央行理監事會議宣佈「升息一碼」，請問銀行利息調高了多少百分比？』", news_en: "'Central Bank announced 1 quarter-point rate hike. How much is it in %?'",
    options_zh: ["0.25%", "1.00%"], options_en: ["0.25%", "1.00%"],
    answer: 0, explain_zh: "正確！一碼就是 0.25%，半碼就是 0.125%。", explain_en: "Correct! 1 quarter point equals 0.25%."
  },
  {
    title_zh: "關卡 2：刷卡分期陷阱", title_en: "Level 2: Credit Card Installments",
    news_zh: "『買 3 萬元手機選擇 12 期分期，另外收取手續費 1,500 元，這真的叫做「零利率」嗎？』", news_en: "'Buy $30k phone with $1.5k fee on 12-mo installment. Is it zero interest?'",
    options_zh: ["不是！手續費換算成真實年利率高達 9.2%，是業者話術陷阱", "是的，完全免費很划算"], options_en: ["No! The processing fee converts to a 9.2% real APR trap", "Yes, completely free"],
    answer: 0, explain_zh: "正確！手續費實質上就是換個名字收取的利息。", explain_en: "Correct! Processing fees are hidden interest costs."
  },
  {
    title_zh: "關卡 3：美聯儲降息影響", title_en: "Level 3: Fed Rate Cut Impact",
    news_zh: "『為什麼美國聯準會 (Fed) 宣佈「降息」時，台灣護國神山台積電與股市常大漲？』", news_en: "'Why do TSMC and Taiwan stocks rally when US Fed cuts rates?'",
    options_zh: ["降息讓全球美元資金變便宜，外資湧入台股買進科技龍頭", "降息代表美國經濟立刻崩盤"], options_en: ["Rate cuts make USD liquidity cheap, driving foreign capital into Tech", "Rate cuts mean immediate collapse"],
    answer: 0, explain_zh: "正確！美聯儲降息會開大全球資金水龍頭，推升股市買盤。", explain_en: "Correct! Cheap liquidity flows into equity markets."
  },
  {
    title_zh: "關卡 4：防詐利理密碼", title_en: "Level 4: Financial Fraud Defense",
    news_zh: "『如果 LINE 群組有人宣稱「保證零風險，每個月獲利 10%」，你應該？』", news_en: "'If a chat group promises Guaranteed Zero Risk 10% Monthly Return, you should?'",
    options_zh: ["這必定是龐氏騙局詐騙！連美國國債年利率也才 4% 左右", "趕快把學貸和積蓄通通投入"], options_en: ["It is 100% a Ponzi fraud! Even US Treasuries offer only ~4% yearly", "Invest student savings immediately"],
    answer: 0, explain_zh: "正確！高於無風險利率許多的保證獲利，百分之百是詐騙！", explain_en: "Correct! Anything far above the risk-free rate is fraud."
  }
];

let currentW3GameIndex = 0;
let w3GameScore = 0;

function openGameModal() {
  currentW3GameIndex = 0;
  w3GameScore = 0;
  const el = document.getElementById('gameModal');
  if (el) el.classList.add('active');
  renderW3GameQuestion();
}

function closeGameModal() {
  const el = document.getElementById('gameModal');
  if (el) el.classList.remove('active');
}

function renderW3GameQuestion() {
  const container = document.getElementById('gameQuestionContainer');
  if (!container) return;

  if (currentW3GameIndex >= w3GameQuestions.length) {
    container.innerHTML = `
      <div style="text-align:center; padding:2rem;">
        <h3 style="color:var(--accent-gold); font-size:1.8rem; margin-bottom:1rem;">🏆 恭喜完成第三週央行與荷包知識大挑戰！</h3>
        <p style="font-size:1.2rem; margin-bottom:1.5rem;">你的最終得分：<span style="color:var(--accent-rose); font-weight:700;">${w3GameScore} / 400 分</span></p>
        <p style="color:var(--text-sub); margin-bottom:2rem;">你已完全掌握利率生活常識、刷卡防詐與央行新聞！獲頒「生活財金達人徽章」。</p>
        <button class="btn btn-primary" onclick="closeGameModal()">完成並領取獎勵</button>
      </div>
    `;
    return;
  }

  const q = w3GameQuestions[currentW3GameIndex];
  const title = currentLang === 'zh' ? q.title_zh : q.title_en;
  const news = currentLang === 'zh' ? q.news_zh : q.news_en;
  const options = currentLang === 'zh' ? q.options_zh : q.options_en;

  container.innerHTML = `
    <div class="activity-box">
      <div style="font-size:0.9rem; color:var(--accent-gold); font-weight:700; margin-bottom:0.5rem;">${title} (關卡 ${currentW3GameIndex + 1} / 4)</div>
      <p style="font-size:1.1rem; font-weight:700; color:var(--text-main); margin-bottom:1.2rem;">${news}</p>
      <div style="display:flex; flex-direction:column; gap:0.75rem;">
        ${options.map((opt, idx) => `
          <button class="btn btn-outline" style="text-align:left; justify-content:flex-start; padding:0.75rem 1rem;" onclick="checkW3Answer(${idx})">
            ${idx === 0 ? 'A' : 'B'}. ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function checkW3Answer(selectedIdx) {
  const q = w3GameQuestions[currentW3GameIndex];
  const container = document.getElementById('gameQuestionContainer');
  const isCorrect = selectedIdx === q.answer;
  if (isCorrect) w3GameScore += 100;

  const explain = currentLang === 'zh' ? q.explain_zh : q.explain_en;

  container.innerHTML = `
    <div class="activity-box">
      <h3 style="color:${isCorrect ? 'var(--accent-emerald)' : 'var(--accent-rose)'}; margin-bottom:0.8rem;">
        ${isCorrect ? '🎉 回答正確！+100分' : '❌ 判斷錯誤！'}
      </h3>
      <p style="color:var(--text-main); font-size:1.05rem; margin-bottom:1.5rem;">${explain}</p>
      <button class="btn btn-primary" onclick="nextW3Question()">進入下一關卡 →</button>
    </div>
  `;
}

function nextW3Question() {
  currentW3GameIndex++;
  renderW3GameQuestion();
}

function openHomeworkModal() {
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.add('active');
}
function closeHomeworkModal() {
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.remove('active');
}
function submitW3Homework(e) {
  if (e) e.preventDefault();
  alert("🎉 第三週課堂實務作業已成功提交！得分已登錄至學習歷程。");
  closeHomeworkModal();
}
