//Constants added for add to cart btn
// const queryString = window.location.search;
//console.log(queryString);

// Then, we use the query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);
//console.log(params);

// const topic = params.get('topic');
// // console.log(topic);
// const level = params.get('level');
// // console.log(level);

document.querySelector('.quiz_title').innerHTML = topic +" - "+ level;

//defines the inputs to the quizzle class object. 
// sets quiz source, quiz level, quiz mc options, quiz answers
let quiz_source = quiz_bank["topic"][topic];
let quiz_level = quiz_bank["topic"][topic]["levels"][level];
let quiz_mc = quiz_bank["topic"][topic]["levels"][level + "_mc"];
let quiz_answers = quiz_bank["topic"][topic]["levels"][level + "_a"];

// console.log(localStorage.getItem('storedItem'))

let answer_a = document.querySelector('#a').innerHTML;
let answer_b = document.querySelector('#b').innerHTML;
let answer_c = document.querySelector('#c').innerHTML;
let answer_d = document.querySelector('#d').innerHTML;

//kicks off the createQuizzes function
function populate_quiz(){
    console.log("first function triggered");
    updateQuizCard();
}

//DOM items for updating quiz card
let card= document.querySelector('.card_placeholder');
let question_number= document.querySelector('.question_number');
let card_question = document.querySelector('.question');
let back_btn= document.querySelector('.back');
let forward_btn= document.querySelector('.forward');

let q_counter = 0;

let question_array = [quiz_level[0],quiz_level[1],quiz_level[2],quiz_level[3],quiz_level[4]];

function updateQuizCard(){
    // console.log(q_counter);
    q_counter +=1;
    // console.log(q_counter);
    if (q_counter>5){
        q_counter = 1;
    }
    for (let i=0;i<1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<1;k++){
        // console.log(question_array[q_counter - 1]);
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
    }
    updateMultipleChoice();
}

function goBackQuestion(){
    q_counter -=1;
    if(q_counter<1){
        q_counter=1;
    }
    for (let i=0;i<1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<1;k++){
        console.log(k);
        console.log(question_array[q_counter - 1]);
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
    }
    updateMultipleChoice();
}

let mc_counter = 0;

function updateMultipleChoice(){
    console.log("update MC triggered");
    // console.log(q_counter);
    document.querySelector('#a').innerHTML = quiz_mc[q_counter - 1][0];
    document.querySelector('#b').innerHTML = quiz_mc[q_counter - 1][1];
    document.querySelector('#c').innerHTML = quiz_mc[q_counter - 1][2];
    document.querySelector('#d').innerHTML = quiz_mc[q_counter - 1][3];
    answer_a = document.querySelector('#a').innerHTML;
    answer_b = document.querySelector('#b').innerHTML;
    answer_c = document.querySelector('#c').innerHTML;
    answer_d = document.querySelector('#d').innerHTML;
    console.log(answer_a, answer_b, answer_c, answer_d);
}

let selected_a = document.querySelector("#a");
let selected_b = document.querySelector("#b");
let selected_c = document.querySelector("#c");
let selected_d = document.querySelector("#d");


selected_a.addEventListener('click', (e) => recordAnswers(e));
selected_b.addEventListener('click', (e) => recordAnswers(e));
selected_c.addEventListener('click', (e) => recordAnswers(e));
selected_d.addEventListener('click', (e) => recordAnswers(e));

//Need to do these two functions below to complete the Quiz.JS page
function recordAnswers(e){
    user_answers[q_counter-1] = e.target.innerText;
    console.log(user_answers);
    saveToLocalStorage(user_answers)
}

document.getElementById("submit_btn").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level="+level);

function saveToLocalStorage(user_answers){
    let stored_answer = new AnswerSet();
    localStorage.setItem(storedAnswers, user_answers);
    console.log(storedAnswers)
  }
  
