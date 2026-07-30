/**
 * 115 學年度「管理探索二」第九週：保險基礎、風險管理與個人保障規劃
 * 雙語互動簡報系統、畫布工具、3大活動/小遊戲 Modal 與課堂作業
 */

const slidesData = [
  {
    "id": 1,
    "img": "images/w9_cover.jpg",
    "hour": 1,
    "tag": { "zh": "單元導論", "en": "Introduction" },
    "title": { "zh": "第九週課程導論：保險基礎、風險管理與個人保障規劃", "en": "Week 9 Intro: Insurance Fundamentals & Personal Risk Management" },
    "content": {
      "zh": "<div class=\"hero-box\"><h2>🛡️ 築起財富城牆：用極小代價轉嫁極大未知風險</h2><p>「保羅·薩繆爾森名言：保險不是為了讓你發財，而是為了防止你暴貧！(Insurance is not for making you rich, but for keeping you from turning poor!)」</p></div><p>歡迎來到第九週！期中過後，我們的財經探索進入「資產防禦與風險管理」領域。大一新鮮人剛滿 18 歲，騎機車通勤、打工上學，面臨人生第一波獨立風險。當意外或疾病不期而至時，如何用每年僅幾千元的極小保費，轉嫁動輒數十萬元的龐大醫療負擔？本單元將帶領大家拆解保險三大原則、實支實付改革與新鮮人保障金三角。</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 核心概念 1：風險轉嫁</h4><p>利用大數法則與保險機制，將無法承擔的巨額損失轉嫁給保險公司。</p></div><div class=\"concept-card\"><h4>📊 核心概念 2：保障金三角</h4><p>優先規劃意外險、實支實付醫療險與重大傷病險，拒絕高價人情保單。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 保險局 / 財團法人保險事業發展中心 (TII)</div>",
      "en": "<div class=\"hero-box\"><h2>🛡️ Building Wealth Defenses: Transferring Catastrophic Risk</h2><p>\"Paul Samuelson: Insurance isn't for making you rich; it prevents you from turning poor.\"</p></div><p>Welcome to Week 9! We enter personal risk management. College freshmen riding scooters and working part-time face real exposure to accidents and health risks. We will demystify insurance principles, medical reimbursement reforms, and smart freshmen coverage.</p><div class=\"concept-grid\"><div class=\"concept-card\"><h4>💡 Concept 1: Risk Transfer</h4><p>Leverage the Law of Large Numbers to transfer catastrophic losses at minimal cost.</p></div><div class=\"concept-card\"><h4>📊 Concept 2: Golden Triangle</h4><p>Prioritize accident, medical reimbursement, and major illness coverage over expensive policies.</p></div></div><div class=\"data-source-badge\">📌 Source: Insurance Bureau of the FSC / Taiwan Insurance Institute (TII)</div>"
    }
  },
  {
    "id": 2,
    "hour": 1,
    "tag": { "zh": "學習地圖", "en": "Roadmap" },
    "title": { "zh": "第九週 3 小時學習地圖與核心技能樹", "en": "Week 9 3-Hour Learning Roadmap & Skill Tree" },
    "content": {
      "zh": "<h3>🗺️ 本週 3 小時（180 分鐘）學習藍圖</h3><table class=\"data-table\"><thead><tr><th>授課時段</th><th>核心主題與 30 頁純教學卡片</th><th>專屬實務活動與互動 Modal</th></tr></thead><tbody><tr><td><b>第一小時 (00:00-00:50)</b></td><td><b>風險管理與保險三大基本原則</b> (Slide 01 - 10)<br>四象限風險矩陣、大數法則、保險利益、最大誠信據實說明、損害填補原則與全台投保數據</td><td>🎯 <b>1小時活動</b>：風險矩陣與應對策略檢測器</td></tr><tr><td><b>第二小時 (00:50-01:40)</b></td><td><b>新鮮人保障金三角與政策改革</b> (Slide 11 - 20)<br>機車通勤風險、意外險、實支實付醫療險雜費自費、金管會正本理賠改革、重大傷病與勞保強制險底護</td><td>🎯 <b>2小時活動</b>：實支實付醫療險理賠與自負額精算器</td></tr><tr><td><b>第三小時 (01:40-02:30)</b></td><td><b>保單算術與人情保單避坑實戰</b> (Slide 21 - 30)<br>定期險 vs 終身險保費點差、定期險+ETF雙贏算術、拒絕人情保單 4 金律、雙十原則與 3,000 元保單配置</td><td>🎮 <b>3小時小遊戲</b>：保險保障達人大挑戰 (4大關卡)<br>📝 <b>課堂實務作業</b>：個人保單需求評估與人情保單體檢</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程委員會規劃</div>",
      "en": "<h3>🗺️ Week 9 3-Hour Learning Roadmap</h3><table class=\"data-table\"><thead><tr><th>Time Slot</th><th>Core Topics & 30 Teaching Slides</th><th>Activities & Interactive Modals</th></tr></thead><tbody><tr><td><b>Hour 1 (00:00-00:50)</b></td><td><b>Risk Management & 3 Core Principles</b> (Slide 01 - 10)<br>Risk Matrix, Law of Large Numbers, Insurable Interest, Utmost Good Faith & Indemnity</td><td>🎯 <b>Hour 1 Activity</b>: Risk Matrix Strategy Checker</td></tr><tr><td><b>Hour 2 (00:50-01:40)</b></td><td><b>Freshmen Golden Triangle & Reforms</b> (Slide 11 - 20)<br>Scooter risks, Accident, Reimbursement Medical, FSC Original Receipt Reform & Social Safety</td><td>🎯 <b>Hour 2 Activity</b>: Medical Reimbursement Calculator</td></tr><tr><td><b>Hour 3 (01:40-02:30)</b></td><td><b>Policy Math & Avoiding Sales Traps</b> (Slide 21 - 30)<br>Term vs Whole Life Math, Term+ETF strategy, 4 Rules to reject guilt sales, $3,000 NTD budget plan</td><td>🎮 <b>Hour 3 Game</b>: Insurance Master Challenge<br>📝 <b>Class Assignment</b>: Freshmen Insurance Assessment Report</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Committee</div>"
    }
  },
  {
    "id": 3,
    "hour": 1,
    "tag": { "zh": "風險矩陣", "en": "Risk Matrix" },
    "title": { "zh": "什麼是風險 (Risk)？四象限風險管理矩陣 (Risk Matrix)", "en": "What Is Risk? The 4-Quadrant Risk Management Matrix" },
    "content": {
      "zh": "<h3>🎯 依據「發生頻率」與「損失程度」選擇最佳應對策略</h3><table class=\"data-table\"><thead><tr><th>風險特徵</th><th>損失程度：小 (Low Loss)</th><th>損失程度：大 (High Loss)</th></tr></thead><tbody><tr><td><b>頻率：高 (High Frequency)</b></td><td><b>【減輕 / 預防 (Reduction)】</b><br>例：騎車戴頭盔、打工戴護具。</td><td><b>【避免 / 規避 (Avoidance)】</b><br>例：絕不安裝飆車改裝品、不上詐騙網站。</td></tr><tr><td><b>頻率：低 (Low Frequency)</b></td><td><b>【承擔 / 自保 (Retention)】</b><br>例：遺失一把雨傘、手機刮傷自己付。</td><td><b>【轉嫁 / 保險 (Transfer)】</b> 🌟<br>例：嚴重車禍住院、重大疾病高額手術費。</td></tr></tbody></table><div class=\"highlight-box\">💡 <b>保險適用點</b>：保險專門用來處理<b>「發生頻率低、但一旦發生損失極大 (低頻高損)」</b>的災難型風險！</div><div class=\"data-source-badge\">📌 資料來源：薩繆爾森《風險管理與保險學》理論</div>",
      "en": "<h3>🎯 Selecting Strategies Based on Frequency & Severity</h3><table class=\"data-table\"><thead><tr><th>Risk Profile</th><th>Low Severity</th><th>High Severity</th></tr></thead><tbody><tr><td><b>High Frequency</b></td><td><b>Reduction / Prevention</b><br>e.g., Wearing helmets, safety gear.</td><td><b>Avoidance</b><br>e.g., Refusing illegal racing or phishing sites.</td></tr><tr><td><b>Low Frequency</b></td><td><b>Retention (Self-Insurance)</b><br>e.g., Losing an umbrella or scratching a phone.</td><td><b>Transfer (Insurance)</b> 🌟<br>e.g., Severe traffic accidents, cancer surgeries.</td></tr></tbody></table><div class=\"highlight-box\">💡 <b>Insurance Sweet Spot</b>: Insurance is designed specifically for <b>Low Frequency, High Severity</b> catastrophic risks!</div><div class=\"data-source-badge\">📌 Source: Samuelson's Risk Management & Insurance Principles</div>"
    }
  },
  {
    "id": 4,
    "hour": 1,
    "tag": { "zh": "大數法則", "en": "Law of Large Numbers" },
    "title": { "zh": "保險的本質：大數法則 (Law of Large Numbers) 與互助分攤", "en": "The Essence of Insurance: Law of Large Numbers" },
    "content": {
      "zh": "<h3>🤝 一人有難，萬人平攤：保險運作的數學基礎</h3><p><b>大數法則 (Law of Large Numbers)</b> 說明：當觀察的樣本數量足夠龐大時，隨機事件發生的概率會趨近於一個穩定的平均值。</p><div class=\"formula-box\">$$\\text{公平保費 (Fair Premium)} = \\frac{\\text{預期總理賠金額 (小明們的醫療費)}}{\\text{參與投保的總人數 (大數水庫)}} + \\text{保險公司營業費用}$$</div><p><b>數學實例</b>：10,000 名大學生每人每年繳交 500 元建立 500 萬元保險池。當其中 5 名學生不幸發生重大意外時，每人可獲得 100 萬元理賠，成功化解個人毀滅性風險！</p><div class=\"data-source-badge\">📌 資料來源：財團法人保險事業發展中心 (TII) 精算原理說明</div>",
      "en": "<h3>🤝 All for One, One for All: The Mathematical Foundation</h3><p>The <b>Law of Large Numbers</b> states that as sample sizes grow, random event probabilities converge to predictable averages.</p><div class=\"formula-box\">$$\\text{Fair Premium} = \\frac{\\text{Expected Total Claims}}{\\text{Total Insured Population}} + \\text{Operating Expenses}$$</div><p><b>Example</b>: 10,000 students paying $500 NTD each create a $5M pool to cover 5 catastrophic accidents at $1M each!</p><div class=\"data-source-badge\">📌 Source: Taiwan Insurance Institute (TII) Actuarial Science Guide</div>"
    }
  },
  {
    "id": 5,
    "hour": 1,
    "tag": { "zh": "保險利益", "en": "Insurable Interest" },
    "title": { "zh": "保險 3 大黃金原則 (一)：保險利益原則 (Insurable Interest)", "en": "Principle 1: Insurable Interest (Preventing Moral Hazard)" },
    "content": {
      "zh": "<h3>🚫 不能幫隔壁不認識的同學買人壽保險！</h3><p><b>保險利益原則 (Insurable Interest)</b> 規定：要保人對被保險人的生命或財產必須存在法律上認可的利害關係（如本人、配偶、直系血親、具經濟撫養關係者）。</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 避免賭博行為</h4><p>防止不相干的人利用他人生命進行賭博性投保發財。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🚫 杜絕道德風險 (Moral Hazard)</h4><p>防止有人為了詐領保險金而故意誘發謀殺或縱火等犯罪行為。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《保險法》第 16 條與第 17 條規定</div>",
      "en": "<h3>🚫 You Cannot Buy Life Insurance on Random Strangers!</h3><p><b>Insurable Interest</b> mandates that policyholders must have a legal economic interest in the insured's life or property (self, spouse, parents, children).</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Prevents Gambling</h4><p>Stops strangers from using insurance policies as gambling contracts.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🚫 Eliminates Moral Hazard</h4><p>Prevents bad actors from committing crimes or arson to claim payout money.</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Insurance Law Articles 16 & 17</div>"
    }
  },
  {
    "id": 6,
    "hour": 1,
    "tag": { "zh": "最大誠信", "en": "Utmost Good Faith" },
    "title": { "zh": "保險 3 大黃金原則 (二)：最大誠信原則與據實說明義務", "en": "Principle 2: Utmost Good Faith & Disclosure Duty" },
    "content": {
      "zh": "<h3>📝 買保險填寫健康告知書，隱瞞病史後果超嚴重！</h3><p><b>最大誠信原則 (Utmost Good Faith)</b> 要求投保時雙方必須極致坦誠。《保險法》第 64 條規定要保人有<b>據實說明義務</b>：</p><ul><li><b>健康告知書填寫</b>：必須據實告知近 2~5 年內的住院、手術、癌症或慢性病史。</li><li><b>隱瞞告知的違約後果</b>：若故意隱瞞病史，保險公司在 2 年內發現可<b>直接解除合約，且一毛理賠金都不給、亦不退還已繳保費！</b></li></ul><div class=\"data-source-badge\">📌 資料來源：中華民國《保險法》第 64 條據實說明條款與裁決案例</div>",
      "en": "<h3>📝 Hiding Pre-Existing Conditions Can Nullify Your Coverage!</h3><p><b>Utmost Good Faith</b> mandates complete honesty. Insurance Law Article 64 specifies the <b>Duty of Disclosure</b>:</p><ul><li><b>Health Declaration</b>: Must truthfully disclose surgeries, hospitalizations, or chronic conditions over the past 2-5 years.</li><li><b>Consequences of Fraud</b>: Insurers can <b>cancel policies within 2 years with ZERO payout and NO premium refund</b>!</li></ul><div class=\"data-source-badge\">📌 Source: ROC Insurance Law Article 64 Disclosures</div>"
    }
  },
  {
    "id": 7,
    "hour": 1,
    "tag": { "zh": "損害填補", "en": "Indemnity Principle" },
    "title": { "zh": "保險 3 大黃金原則 (三)：損害填補原則 (Indemnity Principle)", "en": "Principle 3: Indemnity Principle (No Unjust Enrichment)" },
    "content": {
      "zh": "<h3>⚖️ 保險是補償損失，不是讓你趁機賺錢的工具！</h3><p><b>損害填補原則 (Indemnity Principle)</b> 規定：財產保險與實支實付型險種的理賠金額，最高以<b>「實際發生的損失金額」為上限</b>，禁止不當得利！</p><div class=\"formula-box\">$$\\text{理賠上限 (Max Payout)} = \\min(\\text{實際醫療自費金額}, \\text{保單約定限額})$$</div><p><b>實例</b>：車禍住院實際自費花了 5 萬元。即使你買了 3 張實支實付保單，總理賠金最高就是填補這 5 萬元損失，不能靠住院多賺 10 萬元！</p><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 損害填補原則規範</div>",
      "en": "<h3>⚖️ Insurance Compensates Losses; It Cannot Be a Profit Center!</h3><p>The <b>Indemnity Principle</b> caps payouts at the <b>actual financial loss incurred</b>, forbidding unjust enrichment!</p><div class=\"formula-box\">$$\\text{Max Payout} = \\min(\\text{Actual Out-of-Pocket Expense}, \\text{Policy Cap})$$</div><p><b>Example</b>: If your medical bill is $50,000 NTD, payouts across policies are capped at $50,000 NTD total!</p><div class=\"data-source-badge\">📌 Source: Insurance Bureau of the FSC Indemnity Rules</div>"
    }
  },
  {
    "id": 8,
    "hour": 1,
    "tag": { "zh": "投保數據", "en": "Insurance Data" },
    "title": { "zh": "實證數據：台灣人平均每人持有 2.6 張壽險保單", "en": "Empirical Data: Taiwanese Hold 2.6 Life Insurance Policies Average" },
    "content": {
      "zh": "<h3>🇹🇼 全球投保率前段班！台灣人壽險滲透率統計</h3><p>根據保險事業發展中心 (TII) 2026 最新官方統計：</p><table class=\"data-table\"><thead><tr><th>統計指標</th><th>台灣官方實證數據</th><th>國際排名與現象剖析</th></tr></thead><tbody><tr><td><b>人身保險投保率</b></td><td><b>260% 以上</b></td><td><b>全球第一梯隊！</b>平均每位國人持有 2.6 張以上保單。</td></tr><tr><td><b>保險滲透率 (保費/GDP)</b></td><td><b>約 12.5%</b></td><td>遠高於全球平均 (6.8%)；但大部分保費花在「儲蓄險」而非真正保障。</td></tr><tr><td><b>新鮮人常見痛點</b></td><td>買了一堆高價終身儲蓄險</td><td>保障極低（意外保障不足）、保費負擔過重壓垮生活。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財團法人保險事業發展中心 (TII) 人身保險業統計年報</div>",
      "en": "<h3>🇹🇼 Taiwan Ranks Top Globally in Insurance Density</h3><p>Taiwan Insurance Institute (TII) Official Data shows:</p><table class=\"data-table\"><thead><tr><th>Metric</th><th>Taiwan Empirical Data</th><th>Global Analysis & Insights</th></tr></thead><tbody><tr><td><b>Life Insurance Coverage Rate</b></td><td><b>> 260%</b></td><td><b>Global Top Tier!</b> Average 2.6 policies per citizen.</td></tr><tr><td><b>Insurance Penetration (Premium/GDP)</b></td><td><b>~12.5%</b></td><td>Dwarfs global average (6.8%); yet mostly spent on savings plans.</td></tr><tr><td><b>Freshman Pain Point</b></td><td>Bought expensive savings plans</td><td>Low real coverage with heavy premium burdens crushing monthly budgets.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Taiwan Insurance Institute (TII) Annual Report</div>"
    }
  },
  {
    "id": 9,
    "hour": 1,
    "tag": { "zh": "保單 4 角色", "en": "4 Policy Roles" },
    "title": { "zh": "保險合約 4 大關鍵角色：要保人、被保險人、受益人與保險公司", "en": "4 Key Roles in Insurance Contracts" },
    "content": {
      "zh": "<h3>📜 看懂保單契約書上的四大主體關係</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 要保人 (Policyholder)</h4><p><b>出錢繳保費的人</b>。擁有修改條款、解約與指定受益人的權利。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 被保險人 (Insured)</h4><p><b>保障標的人體</b>。事故發生在其身上時啟動理賠（如大一學生小明）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. 受益人 (Beneficiary)</h4><p><b>領理賠金的人</b>。身故保險金可指定父母/法定繼承人。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>4. 保險公司 (Insurer)</h4><p><b>承擔風險的機構</b>。收取保費並依約給付理賠金。</p></div></div><div class=\"data-source-badge\">📌 資料來源：中華民國《保險法》保險契約基本定義</div>",
      "en": "<h3>📜 4 Key Parties in Insurance Contracts</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Policyholder (要保人)</h4><p><b>Pays the premiums</b>. Holds rights to modify or cancel the contract.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Insured (被保險人)</h4><p><b>The covered person</b>. Claims are triggered by events happening to this person.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>3. Beneficiary (受益人)</h4><p><b>Receives the payout</b>. Specified for death benefits (parents/legal heirs).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-purple);\"><h4>4. Insurer (保險公司)</h4><p><b>Risk-bearing institution</b>. Collects premiums and pays claims per contract.</p></div></div><div class=\"data-source-badge\">📌 Source: ROC Insurance Law Contract Definitions</div>"
    }
  },
  {
    "id": 10,
    "hour": 1,
    "tag": { "zh": "小結與活動", "en": "Hour 1 Summary" },
    "title": { "zh": "第一小時小結與專屬活動預告", "en": "Hour 1 Summary & Activity 1 Preview" },
    "content": {
      "zh": "<h3>✅ 第一小時重點複習</h3><ul><li><b>風險矩陣</b>：保險專門處理「低頻率、高損失」的災難型風險。</li><li><b>保險 3 大原則</b>：保險利益（防賭博）、最大誠信（據實說明病史）、損害填補（防不當得利）。</li><li><b>合約主體</b>：要保人付錢、被保險人受保障、受益人領錢。</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>第一小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 1小時活動: 風險矩陣檢測」</b> 按鈕，輸入生活中遭遇的風險情境，判定屬於哪一象限並選擇最佳應對策略！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 1 Summary</h3><ul><li><b>Risk Matrix</b>: Insurance targets Low Frequency, High Severity catastrophic risks.</li><li><b>3 Principles</b>: Insurable Interest, Utmost Good Faith, Indemnity.</li><li><b>Contract Roles</b>: Policyholder pays, Insured is covered, Beneficiary receives payouts.</li></ul><div class=\"highlight-box\" style=\"background: rgba(16, 185, 129, 0.15); border-left: 4px solid var(--accent-emerald);\">🎯 <b>Hour 1 Activity Preview</b>: Click the <b>\"🎯 Hour 1 Activity\"</b> button to test your risk matrix strategies!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 11,
    "hour": 2,
    "tag": { "zh": "新鮮人高風險", "en": "Freshman Risks" },
    "title": { "zh": "大一新鮮人高風險場景：機車通勤與打工傷害剖析", "en": "Freshman High-Risk Scenarios: Scooter Commutes & Part-Time Injuries" },
    "content": {
      "zh": "<h3>🛵 18 歲大一新鮮人最常面臨的兩大現實風險事故</h3><ul><li><b>機車交通事故 (Traffic Accidents)</b>：內政部警政署統計，18-24 歲機車傷亡率居各年齡層之冠！摔車擦傷、骨折住院與雷雷撞車事故頻傳。</li><li><b>打工與運動傷害 (Workplace & Sports Injuries)</b>：餐廳打工燙傷、搬重物拉傷、籃球運動韌帶斷裂，導致醫療費用與無法打工的薪資損失。</li></ul><div class=\"highlight-box\">💡 <b>結論</b>：大一新鮮人買保險的第一優先順序，絕對是<b>「意外險 + 意外醫療實支實付」</b>！</div><div class=\"data-source-badge\">📌 資料來源：內政部警政署交通統計與勞動部職業災害統計</div>",
      "en": "<h3>🛵 Top 2 Real-Life Risks Facing 18-Year-Old College Freshmen</h3><ul><li><b>Scooter Traffic Accidents</b>: NPA stats show 18-24 age group has the highest scooter casualty rate!</li><li><b>Work & Sports Injuries</b>: Restaurant burns, lifting strains, ligament tears leading to medical costs and lost work hours.</li></ul><div class=\"highlight-box\">💡 <b>Conclusion</b>: The #1 coverage priority for college freshmen is <b>Accident Insurance + Accident Medical Reimbursement</b>!</div><div class=\"data-source-badge\">📌 Source: NPA Traffic Statistics & Ministry of Labor Occupational Safety Reports</div>"
    }
  },
  {
    "id": 12,
    "hour": 2,
    "tag": { "zh": "意外險", "en": "Accident Coverage" },
    "title": { "zh": "新鮮人保障金三角 (一)：意外險 (Accident Insurance)", "en": "Golden Triangle 1: Accident Insurance" },
    "content": {
      "zh": "<h3>⚡ 便宜又大碗！大一新鮮人必備的第一張防護網</h3><p><b>傷害保險（意外險）</b>定義：必須同時符合<b>「外來的、突發的、非疾病的」</b>三大要素。</p><table class=\"data-table\"><thead><tr><th>意外險保障項目</th><th>給付內容與實例</th><th>預算建議 (年保費)</th></tr></thead><tbody><tr><td><b>意外身故 / 失能保額</b></td><td>因意外身故或失能（按失能等級 1-11 級比例給付 100%~5%）。</td><td>保額 200 萬，約 1,000~1,500 元。</td></tr><tr><td><b>意外醫療實支實付 (傷害醫療)</b></td><td>摔車看門診、骨折照 X 光自費藥膏，憑收據實報實銷。</td><td>保額 5 萬，約 500~800 元。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：金管會保險局傷害保險單示範條款</div>",
      "en": "<h3>⚡ High Coverage, Low Cost! The #1 Safety Net for Freshmen</h3><p><b>Accident Insurance</b> requires 3 elements: <b>External, Sudden, and Non-Disease</b>.</p><table class=\"data-table\"><thead><tr><th>Accident Coverage</th><th>Benefit & Practical Examples</th><th>Budget (Annual Premium)</th></tr></thead><tbody><tr><td><b>Accident Death / Disability</b></td><td>Disability payouts scaled 100%-5% across levels 1-11.</td><td>$2M coverage: ~$1,000-$1,500 NTD/yr.</td></tr><tr><td><b>Accident Medical Reimbursement</b></td><td>Outpatient care, X-rays, bandages paid via receipts.</td><td>$50k coverage: ~$500-$800 NTD/yr.</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: FSC Insurance Bureau Standard Accident Policy Terms</div>"
    }
  },
  {
    "id": 13,
    "hour": 2,
    "tag": { "zh": "實支實付醫療", "en": "Reimbursement Medical" },
    "title": { "zh": "新鮮人保障金三角 (二)：實支實付醫療險 (Reimbursement Medical)", "en": "Golden Triangle 2: Reimbursement Medical Insurance" },
    "content": {
      "zh": "<h3>🏥 解決昂貴健保自費項目（微創手術、達文西、自費醫材）</h3><p>傳統日額型醫療險（住院一天給 1,000 元）已無法應對現代「住院天數短、自費材料貴」的醫療趨勢。<b>實支實付醫療險</b>包含三大核心：</p><ul><li><b>1. 病房費限額</b>：補貼升等單人/雙人病房差額（如每天 2,000 元）。</li><li><b>2. 手術費限額</b>：補貼自費微創手術（如 10 萬元）。</li><li><b>3. 醫療雜費限額 (核心!)</b>：補貼最昂貴的自費藥物、人工水晶體、心臟支架（如 15-20 萬元）。</li></ul><div class=\"data-source-badge\">📌 資料來源：中華民國人壽保險商業同業公會實支實付條款說明</div>",
      "en": "<h3>🏥 Covering Expensive Self-Paid Medical Upgrades</h3><p>Traditional daily-rate policies ($1,000/day) fail against modern short stays and expensive self-paid items. <b>Reimbursement Medical</b> covers 3 pillars:</p><ul><li><b>1. Room Fee Cap</b>: Subsidizes private room upgrades ($2,000/day).</li><li><b>2. Surgery Cap</b>: Covers self-paid minimally invasive surgeries ($100k).</li><li><b>3. Medical Expense Cap (Core!)</b>: Covers expensive self-paid drugs and implants ($150k-$200k).</li></ul><div class=\"data-source-badge\">📌 Source: Life Insurance Association ROC Guidelines</div>"
    }
  },
  {
    "id": 14,
    "img": "images/w9_risk_matrix.jpg",
    "hour": 2,
    "tag": { "zh": "正本理賠改革", "en": "Original Receipt Reform" },
    "title": { "zh": "2026 最新政策：金管會實支實付醫療險「正本理賠」改革真相", "en": "2026 Policy Reform: FSC Original Receipt Reimbursement Rules" },
    "content": {
      "zh": "<h3>📜 告別「副本雙理賠靠保險賺錢」時代！回歸損害填補</h3><p>金管會為了落實「損害填補原則」並遏止保費暴漲，全面推動實支實付醫療險<b>正本理賠與差額負擔改革</b>：</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 過去舊制 (副本雙理賠)</h4><p>拿醫院蓋章副本收據同時向 2 家保險公司申請，花 5 萬理賠 10 萬（靠保險賺錢）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 2026 新制 (正本與差額填補)</h4><p>必須使用<b>醫院原始正本收據</b>！第一家賠不足部分，由第二家開立差額證明填補，總理賠金不超過實際花費。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融監督管理委員會 (FSC) 實支實付醫療險改革公告</div>",
      "en": "<h3>📜 Ending Profit-Seeking Duplicate Claims: Back to Indemnity</h3><p>The FSC reformed medical reimbursement policies to enforce the Indemnity Principle:</p><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Past Old Rules</h4><p>Submitting duplicate receipts to 2 insurers to claim $100k on a $50k bill (Profiteering).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 2026 New Rules</h4><p>Must provide <b>Original Hospital Receipts</b>! Total payouts across insurers are capped at real out-of-pocket expenses.</p></div></div><div class=\"data-source-badge\">📌 Source: Insurance Bureau of the FSC Reform Announcement</div>"
    }
  },
  {
    "id": 15,
    "hour": 2,
    "tag": { "zh": "重大傷病險", "en": "Major Illness" },
    "title": { "zh": "新鮮人保障金三角 (三)：重大傷病險 (Major Illness)", "en": "Golden Triangle 3: Major Illness Insurance" },
    "content": {
      "zh": "<h3>💳 憑健保「重大傷病卡」一次給付 100 萬元！</h3><p><b>重大傷病險</b>理賠範圍直接連結衛生福利部健保「重大傷病卡」（涵蓋癌症、罕見疾病、慢性精神病等 300 多項重大疾病）：</p><ul><li><b>一次性高額給付</b>：只要取得重大傷病卡，保險公司立刻一次給付 100 萬元現金！</li><li><b>資金高度自由</b>：不限於住院或特定醫療項目，可用於昂貴標靶藥物、看護費、營養品或休養期間生活費。</li></ul><div class=\"data-source-badge\">📌 資料來源：衛生福利部中央健康保險署重大傷病範圍</div>",
      "en": "<h3>💳 Single $1M Lump-Sum Payout Upon Major Illness Card Issue</h3><p><b>Major Illness Insurance</b> links directly to the MOHW Major Illness Card (covering 300+ conditions including cancer):</p><ul><li><b>Lump-Sum Cash Payout</b>: Insurer pays $1,000,000 NTD cash immediately upon card issuance!</li><li><b>Complete Spending Freedom</b>: Funds can be used for targeted therapies, nursing, or living expenses.</li></ul><div class=\"data-source-badge\">📌 Source: MOHW National Health Insurance Major Illness Coverage Rules</div>"
    }
  },
  {
    "id": 16,
    "hour": 2,
    "tag": { "zh": "勞保與強制險", "en": "Labor & Auto Insurance" },
    "title": { "zh": "勞保 (Labor Insurance) 與機車強制險 (Compulsory Auto) 底層防護", "en": "Labor Insurance & Compulsory Auto Insurance Safety Net" },
    "content": {
      "zh": "<h3>🛡️ 別忘了你已經擁有的法定基本社會保險底護</h3><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🛵 1. 機車強制險 (Compulsory Auto)</h4><p>政府強制投保！保障車禍「對方受害者」體傷最高 20 萬元、身故失能最高 200 萬元。</p></div><div class=\"concept-card\"><h4>💼 2. 勞工保險 (Labor Insurance)</h4><p>大一打工族店家依法必須申報！提供職災傷病給付、失能與職業傷害醫療補助。</p></div></div><div class=\"highlight-box\">💡 <b>商業保險角色</b>：商業保險是用來補足勞保與強制險「保障額度不足」的中高層缺口！</div><div class=\"data-source-badge\">📌 資料來源：勞動部勞工保險局 & 財產保險商業同業公會</div>",
      "en": "<h3>🛡️ Statutory Social Insurance Nets You Already Own</h3><div class=\"concept-grid\"><div class=\"concept-card\"><h4>🛵 1. Compulsory Auto Insurance</h4><p>Mandatory! Covers third-party injury up to $200k NTD and death/disability up to $2M NTD.</p></div><div class=\"concept-card\"><h4>💼 2. Labor Insurance</h4><p>Mandatory for part-time jobs! Provides occupational injury medical and disability benefits.</p></div></div><div class=\"highlight-box\">💡 <b>Commercial Insurance Role</b>: Commercial policies fill the coverage gap left above statutory social nets!</div><div class=\"data-source-badge\">📌 Source: Bureau of Labor Insurance & Non-Life Insurance Association</div>"
    }
  },
  {
    "id": 17,
    "hour": 2,
    "tag": { "zh": "學團險權益", "en": "Student Insurance" },
    "title": { "zh": "學生團體保險 (Student Group Insurance) 的隱形權益與申請", "en": "Unlocking Your Student Group Insurance Benefits" },
    "content": {
      "zh": "<h3>🏫 每學期學雜費單裡的 500 元，包含高CP值保障！</h3><p>大一新鮮人每學期隨學雜費繳納的<b>學生團體保險 (學團險)</b> 具備極高性價比：</p><ul><li><b>保障範圍</b>：疾病或意外住院門診、意外失能與身故。</li><li><b>自負額與起賠門檻</b>：一般住院或意外醫療金額超過門檻（如 500 元）即可憑收據與診斷書向學校衛保組申請理賠補助！</li></ul><div class=\"data-source-badge\">📌 資料來源：教育部學生團體保險大專校院作業要點</div>",
      "en": "<h3>🏫 High Value Coverage Hidden in Your Semester Tuition Bill</h3><p>Your semester <b>Student Group Insurance</b> offers remarkable value:</p><ul><li><b>Coverage Scope</b>: Hospitalization, accidental medical, disability, and death benefits.</li><li><b>Claim Process</b>: Medical costs exceeding low deductibles ($500 NTD) can be claimed via the campus health center!</li></ul><div class=\"data-source-badge\">📌 Source: Ministry of Education Student Group Insurance Guidelines</div>"
    }
  },
  {
    "id": 18,
    "hour": 2,
    "tag": { "zh": "除外與等待期", "en": "Exclusions & Waiting" },
    "title": { "zh": "理賠爭議防範：除外責任 (Exclusions) 與等待期 (Waiting Period)", "en": "Avoiding Claim Disputes: Exclusions & Waiting Periods" },
    "content": {
      "zh": "<h3>⚠️ 為什麼申請理賠會被保險公司拒絕？看清條款陷阱</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🚫 1. 除外責任 (Exclusions)</h4><p>故意行為（自殘）、犯罪行為、非法酒駕、整形美容或無必要之療養住院，保險公司不給付！</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⏳ 2. 等待期 (Waiting Period)</h4><p>醫療險保單生效後通常有 <b>30 天等待期</b>（癌症險常為 90 天），等待期內發病的疾病不理賠。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融消費評議中心 (FOI) 保險理賠爭議案例彙編</div>",
      "en": "<h3>⚠️ Why Do Insurers Deny Claims? Understanding Policy Fine Print</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>🚫 1. Exclusions (除外責任)</h4><p>Self-harm, criminal acts, drunk driving, cosmetic surgeries, or unneeded stays are excluded!</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-gold);\"><h4>⏳ 2. Waiting Periods (等待期)</h4><p>Medical policies feature a <b>30-day waiting period</b> (90 days for cancer); illnesses during this window aren't covered.</p></div></div><div class=\"data-source-badge\">📌 Source: Financial Ombudsman Institution (FOI) Dispute Cases</div>"
    }
  },
  {
    "id": 19,
    "hour": 2,
    "tag": { "zh": "健全保單原則", "en": "Policy Principles" },
    "title": { "zh": "健全保單設計三大原則：先保障後儲蓄、先近後遠、先大後小", "en": "3 Principles of Sound Insurance Design" },
    "content": {
      "zh": "<h3>🎯 避免買錯保單、多花冤枉錢的理財指標</h3><ol><li><b>先保障、後儲蓄</b>：先用低保費買足高額風險保障（意外+醫療），有餘力再考慮儲蓄投資。</li><li><b>先近後遠</b>：優先解決大一當下 1-5 年內可能發生的現實風險，而非 50 年後的退休問題。</li><li><b>先大後小</b>：優先防範家庭無法承受的大災難（殘廢失能、癌症），而非小額門診感冒。</li></ol><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 個人保險規劃標準原則</div>",
      "en": "<h3>🎯 Guidelines to Avoid Buying the Wrong Policies</h3><ol><li><b>Protection First, Savings Later</b>: Secure high coverage (Accident + Medical) before touching savings plans.</li><li><b>Present Risks First</b>: Address immediate 1-5 year risks over 50-year distant retirement.</li><li><b>Catastrophic First</b>: Prioritize catastrophic risks (Disability, Cancer) over minor outpatient visits.</li></ol><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) Standards</div>"
    }
  },
  {
    "id": 20,
    "hour": 2,
    "tag": { "zh": "小結與活動", "en": "Hour 2 Summary" },
    "title": { "zh": "第二小時小結與專屬活動預告", "en": "Hour 2 Summary & Activity 2 Preview" },
    "content": {
      "zh": "<h3>✅ 第二小時重點複習</h3><ul><li><b>保障金三角</b>：意外險 (身故/失能/實支) + 實支實付醫療險 (病房/手術/雜費) + 重大傷病險 (一次給付 100 萬)。</li><li><b>2026 正本理賠改革</b>：實支實付回歸損害填補，使用正本與差額證明，不靠保險賺錢。</li><li><b>底層防護</b>：善用機車強制險、勞保職災與學團險；遵循「先保障後儲蓄」原則。</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>第二小時專屬活動預告</b>：請點擊 navbar 上的 <b>「🎯 2小時活動: 理賠精算器」</b> 按鈕，輸入手術與自費雜費金額，精算實支實付醫療險理賠補貼！</div><div class=\"data-source-badge\">📌 資料來源：115管理探索二團隊建置</div>",
      "en": "<h3>✅ Hour 2 Summary</h3><ul><li><b>Golden Triangle</b>: Accident + Reimbursement Medical + Major Illness ($1M lump sum).</li><li><b>2026 Reform</b>: Original receipt rule reinforces Indemnity Principle; no double profiting.</li><li><b>Social Nets</b>: Leverage Compulsory Auto, Labor Insurance & Student Insurance first.</li></ul><div class=\"highlight-box\" style=\"background: rgba(168, 85, 247, 0.15); border-left: 4px solid var(--accent-purple);\">🎯 <b>Hour 2 Activity Preview</b>: Click the <b>\"🎯 Hour 2 Activity\"</b> button to calculate medical reimbursement payouts!</div><div class=\"data-source-badge\">📌 Source: Management Exploration II Team</div>"
    }
  },
  {
    "id": 21,
    "hour": 3,
    "tag": { "zh": "定期 vs 終身", "en": "Term vs Whole Life" },
    "title": { "zh": "定期險 (Term) vs. 終身險 (Whole Life) 保費點差大解密", "en": "Term vs. Whole Life Insurance: The Huge Premium Gap" },
    "content": {
      "zh": "<h3>💰 相同的 100 萬元身故保障，保費相差高達 5~10 倍！</h3><table class=\"data-table\"><thead><tr><th>保單類型</th><th>保障年限與保費特徵</th><th>20歲新鮮人保費算術比對</th></tr></thead><tbody><tr><td><b>定期險 (Term Insurance)</b></td><td>保障指定期間（如 1 年期每年續保）。<b>保費極度便宜！</b></td><td><b>每年僅需約 1,000~1,500 元！</b>（高槓桿保障）。</td></tr><tr><td><b>終身險 (Whole Life Insurance)</b></td><td>繳費 20 年保障一輩子（內含解約金/積蓄）。<b>保費極度昂貴！</b></td><td><b>每年高達 25,000~35,000 元！</b>（壓垮大一學生）。</td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：財團法人保險事業發展中心 (TII) 費率比對數據</div>",
      "en": "<h3>💰 For $1M Coverage, Premiums Differ by 5-10x!</h3><table class=\"data-table\"><thead><tr><th>Policy Type</th><th>Term & Premium Structure</th><th>Age 20 Premium Comparison</th></tr></thead><tbody><tr><td><b>Term Insurance (定期險)</b></td><td>Covers specific periods (e.g. 1-yr renewable). <b>Extremely Cheap!</b></td><td><b>Only ~$1,000-$1,500 NTD/yr!</b> (High Leverage).</td></tr><tr><td><b>Whole Life Insurance (終身險)</b></td><td>Pay 20 yrs for lifetime cover (includes cash value). <b>Extremely Expensive!</b></td><td><b>Costs $25,000-$35,000 NTD/yr!</b> (Crushes student budgets).</td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Taiwan Insurance Institute Rate Comparison Data</div>"
    }
  },
  {
    "id": 22,
    "hour": 3,
    "tag": { "zh": "定期+ETF策略", "en": "Term + ETF Strategy" },
    "title": { "zh": "「先定期、後終身」理財算術：用省下的保費做 0050 ETF 定期定額", "en": "\"Buy Term & Invest Difference\": Term + ETF Strategy" },
    "content": {
      "zh": "<h3>🚀 聰明理財者的雙贏解法：買定期險 + 投資全市場 ETF</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ 傳統買終身險做法</h4><p>每年硬繳 30,000 元買終身醫療險。20 年共繳 60 萬元，得到低額醫療保障，手頭無任何流動積蓄。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ 買定期+投資 ETF 做法</h4><p>每年花 3,000 元買高額定期險。將省下的 27,000 元定期定額買 0050/VOO ETF！20 年後獲得<b>高額保障 + 破百萬元股票資產！</b></p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) \"Buy Term and Invest the Difference\" 試算</div>",
      "en": "<h3>🚀 Smart Strategy: Buy Term and Invest the Difference</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-rose);\"><h4>❌ Traditional Whole Life</h4><p>Paying $30k/yr for 20 years ($600k total) for low coverage and zero liquid wealth.</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>✅ Buy Term + Invest ETF</h4><p>Pay $3k/yr for Term. Invest the remaining $27k/yr into 0050 ETF! 20 yrs later = <b>High Coverage + $1M+ Investment Wealth!</b></p></div></div><div class=\"data-source-badge\">📌 Source: CFP \"Buy Term & Invest Difference\" Calculations</div>"
    }
  },
  {
    "id": 23,
    "hour": 3,
    "tag": { "zh": "拒絕人情保單", "en": "Reject Sales Traps" },
    "title": { "zh": "拒絕人情保單 4 大金律：不買聽不懂的保單、不為人情買高額終身險", "en": "4 Rules to Reject Guilt Sales & Bad Insurance Proposals" },
    "content": {
      "zh": "<h3>🛡️ 親戚阿姨找你買保險時的理性拒絕防線</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🚫 1. 聽不懂的絕對不買</h4><p>如果業務員講半天你搞不懂理賠條件與除外責任，堅決不簽字！</p></div><div class=\"concept-card\"><h4>🚫 2. 拒絕高額人情終身險</h4><p>不為同情人情而簽下每年數萬元的終身保單，避免壓垮自己生活。</p></div><div class=\"concept-card\"><h4>📜 3. 善用 10 天審閱期契撤權</h4><p>收到保單 10 天內享有<b>法定契約撤銷權</b>，可無條件退還全額已繳保費！</p></div><div class=\"concept-card\"><h4>🔍 4. 索取保單條款明細</h4><p>堅持看過保單條款示範文字，不輕信口頭承諾或話術。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金融消費評議中心 (FOI) 消費者自我保護原則</div>",
      "en": "<h3>🛡️ Defensive Rules When Relatives Push Insurance Products</h3><div class=\"info-grid\" style=\"display:grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;\"><div class=\"concept-card\"><h4>🚫 1. Never Buy What You Don't Understand</h4><p>If policy terms sound confusing, refuse to sign!</p></div><div class=\"concept-card\"><h4>🚫 2. Reject Expensive Whole Life Policies</h4><p>Don't sign $30k/yr lifetime policies out of guilt or pity.</p></div><div class=\"concept-card\"><h4>📜 3. Leverage the 10-Day Right of Cancellation</h4><p>You hold a statutory <b>10-day right of rescission</b> upon policy delivery for 100% refunds!</p></div><div class=\"concept-card\"><h4>🔍 4. Demand Policy Fine Print</h4><p>Insist on reading official contract terms over verbal promises.</p></div></div><div class=\"data-source-badge\">📌 Source: FOI Consumer Protection Guidelines</div>"
    }
  },
  {
    "id": 24,
    "hour": 3,
    "tag": { "zh": "雙十原則", "en": "10-10 Rule" },
    "title": { "zh": "保費預算黃金比例：雙十原則 (保額 10 倍收入，保費不超過 10%)", "en": "The 10-10 Rule: Optimal Insurance Budget Proportions" },
    "content": {
      "zh": "<h3>📐 衡量個人保險預算是否合理的權威黃金法則</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. 壽險與身故保額 = 年收入 10 倍</h4><p>保障個人失能或身故後，家庭具備 10 年緩衝適應期（如年收 40 萬 ➔ 保額 400 萬）。</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. 每年保費支出 <= 年收入 10%</h4><p>年保費絕不可超過年收入一成！大一學生打工年收 10 萬，保費應控制在 <b>3,000~5,000 元</b> 內。</p></div></div><div class=\"data-source-badge\">📌 資料來源：理財規劃師 (CFP) 雙十原則 (10-10 Rule)</div>",
      "en": "<h3>📐 The Golden Rule for Insurance Budgeting</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary);\"><h4>1. Life Coverage = 10x Annual Income</h4><p>Provides a 10-year buffer for your family in case of disability/death ($400k income -> $4M coverage).</p></div><div class=\"concept-card\" style=\"border-top: 4px solid var(--accent-emerald);\"><h4>2. Annual Premium <= 10% Annual Income</h4><p>Keep premiums below 10%! For a student earning $100k, keep premiums under <b>$3,000-$5,000 NTD/yr</b>.</p></div></div><div class=\"data-source-badge\">📌 Source: Certified Financial Planner (CFP) 10-10 Rule</div>"
    }
  },
  {
    "id": 25,
    "hour": 3,
    "tag": { "zh": "官方保險數據", "en": "Insurance DBs" },
    "title": { "zh": "實證數據調取：金管會保險局 (FSC) 與保險事業發展中心 (TII) 查閱", "en": "Retrieving Official Data: FSC Insurance Bureau & TII Portals" },
    "content": {
      "zh": "<h3>🌐 學會從官方資料庫查詢保單費率與理賠申訴率</h3><ul><li><b>保險事業發展中心保單查詢平台 (tii.org.tw)</b>：查詢全台各大保險公司所有商品條款、試算費率與預估表。</li><li><b>金管會保險局 (fsc.gov.tw)</b>：查詢保險公司違規裁罰紀錄與最新監管政策。</li><li><b>金融消費評議中心 (foi.org.tw)</b>：查詢各大保險公司的「理賠申訴率 (Claim Dispute Rate)」，挑選申訴率低的優良公司！</li></ul><div class=\"data-source-badge\">📌 資料來源：金管會保險局 暨 財團法人保險事業發展中心 Portal</div>",
      "en": "<h3>🌐 Official Databases for Rates and Dispute Ratios</h3><ul><li><b>TII Policy Portal (tii.org.tw)</b>: Access policy contract terms and rate calculators across insurers.</li><li><b>FSC Insurance Bureau (fsc.gov.tw)</b>: Check regulatory fines and official policy updates.</li><li><b>FOI Ombudsman (foi.org.tw)</b>: Check <b>Claim Dispute Rates</b> to pick reputable insurers!</li></ul><div class=\"data-source-badge\">📌 Source: FSC Insurance Bureau & TII Portals</div>"
    }
  },
  {
    "id": 26,
    "hour": 3,
    "tag": { "zh": "3000元保單方案", "en": "$3k Budget Plan" },
    "title": { "zh": "大一新鮮人第一張保單 3,000 元年保費極致高槓桿配置方案", "en": "Freshman $3,000 NTD/yr High-Leverage Insurance Plan" },
    "content": {
      "zh": "<h3>💡 一年只需 3,000 元！大一新鮮人高 CP 值保單組合</h3><table class=\"data-table\"><thead><tr><th>保單險種內容</th><th>保障保額</th><th>預估年保費</th><th>生活化風險防護效果</th></tr></thead><tbody><tr><td><b>1. 定期意外險 + 意外醫療實支</b></td><td>身故失能 200 萬<br>意外醫療實支 5 萬</td><td>約 1,200 元</td><td>覆蓋機車摔車、打工燙傷與意外門診住院負擔。</td></tr><tr><td><b>2. 1年期實支實付醫療險</b></td><td>住院雜費 15 萬<br>病房費每日 1,500 元</td><td>約 1,800 元</td><td>補貼住院自費手術、高價醫材與病房差額。</td></tr><tr><td><b>總計</b></td><td><b>高額防護</b></td><td><b>僅約 3,000 元 / 年</b></td><td><b>一天只需不到 9 元！完全不壓垮生活費！</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 資料來源：115管理探索二教案保單精算組</div>",
      "en": "<h3>💡 Complete Coverage for Only $3,000 NTD a Year!</h3><table class=\"data-table\"><thead><tr><th>Policy Components</th><th>Coverage Amounts</th><th>Annual Premium</th><th>Real-Life Risk Defense</th></tr></thead><tbody><tr><td><b>1. Term Accident + Med Reimbursement</b></td><td>$2M Disability<br>$50k Med Reimbursement</td><td>~$1,200 NTD</td><td>Covers scooter crashes, workplace injuries, and outpatient care.</td></tr><tr><td><b>2. 1-Year Term Medical Reimbursement</b></td><td>$150k Expense Cap<br>$1,500/day Room Cap</td><td>~$1,800 NTD</td><td>Subsidizes private rooms, surgeries, and self-paid medical items.</td></tr><tr><td><b>Total</b></td><td><b>High Defense</b></td><td><b>~$3,000 NTD / yr</b></td><td><b>Under $9 NTD/day! Zero strain on living expenses!</b></td></tr></tbody></table><div class=\"data-source-badge\">📌 Source: Management Exploration II Case Study Team</div>"
    }
  },
  {
    "id": 27,
    "hour": 3,
    "tag": { "zh": "據實告知法規", "en": "Legal Disclosure" },
    "title": { "zh": "保險核保與告知義務：隱瞞病史導致拒賠與解除合約的法律後果", "en": "Disclosure Laws: Legal Consequences of Hiding Medical History" },
    "content": {
      "zh": "<h3>⚖️ 《保險法》第 64 條：誠實是獲得理賠保障的唯一道路</h3><p>許多業務員口頭說「這個小病沒關係不用填」，但法律後果極為嚴重：</p><ul><li><b>不實告知處分</b>：若要保人未據實填寫健康告知書，保險公司於契成立 <b>2 年內得解除契約</b>。</li><li><b>不給付且不退費</b>：解除契約時，保險公司<b>免負給付保險金責任，且已繳保費一律不予退還！</b></li></ul><div class=\"highlight-box\">💡 <b>鐵律</b>：健康告知書問什麼就答什麼，絕不聽信任何口頭安撫！</div><div class=\"data-source-badge\">📌 資料來源：中華民國《保險法》第 64 條與法院裁判字號條款</div>",
      "en": "<h3>⚖️ Article 64: Honesty is the Only Path to Guaranteed Payouts</h3><p>Agents may claim minor history doesn't matter, but legal consequences are severe:</p><ul><li><b>Contract Rescission</b>: Insurers hold the right to <b>cancel contracts within 2 years</b> for non-disclosure.</li><li><b>No Payout & No Refund</b>: Upon cancellation, insurers owe <b>ZERO payout money and refund ZERO premiums</b>!</li></ul><div class=\"highlight-box\">💡 <b>Rule</b>: Answer health questionnaires truthfully; ignore verbal assurances from sales reps!</div><div class=\"data-source-badge\">📌 Source: ROC Insurance Law Article 64 Court Precedents</div>"
    }
  },
  {
    "id": 28,
    "hour": 3,
    "tag": { "zh": "保險 4 大金律", "en": "4 Insurance Rules" },
    "title": { "zh": "大一新鮮人個人保障理性使用 4 大金律", "en": "4 Golden Rules of Personal Insurance for Freshmen" },
    "content": {
      "zh": "<h3>🛡️ 建立終身受用的理性保險觀念與護甲</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. 優先購買定期險</h4><p>用超低保費買足高額風險保障，絕不買高價終身險壓垮生活。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. 保障先於儲蓄投資</h4><p>先做足意外與醫療實支實付護甲，省下的錢拿去買 0050 ETF。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. 據實告知健康史</h4><p>健康告知書誠實填寫，絕不給保險公司解除合約拒賠的藉口。</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. 堅決拒絕人情保單</h4><p>聽不懂的保單不簽，善用 10 天契約撤銷權保障自身權益。</p></div></div><div class=\"data-source-badge\">📌 資料來源：金管會保險局與消費者文教基金會保護原則</div>",
      "en": "<h3>🛡️ Lifetime Insurance Wisdom for College Freshmen</h3><div class=\"concept-grid\"><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-emerald);\"><h4>🎯 1. Prioritize Term Insurance</h4><p>Use low premiums for high coverage; avoid expensive whole life plans.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-sky);\"><h4>🔒 2. Protection Before Savings</h4><p>Secure accident and medical armor first; invest the rest into 0050 ETF.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-gold);\"><h4>📊 3. Truthful Medical Disclosure</h4><p>Fill out health questionnaires honestly to prevent contract cancellations.</p></div><div class=\"concept-card\" style=\"border-left: 4px solid var(--accent-rose);\"><h4>🚫 4. Reject Guilt Sales</h4><p>Refuse confusing policies; leverage the 10-day right of rescission.</p></div></div><div class=\"data-source-badge\">📌 Source: FSC Insurance Bureau & Consumers' Foundation Principles</div>"
    }
  },
  {
    "id": 29,
    "hour": 3,
    "tag": { "zh": "知識全景圖", "en": "Knowledge Map" },
    "title": { "zh": "第九週全景知識體系圖與觀念整合", "en": "Week 9 Complete Knowledge Map & Synthesis" },
    "content": {
      "zh": "<h3>🧠 第九週 30 頁純教學卡片全景邏輯結構</h3><div class=\"highlight-box\"><p><b>風險與原則 (Hour 1)</b>：四象限風險矩陣 ➔ 大數法則 ➔ 保險利益（防賭博） ➔ 最大誠信（據實說明） ➔ 損害填補（防不當得利） ➔ 2.6張投保率 ➔ 4大合約角色。</p><p><b>保障金三角 (Hour 2)</b>：新鮮人機車/打工風險 ➔ 意外險（身故/失能/實支） ➔ 實支實付醫療險（病房/手術/雜費） ➔ 2026正本理賠改革 ➔ 重大傷病險 ➔ 勞保與強制險底護 ➔ 除外責任與等待期 ➔ 3大健全原則。</p><p><b>算術與實戰 (Hour 3)</b>：定期 vs 終身保費點差 ➔ 買定期+投資ETF雙贏 ➔ 拒絕人情保單4金律 ➔ 雙十原則 ➔ TII與FOI官方資料庫 ➔ 3,000元超值配置 ➔ 據實告知法規 ➔ 4大金律。</p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程組全景圖</div>",
      "en": "<h3>🧠 Week 9 Complete 30-Slide Logic Architecture</h3><div class=\"highlight-box\"><p><b>Risk & Principles (Hour 1)</b>: Risk Matrix ➔ Law of Large Numbers ➔ Insurable Interest ➔ Utmost Good Faith ➔ Indemnity ➔ 2.6 Density ➔ 4 Contract Roles.</p><p><b>Golden Triangle (Hour 2)</b>: Freshman Risks ➔ Accident Coverage ➔ Reimbursement Medical ➔ 2026 Original Receipt Reform ➔ Major Illness ➔ Social Safety ➔ Exclusions ➔ 3 Design Principles.</p><p><b>Math & Action (Hour 3)</b>: Term vs Whole Life Math ➔ Buy Term + ETF ➔ Reject Sales Traps ➔ 10-10 Rule ➔ TII/FOI Databases ➔ $3k Budget Plan ➔ Disclosure Laws ➔ 4 Golden Rules.</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Curriculum Synthesis</div>"
    }
  },
  {
    "id": 30,
    "hour": 3,
    "tag": { "zh": "學習反思", "en": "Reflections" },
    "title": { "zh": "學習反思與第十週預告 (不動產、房地產與租買決策財務學)", "en": "Reflections & Week 10 Preview (Real Estate & Buy vs. Rent Math)" },
    "content": {
      "zh": "<h3>🎉 恭喜完成第九週「保險基礎、風險管理與個人保障規劃」！</h3><p>請點擊 navbar 上方的 <b>「📝 本週課堂作業」</b> 按鈕，填寫並提交「個人第一張保單需求評估與人情保單體檢報告」。</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 第十週課程預告：不動產、房地產與租買決策財務學</h4><p>下週我們將踏入大一新鮮人關注的居住主題！探索<b>不動產市場、房貸本息攤還算術、租房 vs 買房財務抉擇、房地合一稅與青安貸款實務！</b></p></div><div class=\"data-source-badge\">📌 資料來源：115學年度「管理探索二」課程計畫</div>",
      "en": "<h3>🎉 Congratulations on Completing Week 9!</h3><p>Please click the <b>\"📝 Class Homework\"</b> button to submit your insurance assessment report.</p><div class=\"concept-card\" style=\"border-top: 4px solid var(--primary); margin-top: 1rem;\"><h4>🔮 Week 10 Preview: Real Estate & Buy vs. Rent Math</h4><p>Next week we explore housing economics! Mortgage math, Buy vs. Rent financial decisions, property taxes, and government housing loans!</p></div><div class=\"data-source-badge\">📌 Source: Management Exploration II Course Syllabus</div>"
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

// HOUR 1 MODAL: Risk Matrix Checker
function openActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity1Modal() {
  const modal = document.getElementById('activity1Modal');
  if (modal) modal.classList.remove('active');
}
function checkRiskStrategy() {
  const freq = document.getElementById('riskFreqSelect').value;
  const loss = document.getElementById('riskLossSelect').value;
  const resultDiv = document.getElementById('riskResult');

  let strategy = "";
  let detail = "";

  if (freq === 'high' && loss === 'low') {
    strategy = "【減輕 / 預防 (Reduction)】";
    detail = "例：騎機車配戴安全帽、打工佩戴防護手套，透過預防措施降低傷害。";
  } else if (freq === 'high' && loss === 'high') {
    strategy = "【避免 / 規避 (Avoidance)】";
    detail = "例：絕不安裝改裝車零件飆車、絕不上詐騙網站，直接拒絕高風險行為。";
  } else if (freq === 'low' && loss === 'low') {
    strategy = "【承擔 / 自保 (Retention)】";
    detail = "例：掉了一把雨傘、手機螢幕輕微刮傷，損失金額小，自行用儲蓄承擔。";
  } else {
    strategy = "🌟 【轉嫁 / 保險 (Transfer)】";
    detail = "例：嚴重車禍住院、癌症標靶藥物。發生率低但損失極大，最適合用保險轉嫁！";
  }

  resultDiv.innerHTML = `
    📊 <b>風險應對矩陣判定結果</b>：<br>
    • 最佳風險策略：<span style="color:var(--accent-gold); font-weight:bold; font-size:1.2rem;">${strategy}</span><br>
    • <b>策略剖析</b>：${detail}
  `;
}

// HOUR 2 MODAL: Medical Reimbursement Calculator
function openActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.add('active');
}
function closeActivity2Modal() {
  const modal = document.getElementById('activity2Modal');
  if (modal) modal.classList.remove('active');
}
function calculateMedicalReimbursement() {
  const roomCost = parseFloat(document.getElementById('roomCostInput').value) || 6000;
  const roomCap = parseFloat(document.getElementById('roomCapInput').value) || 2000;
  const surgeryCost = parseFloat(document.getElementById('surgeryCostInput').value) || 35000;
  const surgeryCap = parseFloat(document.getElementById('surgeryCapInput').value) || 50000;
  const miscCost = parseFloat(document.getElementById('miscCostInput').value) || 85000;
  const miscCap = parseFloat(document.getElementById('miscCapInput').value) || 150000;

  const roomPaid = Math.min(roomCost, roomCap * 3); // Assume 3 days stay
  const surgeryPaid = Math.min(surgeryCost, surgeryCap);
  const miscPaid = Math.min(miscCost, miscCap);

  const totalCost = roomCost + surgeryCost + miscCost;
  const totalPaid = roomPaid + surgeryPaid + miscPaid;
  const outOfPocket = totalCost - totalPaid;

  const resultDiv = document.getElementById('medicalResult');
  resultDiv.innerHTML = `
    🏥 <b>實支實付醫療險理賠精算結果</b>：<br>
    • <b>醫療總花費</b>：$${totalCost.toLocaleString()} 元 (包含升等病房費 $${roomCost}、手術自費 $${surgeryCost}、材料雜費 $${miscCost})<br>
    • <b>保險公司實支實付給付總額</b>：<span style="color:var(--accent-emerald); font-weight:bold; font-size:1.2rem;">$${totalPaid.toLocaleString()} 元</span><br>
    • <b>個人最終實際自負額</b>：<span style="color:var(--accent-rose); font-weight:bold;">$${outOfPocket.toLocaleString()} 元</span><br>
    💡 <i>實支實付完美填補了最昂貴的 $${miscPaid.toLocaleString()} 元自費藥品與醫材雜費！</i>
  `;
}

// HOUR 3 GAME: Insurance Master Challenge
const gameQuestions = [
  {
    level: 1,
    title: "關卡 1：保險適用風險判定",
    question: "根據四象限風險管理矩陣，哪一種特徵的風險最適合購買「保險 (Transfer)」來轉嫁風險？",
    options: [
      { text: "高發生頻率、低損失程度 (如遺失雨傘)", correct: false },
      { text: "低發生頻率、高損失程度 (如嚴重車禍重大手術)", correct: true },
      { text: "高發生頻率、高損失程度 (如非法飆車)", correct: false },
      { text: "完全沒有任何風險的事項", correct: false }
    ],
    explain: "保險專門用來處理「發生頻率低、但一旦發生損失極大」的災難型風險！"
  },
  {
    level: 2,
    title: "關卡 2：2026 正本理賠改革",
    question: "金管會推動實支實付醫療險「正本理賠與差額填補」改革，其核心法理依據是下列哪一項保險原則？",
    options: [
      { text: "最大誠信原則", correct: false },
      { text: "損害填補原則 (禁止靠保險理賠不當得利)", correct: true },
      { text: "大數法則", correct: false },
      { text: "主力控盤原則", correct: false }
    ],
    explain: "損害填補原則規定理賠金最高以「實際發生的醫療花費」為限，禁止副本重複理賠靠保險賺錢。"
  },
  {
    level: 3,
    title: "關卡 3：定期險 vs 終身險點差",
    question: "大一新鮮人小明打工預算有限，想要用最便宜的保費 (一年約 3,000 元) 買足高額意外與醫療保障，他應該優先選擇哪一種險種？",
    options: [
      { text: "高價終身醫療險 (一年保費 30,000 元)", correct: false },
      { text: "高槓桿定期險 (Term Insurance)", correct: true },
      { text: "儲蓄型終身壽險", correct: false },
      { text: "地下保單", correct: false }
    ],
    explain: "定期險保費極度便宜且保障高槓桿，極為適合打工預算有限的大一新鮮人！"
  },
  {
    level: 4,
    title: "關卡 4：據實告知義務法律後果",
    question: "若投保時故意隱瞞近 2 年內的重大心臟手術病史，保險公司在契成立 2 年內發現後可以採取什麼法律行動？",
    options: [
      { text: "直接解除合約，且免負給付理賠責任、亦不退還已繳保費", correct: true },
      { text: "免費幫客戶升級保單", correct: false },
      { text: "退還雙倍保費並道歉", correct: false },
      { text: "完全不能做任何處置", correct: false }
    ],
    explain: "《保險法》第 64 條規定，不實告知者保險公司可解約，且不給付任何理賠金亦不退還保費！"
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
    let badgeText = userScore === 400 ? "🏆 保險保障達人徽章 (Insurance Master)" : "🥉 保險初學者徽章 (Novice)";
    container.innerHTML = `
      <div style="text-align:center; padding: 1.5rem;">
        <h2 style="color:var(--accent-gold);">🎮 遊戲挑戰完成！</h2>
        <p style="font-size:1.3rem; margin:1rem 0;">你的總得分：<span style="color:var(--accent-emerald); font-weight:bold; font-size:2rem;">${userScore} / 400</span></p>
        <div style="background:rgba(245, 158, 11, 0.2); border:2px dashed var(--accent-gold); padding:1rem; border-radius:12px; margin-bottom:1.5rem;">
          <h3 style="color:var(--accent-gold); margin:0;">${badgeText}</h3>
          <p style="margin:0.5rem 0 0; color:var(--text-sub);">你已成功掌握第九週「保險基礎、風險管理與個人保障規劃」核心觀念！</p>
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
function submitW9Homework(e) {
  e.preventDefault();
  alert("🎉 第九週課堂實務作業提交成功！教官/助教將於 3 日內完成審閱。");
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
