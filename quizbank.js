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

                "hard_a":["Vatican City","Andorra","Luxemburg","Vatican City","Darien Gap"],

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

                "medium":["What act freed slaves throughout the US?",
                "Which captured German scientist helped the US win WWII against Japan?",
                "Which US Army General was fired by Harry Truman in the Korean War?",
                "What pioneering female pilot was seen as a symbol of feminism?",
                "Who was the first black American to be appointed to the Supreme Court?"],

                "medium_a":["Emancipation Proclomation","Robert Oppenheimer","Douglas MacArthur", "Amelia Earhardt","Thurgood Marshall"],

                "medium_mc":[["Civil Rights Act","11th Ammendment","15th Ammendment","Emancipation Proclomation"],
                ["Wilhelm II","Robert Oppenheimer","",""],
                ["General MacArthur","General Patton","General Westmoreland","General Adams"],
                ["Betsy Ross","Amelia Earhardt","Thurgood Marshall", "Henrietta Lynch"],
                ["Thurgood Marshall","Frederick Douglas","Clarence Thomas","Millard Fillmore"]],

                "hard":["Which US President died one month after taking office?",
                "Which US President was a serial failure prior to re-joining the Military in the Civil War?",
                "Which Constitutional Amendment gave women the right to vote?",
                "Which US Civil Rights leader defiantly walked across the Edmunds Pettis Bridge?",
                "Which war does the 'Gulf of Tonkin' relate to?"],

                "hard_a":["William Henry Harrison","Ulysses S Grant","19th","John Lewis","Vietnam"],

                "hard_mc":[["William Henry Harrison","JFK","Abraham Lincoln","FDR"],
                [],
                [],
                [],
                []]
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
                "easy_a":["1945","1914","Homer","Shinzo Abe","Winston Churchill"],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Which country was NOT one of the seven countries that invaded Israel in 1948?",
                "What ancient society was primarily composed of city-states?",
                "Who was India's first President?",
                "What country was Eva Peron from?",
                "When did the Berlin Wall come down?"
            ],
                "medium_a":["Turkey","Greece","Jawaharlal Nehru","Argentina","1989"],
                "medium_mc":[[],[],[],[],[]],
                "hard":["Who was the Assassin that started WWI?",
                "What empire ruled modern day Lebanon until 1917?",
                "Which Gallic leader fought against Julius Ceasar?",
                "Who led Egypt in the 1973 Yom Kippur War?",
                "Who was Taiwan's first leader?"
            ],
                "hard_a":["Gavrilo Princip","Ottoman","Vercingetorix","Gamal Abdel Nasser","Sun Yat-sen"],
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
                "easy_a":["Democratic","Republican","Alexandra Ocasio-Cortez","Al Gore","Congress"],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Which branch of government has 'Original Jurisdiction'?",
                "Who was the Republic nominee for the General Election in 2012?",
                "Who is the current Secretary of State?",
                "Which State has the most Electoral College votes?",
                "Who is the leader of the Senate?"],
                "medium_a":["Supreme Court","Mitt Romney","Antony Blinken","California","Vice President"],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What is the name of the legislation known as 'Obamacare?'",
                "Which branch controls the 'power of the purse'?",
                "What is the term length for the House and Senate?",
                "What is the term length in the Supreme Court?",
                "What ammendment guarantees protection from unwarranted search and seizure?"],
                "hard_a":["Affordable Care Act","Congress","2 and 6 years","Life","4th"],
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
                "easy_a":["Justin Trudeau","Rishi Sunak","Germany","France","United Nations"],
                "easy_mc":[[],[],[],[],[]],
                "medium":["What are the extremes of the political spectrum called?",
                "Which country is NOT part of the 5 permanent members of the UN Security Council?",
                "What is the type of democracy that elects representatives to represent the public?",
                "Who was the most popular opposition candidate to Vladimir Putin?",
                "Who is the current leader of India?"],
                "medium_a":["Communism and Facism","Germany","Republican","Alexei Navalny","Narendra Modi"],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What is it called when a minority group rules over a country's majority?",
                "What international agreement created the State of Israel and Palestine in 1947?",
                "What is the title of the UN's leader?",
                "Who is the current General Secretary of the UN?",
                "What are the two major political parties in the UK?"
            ],
                "hard_a":["Apartheid","UN Resolution 292","General Secretary","Antonio Guteres","Labour and Conservative"],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "economics":{
            "levels":{
                "easy":["Who came up with 'Laissez-Faire Economics?",
                "What two curves typically make up a market?",
                "Which direction does the Supply Curve slope with respect to Price and Quantity?",
                "What direction does the Demand Curve slope with respect to Price and Quantity?",
                "What is the relationship between price and quantity?"],
                "easy_a":["Adam Smith","Supply and Demand","Upward","Downward","Inverse"],
                "easy_mc":[[],[],[],[],[]],
                "medium":["Who controls US Monetary Policy?",
                "Which economist championed 'supply-side' Economics?",
                "Which economist championed 'demand-side' Economics?",
                "What is the 'price of money'?",
                "Who controls US Fiscal Policy?"],
                "medium_a":["Federal Reserve","Milton Friedman","John Maynard Keynes","Interest Rate","Federal Government"],
                "medium_mc":[[],[],[],[],[]],
                "hard":["Which US political party supports 'supply-side' Economics?",
                "What are the effects of a Tariff?",
                "If interest rates go up in a country how does that effect their foreign exchange rates?",
                "If interest rates go down, what happens to Aggregate Demand?",
                "If interest rates go down, what happens to the Stock Market?"],
                "hard_a":["Republicans","Deadweight Loss","Domestic Currency Strengthens","Increases","Prices Go Up"],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "finance":{
            "levels":{
                "easy":["What are the two major asset classes?",
                "What is the asset class does a bond belong to?",
                "What asset class does a Common Stock belong to?",
                "What is the name of the largest Stock Exchange?",
                "What does ETF stand for?"],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["What measures a bond's price sensitivity to interest rates?",
                "Which of the following are multiplied to determine Market Value?",
                "What asset class do Preferred Stocks belong to?",
                "Is a warrant an Equity or Fixed Income instrument?",
                "What is the term for bonds issued by local governments?"],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["Which of the following is not a security identifier?",
                "Would you 'Call' ot 'Put' a stock that you believe will go down?",
                "Would you go 'Long' or 'Short' a stock that you think will go up?",
                "What happens when an investor is forced to buy shares at a high price to pay back their short?",
                "Which of the following is not a US-based Stock Market?"],
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

                "easy_a":["Socrates","Socrates","Ayn Rand","George Orwell","Ayn Rand"],

                "easy_mc":[["Socrates","Homer","Plato","Aristotle"],
                ["Socrates","Homer","Plato","Aristotle"],
                ["Ayn Rand","Karl Marx","Vladimir Lenin","Leon Trotsky"],
                ["Ayn Rand", "George Orwell","Karl Marx","Michel Foucault"],
                ["Ayn Rand","George Orwell", "Karl Marx","Michel Foucault"]],

                "medium":["Who came up with the Theory of Relativity?",
                "What economic concept did 'Animal Farm' criticize?",
                "What political concept did '1984' criticize?",
                "What are the two major Economic philosophies?",
                "Who came up with the concept of a social contract?"],

                "medium_a":["Albert Einstein","Communism","Totalitarianism","Communism and Capitalism","John Locke"],
            
                "medium_mc":[["Isaac Newton","Tycho Brahe","Albert Einstein","Leonardo da Vinci"],
                ["Capitalism","Communism","Socialism","Jingoism"],
                ["Totalitarianism","Monarchy","Fascism","Demoracy"],
                ["Capitalism and Socialism","Capitalism and Communism", "Communism and Fascism","Anarchism and Fascism"],
                ["Macchiavelli","John Locke","Michel Foucault","Emile Durkheim"]],

                "hard":["What relationship does the social contract seek to explain?",
                "Which philosopher published on 'Collective Effervescence'?",
                "What philosopher explored the relationship between workers and capital?",
                "Which economic philosopher inspired Charles Darwin's theory of Natural Selection?",
                "Which Holocaust surviver, author and philosopher focuses on genocide?"],

                "hard_a":["John Locke","Emile Durkheim","Karl Marx","Thomas Malthus","Ellie Weisel"],

                "hard_mc":[[],[],[],[],[]]
            }
        },
        "sports":{
            "levels":{
                "easy":["Which sport is not one of the major four in the US?",
                "What is 'soccer' called in non-US countries?",
                "Which of the following is played on ice?",
                "Which sport has a quarterback position?",
                "Which of these sports does NOT have a goalie?"],
                "easy_a":[],
                "easy_mc":[[],[],[],[],[]],
                "medium":["How many teams make the NCAA Tournament?",
                "How many teams make the College Football Playoff?",
                "What is the tournament that determines 'the best football club in Europe'?",
                "What is the game prior to the Superbowl called?",
                "Which of these cities do NOT have two professional baseball teams?"],
                "medium_a":[],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What is the name of the Superbowl Trophy?",
                "Which of these sports involves penalties where one team loses a player temporarily?",
                "What is the official name of a shot in basketall?",
                "What is Fenway Park famous for?",
                "What position is typically shorter and handles the ball the most in basketball?"],
                "hard_a":[],
                "hard_mc":[[],[],[],[],[]]
            }
        },
        "movies":{
            "levels":{
                "easy":["What is the name of the movie series based on animated toys?",
                "What is the name of the 2005 movie featuring animated penguins, lemurs and lions?",
                "What movie series is based on a boy wizard in Britain?",
                "What move is 'Here's Johnny' from?",
                "What children's movie features a green animated ogre?"],
                "easy_a":["Toy Story","Madagascar","Harry Potter","The Shining","Shrek"],
                "easy_mc":[[],[],[],[],[]],
                "medium":["What WWII movie was Tom Hanks a main character in?",
                "What 'Coming of Age' movie features a character named Benny 'The Jet' Rodriguez?",
                "What 80's movie features a group of different teens bonding in detention?",
                "What Leonardo Dicapprio movie features a young Margot Robie?",
                "What fictional character did Gal Gadot play?"
                ],
                "medium_a":["Saving Private Ryan","Sandlot","Breakfast Club","Wolf of Wall Street","Wonder Woman"],
                "medium_mc":[[],[],[],[],[]],
                "hard":["What movie is based on Harper Lee's book?",
                "What movie features a group of four young friends who die in WWI serving the Keiser?",
                "What Vietnam movie features Charlie Sheen?",
                "What 2000's movie focuses on the dystopian impacts of Climate Change?",
                "Which Boston based movie features Matt Damon as a corrupt police officer?"],
                "hard_a":["To Kill a Mockingbird","All Quiet on the Western Front","Platoon","The Day After Tomorrow","The Departed"],
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
