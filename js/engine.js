// ── GCSE Quest Engine ──
// Manages state, XP, streaks, badges, localStorage

const BADGES = [
  { id: 'first_answer',  icon: '⚡', name: 'First Answer!',       desc: 'Answered your first question' },
  { id: 'perfect_level', icon: '⭐', name: 'Perfect Level',        desc: 'Scored 100% on a level' },
  { id: 'on_fire',       icon: '🔥', name: 'On Fire!',             desc: '3 correct answers in a row' },
  { id: 'unstoppable',   icon: '🚀', name: 'Unstoppable!',         desc: '5 correct answers in a row' },
  { id: 'halfway',       icon: '🏅', name: 'Halfway There',        desc: 'Reached Level 5 in any subject' },
  { id: 'gcse_ready',    icon: '🏆', name: 'GCSE Ready!',          desc: 'Reached Level 10 in any subject' },
  { id: 'five_star',     icon: '💫', name: 'Five Star Answer',     desc: 'Aced a 5-mark question' },
  { id: 'speed_demon',   icon: '⚡', name: 'Speed Demon',          desc: 'Answered 5 questions in under 2 minutes' },
  { id: 'renaissance',   icon: '🎓', name: 'Renaissance Learner',  desc: 'Completed a level in all 4 subjects' },
  { id: 'subject_master',icon: '🧠', name: 'Subject Master',       desc: 'Completed all levels in one subject' },
];

const STORAGE_KEY = 'gcse_quest_v1';

const Engine = (() => {
  let state = {};

  function defaultState() {
    return {
      totalXP: 0,
      streak: 0,
      maxStreak: 0,
      badgesEarned: [],
      subjects: {
        maths:     { unlockedLevel: 0, completedLevels: {}, perfectLevels: {} },
        english:   { unlockedLevel: 0, completedLevels: {}, perfectLevels: {} },
        science:   { unlockedLevel: 0, completedLevels: {}, perfectLevels: {} },
        geography: { unlockedLevel: 0, completedLevels: {}, perfectLevels: {} },
      },
      speedTimer: { count: 0, start: null },
    };
  }

  function load() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      state = saved ? JSON.parse(saved) : defaultState();
    } catch(e) {
      state = defaultState();
    }
  }

  function save() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
  }

  function getState() { return state; }

  // XP multiplier by marks
  function xpForMarks(marks, correct) {
    if (!correct) return 0;
    return marks === 1 ? 10 : marks === 3 ? 30 : 60;
  }

  // Award XP and update streak, return { xpGained, newBadges }
  function recordAnswer({ correct, marks }) {
    const newBadges = [];

    // First answer
    if (!state.badgesEarned.includes('first_answer')) {
      state.badgesEarned.push('first_answer');
      newBadges.push('first_answer');
    }

    // Streak
    if (correct) {
      state.streak++;
      if (state.streak > state.maxStreak) state.maxStreak = state.streak;
    } else {
      state.streak = 0;
    }

    // Streak badges
    if (state.streak >= 3 && !state.badgesEarned.includes('on_fire')) {
      state.badgesEarned.push('on_fire'); newBadges.push('on_fire');
    }
    if (state.streak >= 5 && !state.badgesEarned.includes('unstoppable')) {
      state.badgesEarned.push('unstoppable'); newBadges.push('unstoppable');
    }

    // Five-star badge
    if (correct && marks === 5 && !state.badgesEarned.includes('five_star')) {
      state.badgesEarned.push('five_star'); newBadges.push('five_star');
    }

    // XP
    const xpGained = xpForMarks(marks, correct);
    state.totalXP += xpGained;

    // Speed demon tracking
    const now = Date.now();
    if (!state.speedTimer.start) state.speedTimer = { count: 0, start: now };
    state.speedTimer.count++;
    if (state.speedTimer.count >= 5) {
      const elapsed = (now - state.speedTimer.start) / 1000;
      if (elapsed < 120 && !state.badgesEarned.includes('speed_demon')) {
        state.badgesEarned.push('speed_demon'); newBadges.push('speed_demon');
      }
      state.speedTimer = { count: 0, start: now };
    }

    save();
    return { xpGained, newBadges };
  }

  // Call when a level is completed
  function completeLevel({ subject, level, score, total, xpEarned }) {
    const newBadges = [];
    const subj = state.subjects[subject];

    const pct = total > 0 ? score / total : 0;
    const passed = pct >= 0.6;
    const perfect = score === total;

    if (passed) {
      subj.completedLevels[level] = score;
      if (perfect) subj.perfectLevels[level] = true;
      // Unlock next level
      if (level + 1 > subj.unlockedLevel) {
        subj.unlockedLevel = level + 1;
      }
    }

    // Perfect-level badge
    if (perfect && !state.badgesEarned.includes('perfect_level')) {
      state.badgesEarned.push('perfect_level'); newBadges.push('perfect_level');
    }

    // Halfway badge (level 5 unlocked in any subject)
    const anyHalfway = Object.values(state.subjects).some(s => s.unlockedLevel >= 5);
    if (anyHalfway && !state.badgesEarned.includes('halfway')) {
      state.badgesEarned.push('halfway'); newBadges.push('halfway');
    }

    // GCSE Ready badge (level 10 unlocked)
    const anyTop = Object.values(state.subjects).some(s => s.unlockedLevel >= 10);
    if (anyTop && !state.badgesEarned.includes('gcse_ready')) {
      state.badgesEarned.push('gcse_ready'); newBadges.push('gcse_ready');
    }

    // Subject Master: all 11 levels completed in one subject
    const isComplete = Object.keys(subj.completedLevels).length >= 11;
    if (isComplete && !state.badgesEarned.includes('subject_master')) {
      state.badgesEarned.push('subject_master'); newBadges.push('subject_master');
    }

    // Renaissance Learner: at least 1 level completed in all 4 subjects
    const allSubjDone = Object.values(state.subjects).every(s => Object.keys(s.completedLevels).length >= 1);
    if (allSubjDone && !state.badgesEarned.includes('renaissance')) {
      state.badgesEarned.push('renaissance'); newBadges.push('renaissance');
    }

    save();
    return { passed, perfect, newBadges };
  }

  function getBadgeInfo(id) {
    return BADGES.find(b => b.id === id);
  }

  function isLevelUnlocked(subject, level) {
    return level <= state.subjects[subject].unlockedLevel;
  }

  function isLevelCompleted(subject, level) {
    return level in state.subjects[subject].completedLevels;
  }

  function isLevelPerfect(subject, level) {
    return level in state.subjects[subject].perfectLevels;
  }

  function getSubjectProgress(subject) {
    const s = state.subjects[subject];
    return s.unlockedLevel;
  }

  return {
    load, save, getState, recordAnswer, completeLevel,
    getBadgeInfo, isLevelUnlocked, isLevelCompleted, isLevelPerfect,
    getSubjectProgress, BADGES,
  };
})();
