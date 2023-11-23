// To get scoreboard elements from the DOM
let total_score = document.querySelector('#total_q');
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage = document.querySelector('#percent_score');


// to Update the scoreboard
let update_right = localStorage.getItem('right_num') 
let update_wrong = localStorage.getItem('wrong_num')
let update_total = localStorage.getItem('stored_quizzes')
console.log(update_right,update_wrong,update_total)

let right_int = parseInt(update_right);
let wrong_int = parseInt(update_wrong);
let total_int = parseInt(update_total);

total_score.innerHTML=total_int;
right_score.innerHTML=right_int;
wrong_score.innerHTML=wrong_int;
console.log(typeof(total_int));


console.log(typeof(right_int,wrong_int,total_int))
console.log(right_int,wrong_int,total_int)



//also need to update the pie chart
