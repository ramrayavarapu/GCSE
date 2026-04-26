// GCSE Quest - Main Application
let state = GameEngine.loadState();
let currentSubject = null;
let currentLevel = null;
let currentQuestions = [];
let currentQIndex = 0;
let sessionCorrect = 0;
let sessionTotal = 0;
let sessionXP = 0;
let answered = false;
let hintShown = false;
let selfAssessScore = null;

// ── DOM HELPERS ──
const $ = id => document.getElementById(id);
const show = id => $(`screen-${id}`).classList.add('active');
const hide = id => $(`screen-${id}`).classList.remove('active');
const hideAll = () => document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
const escapeHTML = text => {
  const div = document.createElement('div');
  div.textContent = String(text);
  return div.innerHTML;
};

// ── NAVIGATION ──
function goHome() {
  hideAll();
  show('home');
  renderHome();
}

function goSubject(subjectKey) {
  currentSubject = subjectKey;
  hideAll();
  show('levels');
  renderLevelSelect();
}

function goLevel(level) {
  currentLevel = level;
  currentQuestions = [...QUESTION_BANK[currentSubject].levels[level].questions];
  currentQIndex = 0;
  sessionCorrect = 0;
  sessionTotal = 0;
  sessionXP = 0;
  answered = false;
  hideAll();
  show('question');
  renderQuestion();
}

// ── RENDER: HOME ──
function renderHome() {
  const overallLevel = GameEngine.getOverallLevel(state);
  $('overall-level-num').textContent = overallLevel;
  $('overall-level-name').textContent = LEVEL_NAMES[overallLevel];
  $('header-xp').textContent = `⭐ ${state.totalXP} XP`;
  $('header-streak').textContent = `🔥 ${state.streak}`;

  Object.keys(QUESTION_BANK).forEach(key => {
    const subj = QUESTION_BANK[key];
    const prog = state.subjectProgress[key];
    const pct = (prog.currentLevel / 10) * 100;
    const card = document.querySelector(`.subject-card[data-subject="${key}"]`);
    if (!card) return;
    card.querySelector('.subject-progress-fill').style.width = pct + '%';
    card.querySelector('.subject-level').textContent = `Level ${prog.currentLevel}/10 · ${prog.xp} XP`;
  });

  renderBadges();
}

// ── RENDER: LEVEL SELECT ──
function renderLevelSelect() {
  const subj = QUESTION_BANK[currentSubject];
  const prog = state.subjectProgress[currentSubject];

  $('level-select-icon').textContent = subj.icon;
  $('level-select-name').textContent = subj.name;
  $('level-select-current').textContent = `Current Level: ${prog.currentLevel}`;

  const grid = $('level-grid');
  grid.innerHTML = '';

  for (let i = 0; i <= 10; i++) {
    const levelData = subj.levels[i];
    const unlocked = i <= prog.currentLevel;
    const completed = prog.completedLevels.includes(i);
    const btn = document.createElement('button');
    btn.className = `level-btn ${unlocked ? 'unlocked' : 'locked'} ${completed ? 'completed' : ''}`;
    if (completed) {
      const star = document.createElement('span');
      star.className = 'level-star';
      star.textContent = '✅';
      btn.appendChild(star);
    }
    const numEl = document.createElement('span');
    numEl.className = 'level-num';
    numEl.textContent = i;
    const nameEl = document.createElement('span');
    nameEl.className = 'level-name';
    nameEl.textContent = levelData.name;
    btn.appendChild(numEl);
    btn.appendChild(nameEl);
    if (unlocked) btn.onclick = () => goLevel(i);
    grid.appendChild(btn);
  }
}

// ── RENDER: QUESTION ──
function renderQuestion() {
  const q = currentQuestions[currentQIndex];
  const total = currentQuestions.length;
  answered = false;
  hintShown = false;
  selfAssessScore = null;

  // Header meta
  $('q-subject-icon').textContent = QUESTION_BANK[currentSubject].icon;
  $('q-subject-name').textContent = QUESTION_BANK[currentSubject].name;
  $('q-level').textContent = `Level ${currentLevel}`;
  $('q-counter').textContent = `${currentQIndex + 1} / ${total}`;

  // Progress bar
  $('q-progress').style.width = ((currentQIndex / total) * 100) + '%';

  // Mark pill
  $('q-mark-pill').textContent = `${q.marks} Mark${q.marks > 1 ? 's' : ''}`;

  // Question text
  $('question-text').textContent = q.q;

  // Type badge
  const typeLabels = { mcq: 'Multiple Choice', short: 'Short Answer', extended: 'Extended Writing' };
  $('question-type').textContent = typeLabels[q.type] || q.type;

  // Answer area
  $('mcq-area').style.display = q.type === 'mcq' ? 'block' : 'none';
  $('short-area').style.display = (q.type === 'short' || q.type === 'extended') ? 'block' : 'none';

  if (q.type === 'mcq') {
    renderMCQ(q);
  } else {
    const ta = $('answer-textarea');
    ta.value = '';
    ta.className = `short-answer-area ${q.type === 'extended' ? 'extended-area' : ''}`;
    ta.placeholder = q.type === 'extended'
      ? 'Write your extended answer here. Think about structure, use of examples and key vocabulary...'
      : 'Type your answer here...';
  }

  // Hint
  $('hint-text').textContent = q.hint || '';
  $('hint-text').classList.remove('visible');
  $('hint-btn').style.display = q.hint ? 'inline-flex' : 'none';

  // Feedback
  $('feedback-card').classList.remove('visible', 'correct-fb', 'incorrect-fb');

  // Submit btn
  $('submit-btn').style.display = 'inline-flex';
  $('next-btn').style.display = 'none';
  $('submit-btn').disabled = false;
}

function renderMCQ(q) {
  const container = $('mcq-options');
  container.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="option-letter">${escapeHTML(letters[i])}</span><span>${escapeHTML(opt)}</span>`;
    btn.onclick = () => selectMCQ(opt, q);
    container.appendChild(btn);
  });
}

function selectMCQ(selected, q) {
  if (answered) return;
  answered = true;
  const correct = selected === q.answer;
  const buttons = $('mcq-options').querySelectorAll('.option-btn');
  buttons.forEach(btn => {
    const optText = btn.querySelector('span:last-child').textContent;
    btn.disabled = true;
    if (optText === q.answer) btn.classList.add('correct');
    else if (optText === selected && !correct) btn.classList.add('incorrect');
  });
  submitAnswer(correct, q, 1);
}

function submitShortAnswer() {
  if (answered) return;
  const q = currentQuestions[currentQIndex];
  const userAnswer = $('answer-textarea').value.trim().toLowerCase();

  if (!userAnswer) { showToast('✏️', 'No answer', 'Please write something before submitting!'); return; }

  answered = true;
  $('submit-btn').style.display = 'none';

  if (q.type === 'extended' || q.marks === 5) {
    // Show model answer for self-assessment
    showModelAnswer(q, userAnswer);
  } else {
    // Keyword matching for 3-mark questions
    const keywords = q.keywords || [];
    const matchCount = keywords.filter(k => userAnswer.includes(k.toLowerCase())).length;
    const minMatch = Math.max(1, Math.floor(keywords.length * 0.4));
    const correct = matchCount >= minMatch;
    submitAnswer(correct, q, matchCount);
  }
}

function showModelAnswer(q, userAnswer) {
  const fb = $('feedback-card');
  fb.className = 'feedback-card visible correct-fb';
  fb.innerHTML = `
    <div class="feedback-title">📝 Check Your Answer</div>
    <div class="feedback-text">Compare your response to the model answer below. Be honest with yourself!</div>
    <div class="model-answer">
      <div class="model-answer-title">Model Answer / Key Points</div>
      <div class="model-answer-text">${escapeHTML(q.answer)}</div>
    </div>
    <div class="self-assess">
      <p>How well did you cover the key points?</p>
      <div class="score-btns" id="score-btns-container"></div>
    </div>
  `;
  [[0, '0 — Missed it'], [1, '1-2 — Some points'], [3, '3 — Good attempt'], [5, '4-5 — Excellent!']].forEach(([score, label]) => {
    const btn = document.createElement('button');
    btn.className = 'score-btn';
    btn.textContent = label;
    btn.addEventListener('click', () => selfScore(score, btn));
    $('score-btns-container').appendChild(btn);
  });
}

function selfScore(score, btn) {
  document.querySelectorAll('.score-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selfAssessScore = score;
  const correct = score >= 3;
  const xpGain = score === 5 ? 60 : score >= 3 ? 40 : score > 0 ? 15 : 0;
  updateStateAfterAnswer(correct, currentQuestions[currentQIndex], xpGain, score);
  showNextBtn();
}

function submitAnswer(correct, q, matchScore) {
  const xpGain = GameEngine.getXPForQuestion(q.marks, correct);
  updateStateAfterAnswer(correct, q, xpGain, matchScore);

  const fb = $('feedback-card');
  fb.className = `feedback-card visible ${correct ? 'correct-fb' : 'incorrect-fb'}`;

  if (correct) {
    sessionCorrect++;
    state.streak++;
    const streakMsg = state.streak >= 3 ? ` 🔥 ${state.streak} streak!` : '';
    fb.innerHTML = `
      <div class="feedback-title">✅ Correct!${streakMsg}</div>
      <div class="feedback-text">${q.type === 'mcq' ? `The answer is: <strong>${escapeHTML(q.answer)}</strong>` : `Good — you included key ideas!`}</div>
      ${xpGain > 0 ? `<span class="xp-gain">+${xpGain} XP</span>` : ''}
    `;
  } else {
    state.streak = 0;
    const incorrectBody = q.type === 'mcq'
      ? `<div class="feedback-text">The correct answer is: <strong>${escapeHTML(q.answer)}</strong></div>`
      : `<div class="feedback-text">Your answer didn't cover enough key points.</div>
         <div class="model-answer">
           <div class="model-answer-title">Key Points</div>
           <div class="model-answer-text">${escapeHTML(q.answer)}</div>
         </div>`;
    fb.innerHTML = `
      <div class="feedback-title">❌ Not quite</div>
      ${incorrectBody}
    `;
  }

  showNextBtn();
}

function updateStateAfterAnswer(correct, q, xpGain, score) {
  sessionTotal++;
  sessionXP += xpGain;

  // Update totals
  state.totalXP += xpGain;
  state.subjectProgress[currentSubject].xp += xpGain;

  // Check badges
  const answerBadges = GameEngine.checkBadges(state, {
    type: 'answer',
    marks: q.marks,
    streak: state.streak
  });
  const correctBadges = correct
    ? GameEngine.checkBadges(state, {
        type: 'correct',
        marks: q.marks,
        streak: state.streak
      })
    : [];
  const uniqueBadges = new Set([...answerBadges, ...correctBadges]);
  uniqueBadges.forEach(b => {
    if (!state.badges.includes(b)) {
      state.badges.push(b);
      const badge = BADGES.find(bd => bd.id === b);
      if (badge) showToast(badge.icon, 'Badge Unlocked!', badge.name);
    }
  });

  if (correct) {
    const streakBadges = GameEngine.checkBadges(state, { type: 'streak', streak: state.streak });
    streakBadges.forEach(b => {
      if (!state.badges.includes(b)) {
        state.badges.push(b);
        const badge = BADGES.find(bd => bd.id === b);
        if (badge) showToast(badge.icon, 'Badge Unlocked!', badge.name);
      }
    });
  }

  GameEngine.saveState(state);
  $('header-xp').textContent = `⭐ ${state.totalXP} XP`;
  $('header-streak').textContent = `🔥 ${state.streak}`;
}

function showNextBtn() {
  const isLast = currentQIndex >= currentQuestions.length - 1;
  if (isLast) $('q-progress').style.width = '100%';
  $('next-btn').style.display = 'inline-flex';
  $('next-btn').textContent = isLast ? '🏁 Finish Level' : 'Next Question →';
  $('next-btn').onclick = isLast ? finishLevel : nextQuestion;
  $('feedback-card').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  currentQIndex++;
  renderQuestion();
}

function finishLevel() {
  // Mark level as completed
  const prog = state.subjectProgress[currentSubject];
  if (!prog.completedLevels.includes(currentLevel)) {
    prog.completedLevels.push(currentLevel);
  }
  const passed = sessionCorrect >= Math.ceil(currentQuestions.length * 0.6);
  if (passed && prog.currentLevel <= currentLevel) {
    prog.currentLevel = Math.min(10, currentLevel + 1);
  }

  // Check level badges
  const lvlBadges = GameEngine.checkBadges(state, { type: 'level_complete' });
  lvlBadges.forEach(b => {
    if (!state.badges.includes(b)) {
      state.badges.push(b);
      const badge = BADGES.find(bd => bd.id === b);
      if (badge) setTimeout(() => showToast(badge.icon, 'Badge Unlocked!', badge.name), 800);
    }
  });

  GameEngine.saveState(state);
  renderLevelComplete(passed);
}

function renderLevelComplete(passed) {
  hideAll();
  show('complete');

  const pct = Math.round((sessionCorrect / sessionTotal) * 100);
  const subj = QUESTION_BANK[currentSubject];

  $('complete-icon').textContent = passed ? '🏆' : '📚';
  $('complete-title').textContent = passed ? 'Level Complete!' : 'Keep Practising!';
  $('complete-subject').textContent = `${subj.icon} ${subj.name} — Level ${currentLevel}`;
  $('complete-correct').textContent = `${sessionCorrect}/${sessionTotal}`;
  $('complete-pct').textContent = pct + '%';
  $('complete-xp').textContent = '+' + sessionXP;

  const msg = pct === 100 ? '⭐ Perfect score! Incredible!' :
              pct >= 80 ? '🎉 Excellent work!' :
              pct >= 60 ? '✅ Level passed! Keep going!' :
              '📖 Review the topics and try again.';
  $('complete-msg').textContent = msg;
  $('complete-next-unlock').textContent = passed
    ? `Level ${currentLevel + 1} unlocked in ${subj.name}!`
    : `Score 60%+ to unlock the next level`;

  $('complete-retry-btn').onclick = () => goLevel(currentLevel);
  $('complete-next-btn').onclick = () => {
    if (passed && currentLevel < 10) {
      goLevel(currentLevel + 1);
    } else {
      goSubject(currentSubject);
    }
  };
  $('complete-next-btn').textContent = passed && currentLevel < 10 ? 'Next Level →' : 'Level Select';
}

// ── BADGES ──
function renderBadges() {
  const grid = $('badges-grid');
  grid.innerHTML = '';
  BADGES.forEach(b => {
    const earned = state.badges.includes(b.id);
    const div = document.createElement('div');
    div.className = `badge-item ${earned ? 'earned' : 'locked'}`;
    if (!earned) div.title = b.desc;
    const iconEl = document.createElement('span');
    iconEl.className = 'badge-icon';
    iconEl.textContent = b.icon;
    const nameEl = document.createElement('div');
    nameEl.className = 'badge-name';
    nameEl.textContent = b.name;
    const descEl = document.createElement('div');
    descEl.className = 'badge-desc';
    descEl.textContent = b.desc;
    div.appendChild(iconEl);
    div.appendChild(nameEl);
    div.appendChild(descEl);
    grid.appendChild(div);
  });
}

// ── HINT ──
function toggleHint() {
  const hint = $('hint-text');
  hintShown = !hintShown;
  hint.classList.toggle('visible', hintShown);
}

// ── TOAST ──
function showToast(icon, title, msg) {
  const t = $('toast');
  $('toast-icon').textContent = icon;
  $('toast-title').textContent = title;
  $('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// ── RESET ──
function resetProgress() {
  if (!confirm('⚠️ Reset ALL progress? This cannot be undone.')) return;
  state = GameEngine.resetState();
  showToast('🔄', 'Progress Reset', 'Starting fresh!');
  goHome();
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.subject-card').forEach(card => {
    card.addEventListener('click', () => goSubject(card.dataset.subject));
  });
  document.querySelector('.logo').addEventListener('click', goHome);
  document.querySelector('.reset-btn').addEventListener('click', resetProgress);
  $('back-to-home').addEventListener('click', goHome);
  $('exit-level-btn').addEventListener('click', () => goSubject(currentSubject));
  $('hint-btn').addEventListener('click', toggleHint);
  $('submit-btn').addEventListener('click', submitShortAnswer);
  $('complete-home-btn').addEventListener('click', goHome);
  goHome();
});
