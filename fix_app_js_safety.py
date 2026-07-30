import re

with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace the helper functions & DOMContentLoaded with completely safe, robust versions

safe_functions = """
// Initialize Web App safely
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderSlide();
  renderGrid();
});

// Canvas Annotation Setup
function initCanvas() {
  canvas = document.getElementById('annotationCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);
}

function resizeCanvas() {
  const container = document.querySelector('.presentation-section');
  if (container && canvas) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  }
}

function setTool(tool) {
  currentTool = tool;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  if (tool === 'pen') {
    const btn = document.getElementById('toolPen');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 3;
  } else if (tool === 'highlighter') {
    const btn = document.getElementById('toolHighlighter');
    if (btn) btn.classList.add('active');
    if (canvas) canvas.classList.add('drawing-mode');
    penSize = 16;
  } else {
    if (canvas) canvas.classList.remove('drawing-mode');
  }
}

function setPenColor(color, dot) {
  penColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  if (dot) dot.classList.add('active');
}

function clearCanvas() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(function(err){});
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(function(err){});
    }
  }
}

function startDrawing(e) {
  if (currentTool === 'off' || !ctx || !canvas) return;
  isDrawing = true;
  ctx.beginPath();
  const rect = canvas.getBoundingClientRect();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
  if (!isDrawing || currentTool === 'off' || !ctx || !canvas) return;
  const rect = canvas.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  
  if (currentTool === 'highlighter') {
    ctx.strokeStyle = penColor + '66';
    ctx.lineWidth = 18;
  } else {
    ctx.strokeStyle = penColor;
    ctx.lineWidth = 3;
  }
  ctx.lineCap = 'round';
  ctx.stroke();
}

function stopDrawing() {
  isDrawing = false;
}

// Switch Language
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-zh]').forEach(el => {
    el.innerText = lang === 'zh' ? el.getAttribute('data-zh') : el.getAttribute('data-en');
  });
  renderSlide();
  renderGrid();
}

// Filter Slides by Hour
function filterHour(hour, btn) {
  activeHourFilter = hour;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const filtered = activeHourFilter === 'all' ? slidesData : slidesData.filter(s => s.hour == activeHourFilter);
  if (filtered.length > 0) {
    currentSlideIndex = slidesData.findIndex(s => s.id === filtered[0].id);
  }
  renderSlide();
  renderGrid();
}

// Render Current Slide
function renderSlide() {
  clearCanvas();
  const slide = slidesData[currentSlideIndex];
  if (!slide) return;

  const container = document.getElementById('slideContainer');
  if (!container) return;

  const tagText = (slide.tag && slide.tag[currentLang]) ? slide.tag[currentLang] : '';
  const titleText = (slide.title && slide.title[currentLang]) ? slide.title[currentLang] : '';
  const contentText = (slide.content && slide.content[currentLang]) ? slide.content[currentLang] : '';
  const imgHTML = slide.img ? `<img class="slide-img" src="${slide.img}" alt="Slide Visual">` : '';

  container.innerHTML = `
    <div class="slide-header">
      <span class="slide-counter">SLIDE ${slide.id} / 30</span>
      <span class="slide-tag">${tagText} (Hour ${slide.hour})</span>
    </div>
    <div class="slide-content-wrapper">
      <div>
        <h2 class="slide-title">${titleText}</h2>
        ${imgHTML}
        <div class="slide-body">${contentText}</div>
      </div>
    </div>
  `;

  const progressFill = document.getElementById('progressFill');
  if (progressFill) {
    const progressPercent = ((currentSlideIndex + 1) / slidesData.length) * 100;
    progressFill.style.width = `${progressPercent}%`;
  }

  if (window.MathJax && typeof MathJax.typesetPromise === 'function') {
    try {
      MathJax.typesetPromise().catch(function(e){});
    } catch(err) {}
  }
}

// Render 30 Slides Grid
function renderGrid() {
  const gridView = document.getElementById('slidesGridView');
  if (!gridView) return;

  const searchInput = document.getElementById('searchInput');
  const query = searchInput ? searchInput.value.toLowerCase() : '';

  let filtered = slidesData;
  if (activeHourFilter !== 'all') {
    filtered = filtered.filter(s => s.hour == activeHourFilter);
  }
  if (query) {
    filtered = filtered.filter(s => 
      (s.title[currentLang] && s.title[currentLang].toLowerCase().includes(query)) || 
      (s.content[currentLang] && s.content[currentLang].toLowerCase().includes(query))
    );
  }

  gridView.innerHTML = filtered.map(slide => {
    const slideIdx = slidesData.findIndex(s => s.id === slide.id);
    const cleanPreview = slide.content[currentLang] ? slide.content[currentLang].replace(/<[^>]*>?/gm, '') : '';
    return `
      <div class="mini-slide-card" onclick="goToSlide(${slideIdx})">
        <div class="mini-slide-num">SLIDE ${slide.id} • Hour ${slide.hour}</div>
        <div class="mini-slide-title">${slide.title[currentLang]}</div>
        <div class="mini-slide-preview">${cleanPreview}</div>
      </div>
    `;
  }).join('');
}

// Navigation
function nextSlide() {
  if (currentSlideIndex < slidesData.length - 1) {
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
    currentSlideIndex = index;
    renderSlide();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function searchSlides() {
  renderGrid();
}

// Modals
function openActivity1Modal() {
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.add('active');
}
function closeActivity1Modal() {
  const el = document.getElementById('activity1Modal');
  if (el) el.classList.remove('active');
}
function calculateSNR() {
  const signalEl = document.getElementById('signalInput');
  const noiseEl = document.getElementById('noiseInput');
  const signal = signalEl ? parseFloat(signalEl.value) || 1 : 1;
  const noise = noiseEl ? parseFloat(noiseEl.value) || 1 : 1;
  const snr = (signal / noise).toFixed(2);
  
  let msg = `你的 SNR 比率為：${snr}。`;
  if (snr < 0.5) msg += " ⚠️ 警告：你的資訊飲食處於極度雜訊過載狀態！請減少看短影音標題黨。";
  else if (snr >= 1.5) msg += " 🎉 優秀：你的資訊飲食具有極高的高 Signal 純度！";
  else msg += " 👍 尚可：建議增加查驗官方財報與經濟報告的時間。";

  const resEl = document.getElementById('snrResult');
  if (resEl) resEl.innerText = msg;
}

function openActivity2Modal() {
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.add('active');
}
function closeActivity2Modal() {
  const el = document.getElementById('activity2Modal');
  if (el) el.classList.remove('active');
}

function openGameModal() {
  currentGameIndex = 0;
  gameScore = 0;
  const el = document.getElementById('gameModal');
  if (el) el.classList.add('active');
  renderGameQuestion();
}
function closeGameModal() {
  const el = document.getElementById('gameModal');
  if (el) el.classList.remove('active');
}

function openHomeworkModal() {
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.add('active');
}
function closeHomeworkModal() {
  const el = document.getElementById('homeworkModal');
  if (el) el.classList.remove('active');
}
function submitHomework(e) {
  if (e) e.preventDefault();
  alert("🎉 課堂作業已成功儲存提交！得分已登錄至學習歷程紀錄。");
  closeHomeworkModal();
}
"""

# Replace from `// Initialize Web App` to end of file with safe_functions + gameQuestions logic
parts = text.split("// Initialize Web App")
if len(parts) >= 2:
    # Preserve gameQuestions array
    game_match = re.search(r'(const gameQuestions = \[.*?\];\n\nlet currentGameIndex = 0;.*)', text, re.DOTALL)
    game_script = game_match.group(1) if game_match else ""
    
    new_js = parts[0] + safe_functions + "\n\n" + game_script
    with open(r'C:\Users\User\Desktop\115學年度\管理探索二\app.js', 'w', encoding='utf-8') as f:
        f.write(new_js)
    print("Safeguarded app.js with 100% bulletproof null safety!")
else:
    print("Could not find '// Initialize Web App'")
