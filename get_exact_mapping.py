import os, glob

os.chdir(r"C:\Users\User\Desktop\115學年度\11501 管理探索二")

all_htmls = glob.glob("*.html")
all_docxs = glob.glob("*.docx")

prefix_map = {
    1: '第一週_', 2: '第二週_', 3: '第三週_', 4: '第四週_', 5: '第五週_',
    6: '第六週_', 7: '第七週_', 8: '第八週_', 9: '第九週_', 10: '第十週_',
    11: '第十一週_', 12: '第十二週_', 13: '第十三週_', 14: '第十四週_',
    15: '第十五週_', 16: '第十六週_', 17: '第十七週_', 18: '第十八週_'
}

file_mapping = {}

for w in range(1, 19):
    pref = prefix_map[w]
    matching_html = [h for h in all_htmls if h.startswith(pref) and h not in ['index.html', '整合18週課程平台.html']]
    matching_docx = [d for d in all_docxs if d.startswith(pref)]
    
    html_file = matching_html[0] if matching_html else None
    docx_file = matching_docx[0] if matching_docx else None
    
    file_mapping[w] = {
        'html': html_file,
        'docx': docx_file
    }
    print(f"Week {w:02d}: HTML -> {html_file}")
    print(f"         DOCX -> {docx_file}")
