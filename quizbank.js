const quiz_bank = {
    "topic":{
        "geography":{
                "levels":{
                    "easy":{
                        "q1":"What is the capitol of New York?",
                        "q2":"What is the capitol of Oklahoma?",
                        "q3":"What is the capitol of Massachusetts?",
                        "q4":"What is the capitol of Texas?",
                        "q5":"What is the capitol of Arizona?"
                    },
                    "easy_a":{
                        "a1":"Albany",
                        "a2":"Oklahoma City",
                        "a3":"Boston",
                        "a4":"Austin",
                        "a5":"Pheonix"
                    },
                    "medium":{
                        "q1":"What is the capitol of Michigan?",
                        "q2":"What is the capitol of Illinois?",
                        "q3":"What is the capitol of Wisconsin?",
                        "q4":"What is the capitol of California?",
                        "q5":"What is the capitol of Florida?"
                    },
                    "medium_a":{
                        "a1":"Lansing",
                        "a2":"Springfield",
                        "a3":"Madison",
                        "a4":"Sacramento",
                        "a5":"Tallahassee"
                    },
                    "hard":{
                        "q1":"What is the capitol of Idaho?",
                        "q2":"What is the capitol of North Dakota?",
                        "q3":"What is the capitol of South Dakota?",
                        "q4":"What is the capitol of Wyoming?",
                        "q5":"What is the capitol of New Mexico?"
                    },
                    "hard_a":{
                        "a1":"Boise",
                        "a2":"Bismarck",
                        "a3":"Pierre",
                        "a4":"Cheyenne",
                        "a5":"Santa Fe"
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
},

    "economics":{
        "micro":{
    
        },
        "macro":{
    
        }
    
    },
    "world_history_questions":{
        "people":{
    
        },
        "places":{
    
        },
        "events":{
    
        }
    },
    "US_politics":{
        "people":{},
        "policies":{},
        "government":{},
        "scandals":{}
    },
    "US_history":{
        "people":{
    
        },
        "places":{
    
        },
        "events":{
    
        }
    },
    "world_politics":{
        "people":{},
        "policies":{},
        "organizations":{}
    },
    "sports":{

        },
    "finance":{

            }
        }

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
