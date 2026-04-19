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
          { id:"m0_5", marks:5, type:"extended", q:"Sarah has £20. She buys a book for £7.50 and a pen for £2.30. (a) How much does she spend in total? (b) How much change does she receive? (c) If she buys two pens instead, how much change would she get?", answer:"(a) £9.80  (b) £10.20  (c) £7.90", keywords:["9.80","10.20","7.90","change","spend"], hint:"Work out each part separately" },
          { id:"m0_6", marks:1, type:"mcq", q:"What is 9 + 6?", options:["14","15","16","17"], answer:"15", hint:"Count on from 9" },
          { id:"m0_7", marks:1, type:"mcq", q:"What is 18 − 9?", options:["7","8","9","10"], answer:"9", hint:"Subtract 9 from 18" },
          { id:"m0_8", marks:3, type:"short", q:"There are 14 apples in a bowl. 6 are eaten. How many are left? Show your working.", answer:"8", keywords:["8","14-6","subtract","left"], hint:"Take 6 away from 14" }
        ]
      },
      1: {
        name: "Place Value & Decimals",
        questions: [
          { id:"m1_1", marks:1, type:"mcq", q:"What is the value of the digit 6 in 3.64?", options:["6","0.6","0.06","60"], answer:"0.6", hint:"After the decimal point: tenths, hundredths..." },
          { id:"m1_2", marks:1, type:"mcq", q:"Which is largest: 0.7, 0.07, 0.71, 0.17?", options:["0.7","0.07","0.71","0.17"], answer:"0.71", hint:"Compare digit by digit" },
          { id:"m1_3", marks:1, type:"mcq", q:"Round 4.76 to 1 decimal place.", options:["4.7","4.8","5.0","4.0"], answer:"4.8", hint:"Look at the second decimal place" },
          { id:"m1_4", marks:3, type:"short", q:"Write these decimals in order from smallest to largest: 0.45, 0.5, 0.405, 0.54. Show your reasoning.", answer:"0.405, 0.45, 0.5, 0.54", keywords:["0.405","0.45","0.5","0.54","order"], hint:"Compare the tenths digit first" },
          { id:"m1_5", marks:5, type:"extended", q:"A runner completes three laps in times of 1.35 min, 1.4 min and 1.28 min. (a) What is her total time? (b) What is her average lap time to 2 d.p.? (c) She aims to run each lap in under 1.3 min. How much faster must her slowest lap be?", answer:"(a) 4.03 min  (b) 1.34 min  (c) 0.11 min faster", keywords:["4.03","1.34","0.11","average","total"], hint:"Total first, then divide by 3 for average" },
          { id:"m1_6", marks:1, type:"mcq", q:"Which number is smallest: 0.9, 0.09, 0.19, 0.99?", options:["0.9","0.09","0.19","0.99"], answer:"0.09", hint:"Compare tenths and hundredths carefully" },
          { id:"m1_7", marks:1, type:"mcq", q:"Round 6.24 to 1 decimal place.", options:["6.2","6.3","6.0","7.0"], answer:"6.2", hint:"Look at the hundredths digit" },
          { id:"m1_8", marks:3, type:"short", q:"Write 5.07 in words and state the value of the digit 7.", answer:"five point zero seven; 0.07", keywords:["five point zero seven","0.07","hundredths"], hint:"The 7 is in the hundredths place" }
        ]
      },
      2: {
        name: "Fractions & Percentages",
        questions: [
          { id:"m2_1", marks:1, type:"mcq", q:"What is ½ of 60?", options:["20","25","30","35"], answer:"30", hint:"Divide by 2" },
          { id:"m2_2", marks:1, type:"mcq", q:"What is 25% of 80?", options:["15","20","25","30"], answer:"20", hint:"25% = ¼, so divide by 4" },
          { id:"m2_3", marks:1, type:"mcq", q:"Which fraction is equivalent to 0.75?", options:["1/2","2/3","3/4","4/5"], answer:"3/4", hint:"0.75 = 75/100, simplify" },
          { id:"m2_4", marks:3, type:"short", q:"A TV costs £360. It is reduced by 15% in a sale. Calculate the sale price. Show your working.", answer:"£306", keywords:["306","54","15%","discount"], hint:"Find 15% of 360, then subtract" },
          { id:"m2_5", marks:5, type:"extended", q:"A school has 800 pupils. 45% are boys. (a) How many boys are there? (b) 60% of girls play sport. How many girls play sport? (c) What fraction of all pupils are girls who play sport? Give your answer in its simplest form.", answer:"(a) 360 boys  (b) 264 girls  (c) 33/100", keywords:["360","440","264","33/100","fraction"], hint:"Find boys first, then girls = 800 − boys" },
          { id:"m2_6", marks:1, type:"mcq", q:"What is 10% of 250?", options:["2.5","25","20","2500"], answer:"25", hint:"10% means divide by 10" },
          { id:"m2_7", marks:1, type:"mcq", q:"Which is equivalent to 50%?", options:["1/4","1/2","3/4","1/5"], answer:"1/2", hint:"50% means half" },
          { id:"m2_8", marks:3, type:"short", q:"A jumper costs £40 and is reduced by 20%. What is the sale price?", answer:"£32", keywords:["32","20%","8","sale price"], hint:"Find 20% first, then subtract" }
        ]
      },
      3: {
        name: "Algebra Foundations",
        questions: [
          { id:"m3_1", marks:1, type:"mcq", q:"If x = 4, what is 3x + 2?", options:["12","14","16","18"], answer:"14", hint:"Substitute x = 4" },
          { id:"m3_2", marks:1, type:"mcq", q:"Simplify: 5a + 3b − 2a + b", options:["3a+4b","7a+4b","3a+2b","7a+2b"], answer:"3a+4b", hint:"Collect like terms" },
          { id:"m3_3", marks:1, type:"mcq", q:"Solve: x + 7 = 15", options:["x=6","x=7","x=8","x=9"], answer:"x=8", hint:"Subtract 7 from both sides" },
          { id:"m3_4", marks:3, type:"short", q:"Solve 4x − 3 = 17. Show all steps of your working.", answer:"x=5", keywords:["x=5","5","add 3","divide by 4"], hint:"Add 3 to both sides first" },
          { id:"m3_5", marks:5, type:"extended", q:"(a) Expand and simplify: 3(2x + 4) − 2(x − 1)  (b) Solve: 3(2x + 4) − 2(x − 1) = 26  (c) Check your answer by substituting back.", answer:"(a) 4x+14  (b) x=3  (c) 3(2×3+4)−2(3−1)=26 ✓", keywords:["4x+14","x=3","3","expand","simplify"], hint:"Expand brackets carefully, watch the signs" },
          { id:"m3_6", marks:1, type:"mcq", q:"If y = 3, what is 2y − 1?", options:["4","5","6","7"], answer:"5", hint:"Substitute y = 3" },
          { id:"m3_7", marks:1, type:"mcq", q:"Solve: 2x = 18", options:["x=7","x=8","x=9","x=10"], answer:"x=9", hint:"Divide both sides by 2" },
          { id:"m3_8", marks:3, type:"short", q:"Simplify: 4p + 7 − p + 2", answer:"3p + 9", keywords:["3p+9","3p + 9","collect like terms"], hint:"Collect p terms, then constants" }
        ]
      },
      4: {
        name: "Geometry & Shapes",
        questions: [
          { id:"m4_1", marks:1, type:"mcq", q:"What is the area of a rectangle 8cm × 5cm?", options:["26 cm²","40 cm²","40 cm","13 cm²"], answer:"40 cm²", hint:"Area = length × width" },
          { id:"m4_2", marks:1, type:"mcq", q:"Angles in a triangle sum to:", options:["90°","180°","270°","360°"], answer:"180°", hint:"All triangles have the same angle sum" },
          { id:"m4_3", marks:1, type:"mcq", q:"What is the circumference of a circle with radius 5cm? (π ≈ 3.14)", options:["15.7 cm","31.4 cm","78.5 cm","25 cm"], answer:"31.4 cm", hint:"C = 2πr" },
          { id:"m4_4", marks:3, type:"short", q:"A right-angled triangle has legs of 6cm and 8cm. Using Pythagoras' theorem, find the hypotenuse. Show your working.", answer:"10 cm", keywords:["10","100","36+64","pythagoras"], hint:"a² + b² = c²" },
          { id:"m4_5", marks:5, type:"extended", q:"A garden is a rectangle 12m × 8m. Inside is a circular pond of radius 2m. (a) Find the area of the rectangle. (b) Find the area of the pond (π = 3.14). (c) What area of the garden has no pond? (d) What percentage of the garden is pond?", answer:"(a) 96 m²  (b) 12.56 m²  (c) 83.44 m²  (d) ≈13.1%", keywords:["96","12.56","83.44","13.1","percentage"], hint:"Subtract pond area from rectangle area" },
          { id:"m4_6", marks:1, type:"mcq", q:"How many lines of symmetry does a square have?", options:["2","3","4","5"], answer:"4", hint:"Think about vertical, horizontal and diagonals" },
          { id:"m4_7", marks:1, type:"mcq", q:"What is the volume of a cube with side length 3cm?", options:["9 cm³","18 cm³","27 cm³","36 cm³"], answer:"27 cm³", hint:"Volume = side × side × side" },
          { id:"m4_8", marks:3, type:"short", q:"Find the missing angle in a triangle with angles 35° and 75°.", answer:"70°", keywords:["70","180","35+75"], hint:"Angles in a triangle add to 180°" }
        ]
      },
      5: {
        name: "Statistics & Probability",
        questions: [
          { id:"m5_1", marks:1, type:"mcq", q:"The mean of 4, 7, 9, 12 and 8 is:", options:["7","8","9","10"], answer:"8", hint:"Add all values, divide by 5" },
          { id:"m5_2", marks:1, type:"mcq", q:"A bag has 3 red and 7 blue balls. Probability of picking red?", options:["3/7","7/10","3/10","1/3"], answer:"3/10", hint:"Favourable ÷ total outcomes" },
          { id:"m5_3", marks:1, type:"mcq", q:"The median of 3, 7, 2, 9, 5 is:", options:["3","5","7","9"], answer:"5", hint:"Order the values first" },
          { id:"m5_4", marks:3, type:"short", q:"Test scores: 65, 72, 58, 80, 72, 66, 72. Find the mode, median and range.", answer:"Mode=72, Median=72, Range=22", keywords:["72","22","mode","median","range"], hint:"Order the data first: 58,65,66,72,72,72,80" },
          { id:"m5_5", marks:5, type:"extended", q:"A class records heights (cm): 152, 158, 165, 148, 172, 158, 163, 155, 158, 170. (a) Find the mean. (b) Find the median. (c) Find the interquartile range. (d) Comment on the spread of data.", answer:"(a) 159.9  (b) 158  (c) IQR=13  (d) Moderate spread, most heights cluster around mean", keywords:["159.9","158","13","IQR","spread"], hint:"Order all 10 values first" },
          { id:"m5_6", marks:1, type:"mcq", q:"A coin is flipped once. What is the probability of getting heads?", options:["0","1/4","1/2","1"], answer:"1/2", hint:"There are two equally likely outcomes" },
          { id:"m5_7", marks:1, type:"mcq", q:"Which average is most affected by an extreme value?", options:["Mode","Median","Mean","Range"], answer:"Mean", hint:"Think about the effect of a very large number" },
          { id:"m5_8", marks:3, type:"short", q:"Find the range of: 12, 18, 7, 21, 15.", answer:"14", keywords:["14","21-7","range"], hint:"Range = largest − smallest" }
        ]
      },
      6: {
        name: "Linear Graphs & Equations",
        questions: [
          { id:"m6_1", marks:1, type:"mcq", q:"What is the gradient of y = 3x − 4?", options:["-4","3","-3","4"], answer:"3", hint:"y = mx + c, gradient is m" },
          { id:"m6_2", marks:1, type:"mcq", q:"What is the y-intercept of y = 2x + 5?", options:["2","5","-5","-2"], answer:"5", hint:"y = mx + c, intercept is c" },
          { id:"m6_3", marks:1, type:"mcq", q:"Which point lies on y = 2x − 1?", options:["(1,0)","(2,3)","(3,4)","(0,2)"], answer:"(2,3)", hint:"Substitute x into equation" },
          { id:"m6_4", marks:3, type:"short", q:"Find the equation of the line passing through (0, 3) and (2, 7). Show working.", answer:"y = 2x + 3", keywords:["y=2x+3","gradient 2","2","intercept 3"], hint:"Gradient = change in y ÷ change in x" },
          { id:"m6_5", marks:5, type:"extended", q:"(a) Draw the line y = 2x + 1 for x from −2 to 3 (plot key points). (b) On the same axes, y = −x + 4. (c) Find the intersection point algebraically. (d) Verify graphically and algebraically.", answer:"(a) points: (-2,-3),(-1,-1),(0,1),(1,3),(2,5),(3,7)  (b) points: (-2,6),(0,4),(3,1)  (c) 2x+1=-x+4 → x=1,y=3", keywords:["x=1","y=3","intersection","2x+1","-x+4"], hint:"Set equations equal to find intersection" },
          { id:"m6_6", marks:1, type:"mcq", q:"What is the gradient of y = -2x + 1?", options:["-2","-1","1","2"], answer:"-2", hint:"Look at the number in front of x" },
          { id:"m6_7", marks:1, type:"mcq", q:"What is the y-intercept of y = -x + 6?", options:["-1","1","6","-6"], answer:"6", hint:"Look at the constant term" },
          { id:"m6_8", marks:3, type:"short", q:"Does the point (2,5) lie on the line y = x + 3? Show your check.", answer:"Yes", keywords:["yes","2+3=5","substitute"], hint:"Substitute x = 2 into the equation" }
        ]
      },
      7: {
        name: "Quadratics & Polynomials",
        questions: [
          { id:"m7_1", marks:1, type:"mcq", q:"Expand (x + 3)(x + 4):", options:["x²+7x+12","x²+12x+7","x²+7x+7","x²+12"], answer:"x²+7x+12", hint:"FOIL method" },
          { id:"m7_2", marks:1, type:"mcq", q:"Factorise x² + 5x + 6:", options:["(x+1)(x+6)","(x+2)(x+3)","(x+5)(x+1)","(x+3)(x+2)"], answer:"(x+2)(x+3)", hint:"Find two numbers that add to 5 and multiply to 6" },
          { id:"m7_3", marks:1, type:"mcq", q:"Solve x² = 25:", options:["x=5","x=-5","x=5 or x=-5","x=±√25"], answer:"x=5 or x=-5", hint:"Square root both sides — remember ±" },
          { id:"m7_4", marks:3, type:"short", q:"Solve x² + 5x + 6 = 0 by factorising. Show all steps.", answer:"x = -2 or x = -3", keywords:["-2","-3","factorise","(x+2)(x+3)"], hint:"Factorise first, then set each bracket to zero" },
          { id:"m7_5", marks:5, type:"extended", q:"(a) Factorise 2x² + 7x + 3. (b) Hence solve 2x² + 7x + 3 = 0. (c) Find the vertex of the parabola y = 2x² + 7x + 3. (d) Sketch the shape, marking roots and vertex.", answer:"(a) (2x+1)(x+3)  (b) x=-1/2 or x=-3  (c) vertex at x=-7/4, y=-25/8", keywords:["(2x+1)(x+3)","-1/2","-3","vertex","-7/4"], hint:"Try factor pairs of 2×3=6 that sum to 7" },
          { id:"m7_6", marks:1, type:"mcq", q:"Expand (x + 2)^2", options:["x²+2x+4","x²+4x+4","x²+4"], answer:"x²+4x+4", hint:"(x+2)(x+2)" },
          { id:"m7_7", marks:1, type:"mcq", q:"Factorise x² − 9", options:["(x−3)(x−3)","(x+9)(x−1)","(x+3)(x−3)"], answer:"(x+3)(x−3)", hint:"Difference of two squares" },
          { id:"m7_8", marks:3, type:"short", q:"Solve x² = 49.", answer:"x = 7 or x = -7", keywords:["7","-7","square root"], hint:"Take the square root and remember ±" }
        ]
      },
      8: {
        name: "Trigonometry",
        questions: [
          { id:"m8_1", marks:1, type:"mcq", q:"In a right triangle, SOH means:", options:["sin=opp/adj","sin=opp/hyp","sin=hyp/opp","sin=adj/hyp"], answer:"sin=opp/hyp", hint:"SOH CAH TOA" },
          { id:"m8_2", marks:1, type:"mcq", q:"cos(60°) equals:", options:["0","0.5","√3/2","1"], answer:"0.5", hint:"Standard angle value" },
          { id:"m8_3", marks:1, type:"mcq", q:"An angle θ where tan(θ) = 1 is:", options:["30°","45°","60°","90°"], answer:"45°", hint:"tan(45°) = opposite/adjacent = 1" },
          { id:"m8_4", marks:3, type:"short", q:"A ladder 5m long leans against a wall. It makes an angle of 65° with the ground. How high up the wall does it reach? Give your answer to 2 d.p.", answer:"4.53 m", keywords:["4.53","sin","5","65","height"], hint:"sin(65°) = height ÷ 5" },
          { id:"m8_5", marks:5, type:"extended", q:"From a point 30m from the base of a building, the angle of elevation to the top is 42°. (a) Calculate the height of the building (2 d.p.). (b) Calculate the straight-line distance from the point to the top. (c) If you move 10m closer, what is the new angle of elevation?", answer:"(a) 27.02 m  (b) 40.37 m  (c) ≈ 53.6°", keywords:["27.02","40.37","53.6","tan","elevation"], hint:"tan(42°) = height ÷ 30" },
          { id:"m8_6", marks:1, type:"mcq", q:"sin(30°) equals:", options:["0","0.5","1","√3/2"], answer:"0.5", hint:"Recall standard angle values" },
          { id:"m8_7", marks:1, type:"mcq", q:"In SOHCAHTOA, CAH stands for:", options:["cos = adj/hyp","cos = hyp/adj","cos = opp/hyp","cos = opp/adj"], answer:"cos = adj/hyp", hint:"CAH = cosine" },
          { id:"m8_8", marks:3, type:"short", q:"A right triangle has opposite side 6cm and hypotenuse 10cm. Find sin θ.", answer:"0.6", keywords:["0.6","6/10","sin"], hint:"sin θ = opposite ÷ hypotenuse" }
        ]
      },
      9: {
        name: "Simultaneous Equations & Inequalities",
        questions: [
          { id:"m9_1", marks:1, type:"mcq", q:"Solve: x + y = 10 and x − y = 4. What is x?", options:["5","6","7","8"], answer:"7", hint:"Add the equations" },
          { id:"m9_2", marks:1, type:"mcq", q:"Which value satisfies 3x − 2 > 10?", options:["x=3","x=4","x=5","x=2"], answer:"x=5", hint:"Solve as equation first, then check direction" },
          { id:"m9_3", marks:1, type:"mcq", q:"On a number line, x ≤ 3 is shown by:", options:["open circle at 3, arrow right","closed circle at 3, arrow left","open circle at 3, arrow left","closed circle at 3, arrow right"], answer:"closed circle at 3, arrow left", hint:"≤ means 'less than or equal to'" },
          { id:"m9_4", marks:3, type:"short", q:"Solve simultaneously: 2x + 3y = 12 and x + y = 5. Show all working.", answer:"x=3, y=2", keywords:["x=3","y=2","3","2","eliminate"], hint:"Multiply second equation by 2, then subtract" },
          { id:"m9_5", marks:5, type:"extended", q:"(a) Solve: 3x + 2y = 16 and 5x − y = 9. (b) Show the solution as a coordinate point. (c) Verify your solution in both original equations. (d) What does this point represent graphically?", answer:"(a) x=2, y=5  (b) (2,5)  (c) 6+10=16 ✓ and 10-5=9 ✓  (d) intersection of two lines", keywords:["x=2","y=5","(2,5)","verify","intersection"], hint:"Multiply second equation to eliminate y" },
          { id:"m9_6", marks:1, type:"mcq", q:"Solve: x + y = 9 and x − y = 1. What is y?", options:["3","4","5","6"], answer:"4", hint:"Add the equations to find x first" },
          { id:"m9_7", marks:1, type:"mcq", q:"Which value satisfies x + 4 < 9?", options:["x=6","x=5","x=4","x=7"], answer:"x=4", hint:"Solve the inequality first" },
          { id:"m9_8", marks:3, type:"short", q:"Solve 2x + 1 ≤ 9.", answer:"x ≤ 4", keywords:["x≤4","x <= 4","inequality"], hint:"Subtract 1, then divide by 2" }
        ]
      },
      10: {
        name: "Higher Calculus & Proof",
        questions: [
          { id:"m10_1", marks:1, type:"mcq", q:"If f(x) = x³, what is f'(x)?", options:["x²","3x²","3x","x³"], answer:"3x²", hint:"Power rule: bring down the power, reduce by 1" },
          { id:"m10_2", marks:1, type:"mcq", q:"Prove that the sum of two odd numbers is always even. Which is the correct start?", options:["Let a and b be odd, so a=2n and b=2m","Let a=2n+1 and b=2m+1","Let a=2n+1 and b=2n+1","Let a be odd and b be even"], answer:"Let a=2n+1 and b=2m+1", hint:"Use different variables n and m for generality" },
          { id:"m10_3", marks:1, type:"mcq", q:"The nth term of 3, 7, 11, 15 is:", options:["3n","4n-1","4n+1","3n+1"], answer:"4n-1", hint:"Difference is 4, so 4n ± something" },
          { id:"m10_4", marks:3, type:"short", q:"Prove algebraically that (n+1)² − n² is always odd for any positive integer n.", answer:"(n+1)²-n² = n²+2n+1-n² = 2n+1 which is always odd", keywords:["2n+1","expand","odd","always"], hint:"Expand (n+1)² and simplify" },
          { id:"m10_5", marks:5, type:"extended", q:"(a) Find the gradient function of y = 3x² − 4x + 1. (b) Find the coordinates of the stationary point. (c) Determine whether it is a maximum or minimum, with justification. (d) Find the equation of the tangent at x = 2.", answer:"(a) dy/dx=6x-4  (b) (2/3, -1/3)  (c) minimum since d²y/dx²=6>0  (d) y=8x-11", keywords:["6x-4","2/3","-1/3","minimum","tangent","8x-11"], hint:"Set dy/dx = 0 for stationary point" },
          { id:"m10_6", marks:1, type:"mcq", q:"Differentiate x^4.", options:["4x³","x³","4x","x^5"], answer:"4x³", hint:"Use the power rule" },
          { id:"m10_7", marks:1, type:"mcq", q:"Which expression is always even?", options:["2n","2n+1","n+1","n²+1"], answer:"2n", hint:"An even number is a multiple of 2" },
          { id:"m10_8", marks:3, type:"short", q:"Find the nth term of 5, 9, 13, 17.", answer:"4n+1", keywords:["4n+1","nth term","sequence"], hint:"Common difference is 4" }
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
          { id:"e0_5", marks:5, type:"extended", q:"Write a paragraph describing your favourite place. Include: at least two adjectives, one simile (comparing using 'like' or 'as'), one example of alliteration, and varied sentence lengths.", answer:"Model answer — assessed on use of adjectives, simile, alliteration, varied sentences", keywords:["adjective","simile","like","as","alliteration","describe"], hint:"Start with your simile, then add adjectives and alliteration" },
          { id:"e0_6", marks:1, type:"mcq", q:"Which word is an adjective?", options:["run","blue","jump","quickly"], answer:"blue", hint:"An adjective describes a noun" },
          { id:"e0_7", marks:1, type:"mcq", q:"Which sentence is punctuated correctly?", options:["where are you going?","Where are you going?","Where are you going","where are you going."], answer:"Where are you going?", hint:"Questions need a capital letter and question mark" },
          { id:"e0_8", marks:3, type:"short", q:"Write one sentence about a rainy day using an adjective.", answer:"Any suitable sentence with an adjective", keywords:["sentence","adjective","rainy"], hint:"Describe the day using a word like cold, dark or wet" }
        ]
      },
      1: {
        name: "Language Techniques",
        questions: [
          { id:"e1_1", marks:1, type:"mcq", q:"'The sun smiled down on the meadow.' This is an example of:", options:["Simile","Metaphor","Personification","Alliteration"], answer:"Personification", hint:"The sun is given a human quality" },
          { id:"e1_2", marks:1, type:"mcq", q:"'Her eyes were like stars.' This is a:", options:["Metaphor","Simile","Onomatopoeia","Hyperbole"], answer:"Simile", hint:"Uses the word 'like'" },
          { id:"e1_3", marks:1, type:"mcq", q:"What is alliteration?", options:["Repetition of vowel sounds","Repetition of consonant sounds at word starts","A comparison using 'like'","A word that sounds like its meaning"], answer:"Repetition of consonant sounds at word starts", hint:"Peter Piper picked a peck..." },
          { id:"e1_4", marks:3, type:"short", q:"Analyse this sentence: 'The furious, ferocious flames devoured the forest.' Identify two language techniques and explain their effect on the reader.", answer:"Alliteration and personification create menace and show the fire as aggressive.", keywords:["alliteration","personification","effect","devoured","furious"], hint:"Look for repeated sounds and human qualities given to objects" },
          { id:"e1_5", marks:5, type:"extended", q:"'The city never sleeps. Sirens screamed through the streets, neon lights blazed like artificial suns, and the relentless hum of engines filled the air.' Analyse how the writer uses language to present the city. Use the P-E-E structure (Point, Evidence, Explain).", answer:"Multiple P-E-E paragraphs covering: personification, alliteration, simile and semantic field.", keywords:["personification","alliteration","simile","effect","P-E-E","blazed","screamed"], hint:"Write one P-E-E paragraph per technique. What feeling does each create?" },
          { id:"e1_6", marks:1, type:"mcq", q:"'The classroom was a zoo.' This is an example of:", options:["Simile","Metaphor","Alliteration","Personification"], answer:"Metaphor", hint:"It compares without using 'like' or 'as'" },
          { id:"e1_7", marks:1, type:"mcq", q:"Which is an example of onomatopoeia?", options:["whisper","bang","bright","tiny"], answer:"bang", hint:"It sounds like the noise it describes" },
          { id:"e1_8", marks:3, type:"short", q:"Explain the effect of the simile in: 'The rain fell like silver strings.'", answer:"It creates a vivid image and makes the rain seem delicate and shining.", keywords:["simile","effect","image"], hint:"Think about what picture the comparison creates" }
        ]
      },
      2: {
        name: "Structure & Form",
        questions: [
          { id:"e2_1", marks:1, type:"mcq", q:"What is the effect of starting a paragraph with a very short sentence?", options:["Makes it harder to read","Creates emphasis and impact","Shows the writer is lazy","Increases pace and confusion"], answer:"Creates emphasis and impact", hint:"Short sentences make the reader pause" },
          { id:"e2_2", marks:1, type:"mcq", q:"What is a 'narrative hook'?", options:["The ending of a story","An opening that grips the reader","A type of metaphor","The main character"], answer:"An opening that grips the reader", hint:"It 'hooks' the reader in from the start" },
          { id:"e2_3", marks:1, type:"mcq", q:"First-person narration uses which pronoun?", options:["He/She","They","I/We","You"], answer:"I/We", hint:"The narrator speaks as themselves" },
          { id:"e2_4", marks:3, type:"short", q:"Explain how a writer might use structural features to build tension in a short story. Mention at least two structural techniques.", answer:"Short sentences, cliff-hangers, withholding information and paragraph breaks can all build tension.", keywords:["short sentences","tension","pace","structure","cliff-hanger","suspense"], hint:"Think about sentence length, paragraph breaks, and withholding information" },
          { id:"e2_5", marks:5, type:"extended", q:"Write the opening of a short story (150 words) set in a deserted school at midnight. You must: use an effective narrative hook, vary your sentence structure, use at least one structural technique deliberately, and create a specific atmosphere.", answer:"Model answer assessed on hook, structure and atmosphere.", keywords:["atmosphere","hook","tension","varied","sentence","structure"], hint:"Start in the middle of the action (in medias res) for a strong hook" },
          { id:"e2_6", marks:1, type:"mcq", q:"What is a flashback?", options:["A look into the future","A return to an earlier event","A very short sentence","A story ending"], answer:"A return to an earlier event", hint:"It takes the reader back in time" },
          { id:"e2_7", marks:1, type:"mcq", q:"What does cyclical structure do?", options:["Ends where it began","Adds a new narrator","Removes tension","Changes genre"], answer:"Ends where it began", hint:"The ending links back to the opening" },
          { id:"e2_8", marks:3, type:"short", q:"Why might a writer withhold information from the reader?", answer:"To create mystery, tension and suspense.", keywords:["withhold","mystery","tension","suspense"], hint:"Think about how the reader feels when they do not know everything" }
        ]
      },
      3: {
        name: "Character & Theme",
        questions: [
          { id:"e3_1", marks:1, type:"mcq", q:"In 'A Christmas Carol', Scrooge's transformation is an example of:", options:["Static character","Dynamic character","Antagonist","Foil"], answer:"Dynamic character", hint:"He changes significantly throughout the story" },
          { id:"e3_2", marks:1, type:"mcq", q:"What is a 'foil' character?", options:["A villain","A character who contrasts with the main character","A narrator","A minor character"], answer:"A character who contrasts with the main character", hint:"They highlight the protagonist's qualities by contrast" },
          { id:"e3_3", marks:1, type:"mcq", q:"Which theme is central to 'An Inspector Calls'?", options:["Romantic love","Social responsibility","Adventure","Nature vs nurture"], answer:"Social responsibility", hint:"Priestley uses the Inspector to make a moral point about society" },
          { id:"e3_4", marks:3, type:"short", q:"In 'Romeo and Juliet', how does Shakespeare present love as dangerous? Use one piece of evidence and analyse it.", answer:"Shakespeare presents love as consuming and deadly, shown through Romeo's contradictory language and the tragic outcome.", keywords:["dangerous","evidence","love","tragic","Shakespeare","analyse"], hint:"Use a quote and explain what it tells us about love in the play" },
          { id:"e3_5", marks:5, type:"extended", q:"How does Dickens present Scrooge as a changed man by the end of 'A Christmas Carol'? Write a response using PEEL paragraphs, including: two pieces of evidence, analysis of language/structure, and reference to Dickens' message.", answer:"Strong response compares Scrooge at the start and end and links change to Dickens' social message.", keywords:["Scrooge","changed","Dickens","evidence","PEEL","stave","feather","generous"], hint:"Compare Scrooge in Stave 1 with Stave 5. What specific words show change?" },
          { id:"e3_6", marks:1, type:"mcq", q:"A character who does not change is called:", options:["Dynamic","Static","Foil","Narrator"], answer:"Static", hint:"Opposite of dynamic" },
          { id:"e3_7", marks:1, type:"mcq", q:"Which theme is central to 'Macbeth'?", options:["Ambition","Holiday","Adventure","Friendship"], answer:"Ambition", hint:"Macbeth's desire for power drives the plot" },
          { id:"e3_8", marks:3, type:"short", q:"How is the Inspector presented as powerful in 'An Inspector Calls'? Use one quotation or detail.", answer:"He is authoritative, interrupts others and controls the questioning.", keywords:["Inspector","powerful","authoritative","questioning"], hint:"Think about how other characters respond to him" }
        ]
      },
      4: {
        name: "Poetry Analysis",
        questions: [
          { id:"e4_1", marks:1, type:"mcq", q:"What is iambic pentameter?", options:["10 syllables per line with da-DUM rhythm","8 syllables with DUM-da rhythm","A rhyming couplet","Free verse with 10 lines"], answer:"10 syllables per line with da-DUM rhythm", hint:"Shakespeare used this frequently" },
          { id:"e4_2", marks:1, type:"mcq", q:"What is enjambment?", options:["A rhyming scheme","When a sentence runs from one line to the next","A type of metaphor","Repetition of a word"], answer:"When a sentence runs from one line to the next", hint:"It 'runs on' without pause at the line break" },
          { id:"e4_3", marks:1, type:"mcq", q:"In Wilfred Owen's poetry, 'Dulce et Decorum Est' challenges which idea?", options:["War is heroic and glorious","War causes environmental damage","Women should support soldiers","Science causes war"], answer:"War is heroic and glorious", hint:"The title is ironic" },
          { id:"e4_4", marks:3, type:"short", q:"Analyse how the poet uses structure in 'Ozymandias' by Shelley to convey the theme of power's decay. Include one structural technique.", answer:"The disrupted sonnet form and volta help show power turning into ruin.", keywords:["structure","sonnet","volta","irony","power","decay","Ozymandias"], hint:"Why might Shelley use a sonnet?" },
          { id:"e4_5", marks:5, type:"extended", q:"Compare how two poems from the Power and Conflict cluster present ideas about conflict. Analyse: language, structure, and the poets' perspectives. Write 4 paragraphs using comparative connectives.", answer:"Strong comparative essay with quotes, methods and comparison.", keywords:["compare","language","structure","perspective","conflict","whereas","similarly"], hint:"Plan first: one similarity, one difference" },
          { id:"e4_6", marks:1, type:"mcq", q:"What is a stanza?", options:["A paragraph in poetry","A rhyme sound","A type of simile","A dramatic speech"], answer:"A paragraph in poetry", hint:"Poems are often organised into stanzas" },
          { id:"e4_7", marks:1, type:"mcq", q:"What is a volta in a poem?", options:["A repeated line","A turn or change in idea/tone","A rhyme pair","A metaphor"], answer:"A turn or change in idea/tone", hint:"It often marks a shift" },
          { id:"e4_8", marks:3, type:"short", q:"What effect can enjambment have in a poem?", answer:"It can create flow, speed, tension or a sense of thoughts continuing.", keywords:["enjambment","flow","pace","tension"], hint:"Think about what happens when the sentence keeps moving" }
        ]
      },
      5: {
        name: "Non-Fiction & Writing",
        questions: [
          { id:"e5_1", marks:1, type:"mcq", q:"Which technique persuades by using inclusive language?", options:["Rhetorical question","Rule of three","First person plural ('we')","Statistics"], answer:"First person plural ('we')", hint:"'We all know...' makes the audience feel included" },
          { id:"e5_2", marks:1, type:"mcq", q:"What does 'AFOREST' stand for in persuasive writing?", options:["Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplets","Adjectives, Figurative, Onomatopoeia, Repetition, Enjambment, Simile, Tone","Alliteration, Facts, Opinions, Rhetoric, Exaggeration, Simile, Triplets","Anaphora, Flashback, Oxymoron, Repetition, Emotion, Style, Theme"], answer:"Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplets", hint:"A common acronym for persuasive techniques" },
          { id:"e5_3", marks:1, type:"mcq", q:"A broadsheet newspaper typically has:", options:["Simple vocabulary, large images, short articles","Complex vocabulary, formal tone, longer in-depth articles","Celebrity gossip, casual language, bold headlines","Opinion pieces only, no facts"], answer:"Complex vocabulary, formal tone, longer in-depth articles", hint:"Compare with tabloids" },
          { id:"e5_4", marks:3, type:"short", q:"Write a short persuasive paragraph arguing that schools should start later in the morning. Use at least two persuasive techniques.", answer:"Any suitable persuasive paragraph using two techniques.", keywords:["persuasive","technique","rhetorical","statistic","emotive","evidence"], hint:"Start with a bold statement, then support with evidence and emotion" },
          { id:"e5_5", marks:5, type:"extended", q:"Write a letter to your local council arguing for a new youth community centre. Your letter should: open effectively, use at least four AFOREST techniques, maintain a formal register, and close with a clear call to action. (Approx. 200 words)", answer:"Assessed on formal register, persuasive techniques and structure.", keywords:["formal","letter","persuade","AFOREST","technique","council","call to action"], hint:"Plan your argument in three points before writing" },
          { id:"e5_6", marks:1, type:"mcq", q:"Which is a rhetorical question?", options:["What time is it?","How many people must suffer before we act?","Please sit down.","The park is closed."], answer:"How many people must suffer before we act?", hint:"It is asked for effect, not an answer" },
          { id:"e5_7", marks:1, type:"mcq", q:"Which phrase uses emotive language?", options:["The road is long.","The innocent animals suffered terribly.","There were ten trees.","The meeting began at noon."], answer:"The innocent animals suffered terribly.", hint:"Emotive language tries to create feeling" },
          { id:"e5_8", marks:3, type:"short", q:"Write one sentence using a rule of three to persuade someone to recycle.", answer:"Any correct sentence using a triplet", keywords:["rule of three","triplet","persuade","recycle"], hint:"Try three linked words or phrases" }
        ]
      },
      6: {
        name: "Context & Writer's Craft",
        questions: [
          { id:"e6_1", marks:1, type:"mcq", q:"Why is historical/social context important when analysing literature?", options:["It tells us the writer's age","It helps us understand why the writer wrote as they did","It replaces the need to analyse language","Context is never relevant to meaning"], answer:"It helps us understand why the writer wrote as they did", hint:"Writers are shaped by the world around them" },
          { id:"e6_2", marks:1, type:"mcq", q:"Dickens wrote 'A Christmas Carol' partly to:", options:["Celebrate Christmas traditions","Criticise the treatment of the poor in Victorian England","Promote Christianity","Entertain wealthy readers"], answer:"Criticise the treatment of the poor in Victorian England", hint:"Think about Dickens' message" },
          { id:"e6_3", marks:1, type:"mcq", q:"'An Inspector Calls' is set in 1912 but written in 1945. Why is this significant?", options:["Priestley wanted to write about old clothes","The 1912 setting lets Priestley comment on pre-war attitudes with hindsight","It was easier to research 1912","Priestley was born in 1912"], answer:"The 1912 setting lets Priestley comment on pre-war attitudes with hindsight", hint:"Priestley uses dramatic irony" },
          { id:"e6_4", marks:3, type:"short", q:"How does the historical context of World War One help us understand the message of Wilfred Owen's poetry? Write 3-4 sentences using evidence.", answer:"Owen's real war experience strengthens his anti-war message.", keywords:["Owen","war","context","propaganda","soldier","lie","Dulce"], hint:"Owen wrote from experience" },
          { id:"e6_5", marks:5, type:"extended", q:"How does Priestley use the character of Mr Birling to criticise the ruling class in 'An Inspector Calls'? In your response, consider: the context of 1912 and 1945, specific language choices, dramatic irony, and Priestley's socialist views.", answer:"Strong response explains how Birling's views are undermined and criticised.", keywords:["Birling","Priestley","socialist","dramatic irony","Titanic","capitalism","context"], hint:"Think about Birling's confident predictions" },
          { id:"e6_6", marks:1, type:"mcq", q:"What is dramatic irony?", options:["A funny moment","When the audience knows more than the character","A dramatic speech","A surprise ending"], answer:"When the audience knows more than the character", hint:"This often creates tension or criticism" },
          { id:"e6_7", marks:1, type:"mcq", q:"Which context is most relevant to 'A Christmas Carol'?", options:["Victorian poverty","World War One trenches","Cold War politics","Medieval religion"], answer:"Victorian poverty", hint:"Think about Dickens' time period" },
          { id:"e6_8", marks:3, type:"short", q:"Why does context support analysis rather than replace it?", answer:"Because context helps explain meaning, but language and structure still need analysing.", keywords:["context","analysis","language","structure"], hint:"Context adds to analysis rather than doing the whole job" }
        ]
      },
      7: {
        name: "Comparison & Critical Analysis",
        questions: [
          { id:"e7_1", marks:1, type:"mcq", q:"Which is the best comparative connective to show contrast?", options:["Similarly","Furthermore","In contrast","Additionally"], answer:"In contrast", hint:"You want to highlight a difference" },
          { id:"e7_2", marks:1, type:"mcq", q:"A Level 9 English response will always:", options:["Use lots of quotes","Critically evaluate the text with a personal, developed interpretation","Write in bullet points","Focus mainly on plot summary"], answer:"Critically evaluate the text with a personal, developed interpretation", hint:"Grade 9 responses go beyond analysis to evaluation" },
          { id:"e7_3", marks:1, type:"mcq", q:"What is a 'semantic field'?", options:["A type of metaphor","A group of words related to the same topic","The setting of a story","The structure of a poem"], answer:"A group of words related to the same topic", hint:"Words linked by topic" },
          { id:"e7_4", marks:3, type:"short", q:"Compare how power is presented in 'Ozymandias' and 'My Last Duchess'. Identify one similarity and one difference, using evidence from both poems.", answer:"Both show controlling figures, but one has lost power while the other still exercises it.", keywords:["compare","power","Ozymandias","Duke","arrogant","contrast","both"], hint:"Use 'Both...whereas...'" },
          { id:"e7_5", marks:5, type:"extended", q:"'Shakespeare presents Romeo as a victim of fate, not of his own choices.' How far do you agree? Write an evaluative response considering: evidence for fate, evidence for personal choice, context, and your own judgement.", answer:"Balanced evaluation of fate versus choice with supported judgement.", keywords:["fate","choice","Romeo","Elizabethan","star-crossed","evaluate","judge","prologue"], hint:"Argue both sides, then give your view" },
          { id:"e7_6", marks:1, type:"mcq", q:"Which connective best shows similarity?", options:["However","Similarly","Instead","Although"], answer:"Similarly", hint:"Use it when ideas are alike" },
          { id:"e7_7", marks:1, type:"mcq", q:"Which is an evaluative phrase?", options:["This suggests...","The writer uses...","Overall, this is most effective because...","The quote is..."], answer:"Overall, this is most effective because...", hint:"Evaluation involves judging effect or significance" },
          { id:"e7_8", marks:3, type:"short", q:"What makes a comparison paragraph successful?", answer:"Clear link between texts, evidence from both, and analysis of a similarity or difference.", keywords:["comparison","both texts","evidence","analysis"], hint:"Do not analyse one text and forget the other" }
        ]
      },
      8: {
        name: "Spoken Language & Media",
        questions: [
          { id:"e8_1", marks:1, type:"mcq", q:"What is 'Standard English'?", options:["The dialect spoken in London","The formal, grammatically correct form of English","English with no accent","Old-fashioned English"], answer:"The formal, grammatically correct form of English", hint:"Used in formal writing and professional contexts" },
          { id:"e8_2", marks:1, type:"mcq", q:"What technique does a newspaper headline use in 'FURY AS COUNCIL CUTS PARKS'?", options:["Alliteration","Emotive language","Hyperbole","Sibilance"], answer:"Emotive language", hint:"'Fury' is a strong emotional word" },
          { id:"e8_3", marks:1, type:"mcq", q:"What is the purpose of a broadsheet editorial?", options:["To entertain with celebrity news","To inform and express a viewpoint on a serious topic","To advertise products","To provide local sports results"], answer:"To inform and express a viewpoint on a serious topic", hint:"Editorials show opinion" },
          { id:"e8_4", marks:3, type:"short", q:"Analyse how a tabloid newspaper might use language differently from a broadsheet when reporting the same story. Give specific examples of techniques each might use.", answer:"Tabloids are more emotive and punchy; broadsheets are more formal and detailed.", keywords:["tabloid","broadsheet","formal","emotive","register","audience","language"], hint:"Think about audience and tone" },
          { id:"e8_5", marks:5, type:"extended", q:"Write two versions of the same news story (approx. 100 words each): one for a tabloid, one for a broadsheet. The story: a local school is closing due to budget cuts. Use clearly different registers, vocabulary, and techniques in each version.", answer:"Assessed on clear distinction between register, tone and audience.", keywords:["tabloid","broadsheet","register","formal","emotive","audience","school","budget"], hint:"Tabloid = emotional; broadsheet = measured" },
          { id:"e8_6", marks:1, type:"mcq", q:"A headline written in capitals is often used to:", options:["Hide information","Create impact","Reduce interest","Sound formal"], answer:"Create impact", hint:"It grabs the reader's attention" },
          { id:"e8_7", marks:1, type:"mcq", q:"Which is more likely in a tabloid?", options:["Subtle understatement","Punchy emotive headline","Formal editorial tone","Long analytical paragraph"], answer:"Punchy emotive headline", hint:"Think about audience appeal" },
          { id:"e8_8", marks:3, type:"short", q:"Why do writers change register for different audiences?", answer:"To suit purpose and audience expectations, making the text more effective.", keywords:["register","audience","purpose","effective"], hint:"Think about who is reading and why" }
        ]
      },
      9: {
        name: "Extended Writing Mastery",
        questions: [
          { id:"e9_1", marks:1, type:"mcq", q:"A 'discursive essay' aims to:", options:["Tell a story","Argue one side strongly","Explore multiple viewpoints on an issue","Describe a place"], answer:"Explore multiple viewpoints on an issue", hint:"'Discuss' = explore both/all sides" },
          { id:"e9_2", marks:1, type:"mcq", q:"Which opening is most effective for a Grade 9 narrative?", options:["My name is Tom and I am going to tell you a story.","The knife appeared from nowhere.","Once upon a time there was a boy.","This story is about something scary that happened."], answer:"The knife appeared from nowhere.", hint:"In medias res" },
          { id:"e9_3", marks:1, type:"mcq", q:"Pathetic fallacy is when:", options:["A character makes a logical error","Weather/setting reflects a character's mood","The narrator is unreliable","A metaphor is extended throughout a text"], answer:"Weather/setting reflects a character's mood", hint:"Weather mirrors feeling" },
          { id:"e9_4", marks:3, type:"short", q:"Plan a Grade 9 descriptive piece about a busy market. In your plan: identify the structural approach, list 3 language techniques with specific examples you will use, and describe the dominant mood.", answer:"A strong plan includes structural movement, precise techniques and a clear mood.", keywords:["structure","technique","mood","synesthesia","personification","triplet","plan"], hint:"Think about moving the reader through the scene" },
          { id:"e9_5", marks:5, type:"extended", q:"Write a descriptive piece called 'The Last Day' (approx. 300 words). To achieve Grade 9: use an ambiguous title that gains meaning throughout, employ pathetic fallacy, varied syntax for effect, a semantic field, and a memorable final line that recontextualises the opening.", answer:"Assessed on sophisticated language, structure and control.", keywords:["ambiguous","pathetic fallacy","syntax","semantic field","Grade 9","ending","recontextualise"], hint:"Keep the title mysterious until later" },
          { id:"e9_6", marks:1, type:"mcq", q:"What does in medias res mean?", options:["At the end","In the middle of the action","In a dream","In a flashback"], answer:"In the middle of the action", hint:"It creates immediate interest" },
          { id:"e9_7", marks:1, type:"mcq", q:"What helps create a memorable ending?", options:["Repeating the title meaningfully","Adding random facts","Changing narrator suddenly","Using only one short sentence"], answer:"Repeating the title meaningfully", hint:"A link back can create impact" },
          { id:"e9_8", marks:3, type:"short", q:"Why is varied sentence length effective in descriptive writing?", answer:"It controls pace, emphasis and atmosphere.", keywords:["varied sentence length","pace","emphasis","atmosphere"], hint:"Short and long sentences create different effects" }
        ]
      },
      10: {
        name: "Grade 9 Mastery",
        questions: [
          { id:"e10_1", marks:1, type:"mcq", q:"A Grade 9 response is described by AQA as:", options:["Simply accurate","Perceptive, detailed and sophisticated","Long and full of quotes","Structured with many paragraphs"], answer:"Perceptive, detailed and sophisticated", hint:"These are the key adjectives" },
          { id:"e10_2", marks:1, type:"mcq", q:"What makes a literary interpretation 'perceptive'?", options:["Using many quotes","Noticing layers of meaning others might miss","Writing at length","Starting every paragraph with a quote"], answer:"Noticing layers of meaning others might miss", hint:"Go beyond the obvious" },
          { id:"e10_3", marks:1, type:"mcq", q:"An 'extended metaphor' is:", options:["A very long metaphor","A metaphor developed across multiple lines or throughout a text","A metaphor using 'like' or 'as'","A metaphor about nature"], answer:"A metaphor developed across multiple lines or throughout a text", hint:"It is sustained" },
          { id:"e10_4", marks:3, type:"short", q:"Give a perceptive interpretation of this line from Macbeth: 'Stars, hide your fires; let not light see my black and deep desires.' What does it reveal about Macbeth at this point in the play?", answer:"It reveals ambition, secrecy, moral conflict and disturbance of natural order.", keywords:["Macbeth","ambition","natural order","conscience","desires","deep","black"], hint:"Think about light, stars and conscience" },
          { id:"e10_5", marks:5, type:"extended", q:"'Great literature shows us not what is, but what could be.' Using one novel or play you have studied, evaluate this statement. Your response should: offer a developed personal interpretation, consider alternative readings, reference context, analyse specific language/structural choices, and reach a clear evaluative conclusion.", answer:"A top answer will offer a clear thesis, alternatives and evaluation.", keywords:["evaluate","interpret","alternative","context","language","structure","conclusion","thesis"], hint:"Show more than one reading before judging" },
          { id:"e10_6", marks:1, type:"mcq", q:"What is subtext?", options:["The main plot","Hidden meaning beneath the surface","A stage direction","A quotation"], answer:"Hidden meaning beneath the surface", hint:"It is implied, not directly stated" },
          { id:"e10_7", marks:1, type:"mcq", q:"Which phrase best shows evaluation?", options:["The writer says...","This may be most significant because...","The quote is about...","It happens in Act 1"], answer:"This may be most significant because...", hint:"Evaluation judges significance" },
          { id:"e10_8", marks:3, type:"short", q:"Why are alternative interpretations important in top-band English essays?", answer:"They show depth, flexibility of thought and awareness that texts can mean more than one thing.", keywords:["alternative interpretations","depth","evaluation","meaning"], hint:"Top responses show complexity, not just one simple reading" }
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
          { id:"s0_5", marks:5, type:"extended", q:"Describe the water cycle. Include the processes of: evaporation, condensation, precipitation, and collection. Explain what drives each process.", answer:"Solar energy causes evaporation, cooling causes condensation, droplets fall as precipitation and water collects again.", keywords:["evaporation","condensation","precipitation","solar","energy","cycle","gravity","clouds"], hint:"Start with the sun" },
          { id:"s0_6", marks:1, type:"mcq", q:"Which gas do humans need to breathe to survive?", options:["Carbon dioxide","Hydrogen","Oxygen","Nitrogen"], answer:"Oxygen", hint:"It is used in respiration" },
          { id:"s0_7", marks:1, type:"mcq", q:"What do plants need for photosynthesis?", options:["Light","Plastic","Stone","Smoke"], answer:"Light", hint:"Sunlight provides the energy" },
          { id:"s0_8", marks:3, type:"short", q:"Name two things all living things do.", answer:"Any two of: move, respire, reproduce, grow, respond, excrete, need nutrition", keywords:["living things","grow","respire","reproduce"], hint:"Think about life processes" }
        ]
      },
      1: {
        name: "Cells & Biology Basics",
        questions: [
          { id:"s1_1", marks:1, type:"mcq", q:"Which structure is found in plant cells but NOT animal cells?", options:["Cell membrane","Mitochondria","Cell wall","Nucleus"], answer:"Cell wall", hint:"Plants need this rigid structure for support" },
          { id:"s1_2", marks:1, type:"mcq", q:"What is the function of mitochondria?", options:["Protein synthesis","Energy production (respiration)","Photosynthesis","Cell division"], answer:"Energy production (respiration)", hint:"'Powerhouse of the cell'" },
          { id:"s1_3", marks:1, type:"mcq", q:"What do we call the process by which plants make food using light?", options:["Respiration","Digestion","Photosynthesis","Osmosis"], answer:"Photosynthesis", hint:"'Photo' means light; 'synthesis' means making" },
          { id:"s1_4", marks:3, type:"short", q:"Write the word equation for photosynthesis and explain what happens to each substance.", answer:"Carbon dioxide + water → glucose + oxygen.", keywords:["carbon dioxide","water","glucose","oxygen","light","chlorophyll","photosynthesis"], hint:"What goes in? What comes out?" },
          { id:"s1_5", marks:5, type:"extended", q:"Compare aerobic and anaerobic respiration. Include: word equations, where each occurs in the cell, amount of energy released, and when each is used by the body.", answer:"Aerobic uses oxygen and releases much more energy; anaerobic does not use oxygen and releases less.", keywords:["aerobic","anaerobic","glucose","oxygen","lactic acid","mitochondria","ATP","energy"], hint:"Oxygen is the key difference" },
          { id:"s1_6", marks:1, type:"mcq", q:"Which part of the cell controls its activities?", options:["Nucleus","Membrane","Cytoplasm","Ribosome"], answer:"Nucleus", hint:"It contains genetic material" },
          { id:"s1_7", marks:1, type:"mcq", q:"What is chlorophyll used for?", options:["Absorbing light","Absorbing water","Making roots","Moving sugars"], answer:"Absorbing light", hint:"It helps photosynthesis happen" },
          { id:"s1_8", marks:3, type:"short", q:"Give one similarity and one difference between plant and animal cells.", answer:"Both have a nucleus/cell membrane/cytoplasm; plant cells also have a cell wall or chloroplasts.", keywords:["similarity","difference","plant cell","animal cell"], hint:"Think about common organelles first" }
        ]
      },
      2: {
        name: "Atoms & Elements",
        questions: [
          { id:"s2_1", marks:1, type:"mcq", q:"What particles are found in the nucleus of an atom?", options:["Protons and electrons","Neutrons and electrons","Protons and neutrons","Electrons only"], answer:"Protons and neutrons", hint:"Electrons orbit around the nucleus" },
          { id:"s2_2", marks:1, type:"mcq", q:"What does the atomic number tell us?", options:["Number of neutrons","Number of protons","Mass of the atom","Number of electrons in outer shell"], answer:"Number of protons", hint:"Also equals electrons in a neutral atom" },
          { id:"s2_3", marks:1, type:"mcq", q:"Elements in the same GROUP of the periodic table have:", options:["Same number of protons","Same mass number","Same number of outer electrons","Same number of neutrons"], answer:"Same number of outer electrons", hint:"This gives similar properties" },
          { id:"s2_4", marks:3, type:"short", q:"Carbon has atomic number 6 and mass number 12. Draw a simple diagram of its atomic structure showing all particles in the correct positions.", answer:"Nucleus contains 6 protons and 6 neutrons. Two shells of electrons: 2 in first shell, 4 in outer shell.", keywords:["6 protons","6 neutrons","2","4","shells","nucleus","electrons"], hint:"Mass number − atomic number = neutrons" },
          { id:"s2_5", marks:5, type:"extended", q:"Explain ionic bonding using sodium chloride (NaCl) as an example. Include: electron configuration of each element, what happens during bonding, what ions are formed, and why the resulting compound has a high melting point.", answer:"Na loses 1 electron to form Na+ and Cl gains 1 electron to form Cl−. Strong attraction in a giant lattice gives high melting point.", keywords:["sodium","chloride","electron","ion","Na+","Cl-","lattice","electrostatic","melting"], hint:"One atom loses, the other gains" },
          { id:"s2_6", marks:1, type:"mcq", q:"What charge does an electron have?", options:["Positive","Negative","No charge","Double positive"], answer:"Negative", hint:"Electrons are the negative particles" },
          { id:"s2_7", marks:1, type:"mcq", q:"What is the mass number of an atom?", options:["Protons only","Protons + neutrons","Electrons only","Neutrons − protons"], answer:"Protons + neutrons", hint:"Think about the nucleus" },
          { id:"s2_8", marks:3, type:"short", q:"Explain why noble gases are unreactive.", answer:"They have full outer electron shells, so they do not need to gain or lose electrons.", keywords:["noble gases","full outer shell","unreactive"], hint:"Stability comes from a full outer shell" }
        ]
      },
      3: {
        name: "Forces & Motion",
        questions: [
          { id:"s3_1", marks:1, type:"mcq", q:"What is the unit of force?", options:["Joule","Watt","Newton","Pascal"], answer:"Newton", hint:"Named after Sir Isaac Newton" },
          { id:"s3_2", marks:1, type:"mcq", q:"If resultant force on an object is zero, the object:", options:["Always stops","Accelerates","Remains stationary or moves at constant velocity","Slows down"], answer:"Remains stationary or moves at constant velocity", hint:"Newton's First Law" },
          { id:"s3_3", marks:1, type:"mcq", q:"F = ma. If F = 30N and m = 5kg, what is the acceleration?", options:["150 m/s²","6 m/s²","25 m/s²","0.17 m/s²"], answer:"6 m/s²", hint:"a = F ÷ m" },
          { id:"s3_4", marks:3, type:"short", q:"A car travels 120m in 8 seconds. Calculate its average speed and explain what 'average speed' means.", answer:"15 m/s", keywords:["15","m/s","120","8","speed=distance/time","average"], hint:"Distance ÷ time" },
          { id:"s3_5", marks:5, type:"extended", q:"Describe and explain what happens to a skydiver from the moment they jump to reaching terminal velocity, and then after the parachute opens. Include forces, acceleration, and speed at each stage.", answer:"Weight is greater than air resistance at first; eventually they balance. After parachute opens, drag becomes larger than weight then balances again at a lower speed.", keywords:["weight","air resistance","terminal velocity","accelerate","decelerate","parachute","balance","equal"], hint:"Think about changing forces" },
          { id:"s3_6", marks:1, type:"mcq", q:"What happens when a resultant force acts on an object?", options:["It must stop","It accelerates","It disappears","Its mass changes"], answer:"It accelerates", hint:"A net force changes motion" },
          { id:"s3_7", marks:1, type:"mcq", q:"Speed is calculated by:", options:["distance × time","distance ÷ time","time ÷ distance","mass × acceleration"], answer:"distance ÷ time", hint:"Use the speed formula" },
          { id:"s3_8", marks:3, type:"short", q:"A runner covers 200m in 25s. What is the average speed?", answer:"8 m/s", keywords:["8","200/25","speed"], hint:"Divide distance by time" }
        ]
      },
      4: {
        name: "Energy & Electricity",
        questions: [
          { id:"s4_1", marks:1, type:"mcq", q:"What is the equation linking voltage, current and resistance?", options:["V = I + R","V = I × R","V = I ÷ R","V = I² × R"], answer:"V = I × R", hint:"Ohm's Law" },
          { id:"s4_2", marks:1, type:"mcq", q:"In a series circuit, if one bulb breaks:", options:["Only that bulb goes out","All bulbs go out","The other bulbs get brighter","Nothing changes"], answer:"All bulbs go out", hint:"One path only" },
          { id:"s4_3", marks:1, type:"mcq", q:"What energy transfer occurs in a solar panel?", options:["Chemical → electrical","Light → electrical","Kinetic → electrical","Thermal → electrical"], answer:"Light → electrical", hint:"Solar uses light" },
          { id:"s4_4", marks:3, type:"short", q:"A resistor has a voltage of 12V across it and a current of 3A flowing through it. Calculate: (a) its resistance, (b) the power dissipated.", answer:"(a) 4Ω  (b) 36W", keywords:["4","ohm","36","watt","R=V/I","P=IV","resistance","power"], hint:"Use R = V/I and P = IV" },
          { id:"s4_5", marks:5, type:"extended", q:"Compare renewable and non-renewable energy sources. For EACH: name two examples, describe how electricity is generated, give one environmental advantage/disadvantage, and explain reliability concerns.", answer:"Renewables are cleaner but often intermittent; non-renewables are reliable but polluting or finite.", keywords:["renewable","non-renewable","turbine","CO2","reliable","intermittent","wind","solar","coal","nuclear"], hint:"Compare impact and reliability" },
          { id:"s4_6", marks:1, type:"mcq", q:"What is the unit of current?", options:["Volt","Ampere","Ohm","Watt"], answer:"Ampere", hint:"Often shortened to amp or A" },
          { id:"s4_7", marks:1, type:"mcq", q:"Which component resists the flow of current?", options:["Cell","Lamp","Resistor","Switch"], answer:"Resistor", hint:"Its name tells you its job" },
          { id:"s4_8", marks:3, type:"short", q:"Calculate the current in a circuit if V = 10V and R = 5Ω.", answer:"2 A", keywords:["2","I=V/R","current"], hint:"Rearrange V = IR" }
        ]
      },
      5: {
        name: "Chemical Reactions",
        questions: [
          { id:"s5_1", marks:1, type:"mcq", q:"What is the pH of a neutral solution?", options:["0","7","14","5"], answer:"7", hint:"Neutral is in the middle" },
          { id:"s5_2", marks:1, type:"mcq", q:"Acid + Metal → ?", options:["Salt + water","Salt + hydrogen","Metal oxide + water","Carbon dioxide + water"], answer:"Salt + hydrogen", hint:"The hydrogen comes from the acid" },
          { id:"s5_3", marks:1, type:"mcq", q:"Combustion reactions always produce:", options:["Hydrogen gas","Carbon dioxide and water (if complete)","Oxygen","Methane"], answer:"Carbon dioxide and water (if complete)", hint:"Think about burning hydrocarbons" },
          { id:"s5_4", marks:3, type:"short", q:"Balance this equation: __H₂ + __O₂ → __H₂O. Explain the law of conservation of mass and how it applies here.", answer:"2H₂ + O₂ → 2H₂O", keywords:["2H2","O2","2H2O","conservation","mass","balance","atoms"], hint:"Count atoms on both sides" },
          { id:"s5_5", marks:5, type:"extended", q:"Describe the reactivity series of metals. Use it to explain: (a) why gold is found as a pure metal but iron is found as an ore, (b) how displacement reactions work with an example, (c) the extraction method appropriate for aluminium vs copper.", answer:"More reactive metals are harder to extract; gold is unreactive while iron oxidises.", keywords:["reactivity","gold","iron","ore","displacement","electrolysis","aluminium","copper","reduction"], hint:"More reactive metals are more difficult to extract" },
          { id:"s5_6", marks:1, type:"mcq", q:"What gas is made when an acid reacts with a carbonate?", options:["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"], answer:"Carbon dioxide", hint:"Think about fizzing reactions" },
          { id:"s5_7", marks:1, type:"mcq", q:"Which statement about catalysts is correct?", options:["They are used up","They slow reactions","They speed up reactions without being used up","They stop reactions"], answer:"They speed up reactions without being used up", hint:"Catalysts lower activation energy" },
          { id:"s5_8", marks:3, type:"short", q:"Why must equations be balanced?", answer:"Because atoms are not created or destroyed, so both sides must have the same number of each atom.", keywords:["balanced","atoms","conservation of mass"], hint:"Link to conservation of mass" }
        ]
      },
      6: {
        name: "Biology: Body Systems",
        questions: [
          { id:"s6_1", marks:1, type:"mcq", q:"Where does digestion of proteins begin?", options:["Mouth","Stomach","Small intestine","Large intestine"], answer:"Stomach", hint:"Protease enzymes and acid are in the stomach" },
          { id:"s6_2", marks:1, type:"mcq", q:"What is the role of red blood cells?", options:["Fight infection","Clot wounds","Carry oxygen","Produce antibodies"], answer:"Carry oxygen", hint:"They contain haemoglobin" },
          { id:"s6_3", marks:1, type:"mcq", q:"Which part of the brain controls heart rate?", options:["Cerebrum","Cerebellum","Medulla oblongata","Hypothalamus"], answer:"Medulla oblongata", hint:"It controls automatic functions" },
          { id:"s6_4", marks:3, type:"short", q:"Explain how the heart works as a double pump. Include the role of the two sides of the heart and name the vessels involved.", answer:"Right side pumps blood to the lungs; left side pumps blood to the body.", keywords:["right","left","pulmonary","aorta","vena cava","oxygenated","deoxygenated","pump","lungs"], hint:"Follow the blood pathway" },
          { id:"s6_5", marks:5, type:"extended", q:"Describe the human immune system's response to a pathogen that has never been encountered before, and explain how vaccination uses this to provide immunity.", answer:"White blood cells recognise antigens, make antibodies and memory cells. Vaccines trigger this safely.", keywords:["pathogen","antigen","antibody","lymphocyte","memory cells","vaccine","immunity","immune response"], hint:"Memory cells are key" },
          { id:"s6_6", marks:1, type:"mcq", q:"Which blood vessel carries blood away from the heart?", options:["Vein","Artery","Capillary","Valve"], answer:"Artery", hint:"Arteries carry blood away" },
          { id:"s6_7", marks:1, type:"mcq", q:"Which blood cells help fight infection?", options:["Red blood cells","Platelets","White blood cells","Plasma"], answer:"White blood cells", hint:"They are part of the immune system" },
          { id:"s6_8", marks:3, type:"short", q:"What is the role of platelets?", answer:"They help blood clot and stop bleeding.", keywords:["platelets","clotting","bleeding"], hint:"Think about cuts and healing" }
        ]
      },
      7: {
        name: "Waves & Light",
        questions: [
          { id:"s7_1", marks:1, type:"mcq", q:"What type of wave is sound?", options:["Transverse","Longitudinal","Electromagnetic","Seismic"], answer:"Longitudinal", hint:"Particles vibrate parallel to direction of travel" },
          { id:"s7_2", marks:1, type:"mcq", q:"What is the speed of light in a vacuum?", options:["3 × 10⁶ m/s","3 × 10⁸ m/s","3 × 10¹⁰ m/s","300 m/s"], answer:"3 × 10⁸ m/s", hint:"Very fast" },
          { id:"s7_3", marks:1, type:"mcq", q:"The electromagnetic spectrum in order of increasing frequency starts with:", options:["Gamma rays","Radio waves","Visible light","Ultraviolet"], answer:"Radio waves", hint:"Remember the EM order" },
          { id:"s7_4", marks:3, type:"short", q:"A wave has a frequency of 200Hz and a wavelength of 2m. Calculate its wave speed and explain what frequency and wavelength mean.", answer:"400 m/s", keywords:["400","m/s","200","2","speed=fλ","frequency","wavelength"], hint:"Multiply frequency and wavelength" },
          { id:"s7_5", marks:5, type:"extended", q:"Explain how a convex lens forms an image. Include: what happens to parallel rays, real vs virtual images, how magnification works, and give two practical uses of convex lenses.", answer:"Parallel rays converge. Depending on object distance the image can be real or virtual. Magnification compares image and object size.", keywords:["convex","focal point","converge","real","virtual","magnification","camera","long-sight"], hint:"Think about the focal point" },
          { id:"s7_6", marks:1, type:"mcq", q:"Which type of wave is light?", options:["Longitudinal","Mechanical","Electromagnetic","Sound"], answer:"Electromagnetic", hint:"It can travel through a vacuum" },
          { id:"s7_7", marks:1, type:"mcq", q:"Wave speed is calculated by:", options:["frequency ÷ wavelength","frequency × wavelength","amplitude × time","frequency + wavelength"], answer:"frequency × wavelength", hint:"Use v = fλ" },
          { id:"s7_8", marks:3, type:"short", q:"What happens when light enters a denser medium at an angle?", answer:"It refracts and changes direction because its speed changes.", keywords:["refraction","changes direction","speed"], hint:"Think about bending light" }
        ]
      },
      8: {
        name: "Genetics & Evolution",
        questions: [
          { id:"s8_1", marks:1, type:"mcq", q:"What is a gene?", options:["A section of DNA coding for a protein","The entire DNA molecule","A type of cell","A chromosome"], answer:"A section of DNA coding for a protein", hint:"Genes give instructions" },
          { id:"s8_2", marks:1, type:"mcq", q:"If B (brown eyes) is dominant and b (blue eyes) is recessive, what genotype will always give blue eyes?", options:["BB","Bb","bB","bb"], answer:"bb", hint:"Recessive traits need two copies" },
          { id:"s8_3", marks:1, type:"mcq", q:"What did Darwin's theory of natural selection suggest?", options:["Species were created perfectly","Organisms with beneficial traits survive and reproduce more","All mutations are harmful","Environments never change"], answer:"Organisms with beneficial traits survive and reproduce more", hint:"Survival advantage matters" },
          { id:"s8_4", marks:3, type:"short", q:"Two parents are both carriers of cystic fibrosis (Ff). Draw a Punnett square and calculate the probability of their child having cystic fibrosis.", answer:"1/4 or 25%", keywords:["FF","Ff","ff","25%","1/4","Punnett","recessive","dominant"], hint:"Cross Ff × Ff" },
          { id:"s8_5", marks:5, type:"extended", q:"Explain how antibiotic resistance develops in bacteria. Include: random mutation, natural selection, survival advantage, reproduction, and why this is a serious public health concern.", answer:"Random mutation creates resistance; antibiotics kill non-resistant bacteria, leaving resistant ones to survive and reproduce.", keywords:["mutation","natural selection","resistant","reproduce","antibiotic","survive","public health","resistant bacteria"], hint:"Apply natural selection to bacteria" },
          { id:"s8_6", marks:1, type:"mcq", q:"What molecule carries genetic information?", options:["Protein","DNA","Glucose","Starch"], answer:"DNA", hint:"Genes are made of this molecule" },
          { id:"s8_7", marks:1, type:"mcq", q:"A dominant allele will show in the phenotype when:", options:["It is paired with another dominant or recessive allele","It is only paired with itself","It disappears","There are no chromosomes"], answer:"It is paired with another dominant or recessive allele", hint:"One dominant allele is enough" },
          { id:"s8_8", marks:3, type:"short", q:"Why can mutations be useful in evolution?", answer:"They can create new characteristics that give a survival advantage.", keywords:["mutation","evolution","survival advantage"], hint:"Natural selection acts on variation" }
        ]
      },
      9: {
        name: "Earth Science & Space",
        questions: [
          { id:"s9_1", marks:1, type:"mcq", q:"What causes the seasons on Earth?", options:["Distance from the Sun","Tilt of Earth's axis","Speed of Earth's orbit","Size of the Sun"], answer:"Tilt of Earth's axis", hint:"Earth is tilted" },
          { id:"s9_2", marks:1, type:"mcq", q:"The Big Bang theory suggests the universe began:", options:["About 4.5 billion years ago","About 13.8 billion years ago","6,000 years ago","Infinitely long ago"], answer:"About 13.8 billion years ago", hint:"Much older than Earth" },
          { id:"s9_3", marks:1, type:"mcq", q:"What is the greenhouse effect?", options:["Warming of greenhouses in summer","Trapping of heat by atmospheric gases","Ozone layer protecting Earth","Ocean currents warming land"], answer:"Trapping of heat by atmospheric gases", hint:"Greenhouse gases trap heat" },
          { id:"s9_4", marks:3, type:"short", q:"Explain how tectonic plates cause earthquakes. Include reference to plate boundaries, stored energy, and seismic waves.", answer:"Stress builds at boundaries and is released suddenly as seismic waves when plates slip.", keywords:["tectonic","plates","boundary","friction","seismic","waves","energy","earthquake"], hint:"Plates lock but keep moving" },
          { id:"s9_5", marks:5, type:"extended", q:"Describe the life cycle of a star similar to our Sun, from nebula to its final state. Include: nuclear fusion, main sequence, red giant, and white dwarf stages.", answer:"Nebula → protostar → main sequence → red giant → white dwarf.", keywords:["nebula","protostar","fusion","main sequence","red giant","white dwarf","hydrogen","helium","gravity"], hint:"Follow the star stages in order" },
          { id:"s9_6", marks:1, type:"mcq", q:"What is the force that keeps planets in orbit?", options:["Magnetism","Gravity","Friction","Pressure"], answer:"Gravity", hint:"It attracts masses together" },
          { id:"s9_7", marks:1, type:"mcq", q:"Which planet is known for having rings?", options:["Mars","Saturn","Venus","Mercury"], answer:"Saturn", hint:"It is famous for its ring system" },
          { id:"s9_8", marks:3, type:"short", q:"Why is Mars called a rocky planet?", answer:"Because it has a solid rocky surface like Earth.", keywords:["rocky planet","solid surface","Mars"], hint:"Compare it to gas giants" }
        ]
      },
      10: {
        name: "Advanced Science & Exam Mastery",
        questions: [
          { id:"s10_1", marks:1, type:"mcq", q:"What does the half-life of a radioactive substance mean?", options:["Time for all atoms to decay","Time for half the atoms to decay","Time for radiation to halve in intensity","Time for the substance to cool by half"], answer:"Time for half the atoms to decay", hint:"After each half-life, half remain" },
          { id:"s10_2", marks:1, type:"mcq", q:"Le Chatelier's Principle states that if a system is disturbed:", options:["It stops reacting","It responds to oppose the change","It always speeds up","Temperature drops"], answer:"It responds to oppose the change", hint:"The system counters the change" },
          { id:"s10_3", marks:1, type:"mcq", q:"What distinguishes alpha, beta and gamma radiation in terms of penetration?", options:["Alpha most penetrating, gamma least","Gamma most penetrating, alpha least","Beta most penetrating, alpha least","All have equal penetration"], answer:"Gamma most penetrating, alpha least", hint:"Alpha is stopped by paper" },
          { id:"s10_4", marks:3, type:"short", q:"A sample of carbon-14 has a half-life of 5,730 years. If a sample currently has 200 atoms, how many will remain after 17,190 years? Show your working.", answer:"25 atoms remain", keywords:["25","3","half-lives","200","100","50","5730"], hint:"Work out how many half-lives have passed" },
          { id:"s10_5", marks:5, type:"extended", q:"Evaluate the advantages and disadvantages of using nuclear power as part of the UK's energy mix. Include: how nuclear fission works, safety concerns, waste disposal, cost, and carbon emissions. Come to a reasoned conclusion.", answer:"Nuclear provides reliable low-carbon power but has waste, cost and safety concerns.", keywords:["fission","nuclear","uranium","chain reaction","CO2","waste","radioactive","reliable","Chernobyl","evaluate"], hint:"Balance pros and cons" },
          { id:"s10_6", marks:1, type:"mcq", q:"Which radiation is stopped by paper?", options:["Alpha","Beta","Gamma","X-ray"], answer:"Alpha", hint:"Alpha has the lowest penetration" },
          { id:"s10_7", marks:1, type:"mcq", q:"What is formed during nuclear fission?", options:["A larger nucleus","Two smaller nuclei and energy","Only light","Only steam"], answer:"Two smaller nuclei and energy", hint:"A large nucleus splits" },
          { id:"s10_8", marks:3, type:"short", q:"Why is gamma radiation more dangerous outside the body than alpha radiation?", answer:"Because gamma penetrates the body deeply, while alpha is stopped more easily.", keywords:["gamma","alpha","penetration","dangerous"], hint:"Think about how far each type travels into matter" }
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
          { id:"g0_2", marks:1, type:"mcq", q:"What is a river's 'mouth'?", options:["Where it starts","Where it is widest in the middle","Where it meets the sea","Where it flows fastest"], answer:"Where it meets the sea", hint:"Like a mouth, it opens out" },
          { id:"g0_3", marks:1, type:"mcq", q:"What does 'urban' mean?", options:["Relating to the countryside","Relating to towns and cities","Relating to mountains","Relating to rivers"], answer:"Relating to towns and cities", hint:"Opposite of rural" },
          { id:"g0_4", marks:3, type:"short", q:"Describe THREE differences between a city and a village.", answer:"Cities are larger, have more services and denser housing than villages.", keywords:["population","services","transport","density","rural","urban","housing","large","small"], hint:"Think people, buildings and services" },
          { id:"g0_5", marks:5, type:"extended", q:"Describe the main features of the UK's physical geography. Include: location, climate, main mountain ranges, rivers, and coastline.", answer:"The UK is in north-west Europe, has a maritime climate, mountain ranges, major rivers and a varied coastline.", keywords:["temperate","maritime","Highlands","Pennines","Snowdonia","Thames","Severn","Atlantic","coastline"], hint:"Work through each category" },
          { id:"g0_6", marks:1, type:"mcq", q:"Which direction is opposite to north?", options:["East","West","South","Up"], answer:"South", hint:"Compass opposite" },
          { id:"g0_7", marks:1, type:"mcq", q:"Which is a human feature?", options:["River","Hill","Bridge","Forest"], answer:"Bridge", hint:"Human features are built by people" },
          { id:"g0_8", marks:3, type:"short", q:"Name one physical feature and one human feature you might see on a map.", answer:"Any suitable pair such as river and road", keywords:["physical feature","human feature","map"], hint:"One natural, one built" }
        ]
      },
      1: {
        name: "Map Skills",
        questions: [
          { id:"g1_1", marks:1, type:"mcq", q:"What do contour lines show on an OS map?", options:["Roads","Height above sea level","Rivers","Vegetation"], answer:"Height above sea level", hint:"Lines of equal height" },
          { id:"g1_2", marks:1, type:"mcq", q:"What is the scale 1:50,000?", options:["1cm = 50m","1cm = 500m","1cm = 5km","1cm = 50km"], answer:"1cm = 500m", hint:"Convert 50,000 cm" },
          { id:"g1_3", marks:1, type:"mcq", q:"Grid references in geography go: first the __, then the __.", options:["northing, easting","easting, northing","latitude, longitude","longitude, latitude"], answer:"easting, northing", hint:"Along the corridor, up the stairs" },
          { id:"g1_4", marks:3, type:"short", q:"Explain how you can identify a steep valley on a contour map. What would the contour lines look like, and why?", answer:"Closely spaced contours and V-shapes pointing uphill indicate a steep valley.", keywords:["contour","closely spaced","steep","V-shape","valley","gradient","height"], hint:"Close contours = steep" },
          { id:"g1_5", marks:5, type:"extended", q:"You are planning a 10km hike on an OS map. Describe how you would: use grid references to note your start/end points, identify steep and flat sections, find water sources, and calculate walking time.", answer:"Use grid refs, contour spacing, blue features and estimated walking speeds.", keywords:["grid reference","contour","steep","flat","blue","water","4km/h","2km/h","time"], hint:"Break route into sections" },
          { id:"g1_6", marks:1, type:"mcq", q:"On a six-figure grid reference, how many digits are used for the easting?", options:["1","2","3","6"], answer:"3", hint:"Half of the reference is easting" },
          { id:"g1_7", marks:1, type:"mcq", q:"Widely spaced contour lines show:", options:["Very steep land","Flat or gently sloping land","A river","A road"], answer:"Flat or gently sloping land", hint:"The height changes slowly" },
          { id:"g1_8", marks:3, type:"short", q:"Why are map scales useful?", answer:"They help us convert map distance into real-life distance.", keywords:["scale","distance","real life"], hint:"Think about measuring routes" }
        ]
      },
      2: {
        name: "Weather & Climate",
        questions: [
          { id:"g2_1", marks:1, type:"mcq", q:"What is the difference between weather and climate?", options:["They are the same thing","Weather is long-term, climate is day-to-day","Climate is long-term patterns, weather is day-to-day conditions","Climate only applies to tropical areas"], answer:"Climate is long-term patterns, weather is day-to-day conditions", hint:"Climate is what you expect" },
          { id:"g2_2", marks:1, type:"mcq", q:"The UK is described as having a 'maritime' climate. This means:", options:["Very hot and dry","Extreme temperatures, low rainfall","Mild temperatures and fairly high rainfall","Cold winters and hot summers"], answer:"Mild temperatures and fairly high rainfall", hint:"Sea influence keeps temperatures milder" },
          { id:"g2_3", marks:1, type:"mcq", q:"Which type of rainfall occurs when warm air is forced to rise over mountains?", options:["Frontal","Convectional","Relief (Orographic)","Cyclonic"], answer:"Relief (Orographic)", hint:"Mountains force the air up" },
          { id:"g2_4", marks:3, type:"short", q:"Explain why western parts of the UK receive more rainfall than eastern parts.", answer:"Moist Atlantic air rises over western uplands, causing relief rainfall and leaving eastern rain shadows.", keywords:["prevailing wind","Atlantic","relief","mountain","rain shadow","leeward","windward","east","west"], hint:"Follow the journey from the Atlantic" },
          { id:"g2_5", marks:5, type:"extended", q:"Describe the causes and effects of global warming. Include: greenhouse gases, human activities, at least two environmental effects, and one social/economic effect.", answer:"Greenhouse gases from human activity trap heat, leading to environmental and human impacts such as sea-level rise and flooding.", keywords:["CO2","greenhouse","methane","fossil fuels","deforestation","sea level","flooding","extreme weather","temperature"], hint:"Cause → effect" },
          { id:"g2_6", marks:1, type:"mcq", q:"Which gas is a greenhouse gas?", options:["Carbon dioxide","Oxygen","Helium","Argon"], answer:"Carbon dioxide", hint:"It traps heat" },
          { id:"g2_7", marks:1, type:"mcq", q:"What instrument measures rainfall?", options:["Thermometer","Barometer","Rain gauge","Anemometer"], answer:"Rain gauge", hint:"It collects rain" },
          { id:"g2_8", marks:3, type:"short", q:"Why does warm air rise?", answer:"Warm air is less dense than cold air, so it rises.", keywords:["warm air","less dense","rises"], hint:"Think about density" }
        ]
      },
      3: {
        name: "Rivers & Coasts",
        questions: [
          { id:"g3_1", marks:1, type:"mcq", q:"What is erosion?", options:["The transport of material","The wearing away of rock and soil","The deposition of material","The movement of tectonic plates"], answer:"The wearing away of rock and soil", hint:"It removes material" },
          { id:"g3_2", marks:1, type:"mcq", q:"A meander is:", options:["A waterfall","A bend in a river","The river source","Where a river meets the sea"], answer:"A bend in a river", hint:"A winding shape" },
          { id:"g3_3", marks:1, type:"mcq", q:"What process occurs on the inside bend of a meander?", options:["Erosion","Deposition","Transportation","Hydraulic action"], answer:"Deposition", hint:"Water is slower here" },
          { id:"g3_4", marks:3, type:"short", q:"Explain how a waterfall is formed. Include the processes of erosion and the rock types involved.", answer:"Softer rock erodes faster than harder rock, causing undercutting, collapse and retreat.", keywords:["resistant","soft","erosion","undercut","overhang","collapse","gorge","waterfall","hydraulic"], hint:"Hard rock over soft rock" },
          { id:"g3_5", marks:5, type:"extended", q:"Compare the upper and lower course of a river. For each, describe: the channel shape, gradient, processes, and landforms created. Use geographical terms throughout.", answer:"Upper course is steep and erosion-dominated; lower course is gentler and deposition-dominated.", keywords:["upper","lower","gradient","erosion","deposition","meander","floodplain","V-shaped","oxbow","delta"], hint:"Young river vs mature river" },
          { id:"g3_6", marks:1, type:"mcq", q:"What is deposition?", options:["Breaking rock","Dropping material","Heating air","Moving plates"], answer:"Dropping material", hint:"It is when a river loses energy" },
          { id:"g3_7", marks:1, type:"mcq", q:"Where is a river source found?", options:["At the sea","At the end of a meander","At the beginning of a river","Inside a delta"], answer:"At the beginning of a river", hint:"It is where the river starts" },
          { id:"g3_8", marks:3, type:"short", q:"Why does deposition happen near a river mouth?", answer:"Because the river loses energy and drops its load.", keywords:["deposition","river mouth","loses energy"], hint:"Slower water carries less material" }
        ]
      },
      4: {
        name: "Population & Migration",
        questions: [
          { id:"g4_1", marks:1, type:"mcq", q:"What is the DTM (Demographic Transition Model)?", options:["A map of population density","A model showing how birth/death rates change over time","A measure of migration","A model of urban growth"], answer:"A model showing how birth/death rates change over time", hint:"Population stages" },
          { id:"g4_2", marks:1, type:"mcq", q:"'Push factors' in migration refer to:", options:["Reasons that attract migrants to a new place","Reasons that drive people away from their home area","Government policies on migration","The speed of migration"], answer:"Reasons that drive people away from their home area", hint:"They push people out" },
          { id:"g4_3", marks:1, type:"mcq", q:"Which country has the world's largest population?", options:["USA","Russia","India","China"], answer:"India", hint:"India overtook China" },
          { id:"g4_4", marks:3, type:"short", q:"Explain the difference between economic migrants and refugees. Include an example of each.", answer:"Economic migrants move voluntarily; refugees are forced to flee danger or persecution.", keywords:["economic","refugee","voluntary","forced","war","persecution","living standards","example"], hint:"Voluntary vs forced" },
          { id:"g4_5", marks:5, type:"extended", q:"Evaluate the impacts of migration on both the source country and the host country. Include: at least two positive and two negative impacts for each. Use a case study to support your answer.", answer:"Migration can bring remittances and labour but also pressure on services and brain drain.", keywords:["source","host","remittances","brain drain","labour","services","housing","positive","negative","case study"], hint:"Think source and host separately" },
          { id:"g4_6", marks:1, type:"mcq", q:"Which is a pull factor?", options:["War","Unemployment","Better job opportunities","Natural disaster"], answer:"Better job opportunities", hint:"It attracts people" },
          { id:"g4_7", marks:1, type:"mcq", q:"A refugee is someone who:", options:["Moves for fun","Is forced to flee danger","Travels for tourism","Changes jobs locally"], answer:"Is forced to flee danger", hint:"Think about safety and legal protection" },
          { id:"g4_8", marks:3, type:"short", q:"What is a remittance?", answer:"Money sent home by migrants to family in their source country.", keywords:["remittance","money sent home","migrant"], hint:"It is a common migration benefit" }
        ]
      },
      5: {
        name: "Urban Issues",
        questions: [
          { id:"g5_1", marks:1, type:"mcq", q:"What is urbanisation?", options:["Growth of city populations","Movement from city to countryside","Building new cities","Demolishing old buildings"], answer:"Growth of city populations", hint:"More people in cities" },
          { id:"g5_2", marks:1, type:"mcq", q:"What are squatter settlements (shanty towns)?", options:["Luxury apartments in city centres","Illegal settlements built on land people don't own, usually with poor conditions","Council-built housing estates","Suburbs of wealthy cities"], answer:"Illegal settlements built on land people don't own, usually with poor conditions", hint:"They grow when housing is lacking" },
          { id:"g5_3", marks:1, type:"mcq", q:"A 'sustainable city' aims to:", options:["Build as many houses as possible","Meet needs of current residents without harming future generations","Attract the most businesses","Grow as fast as possible"], answer:"Meet needs of current residents without harming future generations", hint:"Think long-term" },
          { id:"g5_4", marks:3, type:"short", q:"Explain two challenges that rapid urbanisation creates in developing countries.", answer:"Housing shortages and lack of services such as sanitation and healthcare.", keywords:["housing","squatter","sanitation","services","water","healthcare","overcrowding","rapid","developing"], hint:"Think infrastructure" },
          { id:"g5_5", marks:5, type:"extended", q:"Case study: Rio de Janeiro. Describe the challenges facing the city and evaluate strategies used to improve quality of life in favelas. How successful have these strategies been?", answer:"There have been improvements in infrastructure, but challenges like inequality and crime remain.", keywords:["Rio","favela","Favela Bairro","cable car","UPP","pacification","sanitation","inequality","strategy","success"], hint:"Challenges → strategies → evaluation" },
          { id:"g5_6", marks:1, type:"mcq", q:"Which is an urban problem?", options:["Overcrowding","Glaciation","Volcanism","Desert pavement"], answer:"Overcrowding", hint:"Think about city issues" },
          { id:"g5_7", marks:1, type:"mcq", q:"Which service may come under pressure in a rapidly growing city?", options:["Hospitals","Mountains","Rainfall","Oceans"], answer:"Hospitals", hint:"Cities need more public services" },
          { id:"g5_8", marks:3, type:"short", q:"Why can traffic congestion become a serious urban issue?", answer:"It increases journey times, pollution and stress, and reduces productivity.", keywords:["traffic congestion","pollution","journey times"], hint:"Think about movement and air quality" }
        ]
      },
      6: {
        name: "Economic Development",
        questions: [
          { id:"g6_1", marks:1, type:"mcq", q:"What does GNI per capita measure?", options:["Size of a country","Average income of citizens per year","Amount of trade","Level of pollution"], answer:"Average income of citizens per year", hint:"Per person income" },
          { id:"g6_2", marks:1, type:"mcq", q:"What does NEE stand for in geography?", options:["North Eastern Economy","Newly Emerging Economy","National Enterprise Exchange","Non-European Economy"], answer:"Newly Emerging Economy", hint:"Examples include India and Brazil" },
          { id:"g6_3", marks:1, type:"mcq", q:"What is the HDI (Human Development Index)?", options:["A measure of happiness","A composite measure of life expectancy, education, and income","A measure of GDP only","A measure of environmental quality"], answer:"A composite measure of life expectancy, education, and income", hint:"It combines indicators" },
          { id:"g6_4", marks:3, type:"short", q:"Explain how the 'development gap' between HICs and LICs can be measured. Use two different indicators.", answer:"Use economic indicators like GNI and social indicators like literacy or HDI.", keywords:["GNI","HDI","literacy","HIC","LIC","gap","measure","indicator","compare"], hint:"Use two types" },
          { id:"g6_5", marks:5, type:"extended", q:"Case study: Nigeria as a NEE. How has Nigeria's economy changed, and what are the social, economic, and environmental impacts of its development?", answer:"Growth has increased wealth and opportunity, but inequality and environmental damage remain.", keywords:["Nigeria","NEE","oil","Lagos","TNC","Shell","inequality","Delta","deforestation","development"], hint:"Economic, social, environmental" },
          { id:"g6_6", marks:1, type:"mcq", q:"Which indicator is social rather than economic?", options:["GNI per capita","GDP","Literacy rate","Trade balance"], answer:"Literacy rate", hint:"It measures education" },
          { id:"g6_7", marks:1, type:"mcq", q:"Which country type generally has higher life expectancy?", options:["HIC","LIC","Both always equal","Cannot compare"], answer:"HIC", hint:"Think about access to services" },
          { id:"g6_8", marks:3, type:"short", q:"Why is HDI often more useful than GDP alone?", answer:"Because it includes health and education as well as income.", keywords:["HDI","GDP","health","education"], hint:"It is more holistic" }
        ]
      },
      7: {
        name: "Natural Hazards",
        questions: [
          { id:"g7_1", marks:1, type:"mcq", q:"At which plate boundary do earthquakes AND volcanoes occur?", options:["Conservative","Constructive only","Destructive","Transform only"], answer:"Destructive", hint:"Subduction zone" },
          { id:"g7_2", marks:1, type:"mcq", q:"What is the Richter scale?", options:["Measures hurricane intensity","Measures earthquake magnitude","Measures volcano height","Measures tsunami wave height"], answer:"Measures earthquake magnitude", hint:"A magnitude scale" },
          { id:"g7_3", marks:1, type:"mcq", q:"A tropical storm needs which sea surface temperature to form and maintain intensity?", options:["Above 10°C","Above 15°C","Above 26.5°C","Above 35°C"], answer:"Above 26.5°C", hint:"Warm water fuels it" },
          { id:"g7_4", marks:3, type:"short", q:"Explain why earthquakes in LICs often cause more deaths than earthquakes of the same magnitude in HICs.", answer:"Weaker buildings and weaker emergency response often increase deaths.", keywords:["LIC","HIC","building","construction","emergency services","response","infrastructure","death toll","inequality"], hint:"Compare buildings and response" },
          { id:"g7_5", marks:5, type:"extended", q:"Compare the immediate and long-term responses to a named earthquake in a HIC with one in an LIC. Evaluate why the outcomes differed.", answer:"HICs often recover faster due to stronger infrastructure, wealth and governance.", keywords:["Haiti","Christchurch","HIC","LIC","response","immediate","long-term","emergency","rebuilding","compare"], hint:"Immediate vs long-term" },
          { id:"g7_6", marks:1, type:"mcq", q:"What is the focus of earthquake-proof building design?", options:["Making roofs heavier","Allowing buildings to absorb movement","Using no windows","Making buildings shorter only"], answer:"Allowing buildings to absorb movement", hint:"Flexibility helps reduce collapse" },
          { id:"g7_7", marks:1, type:"mcq", q:"Which hazard is atmospheric rather than tectonic?", options:["Earthquake","Volcano","Tropical storm","Tsunami"], answer:"Tropical storm", hint:"Think weather" },
          { id:"g7_8", marks:3, type:"short", q:"Why do tropical storms weaken over land?", answer:"They lose their warm ocean energy source and friction increases.", keywords:["tropical storm","land","energy source","friction"], hint:"They need warm water" }
        ]
      },
      8: {
        name: "Resources & Sustainability",
        questions: [
          { id:"g8_1", marks:1, type:"mcq", q:"What is 'food security'?", options:["All food being safe to eat","When all people have enough food for an active, healthy life","A government policy on farming","Food being stored safely"], answer:"When all people have enough food for an active, healthy life", hint:"Reliable access" },
          { id:"g8_2", marks:1, type:"mcq", q:"What is the 'water stress' threshold (per person per year)?", options:["Below 500m³","Below 1,700m³","Below 5,000m³","Below 10,000m³"], answer:"Below 1,700m³", hint:"A key threshold" },
          { id:"g8_3", marks:1, type:"mcq", q:"What is 'energy mix'?", options:["Blending different fuels in an engine","The combination of energy sources used by a country","Mixing renewable and non-renewable fuels","A type of energy efficiency measure"], answer:"The combination of energy sources used by a country", hint:"Countries use more than one source" },
          { id:"g8_4", marks:3, type:"short", q:"Explain why access to clean water is unequal globally. Give two causes of water insecurity.", answer:"It may be due to physical scarcity, economic scarcity, pollution or climate change.", keywords:["physical","economic","scarcity","rainfall","infrastructure","pollution","climate","inequality","access"], hint:"Physical vs economic" },
          { id:"g8_5", marks:5, type:"extended", q:"Evaluate strategies to achieve food security in a world of growing population and climate change. Consider: increasing supply, reducing demand, and sustainable approaches. Use examples.", answer:"Technology can increase supply, but sustainability and reducing waste are also important.", keywords:["Green Revolution","GM","irrigation","food waste","agroforestry","sustainable","HYV","demand","supply","evaluate"], hint:"Balance different strategies" },
          { id:"g8_6", marks:1, type:"mcq", q:"Which is a renewable energy source?", options:["Coal","Oil","Wind","Natural gas"], answer:"Wind", hint:"It will not run out quickly" },
          { id:"g8_7", marks:1, type:"mcq", q:"What is water scarcity?", options:["Too much water","Not enough available clean water","Water in the sea","Frozen water"], answer:"Not enough available clean water", hint:"Think about access and supply" },
          { id:"g8_8", marks:3, type:"short", q:"Why does reducing food waste help food security?", answer:"It means more food is available without needing to produce as much extra.", keywords:["food waste","food security","available food"], hint:"Less waste means more useful supply" }
        ]
      },
      9: {
        name: "Ecosystems & Biomes",
        questions: [
          { id:"g9_1", marks:1, type:"mcq", q:"Where are tropical rainforests mainly found?", options:["Near the poles","In desert regions","Around the equator","In temperate zones"], answer:"Around the equator", hint:"Hot and wet all year" },
          { id:"g9_2", marks:1, type:"mcq", q:"What is 'nutrient cycling' in an ecosystem?", options:["The movement of animals through a habitat","The process by which nutrients are recycled through living organisms and environment","A farming technique","The flow of water through a forest"], answer:"The process by which nutrients are recycled through living organisms and environment", hint:"Nutrients move round the system" },
          { id:"g9_3", marks:1, type:"mcq", q:"What is the main cause of tropical rainforest deforestation?", options:["Natural fires","Commercial farming and cattle ranching","Tourism","Flooding"], answer:"Commercial farming and cattle ranching", hint:"Major driver in the Amazon" },
          { id:"g9_4", marks:3, type:"short", q:"Explain how tropical rainforest plants are adapted to survive in their environment. Give THREE specific adaptations.", answer:"Examples include drip-tip leaves, buttress roots and lianas.", keywords:["drip-tip","buttress","roots","lianas","humidity","sunlight","soil","adapted","moisture"], hint:"Think heavy rain, shallow soil, competition for light" },
          { id:"g9_5", marks:5, type:"extended", q:"Case study: The Amazon Rainforest. Assess the value of the Amazon and evaluate strategies to protect it. Are these strategies sufficient?", answer:"The Amazon is valuable for biodiversity and climate, but protection needs strong enforcement.", keywords:["Amazon","biodiversity","carbon","REDD","deforestation","indigenous","protection","evaluate","strategy","sufficient"], hint:"Value → threats → protection → evaluation" },
          { id:"g9_6", marks:1, type:"mcq", q:"What is biodiversity?", options:["One species only","The variety of living organisms","Tree height","Soil depth"], answer:"The variety of living organisms", hint:"Think about different forms of life" },
          { id:"g9_7", marks:1, type:"mcq", q:"Which plant adaptation helps water run off quickly?", options:["Drip-tip leaves","Buttress roots","Thorns","Waxy bark"], answer:"Drip-tip leaves", hint:"Useful in heavy rainfall" },
          { id:"g9_8", marks:3, type:"short", q:"Why are buttress roots useful in rainforests?", answer:"They support tall trees in shallow, nutrient-poor soil.", keywords:["buttress roots","support","shallow soil"], hint:"Think stability" }
        ]
      },
      10: {
        name: "Fieldwork, Exam Technique & Mastery",
        questions: [
          { id:"g10_1", marks:1, type:"mcq", q:"In geography fieldwork, what is a 'transect'?", options:["A type of survey questionnaire","A straight line along which data is collected","A statistical test","A type of map"], answer:"A straight line along which data is collected", hint:"Data along a line" },
          { id:"g10_2", marks:1, type:"mcq", q:"What is the Spearman's Rank correlation coefficient used for?", options:["Measuring average","Identifying if two variables have a correlation","Calculating percentage change","Drawing graph lines"], answer:"Identifying if two variables have a correlation", hint:"It tests relationship" },
          { id:"g10_3", marks:1, type:"mcq", q:"A 9-mark geography question requires you to:", options:["Define a term","Give a short list","Explain a process in detail with case study examples","Write a one-word answer"], answer:"Explain a process in detail with case study examples", hint:"Extended answer" },
          { id:"g10_4", marks:3, type:"short", q:"Evaluate the reliability of questionnaires as a data collection method in geographical fieldwork. Include advantages and disadvantages.", answer:"They can collect lots of primary data but may suffer from bias and sampling limitations.", keywords:["questionnaire","bias","sample","primary","reliable","disadvantage","advantage","wording"], hint:"Think representativeness" },
          { id:"g10_5", marks:5, type:"extended", q:"'Geography is the most important subject for understanding the challenges facing humanity in the 21st century.' Evaluate this statement using geographical knowledge from at least THREE different topic areas.", answer:"A strong answer weighs geography's interdisciplinary value against other subjects' contributions.", keywords:["climate change","urbanisation","migration","resource","interdisciplinary","evaluate","argument","challenges","21st century"], hint:"Arguments for, against, then judgement" },
          { id:"g10_6", marks:1, type:"mcq", q:"What does a fair fieldwork sample aim to be?", options:["Biased","Representative","Randomly tiny","Only from one group"], answer:"Representative", hint:"It should reflect the wider population or area" },
          { id:"g10_7", marks:1, type:"mcq", q:"Which graph is useful for showing change over time?", options:["Pie chart","Line graph","Pictogram","Flow diagram"], answer:"Line graph", hint:"Time data often goes on the x-axis" },
          { id:"g10_8", marks:3, type:"short", q:"Why is evaluation important in high-mark geography answers?", answer:"It shows judgement, weighs evidence and explains how far something is effective or significant.", keywords:["evaluation","judgement","evidence","high mark"], hint:"It moves beyond description" }
        ]
      }
    }
  }
};

const LEVEL_NAMES = [
  "Novice Explorer",
  "Apprentice",
  "Rising Star",
  "Journeyman",
  "Skilled Scholar",
  "Confident Learner",
  "Advanced Thinker",
  "Expert Analyst",
  "Master Student",
  "Grade 8 Champion",
  "GCSE Legend"
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
