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
            "easy":{
                "q1":"What is the capitol of Spain?",
                "q2":"What is the largest country by land mass?",
                "q3":"What is the most populated country?"
            },
            "easy_a":{
                "a1":"Madrid",
                "a2":"Russia",
                "a3":"India"
            }
        }
    }
}

    // "economics";{
    //     "micro";{
    
    //     },
    //     "macro";{
    
    //     }
    
    // },
    // "world_history_questions":{
    //     "people":{
    
    //     },
    //     "places":{
    
    //     },
    //     "events":{
    
    //     }
    // },
    // "US_politics":{
    //     "people":{},
    //     "policies":{},
    //     "government":{},
    //     "scandals":{}
    // },
    // "US_history":{
    //     "people":{
    
    //     },
    //     "places":{
    
    //     },
    //     "events":{
    
    //     }
    // },
    // "world_politics":{
    //     "people":{},
    //     "policies":{},
    //     "organizations":{}
    // },
    // "sports":{

    //     },
    // "finance":{

    //         }

const quiz_list=[]

const temp_quiz_list=[]

const topic_list=["geography"]
const geography_topic_list=["us_state_capitols","world_geography"]

class quizzle {
    constructor (quizTopic, quizSubTopic, quizLevel) {
        this.quizTopic = quizTopic;
        this.quizSubTopic = quizSubTopic;
        this.quizLevel =  quizLevel;
        this.quiz = (quizTopic, quizLevel)
        this.element = null;
    }
}

class question {
    constructor(question,answer){
        this.question= null;
        this.answer= null;
    }
}
