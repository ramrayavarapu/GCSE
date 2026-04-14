const QUESTION_BANK = {

  mathematics: {
    name: "Mathematics",
    icon: "📐",
    color: "#4F46E5",
    levels: {
      0: {
        name: "Number Basics",
        questions: [
          { id:"m0_1", marks:1, type:"mcq", q:"What is 7 + 8?", options:["13","14","15","16"], answer:"15", hint:"Count on from 7" },
          { id:"m0_2", marks:1, type:"mcq", q:"What is 12 − 5?", options:["6","7","8","9"], answer:"7", hint:"Take 5 away from 12" },
          { id:"m0_3", marks:1, type:"mcq", q:"What is 4 × 6?", options:["20","22","24","26"], answer:"24", hint:"4 times table" },
          { id:"m0_4", marks:3, type:"short", q:"A bag has 3 red, 5 blue and 2 green balls. How many balls are there altogether? Show your working.", answer:"10", keywords:["10","add","total","3+5+2"], hint:"Add all three amounts" },
          { id:"m0_5", marks:5, type:"extended", q:"Sarah has £20. She buys a book for £7.50 and a pen for £2.30. (a) How much does she spend in total? (b) How much change does she receive? (c) If she buys two pens instead, how much change would she get?", answer:"(a) £9.80  (b) £10.20  (c) £15.40", keywords:["9.80","10.20","15.40","change","spend"], hint:"Work out each part separately" }
        ]
      },
      1: {
        name: "Place Value & Decimals",
        questions: [
          { id:"m1_1", marks:1, type:"mcq", q:"What is the value of the digit 6 in 3.64?", options:["6","0.6","0.06","60"], answer:"0.6", hint:"After the decimal point: tenths, hundredths..." },
          { id:"m1_2", marks:1, type:"mcq", q:"Which is largest: 0.7, 0.07, 0.71, 0.17?", options:["0.7","0.07","0.71","0.17"], answer:"0.71", hint:"Compare digit by digit" },
          { id:"m1_3", marks:1, type:"mcq", q:"Round 4.76 to 1 decimal place.", options:["4.7","4.8","5.0","4.0"], answer:"4.8", hint:"Look at the second decimal place" },
          { id:"m1_4", marks:3, type:"short", q:"Write these decimals in order from smallest to largest: 0.45, 0.5, 0.405, 0.54. Show your reasoning.", answer:"0.405, 0.45, 0.5, 0.54", keywords:["0.405","0.45","0.5","0.54","order"], hint:"Compare the tenths digit first" },
          { id:"m1_5", marks:5, type:"extended", q:"A runner completes three laps in times of 1.35 min, 1.4 min and 1.28 min. (a) What is her total time? (b) What is her average lap time to 2 d.p.? (c) She aims to run each lap in under 1.3 min. How much faster must her slowest lap be?", answer:"(a) 4.03 min  (b) 1.34 min  (c) 0.1 min faster", keywords:["4.03","1.34","0.1","average","total"], hint:"Total first, then divide by 3 for average" }
        ]
      },
      2: {
        name: "Fractions & Percentages",
        questions: [
          { id:"m2_1", marks:1, type:"mcq", q:"What is ½ of 60?", options:["20","25","30","35"], answer:"30", hint:"Divide by 2" },
          { id:"m2_2", marks:1, type:"mcq", q:"What is 25% of 80?", options:["15","20","25","30"], answer:"20", hint:"25% = ¼, so divide by 4" },
          { id:"m2_3", marks:1, type:"mcq", q:"Which fraction is equivalent to 0.75?", options:["1/2","2/3","3/4","4/5"], answer:"3/4", hint:"0.75 = 75/100, simplify" },
          { id:"m2_4", marks:3, type:"short", q:"A TV costs £360. It is reduced by 15% in a sale. Calculate the sale price. Show your working.", answer:"£306", keywords:["306","54","15%","discount"], hint:"Find 15% of 360, then subtract" },
          { id:"m2_5", marks:5, type:"extended", q:"A school has 800 pupils. 45% are boys. (a) How many boys are there? (b) 60% of girls play sport. How many girls play sport? (c) What fraction of all pupils are girls who play sport? Give your answer in its simplest form.", answer:"(a) 360 boys  (b) 264 girls  (c) 33/100", keywords:["360","440","264","33/100","fraction"], hint:"Find boys first, then girls = 800 − boys" }
        ]
      },
      3: {
        name: "Algebra Foundations",
        questions: [
          { id:"m3_1", marks:1, type:"mcq", q:"If x = 4, what is 3x + 2?", options:["12","14","16","18"], answer:"14", hint:"Substitute x = 4" },
          { id:"m3_2", marks:1, type:"mcq", q:"Simplify: 5a + 3b − 2a + b", options:["3a+4b","7a+4b","3a+2b","7a+2b"], answer:"3a+4b", hint:"Collect like terms" },
          { id:"m3_3", marks:1, type:"mcq", q:"Solve: x + 7 = 15", options:["x=6","x=7","x=8","x=9"], answer:"x=8", hint:"Subtract 7 from both sides" },
          { id:"m3_4", marks:3, type:"short", q:"Solve 4x − 3 = 17. Show all steps of your working.", answer:"x=5", keywords:["x=5","5","add 3","divide by 4"], hint:"Add 3 to both sides first" },
          { id:"m3_5", marks:5, type:"extended", q:"(a) Expand and simplify: 3(2x + 4) − 2(x − 1)  (b) Solve: 3(2x + 4) − 2(x − 1) = 26  (c) Check your answer by substituting back.", answer:"(a) 4x+14  (b) x=3  (c) 3(10)+4−2(2)=26 ✓", keywords:["4x+14","x=3","3","expand","simplify"], hint:"Expand brackets carefully, watch the signs" }
        ]
      },
      4: {
        name: "Geometry & Shapes",
        questions: [
          { id:"m4_1", marks:1, type:"mcq", q:"What is the area of a rectangle 8cm × 5cm?", options:["26 cm²","40 cm²","40 cm","13 cm²"], answer:"40 cm²", hint:"Area = length × width" },
          { id:"m4_2", marks:1, type:"mcq", q:"Angles in a triangle sum to:", options:["90°","180°","270°","360°"], answer:"180°", hint:"All triangles have the same angle sum" },
          { id:"m4_3", marks:1, type:"mcq", q:"What is the circumference of a circle with radius 5cm? (π ≈ 3.14)", options:["15.7 cm","31.4 cm","78.5 cm","25 cm"], answer:"31.4 cm", hint:"C = 2πr" },
          { id:"m4_4", marks:3, type:"short", q:"A right-angled triangle has legs of 6cm and 8cm. Using Pythagoras' theorem, find the hypotenuse. Show your working.", answer:"10 cm", keywords:["10","100","36+64","pythagoras"], hint:"a² + b² = c²" },
          { id:"m4_5", marks:5, type:"extended", q:"A garden is a rectangle 12m × 8m. Inside is a circular pond of radius 2m. (a) Find the area of the rectangle. (b) Find the area of the pond (π = 3.14). (c) What area of the garden has no pond? (d) What percentage of the garden is pond?", answer:"(a) 96 m²  (b) 12.56 m²  (c) 83.44 m²  (d) ≈13.1%", keywords:["96","12.56","83.44","13.1","percentage"], hint:"Subtract pond area from rectangle area" }
        ]
      },
      5: {
        name: "Statistics & Probability",
        questions: [
          { id:"m5_1", marks:1, type:"mcq", q:"The mean of 4, 7, 9, 12 and 8 is:", options:["7","8","9","10"], answer:"8", hint:"Add all values, divide by 5" },
          { id:"m5_2", marks:1, type:"mcq", q:"A bag has 3 red and 7 blue balls. Probability of picking red?", options:["3/7","7/10","3/10","1/3"], answer:"3/10", hint:"Favourable ÷ total outcomes" },
          { id:"m5_3", marks:1, type:"mcq", q:"The median of 3, 7, 2, 9, 5 is:", options:["3","5","7","9"], answer:"5", hint:"Order the values first" },
          { id:"m5_4", marks:3, type:"short", q:"Test scores: 65, 72, 58, 80, 72, 66, 72. Find the mode, median and range.", answer:"Mode=72, Median=72, Range=22", keywords:["72","22","mode","median","range"], hint:"Order the data first: 58,65,66,72,72,72,80" },
          { id:"m5_5", marks:5, type:"extended", q:"A class records heights (cm): 152, 158, 165, 148, 172, 158, 163, 155, 158, 170. (a) Find the mean. (b) Find the median. (c) Find the interquartile range. (d) Comment on the spread of data.", answer:"(a) 159.9  (b) 158  (c) IQR=13  (d) Moderate spread, most heights cluster around mean", keywords:["159.9","158","13","IQR","spread"], hint:"Order all 10 values first" }
        ]
      },
      6: {
        name: "Linear Graphs & Equations",
        questions: [
          { id:"m6_1", marks:1, type:"mcq", q:"What is the gradient of y = 3x − 4?", options:["-4","3","-3","4"], answer:"3", hint:"y = mx + c, gradient is m" },
          { id:"m6_2", marks:1, type:"mcq", q:"What is the y-intercept of y = 2x + 5?", options:["2","5","-5","-2"], answer:"5", hint:"y = mx + c, intercept is c" },
          { id:"m6_3", marks:1, type:"mcq", q:"Which point lies on y = 2x − 1?", options:["(1,0)","(2,3)","(3,4)","(0,2)"], answer:"(2,3)", hint:"Substitute x into equation" },
          { id:"m6_4", marks:3, type:"short", q:"Find the equation of the line passing through (0, 3) and (2, 7). Show working.", answer:"y = 2x + 3", keywords:["y=2x+3","gradient 2","2","intercept 3"], hint:"Gradient = change in y ÷ change in x" },
          { id:"m6_5", marks:5, type:"extended", q:"(a) Draw the line y = 2x + 1 for x from −2 to 3 (plot key points). (b) On the same axes, y = −x + 4. (c) Find the intersection point algebraically. (d) Verify graphically and algebraically.", answer:"(a) points: (-2,-3),(-1,-1),(0,1),(1,3),(2,5),(3,7)  (b) points: (-2,6),(0,4),(3,1)  (c) 2x+1=-x+4 → x=1,y=3", keywords:["x=1","y=3","intersection","2x+1","-x+4"], hint:"Set equations equal to find intersection" }
        ]
      },
      7: {
        name: "Quadratics & Polynomials",
        questions: [
          { id:"m7_1", marks:1, type:"mcq", q:"Expand (x + 3)(x + 4):", options:["x²+7x+12","x²+12x+7","x²+7x+7","x²+12"], answer:"x²+7x+12", hint:"FOIL method" },
          { id:"m7_2", marks:1, type:"mcq", q:"Factorise x² + 5x + 6:", options:["(x+1)(x+6)","(x+2)(x+3)","(x+5)(x+1)","(x+3)(x+2)"], answer:"(x+2)(x+3)", hint:"Find two numbers that add to 5 and multiply to 6" },
          { id:"m7_3", marks:1, type:"mcq", q:"Solve x² = 25:", options:["x=5","x=-5","x=5 or x=-5","x=±√25"], answer:"x=5 or x=-5", hint:"Square root both sides — remember ±" },
          { id:"m7_4", marks:3, type:"short", q:"Solve x² + 5x + 6 = 0 by factorising. Show all steps.", answer:"x = -2 or x = -3", keywords:["-2","-3","factorise","(x+2)(x+3)"], hint:"Factorise first, then set each bracket to zero" },
          { id:"m7_5", marks:5, type:"extended", q:"(a) Factorise 2x² + 7x + 3. (b) Hence solve 2x² + 7x + 3 = 0. (c) Find the vertex of the parabola y = 2x² + 7x + 3. (d) Sketch the shape, marking roots and vertex.", answer:"(a) (2x+1)(x+3)  (b) x=-1/2 or x=-3  (c) vertex at x=-7/4, y=-25/8", keywords:["(2x+1)(x+3)","-1/2","-3","vertex","-7/4"], hint:"Try factor pairs of 2×3=6 that sum to 7" }
        ]
      },
      8: {
        name: "Trigonometry",
        questions: [
          { id:"m8_1", marks:1, type:"mcq", q:"In a right triangle, SOH means:", options:["sin=opp/adj","sin=opp/hyp","sin=hyp/opp","sin=adj/hyp"], answer:"sin=opp/hyp", hint:"SOH CAH TOA" },
          { id:"m8_2", marks:1, type:"mcq", q:"cos(60°) equals:", options:["0","0.5","√3/2","1"], answer:"0.5", hint:"Standard angle value" },
          { id:"m8_3", marks:1, type:"mcq", q:"An angle θ where tan(θ) = 1 is:", options:["30°","45°","60°","90°"], answer:"45°", hint:"tan(45°) = opposite/adjacent = 1" },
          { id:"m8_4", marks:3, type:"short", q:"A ladder 5m long leans against a wall. It makes an angle of 65° with the ground. How high up the wall does it reach? Give your answer to 2 d.p.", answer:"4.53 m", keywords:["4.53","sin","5","65","height"], hint:"sin(65°) = height ÷ 5" },
          { id:"m8_5", marks:5, type:"extended", q:"From a point 30m from the base of a building, the angle of elevation to the top is 42°. (a) Calculate the height of the building (2 d.p.). (b) Calculate the straight-line distance from the point to the top. (c) If you move 10m closer, what is the new angle of elevation?", answer:"(a) 27.02 m  (b) 40.37 m  (c) ≈ 53.6°", keywords:["27.02","40.37","53.6","tan","elevation"], hint:"tan(42°) = height ÷ 30" }
        ]
      },
      9: {
        name: "Simultaneous Equations & Inequalities",
        questions: [
          { id:"m9_1", marks:1, type:"mcq", q:"Solve: x + y = 10 and x − y = 4. What is x?", options:["5","6","7","8"], answer:"7", hint:"Add the equations" },
          { id:"m9_2", marks:1, type:"mcq", q:"Which value satisfies 3x − 2 > 10?", options:["x=3","x=4","x=5","x=2"], answer:"x=5", hint:"Solve as equation first, then check direction" },
          { id:"m9_3", marks:1, type:"mcq", q:"On a number line, x ≤ 3 is shown by:", options:["open circle at 3, arrow right","closed circle at 3, arrow left","open circle at 3, arrow left","closed circle at 3, arrow right"], answer:"closed circle at 3, arrow left", hint:"≤ means 'less than or equal to'" },
          { id:"m9_4", marks:3, type:"short", q:"Solve simultaneously: 2x + 3y = 12 and x + y = 5. Show all working.", answer:"x=3, y=2", keywords:["x=3","y=2","3","2","eliminate"], hint:"Multiply second equation by 2, then subtract" },
          { id:"m9_5", marks:5, type:"extended", q:"(a) Solve: 3x + 2y = 16 and 5x − y = 9. (b) Show the solution as a coordinate point. (c) Verify your solution in both original equations. (d) What does this point represent graphically?", answer:"(a) x=2, y=5  (b) (2,5)  (c) 6+10=16 ✓ and 10-5=9 ✓  (d) intersection of two lines", keywords:["x=2","y=5","(2,5)","verify","intersection"], hint:"Multiply second equation to eliminate y" }
        ]
      },
      10: {
        name: "Higher Calculus & Proof",
        questions: [
          { id:"m10_1", marks:1, type:"mcq", q:"If f(x) = x³, what is f'(x)?", options:["x²","3x²","3x","x³"], answer:"3x²", hint:"Power rule: bring down the power, reduce by 1" },
          { id:"m10_2", marks:1, type:"mcq", q:"Prove that the sum of two odd numbers is always even. Which is the correct start?", options:["Let a and b be odd, so a=2n and b=2m","Let a=2n+1 and b=2m+1","Let a=2n+1 and b=2n+1","Let a be odd and b be even"], answer:"Let a=2n+1 and b=2m+1", hint:"Use different variables n and m for generality" },
          { id:"m10_3", marks:1, type:"mcq", q:"The nth term of 3, 7, 11, 15 is:", options:["3n","4n-1","4n+1","3n+1"], answer:"4n-1", hint:"Difference is 4, so 4n ± something" },
          { id:"m10_4", marks:3, type:"short", q:"Prove algebraically that (n+1)² − n² is always odd for any positive integer n.", answer:"(n+1)²-n² = n²+2n+1-n² = 2n+1 which is always odd", keywords:["2n+1","expand","odd","always"], hint:"Expand (n+1)² and simplify" },
          { id:"m10_5", marks:5, type:"extended", q:"(a) Find the gradient function of y = 3x² − 4x + 1. (b) Find the coordinates of the stationary point. (c) Determine whether it is a maximum or minimum, with justification. (d) Find the equation of the tangent at x = 2.", answer:"(a) dy/dx=6x-4  (b) (2/3, -1/3)  (c) minimum since d²y/dx²=6>0  (d) y=8x-11", keywords:["6x-4","2/3","-1/3","minimum","tangent","8x-11"], hint:"Set dy/dx = 0 for stationary point" }
        ]
      }
    }
  },

  english: {
    name: "English Language & Literature",
    icon: "📚",
    color: "#DC2626",
    levels: {
      0: {
        name: "Reading Basics",
        questions: [
          { id:"e0_1", marks:1, type:"mcq", q:"What does 'explicit information' mean in a text?", options:["Hidden meaning","Directly stated information","The writer's opinion","A metaphor"], answer:"Directly stated information", hint:"'Explicit' means clearly stated" },
          { id:"e0_2", marks:1, type:"mcq", q:"What is a noun?", options:["A doing word","A describing word","A naming word","A connecting word"], answer:"A naming word", hint:"Think: person, place, thing, idea" },
          { id:"e0_3", marks:1, type:"mcq", q:"What punctuation ends a question?", options:["Full stop","Exclamation mark","Question mark","Comma"], answer:"Question mark", hint:"Simple punctuation rule" },
          { id:"e0_4", marks:3, type:"short", q:"Read this sentence: 'The old grey wolf prowled silently through the dark, frozen forest.' Identify THREE adjectives and explain what each one tells us.", answer:"Old (age of wolf), grey (colour), dark/frozen (describe forest)", keywords:["old","grey","dark","frozen","adjective","describe"], hint:"Adjectives describe nouns. What words describe the wolf and forest?" },
          { id:"e0_5", marks:5, type:"extended", q:"Write a paragraph describing your favourite place. Include: at least two adjectives, one simile (comparing using 'like' or 'as'), one example of alliteration, and varied sentence lengths.", answer:"Model answer — assessed on use of adjectives, simile, alliteration, varied sentences", keywords:["adjective","simile","like","as","alliteration","describe"], hint:"Start with your simile, then add adjectives and alliteration" }
        ]
      },
      1: {
        name: "Language Techniques",
        questions: [
          { id:"e1_1", marks:1, type:"mcq", q:"'The sun smiled down on the meadow.' This is an example of:", options:["Simile","Metaphor","Personification","Alliteration"], answer:"Personification", hint:"The sun is given a human quality" },
          { id:"e1_2", marks:1, type:"mcq", q:"'Her eyes were like stars.' This is a:", options:["Metaphor","Simile","Onomatopoeia","Hyperbole"], answer:"Simile", hint:"Uses the word 'like'" },
          { id:"e1_3", marks:1, type:"mcq", q:"What is alliteration?", options:["Repetition of vowel sounds","Repetition of consonant sounds at word starts","A comparison using 'like'","A word that sounds like its meaning"], answer:"Repetition of consonant sounds at word starts", hint:"Peter Piper picked a peck..." },
          { id:"e1_4", marks:3, type:"short", q:"Analyse this sentence: 'The furious, ferocious flames devoured the forest.' Identify two language techniques and explain their effect on the reader.", answer:"Alliteration (furious ferocious/flames forest) creates urgency/menace; personification (devoured) suggests fire is aggressive and alive", keywords:["alliteration","personification","effect","devoured","furious"], hint:"Look for repeated sounds and human qualities given to objects" },
          { id:"e1_5", marks:5, type:"extended", q:"'The city never sleeps. Sirens screamed through the streets, neon lights blazed like artificial suns, and the relentless hum of engines filled the air.' Analyse how the writer uses language to present the city. Use the P-E-E structure (Point, Evidence, Explain).", answer:"Multiple P-E-E paragraphs covering: personification (city never sleeps), alliteration (sirens screamed streets), simile (like artificial suns), semantic field of noise/light", keywords:["personification","alliteration","simile","effect","P-E-E","blazed","screamed"], hint:"Write one P-E-E paragraph per technique. What feeling does each create?" }
        ]
      },
      2: {
        name: "Structure & Form",
        questions: [
          { id:"e2_1", marks:1, type:"mcq", q:"What is the effect of starting a paragraph with a very short sentence?", options:["Makes it harder to read","Creates emphasis and impact","Shows the writer is lazy","Increases pace and confusion"], answer:"Creates emphasis and impact", hint:"Short sentences make the reader pause" },
          { id:"e2_2", marks:1, type:"mcq", q:"What is a 'narrative hook'?", options:["The ending of a story","An opening that grips the reader","A type of metaphor","The main character"], answer:"An opening that grips the reader", hint:"It 'hooks' the reader in from the start" },
          { id:"e2_3", marks:1, type:"mcq", q:"First-person narration uses which pronoun?", options:["He/She","They","I/We","You"], answer:"I/We", hint:"The narrator speaks as themselves" },
          { id:"e2_4", marks:3, type:"short", q:"Explain how a writer might use structural features to build tension in a short story. Mention at least two structural techniques.", answer:"Short sentences speed up pace creating urgency; cliff-hangers at paragraph/chapter ends keep reader engaged; flashbacks add mystery; withholding information creates suspense", keywords:["short sentences","tension","pace","structure","cliff-hanger","suspense"], hint:"Think about sentence length, paragraph breaks, and withholding information" },
          { id:"e2_5", marks:5, type:"extended", q:"Write the opening of a short story (150 words) set in a deserted school at midnight. You must: use an effective narrative hook, vary your sentence structure, use at least one structural technique deliberately, and create a specific atmosphere.", answer:"Model answer assessed on: narrative hook, varied sentences, structural technique, atmospheric vocabulary", keywords:["atmosphere","hook","tension","varied","sentence","structure"], hint:"Start in the middle of the action (in medias res) for a strong hook" }
        ]
      },
      3: {
        name: "Character & Theme",
        questions: [
          { id:"e3_1", marks:1, type:"mcq", q:"In 'A Christmas Carol', Scrooge's transformation is an example of:", options:["Static character","Dynamic character","Antagonist","Foil"], answer:"Dynamic character", hint:"He changes significantly throughout the story" },
          { id:"e3_2", marks:1, type:"mcq", q:"What is a 'foil' character?", options:["A villain","A character who contrasts with the main character","A narrator","A minor character"], answer:"A character who contrasts with the main character", hint:"They highlight the protagonist's qualities by contrast" },
          { id:"e3_3", marks:1, type:"mcq", q:"Which theme is central to 'An Inspector Calls'?", options:["Romantic love","Social responsibility","Adventure","Nature vs nurture"], answer:"Social responsibility", hint:"Priestley uses the Inspector to make a moral point about society" },
          { id:"e3_4", marks:3, type:"short", q:"In 'Romeo and Juliet', how does Shakespeare present love as dangerous? Use one piece of evidence and analyse it.", answer:"Shakespeare presents love as consuming and deadly — 'Here's much to do with hate, but more with love' shows Romeo is consumed by love's contradictions. Oxymorons reflect how love makes him irrational, foreshadowing the play's tragic end.", keywords:["dangerous","evidence","love","tragic","Shakespeare","analyse"], hint:"Use a quote and explain what it tells us about love in the play" },
          { id:"e3_5", marks:5, type:"extended", q:"How does Dickens present Scrooge as a changed man by the end of 'A Christmas Carol'? Write a response using PEEL paragraphs, including: two pieces of evidence, analysis of language/structure, and reference to Dickens' message.", answer:"Strong response: contrast between opening miser and generous finale; evidence from Stave 5 (e.g. 'I am as light as a feather'); analysis of Dickens' social purpose — critique of 1840s attitudes to poor", keywords:["Scrooge","changed","Dickens","evidence","PEEL","stave","feather","generous"], hint:"Compare Scrooge in Stave 1 with Stave 5. What specific words show change?" }
        ]
      },
      4: {
        name: "Poetry Analysis",
        questions: [
          { id:"e4_1", marks:1, type:"mcq", q:"What is iambic pentameter?", options:["10 syllables per line with da-DUM rhythm","8 syllables with DUM-da rhythm","A rhyming couplet","Free verse with 10 lines"], answer:"10 syllables per line with da-DUM rhythm", hint:"Shakespeare used this frequently" },
          { id:"e4_2", marks:1, type:"mcq", q:"What is enjambment?", options:["A rhyming scheme","When a sentence runs from one line to the next","A type of metaphor","Repetition of a word"], answer:"When a sentence runs from one line to the next", hint:"It 'runs on' without pause at the line break" },
          { id:"e4_3", marks:1, type:"mcq", q:"In Wilfred Owen's poetry, 'Dulce et Decorum Est' challenges which idea?", options:["War is heroic and glorious","War causes environmental damage","Women should support soldiers","Science causes war"], answer:"War is heroic and glorious", hint:"The title is ironic — it's a Latin phrase about dying for your country" },
          { id:"e4_4", marks:3, type:"short", q:"Analyse how the poet uses structure in 'Ozymandias' by Shelley to convey the theme of power's decay. Include one structural technique.", answer:"The sonnet form is subverted — power of sonnet mirrors false power of Ozymandias. Volta shifts tone from pride to ruin. Ironic use of Ozymandias's own boastful words within the framing narrative distances reader.", keywords:["structure","sonnet","volta","irony","power","decay","Ozymandias"], hint:"Why might Shelley use a sonnet? What is the volta and where does it occur?" },
          { id:"e4_5", marks:5, type:"extended", q:"Compare how two poems from the Power and Conflict cluster present ideas about conflict. Analyse: language, structure, and the poets' perspectives. Write 4 paragraphs using comparative connectives.", answer:"Strong comparative essay: two poems, language analysis with quotes, structural analysis, perspective comparison, using 'whereas', 'similarly', 'in contrast'", keywords:["compare","language","structure","perspective","conflict","whereas","similarly"], hint:"Plan first: one similarity, one difference, then analyse language in each" }
        ]
      },
      5: {
        name: "Non-Fiction & Writing",
        questions: [
          { id:"e5_1", marks:1, type:"mcq", q:"Which technique persuades by using inclusive language?", options:["Rhetorical question","Rule of three","First person plural ('we')","Statistics"], answer:"First person plural ('we')", hint:"'We all know...' makes the audience feel included" },
          { id:"e5_2", marks:1, type:"mcq", q:"What does 'AFOREST' stand for in persuasive writing?", options:["Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplets","Adjectives, Figurative, Onomatopoeia, Repetition, Enjambment, Simile, Tone","Alliteration, Facts, Opinions, Rhetoric, Exaggeration, Simile, Triplets","Anaphora, Flashback, Oxymoron, Repetition, Emotion, Style, Theme"], answer:"Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplets", hint:"A common acronym for persuasive techniques" },
          { id:"e5_3", marks:1, type:"mcq", q:"A broadsheet newspaper typically has:", options:["Simple vocabulary, large images, short articles","Complex vocabulary, formal tone, longer in-depth articles","Celebrity gossip, casual language, bold headlines","Opinion pieces only, no facts"], answer:"Complex vocabulary, formal tone, longer in-depth articles", hint:"Compare with tabloids like The Sun vs The Guardian" },
          { id:"e5_4", marks:3, type:"short", q:"Write a short persuasive paragraph arguing that schools should start later in the morning. Use at least two persuasive techniques.", answer:"Example: Uses statistics (research shows...), rhetorical question (Shouldn't our children be alert?), emotive language, rule of three", keywords:["persuasive","technique","rhetorical","statistic","emotive","evidence"], hint:"Start with a bold statement, then support with evidence and emotion" },
          { id:"e5_5", marks:5, type:"extended", q:"Write a letter to your local council arguing for a new youth community centre. Your letter should: open effectively, use at least four AFOREST techniques, maintain a formal register, and close with a clear call to action. (Approx. 200 words)", answer:"Assessed on: formal register, AFOREST techniques (at least 4), structure (opening, body, closing), persuasive impact, call to action", keywords:["formal","letter","persuade","AFOREST","technique","council","call to action"], hint:"Plan your argument in three points before writing" }
        ]
      },
      6: {
        name: "Context & Writer's Craft",
        questions: [
          { id:"e6_1", marks:1, type:"mcq", q:"Why is historical/social context important when analysing literature?", options:["It tells us the writer's age","It helps us understand why the writer wrote as they did","It replaces the need to analyse language","Context is never relevant to meaning"], answer:"It helps us understand why the writer wrote as they did", hint:"Writers are shaped by the world around them" },
          { id:"e6_2", marks:1, type:"mcq", q:"Dickens wrote 'A Christmas Carol' partly to:", options:["Celebrate Christmas traditions","Criticise the treatment of the poor in Victorian England","Promote Christianity","Entertain wealthy readers"], answer:"Criticise the treatment of the poor in Victorian England", hint:"The Poor Law 1834 was recently passed when Dickens wrote this" },
          { id:"e6_3", marks:1, type:"mcq", q:"'An Inspector Calls' is set in 1912 but written in 1945. Why is this significant?", options:["Priestley wanted to write about old clothes","The 1912 setting lets Priestley comment on pre-war attitudes with hindsight","It was easier to research 1912","Priestley was born in 1912"], answer:"The 1912 setting lets Priestley comment on pre-war attitudes with hindsight", hint:"Writing after two World Wars, Priestley uses irony about Birling's overconfidence" },
          { id:"e6_4", marks:3, type:"short", q:"How does the historical context of World War One help us understand the message of Wilfred Owen's poetry? Write 3-4 sentences using evidence.", answer:"Owen was a soldier who witnessed the reality of war, contrasting propaganda that glorified it. 'Dulce et Decorum Est' is addressed directly to those who tell 'The old Lie' — propagandists. Context shows Owen's anger was real and personal, giving the poetry moral authority.", keywords:["Owen","war","context","propaganda","soldier","lie","Dulce"], hint:"Owen was writing from personal experience. How does this make his message more powerful?" },
          { id:"e6_5", marks:5, type:"extended", q:"How does Priestley use the character of Mr Birling to criticise the ruling class in 'An Inspector Calls'? In your response, consider: the context of 1912 and 1945, specific language choices, dramatic irony, and Priestley's socialist views.", answer:"Strong response: Birling's capitalist views ('a man has to mind his own business') are undermined by dramatic irony (Titanic, war predictions wrong). 1945 audience knows he's foolish. Priestley (socialist) uses Birling as a warning — selfishness leads to tragedy.", keywords:["Birling","Priestley","socialist","dramatic irony","Titanic","capitalism","context"], hint:"What does Birling say about the Titanic? Why would a 1945 audience find this ironic?" }
        ]
      },
      7: {
        name: "Comparison & Critical Analysis",
        questions: [
          { id:"e7_1", marks:1, type:"mcq", q:"Which is the best comparative connective to show contrast?", options:["Similarly","Furthermore","In contrast","Additionally"], answer:"In contrast", hint:"You want to highlight a difference" },
          { id:"e7_2", marks:1, type:"mcq", q:"A Level 9 English response will always:", options:["Use lots of quotes","Critically evaluate the text with a personal, developed interpretation","Write in bullet points","Focus mainly on plot summary"], answer:"Critically evaluate the text with a personal, developed interpretation", hint:"Grade 9 responses go beyond analysis to evaluation" },
          { id:"e7_3", marks:1, type:"mcq", q:"What is a 'semantic field'?", options:["A type of metaphor","A group of words related to the same topic","The setting of a story","The structure of a poem"], answer:"A group of words related to the same topic", hint:"E.g. a semantic field of violence: battle, wound, bleed, fight" },
          { id:"e7_4", marks:3, type:"short", q:"Compare how power is presented in 'Ozymandias' and 'My Last Duchess'. Identify one similarity and one difference, using evidence from both poems.", answer:"Both present arrogant, controlling figures (Ozymandias's inscription; Duke's 'as if she ranked / My gift of a nine-hundred-years-old name'). However, Ozymandias's power is already destroyed while the Duke's remains active and threatening.", keywords:["compare","power","Ozymandias","Duke","arrogant","contrast","both"], hint:"Use 'Both...whereas...' structure for clear comparison" },
          { id:"e7_5", marks:5, type:"extended", q:"'Shakespeare presents Romeo as a victim of fate, not of his own choices.' How far do you agree? Write an evaluative response considering: evidence for fate, evidence for personal choice, context (Elizabethan beliefs in destiny), and your own judgement.", answer:"Balanced evaluation: fate evidence (prologue 'star-crossed lovers', coincidences); choice evidence (Romeo's impulsive decisions, gate-crashing, rushing marriage). Context: Elizabethan belief in fate. Personal judgement supported with reasoning.", keywords:["fate","choice","Romeo","Elizabethan","star-crossed","evaluate","judge","prologue"], hint:"Argue both sides, then give your own verdict with reasons" }
        ]
      },
      8: {
        name: "Spoken Language & Media",
        questions: [
          { id:"e8_1", marks:1, type:"mcq", q:"What is 'Standard English'?", options:["The dialect spoken in London","The formal, grammatically correct form of English","English with no accent","Old-fashioned English"], answer:"The formal, grammatically correct form of English", hint:"Used in formal writing and professional contexts" },
          { id:"e8_2", marks:1, type:"mcq", q:"What technique does a newspaper headline use in 'FURY AS COUNCIL CUTS PARKS'?", options:["Alliteration","Emotive language","Hyperbole","Sibilance"], answer:"Emotive language", hint:"'Fury' is a strong emotional word designed to provoke reaction" },
          { id:"e8_3", marks:1, type:"mcq", q:"What is the purpose of a broadsheet editorial?", options:["To entertain with celebrity news","To inform and express a viewpoint on a serious topic","To advertise products","To provide local sports results"], answer:"To inform and express a viewpoint on a serious topic", hint:"Editorials represent the newspaper's opinion" },
          { id:"e8_4", marks:3, type:"short", q:"Analyse how a tabloid newspaper might use language differently from a broadsheet when reporting the same story. Give specific examples of techniques each might use.", answer:"Tabloid: short punchy sentences, emotive words ('FURY', 'SHOCK'), colloquial language, hyperbole. Broadsheet: complex vocabulary, subordinate clauses, formal register, balanced reporting. Both use headlines but for different audiences.", keywords:["tabloid","broadsheet","formal","emotive","register","audience","language"], hint:"Think about vocabulary level, sentence length, and emotional impact" },
          { id:"e8_5", marks:5, type:"extended", q:"Write two versions of the same news story (approx. 100 words each): one for a tabloid, one for a broadsheet. The story: a local school is closing due to budget cuts. Use clearly different registers, vocabulary, and techniques in each version.", answer:"Assessed on: clear register difference, appropriate vocabulary for each audience, tabloid techniques (emotive, punchy), broadsheet techniques (formal, detailed, balanced)", keywords:["tabloid","broadsheet","register","formal","emotive","audience","school","budget"], hint:"Tabloid: start with emotional impact. Broadsheet: start with factual context." }
        ]
      },
      9: {
        name: "Extended Writing Mastery",
        questions: [
          { id:"e9_1", marks:1, type:"mcq", q:"A 'discursive essay' aims to:", options:["Tell a story","Argue one side strongly","Explore multiple viewpoints on an issue","Describe a place"], answer:"Explore multiple viewpoints on an issue", hint:"'Discuss' = explore both/all sides" },
          { id:"e9_2", marks:1, type:"mcq", q:"Which opening is most effective for a Grade 9 narrative?", options:["My name is Tom and I am going to tell you a story.","The knife appeared from nowhere.","Once upon a time there was a boy.","This story is about something scary that happened."], answer:"The knife appeared from nowhere.", hint:"In medias res — starting in the middle of action" },
          { id:"e9_3", marks:1, type:"mcq", q:"Pathetic fallacy is when:", options:["A character makes a logical error","Weather/setting reflects a character's mood","The narrator is unreliable","A metaphor is extended throughout a text"], answer:"Weather/setting reflects a character's mood", hint:"E.g. a storm brewing as a character becomes angry" },
          { id:"e9_4", marks:3, type:"short", q:"Plan a Grade 9 descriptive piece about a busy market. In your plan: identify the structural approach, list 3 language techniques with specific examples you will use, and describe the dominant mood.", answer:"Structure: zoom from wide shot to close detail; cyclical structure. Techniques: synesthesia ('sharp tang of spice hung in the air'), personification ('stalls jostled for attention'), triplets ('colour, chaos, cacophony'). Mood: vibrant, overwhelming, alive.", keywords:["structure","technique","mood","synesthesia","personification","triplet","plan"], hint:"Think about perspective and how you'll move through the scene" },
          { id:"e9_5", marks:5, type:"extended", q:"Write a descriptive piece called 'The Last Day' (approx. 300 words). To achieve Grade 9: use an ambiguous title that gains meaning throughout, employ pathetic fallacy, varied syntax for effect, a semantic field, and a memorable final line that recontextualises the opening.", answer:"Assessed on: sophisticated language, structural craft, ambiguity, Grade 9 techniques, memorable ending, coherent voice", keywords:["ambiguous","pathetic fallacy","syntax","semantic field","Grade 9","ending","recontextualise"], hint:"Don't reveal what 'last day' means until the end — let the ambiguity create intrigue" }
        ]
      },
      10: {
        name: "Grade 9 Mastery",
        questions: [
          { id:"e10_1", marks:1, type:"mcq", q:"A Grade 9 response is described by AQA as:", options:["Simply accurate","Perceptive, detailed and sophisticated","Long and full of quotes","Structured with many paragraphs"], answer:"Perceptive, detailed and sophisticated", hint:"AQA Grade 9 descriptor — these are the key adjectives" },
          { id:"e10_2", marks:1, type:"mcq", q:"What makes a literary interpretation 'perceptive'?", options:["Using many quotes","Noticing layers of meaning others might miss","Writing at length","Starting every paragraph with a quote"], answer:"Noticing layers of meaning others might miss", hint:"Go beyond the obvious — look for ambiguity and subtext" },
          { id:"e10_3", marks:1, type:"mcq", q:"An 'extended metaphor' is:", options:["A very long metaphor","A metaphor developed across multiple lines or throughout a text","A metaphor using 'like' or 'as'","A metaphor about nature"], answer:"A metaphor developed across multiple lines or throughout a text", hint:"It's sustained — developed, not just mentioned once" },
          { id:"e10_4", marks:3, type:"short", q:"Give a perceptive interpretation of this line from Macbeth: 'Stars, hide your fires; let not light see my black and deep desires.' What does it reveal about Macbeth at this point in the play?", answer:"Macbeth addresses the cosmos, showing his ambition disturbs the natural order (divine right). 'Black and deep' are deliberately vague — even he struggles to name what he plans. Stars as moral witnesses suggests Macbeth still has conscience. Anticipates later sleeplessness/guilt.", keywords:["Macbeth","ambition","natural order","conscience","desires","deep","black"], hint:"Why 'stars' specifically? What does hiding light suggest about conscience?" },
          { id:"e10_5", marks:5, type:"extended", q:"'Great literature shows us not what is, but what could be.' Using one novel or play you have studied, evaluate this statement. Your response should: offer a developed personal interpretation, consider alternative readings, reference context, analyse specific language/structural choices, and reach a clear evaluative conclusion.", answer:"Grade 9 response: personal thesis, sustained argument, two+ alternative readings, contextualised analysis, specific language craft, evaluative conclusion going beyond simple agreement/disagreement", keywords:["evaluate","interpret","alternative","context","language","structure","conclusion","thesis"], hint:"Don't just argue one side — show you can see multiple interpretations before reaching YOUR judgement" }
        ]
      }
    }
  },

  science: {
    name: "Science (Combined)",
    icon: "🔬",
    color: "#059669",
    levels: {
      0: {
        name: "Science Basics",
        questions: [
          { id:"s0_1", marks:1, type:"mcq", q:"What are the three states of matter?", options:["Hot, warm, cold","Solid, liquid, gas","Hard, soft, fluid","Heavy, light, medium"], answer:"Solid, liquid, gas", hint:"Think about water as ice, water, and steam" },
          { id:"s0_2", marks:1, type:"mcq", q:"What is the chemical symbol for water?", options:["WA","HO","H2O","W2O"], answer:"H2O", hint:"2 hydrogen atoms and 1 oxygen atom" },
          { id:"s0_3", marks:1, type:"mcq", q:"What organ pumps blood around the body?", options:["Lungs","Brain","Liver","Heart"], answer:"Heart", hint:"It beats constantly to keep blood circulating" },
          { id:"s0_4", marks:3, type:"short", q:"Describe what happens to particles in a solid when it melts into a liquid. Include reference to energy and particle movement.", answer:"Particles in a solid vibrate in fixed positions. When heated, they gain energy, vibrate more, and overcome forces holding them in place. They can now move freely — the substance becomes liquid.", keywords:["particles","vibrate","energy","melt","fixed","move","liquid"], hint:"Think about what heat does to particles" },
          { id:"s0_5", marks:5, type:"extended", q:"Describe the water cycle. Include the processes of: evaporation, condensation, precipitation, and collection. Explain what drives each process.", answer:"Solar energy causes evaporation (water → water vapour). Rising vapour cools at altitude → condensation forms clouds. When droplets grow heavy → precipitation (rain/snow). Water collects in rivers, lakes, oceans. Gravity drives flow back to sea.", keywords:["evaporation","condensation","precipitation","solar","energy","cycle","gravity","clouds"], hint:"Start with the sun — it drives the cycle" }
        ]
      },
      1: {
        name: "Cells & Biology Basics",
        questions: [
          { id:"s1_1", marks:1, type:"mcq", q:"Which structure is found in plant cells but NOT animal cells?", options:["Cell membrane","Mitochondria","Cell wall","Nucleus"], answer:"Cell wall", hint:"Plants need this rigid structure for support" },
          { id:"s1_2", marks:1, type:"mcq", q:"What is the function of mitochondria?", options:["Protein synthesis","Energy production (respiration)","Photosynthesis","Cell division"], answer:"Energy production (respiration)", hint:"'Powerhouse of the cell'" },
          { id:"s1_3", marks:1, type:"mcq", q:"What do we call the process by which plants make food using light?", options:["Respiration","Digestion","Photosynthesis","Osmosis"], answer:"Photosynthesis", hint:"'Photo' means light; 'synthesis' means making" },
          { id:"s1_4", marks:3, type:"short", q:"Write the word equation for photosynthesis and explain what happens to each substance.", answer:"Carbon dioxide + water → glucose + oxygen. CO2 and water are absorbed by the leaf. Using light energy, chlorophyll converts them into glucose (for energy/growth) and oxygen (released as waste).", keywords:["carbon dioxide","water","glucose","oxygen","light","chlorophyll","photosynthesis"], hint:"What goes in? What comes out? What provides the energy?" },
          { id:"s1_5", marks:5, type:"extended", q:"Compare aerobic and anaerobic respiration. Include: word equations, where each occurs in the cell, amount of energy released, and when each is used by the body.", answer:"Aerobic: glucose+oxygen → CO2+water; occurs in mitochondria; releases 38 ATP; used during rest/moderate exercise. Anaerobic: glucose → lactic acid; occurs in cytoplasm; only 2 ATP; used in intense exercise when O2 insufficient. Lactic acid causes muscle fatigue.", keywords:["aerobic","anaerobic","glucose","oxygen","lactic acid","mitochondria","ATP","energy"], hint:"Key difference: aerobic needs oxygen, anaerobic doesn't" }
        ]
      },
      2: {
        name: "Atoms & Elements",
        questions: [
          { id:"s2_1", marks:1, type:"mcq", q:"What particles are found in the nucleus of an atom?", options:["Protons and electrons","Neutrons and electrons","Protons and neutrons","Electrons only"], answer:"Protons and neutrons", hint:"Electrons orbit around the nucleus" },
          { id:"s2_2", marks:1, type:"mcq", q:"What does the atomic number tell us?", options:["Number of neutrons","Number of protons","Mass of the atom","Number of electrons in outer shell"], answer:"Number of protons", hint:"Also equals the number of electrons in a neutral atom" },
          { id:"s2_3", marks:1, type:"mcq", q:"Elements in the same GROUP of the periodic table have:", options:["Same number of protons","Same mass number","Same number of outer electrons","Same number of neutrons"], answer:"Same number of outer electrons", hint:"This is why they have similar properties" },
          { id:"s2_4", marks:3, type:"short", q:"Carbon has atomic number 6 and mass number 12. Draw a simple diagram of its atomic structure showing all particles in the correct positions.", answer:"Nucleus contains 6 protons and 6 neutrons. Two shells of electrons: 2 in first shell, 4 in outer shell.", keywords:["6 protons","6 neutrons","2","4","shells","nucleus","electrons"], hint:"Mass number − atomic number = neutrons. Then fill shells: 2 first, 8 second" },
          { id:"s2_5", marks:5, type:"extended", q:"Explain ionic bonding using sodium chloride (NaCl) as an example. Include: electron configuration of each element, what happens during bonding, what ions are formed, and why the resulting compound has a high melting point.", answer:"Na (2,8,1) loses 1 electron → Na⁺ ion. Cl (2,8,7) gains 1 electron → Cl⁻ ion. Electrostatic attraction between opposite ions forms ionic bond. Giant lattice structure with many strong ionic bonds requires lots of energy to break → high melting point.", keywords:["sodium","chloride","electron","ion","Na+","Cl-","lattice","electrostatic","melting"], hint:"Na wants to lose 1, Cl wants to gain 1 — a perfect match" }
        ]
      },
      3: {
        name: "Forces & Motion",
        questions: [
          { id:"s3_1", marks:1, type:"mcq", q:"What is the unit of force?", options:["Joule","Watt","Newton","Pascal"], answer:"Newton", hint:"Named after Sir Isaac Newton" },
          { id:"s3_2", marks:1, type:"mcq", q:"If resultant force on an object is zero, the object:", options:["Always stops","Accelerates","Remains stationary or moves at constant velocity","Slows down"], answer:"Remains stationary or moves at constant velocity", hint:"Newton's First Law of Motion" },
          { id:"s3_3", marks:1, type:"mcq", q:"F = ma. If F = 30N and m = 5kg, what is the acceleration?", options:["150 m/s²","6 m/s²","25 m/s²","0.17 m/s²"], answer:"6 m/s²", hint:"Rearrange: a = F ÷ m" },
          { id:"s3_4", marks:3, type:"short", q:"A car travels 120m in 8 seconds. Calculate its average speed and explain what 'average speed' means.", answer:"Speed = distance ÷ time = 120 ÷ 8 = 15 m/s. Average speed means the total distance divided by total time — the car may have been faster or slower at different points.", keywords:["15","m/s","120","8","speed=distance/time","average"], hint:"Speed = distance ÷ time" },
          { id:"s3_5", marks:5, type:"extended", q:"Describe and explain what happens to a skydiver from the moment they jump to reaching terminal velocity, and then after the parachute opens. Include forces, acceleration, and speed at each stage. A diagram description is encouraged.", answer:"Stage 1: Weight > air resistance → accelerates downward. Stage 2: Speed increases → air resistance increases. Stage 3: Weight = air resistance → terminal velocity (constant speed). Parachute opens: large air resistance > weight → decelerates. New lower terminal velocity reached.", keywords:["weight","air resistance","terminal velocity","accelerate","decelerate","parachute","balance","equal"], hint:"Think about how forces change as speed increases" }
        ]
      },
      4: {
        name: "Energy & Electricity",
        questions: [
          { id:"s4_1", marks:1, type:"mcq", q:"What is the equation linking voltage, current and resistance?", options:["V = I + R","V = I × R","V = I ÷ R","V = I² × R"], answer:"V = I × R", hint:"Ohm's Law: V = IR" },
          { id:"s4_2", marks:1, type:"mcq", q:"In a series circuit, if one bulb breaks:", options:["Only that bulb goes out","All bulbs go out","The other bulbs get brighter","Nothing changes"], answer:"All bulbs go out", hint:"There is only one path for current in series" },
          { id:"s4_3", marks:1, type:"mcq", q:"What energy transfer occurs in a solar panel?", options:["Chemical → electrical","Light → electrical","Kinetic → electrical","Thermal → electrical"], answer:"Light → electrical", hint:"Solar = sun (light)" },
          { id:"s4_4", marks:3, type:"short", q:"A resistor has a voltage of 12V across it and a current of 3A flowing through it. Calculate: (a) its resistance, (b) the power dissipated.", answer:"(a) R = V/I = 12/3 = 4Ω  (b) P = IV = 3×12 = 36W", keywords:["4","ohm","36","watt","R=V/I","P=IV","resistance","power"], hint:"R = V ÷ I and P = I × V" },
          { id:"s4_5", marks:5, type:"extended", q:"Compare renewable and non-renewable energy sources. For EACH: name two examples, describe how electricity is generated, give one environmental advantage/disadvantage, and explain reliability concerns.", answer:"Non-renewable: coal/gas (burn fuel, steam drives turbine); reliable but CO2 emissions, finite supply. Renewable: wind/solar (no combustion); zero emissions but intermittent (no wind/sun at night). Nuclear: reliable, low CO2 but radioactive waste, costly decommissioning.", keywords:["renewable","non-renewable","turbine","CO2","reliable","intermittent","wind","solar","coal","nuclear"], hint:"Key comparison point: reliability vs environmental impact" }
        ]
      },
      5: {
        name: "Chemical Reactions",
        questions: [
          { id:"s5_1", marks:1, type:"mcq", q:"What is the pH of a neutral solution?", options:["0","7","14","5"], answer:"7", hint:"Below 7 is acidic, above 7 is alkaline" },
          { id:"s5_2", marks:1, type:"mcq", q:"Acid + Metal → ?", options:["Salt + water","Salt + hydrogen","Metal oxide + water","Carbon dioxide + water"], answer:"Salt + hydrogen", hint:"The hydrogen comes from the acid" },
          { id:"s5_3", marks:1, type:"mcq", q:"Combustion reactions always produce:", options:["Hydrogen gas","Carbon dioxide and water (if complete)","Oxygen","Methane"], answer:"Carbon dioxide and water (if complete)", hint:"Complete combustion of a hydrocarbon fuel" },
          { id:"s5_4", marks:3, type:"short", q:"Balance this equation: __H₂ + __O₂ → __H₂O. Explain the law of conservation of mass and how it applies here.", answer:"2H₂ + O₂ → 2H₂O. Conservation of mass: atoms are neither created nor destroyed. Both sides must have same number of each atom: 4H and 2O on each side.", keywords:["2H2","O2","2H2O","conservation","mass","balance","atoms"], hint:"Count atoms on each side; they must be equal" },
          { id:"s5_5", marks:5, type:"extended", q:"Describe the reactivity series of metals. Use it to explain: (a) why gold is found as a pure metal but iron is found as an ore, (b) how displacement reactions work with an example, (c) the extraction method appropriate for aluminium vs copper.", answer:"Reactivity: K,Na,Ca,Mg,Al,Zn,Fe,Cu,Ag,Au. Gold (unreactive) doesn't react with air. Iron (reactive) oxidises. Displacement: more reactive displaces less reactive (Zn + CuSO₄ → ZnSO₄ + Cu). Aluminium: electrolysis (too reactive for carbon reduction); Copper: carbon reduction as less reactive.", keywords:["reactivity","gold","iron","ore","displacement","electrolysis","aluminium","copper","reduction"], hint:"More reactive metals are harder to extract" }
        ]
      },
      6: {
        name: "Biology: Body Systems",
        questions: [
          { id:"s6_1", marks:1, type:"mcq", q:"Where does digestion of proteins begin?", options:["Mouth","Stomach","Small intestine","Large intestine"], answer:"Stomach", hint:"Protease enzymes and acid are in the stomach" },
          { id:"s6_2", marks:1, type:"mcq", q:"What is the role of red blood cells?", options:["Fight infection","Clot wounds","Carry oxygen","Produce antibodies"], answer:"Carry oxygen", hint:"They contain haemoglobin which binds to oxygen" },
          { id:"s6_3", marks:1, type:"mcq", q:"Which part of the brain controls heart rate?", options:["Cerebrum","Cerebellum","Medulla oblongata","Hypothalamus"], answer:"Medulla oblongata", hint:"Controls automatic body functions" },
          { id:"s6_4", marks:3, type:"short", q:"Explain how the heart works as a double pump. Include the role of the two sides of the heart and name the vessels involved.", answer:"Right side receives deoxygenated blood from vena cava → pumps to lungs via pulmonary artery. Left side receives oxygenated blood from pulmonary vein → pumps to body via aorta. Two pumps ensure sufficient pressure for body and keep oxygenated/deoxygenated separate.", keywords:["right","left","pulmonary","aorta","vena cava","oxygenated","deoxygenated","pump","lungs"], hint:"Follow the blood: body → right heart → lungs → left heart → body" },
          { id:"s6_5", marks:5, type:"extended", q:"Describe the human immune system's response to a pathogen that has never been encountered before, and explain how vaccination uses this to provide immunity.", answer:"Pathogen enters → white blood cells detect antigens → lymphocytes produce specific antibodies → antibodies destroy pathogen → memory cells remain. Second exposure: rapid antibody production (immune). Vaccine: weakened/dead pathogen or antigen; triggers immune response without illness; memory cells formed.", keywords:["pathogen","antigen","antibody","lymphocyte","memory cells","vaccine","immunity","immune response"], hint:"The key is 'memory cells' — they remember the antigen for future encounters" }
        ]
      },
      7: {
        name: "Waves & Light",
        questions: [
          { id:"s7_1", marks:1, type:"mcq", q:"What type of wave is sound?", options:["Transverse","Longitudinal","Electromagnetic","Seismic"], answer:"Longitudinal", hint:"Particles vibrate parallel to the direction of travel" },
          { id:"s7_2", marks:1, type:"mcq", q:"What is the speed of light in a vacuum?", options:["3 × 10⁶ m/s","3 × 10⁸ m/s","3 × 10¹⁰ m/s","300 m/s"], answer:"3 × 10⁸ m/s", hint:"Approximately 300,000 km/s" },
          { id:"s7_3", marks:1, type:"mcq", q:"The electromagnetic spectrum in order of INCREASING frequency starts with:", options:["Gamma rays","Radio waves","Visible light","Ultraviolet"], answer:"Radio waves", hint:"Radio → Microwave → IR → Visible → UV → X-ray → Gamma" },
          { id:"s7_4", marks:3, type:"short", q:"A wave has a frequency of 200Hz and a wavelength of 2m. Calculate its wave speed and explain what frequency and wavelength mean.", answer:"Speed = frequency × wavelength = 200 × 2 = 400 m/s. Frequency: number of complete waves per second (Hz). Wavelength: distance from one crest to the next.", keywords:["400","m/s","200","2","speed=fλ","frequency","wavelength"], hint:"Wave speed = frequency × wavelength" },
          { id:"s7_5", marks:5, type:"extended", q:"Explain how a convex lens forms an image. Include: what happens to parallel rays, real vs virtual images, how magnification works, and give two practical uses of convex lenses.", answer:"Parallel rays converge at focal point. Object beyond 2F: real, inverted, smaller image. Object between F and lens: virtual, upright, magnified image. Magnification = image height ÷ object height. Uses: camera (real image on sensor), magnifying glass (virtual image for eye), correcting long-sightedness.", keywords:["convex","focal point","converge","real","virtual","magnification","camera","long-sight"], hint:"Key distinction: object inside focal point → virtual image; outside → real image" }
        ]
      },
      8: {
        name: "Genetics & Evolution",
        questions: [
          { id:"s8_1", marks:1, type:"mcq", q:"What is a gene?", options:["A section of DNA coding for a protein","The entire DNA molecule","A type of cell","A chromosome"], answer:"A section of DNA coding for a protein", hint:"Genes are the instructions for making proteins" },
          { id:"s8_2", marks:1, type:"mcq", q:"If B (brown eyes) is dominant and b (blue eyes) is recessive, what genotype will always give blue eyes?", options:["BB","Bb","bB","bb"], answer:"bb", hint:"Recessive trait only shows when there are two copies" },
          { id:"s8_3", marks:1, type:"mcq", q:"What did Darwin's theory of natural selection suggest?", options:["Species were created perfectly","Organisms with beneficial traits survive and reproduce more","All mutations are harmful","Environments never change"], answer:"Organisms with beneficial traits survive and reproduce more", hint:"'Survival of the fittest'" },
          { id:"s8_4", marks:3, type:"short", q:"Two parents are both carriers of cystic fibrosis (Ff). Draw a Punnett square and calculate the probability of their child having cystic fibrosis.", answer:"Punnett: FF, Ff, Ff, ff. Probability of ff (cystic fibrosis) = 1/4 or 25%. F=normal allele (dominant), f=CF allele (recessive).", keywords:["FF","Ff","ff","25%","1/4","Punnett","recessive","dominant"], hint:"Cross Ff × Ff in a 2×2 grid" },
          { id:"s8_5", marks:5, type:"extended", q:"Explain how antibiotic resistance develops in bacteria. Include: random mutation, natural selection, survival advantage, reproduction, and why this is a serious public health concern.", answer:"Random mutation in bacteria gives resistance to antibiotic. Antibiotics kill non-resistant bacteria; resistant survive (natural selection). Resistant bacteria reproduce → population becomes resistant. Public health: infections untreatable, need new antibiotics. Misuse accelerates resistance.", keywords:["mutation","natural selection","resistant","reproduce","antibiotic","survive","public health","resistant bacteria"], hint:"Apply Darwin's natural selection specifically to bacteria and antibiotics" }
        ]
      },
      9: {
        name: "Earth Science & Space",
        questions: [
          { id:"s9_1", marks:1, type:"mcq", q:"What causes the seasons on Earth?", options:["Distance from the Sun","Tilt of Earth's axis","Speed of Earth's orbit","Size of the Sun"], answer:"Tilt of Earth's axis", hint:"Earth is tilted at 23.5°" },
          { id:"s9_2", marks:1, type:"mcq", q:"The Big Bang theory suggests the universe began:", options:["About 4.5 billion years ago","About 13.8 billion years ago","6,000 years ago","Infinitely long ago"], answer:"About 13.8 billion years ago", hint:"The universe is much older than Earth" },
          { id:"s9_3", marks:1, type:"mcq", q:"What is the greenhouse effect?", options:["Warming of greenhouses in summer","Trapping of heat by atmospheric gases","Ozone layer protecting Earth","Ocean currents warming land"], answer:"Trapping of heat by atmospheric gases", hint:"CO2, methane and water vapour act like a blanket" },
          { id:"s9_4", marks:3, type:"short", q:"Explain how tectonic plates cause earthquakes. Include reference to plate boundaries, stored energy, and seismic waves.", answer:"Tectonic plates move on the mantle. At plate boundaries, plates lock together through friction. Stress builds as plates continue moving. Eventually force overcomes friction — plates jerk suddenly releasing energy as seismic waves — earthquake.", keywords:["tectonic","plates","boundary","friction","seismic","waves","energy","earthquake"], hint:"Key concept: plates lock but don't stop moving — stress builds until release" },
          { id:"s9_5", marks:5, type:"extended", q:"Describe the life cycle of a star similar to our Sun, from nebula to its final state. Include: nuclear fusion, main sequence, red giant, and white dwarf stages.", answer:"Nebula (gas/dust cloud) → gravity causes collapse → protostar → nuclear fusion begins (H→He) → main sequence star (balanced: gravity vs fusion pressure). Hydrogen runs out → star expands to red giant (fuses He). Outer layers lost → white dwarf (no more fusion, cools over billions of years).", keywords:["nebula","protostar","fusion","main sequence","red giant","white dwarf","hydrogen","helium","gravity"], hint:"Follow energy: gravity in → fusion out → balance = main sequence" }
        ]
      },
      10: {
        name: "Advanced Science & Exam Mastery",
        questions: [
          { id:"s10_1", marks:1, type:"mcq", q:"What does the half-life of a radioactive substance mean?", options:["Time for all atoms to decay","Time for half the atoms to decay","Time for radiation to halve in intensity","Time for the substance to cool by half"], answer:"Time for half the atoms to decay", hint:"After each half-life, the count rate halves" },
          { id:"s10_2", marks:1, type:"mcq", q:"Le Chatelier's Principle states that if a system is disturbed:", options:["It stops reacting","It responds to oppose the change","It always speeds up","Temperature drops"], answer:"It responds to oppose the change", hint:"The system tries to restore equilibrium" },
          { id:"s10_3", marks:1, type:"mcq", q:"What distinguishes alpha, beta and gamma radiation in terms of penetration?", options:["Alpha most penetrating, gamma least","Gamma most penetrating, alpha least","Beta most penetrating, alpha least","All have equal penetration"], answer:"Gamma most penetrating, alpha least", hint:"Alpha stopped by paper, gamma needs thick lead" },
          { id:"s10_4", marks:3, type:"short", q:"A sample of carbon-14 has a half-life of 5,730 years. If a sample currently has 200 atoms, how many will remain after 17,190 years? Show your working.", answer:"17,190 ÷ 5,730 = 3 half-lives. 200 → 100 → 50 → 25. After 3 half-lives: 25 atoms remain.", keywords:["25","3","half-lives","200","100","50","5730"], hint:"Divide total time by half-life to get number of half-lives" },
          { id:"s10_5", marks:5, type:"extended", q:"Evaluate the advantages and disadvantages of using nuclear power as part of the UK's energy mix. Include: how nuclear fission works, safety concerns, waste disposal, cost, and carbon emissions. Come to a reasoned conclusion.", answer:"Nuclear fission: uranium nucleus splits → chain reaction → heat → steam → electricity. Advantages: low CO2, reliable (not weather dependent), high energy density. Disadvantages: radioactive waste (thousands of years storage), accident risk (Chernobyl, Fukushima), high construction cost, uranium mining impact. Conclusion: needed for low-carbon baseload but waste/cost are serious concerns.", keywords:["fission","nuclear","uranium","chain reaction","CO2","waste","radioactive","reliable","Chernobyl","evaluate"], hint:"Structure: how it works → pros → cons → balanced conclusion" }
        ]
      }
    }
  },

  geography: {
    name: "Geography",
    icon: "🌍",
    color: "#D97706",
    levels: {
      0: {
        name: "Geography Basics",
        questions: [
          { id:"g0_1", marks:1, type:"mcq", q:"What are the four points of a compass?", options:["Up, Down, Left, Right","North, South, East, West","Hot, Cold, Wet, Dry","Land, Sea, Air, Space"], answer:"North, South, East, West", hint:"Never Eat Shredded Wheat" },
          { id:"g0_2", marks:1, type:"mcq", q:"What is a river's 'mouth'?", options:["Where it starts","Where it is widest in the middle","Where it meets the sea","Where it flows fastest"], answer:"Where it meets the sea", hint:"Like a mouth, it opens out to something larger" },
          { id:"g0_3", marks:1, type:"mcq", q:"What does 'urban' mean?", options:["Relating to the countryside","Relating to towns and cities","Relating to mountains","Relating to rivers"], answer:"Relating to towns and cities", hint:"The opposite of rural" },
          { id:"g0_4", marks:3, type:"short", q:"Describe THREE differences between a city and a village.", answer:"City: large population, many services (hospitals, schools, shops), transport links, high density housing. Village: small population, few services, mainly agricultural/rural land use, low density housing.", keywords:["population","services","transport","density","rural","urban","housing","large","small"], hint:"Think about people, buildings, and services available" },
          { id:"g0_5", marks:5, type:"extended", q:"Describe the main features of the UK's physical geography. Include: location, climate, main mountain ranges, rivers, and coastline.", answer:"UK: NW Europe, Atlantic coast. Temperate maritime climate (mild, wet). Mountains: Highlands (Scotland), Pennines (England), Snowdonia (Wales). Major rivers: Thames, Severn, Trent. Long varied coastline with cliffs (White Cliffs), beaches, estuaries.", keywords:["temperate","maritime","Highlands","Pennines","Snowdonia","Thames","Severn","Atlantic","coastline"], hint:"Work through each category systematically" }
        ]
      },
      1: {
        name: "Map Skills",
        questions: [
          { id:"g1_1", marks:1, type:"mcq", q:"What do contour lines show on an OS map?", options:["Roads","Height above sea level","Rivers","Vegetation"], answer:"Height above sea level", hint:"Lines join points of equal height" },
          { id:"g1_2", marks:1, type:"mcq", q:"What is the scale 1:50,000?", options:["1cm = 50m","1cm = 500m","1cm = 5km","1cm = 50km"], answer:"1cm = 500m", hint:"1:50,000 means 1 unit on map = 50,000 units in real life" },
          { id:"g1_3", marks:1, type:"mcq", q:"Grid references in geography go: first the __, then the __.", options:["northing, easting","easting, northing","latitude, longitude","longitude, latitude"], answer:"easting, northing", hint:"'Go along the corridor (east), then up the stairs (north)'" },
          { id:"g1_4", marks:3, type:"short", q:"Explain how you can identify a steep valley on a contour map. What would the contour lines look like, and why?", answer:"Closely spaced contour lines = steep slope (height changes quickly over short distance). A V-shape pointing uphill = valley. The closer the lines, the steeper the gradient.", keywords:["contour","closely spaced","steep","V-shape","valley","gradient","height"], hint:"Think: if lines are far apart, the land is almost flat" },
          { id:"g1_5", marks:5, type:"extended", q:"You are planning a 10km hike on an OS map. Describe how you would: use grid references to note your start/end points, identify steep and flat sections, find water sources, and calculate walking time (assume 4km/h on flat, 2km/h uphill).", answer:"Use 6-figure grid references for start/end. Identify contours: closely-spaced = uphill (2km/h), widely-spaced = flat (4km/h). Blue lines = rivers/streams for water. Calculate time per section based on terrain. Total 10km: estimate 3-4 hours depending on terrain split.", keywords:["grid reference","contour","steep","flat","blue","water","4km/h","2km/h","time"], hint:"Break the route into sections — flat then steep — and calculate time for each" }
        ]
      },
      2: {
        name: "Weather & Climate",
        questions: [
          { id:"g2_1", marks:1, type:"mcq", q:"What is the difference between weather and climate?", options:["They are the same thing","Weather is long-term, climate is day-to-day","Climate is long-term patterns, weather is day-to-day conditions","Climate only applies to tropical areas"], answer:"Climate is long-term patterns, weather is day-to-day conditions", hint:"'Climate is what you expect, weather is what you get'" },
          { id:"g2_2", marks:1, type:"mcq", q:"The UK is described as having a 'maritime' climate. This means:", options:["Very hot and dry","Extreme temperatures, low rainfall","Mild temperatures and fairly high rainfall","Cold winters and hot summers"], answer:"Mild temperatures and fairly high rainfall", hint:"Maritime = influenced by the sea" },
          { id:"g2_3", marks:1, type:"mcq", q:"Which type of rainfall occurs when warm air is forced to rise over mountains?", options:["Frontal","Convectional","Relief (Orographic)","Cyclonic"], answer:"Relief (Orographic)", hint:"The mountains force the air upward" },
          { id:"g2_4", marks:3, type:"short", q:"Explain why western parts of the UK receive more rainfall than eastern parts.", answer:"Prevailing winds from SW bring moist Atlantic air. Air rises over Welsh/Scottish mountains (relief rainfall on windward west). Air descends on eastern side (leeward) — rain shadow effect — air warms and dries. Therefore east (e.g. East Anglia) is much drier.", keywords:["prevailing wind","Atlantic","relief","mountain","rain shadow","leeward","windward","east","west"], hint:"Follow the journey of an air mass from the Atlantic" },
          { id:"g2_5", marks:5, type:"extended", q:"Describe the causes and effects of global warming. Include: greenhouse gases, human activities, at least two environmental effects, and one social/economic effect.", answer:"Causes: CO2, methane, nitrous oxide trap heat. Human activities: burning fossil fuels, deforestation, agriculture, industry. Environmental effects: melting ice caps/sea level rise, more extreme weather events, species extinction, coral bleaching. Social/economic: flooding of low-lying areas, climate refugees, crop failures.", keywords:["CO2","greenhouse","methane","fossil fuels","deforestation","sea level","flooding","extreme weather","temperature"], hint:"Structure: gases → human causes → environmental effects → human effects" }
        ]
      },
      3: {
        name: "Rivers & Coasts",
        questions: [
          { id:"g3_1", marks:1, type:"mcq", q:"What is erosion?", options:["The transport of material","The wearing away of rock and soil","The deposition of material","The movement of tectonic plates"], answer:"The wearing away of rock and soil", hint:"Water and wind gradually break down surfaces" },
          { id:"g3_2", marks:1, type:"mcq", q:"A meander is:", options:["A waterfall","A bend in a river","The river source","Where a river meets the sea"], answer:"A bend in a river", hint:"Rivers don't flow in straight lines" },
          { id:"g3_3", marks:1, type:"mcq", q:"What process occurs on the inside bend of a meander?", options:["Erosion","Deposition","Transportation","Hydraulic action"], answer:"Deposition", hint:"Water moves slower on the inside — it drops its load" },
          { id:"g3_4", marks:3, type:"short", q:"Explain how a waterfall is formed. Include the processes of erosion and the rock types involved.", answer:"River flows over resistant rock above softer rock. Softer rock erodes faster creating a step. Hydraulic action/abrasion undercuts resistant rock forming overhang. Overhang collapses. Process repeats as waterfall retreats upstream leaving a gorge.", keywords:["resistant","soft","erosion","undercut","overhang","collapse","gorge","waterfall","hydraulic"], hint:"Key: two different rock types — hard above, soft below" },
          { id:"g3_5", marks:5, type:"extended", q:"Compare the upper and lower course of a river. For each, describe: the channel shape, gradient, processes, and landforms created. Use geographical terms throughout.", answer:"Upper course: steep gradient, narrow/deep channel (V-shaped valley), high energy, dominant erosion (hydraulic action, abrasion), vertical erosion, landforms: waterfalls, gorges, V-shaped valleys. Lower course: gentle gradient, wide/shallow channel, low energy, dominant deposition, meanders, floodplains, oxbow lakes, deltas.", keywords:["upper","lower","gradient","erosion","deposition","meander","floodplain","V-shaped","oxbow","delta"], hint:"Upper = young, fast, erosion. Lower = mature, slow, deposition" }
        ]
      },
      4: {
        name: "Population & Migration",
        questions: [
          { id:"g4_1", marks:1, type:"mcq", q:"What is the DTM (Demographic Transition Model)?", options:["A map of population density","A model showing how birth/death rates change over time","A measure of migration","A model of urban growth"], answer:"A model showing how birth/death rates change over time", hint:"It shows how countries' populations change as they develop" },
          { id:"g4_2", marks:1, type:"mcq", q:"'Push factors' in migration refer to:", options:["Reasons that attract migrants to a new place","Reasons that drive people away from their home area","Government policies on migration","The speed of migration"], answer:"Reasons that drive people away from their home area", hint:"They 'push' you out — war, poverty, lack of jobs" },
          { id:"g4_3", marks:1, type:"mcq", q:"Which country has the world's largest population?", options:["USA","Russia","India","China"], answer:"India", hint:"India recently overtook China as the most populous country" },
          { id:"g4_4", marks:3, type:"short", q:"Explain the difference between economic migrants and refugees. Include an example of each.", answer:"Economic migrants move voluntarily to improve living standards (e.g. workers from EU moving to UK for higher wages). Refugees are forced to flee their home country due to war, persecution or natural disaster (e.g. Syrian refugees fleeing civil war). Refugees have legal protection under UN convention.", keywords:["economic","refugee","voluntary","forced","war","persecution","living standards","example"], hint:"Key distinction: voluntary vs forced movement" },
          { id:"g4_5", marks:5, type:"extended", q:"Evaluate the impacts of migration on both the source country and the host country. Include: at least two positive and two negative impacts for each. Use a case study to support your answer.", answer:"Source country positive: remittances sent home, reduced pressure on resources, returning migrants bring skills. Negative: brain drain, ageing population, family separation. Host country positive: fills labour shortages, cultural diversity, tax revenue. Negative: pressure on housing/services, social tension. Case study: Eastern Europe to UK after 2004 EU expansion.", keywords:["source","host","remittances","brain drain","labour","services","housing","positive","negative","case study"], hint:"Four sections: source positive, source negative, host positive, host negative" }
        ]
      },
      5: {
        name: "Urban Issues",
        questions: [
          { id:"g5_1", marks:1, type:"mcq", q:"What is urbanisation?", options:["Growth of city populations","Movement from city to countryside","Building new cities","Demolishing old buildings"], answer:"Growth of city populations", hint:"More people living in urban areas over time" },
          { id:"g5_2", marks:1, type:"mcq", q:"What are squatter settlements (shanty towns)?", options:["Luxury apartments in city centres","Illegal settlements built on land people don't own, usually with poor conditions","Council-built housing estates","Suburbs of wealthy cities"], answer:"Illegal settlements built on land people don't own, usually with poor conditions", hint:"Found in many LICs — rapid urbanisation creates housing shortage" },
          { id:"g5_3", marks:1, type:"mcq", q:"A 'sustainable city' aims to:", options:["Build as many houses as possible","Meet needs of current residents without harming future generations","Attract the most businesses","Grow as fast as possible"], answer:"Meet needs of current residents without harming future generations", hint:"Sustainability = meeting current needs without compromising the future" },
          { id:"g5_4", marks:3, type:"short", q:"Explain two challenges that rapid urbanisation creates in developing countries.", answer:"1. Housing shortage: more people than homes available → illegal squatter settlements grow (e.g. Dharavi, Mumbai) with poor sanitation and overcrowding. 2. Inadequate services: water, electricity, healthcare cannot keep pace with population growth → disease spreads, inequality worsens.", keywords:["housing","squatter","sanitation","services","water","healthcare","overcrowding","rapid","developing"], hint:"Think about: housing, water, sanitation, services, transport" },
          { id:"g5_5", marks:5, type:"extended", q:"Case study: Rio de Janeiro. Describe the challenges facing the city and evaluate strategies used to improve quality of life in favelas. How successful have these strategies been?", answer:"Challenges: inequality, crime, favela housing, poor sanitation, unemployment. Strategies: Favela Bairro project (infrastructure), cable cars to hillside areas, pacification units (UPP) for crime, Community Land Titles giving residents security. Success: mixed — infrastructure improved but crime remains, residents fear displacement, uneven investment across favelas.", keywords:["Rio","favela","Favela Bairro","cable car","UPP","pacification","sanitation","inequality","strategy","success"], hint:"Structure: challenges first, then strategies, then evaluation of success" }
        ]
      },
      6: {
        name: "Economic Development",
        questions: [
          { id:"g6_1", marks:1, type:"mcq", q:"What does GNI per capita measure?", options:["Size of a country","Average income of citizens per year","Amount of trade","Level of pollution"], answer:"Average income of citizens per year", hint:"GNI = Gross National Income; per capita = per person" },
          { id:"g6_2", marks:1, type:"mcq", q:"What does NEE stand for in geography?", options:["North Eastern Economy","Newly Emerging Economy","National Enterprise Exchange","Non-European Economy"], answer:"Newly Emerging Economy", hint:"Countries like Brazil, China, India are NEEs" },
          { id:"g6_3", marks:1, type:"mcq", q:"What is the HDI (Human Development Index)?", options:["A measure of happiness","A composite measure of life expectancy, education, and income","A measure of GDP only","A measure of environmental quality"], answer:"A composite measure of life expectancy, education, and income", hint:"It combines multiple measures to give a more complete picture" },
          { id:"g6_4", marks:3, type:"short", q:"Explain how the 'development gap' between HICs and LICs can be measured. Use two different indicators.", answer:"GNI per capita: HICs like UK ($40,000+) vs LICs like Chad (<$700). HDI: UK 0.93 (very high) vs Niger 0.40 (low). Literacy rate: HICs nearly 100% vs some LICs below 50%. Different indicators show different aspects — HDI is more holistic than GDP alone.", keywords:["GNI","HDI","literacy","HIC","LIC","gap","measure","indicator","compare"], hint:"Choose two different types of indicator — economic and social" },
          { id:"g6_5", marks:5, type:"extended", q:"Case study: Nigeria as a NEE. How has Nigeria's economy changed, and what are the social, economic, and environmental impacts of its development?", answer:"Nigeria: oil discovery → economic growth, Lagos as major business hub. TNCs (Shell) extract resources. Social: growing middle class but huge inequality, urbanisation pressure. Economic: GDP growth but oil-dependent, Dutch disease risk, informal economy. Environmental: Niger Delta oil spills, deforestation, pollution. Improvement but unequal distribution of wealth.", keywords:["Nigeria","NEE","oil","Lagos","TNC","Shell","inequality","Delta","deforestation","development"], hint:"Three clear sections: economic change, social impact, environmental impact" }
        ]
      },
      7: {
        name: "Natural Hazards",
        questions: [
          { id:"g7_1", marks:1, type:"mcq", q:"At which plate boundary do earthquakes AND volcanoes occur?", options:["Conservative","Constructive only","Destructive","Transform only"], answer:"Destructive", hint:"Where plates collide — subduction zone" },
          { id:"g7_2", marks:1, type:"mcq", q:"What is the Richter scale?", options:["Measures hurricane intensity","Measures earthquake magnitude","Measures volcano height","Measures tsunami wave height"], answer:"Measures earthquake magnitude", hint:"A logarithmic scale from 1-10" },
          { id:"g7_3", marks:1, type:"mcq", q:"A tropical storm needs which sea surface temperature to form and maintain intensity?", options:["Above 10°C","Above 15°C","Above 26.5°C","Above 35°C"], answer:"Above 26.5°C", hint:"Warm water provides the energy (evaporation) for tropical storms" },
          { id:"g7_4", marks:3, type:"short", q:"Explain why earthquakes in LICs often cause more deaths than earthquakes of the same magnitude in HICs.", answer:"LICs: poorly constructed buildings collapse easily; inadequate emergency services; poor communication infrastructure delays response; no earthquake prediction systems; insufficient aid. HICs: strict building codes (earthquake resistant), fast emergency response, early warning systems, medical infrastructure.", keywords:["LIC","HIC","building","construction","emergency services","response","infrastructure","death toll","inequality"], hint:"Compare: quality of buildings, emergency response, warning systems" },
          { id:"g7_5", marks:5, type:"extended", q:"Compare the immediate and long-term responses to a named earthquake in a HIC with one in an LIC. Evaluate why the outcomes differed.", answer:"HIC example: Christchurch 2011 (NZ) — fast emergency response, welfare support, rebuilding programme, NZ$40bn recovery. LIC example: Haiti 2010 — 230,000 deaths, infrastructure collapse, disease outbreaks, international aid dependency, slow rebuilding 10+ years later. Difference: wealth, governance, building quality, international aid vs self-sufficiency, emergency capacity.", keywords:["Haiti","Christchurch","HIC","LIC","response","immediate","long-term","emergency","rebuilding","compare"], hint:"Structure: immediate HIC / immediate LIC / long-term HIC / long-term LIC / why different" }
        ]
      },
      8: {
        name: "Resources & Sustainability",
        questions: [
          { id:"g8_1", marks:1, type:"mcq", q:"What is 'food security'?", options:["All food being safe to eat","When all people have enough food for an active, healthy life","A government policy on farming","Food being stored safely"], answer:"When all people have enough food for an active, healthy life", hint:"Security = reliable access; not just safety" },
          { id:"g8_2", marks:1, type:"mcq", q:"What is the 'water stress' threshold (per person per year)?", options:["Below 500m³","Below 1,700m³","Below 5,000m³","Below 10,000m³"], answer:"Below 1,700m³", hint:"Below this, countries struggle to meet water needs" },
          { id:"g8_3", marks:1, type:"mcq", q:"What is 'energy mix'?", options:["Blending different fuels in an engine","The combination of energy sources used by a country","Mixing renewable and non-renewable fuels","A type of energy efficiency measure"], answer:"The combination of energy sources used by a country", hint:"Most countries use coal AND gas AND renewables AND nuclear — their mix" },
          { id:"g8_4", marks:3, type:"short", q:"Explain why access to clean water is unequal globally. Give two causes of water insecurity.", answer:"1. Physical scarcity: some regions (Sub-Saharan Africa, Middle East) receive very low rainfall. 2. Economic scarcity: countries lack money to build infrastructure (pipes, treatment plants). 3. Pollution: industrial/agricultural runoff contaminates water sources. 4. Climate change: changes rainfall patterns, reduces glacial meltwater.", keywords:["physical","economic","scarcity","rainfall","infrastructure","pollution","climate","inequality","access"], hint:"Distinguish between physical shortage and inability to access/afford water" },
          { id:"g8_5", marks:5, type:"extended", q:"Evaluate strategies to achieve food security in a world of growing population and climate change. Consider: increasing supply (technology, GM crops), reducing demand, and sustainable approaches. Use examples.", answer:"Increase supply: Green Revolution (HYV seeds, fertilisers) — increased yields but environmental concerns. GM crops: drought/pest resistant varieties. Irrigation: expands growing areas but depletes aquifers. Reduce demand: reduce food waste (1/3 wasted globally), dietary change (less meat). Sustainable: agroforestry, permaculture, local food systems. Evaluation: tech solutions have risks; sustainability is long-term but requires behavioural change.", keywords:["Green Revolution","GM","irrigation","food waste","agroforestry","sustainable","HYV","demand","supply","evaluate"], hint:"Balance supply solutions vs demand reduction vs sustainability" }
        ]
      },
      9: {
        name: "Ecosystems & Biomes",
        questions: [
          { id:"g9_1", marks:1, type:"mcq", q:"Where are tropical rainforests mainly found?", options:["Near the poles","In desert regions","Around the equator","In temperate zones"], answer:"Around the equator", hint:"High temperatures and rainfall throughout the year near the equator" },
          { id:"g9_2", marks:1, type:"mcq", q:"What is 'nutrient cycling' in an ecosystem?", options:["The movement of animals through a habitat","The process by which nutrients are recycled through living organisms and environment","A farming technique","The flow of water through a forest"], answer:"The process by which nutrients are recycled through living organisms and environment", hint:"Dead matter decomposes and releases nutrients back into soil" },
          { id:"g9_3", marks:1, type:"mcq", q:"What is the main cause of tropical rainforest deforestation?", options:["Natural fires","Commercial farming and cattle ranching","Tourism","Flooding"], answer:"Commercial farming and cattle ranching", hint:"In the Amazon, mainly for soy farming and beef production" },
          { id:"g9_4", marks:3, type:"short", q:"Explain how tropical rainforest plants are adapted to survive in their environment. Give THREE specific adaptations.", answer:"1. Drip-tip leaves: steep angle allows rain to run off quickly, preventing mould/disease in high-humidity environment. 2. Buttress roots: large surface roots support tall trees in thin, nutrient-poor soil. 3. Lianas (climbing vines): reach sunlight without investing energy in thick trunk.", keywords:["drip-tip","buttress","roots","lianas","humidity","sunlight","soil","adapted","moisture"], hint:"Think about the conditions: heavy rain, competition for light, shallow soils" },
          { id:"g9_5", marks:5, type:"extended", q:"Case study: The Amazon Rainforest. Assess the value of the Amazon and evaluate strategies to protect it. Are these strategies sufficient?", answer:"Value: biodiversity (10% of all species), carbon store (climate regulation), water cycle role, indigenous communities, medicines (25% pharmaceuticals). Threats: deforestation (cattle, soy, logging, mining). Strategies: REDD+ (pay countries to protect forests), National Parks, indigenous land rights, certification schemes (FSC timber). Sufficiency: REDD+ works where enforced; political will varies (Brazil's deforestation spiked 2019-2022); certification works in formal markets not illegal logging.", keywords:["Amazon","biodiversity","carbon","REDD","deforestation","indigenous","protection","evaluate","strategy","sufficient"], hint:"Value → threats → strategies → evaluate whether strategies are enough" }
        ]
      },
      10: {
        name: "Fieldwork, Exam Technique & Mastery",
        questions: [
          { id:"g10_1", marks:1, type:"mcq", q:"In geography fieldwork, what is a 'transect'?", options:["A type of survey questionnaire","A straight line along which data is collected","A statistical test","A type of map"], answer:"A straight line along which data is collected", hint:"E.g. measuring vegetation change from coast to inland along a straight line" },
          { id:"g10_2", marks:1, type:"mcq", q:"What is the Spearman's Rank correlation coefficient used for?", options:["Measuring average","Identifying if two variables have a correlation","Calculating percentage change","Drawing graph lines"], answer:"Identifying if two variables have a correlation", hint:"It tests whether two sets of ranked data are correlated" },
          { id:"g10_3", marks:1, type:"mcq", q:"A 9-mark geography question requires you to:", options:["Define a term","Give a short list","Explain a process in detail with case study examples","Write a one-word answer"], answer:"Explain a process in detail with case study examples", hint:"9 marks = extended answer, specific examples, geographical terminology" },
          { id:"g10_4", marks:3, type:"short", q:"Evaluate the reliability of questionnaires as a data collection method in geographical fieldwork. Include advantages and disadvantages.", answer:"Advantages: large data from many people, standardised questions allow comparison, primary data. Disadvantages: response bias (people give 'correct' answers), limited sample size, interviewer effect, closed questions miss nuance. Reliability improved by: random sampling, large sample, neutral wording.", keywords:["questionnaire","bias","sample","primary","reliable","disadvantage","advantage","wording"], hint:"Think about: who responds, what biases exist, how representative is the sample" },
          { id:"g10_5", marks:5, type:"extended", q:"'Geography is the most important subject for understanding the challenges facing humanity in the 21st century.' Evaluate this statement using geographical knowledge from at least THREE different topic areas.", answer:"For: climate change, resource scarcity, urbanisation, migration — all geographical issues requiring spatial understanding. Against: history explains political roots; science provides technical solutions; economics drives policy. Evaluation: geography is uniquely interdisciplinary, integrating physical and human systems. Conclusion: not more important but essential — these challenges need geographical thinking.", keywords:["climate change","urbanisation","migration","resource","interdisciplinary","evaluate","argument","challenges","21st century"], hint:"Structure: arguments for → arguments against → your balanced conclusion with evidence" }
        ]
      }
    }
  }
};

const LEVEL_NAMES = [
  "Novice Explorer",     // 0
  "Apprentice",          // 1
  "Rising Star",         // 2
  "Journeyman",          // 3
  "Skilled Scholar",     // 4
  "Confident Learner",   // 5
  "Advanced Thinker",    // 6
  "Expert Analyst",      // 7
  "Master Student",      // 8
  "Grade 8 Champion",    // 9
  "GCSE Legend"          // 10
];

const BADGES = [
  { id:"first_blood", name:"First Answer!", icon:"⚡", desc:"Answer your first question" },
  { id:"perfect_level", name:"Perfect Level", icon:"⭐", desc:"Get 100% on a level" },
  { id:"streak_3", name:"On Fire!", icon:"🔥", desc:"Get 3 correct in a row" },
  { id:"streak_5", name:"Unstoppable!", icon:"🚀", desc:"Get 5 correct in a row" },
  { id:"all_subjects", name:"Renaissance Learner", icon:"🎓", desc:"Complete a level in all 4 subjects" },
  { id:"level_5", name:"Halfway There", icon:"🏅", desc:"Reach Level 5 in any subject" },
  { id:"level_10", name:"GCSE Ready!", icon:"🏆", desc:"Reach Level 10 in any subject" },
  { id:"five_marker", name:"Five Star Answer", icon:"💫", desc:"Correctly answer a 5-mark question" },
  { id:"speed_demon", name:"Speed Demon", icon:"⚡", desc:"Answer 5 questions in under 2 minutes" },
  { id:"subject_master", name:"Subject Master", icon:"🧠", desc:"Complete all levels in one subject" }
];
