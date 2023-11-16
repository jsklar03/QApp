// const queryString = window.location.search;
// //console.log(queryString);

// // Then, we use the query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);
// //console.log(params);

// const topic = params.get('topic');

document.getElementById("easy").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=easy");
document.getElementById("medium").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=medium");
document.getElementById("hard").children[0].setAttribute("href", "../quiz.html?topic="+ topic + "&level=hard");