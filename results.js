function retrieveFromLocalStorage() {
    // gets users answers
    let saved_answers = localStorage.getItem('storedAnswers');
    let answer_array = saved_answers.split(',');
    console.log(saved_answers);
    console.log(answer_array);
    console.log(real_answers);

    checkAnswers(answer_array, real_answers);
}

function checkAnswers(answer_array,real_answers){
    total_counter+=real_answers.length;
    for(let i = 0, k=0; i<=answer_array.length,k<real_answers.length;i++,k++){
        let user_answer = answer_array[i];
        let real_answer = real_answers[k];
        console.log(real_answer + " vs " + user_answer);
        if (user_answer == real_answer){
                right_counter+=1
                console.log(total_counter, right_counter, wrong_counter)
            }
            else{}
        }
    wrong_counter = total_counter - right_counter;
    console.log(total_counter, right_counter, wrong_counter);
    console.log(typeof(total_counter));
    percentage = (right_counter/total_counter);
}

function updateResults(answer_array,real_ansers){

}

function updateChart(){
    
}

console.log(scores)

function saveToLocalStorage(){
    let stored_answers = new QuizSet(total_counter,right_counter,wrong_counter,percentage);
    stored_answers.user_answers = user_answers;
    stored_answers.real_answers = real_answers;
    stored_answers.questions = questions;
    stored_answers.category = topic;
    stored_answers.quiz_level = level;
    localStorage.setItem('storedQuizzes', user_answers);
  }