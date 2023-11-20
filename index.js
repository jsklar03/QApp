let total_score = document.querySelector('#total_q');
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage = document.querySelector('#percent_score');

function retrieveFromLocalStorage() {
    // gets users answers
    let saved_answers = localStorage.getItem('storedAnswers');
    let answer_array = saved_answers.split(',');
    console.log(saved_answers);
    console.log(answer_array);
    updateScoreboard()
}

function updateScoreboard(total_counter,right_counter){
    let w_score = total_counter - right_counter;
    let t_score = total_counter;
    let r_score = right_counter;
    console.log(w_score,t_score,r_score)

}

function updateChart(){

}
