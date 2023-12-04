//Gets the topic level from URL and assigns it
document.getElementById("easy_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Easy");
document.getElementById("medium_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Medium");
document.getElementById("hard_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Hard");

document.querySelector('.quiz_title').innerHTML = topic

// to Update the scoreboard with stuff from localstorage
let update_right = localStorage.getItem('right_num') 
let update_wrong = localStorage.getItem('wrong_num')
let update_total = localStorage.getItem('stored_quizzes')
console.log(update_right,update_wrong,update_total)

// if those values in local storage exist, parse them into an integer
let right_int = parseInt(update_right);
let wrong_int = parseInt(update_wrong);

console.log(right_int,wrong_int)

// To get scoreboard elements from the DOM from topics.html
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage_score = document.querySelector('#percent_score');

console.log(right_score)

// Function to retrieve from local storage.
function retrieveFromLocalStorage(){
    console.log("retrieve trigged")
    if (localStorage.getItem('right_num')!=null){
    right_score.innerHTML=right_int;
    wrong_score.innerHTML=wrong_int;
    percentage_score.innerHTML=(right_int/(right_int+wrong_int)*100)+"%"
    }
    else{
    right_score.innerHTML=0;
    wrong_score.innerHTML=0;
    percentage_score.innerHTML=0+"%";
    right_int = 0;
    wrong_int = 0;
    }
}

retrieveFromLocalStorage()