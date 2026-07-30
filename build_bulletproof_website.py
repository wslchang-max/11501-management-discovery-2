import json

# Safe MathJax & Error handling build script for app.js and HTML

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'r', encoding='utf-8') as f:
    js_content = f.read()

# Fix MathJax check safely
js_content_fixed = js_content.replace(
    "if (window.MathJax) {\n    MathJax.typesetPromise();\n  }",
    "if (window.MathJax && typeof MathJax.typesetPromise === 'function') { MathJax.typesetPromise().catch(function(e){}); }"
).replace(
    "if (window.MathJax) {\n  MathJax.typesetPromise();\n}",
    "if (window.MathJax && typeof MathJax.typesetPromise === 'function') { MathJax.typesetPromise().catch(function(e){}); }"
)

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'w', encoding='utf-8') as f:
    f.write(js_content_fixed)

print("Safeguarded app.js successfully!")
