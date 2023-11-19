
function retrieveFromLocalStorage() {
    // gets users answers
    let saved_answers = localStorage.getItem('storedAnswers');
    let answer_array = saved_answers.split(',');
    console.log(saved_answers);
    console.log(answer_array);

    checkAnswers(answer_array);
}

function checkAnswers(answer_array,real_answers){
    for(i of answer_array){
        total_counter+=1;
        let user_answer = i;
        console.log(total_counter)
        console.log(user_answer)
        for(k of real_answers){
            let real_answer = k;
            console.log(real_answer);
            if (i==k){
                right_counter+=1
                console.log(right_counter)
            }
            else{
                wrong_counter+=1
                console.log(wrong_counter)
            }
        }
    }
    console.log(total_counter, right_counter, wrong_counter)
}