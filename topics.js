// //Constants added for add to cart btn
// const queryString = window.location.search;
// //console.log(queryString);

// // Then, we use the query string to create a URLSearchParams object:
// const params = new URLSearchParams(queryString);
// //console.log(params);

// const topic = params.get('topic');
// console.log(topic);

// //defines the inputs to the quizzle class object. NEED TO UPDATE THESE TO POPULATE DYNAMICALLY
// let quiz_source = quiz_bank["topic"][topic]["us_state_capitols"]
// let quiz_level = quiz_bank["topic"][topic]["us_state_capitols"]["easy"]
// console.log(quiz_source)

// const quiz = new quizzle(topic);
// // quiz_list.push(quiz)
// // console.log(quiz)

// const quizListElement = document.querySelector('#quiz_list');
// console.log(quizListElement)

// //kicks off the createQuizzes function
// function populate_topic(){
//     const topic_listener = document.querySelector('.quiz_list');
//     console.log(topic_listener);
//     console.log("first function triggered")
//     create_topic_list(quiz);
// }

// // Populates the topics page with quizzes
// function create_topic_list(quiz) {
//     // make a clone of the notecard template
//     console.log("second function triggered")
//     const template = document.querySelector('#quiz_temp');
//     console.log(template)
//     // const clone = template.content.cloneNode(true);
//     // console.log(clone)
//     const quizListElement = document.querySelector('#quiz_list');

//     for (let i of geography_topic_list){
//         console.log(i)
//         const clone = template.content.cloneNode(true);
//         quiz.element = clone.querySelector('.quiz_link');
//         quiz.quizSubTopic = i;
//         const quizListElement = document.querySelector('#quiz_list');
//         quiz_list.push(quiz);
//     }
    
//     // quiz.element = clone.querySelector('.quiz_link');
//     // console.log(quiz)

//     // const quiz_button = quiz.element.querySelector(".quiz_holder");
//     // console.log(quiz_button)
  
//     quizListElement.appendChild(quiz.element);
//     temp_quiz_list.push(quiz.element);
//     console.log(temp_quiz_list);

//     saveToLocalStorage()
// }

// function saveToLocalStorage(){
//         // const cart = Array.from(cartSet);
//         // console.log(cart);
            
//         const quizArrayString = JSON.stringify(quiz);
//         // console.log(quizArrayString);
          
//         localStorage.setItem('storedItem', quizArrayString);
//         console.log(localStorage.getItem('storedItem'));
//     }
        
// function retrieveFromLocalStorage() {
//         const cartArrayString = localStorage.getItem('storedItem');
//         const cartArray = JSON.parse(cartArrayString);
//         // const add = add_to_cart_btn.onclick;
//     }
        
// if (localStorage.getItem('storedItem') != null) {
//             console.log("Storage Not Null");
//             retrieveFromLocalStorage();
//           }
        
// console.log(localStorage.getItem('storedItem'));
        
    