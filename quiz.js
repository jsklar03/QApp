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
let quiz_mc = quiz_bank["topic"][topic]["levels"][level + "_mc"]
console.log(quiz_level)
console.log(quiz_mc)

console.log(localStorage.getItem('storedItem'))

//kicks off the createQuizzes function
function populate_quiz(){
    const topic_listener = document.querySelector('.quiz_list');
    console.log(topic_listener);
    console.log("first function triggered")
    
    updateQuizCard();
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
// let a1 = quiz_answers[0]
// console.log(a1);
// let b1 = quiz_answers[1]
// let c1 = quiz_answers[2]
// let d1 = quiz_answers[3]

let question_array = [quiz_level[0],quiz_level[1],quiz_level[2],quiz_level[3],quiz_level[4]]
// let answer_array = [a1,b1,c1,d1]

// console.log(question_array[0])

function updateQuizCard(){
    console.log(q_counter);
    q_counter +=1;
    console.log(q_counter);
    if (q_counter>5){
        q_counter = 1;
    }
    for (let i=0;i<1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<1;k++){
        console.log(question_array[q_counter - 1]);
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
    }
    updateMultipleChoice();
}

function goBackQuestion(){
    q_counter -=1;
    if(q_counter<1){
        q_counter=1;
    }
    for (let i=0;i<=1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<=5;k++){
        console.log(k)
        console.log(question_array[q_counter - 1])
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
        return k
    }
    updateMultipleChoice();
}

let mc_counter = 0;
console.log(quiz_mc[0])

function updateMultipleChoice(){
    console.log("update MC triggered");
    console.log(q_counter);
    document.querySelector('#a').innerHTML = quiz_mc[q_counter - 1][0];
    document.querySelector('#b').innerHTML = quiz_mc[q_counter - 1][1];
    document.querySelector('#c').innerHTML = quiz_mc[q_counter - 1][2];
    document.querySelector('#d').innerHTML = quiz_mc[q_counter - 1][3];
}


