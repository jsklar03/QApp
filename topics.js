function select_topic(element){
    const topic_listener = document.querySelector('.link');
    topic_listener.addEventListener('click',()=>{
        
    })
}

function createElement(quiz) {
    // make a clone of the notecard template
    const template = document.querySelector('#quiz_temp');
    const clone = template.content.cloneNode(true);
    
    // connect this clone to our notecard.element
    // from this point we only need to refer to notecard.element
    quiz.element = clone.querySelector('.quiz_link');

    const quiz_button = quiz.element.querySelector(".quiz_holder");
    
    quiz_button.addEventListener('click',() => {
    open_quiz(quiz);
    });
  
    const quizListElement = document.querySelector('#quiz_list');
    quizListElement.appendChild(quiz.element);
    
    update_quiz(quiz);
}

function open_quiz(quiz){

}

function update_quiz(quiz){

}