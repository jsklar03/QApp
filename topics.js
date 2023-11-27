document.getElementById("easy_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Easy");
document.getElementById("medium_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Medium");
document.getElementById("hard_box").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=Hard");

document.querySelector('.quiz_title').innerHTML = topic