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
let quiz_source = quiz_bank["topic"][topic]
let quiz_level = quiz_bank["topic"][topic]["levels"][level]
console.log(quiz_level)

console.log(localStorage.getItem('storedItem'))

//kicks off the createQuizzes function
function populate_quiz(){
    const topic_listener = document.querySelector('.quiz_list');
    console.log(topic_listener);
    console.log("first function triggered")
    
    updateQuizcard();
}

//DOM items for updating quiz card
let card= document.querySelector('.card_placeholder');
let question_number= document.querySelector('.question_number');
let card_question = document.querySelector('.question');
// let answer_list= document.querySelector('answer_list');
let option_1= document.querySelector('#a');
let option_2= document.querySelector('#b');
let option_3= document.querySelector('#c');
let option_4= document.querySelector('#d');
let back_btn= document.querySelector('.back');
let forward_btn= document.querySelector('.forward');

let q_counter = 0
//gets the answer key
let quiz_answers = quiz_bank["topic"][topic]["levels"][level + "_a"]
console.log(quiz_answers)
let a1 = quiz_answers['a1']
console.log(a1);
let b1 = quiz_answers['a2']
let c1 = quiz_answers['a3']
let d1 = quiz_answers['a4']

let question_array = [quiz_level['q1'],quiz_level['q2'],quiz_level['q3'],quiz_level['q4'],quiz_level['q5']]
let answer_array = [a1,b1,c1,d1]

function updateQuizcard(){
    console.log(q_counter);
    q_counter +=1;
    console.log(q_counter)
    for (let i=0;i<=1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
        for(let i=0;i<=5;i++){
            document.querySelector('.question').innerHTML = question_array[i];
            return i
        }
    }
    // for(let i=0;i<=5;i++){
    //     document.querySelector('.question').innerHTML = question_array[i];
    //     return i
    // }
}

function skipQuestion(){

}

