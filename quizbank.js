let storedAnswers = [];

const queryString = window.location.search;

const params = new URLSearchParams(queryString);
//console.log(params);

const topic = params.get('topic');
console.log(topic);
const level = params.get('level');
console.log(level);

const quiz_check = new Set ()

const quiz_bank = {
    "topic":{
        "geography":{
                "levels":{
                    "easy":
                    ["What is the capitol of New York?",
                    "What is the capitol of Oklahoma?",
                    "What is the capitol of Massachusetts?",
                    "What is the capitol of Texas?",
                    "What is the capitol of Arizona?"
                    ],
                    "easy_a":
                    ["Albany","Oklahoma City","Boston","Austin","Pheonix"],
                    "easy_mc":[
                        ["Albany","New York City","Buffalo","Syracuse"],
                        ["Tulsa","Oklahoma City","Norman","Denton"],
                        ["Amherst","Salem","Boston","Cambridge"],
                        ["Dallas","Houston","Corpus Christi","Austin"],
                        ["Pheonix","Tempe","Sedona","Flagstaff"]],

                    "medium":
                    ["What is the capitol of Michigan?",
                    "What is the capitol of Illinois?",
                    "What is the capitol of Wisconsin?",
                    "What is the capitol of California?",
                    "What is the capitol of Florida?"
                ],

                    "medium_a":["Lansing","Springfield","Madison","Sacramento","Tallahassee"],
                    "medium_mc":[
                        ["Detroit","Flint","Lansing","Ann Arbor"],
                        ["Chicago","Springfield","Lake Zurich","Urbana"],
                        ["Madison","Green Bay","Milwaukee","La Pierre"],
                        ["Los Angeles","San Francisco","Sacramento", "San Diego"],
                        ["Miami","Coral Gables","Orlando","Tallahassee"]],
                    "hard":
                        ["What is the capitol of Idaho?",
                        "What is the capitol of North Dakota?",
                        "What is the capitol of South Dakota?",
                        "What is the capitol of Wyoming?",
                        "What is the capitol of New Mexico?"],
                    "hard_a":["Boise","Bismarck","Pierre","Cheyenne","Santa Fe"],
                    "hard_mc":[
                        ["Boise","Idaho Falls","Moscow","Twin Falls"],
                        ["Fargo","Bismarck","Minot","Grand Forks"],
                        ["Sioux Falls","Rapid City","Sturgis","Pierre"],
                        ["Jackson","Cheyenne","Casper","Cody"],
                        ["Albuquerque","Las Cruces","Santa Fe","Roswell"]
                    ]
                    }
                },
        "world_geography":{
            "levels":{
                "easy":["What is the capitol of Spain?",
                "What is the largest country by land mass?",
                "What is the most populated country?",
                "What country is NOT in North America?",
                "What is the capitol of Mexico?"],

                "easy_a":["Madrid","Russia","India","Belize","Mexico City"],

                "easy_mc":[["Barcelona","Madrid","Valencia","Grenada"],
                ["Russia","USA","China","India"],
                ["Brazil","USA","China","India"],
                ["Canada","USA","Mexico","Ecuador"],
                ["Mexico City","Cancun","Playa del Carmen","Cabo"]],

                "medium":["What is the most populated country in Western Europe?",
                "What is the only Jewish majority country in the world?",
                "What is the most populated country in Africa?",
                "What country surrounds the Suez Canal?",
                "What city straddles both Europe and Asia?"],

                "medium_a":["Germany","Israel","Nigeria","Egypt","Istanbul"],

                "medium_mc":[["France","Germany","Spain","Portugal"],
                ["Eritrea","Rwanda","Israel","Palestine"],
                ["Ethiopia", "South Africa","Egypt","Nigeria"],
                ["Turkey","Qatar","Egypt","Morocco"],
                ["Moscow","Athens","Istanbul","Kyiv"]],

                "hard":["What is the smallest country in Europe by land mass?",
                "What microstate is between France and Spain in the Pyrenes?",
                "What country in Europe is named after a historically influential woman named 'Rosa'?",
                "What is the smallest country in the world by land mass?",
                "What is the name of the uninhabited land between Central and South America?"],

                "hard_a":["Vatican City","Andorra","Luxemburg","Vatican City",""],

                "hard_mc":[["Monaco","Vatican City","Croatia","Luxemburg"],
                ["Andorra","Micronesia","Luxemburg","Judea"],
                ["Bulgaria","Romania","Luxemburg","Andorra"],
                ["Monaco","Vatican City","Croatia","Luxemburg"],
                ["Ngev Desert","Panama Gap","Darien Gap","Andes Mountains"]]
        }
    },
        "historical_geography":{
            "levels":{
                "easy":["What empire was the USA previously a colony of?",
                "What empire was South Africa a colony of?",
                "What ancient civilization built the Pyramids?",
                "What was the 'super continent' called?",
                "What European empire did Florida first belong to?"],

                "easy_a":["Great Britain","Great Britain","Egyptians","Pangea","Spain"],
                
                "easy_mc":[["France","Great Britain","Spain","Portugal"],
                ["France","Great Britain","Spain","Portugal"],
                ["Greek","Roman","Egyptian","Gaelic"],
                ["Pangea","Adastra","Geogea","Eurasia"],
                ["France","Great Britain","Spain","Portugal"]],

                "medium":["Which country is surrounded by South Africa?",
                "What country was divided into East and West following WWII?",
                "What city was divided into four sectors following WWII?",
                "What country is the Alps not in?",
                "Which language is spoken in Brazil?"],

                "medium_a":["Lesotho","Germany","Berlin","Spain","Portuguese"],
                
                "medium_mc":[["Botswana","Lesotho","Zimbabwe","Namibia"],
                ["Vietnam","France","Germany","Austria"],
                ["Vienna","Budapest","Paris","Berlin"],
                ["France","Italy","Austria","Spain"],
                ["Spanish","English","Portuguese","Catalan"]],

                "hard":["What historical kingdom was Barcelona in?",
                "What country was not part of the Holy Roman Empire?",
                "Which Arab invasion of Israel shaped its modern borders?",
                "Which empire encompassed most of the Middle East before 1917?",
                "What is the most recent new country?"],

                "hard_a":["Catalonia","Denmark","1967 Arab Invasion","Ottoman","South Sudan"],

                "hard_mc":[["Spain","Venice","Catalonia","Transjordan"],
                ["Germany","Poland","Italy","Spain"],
                ["1948 Independence War","Arab Invasion of 1967","1973 Yom Kippur War","Second Intifada 2000-05"],
                ["Ottoman","Greek","Great Britain","Iranian"],
                ["New Guinea","Myanmar","South Sudan","Niger"]]
            }
        },
        "US_history":{
            "levels":{
                "easy":["Who was the first President?",
                "Who was the president during the Civil War?",
                "Which president served four terms?",
                "Which state was not one of the original 13 colonies?",
                "Who was the first person to make an American flag?"],

                "easy_a":["George Washington","Abraham Lincoln","FDR","Florida","Betsy Ross"],

                "easy_mc":[["George Washington","Thomas Jefferson","Sam Adams","James Madison"],
                ["Abraham Lincoln","FDR","Ulysses S Grant","Harry Truman"],
                ["TDR","JFK","FDR","Herbert Hoover"],
                ["New York","Vermont","Georgia","Florida"],
                ["Sybil Ludington","Betsy Ross","Molly Pither","Abigail Adams"]],

                "medium":[],

                "medium_a":[],

                "medium_mc":[[],[],[],[],[]],

                "hard":[],

                "hard_a":[],

                "hard_mc":[[],[],[],[],[]]
            }
        },
        "world_history":{
            "levels":{
                "easy":["What year did WWII end?",
                "What year did WWI start?",
                "Which Greek philosopher authored 'Homer's Illiad'?",
                "Which Japanese President was recently assassinated?",
                "Who led Britain during WWII?"
                ],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Which country was NOT one of the seven countries that invaded Israel in 1948?",
                "What ancient society was primarily composed of city-states?",
                "Who was India's first President?",
                "What country was Eva Peron from?",
                "When did the Berlin Wall come down?"
            ],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["Who came up with the concept of a social contract?",
                "What empire ruled modern day Lebanon until 1917?",
                "Which Gallic leader fought against Julius Ceasar?",
                "Who led Egypt in the 1973 Yom Kippur War?",
                "Who was Taiwan's first leader?"
            ],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "US_politics":{
            "levels":{
                "easy":["What party does Barack Obama belong to?",
                "What party does Donald Trump belong to?",
                "Which current NY Congresswoman was previously a waitress before taking office?",
                "Who nearly won the 2000 US Presidential Election?",
                "Who passes bills into law?"],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Which branch of government has 'Original Jurisdiction'?",
                "Who nearly won the 2000 US Presidential Election?",
                "Who is the current Secretary of State?",
                "Which State has the most Electoral College votes?",
                "Who is the leader of the Senate?"],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What is the name of the legislation known as 'Obamacare?'",
                "Which branch controls the 'power of the purse'?",
                "What is the term length for the House and Senate?",
                "What is the term length in the Supreme Court?",
                "What ammendment guarantees protection from unwarranted search and seizure?"],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "world_politics":{
            "levels":{
                "easy":["Who is the President of Canada?",
                "Who is the Prime Minister of the UK?",
                "What country did Angela Merkel govern?",
                "Which of the following countries are a democracy?",
                "What international organization deploys Peacekeepers?"
                ],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["What are the extremes of the political spectrum called?",
                "Which country is NOT part of the 5 permanent members of the UN Security Council?",
                "What is the type of democracy that elects representatives to represent the public?",
                "Who was the most popular opposition candidate to Vladimir Putin?",
                "Who is the current leader of India?"],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What is it called when a minority group rules over a country's majority?",
                "What international agreement created the State of Israel and Palestine in 1947?",
                "What is the title of the UN's leader?",
                "Who is the current General Secretary of the UN?",
                "What are the two major political parties in the UK?"
            ],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "economics":{
            "levels":{
                "easy":["Who came up with 'Laissez-Faire Economics?",
                "What two curves typically make up a market?",
                "Which direction does the Supply Curve slope?",
                "What direction does the Demand Curve slope?",
                "What is the relationship between price and quantity?"],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Who controls US Monetary Policy?",
                "Which economist championed 'supply-side' Economics?",
                "Which economist championed 'demand-side' Economics?",
                "What is the 'price of money'?",
                "Who controls US Fiscal Policy?"],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["Which US political party supports 'supply-side' Economics?",
                "What are the effects of a Tariff?",
                "If interest rates go up, how does that effect foreign exchange rates?",
                "If interest rates go down, what happens to Aggregate Demand?",
                "If interest rates go down, what happens to the Stock Market?"],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "finance":{
            "levels":{
                "easy":[],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":[],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":[],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "philosopghy":{
            "levels":{
                "easy":["Which Greek philosopher came up with the 'Socratic Method'?",
                "Who said 'a wise man knows that he knows nothing'?",
                "Which philosopher/author advocated for capitalism?",
                "Who wrote 1984?",
                "Who wrote Anthem?"],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Who came up with the Theory of Relativity?",
                "What economic concept did 'Animal Farm' criticize?",
                "What political concept did '1984' criticize?",
                ""],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":[],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "sports":{
            "levels":{
                "easy":[],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":[],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":[],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "music":{
            "levels":{
                "easy":[],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":[],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":[],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        }
}
}

let user_answers = ['','','','',''];
console.log(quiz_bank['topic'])
let real_answers = quiz_bank["topic"][topic]["levels"][level + "_a"];
console.log(real_answers)
let right_counter = 0;
let wrong_counter = 0;
let total_counter = 0;
if (total_counter != 0){
    let percentage = (right_counter/total_counter);
}
else {
    let percentage = 0;
}
