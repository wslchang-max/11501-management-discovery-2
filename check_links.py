import os, re

os.chdir(r"C:\Users\User\Desktop\115學年度\11501 管理探索二")
content = open("index.html", encoding="utf-8").read()
links = re.findall(r'href=["\'](.*?)["\']', content)

print("ALL LINKS IN index.html:")
for l in links:
    if not l.startswith("http") and not l.endswith(".css"):
        exists = os.path.exists(l)
        print(f"LINK: {l} | EXISTS: {exists}")
