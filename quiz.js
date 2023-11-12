//Constants added for add to cart btn
const queryString = window.location.search;
//console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
const params = new URLSearchParams(queryString);
//console.log(params);

const topic = params.get('topic');
console.log(topic);
const level = params.get('level');
console.log(level)

//defines the inputs to the quizzle class object. NEED TO UPDATE THESE TO POPULATE DYNAMICALLY
let quiz_source = quiz_bank["topic"][topic]["us_state_capitols"]
let quiz_level = quiz_bank["topic"][topic]["us_state_capitols"][level]
console.log(quiz_source)
console.log(quiz_level)

const quiz = new quizzle(topic);

//kicks off the createQuizzes function
function populate_topic(){
    const topic_listener = document.querySelector('.quiz_list');
    console.log(topic_listener);
    console.log("first function triggered")
    
    createQuizzes(quiz);
}

// Populates the topics page with quizzes
function createQuizzes(quiz) {
    // make a clone of the notecard template
    console.log("second function triggered")
    const template = document.querySelector('#quiz_temp');
    console.log(template)
    const clone = template.content.cloneNode(true);
    console.log(clone)
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    quiz.element = clone.querySelector('.quiz_link');
    console.log(quiz.element)

    const quiz_button = quiz.element.querySelector(".quiz_holder");
    console.log(quiz_button)
  
    const quizListElement = document.querySelector('#quiz_list');
    quizListElement.appendChild(quiz.element);
}
