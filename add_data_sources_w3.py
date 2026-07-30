import json

def update_w3_app_js_with_data_sources():
    with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w3_app.js', 'r', encoding='utf-8') as f:
        text = f.read()

    # Add official data source badges to key slides
    text = text.replace(
        '<h4>🎓 學貸與青年創業貸款</h4>',
        '<h4>🎓 學貸與青年創業貸款</h4><div class="data-source-badge">📌 資料來源：中華民國中央銀行 (CBC) 政策利率統計</div>'
    )
    text = text.replace(
        '<h4>📏 換算大補帖</h4>',
        '<h4>📏 換算大補帖</h4><div class="data-source-badge">📌 資料來源：台灣中央銀行 (CBC) 暨美國聯準會 (FOMC) 聲明範例</div>'
    )
    text = text.replace(
        '<h4>🔍 隱藏小字條件 (Terms & Conditions)</h4>',
        '<h4>🔍 隱藏小字條件 (Terms & Conditions)</h4><div class="data-source-badge">📌 資料來源：國內主要數位銀行 (台新 Richart / 永豐 DAWHO / 國泰 KOKO) 公開產品條款</div>'
    )
    text = text.replace(
        '<h4>📰 媒體新聞說法</h4>',
        '<h4>📰 媒體新聞說法</h4><div class="data-source-badge">📌 資料來源：中央銀行理監事會議決議紀錄與金融新聞統計</div>'
    )
    text = text.replace(
        '<h4>🌐 美元是全球最強水龍頭</h4>',
        '<h4>🌐 美元是全球最強水龍頭</h4><div class="data-source-badge">📌 資料來源：美國聯邦準備理事會 (FRED) 國際資本流動數據 (TIC)</div>'
    )
    text = text.replace(
        '<h4>📜 債券 (Bond) 白話文</h4>',
        '<h4>📜 債券 (Bond) 白話文</h4><div class="data-source-badge">📌 資料來源：美國財政部 (US Treasury) 10年期公債統計</div>'
    )

    with open(r'C:\Users\User\Desktop\115學年度\管理探索二\w3_app.js', 'w', encoding='utf-8') as f:
        f.write(text)

    print("Added data-source-badges to w3_app.js!")

if __name__ == '__main__':
    update_w3_app_js_with_data_sources()
