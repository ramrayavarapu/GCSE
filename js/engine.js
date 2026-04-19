// GCSE Quest - Game Engine
const GameEngine = (() => {

  const DEFAULT_STATE = {
    xp: 0,
    totalXP: 0,
    currentLevel: 0,
    streak: 0,
    maxStreak: 0,
    badges: [],
    subjectProgress: {
      mathematics: { currentLevel: 0, completedLevels: [], xp: 0 },
      english:     { currentLevel: 0, completedLevels: [], xp: 0 },
      science:     { currentLevel: 0, completedLevels: [], xp: 0 },
      geography:   { currentLevel: 0, completedLevels: [], xp: 0 }
    },
    answeredQuestions: {},
    sessionStats: { correct: 0, total: 0, startTime: null }
  };

  function cloneDefaultState() {
    return JSON.parse(JSON.stringify(DEFAULT_STATE));
  }

  function loadState() {
    try {
      const saved = localStorage.getItem('gcsequest_state');
      if (!saved) return cloneDefaultState();

      const parsed = JSON.parse(saved);
      const base = cloneDefaultState();
      const merged = { ...base, ...parsed };

      merged.subjectProgress = { ...base.subjectProgress };
      Object.keys(base.subjectProgress).forEach(subject => {
        const parsedSubject = parsed.subjectProgress?.[subject] || {};
        merged.subjectProgress[subject] = {
          ...base.subjectProgress[subject],
          ...parsedSubject,
          completedLevels: Array.isArray(parsedSubject.completedLevels)
            ? parsedSubject.completedLevels
            : []
        };
      });

      merged.badges = Array.isArray(parsed.badges) ? parsed.badges : [];
      merged.answeredQuestions =
        parsed.answeredQuestions && typeof parsed.answeredQuestions === 'object'
          ? parsed.answeredQuestions
          : {};
      merged.sessionStats = {
        ...base.sessionStats,
        ...(parsed.sessionStats || {})
      };

      return merged;
    } catch { return cloneDefaultState(); }
  }

  function saveState(state) {
    try { localStorage.setItem('gcsequest_state', JSON.stringify(state)); } catch {}
  }

  function resetState() {
    localStorage.removeItem('gcsequest_state');
    return cloneDefaultState();
  }

  function getXPForQuestion(marks, correct) {
    if (!correct) return 0;
    return marks === 1 ? 10 : marks === 3 ? 30 : 60;
  }

  function getLevelThreshold(level) {
    return level * 200;
  }

  function checkBadges(state, event) {
    const newBadges = [];
    const already = state.badges;

    if (event.type === 'answer' && !already.includes('first_blood')) {
      newBadges.push('first_blood');
    }
    if (event.type === 'correct' && !already.includes('five_marker') && event.marks === 5) {
      newBadges.push('five_marker');
    }
    if (event.type === 'streak' && event.streak >= 3 && !already.includes('streak_3')) {
      newBadges.push('streak_3');
    }
    if (event.type === 'streak' && event.streak >= 5 && !already.includes('streak_5')) {
      newBadges.push('streak_5');
    }
    if (event.type === 'level_complete' && !already.includes('level_5')) {
      const anyLevel5 = Object.values(state.subjectProgress).some(s => s.currentLevel >= 5);
      if (anyLevel5) newBadges.push('level_5');
    }
    if (event.type === 'level_complete' && !already.includes('level_10')) {
      const anyLevel10 = Object.values(state.subjectProgress).some(s => s.currentLevel >= 10);
      if (anyLevel10) newBadges.push('level_10');
    }
    if (event.type === 'level_complete' && !already.includes('all_subjects')) {
      const allStarted = Object.values(state.subjectProgress).every(s => s.completedLevels.length > 0);
      if (allStarted) newBadges.push('all_subjects');
    }
    if (event.type === 'level_complete' && !already.includes('subject_master')) {
      const anyComplete = Object.values(state.subjectProgress).some(s => s.currentLevel >= 10);
      if (anyComplete) newBadges.push('subject_master');
    }

    return newBadges;
  }

  function getOverallLevel(state) {
    const levels = Object.values(state.subjectProgress).map(s => s.currentLevel);
    return Math.round(levels.reduce((a,b) => a+b, 0) / levels.length);
  }

  return { loadState, saveState, resetState, getXPForQuestion, getLevelThreshold, checkBadges, getOverallLevel, LEVEL_NAMES };
})();
