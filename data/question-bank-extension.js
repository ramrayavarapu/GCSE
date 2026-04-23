// GCSE Quest — Question Bank Extension
// Adds exam-quality practice across all subjects and levels without replacing the core bank.
// Intended to be loaded after data/questions.js.

(function extendQuestionBank() {
  if (typeof QUESTION_BANK === 'undefined') {
    console.warn('QUESTION_BANK not found. Load data/questions.js before this extension.');
    return;
  }

  const extensions = {
    mathematics: {
      0: [
        { id:"m0_9", marks:1, type:"mcq", q:"What is 16 + 7?", options:["21","22","23","24"], answer:"23", hint:"Bridge through 20: 16 + 4 + 3" },
        { id:"m0_10", marks:3, type:"short", q:"A cinema row has 12 seats. There are 5 rows. How many seats are there altogether? Show your working.", answer:"60", keywords:["60","12×5","12 x 5","multiply","total"], hint:"Equal groups mean multiplication" },
        { id:"m0_11", marks:5, type:"extended", q:"Mia has £18. She buys lunch for £4.75 and a notebook for £3.60. (a) How much does she spend? (b) How much money is left? (c) Explain one check you could do to see if your answer is sensible.", answer:"(a) £8.35 (b) £9.65 (c) Estimate £5 + £4 = £9, so about £9 left is sensible", keywords:["8.35","9.65","estimate","sensible","check"], hint:"Add the costs, then subtract from £18" }
      ],
      1: [
        { id:"m1_9", marks:1, type:"mcq", q:"Which number is closest to 3?", options:["2.87","3.41","2.49","3.62"], answer:"2.87", hint:"Compare each distance from 3" },
        { id:"m1_10", marks:3, type:"short", q:"Round 7.486 to 1 decimal place and to 2 decimal places. Show which digit you used each time.", answer:"7.5 and 7.49", keywords:["7.5","7.49","hundredths","thousandths","round"], hint:"For 1 d.p. look at hundredths; for 2 d.p. look at thousandths" },
        { id:"m1_11", marks:5, type:"extended", q:"A shop records sales of £12.45, £9.80 and £15.75. (a) Find the total. (b) Round the total to the nearest pound. (c) Explain why rounding each item first could give a different answer.", answer:"(a) £38.00 (b) £38 (c) Rounding early changes the exact values before adding", keywords:["38","38.00","nearest pound","rounding early","different"], hint:"Add exact values before rounding" }
      ],
      2: [
        { id:"m2_9", marks:1, type:"mcq", q:"What is 3/5 as a percentage?", options:["30%","35%","60%","75%"], answer:"60%", hint:"Convert fifths to hundredths" },
        { id:"m2_10", marks:3, type:"short", q:"A £48 coat is reduced by 25%. Calculate the new price and show your working.", answer:"£36", keywords:["36","25%","12","discount","new price"], hint:"25% is one quarter" },
        { id:"m2_11", marks:5, type:"extended", q:"In a club, 2/5 of members are adults. There are 90 members. (a) How many are adults? (b) 30% of the children cycle to the club. How many children cycle? (c) What percentage of all members are children who cycle?", answer:"(a) 36 adults (b) 16.2 children, so about 16 if whole people required (c) 18%", keywords:["36","54","16.2","18%","children"], hint:"Find adults first, then children = total − adults" }
      ],
      3: [
        { id:"m3_9", marks:1, type:"mcq", q:"Simplify 6x − 2x + 5", options:["4x+5","8x+5","4x","9x"], answer:"4x+5", hint:"Collect only like terms" },
        { id:"m3_10", marks:3, type:"short", q:"Solve 5x + 4 = 29. Show each step.", answer:"x=5", keywords:["x=5","subtract 4","divide by 5"], hint:"Undo +4 first" },
        { id:"m3_11", marks:5, type:"extended", q:"A taxi charges £3 plus £2 per mile. (a) Write a formula for cost C for m miles. (b) Find the cost for 8 miles. (c) If the cost is £21, find the number of miles.", answer:"(a) C=2m+3 (b) £19 (c) 9 miles", keywords:["C=2m+3","19","9","formula","miles"], hint:"Fixed charge plus cost per mile" }
      ],
      4: [
        { id:"m4_9", marks:1, type:"mcq", q:"A parallelogram has base 9cm and height 4cm. What is its area?", options:["13 cm²","26 cm²","36 cm²","40 cm²"], answer:"36 cm²", hint:"Area = base × perpendicular height" },
        { id:"m4_10", marks:3, type:"short", q:"Find the exterior angle of a regular octagon. Show your working.", answer:"45°", keywords:["45","360/8","exterior"], hint:"Exterior angles of a polygon add to 360°" },
        { id:"m4_11", marks:5, type:"extended", q:"A compound shape is made from a rectangle 10cm by 6cm with a right triangle of base 4cm and height 6cm attached. (a) Find the total area. (b) Find the perimeter if the triangle's sloping side is 7.2cm.", answer:"(a) 72 cm² (b) 33.2 cm", keywords:["72","33.2","rectangle","triangle","perimeter"], hint:"Area = rectangle area + triangle area" }
      ],
      5: [
        { id:"m5_9", marks:1, type:"mcq", q:"A fair six-sided dice is rolled. What is P(rolling an even number)?", options:["1/6","1/3","1/2","2/3"], answer:"1/2", hint:"Even outcomes are 2, 4 and 6" },
        { id:"m5_10", marks:3, type:"short", q:"The numbers 4, 5, 8, 9, x have a mean of 7. Find x.", answer:"x=9", keywords:["9","total 35","mean"], hint:"Mean × number of values gives the total" },
        { id:"m5_11", marks:5, type:"extended", q:"A survey asks 80 students how they travel to school: 32 walk, 20 bus, 18 car, 10 cycle. (a) Find the relative frequency for bus. (b) Estimate how many bus users in a school of 600. (c) Give one limitation of this estimate.", answer:"(a) 0.25 or 25% (b) 150 (c) Sample may not represent the whole school", keywords:["0.25","25%","150","sample","representative"], hint:"Relative frequency = frequency ÷ total" }
      ],
      6: [
        { id:"m6_9", marks:1, type:"mcq", q:"Which line is parallel to y = 4x − 2?", options:["y=4x+7","y=-4x+2","y=2x+4","y=x+4"], answer:"y=4x+7", hint:"Parallel lines have the same gradient" },
        { id:"m6_10", marks:3, type:"short", q:"Find the gradient between A(1, 4) and B(5, 12).", answer:"2", keywords:["2","8/4","gradient"], hint:"Change in y divided by change in x" },
        { id:"m6_11", marks:5, type:"extended", q:"A line passes through (2, 5) and has gradient 3. (a) Find its equation. (b) Find where it crosses the y-axis. (c) Check that (2,5) lies on your line.", answer:"(a) y=3x-1 (b) -1 (c) 3×2-1=5", keywords:["y=3x-1","-1","check","substitute"], hint:"Use y = mx + c and substitute the point" }
      ],
      7: [
        { id:"m7_9", marks:1, type:"mcq", q:"What are the roots of x² − 4x = 0?", options:["0 and 4","-4 and 0","2 and 2","-2 and 2"], answer:"0 and 4", hint:"Factorise x(x−4)=0" },
        { id:"m7_10", marks:3, type:"short", q:"Complete the square: x² + 6x + 11.", answer:"(x+3)² + 2", keywords:["(x+3)^2+2","(x+3)² + 2","complete square"], hint:"Half of 6 is 3" },
        { id:"m7_11", marks:5, type:"extended", q:"For y=x²−6x+5: (a) factorise, (b) find the roots, (c) find the turning point by completing the square, (d) state whether it is a maximum or minimum.", answer:"(a) (x−1)(x−5) (b) x=1,5 (c) (3,-4) (d) minimum", keywords:["(x-1)(x-5)","1","5","(3,-4)","minimum"], hint:"Complete the square or use symmetry between the roots" }
      ],
      8: [
        { id:"m8_9", marks:1, type:"mcq", q:"Which ratio is used to find an adjacent side when hypotenuse and angle are known?", options:["sin","cos","tan","area"], answer:"cos", hint:"CAH: cos = adjacent / hypotenuse" },
        { id:"m8_10", marks:3, type:"short", q:"A right triangle has an adjacent side of 8cm and angle 35°. Find the hypotenuse to 2 d.p.", answer:"9.77 cm", keywords:["9.77","cos","8/cos35","hypotenuse"], hint:"cos35° = adjacent ÷ hypotenuse" },
        { id:"m8_11", marks:5, type:"extended", q:"A drone is 120m horizontally from a landing point. The angle of depression is 18°. (a) Find the drone's height. (b) Find the direct distance to the landing point. (c) Explain why angle of depression equals angle of elevation.", answer:"(a) 38.99m (b) 126.17m (c) alternate interior angles on parallel horizontal lines", keywords:["38.99","126.17","tan","cos","alternate"], hint:"Draw a right triangle and use tan for height" }
      ],
      9: [
        { id:"m9_9", marks:1, type:"mcq", q:"Which inequality represents 'at least 12'?", options:["x>12","x≥12","x<12","x≤12"], answer:"x≥12", hint:"At least means equal to or more than" },
        { id:"m9_10", marks:3, type:"short", q:"Solve 4x − 7 > 13 and show the solution on a number line in words.", answer:"x > 5", keywords:["x>5","x > 5","open circle","arrow right"], hint:"Add 7 then divide by 4" },
        { id:"m9_11", marks:5, type:"extended", q:"Solve simultaneously: 3x + y = 14 and 2x − y = 1. Then explain what the solution means on a graph.", answer:"x=3, y=5; the lines intersect at (3,5)", keywords:["x=3","y=5","(3,5)","intersection","graph"], hint:"Add the equations to eliminate y" }
      ],
      10: [
        { id:"m10_9", marks:1, type:"mcq", q:"The gradient of y = 5x² at x = 2 is:", options:["10","20","25","40"], answer:"20", hint:"Differentiate first, then substitute x=2" },
        { id:"m10_10", marks:3, type:"short", q:"Prove that the product of two consecutive even numbers is divisible by 8.", answer:"Let the numbers be 2n and 2n+2. Product = 4n(n+1). Since n(n+1) is even, product is a multiple of 8.", keywords:["2n","2n+2","4n(n+1)","consecutive","divisible by 8"], hint:"One of n and n+1 is always even" },
        { id:"m10_11", marks:5, type:"extended", q:"For y = x³ − 3x²: (a) find dy/dx, (b) find stationary points, (c) classify each point using gradient change or second derivative.", answer:"(a) 3x²−6x (b) x=0 and x=2 giving (0,0) and (2,-4) (c) max at (0,0), min at (2,-4)", keywords:["3x²-6x","x=0","x=2","maximum","minimum"], hint:"Set dy/dx = 0" }
      ]
    },

    english: {
      0: [
        { id:"e0_9", marks:1, type:"mcq", q:"Which word is an adjective in: 'The bright moon shone'?", options:["moon","bright","shone","the"], answer:"bright", hint:"An adjective describes a noun" },
        { id:"e0_10", marks:3, type:"short", q:"Read: 'The door creaked open slowly.' What mood is created and which word helps create it?", answer:"A tense or spooky mood is created by 'creaked' and 'slowly'.", keywords:["tense","spooky","creaked","slowly","mood"], hint:"Focus on the feeling created" },
        { id:"e0_11", marks:5, type:"extended", q:"Write a short description of a stormy night using at least one adjective, one verb and one sound image.", answer:"Model answer should include descriptive vocabulary, active verbs and sound imagery such as thunder crashing or rain tapping.", keywords:["adjective","verb","sound","imagery","storm"], hint:"Try to make the reader hear and see the scene" }
      ],
      1: [
        { id:"e1_9", marks:1, type:"mcq", q:"'The wind whispered through the trees' is an example of:", options:["simile","personification","rhyme","fact"], answer:"personification", hint:"The wind is given a human action" },
        { id:"e1_10", marks:3, type:"short", q:"Explain the effect of the simile: 'Her smile was like sunlight after rain.'", answer:"It suggests her smile is warm, hopeful and comforting after sadness or difficulty.", keywords:["warm","hopeful","comforting","after sadness","simile"], hint:"Explain the feeling created, not just the comparison" },
        { id:"e1_11", marks:5, type:"extended", q:"A writer describes a city as 'a restless beast'. Analyse the effect of this metaphor.", answer:"The metaphor makes the city seem alive, powerful and possibly threatening, suggesting constant movement and lack of calm.", keywords:["alive","powerful","threatening","movement","metaphor"], hint:"Think about connotations of 'restless' and 'beast'" }
      ],
      2: [
        { id:"e2_9", marks:1, type:"mcq", q:"A cyclical structure means a text:", options:["has no ending","returns to an idea from the beginning","uses only dialogue","is written in rhyme"], answer:"returns to an idea from the beginning", hint:"Cycle means coming back round" },
        { id:"e2_10", marks:3, type:"short", q:"Why might a writer use a short sentence after a long descriptive paragraph?", answer:"To create impact, tension, shock or a sudden change of pace.", keywords:["impact","tension","shock","pace","contrast"], hint:"Think about how sentence length controls pace" },
        { id:"e2_11", marks:5, type:"extended", q:"Explain how a writer can structure an extract to build suspense. Refer to at least three methods.", answer:"Methods may include delayed information, shifting focus, short sentences, cliff-hangers and gradual zooming in.", keywords:["delayed information","short sentences","cliff-hanger","focus","suspense"], hint:"Structure is about order, pace and focus" }
      ],
      3: [
        { id:"e3_9", marks:1, type:"mcq", q:"A theme is best described as:", options:["a character's name","the main idea explored in a text","the setting only","a punctuation mark"], answer:"the main idea explored in a text", hint:"Love, conflict and power are examples of themes" },
        { id:"e3_10", marks:3, type:"short", q:"A character refuses help even when frightened. What might this reveal about them?", answer:"They may be proud, independent, stubborn or afraid to appear weak.", keywords:["proud","independent","stubborn","weak","character"], hint:"Infer personality from behaviour" },
        { id:"e3_11", marks:5, type:"extended", q:"How can a writer show that a character changes during a story? Give examples of methods.", answer:"A writer can contrast early and later behaviour, dialogue, thoughts, reactions and relationships to show development.", keywords:["contrast","behaviour","dialogue","thoughts","development"], hint:"Track the character from beginning to end" }
      ],
      4: [
        { id:"e4_9", marks:1, type:"mcq", q:"Enjambment in poetry is when:", options:["a line continues into the next line","every line rhymes","a poem has no title","a word is repeated"], answer:"a line continues into the next line", hint:"The sentence runs over the line break" },
        { id:"e4_10", marks:3, type:"short", q:"What could a regular rhyme scheme suggest in a poem about control?", answer:"It may suggest order, control, predictability or restriction.", keywords:["order","control","predictability","restriction","rhyme"], hint:"Link form to meaning" },
        { id:"e4_11", marks:5, type:"extended", q:"Compare how two poems might present conflict differently. Mention language, structure and tone.", answer:"A strong answer compares methods such as violent imagery, rhythm, speaker perspective, tone and structural shifts.", keywords:["compare","imagery","rhythm","tone","structure","conflict"], hint:"Use comparative words: whereas, similarly, however" }
      ],
      5: [
        { id:"e5_9", marks:1, type:"mcq", q:"Which is most suitable for a formal letter?", options:["Hi mate","Yours faithfully","Cheers then","See ya"], answer:"Yours faithfully", hint:"Formal writing uses polite standard phrases" },
        { id:"e5_10", marks:3, type:"short", q:"Give three features of persuasive writing.", answer:"Rhetorical questions, emotive language and direct address.", keywords:["rhetorical question","emotive language","direct address","persuasive"], hint:"Think AFOREST techniques" },
        { id:"e5_11", marks:5, type:"extended", q:"Write the opening of a speech persuading students to reduce plastic waste in school.", answer:"A strong answer should address the audience, state a clear viewpoint, use persuasive techniques and create urgency.", keywords:["audience","viewpoint","plastic","persuasive","urgency"], hint:"Start with a clear argument and direct address" }
      ],
      6: [
        { id:"e6_9", marks:1, type:"mcq", q:"Context means:", options:["the exact number of words","background information around a text","only the ending","the font used"], answer:"background information around a text", hint:"Context can include history, society and writer's life" },
        { id:"e6_10", marks:3, type:"short", q:"Why should context be linked to a writer's message rather than added as a separate fact?", answer:"Because context only earns credit when it helps explain meaning, methods or purpose.", keywords:["meaning","purpose","message","methods","linked"], hint:"Avoid bolt-on context" },
        { id:"e6_11", marks:5, type:"extended", q:"Explain how social context can influence the way a reader understands a character's behaviour.", answer:"Context can reveal expectations, restrictions, beliefs or pressures that shape how a character acts and how readers judge them.", keywords:["expectations","restrictions","beliefs","pressures","reader"], hint:"Connect the historical or social background to interpretation" }
      ],
      7: [
        { id:"e7_9", marks:1, type:"mcq", q:"Which phrase is best for comparison?", options:["This shows","On the other hand","The quote is","The writer uses"], answer:"On the other hand", hint:"Comparison shows similarity or difference" },
        { id:"e7_10", marks:3, type:"short", q:"Write a comparison sentence about two texts: one presents nature as peaceful, the other as dangerous.", answer:"While Text A presents nature as peaceful and restorative, Text B presents it as threatening and uncontrollable.", keywords:["while","whereas","peaceful","dangerous","comparison"], hint:"Use a comparative connective" },
        { id:"e7_11", marks:5, type:"extended", q:"Compare how two writers use language to present fear. Refer to imagery and sentence choices.", answer:"A strong response compares imagery, word choices, sentence length and tone, using evidence from both texts.", keywords:["compare","imagery","sentence","tone","both texts"], hint:"Do not analyse one text fully and forget the other" }
      ],
      8: [
        { id:"e8_9", marks:1, type:"mcq", q:"A podcast script should usually consider:", options:["audience and spoken delivery","only handwriting","no structure","only rhyme"], answer:"audience and spoken delivery", hint:"Spoken language needs to sound natural" },
        { id:"e8_10", marks:3, type:"short", q:"Give two ways a speaker can make a talk more engaging and explain one effect.", answer:"They can use rhetorical questions and varied sentence length; this keeps the audience involved and interested.", keywords:["rhetorical questions","varied sentence","audience","engaging","effect"], hint:"Think about delivery as well as words" },
        { id:"e8_11", marks:5, type:"extended", q:"Write a short radio advert encouraging teenagers to join a reading challenge.", answer:"A strong answer should use direct address, memorable phrasing, persuasive benefits and a clear call to action.", keywords:["direct address","persuasive","benefits","call to action","teenagers"], hint:"Make it sound spoken and energetic" }
      ],
      9: [
        { id:"e9_9", marks:1, type:"mcq", q:"A thesis statement in an essay is:", options:["a random quote","the main argument","the final punctuation mark","a spelling rule"], answer:"the main argument", hint:"It tells the reader your overall view" },
        { id:"e9_10", marks:3, type:"short", q:"Improve this analytical sentence: 'This quote is good because it shows fear.'", answer:"The verb suggests the character is overwhelmed by fear, making the moment feel urgent and dangerous.", keywords:["verb","suggests","fear","urgent","dangerous"], hint:"Name a method and explain the effect" },
        { id:"e9_11", marks:5, type:"extended", q:"Write a high-level paragraph analysing how a writer presents ambition as dangerous.", answer:"A strong answer should include a clear topic sentence, embedded evidence, method analysis, alternative interpretation and link to theme.", keywords:["topic sentence","evidence","method","alternative interpretation","theme"], hint:"Aim for what/how/why" }
      ],
      10: [
        { id:"e10_9", marks:1, type:"mcq", q:"A Grade 9 response usually includes:", options:["only plot summary","precise analysis and conceptual ideas","no evidence","short unsupported points"], answer:"precise analysis and conceptual ideas", hint:"Top answers go beyond what happens" },
        { id:"e10_10", marks:3, type:"short", q:"What is an alternative interpretation and why is it useful?", answer:"It is another possible reading of evidence; it shows depth and critical thinking.", keywords:["another reading","evidence","depth","critical thinking","interpretation"], hint:"One quote can suggest more than one idea" },
        { id:"e10_11", marks:5, type:"extended", q:"Create a mini essay plan for: 'How does the writer present power?' Include thesis, three points and a conclusion idea.", answer:"A strong plan includes an overall argument, three method-led points and a conclusion that returns to the writer's message.", keywords:["thesis","three points","methods","conclusion","writer's message"], hint:"Plan argument first, quotations second" }
      ]
    },

    science: {
      0: [
        { id:"s0_9", marks:1, type:"mcq", q:"Which of these is a source of light?", options:["Moon","Mirror","Sun","Window"], answer:"Sun", hint:"A source produces its own light" },
        { id:"s0_10", marks:3, type:"short", q:"Describe the difference between a solid and a liquid in terms of shape and volume.", answer:"A solid has fixed shape and volume; a liquid has fixed volume but takes the shape of its container.", keywords:["fixed shape","fixed volume","container","liquid","solid"], hint:"Think about whether it flows" },
        { id:"s0_11", marks:5, type:"extended", q:"A student says, 'All changes are permanent.' Explain why this is wrong using melting ice and burning paper as examples.", answer:"Melting ice is reversible because it can freeze again; burning paper is irreversible because new substances form.", keywords:["reversible","irreversible","melting","burning","new substances"], hint:"Compare physical and chemical changes" }
      ],
      1: [
        { id:"s1_9", marks:1, type:"mcq", q:"Which cell structure controls what enters and leaves the cell?", options:["Nucleus","Cell membrane","Cytoplasm","Ribosome"], answer:"Cell membrane", hint:"It forms the boundary of the cell" },
        { id:"s1_10", marks:3, type:"short", q:"Explain why root hair cells are adapted for absorbing water and minerals.", answer:"They have a large surface area and thin walls, helping absorption from the soil.", keywords:["large surface area","thin wall","absorb","water","minerals"], hint:"Adaptation means feature linked to function" },
        { id:"s1_11", marks:5, type:"extended", q:"Compare plant and animal cells. Include at least two similarities and two differences.", answer:"Both have nucleus, cytoplasm and cell membrane. Plant cells also have a cell wall, chloroplasts and a permanent vacuole.", keywords:["nucleus","cytoplasm","membrane","cell wall","chloroplast","vacuole"], hint:"Organise into similarities and differences" }
      ],
      2: [
        { id:"s2_9", marks:1, type:"mcq", q:"The atomic number tells you the number of:", options:["neutrons","protons","shells","compounds"], answer:"protons", hint:"Atomic number = proton number" },
        { id:"s2_10", marks:3, type:"short", q:"Explain why atoms are neutral overall.", answer:"They have equal numbers of positively charged protons and negatively charged electrons.", keywords:["equal","protons","electrons","positive","negative","neutral"], hint:"Charges cancel out" },
        { id:"s2_11", marks:5, type:"extended", q:"An atom has atomic number 11 and mass number 23. (a) Find protons, electrons and neutrons. (b) Identify the element if its symbol is Na. (c) Explain your neutron calculation.", answer:"(a) 11 protons, 11 electrons, 12 neutrons (b) sodium (c) neutrons = mass number − atomic number", keywords:["11 protons","11 electrons","12 neutrons","sodium","mass number"], hint:"Mass number = protons + neutrons" }
      ],
      3: [
        { id:"s3_9", marks:1, type:"mcq", q:"What is the unit of force?", options:["Joule","Newton","Watt","Volt"], answer:"Newton", hint:"Force is measured in N" },
        { id:"s3_10", marks:3, type:"short", q:"A 4kg object accelerates at 3m/s². Calculate the resultant force.", answer:"12 N", keywords:["12","F=ma","4×3","newtons"], hint:"Use F = mass × acceleration" },
        { id:"s3_11", marks:5, type:"extended", q:"A car's velocity changes from 5m/s to 25m/s in 10s. (a) Calculate acceleration. (b) Explain what happens to braking distance if speed increases. (c) Give one factor that affects thinking distance.", answer:"(a) 2m/s² (b) braking distance increases, usually more than proportionally (c) tiredness, alcohol, distractions or reaction time", keywords:["2","acceleration","braking distance","thinking distance","reaction time"], hint:"Acceleration = change in velocity ÷ time" }
      ],
      4: [
        { id:"s4_9", marks:1, type:"mcq", q:"Which component measures current?", options:["Voltmeter","Ammeter","Thermometer","Switch"], answer:"Ammeter", hint:"Current is measured in amps" },
        { id:"s4_10", marks:3, type:"short", q:"Calculate the resistance when potential difference is 12V and current is 3A.", answer:"4 Ω", keywords:["4","ohms","V=IR","12/3"], hint:"Rearrange V = IR" },
        { id:"s4_11", marks:5, type:"extended", q:"Compare series and parallel circuits in terms of current, voltage and what happens if one lamp breaks.", answer:"In series, current is the same and voltage is shared; if one breaks all go off. In parallel, voltage is the same across branches and other lamps can stay on.", keywords:["series","parallel","current","voltage","breaks"], hint:"Think about one path versus branches" }
      ],
      5: [
        { id:"s5_9", marks:1, type:"mcq", q:"A reaction that gives out heat is called:", options:["endothermic","exothermic","neutral","reversible"], answer:"exothermic", hint:"Exo means energy exits" },
        { id:"s5_10", marks:3, type:"short", q:"Describe how to test for carbon dioxide gas.", answer:"Bubble the gas through limewater; it turns cloudy or milky if carbon dioxide is present.", keywords:["limewater","cloudy","milky","carbon dioxide"], hint:"This is a standard gas test" },
        { id:"s5_11", marks:5, type:"extended", q:"Magnesium reacts with hydrochloric acid. (a) Name the products. (b) Describe two observations. (c) Explain how increasing acid concentration affects rate.", answer:"(a) magnesium chloride and hydrogen (b) fizzing, magnesium disappears, temperature may rise (c) higher concentration causes more frequent successful collisions", keywords:["magnesium chloride","hydrogen","fizzing","concentration","collisions"], hint:"Metal + acid → salt + hydrogen" }
      ],
      6: [
        { id:"s6_9", marks:1, type:"mcq", q:"Which organ pumps blood around the body?", options:["Lung","Heart","Kidney","Liver"], answer:"Heart", hint:"It is made of cardiac muscle" },
        { id:"s6_10", marks:3, type:"short", q:"Explain the role of villi in the small intestine.", answer:"Villi increase surface area and have good blood supply for rapid absorption of digested food molecules.", keywords:["surface area","blood supply","absorption","digested food","small intestine"], hint:"Link structure to function" },
        { id:"s6_11", marks:5, type:"extended", q:"Explain how the breathing system is adapted for gas exchange. Include alveoli, diffusion distance and blood supply.", answer:"Alveoli provide large surface area, thin walls give short diffusion distance, and capillaries maintain a concentration gradient.", keywords:["alveoli","surface area","thin walls","diffusion","capillaries","gradient"], hint:"Use the phrase concentration gradient" }
      ],
      7: [
        { id:"s7_9", marks:1, type:"mcq", q:"Which wave is transverse?", options:["Sound in air","Water wave","Compression in spring","Ultrasound"], answer:"Water wave", hint:"Transverse vibrations are perpendicular to travel direction" },
        { id:"s7_10", marks:3, type:"short", q:"A wave has frequency 5Hz and wavelength 2m. Calculate wave speed.", answer:"10 m/s", keywords:["10","v=fλ","5×2","wave speed"], hint:"Use wave speed = frequency × wavelength" },
        { id:"s7_11", marks:5, type:"extended", q:"Explain reflection, refraction and absorption of waves using examples.", answer:"Reflection is bouncing back, refraction is changing direction due to speed change, absorption is energy taken in by a material.", keywords:["reflection","refraction","absorption","speed change","energy"], hint:"Give a clear definition and example for each" }
      ],
      8: [
        { id:"s8_9", marks:1, type:"mcq", q:"A gene is:", options:["a type of cell wall","a section of DNA coding for a feature","a hormone","a mineral"], answer:"a section of DNA coding for a feature", hint:"Genes are found on chromosomes" },
        { id:"s8_10", marks:3, type:"short", q:"Explain why sexual reproduction produces variation.", answer:"It mixes genetic material from two parents, creating offspring with different combinations of alleles.", keywords:["two parents","alleles","genetic material","variation","combinations"], hint:"Compare with cloning/asexual reproduction" },
        { id:"s8_11", marks:5, type:"extended", q:"Explain natural selection using antibiotic resistance in bacteria as an example.", answer:"Random mutations create variation; resistant bacteria survive antibiotics, reproduce and pass on resistance, so the population changes over generations.", keywords:["mutation","variation","survive","reproduce","resistance","generations"], hint:"Use survival and reproduction in your explanation" }
      ],
      9: [
        { id:"s9_9", marks:1, type:"mcq", q:"The force that keeps planets in orbit is:", options:["friction","gravity","magnetism","upthrust"], answer:"gravity", hint:"Gravity acts between masses" },
        { id:"s9_10", marks:3, type:"short", q:"Explain why the Moon orbits the Earth rather than travelling in a straight line.", answer:"Gravity provides a force towards Earth, continually changing the Moon's direction.", keywords:["gravity","force","direction","orbit","Earth"], hint:"An orbit needs a centripetal force" },
        { id:"s9_11", marks:5, type:"extended", q:"Describe evidence for climate change and explain why scientists use long-term data rather than one hot day.", answer:"Evidence includes rising average temperatures, melting ice, sea-level rise and changing weather patterns. Long-term data shows trends and reduces the effect of short-term variation.", keywords:["average temperature","melting ice","sea level","long-term","trend"], hint:"Weather is short term; climate is long term" }
      ],
      10: [
        { id:"s10_9", marks:1, type:"mcq", q:"Which is the best reason to repeat an experiment?", options:["To make it longer","To identify anomalies and improve reliability","To change all variables","To avoid recording results"], answer:"To identify anomalies and improve reliability", hint:"Repeats help check consistency" },
        { id:"s10_10", marks:3, type:"short", q:"Explain the difference between accuracy and precision.", answer:"Accuracy is closeness to the true value; precision is how close repeated measurements are to each other.", keywords:["true value","repeated measurements","close","accuracy","precision"], hint:"A result can be precise but not accurate" },
        { id:"s10_11", marks:5, type:"extended", q:"A student investigates how temperature affects reaction rate. Write a method including independent, dependent and control variables, and one safety point.", answer:"Change temperature, measure rate/time for reaction, control concentration and volume, repeat readings, wear goggles/use care with hot water.", keywords:["temperature","rate","control variables","repeat","goggles","safety"], hint:"Use variables language clearly" }
      ]
    },

    geography: {
      0: [
        { id:"g0_9", marks:1, type:"mcq", q:"Which is a human feature?", options:["River","Mountain","Road","Forest"], answer:"Road", hint:"Human features are made by people" },
        { id:"g0_10", marks:3, type:"short", q:"Explain the difference between weather and climate.", answer:"Weather is day-to-day atmospheric conditions; climate is the average weather over a long period, usually 30 years.", keywords:["day-to-day","average","long period","30 years","climate"], hint:"Weather is short-term; climate is long-term" },
        { id:"g0_11", marks:5, type:"extended", q:"Describe a local area using both physical and human geography. Include at least two examples of each.", answer:"A strong answer includes physical features such as rivers or hills and human features such as roads, houses or shops.", keywords:["physical","human","river","hill","road","houses"], hint:"Separate natural features from human-made features" }
      ],
      1: [
        { id:"g1_9", marks:1, type:"mcq", q:"On an OS map, contour lines show:", options:["temperature","height and relief","population","rainfall"], answer:"height and relief", hint:"Close contours mean steep slopes" },
        { id:"g1_10", marks:3, type:"short", q:"A map scale is 1:50,000. What does this mean?", answer:"1cm on the map represents 50,000cm or 500m on the ground.", keywords:["1cm","500m","50,000cm","scale"], hint:"Convert centimetres to metres" },
        { id:"g1_11", marks:5, type:"extended", q:"Explain how grid references, scale and symbols help a geographer plan a route.", answer:"Grid references locate places, scale estimates distance, and symbols identify features such as roads, rivers and buildings.", keywords:["grid references","scale","symbols","distance","route"], hint:"Explain the usefulness of each map skill" }
      ],
      2: [
        { id:"g2_9", marks:1, type:"mcq", q:"Which instrument measures wind speed?", options:["Rain gauge","Anemometer","Thermometer","Barometer"], answer:"Anemometer", hint:"Anemometers often have cups that spin" },
        { id:"g2_10", marks:3, type:"short", q:"Explain why relief rainfall occurs on mountains.", answer:"Moist air is forced to rise, cools, condenses and forms clouds and rain on the windward side.", keywords:["rises","cools","condenses","windward","rain"], hint:"Air cools as it rises" },
        { id:"g2_11", marks:5, type:"extended", q:"Compare weather in a high-pressure system and a low-pressure system.", answer:"High pressure often brings settled, dry conditions; low pressure often brings clouds, rain and unsettled weather.", keywords:["high pressure","low pressure","dry","rain","settled","unsettled"], hint:"Think sinking air versus rising air" }
      ],
      3: [
        { id:"g3_9", marks:1, type:"mcq", q:"Which process moves sediment along a beach?", options:["Hydraulic action","Longshore drift","Condensation","Urbanisation"], answer:"Longshore drift", hint:"Waves approach at an angle" },
        { id:"g3_10", marks:3, type:"short", q:"Explain how a waterfall forms.", answer:"Hard rock lies over soft rock; soft rock erodes faster, creating an overhang that collapses and the waterfall retreats.", keywords:["hard rock","soft rock","erodes","overhang","retreats"], hint:"Differential erosion is key" },
        { id:"g3_11", marks:5, type:"extended", q:"Evaluate hard engineering as a coastal management strategy. Include one benefit and one problem.", answer:"Hard engineering such as sea walls can protect valuable land but is expensive and may increase erosion elsewhere.", keywords:["sea wall","protect","expensive","erosion elsewhere","evaluate"], hint:"Evaluation needs both strengths and weaknesses" }
      ],
      4: [
        { id:"g4_9", marks:1, type:"mcq", q:"Migration means:", options:["birth rate only","movement of people from one place to another","death rate only","growth of plants"], answer:"movement of people from one place to another", hint:"It can be internal or international" },
        { id:"g4_10", marks:3, type:"short", q:"Give one push factor and one pull factor for migration, explaining each.", answer:"A push factor could be lack of jobs; a pull factor could be better education or employment opportunities.", keywords:["push","pull","jobs","education","opportunities"], hint:"Push away; pull towards" },
        { id:"g4_11", marks:5, type:"extended", q:"Explain how a youthful population structure can create opportunities and challenges for a country.", answer:"It can provide a future workforce but increases pressure on schools, healthcare and future job creation.", keywords:["workforce","schools","healthcare","jobs","youthful"], hint:"Balance positives and negatives" }
      ],
      5: [
        { id:"g5_9", marks:1, type:"mcq", q:"Urbanisation is:", options:["growth in the proportion of people living in towns and cities","decline of farming only","formation of rivers","movement of waves"], answer:"growth in the proportion of people living in towns and cities", hint:"Urban areas are towns and cities" },
        { id:"g5_10", marks:3, type:"short", q:"Explain one cause of traffic congestion in cities.", answer:"Many people commute at similar times, increasing the number of vehicles on limited road space.", keywords:["commute","vehicles","limited road space","congestion"], hint:"Link cause to effect" },
        { id:"g5_11", marks:5, type:"extended", q:"Assess one strategy used to make cities more sustainable.", answer:"Strategies such as public transport, cycle lanes or green spaces can reduce pollution and improve quality of life, but cost and public uptake can limit success.", keywords:["public transport","cycle lanes","green spaces","pollution","sustainable","limit"], hint:"Assess means judge how successful it is" }
      ],
      6: [
        { id:"g6_9", marks:1, type:"mcq", q:"GDP per capita measures:", options:["average income/output per person","total rainfall","number of rivers","life expectancy only"], answer:"average income/output per person", hint:"Per capita means per person" },
        { id:"g6_10", marks:3, type:"short", q:"Explain why one development indicator alone can be misleading.", answer:"It may hide inequalities or ignore other aspects such as health, education, freedom or quality of life.", keywords:["inequality","health","education","quality of life","misleading"], hint:"Development is more than money" },
        { id:"g6_11", marks:5, type:"extended", q:"Evaluate the role of trade in reducing the development gap.", answer:"Trade can create jobs and income, but unfair prices, dependency and profit leakage can limit benefits.", keywords:["jobs","income","unfair prices","dependency","profit leakage","development gap"], hint:"Use both benefits and limitations" }
      ],
      7: [
        { id:"g7_9", marks:1, type:"mcq", q:"The point on Earth's surface directly above an earthquake focus is the:", options:["epicentre","magnitude","plate margin","aftershock"], answer:"epicentre", hint:"Focus is underground; epicentre is above it" },
        { id:"g7_10", marks:3, type:"short", q:"Explain why earthquakes at conservative plate margins can be powerful.", answer:"Plates lock due to friction, stress builds, then is suddenly released as seismic waves.", keywords:["friction","stress builds","released","seismic waves","conservative"], hint:"No crust is created or destroyed" },
        { id:"g7_11", marks:5, type:"extended", q:"Compare primary and secondary effects of a tropical storm, giving examples.", answer:"Primary effects happen immediately, such as deaths and buildings destroyed; secondary effects happen later, such as disease, homelessness and economic disruption.", keywords:["primary","secondary","immediate","later","disease","homelessness"], hint:"Timing is the key difference" }
      ],
      8: [
        { id:"g8_9", marks:1, type:"mcq", q:"A renewable resource is one that:", options:["will never be used by people","can be naturally replenished","is always cheap","only exists underground"], answer:"can be naturally replenished", hint:"Solar and wind are examples" },
        { id:"g8_10", marks:3, type:"short", q:"Explain one advantage and one disadvantage of wind power.", answer:"Wind power is renewable and produces little operational carbon, but it is intermittent and can affect landscapes or wildlife.", keywords:["renewable","low carbon","intermittent","landscape","wildlife"], hint:"Balance benefit and limitation" },
        { id:"g8_11", marks:5, type:"extended", q:"Assess whether recycling is enough to solve resource management problems.", answer:"Recycling reduces waste and demand for raw materials, but reducing consumption, redesigning products and policy changes are also needed.", keywords:["reduces waste","raw materials","consumption","policy","not enough"], hint:"Assess the extent, not just describe recycling" }
      ],
      9: [
        { id:"g9_9", marks:1, type:"mcq", q:"Biodiversity means:", options:["only number of trees","variety of living organisms","average temperature","soil depth only"], answer:"variety of living organisms", hint:"Bio means life" },
        { id:"g9_10", marks:3, type:"short", q:"Explain why tropical rainforests have high biodiversity.", answer:"Warm temperatures, high rainfall and year-round growing conditions support many species and complex food webs.", keywords:["warm","rainfall","year-round","species","food webs"], hint:"Climate supports productivity" },
        { id:"g9_11", marks:5, type:"extended", q:"Evaluate one strategy for managing tropical rainforests sustainably.", answer:"Selective logging, ecotourism or protected areas can reduce damage while supporting income, but enforcement and economic pressures can limit success.", keywords:["selective logging","ecotourism","protected areas","income","enforcement","sustainable"], hint:"Evaluation needs success and limits" }
      ],
      10: [
        { id:"g10_9", marks:1, type:"mcq", q:"A pilot study is useful because it:", options:["replaces all fieldwork","tests methods before the main investigation","removes the need for data","guarantees perfect results"], answer:"tests methods before the main investigation", hint:"Pilot means trial run" },
        { id:"g10_10", marks:3, type:"short", q:"Explain why a larger sample size can improve a fieldwork investigation.", answer:"It can make results more representative and reduce the impact of anomalies.", keywords:["representative","anomalies","sample size","reliable"], hint:"More data can reduce random error" },
        { id:"g10_11", marks:5, type:"extended", q:"Design a fieldwork enquiry question about urban quality of life. Include data collection method, sampling and one limitation.", answer:"Example: 'How does quality of life vary with distance from the town centre?' Use environmental quality surveys at systematic intervals; limitation could be subjectivity or small sample size.", keywords:["enquiry question","quality of life","systematic","sampling","limitation"], hint:"Make the question measurable" }
      ]
    }
  };

  Object.entries(extensions).forEach(([subjectKey, levels]) => {
    const subject = QUESTION_BANK[subjectKey];
    if (!subject || !subject.levels) return;

    Object.entries(levels).forEach(([levelKey, newQuestions]) => {
      const level = subject.levels[levelKey];
      if (!level || !Array.isArray(level.questions)) return;

      const existingIds = new Set(level.questions.map(q => q.id));
      newQuestions.forEach(question => {
        if (!existingIds.has(question.id)) {
          level.questions.push(question);
        }
      });
    });
  });
})();
