let total_score = document.querySelector('#total_q');
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage = document.querySelector('#percent_score');

function retrieveFromLocalStorage() {
    // gets users answers
    console.log(localStorage)
    let saved_scores = localStorage.getItem('storedQuizzes');
    console.log(saved_scores);
    updateScoreboard()
}

function updateScoreboard(total_counter,right_counter){
    let w_score = total_counter - right_counter;
    let t_score = total_counter;
    let r_score = right_counter;
    console.log(w_score,t_score,r_score)

}

//also need to update the pie chart
