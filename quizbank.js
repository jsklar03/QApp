let storedAnswers = [];
let total_num = [];
let right_num = [];
let wrong_num = [];

let total_right_num = 0;
let total_wrong_num = 0;

let right_counter = 0;
let wrong_counter = 0;
let total_counter = 0;
let percentage = 0;
let scores = [total_counter,right_counter,wrong_counter];

if (total_counter != 0){
    percentage = (right_counter/total_counter);
}
else {
    percentage = 0;
}

const queryString = window.location.search;

const params = new URLSearchParams(queryString);
//console.log(params);

const topic = params.get('topic');

const level = params.get('level');

const quiz_bank = {
    "topic":{
        "Geography":{
                "levels":{
                    "Easy":
                    ["What is the capitol of New York?",
                    "What is the capitol of Oklahoma?",
                    "What is the capitol of Massachusetts?",
                    "What is the capitol of Texas?",
                    "What is the capitol of Arizona?"
                    ],
                    
                    "Easy_a":
                    ["Albany","Oklahoma City","Boston","Austin","Pheonix"],
                    
                    "Easy_mc":[
                        ["Albany","New York City","Buffalo","Syracuse"],
                        ["Tulsa","Oklahoma City","Norman","Denton"],
                        ["Amherst","Salem","Boston","Cambridge"],
                        ["Dallas","Houston","Corpus Christi","Austin"],
                        ["Pheonix","Tempe","Sedona","Flagstaff"]],

                    "Medium":
                    ["What is the capitol of Michigan?",
                    "What is the capitol of Illinois?",
                    "What is the capitol of Wisconsin?",
                    "What is the capitol of California?",
                    "What is the capitol of Florida?"
                ],

                    "Medium_a":["Lansing","Springfield","Madison","Sacramento","Tallahassee"],
                    
                    "Medium_mc":[
                        ["Detroit","Flint","Lansing","Ann Arbor"],
                        ["Chicago","Springfield","Lake Zurich","Urbana"],
                        ["Madison","Green Bay","Milwaukee","La Pierre"],
                        ["Los Angeles","San Francisco","Sacramento", "San Diego"],
                        ["Miami","Coral Gables","Orlando","Tallahassee"]],
                    
                    "Hard":
                        ["What is the capitol of Idaho?",
                        "What is the capitol of North Dakota?",
                        "What is the capitol of South Dakota?",
                        "What is the capitol of Wyoming?",
                        "What is the capitol of New Mexico?"],
                    
                    "Hard_a":["Boise","Bismarck","Pierre","Cheyenne","Santa Fe"],
                    
                    "Hard_mc":[
                        ["Boise","Idaho Falls","Moscow","Twin Falls"],
                        ["Fargo","Bismarck","Minot","Grand Forks"],
                        ["Sioux Falls","Rapid City","Sturgis","Pierre"],
                        ["Jackson","Cheyenne","Casper","Cody"],
                        ["Albuquerque","Las Cruces","Santa Fe","Roswell"]
                    ]
                    }
                },
        "World Geography":{
            "levels":{
                "Easy":["What is the capitol of Spain?",
                "What is the largest country by land mass?",
                "What is the most populated country?",
                "What country is NOT in North America?",
                "What is the capitol of Mexico?"],

                "Easy_a":["Madrid","Russia","India","Ecuador","Mexico City"],

                "Easy_mc":[["Barcelona","Madrid","Valencia","Grenada"],
                ["Russia","USA","China","India"],
                ["Brazil","USA","China","India"],
                ["Canada","USA","Mexico","Ecuador"],
                ["Mexico City","Cancun","Playa del Carmen","Cabo"]],

                "Medium":["What is the most populated country in Western Europe?",
                "What is the only Jewish majority country in the world?",
                "What is the most populated country in Africa?",
                "What country surrounds the Suez Canal?",
                "What city straddles both Europe and Asia?"],

                "Medium_a":["Germany","Israel","Nigeria","Egypt","Istanbul"],

                "Medium_mc":[["France","Germany","Spain","Portugal"],
                ["Eritrea","Rwanda","Israel","Palestine"],
                ["Ethiopia", "South Africa","Egypt","Nigeria"],
                ["Turkey","Qatar","Egypt","Morocco"],
                ["Moscow","Athens","Istanbul","Kyiv"]],

                "Hard":["What is the smallest country in Europe by land mass?",
                "What microstate is between France and Spain in the Pyrenes?",
                "What country in Europe is named after a historically influential woman named 'Rosa'?",
                "What is the smallest country in the world by land mass?",
                "What is the name of the uninhabited land between Central and South America?"],

                "Hard_a":["Vatican City","Andorra","Luxemburg","Vatican City","Darien Gap"],

                "Hard_mc":[["Monaco","Vatican City","Croatia","Luxemburg"],
                ["Andorra","Micronesia","Luxemburg","Judea"],
                ["Bulgaria","Romania","Luxemburg","Andorra"],
                ["Monaco","Vatican City","Croatia","Luxemburg"],
                ["Ngev Desert","Panama Gap","Darien Gap","Andes Mountains"]]
            },
        },
        "Historical Geography":{
            "levels":{
                "Easy":["What empire was the USA previously a colony of?",
                "What empire was South Africa a colony of?",
                "What ancient civilization built the Pyramids?",
                "What was the 'super continent' called?",
                "What European empire did Florida first belong to?"],

                "Easy_a":["Great Britain","Great Britain","Egyptian","Pangea","Spain"],
                
                "Easy_mc":[["France","Great Britain","Spain","Portugal"],
                ["France","Great Britain","Spain","Portugal"],
                ["Greek","Roman","Egyptian","Gaelic"],
                ["Pangea","Adastra","Geogea","Eurasia"],
                ["France","Great Britain","Spain","Portugal"]],

                "Medium":["Which country is surrounded by South Africa?",
                "What country was divided into East and West following WWII?",
                "What city was divided into four sectors following WWII?",
                "What country is the Alps not in?",
                "Which language is spoken in Brazil?"],

                "Medium_a":["Lesotho","Germany","Berlin","Spain","Portuguese"],
                
                "Medium_mc":[["Botswana","Lesotho","Zimbabwe","Namibia"],
                ["Vietnam","France","Germany","Austria"],
                ["Vienna","Budapest","Paris","Berlin"],
                ["France","Italy","Austria","Spain"],
                ["Spanish","English","Portuguese","Catalan"]],

                "Hard":["What historical kingdom was Barcelona in?",
                "What country was not part of the Holy Roman Empire?",
                "Which Arab invasion of Israel shaped its modern borders?",
                "Which empire encompassed most of the Middle East before 1917?",
                "What is the most recent new country?"],

                "Hard_a":["Catalonia","Denmark","1967 Arab Invasion","Ottoman","South Sudan"],

                "Hard_mc":[["Spain","Venice","Catalonia","Transjordan"],
                ["Germany","Poland","Italy","Spain"],
                ["1948 Independence War","Arab Invasion of 1967","1973 Yom Kippur War","Second Intifada 2000-05"],
                ["Ottoman","Greek","Great Britain","Iranian"],
                ["New Guinea","Myanmar","South Sudan","Niger"]]
            }
        },
        "US History":{
            "levels":{
                "Easy":["Who was the first President?",
                "Who was the president during the Civil War?",
                "Which president served four terms?",
                "Which state was not one of the original 13 colonies?",
                "Who was the first person to make an American flag?"],

                "Easy_a":["George Washington","Abraham Lincoln","FDR","Florida","Betsy Ross"],

                "Easy_mc":[["George Washington","Thomas Jefferson","Sam Adams","James Madison"],
                ["Abraham Lincoln","FDR","Ulysses S Grant","Harry Truman"],
                ["TDR","JFK","FDR","Herbert Hoover"],
                ["New York","Vermont","Georgia","Florida"],
                ["Sybil Ludington","Betsy Ross","Molly Pither","Abigail Adams"]],

                "Medium":["What act freed slaves throughout the US?",
                "Which captured German scientist helped the US win WWII against Japan?",
                "Which US Army General was fired by Harry Truman in the Korean War?",
                "What pioneering female pilot was seen as a symbol of feminism?",
                "Who was the first black American to be appointed to the Supreme Court?"],

                "Medium_a":["Emancipation Proclomation","Robert Oppenheimer","Douglas MacArthur", "Amelia Earhardt","Thurgood Marshall"],

                "Medium_mc":[["Civil Rights Act","11th Ammendment","15th Ammendment","Emancipation Proclomation"],
                ["Wilhelm II","Robert Oppenheimer","George Scholz","John Steinbeck"],
                ["General MacArthur","General Patton","General Westmoreland","General Adams"],
                ["Betsy Ross","Amelia Earhardt","Thurgood Marshall", "Henrietta Lynch"],
                ["Thurgood Marshall","Frederick Douglas","Clarence Thomas","Millard Fillmore"]],

                "Hard":["Which US President died one month after taking office?",
                "Which US President was a serial failure prior to re-joining the Military in the Civil War?",
                "Which Constitutional Amendment gave women the right to vote?",
                "Which US Civil Rights leader defiantly walked across the Edmunds Pettis Bridge?",
                "Which war does the 'Gulf of Tonkin' relate to?"],

                "Hard_a":["William Henry Harrison","Ulysses S Grant","19th","John Lewis","Vietnam"],

                "Hard_mc":[["William Henry Harrison","JFK","Abraham Lincoln","FDR"],
                ["William Sherman","Ulysses S Grant","General Burnside","Abraham Lincoln"],
                ["13th","14th","20th","19th"],
                ["MLK","Malcolm X","John Lewis","Rosa Parks"],
                ["WWII","Korean War","War of 1812","Vietnam"]]
            }
        },
        "World History":{
            "levels":{
                "Easy":["What year did WWII end?",
                "What year did WWI start?",
                "Which Greek philosopher authored 'Homer's Illiad'?",
                "Which Japanese President was recently assassinated?",
                "Who led Britain during the end of WWII?"
                ],

                "Easy_a":["1945","1914","Homer","Shinzo Abe","Winston Churchill"],

                "Easy_mc":[["1918","1944","1946","1945"],
                ["1913","1914","1917","1918"],
                ["Odysseus","Aristotle","Plato","Homer"],
                ["Shinzo Abe","Fumio Kashida","Akira Amari","Hiruhito Nakamura"],
                ["Winston Churchill","Neville Chamberlain","Cassius Winston","John Brown"]],

                "Medium":["Which country was NOT one of the seven countries that invaded Israel in 1948?",
                "What ancient society was primarily composed of city-states?",
                "Who was India's first President?",
                "What country was Eva Peron from?",
                "When did the Berlin Wall come down?"
            ],
                "Medium_a":["Turkey","Greece","Jawaharlal Nehru","Argentina","1989"],

                "Medium_mc":[["Iraq","Turkey","Lebanon","Transjordan"],
                ["Rome","Greece","Ottoman","Persian"],
                ["Mahatma Ghandi","Indira Ghandi","Jawaharlal Nehru","Narendra Modi"],
                ["Mexico","Spain","Chile","Argentina"],
                ["1989","1990","1992","1995"]],

                "Hard":["Who was the Assassin that started WWI?",
                "What empire ruled modern day Lebanon until 1917?",
                "Which Gallic leader fought against Julius Ceasar?",
                "Who led Egypt in the 1973 Yom Kippur War?",
                "Who was Taiwan's first leader?"
            ],
                "Hard_a":["Gavrilo Princip","Ottoman","Vercingetorix","Gamal Abdel Nasser","Sun Yat-sen"],

                "Hard_mc":[["Kaiser Wilhelm","Gavrilo Princip","Archduke Ferdinand","Augustus Acensio"],
                ["French","British","Spanish","Ottoman"],
                ["Vercingetorix","Xerxes","Joan of Arc","Josephus"],
                ["Anwar Sadat","Gamal Abdel Nasser","Muammar Gadafi","Bashar Al-Asad"],
                ["Sun Yat-sen","Chang Kai Shek","Mao Zedong","Deng Xiaoping"]]
            }
        },
        "US Politics":{
            "levels":{
                "Easy":["What party does Barack Obama belong to?",
                "What party does Donald Trump belong to?",
                "Which current NY Congresswoman was previously a waitress before taking office?",
                "Who nearly won the 2000 US Presidential Election?",
                "Who passes bills into law for review by the President?"],

                "Easy_a":["Democratic","Republican","Alexandra Ocasio-Cortez","Al Gore","Congress"],
                
                "Easy_mc":[["Democratic","Republican","Libertarian","Green Party"],
                ["Democratic","Republican","Libertarian","Green Party"],
                ["Hillary Clinton","Alexandra Ocasio-Cortez","Nancy Pelosi","Debbie Dingell"],
                ["Al Gore","John Kerry","Jeb Bush","Michael Dukakis"],
                ["Senate","House of Representatives","Vice President","Supreme Court"]],

                "Medium":["Which branch of government has 'Original Jurisdiction'?",
                "Who was the Republic nominee for the General Election in 2012?",
                "Who is the current Secretary of State?",
                "Which State has the most Electoral College votes?",
                "Who is the leader of the Senate?"],

                "Medium_a":["Supreme Court","Mitt Romney","Antony Blinken","California","Vice President"],
                
                "Medium_mc":[["Senate","House of Representatives","Executive","Supreme Court"],
                ["Mitt Romney","John McCain","Paul Ryan","Sarah Palin"],
                ["John Kerry","Hillary Clinton","Antony Blinken","Condeleza Rice"],
                ["California","Texas","New York","Florida"],
                ["President","Speaker of the House","Vice President","Secretary of State"]],

                "Hard":["What is the name of the legislation known as 'Obamacare?'",
                "Which branch controls the 'power of the purse'?",
                "The term for the House and Senate is how many years respectively?",
                "What is the term length in the Supreme Court?",
                "What ammendment guarantees protection from unwarranted search and seizure?"],
                
                "Hard_a":["Affordable Care Act","Legislative","2 and 6 years","Life","4th"],
                
                "Hard_mc":[["Affordable Care Act","Public Health Act","Affordable Health Act","Affordable Healthcare Act"],
                ["Executive","Legislative","Judicial","Press"],
                ["4 and 4","6 and 2","2 and 6","Life"],
                ["4 and 4","6 and 2","2 and 6","Life"],
                ["1st","4th","5th","14th"]]
            }
        },
        "World Politics":{
            "levels":{
                "Easy":["Who is the President of Canada?",
                "Who is the Prime Minister of the UK?",
                "What country did Angela Merkel govern?",
                "Which of the following countries are a democracy?",
                "What international organization deploys Peacekeepers?"
                ],

                "Easy_a":["Justin Trudeau","Rishi Sunak","Germany","France","United Nations"],

                "Easy_mc":[["Wayne Gretzky","Gordie Howe","Justin Trudeau","Tim Horton"],
                ["Tony Blair","David Cameron","Gordon Brown","Rishi Sunak"],
                ["France","Netherlands","Germany","UK"],
                ["Afghanistan","North Korea","Thailand","UK"],
                ["World Econominc Forum","unicef","United Nations","International Military Fund"]],

                "Medium":["What are the extremes of the political spectrum called?",
                "Which country is NOT part of the 5 permanent members of the UN Security Council?",
                "What is the type of democracy that elects representatives to represent the public?",
                "Who was the most popular opposition candidate to Vladimir Putin?",
                "Who is the current leader of India?"],

                "Medium_a":["Communism and Facism","Germany","Republican","Alexei Navalny","Narendra Modi"],
                
                "Medium_mc":[["Capitalism and Communism","Capitalism and Fascism","Communism and Facism","Democracy and Dictatorship"],
                ["Japan","USA","China","France"],
                ["Pure Democracy","Authoritarian","Republican","Democratic"],
                ["Alexander Lukashenko","Alexei Navalny","Yvgeny Prygozhin","Dmitry Medvedev"],
                ["Indira Ghandi","Jawaharlal Nehru","Rishi Sunak","Narendra Modi"]],
                
                "Hard":["What is it called when a minority group rules over a country's majority?",
                "What international agreement created the State of Israel and Palestine in 1947?",
                "What is the title of the UN's leader?",
                "Who is the current General Secretary of the UN?",
                "What are the two major political parties in the UK?"
            ],
                "Hard_a":["Apartheid","UN Resolution 292","General Secretary","Antonio Guteres","Labour and Conservative"],
                
                "Hard_mc":[["Apartheid","Communism","Fascism","Jingoism"],
                ["Arab-Israeli Treaty","British Mandata 791","Independence Declaration","UN Resolution 292"],
                ["Admiral","Chancellor","General Secretary","President"],
                ["Kofe Anan","Hiro Shu","Gavrilo Princip","Antonio Guteres"],
                ["Democrat and Republican","Communism and Fascism","Labour and Conservative","Tories and Whigs"]]
            }
        },
        "Economics":{
            "levels":{
                "Easy":["Who came up with 'Laissez-Faire Economics?",
                "What two curves typically make up a market?",
                "Which direction does the Supply Curve slope with respect to Price and Quantity?",
                "What direction does the Demand Curve slope with respect to Price and Quantity?",
                "What is the relationship between price and quantity?"],

                "Easy_a":["Adam Smith","Supply and Demand","Upward","Downward","Inverse"],

                "Easy_mc":[["Adam Smith","Charles Darwin","Karl Marx","Thomas Malthus"],
                ["Demand and Production","Demand and Price","Price and Cost","Supply and Demand"],
                ["East","Downward","Upward","West"],
                ["East","Downward","Upward","West"],
                ["Correlated","Inverse","No relationship","Covariance"]],

                "Medium":["Who controls US Monetary Policy?",
                "Which economist championed 'supply-side' Economics?",
                "Which economist championed 'demand-side' Economics?",
                "What is the 'price of money'?",
                "Who controls US Fiscal Policy?"],

                "Medium_a":["Federal Reserve","Milton Friedman","John Maynard Keynes","Interest Rate","Federal Government"],

                "Medium_mc":[["Central Bank","Congress","Federal Reserve","President"],
                ["Adam Smith","John Maynard Keynes","Milton Freidman","Thomas Malthus"],
                ["Adam Smith","John Maynard Keynes","Milton Freidman","Thomas Malthus"],
                ["Exchange Rate","Interest Rate","Price","Quantity Supplied"],
                ["Central Bank","Federal Government","Federal Reserve","President"]],

                "Hard":["Which US political party supports 'supply-side' Economics?",
                "What are the effects of a Tariff?",
                "If interest rates go up in a country how does that effect their foreign exchange rates?",
                "If interest rates go down, what happens to Aggregate Demand?",
                "If interest rates go down, what happens to the Stock Market?"],

                "Hard_a":["Republicans","Deadweight Loss","Domestic Currency Strengthens","Increases","Prices Go Up"],
                
                "Hard_mc":[["Democrats","Libertarians","Green Party","Republicans"],
                ["Deadweight Loss","Fees","Price Equilibrium","Subsidy"],
                ["Domestic Currency Weakens","Domestic Currency Strengthens","Foreign Currency Strengthens","No Impact"],
                ["Deprecates","Falls","Increases","No Impact"],
                ["Prices Go Down","Prices Go Up","Interest Rates Go Up","No Impact"]]
            }
        },
        "Finance":{
            "levels":{
                "Easy":["What are the two major asset classes?",
                "What is the asset class does a bond belong to?",
                "What asset class does a Common Stock belong to?",
                "What is the name of the largest Stock Exchange?",
                "What does ETF stand for?"],

                "Easy_a":["Equity and Fixed Income","Fixed Income","Equity","New York Stock Exchange","Exchange Traded Fund"],
                
                "Easy_mc":[["Dollars and Cents","Equity and Alternatives","Equity and Fixed Income","Equity and Derivatives"],
                ["Derivatives","Equity","Fixed Income","Options"],
                ["Derivatives","Equity","Fixed Income","Options"],
                ["Dow Jones","London Stock Exchange","NASDAQ","New York Stock Exchange"],
                ["Equity Traded Fund","Equity Trust Fund","Exchange Traded Fees","Exchange Traded Fund"]],
                
                "Medium":["What measures a bond's price sensitivity to interest rates?",
                "Which of the following are multiplied to determine Market Value?",
                "What asset class do Preferred Stocks belong to?",
                "Is a warrant an Equity or Fixed Income instrument?",
                "What is the term for bonds issued by local governments?"],
                
                "Medium_a":["Duration","Price and Outstanding Shares","Equity","Equity","Municipal Bond"],
                
                "Medium_mc":[["Duration","OAS","Spread","Z-Score"],
                ["Price and EPS","Earnings Per Share","Price and Outstanding Shares","EBITDA"],
                ["Derivatives","Equity","Fixed Income","Alternatives"],
                ["Equity","Fixed Income","Both","Neither"],
                ["T-bills","Treasuries","Municipal Bond","Muncies"]],
                
                "Hard":["Which of the following is not a security identifier?",
                "Would you 'Call' ot 'Put' a stock option that you believe will go down?",
                "Would you go 'Long' or 'Short' a stock that you think will go up?",
                "What happens when an investor is forced to buy shares at a higher price to pay back their short?",
                "Which of the following is not a US-based Stock Market?"],
                
                "Hard_a":["TOPIX","Put","Long","Short Squeeze","TOPIX"],
                
                "Hard_mc":[["CUSIP","ISIN","SEDOL","TOPIX"],
                ["Call","Put","Both","Neither"],
                ["Long","Short","Both","Neither"],
                ["Long Lump","Long Squeeze","Short ","Short Squeeze"],
                ["NASDAQ","DJIA","S&P500","TOPIX"]]
            }
        },
        "Philosophy":{
            "levels":{
                "Easy":["Which Greek philosopher came up with the 'Socratic Method'?",
                "Who said 'a wise man knows that he knows nothing'?",
                "Which philosopher/author advocated for capitalism?",
                "Who wrote 1984?",
                "Who wrote Anthem?"],

                "Easy_a":["Socrates","Socrates","Ayn Rand","George Orwell","Ayn Rand"],

                "Easy_mc":[["Socrates","Homer","Plato","Aristotle"],
                ["Socrates","Homer","Plato","Aristotle"],
                ["Ayn Rand","Karl Marx","Vladimir Lenin","Leon Trotsky"],
                ["Ayn Rand", "George Orwell","Karl Marx","Michel Foucault"],
                ["Ayn Rand","George Orwell", "Karl Marx","Michel Foucault"]],

                "Medium":["Who came up with the Theory of Relativity?",
                "What economic concept did 'Animal Farm' criticize?",
                "What political concept did '1984' criticize?",
                "What are the two major Economic philosophies?",
                "Who came up with the concept of a social contract?"],

                "Medium_a":["Albert Einstein","Communism","Totalitarianism","Communism and Capitalism","John Locke"],
            
                "Medium_mc":[["Isaac Newton","Tycho Brahe","Albert Einstein","Leonardo da Vinci"],
                ["Capitalism","Communism","Socialism","Jingoism"],
                ["Totalitarianism","Monarchy","Fascism","Demoracy"],
                ["Capitalism and Socialism","Capitalism and Communism", "Communism and Fascism","Anarchism and Fascism"],
                ["Macchiavelli","John Locke","Michel Foucault","Emile Durkheim"]],

                "Hard":["Which Philosopher has an english word named after him?",
                "Which philosopher published on 'Collective Effervescence'?",
                "What philosopher explored the relationship between workers and capital?",
                "Which economic philosopher inspired Charles Darwin's theory of Natural Selection?",
                "Which Holocaust surviver, author and philosopher focuses on genocide?"],

                "Hard_a":["Macchiavelli","Emile Durkheim","Karl Marx","Thomas Malthus","Elie Weisel"],

                "Hard_mc":[["Da Vinci","Durkheim","Machiavelli","Tycho"],
                ["Emile Durkheim","Isaac Newton","Karl Marx","Thomas Malthus"],
                ["Emile Durkheim","Isaac Newton","Karl Marx","Thomas Malthus"],
                ["Emile Durkheim","Isaac Newton","Karl Marx","Thomas Malthus"],
                ["Anne Frank","Elie Weisel","Fanny Aizenberg","Samuel Bak"]]
            }
        },
        "Sports":{
            "levels":{
                "Easy":["Which sport is not one of the major four in the US?",
                "What is 'soccer' called in non-US countries?",
                "Which of the following is played on ice?",
                "Which sport has a quarterback position?",
                "Which of these sports does NOT have a goalie?"],

                "Easy_a":["F1","Football","Hockey","Football","Baseball"],

                "Easy_mc":[["Football","Basketball","Baseball","F1"],
                ["EuroSoccer","Football","Baseball","Handball"],
                ["Hockey","Soccer","Basketball","Baseball"],
                ["Baseball","Basketball","Hockey","Football"],
                ["Baseball","Hockey","Handball","Soccer"]],

                "Medium":["How many teams make the NCAA Tournament?",
                "How many teams make the College Football Playoff?",
                "What is the tournament that determines 'the best football club in Europe'?",
                "What is the game prior to the Superbowl called?",
                "Which of these cities do NOT have two professional baseball teams?"],

                "Medium_a":["68","4","UEFA Champions Cup","Conference Championship","Miami"],

                "Medium_mc":[["4","16","64","68"],
                ["4","16","64","68"],
                ["El Clasico","UEFA Champions Cup","Barclay's Cup","Stanley Cup"],
                ["Wildcard Round","Divisional Playoff","Conference Championship","Mini-Superbowl"],
                ["Chicago","New York","Los Angeles","Miami"]],

                "Hard":["What is the name of the Superbowl Trophy?",
                "Which of these sports involves penalties where one team loses a player temporarily?",
                "What is the official name of a shot in basketall?",
                "What is Fenway Park famous for?",
                "What position is typically shorter and handles the ball the most in basketball?"],

                "Hard_a":["Lombardi Trophy","Hockey","Field Goal","The Green Monster","Point Guard"],

                "Hard_mc":[["Lamar Hunt Trophy","Stanley Cup","Lombardi Trophy","A.C. Hall Trophy"],
                ["Baseball","Basketball","Football","Hockey"],
                ["Field Goal","Free Throw","Jump Shot","Shot Goal"],
                ["Ivy Outfield","The Green Monster","New York","Yankees"],
                ["Center","Point Guard","Power Forward","Shooting Guard"]]
            }
        },
        "Movies":{
            "levels":{
                "Easy":["What is the name of the movie series based on animated toys?",
                "What is the name of the 2005 movie featuring animated penguins, lemurs and lions?",
                "What movie series is based on a boy wizard in Britain?",
                "What move is 'Here's Johnny' from?",
                "What children's movie features a green animated ogre?"],

                "Easy_a":["Toy Story","Madagascar","Harry Potter","The Shining","Shrek"],

                "Easy_mc":[["Finding Nemo","Harry Potter","Shrek","Toy Story"],
                ["Finding Nemo","Madagascar","Shrek","Toy Story"],
                ["Finding Nemo","Harry Potter","Percy Jackson","Toy Story"],
                ["Full Metal Jacket","Goodwill Hunting","Pulp Fiction","The Shining"],
                ["Finding Nemo","Madagascar","Shrek","Toy Story"]],

                "Medium":["What WWII movie was Tom Hanks a main character in?",
                "What 'Coming of Age' movie features a character named Benny 'The Jet' Rodriguez?",
                "What 80's movie features a group of different teens bonding in detention?",
                "What Leonardo Dicapprio movie features a young Margot Robie?",
                "What fictional character did Gal Gadot play?"
                ],

                "Medium_a":["Saving Private Ryan","Sandlot","Breakfast Club","Wolf of Wall St","Wonder Woman"],
                
                "Medium_mc":[["Band of Brothers","Patton","Platoon","Saving Private Ryan"],
                ["Backstreet Boys","Bad News Boys","Sandlot","Yardball"],
                ["16 Candles","Breakfast Club","Dirty Dancing","The Outsiders"],
                ["Blood Diamond","Django","Titanic","Wolf of Wall St"],
                ["Cat Woman","Princess Peach","Super Woman","Wonder Woman"]],
                
                "Hard":["What movie is based on Harper Lee's book?",
                "What movie features a group of four young friends who die in WWI serving the Keiser?",
                "What Vietnam movie features Charlie Sheen?",
                "What 2000's movie focuses on the dystopian impacts of Climate Change?",
                "Which Boston based movie features Matt Damon as a corrupt police officer?"],
                
                "Hard_a":["To Kill a Mockingbird","All Quiet on the Western Front","Platoon","The Day After Tomorrow","The Departed"],
                
                "Hard_mc":[["Amber Sun","Catcher in the Rye","The Red Pony","To Kill a Mockingbird"],
                ["1917","All Quiet on the Western Front","The Trenches","War Horse"],
                ["Apocalypse Now","Full Metal Jacket","Platoon","We Were Soldiers"],
                ["Apocalypse Now","Arctic Melt","Greenhouse Gassed","The Day After Tomorrow"],
                ["Beantown","Good Will Hunting","The Departed","The Town"]]
            }
        }
}
}


let user_answers = ['','','','',''];

let real_answers = quiz_bank["topic"][topic]["levels"][level + "_a"];

let questions = quiz_bank["topic"][topic]["levels"][level];
let category = topic;

class AnswerSet {
    constructor (user_answers,real_answers,questions,category,quiz_level){
        this.user_answers = user_answers;
        this.real_answers = real_answers;
        this.questions = questions;
        this.category = topic;
        this.quiz_level = level;
        this.element = null;
    }
}

class ResultSet {
    constructor (total_counter,right_counter,wrong_counter){
        this.total_score = total_counter;
        this.right_score = right_counter;
        this.wrong_score = wrong_counter;
        this.percentage = ((right_counter/total_counter)*100);
        this.category = topic;
        this.quiz_level = level;
    }
}