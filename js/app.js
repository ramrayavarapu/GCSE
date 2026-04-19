// ── GCSE Quest App ──
// UI controller and navigation

(function () {
  'use strict';

  // ── State ──
  let currentSubject = null;
  let currentLevel   = null;
  let currentQuestions = [];
  let currentQIndex  = 0;
  let sessionScore   = 0;
  let sessionTotal   = 0;
  let sessionXP      = 0;
  let selectedMCQ    = null;
  let selfAssessed   = false;

  const SUBJECT_LABELS = {
    maths: '📐 Maths', english: '📚 English',
    science: '🔬 Science', geography: '🌍 Geography',
  };

  // ── Init ──
  Engine.load();
  renderHome();
  bindNav();

  // ── Navigation ──
  function bindNav() {
    document.getElementById('back-home').addEventListener('click', showHome);
    document.getElementById('back-levels').addEventListener('click', () => showLevels(currentSubject));
    document.getElementById('hint-btn').addEventListener('click', toggleHint);
    document.getElementById('submit-btn').addEventListener('click', submitAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('next-level-btn').addEventListener('click', goNextLevel);
    document.getElementById('retry-btn').addEventListener('click', retryLevel);
    document.getElementById('levels-btn').addEventListener('click', () => showLevels(currentSubject));

    document.querySelectorAll('.subject-btn').forEach(btn => {
      btn.addEventListener('click', () => showLevels(btn.dataset.subject));
    });
  }

  // ── Home ──
  function showHome() {
    showScreen('screen-home');
    renderHome();
  }

  function renderHome() {
    const state = Engine.getState();

    // XP / streak HUD
    document.getElementById('hud-xp').textContent = `⚡ ${state.totalXP} XP`;
    document.getElementById('hud-streak').textContent = `🔥 ${state.streak}`;

    // Subject progress labels
    ['maths','english','science','geography'].forEach(s => {
      const lvl = Engine.getSubjectProgress(s);
      const el = document.getElementById(`prog-${s}`);
      if (el) el.textContent = `Level ${lvl}`;
    });

    // Badges bar
    const bar = document.getElementById('badges-bar');
    bar.innerHTML = '';
    state.badgesEarned.forEach(id => {
      const info = Engine.getBadgeInfo(id);
      if (!info) return;
      const span = document.createElement('span');
      span.className = 'badge-earned';
      span.title = `${info.name}: ${info.desc}`;
      span.textContent = info.icon;
      bar.appendChild(span);
    });
  }

  // ── Levels ──
  function showLevels(subject) {
    currentSubject = subject;
    showScreen('screen-levels');

    document.getElementById('levels-subject-title').textContent = SUBJECT_LABELS[subject] || subject;

    const grid = document.getElementById('level-grid');
    grid.innerHTML = '';

    const subjData = questionsData[subject];
    if (!subjData) return;

    subjData.levels.forEach(({ level, topic }) => {
      const unlocked  = Engine.isLevelUnlocked(subject, level);
      const completed = Engine.isLevelCompleted(subject, level);
      const perfect   = Engine.isLevelPerfect(subject, level);

      const btn = document.createElement('button');
      btn.className = `level-btn${!unlocked ? ' locked' : ''}${perfect ? ' perfect' : completed ? ' completed' : ''}`;

      btn.innerHTML = `
        <div class="level-star">${perfect ? '⭐' : completed ? '✓' : ''}</div>
        <div class="level-num">${level}</div>
        <div class="level-topic">${topic}</div>
        ${!unlocked ? '<div class="level-lock">🔒</div>' : ''}
      `;

      if (unlocked) {
        btn.addEventListener('click', () => startLevel(subject, level));
      }
      grid.appendChild(btn);
    });
  }

  // ── Question Session ──
  function startLevel(subject, level) {
    currentSubject   = subject;
    currentLevel     = level;
    currentQIndex    = 0;
    sessionScore     = 0;
    sessionTotal     = 0;
    sessionXP        = 0;

    const levelData = questionsData[subject].levels.find(l => l.level === level);
    if (!levelData) return;

    // Shuffle questions
    currentQuestions = [...levelData.questions].sort(() => Math.random() - 0.5);

    showScreen('screen-question');
    renderQuestion();
  }

  function renderQuestion() {
    const q = currentQuestions[currentQIndex];
    if (!q) return;

    // Nav / progress
    document.getElementById('q-progress').textContent =
      `Q${currentQIndex + 1} / ${currentQuestions.length}`;
    const state = Engine.getState();
    document.getElementById('q-xp').textContent = `⚡ ${state.totalXP} XP`;

    // Meta pills
    document.getElementById('q-level-label').textContent = `Level ${currentLevel}`;
    document.getElementById('q-marks-label').textContent = `${q.marks} mark${q.marks > 1 ? 's' : ''}`;
    document.getElementById('q-streak').textContent = state.streak;

    // Question text
    document.getElementById('question-text').textContent = q.q;

    // Reset UI
    document.getElementById('hint-text').classList.add('hidden');
    document.getElementById('feedback-panel').classList.add('hidden');
    document.getElementById('model-answer-box').classList.add('hidden');
    document.getElementById('self-assess').classList.add('hidden');
    document.getElementById('next-btn').classList.add('hidden');
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('submit-btn').classList.remove('hidden');
    selectedMCQ = null;
    selfAssessed = false;

    // Show correct input type
    const optionsEl = document.getElementById('options-container');
    const inputEl   = document.getElementById('input-container');

    if (q.type === 'mcq') {
      optionsEl.classList.remove('hidden');
      inputEl.classList.add('hidden');
      renderMCQ(q);
    } else {
      optionsEl.classList.add('hidden');
      inputEl.classList.remove('hidden');
      document.getElementById('answer-input').value = '';
    }
  }

  function renderMCQ(q) {
    const container = document.getElementById('options-container');
    container.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMCQ = opt;
      });
      container.appendChild(btn);
    });
  }

  function toggleHint() {
    const hint = document.getElementById('hint-text');
    const q = currentQuestions[currentQIndex];
    if (hint.classList.contains('hidden')) {
      hint.textContent = q.hint;
      hint.classList.remove('hidden');
    } else {
      hint.classList.add('hidden');
    }
  }

  // ── Submit ──
  function submitAnswer() {
    const q = currentQuestions[currentQIndex];
    document.getElementById('submit-btn').disabled = true;

    if (q.type === 'mcq') {
      if (!selectedMCQ) {
        document.getElementById('submit-btn').disabled = false;
        return;
      }
      gradeMCQ(q);
    } else if (q.type === 'short') {
      gradeShort(q);
    } else {
      gradeExtended(q);
    }
  }

  function gradeMCQ(q) {
    const correct = selectedMCQ === q.answer;
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.answer) btn.classList.add('correct');
      else if (btn.textContent === selectedMCQ && !correct) btn.classList.add('wrong');
    });

    const result = Engine.recordAnswer({ correct, marks: q.marks });
    sessionTotal += q.marks;
    if (correct) sessionScore += q.marks;
    sessionXP += result.xpGained;

    showFeedback({ correct, xpGained: result.xpGained, newBadges: result.newBadges, q });
  }

  function gradeShort(q) {
    const raw = document.getElementById('answer-input').value.toLowerCase();
    const keywords = (q.keywords || []).map(k => k.toLowerCase());
    const matched  = keywords.filter(k => raw.includes(k)).length;
    const pct = keywords.length > 0 ? matched / keywords.length : 0;

    const correct = pct >= 0.5;
    const result = Engine.recordAnswer({ correct, marks: q.marks });
    sessionTotal += q.marks;
    if (correct) sessionScore += q.marks;
    sessionXP += result.xpGained;

    const feedbackEl = document.getElementById('feedback-box');
    if (correct) {
      feedbackEl.textContent = `✓ Good answer! ${matched}/${keywords.length} key points covered. +${result.xpGained} XP`;
      feedbackEl.className = 'feedback-box correct';
    } else {
      feedbackEl.textContent = `✗ Check the model answer. ${matched}/${keywords.length} key points covered.`;
      feedbackEl.className = 'feedback-box wrong';
    }

    document.getElementById('model-answer-text').textContent = q.answer;
    document.getElementById('model-answer-box').classList.remove('hidden');
    document.getElementById('feedback-panel').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');

    showBadgeToasts(result.newBadges);
    updateHUDXP();
  }

  function gradeExtended(q) {
    // Always show model answer + self-assess for extended questions
    document.getElementById('model-answer-text').textContent = q.modelAnswer || q.answer;
    document.getElementById('model-answer-box').classList.remove('hidden');
    document.getElementById('self-assess').classList.remove('hidden');
    document.getElementById('feedback-panel').classList.remove('hidden');

    const feedbackEl = document.getElementById('feedback-box');
    feedbackEl.textContent = 'Read the model answer and honestly assess your response below.';
    feedbackEl.className = 'feedback-box partial';

    // { once: true } ensures handlers don't stack when multiple extended questions appear
    document.querySelectorAll('.sa-btn').forEach(btn => {
      btn.addEventListener('click', function handler() {
        btn.removeEventListener('click', handler);
        if (selfAssessed) return;
        selfAssessed = true;
        const score = parseInt(btn.dataset.score);
        document.querySelectorAll('.sa-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const correct = score >= 3;
        const result = Engine.recordAnswer({ correct, marks: q.marks });
        sessionTotal += q.marks;
        sessionScore  += score;
        sessionXP    += result.xpGained;

        feedbackEl.textContent = correct
          ? `✓ Well done — ${score}/5 marks. +${result.xpGained} XP`
          : `✗ Keep practising — ${score}/5 marks. Study the model answer.`;
        feedbackEl.className = correct ? 'feedback-box correct' : 'feedback-box wrong';

        document.getElementById('next-btn').classList.remove('hidden');
        showBadgeToasts(result.newBadges);
        updateHUDXP();
      });
    });
  }

  function showFeedback({ correct, xpGained, newBadges, q }) {
    const feedbackEl = document.getElementById('feedback-box');
    if (correct) {
      feedbackEl.textContent = `✓ Correct! +${xpGained} XP`;
      feedbackEl.className = 'feedback-box correct';
    } else {
      feedbackEl.textContent = `✗ The answer was: ${q.answer}`;
      feedbackEl.className = 'feedback-box wrong';
    }
    document.getElementById('feedback-panel').classList.remove('hidden');
    document.getElementById('next-btn').classList.remove('hidden');
    showBadgeToasts(newBadges);
    updateHUDXP();
  }

  function updateHUDXP() {
    const state = Engine.getState();
    document.getElementById('q-xp').textContent = `⚡ ${state.totalXP} XP`;
    document.getElementById('q-streak').textContent = state.streak;
  }

  // ── Next Question ──
  function nextQuestion() {
    currentQIndex++;
    if (currentQIndex < currentQuestions.length) {
      renderQuestion();
    } else {
      showComplete();
    }
  }

  // ── Level Complete ──
  function showComplete() {
    const pct = sessionTotal > 0 ? Math.round((sessionScore / sessionTotal) * 100) : 0;
    const { passed, perfect, newBadges } = Engine.completeLevel({
      subject: currentSubject, level: currentLevel,
      score: sessionScore, total: sessionTotal, xpEarned: sessionXP,
    });

    showScreen('screen-complete');

    document.getElementById('complete-icon').textContent = perfect ? '⭐' : passed ? '🎉' : '😤';
    document.getElementById('complete-title').textContent =
      perfect ? 'Perfect Score!' : passed ? 'Level Complete!' : 'Keep Practising!';

    const statsEl = document.getElementById('complete-stats');
    statsEl.innerHTML = `
      <div class="stat-row"><span>Score</span><span class="stat-val">${sessionScore} / ${sessionTotal} marks (${pct}%)</span></div>
      <div class="stat-row"><span>XP Earned</span><span class="stat-val">+${sessionXP} XP</span></div>
      <div class="stat-row"><span>Result</span><span class="stat-val">${passed ? (perfect ? '⭐ Perfect' : '✓ Passed') : '✗ Not passed (need 60%)'}</span></div>
    `;

    // New badges
    const badgesEl = document.getElementById('new-badges-list');
    badgesEl.innerHTML = '';
    newBadges.forEach(id => {
      const info = Engine.getBadgeInfo(id);
      if (!info) return;
      const span = document.createElement('span');
      span.title = `${info.name}: ${info.desc}`;
      span.textContent = info.icon;
      badgesEl.appendChild(span);
    });

    // Next level button
    const hasNext = currentLevel < 10 && Engine.isLevelUnlocked(currentSubject, currentLevel + 1);
    const nextBtn = document.getElementById('next-level-btn');
    if (hasNext) nextBtn.classList.remove('hidden');
    else nextBtn.classList.add('hidden');
  }

  function goNextLevel() { startLevel(currentSubject, currentLevel + 1); }
  function retryLevel()   { startLevel(currentSubject, currentLevel); }

  // ── Badge Toast ──
  function showBadgeToasts(ids) {
    if (!ids || ids.length === 0) return;
    let delay = 0;
    ids.forEach(id => {
      const info = Engine.getBadgeInfo(id);
      if (!info) return;
      setTimeout(() => {
        const toast = document.getElementById('badge-toast');
        toast.textContent = `${info.icon} Badge unlocked: ${info.name}!`;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2500);
      }, delay);
      delay += 3000;
    });
  }

  // ── Screen Switch ──
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  }

})();
