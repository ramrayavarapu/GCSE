// GCSE Quest — Adaptive Practice + Mock Exam Enhancements
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
      <div class="mode-note" id="mode-note">Adaptive mode prioritises weak topics. Mock exam mode gives a mixed 20-question paper.</div>
    `;
    hero.appendChild(panel);

    $('adaptive-practice-btn').addEventListener('click', () => {
      const subjectKey = Object.keys(QUESTION_BANK)[0];
      if (typeof goSubject === 'function') goSubject(subjectKey);
      showToast('🎯', 'Adaptive Practice', 'Choose a subject level — questions will prioritise your weak areas.');
    });

    $('mock-exam-btn').addEventListener('click', startMockExam);
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

  const originalGoLevel = window.goLevel || goLevel;
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
      $('complete-msg').textContent = pct >= 80 ? 'Excellent mock performance.' : pct >= 60 ? 'Good attempt — review weak topics next.' : 'Use adaptive practice to rebuild weak areas.';
      $('complete-next-unlock').textContent = 'Mock scores are saved locally for progress tracking.';
      $('complete-retry-btn').onclick = startMockExam;
      $('complete-next-btn').onclick = goHome;
      $('complete-next-btn').textContent = 'Home';
      return;
    }
    originalFinishLevel();
  };

  document.addEventListener('DOMContentLoaded', buildModePanel);
})();
