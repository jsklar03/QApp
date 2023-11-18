console.log(user_answers)

function retrieveFromLocalStorage() {
    const saved_answers = localStorage.getItem(storedAnswers);
    console.log(saved_answers);

    checkAnswers();
}

function checkAnswers(){
    for(let i=0, k=0;i<user_answers.length,k<real_answers.length;i++,k++){
        total_counter+=1;
        if (i==k){
            right_counter+=1
        }
        else{
            wrong_counter+=1
        }
    }
    console.log(total_counter, right_counter, wrong_counter)
}