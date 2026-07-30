with open(r'C:\Users\User\Desktop\115學年度\管理探索二\build_simplified_w3_app_js.py', 'r', encoding='utf-8') as f:
    t = f.read()

t = t.replace('"3% High-Yield Digital Accounts"', "'3% High-Yield Digital Accounts'")
t = t.replace('"0% Credit Card Installment"', "'0% Credit Card Installment'")
t = t.replace('"10% Monthly Zero Risk"', "'10% Monthly Zero Risk'")
t = t.replace('"Bond Yield"', "'Bond Yield'")
t = t.replace('"Soft Landing"', "'Soft Landing'")

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\build_simplified_w3_app_js.py', 'w', encoding='utf-8') as f:
    f.write(t)

print("Fixed quotes in build_simplified_w3_app_js.py")
