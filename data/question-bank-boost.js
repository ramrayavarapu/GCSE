// GCSE Quest — Question Bank Boost
// Adds a second layer of GCSE-style practice after question-bank-extension.js.
// This intentionally keeps the original bank untouched and avoids duplicate IDs.

(function boostQuestionBank() {
  if (typeof QUESTION_BANK === 'undefined') return;

  const SUBJECT_PREFIX = { mathematics: 'm', english: 'e', science: 's', geography: 'g' };

  const templates = {
    mathematics: [
      (level, i) => ({ id:`m${level}_b${i}`, marks:1, type:'mcq', q:`Level ${level} fluency check: which expression is equivalent to ${level + 2}x + ${level + 3}x?`, options:[`${2*level+5}x`, `${level+5}x`, `${2*level+5}`, `${level+2}x²`], answer:`${2*level+5}x`, hint:'Collect like terms by adding the coefficients.' }),
      (level, i) => ({ id:`m${level}_b${i}`, marks:3, type:'short', q:`A GCSE-style problem uses level ${level} numbers. Calculate ${level + 12}% of £${(level + 5) * 40}. Show your method clearly.`, answer:`£${(((level + 12) / 100) * ((level + 5) * 40)).toFixed(2)}`, keywords:['percentage','method','divide','multiply'], hint:'Convert the percentage to a decimal, then multiply.' }),
      (level, i) => ({ id:`m${level}_b${i}`, marks:5, type:'extended', q:`Exam reasoning: a student solves a Level ${level} problem and gets an answer that is much larger than the original quantity. Explain two checks they could use to decide whether the answer is sensible, using estimation and inverse operations.`, answer:'Use estimation to compare with an approximate answer, and use inverse operations to check the calculation works backwards.', keywords:['estimation','inverse','sensible','check','approximate'], hint:'Think about how to prove an answer is reasonable.' })
    ],
    english: [
      (level, i) => ({ id:`e${level}_b${i}`, marks:1, type:'mcq', q:`Level ${level} language check: which term means giving human qualities to something non-human?`, options:['Simile','Personification','Alliteration','Onomatopoeia'], answer:'Personification', hint:'Human qualities are being given to an object or idea.' }),
      (level, i) => ({ id:`e${level}_b${i}`, marks:3, type:'short', q:`Read the phrase: 'The silence pressed against the room.' Explain one effect of this language choice.`, answer:'It personifies silence, making the atmosphere feel heavy, tense or uncomfortable.', keywords:['personifies','tense','heavy','uncomfortable','atmosphere'], hint:'Focus on the feeling created for the reader.' }),
      (level, i) => ({ id:`e${level}_b${i}`, marks:5, type:'extended', q:`Write a GCSE-style analytical paragraph explaining how a writer could present pressure or anxiety. Include a method, effect and reader response.`, answer:'A strong answer identifies a method such as imagery or short sentences, explains the effect, and links it to pressure, anxiety and reader response.', keywords:['method','effect','reader','anxiety','pressure'], hint:'Use what/how/why structure.' })
    ],
    science: [
      (level, i) => ({ id:`s${level}_b${i}`, marks:1, type:'mcq', q:`Level ${level} science check: what should you change in a fair test?`, options:['Control variable','Independent variable','Dependent variable','Conclusion'], answer:'Independent variable', hint:'The independent variable is the one you deliberately change.' }),
      (level, i) => ({ id:`s${level}_b${i}`, marks:3, type:'short', q:`A student repeats an experiment three times and calculates a mean. Explain why this improves the investigation.`, answer:'Repeats help identify anomalies and calculating a mean improves reliability.', keywords:['repeat','mean','anomaly','reliability','investigation'], hint:'Think about how scientists make results more trustworthy.' }),
      (level, i) => ({ id:`s${level}_b${i}`, marks:5, type:'extended', q:`Design a short GCSE required-practical style method for a Level ${level} topic. Include independent variable, dependent variable, two control variables and one safety point.`, answer:'A strong answer names the variable changed, the variable measured, two variables kept the same, repeats, and a relevant safety precaution.', keywords:['independent','dependent','control','repeat','safety'], hint:'Use the language of variables.' })
    ],
    geography: [
      (level, i) => ({ id:`g${level}_b${i}`, marks:1, type:'mcq', q:`Level ${level} geography check: which command word asks you to make a judgement?`, options:['Describe','Name','Evaluate','Identify'], answer:'Evaluate', hint:'Evaluate means judge strengths and weaknesses.' }),
      (level, i) => ({ id:`g${level}_b${i}`, marks:3, type:'short', q:`Explain one reason why data collected in geography fieldwork might not be fully reliable.`, answer:'It may use a small sample, biased locations, human judgement or one-off measurements affected by unusual conditions.', keywords:['sample','biased','judgement','reliable','conditions'], hint:'Think about what could make results less trustworthy.' }),
      (level, i) => ({ id:`g${level}_b${i}`, marks:5, type:'extended', q:`Evaluate one management strategy for a Level ${level} geography issue. Include one benefit, one limitation and a final judgement.`, answer:'A strong answer explains a benefit, explains a limitation, and reaches a balanced judgement about overall success.', keywords:['benefit','limitation','judgement','evaluate','success'], hint:'Evaluation needs a balanced decision, not just description.' })
    ]
  };

  Object.entries(QUESTION_BANK).forEach(([subjectKey, subject]) => {
    const makers = templates[subjectKey];
    if (!makers) return;
    Object.entries(subject.levels).forEach(([levelKey, levelData]) => {
      const level = Number(levelKey);
      const existingIds = new Set(levelData.questions.map(q => q.id));
      for (let i = 1; i <= 4; i++) {
        const maker = makers[(i - 1) % makers.length];
        const question = maker(level, i);
        if (!existingIds.has(question.id)) levelData.questions.push(question);
      }
    });
  });
})();
