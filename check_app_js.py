import re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'r', encoding='utf-8') as f:
    t = f.read()

print("File size:", len(t))
ids = re.findall(r'"id":\s*(\d+)', t)
print("Slide IDs found:", ids)
print("Total IDs:", len(ids))
