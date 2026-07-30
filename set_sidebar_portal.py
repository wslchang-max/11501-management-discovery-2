import os

portal_code = """<!DOCTYPE html>
<html lang="zh-TW">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>11501 管理探索二｜18週課程整合總覽平台</title>
    <meta name="description" content="115學年度管理探索二18週雙語互動教學與課程指引下載平台。">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
      :root {
        --bg: #0b0f19;
        --panel: #131b2e;
        --panel-active: rgba(16, 185, 129, 0.15);
        --ink: #f3f4f6;
        --muted: #9ca3af;
        --line: rgba(255, 255, 255, 0.12);
        --brand: #10b981;
        --brand-hover: #059669;
        --brand-weak: rgba(16, 185, 129, 0.2);
        --shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
        color: var(--ink);
        background: var(--bg);
        font-family: "Inter", "Segoe UI", "Noto Sans TC", "Microsoft JhengHei", sans-serif;
      }

      .shell {
        display: grid;
        grid-template-columns: 320px minmax(0, 1fr);
        min-height: 100vh;
      }

      .sidebar {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow-y: auto;
        background: var(--panel);
        border-right: 1px solid var(--line);
        padding: 20px 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .course-title {
        padding-bottom: 16px;
        border-bottom: 1px solid var(--line);
      }

      .course-title h1 {
        margin: 0 0 6px;
        font-size: 20px;
        font-weight: 800;
        background: linear-gradient(135deg, #ffffff 0%, #10b981 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .course-title p {
        margin: 0;
        color: var(--muted);
        font-size: 13px;
      }

      .week-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .week-button {
        display: flex;
        align-items: center;
        gap: 12px;
        width: 100%;
        padding: 12px 14px;
        border: 1px solid transparent;
        border-radius: 12px;
        background: rgba(255, 255, 255, 0.03);
        color: var(--ink);
        cursor: pointer;
        font: inherit;
        text-align: left;
        transition: all 0.25s ease;
      }

      .week-button:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(16, 185, 129, 0.3);
      }

      .week-button.active {
        background: var(--panel-active);
        border-color: var(--brand);
        color: #ffffff;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.2);
      }

      .week-num {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 38px;
        height: 28px;
        border-radius: 8px;
        background: rgba(16, 185, 129, 0.2);
        color: #34d399;
        font-weight: 800;
        font-size: 12px;
        flex-shrink: 0;
      }

      .week-name {
        display: flex;
        flex-direction: column;
        min-width: 0;
      }

      .week-name strong {
        font-size: 13px;
        font-weight: 700;
        color: #ffffff;
      }

      .week-name span {
        font-size: 12px;
        color: var(--muted);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .viewer {
        display: flex;
        flex-direction: column;
        min-width: 0;
        background: var(--bg);
      }

      .viewer-bar {
        background: rgba(19, 27, 46, 0.95);
        border-bottom: 1px solid var(--line);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 14px 24px;
        position: sticky;
        top: 0;
        z-index: 5;
        backdrop-filter: blur(12px);
      }

      .viewer-title {
        min-width: 0;
      }

      .viewer-title h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 800;
        color: #ffffff;
        line-height: 1.3;
      }

      .viewer-title p {
        margin: 4px 0 0;
        color: var(--brand);
        font-size: 14px;
        font-weight: 600;
      }

      .actions {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        align-items: center;
      }

      .action-button {
        min-height: 38px;
        border: 1px solid var(--line);
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.08);
        color: var(--ink);
        cursor: pointer;
        font: inherit;
        font-size: 13px;
        font-weight: 600;
        padding: 8px 14px;
        white-space: nowrap;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        transition: all 0.25s ease;
      }

      .action-button:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: #ffffff;
      }

      .action-button.primary {
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        border-color: transparent;
        color: #ffffff;
        box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
      }

      .action-button.primary:hover {
        filter: brightness(1.1);
        transform: scale(1.02);
      }

      .action-button.docx {
        background: rgba(127, 0, 255, 0.2);
        border-color: rgba(127, 0, 255, 0.4);
        color: #c084fc;
      }

      .action-button.docx:hover {
        background: rgba(127, 0, 255, 0.35);
        color: #ffffff;
      }

      .frame-wrap {
        flex: 1;
        padding: 16px;
        display: flex;
        flex-direction: column;
      }

      iframe {
        display: block;
        width: 100%;
        height: calc(100vh - 104px);
        min-height: 650px;
        border: 1px solid var(--line);
        border-radius: 16px;
        background: #0f172a;
        box-shadow: var(--shadow);
      }

      @media (max-width: 900px) {
        .shell {
          grid-template-columns: 1fr;
        }

        .sidebar {
          position: relative;
          height: auto;
          max-height: 40vh;
          border-right: 0;
          border-bottom: 1px solid var(--line);
        }

        .week-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .viewer-bar {
          position: relative;
          align-items: flex-start;
          flex-direction: column;
        }

        iframe {
          height: 76vh;
          min-height: 520px;
        }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <aside class="sidebar">
        <div class="course-title">
          <h1><i class="fa-solid fa-frog" style="color:#10b981;"></i> 管理探索二</h1>
          <p>115學年度上學期｜財金蛙挖哇 18週整合總覽</p>
        </div>
        <nav class="week-list" id="weekList" aria-label="週次選單"></nav>
      </aside>

      <main class="viewer">
        <header class="viewer-bar">
          <div class="viewer-title">
            <h2 id="currentTitle">第一週</h2>
            <p id="currentSubtitle">資訊爆炸時代的財經素養</p>
          </div>
          <div class="actions">
            <button class="action-button" type="button" id="prevWeek"><i class="fa-solid fa-chevron-left"></i> 上一週</button>
            <button class="action-button" type="button" id="nextWeek">下一週 <i class="fa-solid fa-chevron-right"></i></button>
            <button class="action-button primary" type="button" id="openOriginal"><i class="fa-solid fa-expand"></i> 開啟獨立頁面</button>
            <a class="action-button docx" type="button" id="downloadDocx" href="#" download><i class="fa-regular fa-file-word"></i> 下載教學指引 (.docx)</a>
          </div>
        </header>

        <section class="frame-wrap" aria-label="投影片內容">
          <iframe
            id="slideFrame"
            title="投影片內容"
            src="第一週_資訊爆炸時代的財經素養.html"
            allowfullscreen
          ></iframe>
        </section>
      </main>
    </div>

    <script>
      const weeks = [
        { week: 1, title: "資訊爆炸時代的財經素養", file: "第一週_資訊爆炸時代的財經素養.html", docx: "第一週_課程教學指引_資訊爆炸時代的財經素養.docx" },
        { week: 2, title: "理財時代與經濟指標", file: "第二週_理財時代與經濟指標.html", docx: "第二週_課程教學指引_理財時代與經濟指標.docx" },
        { week: 3, title: "通貨膨脹與購買力", file: "第三週_通貨膨脹與購買力.html", docx: "第三週_課程教學指引_通貨膨脹與購買力.docx" },
        { week: 4, title: "股市入門與企業價值估算", file: "第四週_股市入門與企業價值估算.html", docx: "第四週_課程教學指引_股市入門與企業價值估算.docx" },
        { week: 5, title: "ETF狂熱：主動型ETF與被動投資", file: "第五週_ETF狂熱主動型ETF與被動投資.html", docx: "第五週_課程教學指引_ETF狂熱主動型ETF與被動投資.docx" },
        { week: 6, title: "數位金融：高利活存與銀行業變革", file: "第六週_數位金融高利活存與銀行業變革.html", docx: "第六週_課程教學指引_數位金融高利活存與銀行業變革.docx" },
        { week: 7, title: "個人信用評分變動與借貸風險", file: "第七週_個人信用評分變動與借貸風險.html", docx: "第七週_課程教學指引_個人信用評分變動與借貸風險.docx" },
        { week: 8, title: "期中學習成果檢核與實戰個案總複習", file: "第八週_期中學習成果檢核與實戰個案總複習.html", docx: "第八週_課程教學指引_期中學習成果檢核與實戰個案總複習.docx" },
        { week: 9, title: "複利效應與個人儲蓄規劃", file: "第九週_複利效應與個人儲蓄規劃.html", docx: "第九週_課程教學指引_複利效應與個人儲蓄規劃.docx" },
        { week: 10, title: "不動產房地產與租買決策財務學", file: "第十週_不動產房地產與租買決策財務學.html", docx: "第十週_課程教學指引_不動產房地產與租買決策財務學.docx" },
        { week: 11, title: "個人綜合所得稅節稅規劃與報稅實務", file: "第十一週_個人綜合所得稅節稅規劃與報稅實務.html", docx: "第十一週_課程教學指引_個人綜合所得稅節稅規劃與報稅實務.docx" },
        { week: 12, title: "個人與家庭資產負債表現金流管理與生涯理財規劃", file: "第十二週_個人與家庭資產負債表現金流管理與生涯理財規劃.html", docx: "第十二週_課程教學指引_個人與家庭資產負債表現金流管理與生涯理財規劃.docx" },
        { week: 13, title: "半導體產業護國神山台積電與台灣科技供應鏈", file: "第十三週_半導體產業護國神山台積電與台灣科技供應鏈.html", docx: "第十三週_課程教學指引_半導體產業護國神山台積電與台灣科技供應鏈.docx" },
        { week: 14, title: "生成式AI革命人工智慧產業鏈與未來職場轉型", file: "第十四週_生成式AI革命人工智慧產業鏈與未來職場轉型.html", docx: "第十四週_課程教學指引_生成式AI革命人工智慧產業鏈與未來職場轉型.docx" },
        { week: 15, title: "綠色金融ESG永續投資與碳定價經濟學", file: "第十五週_綠色金融ESG永續投資與碳定價經濟學.html", docx: "第十五週_課程教學指引_綠色金融ESG永續投資與碳定價經濟學.docx" },
        { week: 16, title: "加密貨幣區塊鏈基礎Web3與數位資產風險", file: "第十六週_加密貨幣區塊鏈基礎Web3與數位資產風險.html", docx: "第十六週_課程教學指引_加密貨幣區塊鏈基礎Web3與數位資產風險.docx" },
        { week: 17, title: "期末專案發表實戰財經簡報與總評量", file: "第十七週_期末專案發表實戰財經簡報與總評量.html", docx: "第十七週_課程教學指引_期末專案發表實戰財經簡報與總評量.docx" },
        { week: 18, title: "學期總結財經探索藍圖與大一新鮮人終身宣言", file: "第十八週_學期總結財經探索藍圖與大一新鮮人終身宣言.html", docx: "第十八週_課程教學指引_學期總結財經探索藍圖與大一新鮮人終身宣言.docx" }
      ];

      const weekList = document.querySelector("#weekList");
      const frame = document.querySelector("#slideFrame");
      const currentTitle = document.querySelector("#currentTitle");
      const currentSubtitle = document.querySelector("#currentSubtitle");
      const prevWeek = document.querySelector("#prevWeek");
      const nextWeek = document.querySelector("#nextWeek");
      const openOriginal = document.querySelector("#openOriginal");
      const downloadDocx = document.querySelector("#downloadDocx");
      let currentIndex = 0;

      function renderWeekList() {
        weekList.innerHTML = weeks
          .map((item, index) => `
            <button class="week-button${index === currentIndex ? " active" : ""}" type="button" data-index="${index}">
              <span class="week-num">W${String(item.week).padStart(2, "0")}</span>
              <span class="week-name">
                <strong>第${item.week}週</strong>
                <span>${item.title}</span>
              </span>
            </button>
          `)
          .join("");
      }

      function setWeek(index) {
        currentIndex = Math.max(0, Math.min(index, weeks.length - 1));
        const item = weeks[currentIndex];
        currentTitle.textContent = `第${item.week}週`;
        currentSubtitle.textContent = item.title;
        frame.src = item.file;
        downloadDocx.href = item.docx;
        downloadDocx.setAttribute('download', item.docx);
        prevWeek.disabled = currentIndex === 0;
        nextWeek.disabled = currentIndex === weeks.length - 1;
        renderWeekList();
      }

      weekList.addEventListener("click", (event) => {
        const button = event.target.closest("[data-index]");
        if (!button) return;
        setWeek(Number(button.dataset.index));
      });

      prevWeek.addEventListener("click", () => setWeek(currentIndex - 1));
      nextWeek.addEventListener("click", () => setWeek(currentIndex + 1));
      openOriginal.addEventListener("click", () => {
        window.open(weeks[currentIndex].file, "_blank", "noopener");
      });

      renderWeekList();
      setWeek(0);
    </script>
  </body>
</html>
"""

dir_path = r"C:\Users\User\Desktop\115學年度\11501 管理探索二"
with open(os.path.join(dir_path, "index.html"), "w", encoding="utf-8") as f:
    f.write(portal_code)

with open(os.path.join(dir_path, "整合18週課程平台.html"), "w", encoding="utf-8") as f:
    f.write(portal_code)

print("Successfully set sidebar navigation portal as default index.html and 整合18週課程平台.html!")
