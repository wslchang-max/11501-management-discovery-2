with open(r'C:\Users\User\Desktop\115學年度\管理探索二\build_full_app_js.py', 'r', encoding='utf-8') as f:
    text = f.read()

text = text.replace(', en:', ', "en":')
text = text.replace('title_en:', '"title_en":')
text = text.replace('news_en:', '"news_en":')
text = text.replace('options_en:', '"options_en":')
text = text.replace('explain_en:', '"explain_en":')

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\build_full_app_js.py', 'w', encoding='utf-8') as f:
    f.write(text)

print("Fixed syntax in build_full_app_js.py!")
