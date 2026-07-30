# 115 管理探索二 專案計畫 (115 Management Exploration II)

本專案旨在建立 **115 學年度「管理探索二」** 的網頁版教學內容與課程指引，同步提供 Word 格式的實務教學手冊與實證數據分析資源。

---

## 🎯 專案目標與核心原則

1. **網頁版教學內容**：打造互動式、結構化且易於閱讀的線上課程與實證教學網頁。
2. **Word 教學指引**：同步產出相應的 Word 檔 (`.docx`) 教學指引，方便列印、排版與教案建檔。
3. **實務與真實數據**：
   - 所有實證資料均來自各大權威財務金融網站與資料庫。
   - **數據真實性**：嚴禁造假或產生虛擬隨機數據作為實證範例。
   - **可重現性與原始資料保護**：保留原始資料來源，不得直接覆蓋原始數據檔案，避免前務與前視偏誤 (Look-ahead Bias)。

---

## 📁 專案檔案結構

```
C:\Users\User\Desktop\115學年度\管理探索二\
├── 115管理探索二專案計畫.docx            # 原始需求計畫文件
├── 財金蛙挖哇_課程大綱(1140926).docx      # 原始課程大綱參考文件
├── 115學年度上學期_管理探索二_18週課程大綱.md # 最新規劃之18週課程大綱 (Markdown 檔)
├── 115學年度上學期_管理探索二_18週課程大綱.docx# 最新規劃之18週課程大綱 (Word 檔)
├── 第一週_資訊爆炸時代的財經素養.html
├── 第一週_課程教學指引_資訊爆炸時代的財經素養.docx
├── 第二週_物價通膨與實質購買力.html
├── 第二週_課程教學指引_物價通膨與實質購買力.docx
├── 第三週_利率央行貨幣政策與資產價格.html
├── 第三週_課程教學指引_利率央行貨幣政策與資產價格.docx
├── index.html
├── index.css
├── app.js
├── w2_app.js
├── w3_app.js
├── images/
│   ├── cover.jpg
│   ├── overload.jpg
│   ├── signal.jpg
│   ├── w2_cover.jpg
│   ├── w2_shrinkflation.jpg
│   ├── w2_cpi.jpg
│   ├── w3_cover.jpg
│   ├── w3_dotplot.jpg
│   └── w3_yieldcurve.jpg
├── skills/
│   └── SKILL.md                         # 財務實證分析與課程內容產出步驟
├── README.md                             # 專案說明與檔案結構 (本文件)
├── PROJECT_STATUS.md                     # 專案進度、本次執行結果與待確認事項
├── AGENTS.md                             # AI 協作規則與Agent運作規範
├── CLAUDE.md                             # Claude / AI 助理開發速查指南
└── skills/                               # 金融資料分析與教學指引產出之 Skill 規範
    └── SKILL.md                          # 財務實證分析與課程內容產出步驟
```

---

## 🛠️ 使用工具與技術棧

- **資料處理與數據分析**：Python / R / Jupyter / Excel
- **網頁教學內容**：HTML5 / CSS3 / JavaScript (或 Vite / React)
- **方程式與文稿**：LaTeX (用於 Markdown/網頁) / Office Math OMML (用於 Word `.docx`)
- **文件與簡報**：Markdown / Word (`.docx`) / PPT

---

## 📐 方程式格式規範

- **Markdown / 網頁**：統一使用 **LaTeX** 語法（例如 `$E(R_i) = R_f + \beta_i [E(R_m) - R_f]$`）。
- **Word 文件 (`.docx`)**：數學公式需採用 **Office Math / OMML** 格式編譯或轉換。
- **轉換原則**：保持 LaTeX 與 OMML 之間的標記對應，維護可轉換性與一致性。

---

## 🤝 AI 協作規範簡述

- 每次完成任務後更新 `PROJECT_STATUS.md`。
- 異動檔案架構時更新 `README.md`。
- 變更流程、工具或規範時同步更新 `AGENTS.md` 與 `CLAUDE.md`。
