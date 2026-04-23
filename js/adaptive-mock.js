// GCSE Quest — Adaptive Practice + Mock Exam + Motivational Analytics
// Loaded after app.js so it can wrap the existing navigation and scoring flow safely.

(function setupAdaptiveMockMode() {
  const STORAGE_KEY = 'gcseQuestAdaptiveStats';
  const MOCK_SIZE = 20;

  function $(id) { return document.getElementById(id); }

  function loadStats() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { byQuestion: {}, byTopic: {}, sessions: [] };
    } catch (e) {
      return { byQuestion: {}, byTopic: {}, sessions: [] };
    }
  }

  function saveStats(stats) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function safePct(correct, attempts) {
    if (!attempts) return 0;
    return Math.round((correct / attempts) * 100);
  }

  function topicLabel(topicKey) {
    const [subjectKey, level] = topicKey.split(':');
    const subject = QUESTION_BANK[subjectKey];
    if (!subject || !subject.levels[level]) return topicKey;
    return `${subject.icon} ${subject.name} · Level ${level}: ${subject.levels[level].name}`;
  }

  function getQuestionBankCount() {
    return Object.values(QUESTION_BANK).reduce((subjectTotal, subject) => {
      return subjectTotal + Object.values(subject.levels).reduce((levelTotal, level) => levelTotal + level.questions.length, 0);
    }, 0);
  }

  function renderMotivationalDashboard() {
    const grid = $('analytics-grid');
    const focus = $('weak-topic-list');
    if (!grid || !focus) return;

    const stats = loadStats();
    const attempts = Object.values(stats.byQuestion).reduce((sum, item) => sum + item.attempts, 0);
    const correct = Object.values(stats.byQuestion).reduce((sum, item) => sum + item.correct, 0);
    const accuracy = safePct(correct, attempts);
    const latestMock = [...(stats.sessions || [])].reverse().find(s => s.type === 'mock');
    const totalQuestions = getQuestionBankCount();

    const progressMessage = attempts === 0
      ? 'Start your first challenge — every expert began with question one.'
      : accuracy >= 80
        ? `Brilliant progress — ${accuracy}% accuracy shows strong GCSE momentum.`
        : accuracy >= 60
          ? `Good progress — ${accuracy}% accuracy means your practice is building confidence.`
          : `You have started the journey — ${accuracy}% is your launch point, not your limit.`;

    grid.innerHTML = `
      <div class="analytics-card"><div class="analytics-value">${attempts}</div><div class="analytics-label">Questions Tried</div><div class="analytics-note">Every attempt grows your exam brain.</div></div>
      <div class="analytics-card"><div class="analytics-value">${accuracy}%</div><div class="analytics-label">Practice Score</div><div class="analytics-note">${progressMessage}</div></div>
      <div class="analytics-card"><div class="analytics-value">${latestMock ? latestMock.score + '%' : 'Ready'}</div><div class="analytics-label">Latest Mock</div><div class="analytics-note">${latestMock ? 'Great effort — use this as your next stepping stone.' : 'Try a mock when you want a real exam-style challenge.'}</div></div>
      <div class="analytics-card"><div class="analytics-value">${totalQuestions}+</div><div class="analytics-label">Question Bank</div><div class="analytics-note">Plenty of practice without memorising answers.</div></div>
    `;

    const topics = Object.entries(stats.byTopic || {})
      .filter(([, value]) => value.attempts >= 2)
      .map(([key, value]) => ({ key, attempts: value.attempts, pct: safePct(value.correct, value.attempts) }))
      .sort((a, b) => a.pct - b.pct)
      .slice(0, 3);

    if (!topics.length) {
      focus.innerHTML = `<div class="focus-card">🎯 Next step: try a level in any subject. Your dashboard will then suggest what to practise next.</div>`;
      return;
    }

    focus.innerHTML = `
      <div class="focus-title">🎯 Practice Next — You’re Getting Closer</div>
      ${topics.map(t => `<div class="focus-card"><strong>${topicLabel(t.key)}</strong><span>${t.pct}% so far · ${t.attempts} attempts</span><em>Keep going — a few focused questions here can unlock a big jump.</em></div>`).join('')}
    `;
  }

  function questionWeight(question, topicKey, stats) {
    const qStats = stats.byQuestion[question.id] || { attempts: 0, correct: 0 };
    const topicStats = stats.byTopic[topicKey] || { attempts: 0, correct: 0 };
    const qAccuracy = qStats.attempts ? qStats.correct / qStats.attempts : 0.5;
    const topicAccuracy = topicStats.attempts ? topicStats.correct / topicStats.attempts : 0.5;
    const difficultyBoost = question.marks === 5 ? 1.35 : question.marks === 3 ? 1.15 : 1;
    const weaknessBoost = (1 - qAccuracy) + (1 - topicAccuracy);
    const newQuestionBoost = qStats.attempts === 0 ? 1.25 : 1;
    return (1 + weaknessBoost) * difficultyBoost * newQuestionBoost;
  }

  function selectAdaptiveQuestions(subjectKey, level, limit) {
    const levelData = QUESTION_BANK[subjectKey].levels[level];
    const topicKey = `${subjectKey}:${level}`;
    const stats = loadStats();
    const weighted = levelData.questions.map(q => ({ q, w: questionWeight(q, topicKey, stats) }));
    const selected = [];
    const pool = [...weighted];

    while (pool.length && selected.length < limit) {
      const totalWeight = pool.reduce((sum, item) => sum + item.w, 0);
      let pick = Math.random() * totalWeight;
      const index = pool.findIndex(item => {
        pick -= item.w;
        return pick <= 0;
      });
      const chosenIndex = index >= 0 ? index : pool.length - 1;
      selected.push(pool[chosenIndex].q);
      pool.splice(chosenIndex, 1);
    }

    return selected;
  }

  function collectMockQuestions() {
    const all = [];
    Object.entries(QUESTION_BANK).forEach(([subjectKey, subject]) => {
      Object.entries(subject.levels).forEach(([level, levelData]) => {
        levelData.questions.forEach(q => all.push({ ...q, _subject: subjectKey, _level: Number(level) }));
      });
    });

    const grouped = {
      mcq: all.filter(q => q.type === 'mcq'),
      short: all.filter(q => q.type === 'short'),
      extended: all.filter(q => q.type === 'extended')
    };

    return [
      ...shuffle(grouped.mcq).slice(0, 8),
      ...shuffle(grouped.short).slice(0, 8),
      ...shuffle(grouped.extended).slice(0, 4)
    ].slice(0, MOCK_SIZE);
  }

  function recordQuestionOutcome(question, correct) {
    const subjectKey = question._subject || window.currentSubject || currentSubject;
    const level = Number.isInteger(question._level) ? question._level : currentLevel;
    if (!subjectKey && subjectKey !== 0) return;
    const topicKey = `${subjectKey}:${level}`;
    const stats = loadStats();
    const qStats = stats.byQuestion[question.id] || { attempts: 0, correct: 0 };
    qStats.attempts += 1;
    if (correct) qStats.correct += 1;
    stats.byQuestion[question.id] = qStats;

    const tStats = stats.byTopic[topicKey] || { attempts: 0, correct: 0 };
    tStats.attempts += 1;
    if (correct) tStats.correct += 1;
    stats.byTopic[topicKey] = tStats;
    saveStats(stats);
    renderMotivationalDashboard();
  }

  function buildModePanel() {
    if ($('mode-panel')) return;
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const panel = document.createElement('div');
    panel.id = 'mode-panel';
    panel.className = 'mode-panel';
    panel.innerHTML = `
      <button class="btn btn-primary" id="adaptive-practice-btn">🎯 Adaptive Practice</button>
      <button class="btn btn-success" id="mock-exam-btn">📝 Mock Exam Mode</button>
      <div class="mode-note" id="mode-note">Adaptive practice chooses questions that help you grow. Mock exam mode gives a 20-question challenge.</div>
    `;
    hero.appendChild(panel);

    $('adaptive-practice-btn').addEventListener('click', () => {
      const subjectKey = Object.keys(QUESTION_BANK)[0];
      if (typeof goSubject === 'function') goSubject(subjectKey);
      showToast('🎯', 'Adaptive Practice', 'Choose a subject level — the app will guide your next best practice.');
    });

    $('mock-exam-btn').addEventListener('click', startMockExam);
    renderMotivationalDashboard();
  }

  function startMockExam() {
    currentSubject = 'mockExam';
    currentLevel = 0;
    currentQuestions = collectMockQuestions();
    currentQIndex = 0;
    sessionCorrect = 0;
    sessionTotal = 0;
    sessionXP = 0;
    answered = false;
    hideAll();
    show('question');
    showToast('📝', 'Mock Exam Started', 'Mixed GCSE paper: 20 questions across subjects and levels.');
    renderQuestion();
  }

  window.goLevel = function adaptiveGoLevel(level) {
    currentLevel = level;
    const available = QUESTION_BANK[currentSubject].levels[level].questions.length;
    currentQuestions = selectAdaptiveQuestions(currentSubject, level, Math.min(10, available));
    currentQIndex = 0;
    sessionCorrect = 0;
    sessionTotal = 0;
    sessionXP = 0;
    answered = false;
    hideAll();
    show('question');
    renderQuestion();
  };

  const originalRenderQuestion = window.renderQuestion || renderQuestion;
  window.renderQuestion = function enhancedRenderQuestion() {
    originalRenderQuestion();
    const q = currentQuestions[currentQIndex];
    if (!q) return;
    if (q._subject) {
      $('q-subject-icon').textContent = QUESTION_BANK[q._subject].icon;
      $('q-subject-name').textContent = QUESTION_BANK[q._subject].name;
      $('q-level').textContent = `Mock · Level ${q._level}`;
    }
  };

  const originalUpdateStateAfterAnswer = window.updateStateAfterAnswer || updateStateAfterAnswer;
  window.updateStateAfterAnswer = function enhancedUpdateStateAfterAnswer(correct, q, xpGain, score) {
    recordQuestionOutcome(q, correct);
    if (currentSubject === 'mockExam') {
      sessionTotal++;
      sessionXP += xpGain;
      state.totalXP += xpGain;
      GameEngine.saveState(state);
      $('header-xp').textContent = `⭐ ${state.totalXP} XP`;
      return;
    }
    originalUpdateStateAfterAnswer(correct, q, xpGain, score);
  };

  const originalFinishLevel = window.finishLevel || finishLevel;
  window.finishLevel = function enhancedFinishLevel() {
    if (currentSubject === 'mockExam') {
      const pct = Math.round((sessionCorrect / Math.max(sessionTotal, 1)) * 100);
      const stats = loadStats();
      stats.sessions.push({ type: 'mock', date: new Date().toISOString(), score: pct, correct: sessionCorrect, total: sessionTotal });
      saveStats(stats);
      hideAll();
      show('complete');
      $('complete-icon').textContent = pct >= 70 ? '🏆' : '📚';
      $('complete-title').textContent = 'Mock Exam Complete';
      $('complete-subject').textContent = 'Mixed GCSE paper — Maths, English, Science and Geography';
      $('complete-correct').textContent = `${sessionCorrect}/${sessionTotal}`;
      $('complete-pct').textContent = `${pct}%`;
      $('complete-xp').textContent = `+${sessionXP}`;
      $('complete-msg').textContent = pct >= 80 ? 'Excellent progress — your GCSE confidence is growing.' : pct >= 60 ? 'Good effort — a focused practice round can lift this further.' : 'Great start — adaptive practice will help you build from here.';
      $('complete-next-unlock').textContent = 'Mock scores are saved locally and shown on your Learning Journey dashboard.';
      $('complete-retry-btn').onclick = startMockExam;
      $('complete-next-btn').onclick = goHome;
      $('complete-next-btn').textContent = 'Home';
      renderMotivationalDashboard();
      return;
    }
    originalFinishLevel();
  };

  document.addEventListener('DOMContentLoaded', buildModePanel);
})();
