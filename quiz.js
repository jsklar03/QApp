// Submit button
document.getElementById("submit_btn").setAttribute("href", "./results.html?topic="+ topic + "&level="+level);
// console.log(document.getElementById("submit_btn").children[0])

// Sets the quiz title using the DOM
document.querySelector('.quiz_title').innerHTML = topic +" - "+ level;

// Defines the inputs to the quizzle class object. 
// sets quiz source, quiz level, quiz mc options, quiz answers
let quiz_source = quiz_bank["topic"][topic];
let quiz_level = quiz_bank["topic"][topic]["levels"][level];

let quiz_mc = quiz_bank["topic"][topic]["levels"][level + "_mc"];
let quiz_answers = quiz_bank["topic"][topic]["levels"][level + "_a"];
// Selects the MC options using the DOM
let answer_a = document.querySelector('#a').innerHTML;
let answer_b = document.querySelector('#b').innerHTML;
let answer_c = document.querySelector('#c').innerHTML;
let answer_d = document.querySelector('#d').innerHTML;

// DOM to select the multiple choice answers
let selected_a = document.querySelector("#a");
let selected_b = document.querySelector("#b");
let selected_c = document.querySelector("#c");
let selected_d = document.querySelector("#d");

// Event listener to trigger the recording of answers on click
selected_a.addEventListener('click', (e) => recordAnswers(e));
selected_b.addEventListener('click', (e) => recordAnswers(e));
selected_c.addEventListener('click', (e) => recordAnswers(e));
selected_d.addEventListener('click', (e) => recordAnswers(e));


// Kicks off the createQuizzes function
function populate_quiz(){
    updateQuizCard();
}

// DOM items for updating quiz card
let card= document.querySelector('.card_placeholder');
let question_number= document.querySelector('.question_number');
let card_question = document.querySelector('.question');
let back_btn= document.querySelector('.back');
let forward_btn= document.querySelector('.forward');
// Keeps track of which question the user is on
let q_counter = 0;
// Takes in the questions as an array from the quizbank
let question_array = [quiz_level[0],quiz_level[1],quiz_level[2],quiz_level[3],quiz_level[4]];

// Updates the quiz question card
function updateQuizCard(){
    q_counter +=1;
    if (q_counter>5){
        q_counter -= 1;
    }
    for (let i=0;i<1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<1;k++){
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
    }
    updateMultipleChoice();
}

// Provides functionality to the back button on the quiz page.
function goBackQuestion(){
    q_counter -=1;
    if(q_counter<1){
        q_counter=1;
    }
    for (let i=0;i<1;i++){
        document.querySelector('.question_number').innerHTML = q_counter;
    }
    for(let k=0;k<1;k++){
        document.querySelector('.question').innerHTML = question_array[q_counter - 1];
    }
    updateMultipleChoice();
}

// Updates the questions and answers on the quiz card, resets color
function updateMultipleChoice(){
    document.querySelector('#a').innerHTML = quiz_mc[q_counter - 1][0];
    document.querySelector('#b').innerHTML = quiz_mc[q_counter - 1][1];
    document.querySelector('#c').innerHTML = quiz_mc[q_counter - 1][2];
    document.querySelector('#d').innerHTML = quiz_mc[q_counter - 1][3];
    answer_a = document.querySelector('#a').innerHTML;
    answer_b = document.querySelector('#b').innerHTML;
    answer_c = document.querySelector('#c').innerHTML;
    answer_d = document.querySelector('#d').innerHTML;

    document.querySelector('#a').setAttribute('class','answer_name');
    document.querySelector('#b').setAttribute('class','answer_name');
    document.querySelector('#c').setAttribute('class','answer_name');
    document.querySelector('#d').setAttribute('class','answer_name');
    if (q_counter == 1){
        document.querySelector('.back').setAttribute('class','back_hidden')
    }
    else if(q_counter==5){
        document.querySelector('.forward').setAttribute('class','forward_hidden')
    }
    else{
        if (document.querySelector('.back_hidden')!=null){
            document.querySelector('.back_hidden').setAttribute('class','back');
        }
        else if (document.querySelector('.forward_hidden')!=null){
            document.querySelector('.forward_hidden').setAttribute('class','forward')
        }
}
}

// Dynamically records the answers
function recordAnswers(e){
    user_answers[q_counter-1] = e.target.innerText;

    saveToLocalStorage(user_answers);
}
// Saves the answers, the real answers, the questions to local storage
function saveToLocalStorage(user_answers){
    let stored_answers = new AnswerSet(user_answers,real_answers,questions,category,quiz_level);
    stored_answers.user_answers = user_answers;
    stored_answers.real_answers = real_answers;
    stored_answers.questions = questions;
    stored_answers.category = topic;
    stored_answers.quiz_level = level;
    localStorage.setItem('storedAnswers', user_answers);
  }
// selects the elements from the DOM to change the answer color
selected_a.addEventListener('click', (e) => changeColor(e));
selected_b.addEventListener('click', (e) => changeColor(e));
selected_c.addEventListener('click', (e) => changeColor(e));
selected_d.addEventListener('click', (e) => changeColor(e));

// Provides feedback to the user that they have chosen an answer
function changeColor(e){
    let answer_chosen = e.target
    if (selected_a.classList.contains('answer_chosen')==true ||
    selected_b.classList.contains('answer_chosen')==true ||
    selected_c.classList.contains('answer_chosen')==true ||
    selected_d.classList.contains('answer_chosen')==true){
        selected_a.setAttribute('class','answer_name');
        selected_b.setAttribute('class','answer_name');
        selected_c.setAttribute('class','answer_name');
        selected_d.setAttribute('class','answer_name');
    }
    else{
        answer_chosen.setAttribute('class','answer_chosen')
    }
  }

