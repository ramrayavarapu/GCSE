# 🎓 GCSE Quest — Gamified GCSE Revision

A fully gamified GCSE revision platform covering **Maths, English Language & Literature, Science (Combined), and Geography**. Designed for students working from Level 0 (complete beginner) up to Level 10 (exam ready).

[![Live Demo](https://img.shields.io/badge/▶%20Play%20Now-GitHub%20Pages-blue?style=for-the-badge)](https://YOUR-USERNAME.github.io/gcse-quest/)

---

## 🎮 Features

| Feature | Detail |
|---|---|
| **4 Subjects** | Maths, English, Science, Geography |
| **11 Levels** | Level 0 (Novice) → Level 10 (GCSE Legend) |
| **3 Question Types** | 1-mark MCQ, 3-mark short answer, 5-mark extended |
| **55 Questions** | Per subject (275 total across all subjects) |
| **XP System** | 10 / 30 / 60 XP per correct answer by mark weight |
| **Streak Tracker** | Consecutive correct answers tracked with fire 🔥 |
| **10 Badges** | Unlockable achievements |
| **Self-Assessment** | For 5-mark extended writing questions |
| **Hints** | Available on every question |
| **Persistent Progress** | Saved in browser localStorage |
| **Mobile Friendly** | Fully responsive design |

---

## 📚 Subject Breakdown

### 📐 Mathematics
| Level | Topic |
|---|---|
| 0 | Number Basics |
| 1 | Place Value & Decimals |
| 2 | Fractions & Percentages |
| 3 | Algebra Foundations |
| 4 | Geometry & Shapes |
| 5 | Statistics & Probability |
| 6 | Linear Graphs & Equations |
| 7 | Quadratics & Polynomials |
| 8 | Trigonometry |
| 9 | Simultaneous Equations & Inequalities |
| 10 | Higher Calculus & Proof |

### 📚 English Language & Literature
| Level | Topic |
|---|---|
| 0 | Reading Basics |
| 1 | Language Techniques |
| 2 | Structure & Form |
| 3 | Character & Theme |
| 4 | Poetry Analysis |
| 5 | Non-Fiction & Writing |
| 6 | Context & Writer's Craft |
| 7 | Comparison & Critical Analysis |
| 8 | Spoken Language & Media |
| 9 | Extended Writing Mastery |
| 10 | Grade 9 Mastery |

### 🔬 Science (Combined)
| Level | Topic |
|---|---|
| 0 | Science Basics |
| 1 | Cells & Biology Basics |
| 2 | Atoms & Elements |
| 3 | Forces & Motion |
| 4 | Energy & Electricity |
| 5 | Chemical Reactions |
| 6 | Biology: Body Systems |
| 7 | Waves & Light |
| 8 | Genetics & Evolution |
| 9 | Earth Science & Space |
| 10 | Advanced Science & Exam Mastery |

### 🌍 Geography
| Level | Topic |
|---|---|
| 0 | Geography Basics |
| 1 | Map Skills |
| 2 | Weather & Climate |
| 3 | Rivers & Coasts |
| 4 | Population & Migration |
| 5 | Urban Issues |
| 6 | Economic Development |
| 7 | Natural Hazards |
| 8 | Resources & Sustainability |
| 9 | Ecosystems & Biomes |
| 10 | Fieldwork, Exam Technique & Mastery |

---

## 🚀 Hosting on GitHub Pages (Step-by-Step)

**No coding experience needed — follow these steps:**

### Step 1: Create a GitHub Account
1. Go to [github.com](https://github.com) and sign up (free)

### Step 2: Create a New Repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `gcse-quest`
3. Set to **Public**
4. Click **Create repository**

### Step 3: Upload the Files
1. Click **uploading an existing file** (on the empty repo page)
2. Drag and drop the entire `gcse-quest` folder contents:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `data/` folder
   - `README.md`
3. Click **Commit changes**

### Step 4: Enable GitHub Pages
1. Go to **Settings** tab of your repository
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select **Deploy from a branch**
4. Branch: **main**, Folder: **/ (root)**
5. Click **Save**

### Step 5: Access Your Site
- After 1-2 minutes, your site will be live at:
  `https://YOUR-USERNAME.github.io/gcse-quest/`
- Share this link with your child!

---

## 🏆 Badge Guide

| Badge | How to Earn |
|---|---|
| ⚡ First Answer! | Answer your first question |
| ⭐ Perfect Level | Get 100% on any level |
| 🔥 On Fire! | 3 correct in a row |
| 🚀 Unstoppable! | 5 correct in a row |
| 🎓 Renaissance Learner | Complete a level in all 4 subjects |
| 🏅 Halfway There | Reach Level 5 in any subject |
| 🏆 GCSE Ready! | Reach Level 10 in any subject |
| 💫 Five Star Answer | Correctly answer a 5-mark question |
| ⚡ Speed Demon | Answer 5 questions in under 2 minutes |
| 🧠 Subject Master | Complete all levels in one subject |

---

## 🎯 Progression System

- **Unlock next level**: Score 60% or higher
- **Perfect level**: Score 100% (earns a ⭐ star)
- **XP rewards**: 1-mark = 10 XP, 3-mark = 30 XP, 5-mark = up to 60 XP
- **All progress** is saved automatically in the browser

---

## 📁 File Structure

```
gcse-quest/
├── index.html          # Main application
├── README.md           # This file
├── css/
│   └── style.css       # All styling
├── js/
│   ├── engine.js       # Game logic & state management
│   └── app.js          # Application controller
└── data/
    └── questions.js    # All 275 questions across 4 subjects
```

---

## 💡 Tips for Parents

- **Start at Level 0** even if your child knows some content — it builds confidence
- **Use the hints** — don't skip them; they teach exam technique
- **For 5-mark questions**: encourage honest self-assessment
- **Aim for consistency**: 15-20 minutes daily beats long cramming sessions
- **Celebrate badges**: they're real milestones worth recognising!

---

## 📝 Customising Questions

Questions are in `data/questions.js`. Each question follows this format:
```javascript
{
  id: "unique_id",
  marks: 1,              // 1, 3, or 5
  type: "mcq",           // mcq, short, or extended
  q: "Question text?",
  options: ["A","B","C","D"],   // MCQ only
  answer: "The answer",
  keywords: ["key","words"],    // For short answers
  hint: "Helpful hint here"
}
```

---

*Built for GCSE students aiming for Grades 7-9. Generic curriculum — suitable for AQA, Edexcel, OCR and other exam boards.*
