document.getElementById("easy_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Easy");
document.getElementById("medium_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Medium");
document.getElementById("hard_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Hard");

document.querySelector('.quiz_title').innerHTML = topic

// To get scoreboard elements from the DOM
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage_score = document.querySelector('#percent_score');


// to Update the scoreboard
let update_right = localStorage.getItem('right_num') 
let update_wrong = localStorage.getItem('wrong_num')
let update_total = localStorage.getItem('stored_quizzes')
console.log(update_right,update_wrong,update_total)

let right_int = parseInt(update_right);
let wrong_int = parseInt(update_wrong);


right_score.innerHTML=right_int;
wrong_score.innerHTML=wrong_int;
percentage_score.innerHTML=(right_int/(right_int+wrong_int)*100)+"%"
