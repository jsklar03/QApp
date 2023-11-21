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
    console.log('done');
    saveToLocalStorage(total_counter, right_counter, wrong_counter, percentage);
}

function updateResults(answer_array,real_ansers){

}

function updateChart(){
    
}

console.log(scores)

function saveToLocalStorage(total_counter, right_counter, wrong_counter, percentage){
    console.log("Save Function")
    let stored_quizzes = new ResultSet(total_counter,right_counter,wrong_counter,percentage);
    stored_quizzes.total_counter = total_counter;
    console.log(total_counter)
    console.log(stored_quizzes.total_counter)
    stored_quizzes.right_counter = right_counter;
    stored_quizzes.wrong_counter = wrong_counter;
    stored_quizzes.percentage = percentage;
    console.log(right_counter,wrong_counter,percentage)
    stored_quizzes.category = topic;
    stored_quizzes.quiz_level = level;
    localStorage.setItem('storedQuizzes', stored_quizzes);
    executeD3(right_counter,wrong_counter);
  }



  
// Pie chart
function executeD3 (right_counter,wrong_counter){
let pieData = [
      { label: 'Right', value: right_counter },
      { label: 'Wrong', value: wrong_counter }
  ];
//sets dimensions of the visualization for the pie chart
let pieWidth = 300;
let pieHeight = 300;

//impacts sizing of the graph
let pieRadius = Math.min(pieWidth, pieHeight) / 2;
  
let pieSvg = d3.select("#pieChart")
      .append("svg")
      .attr("width", pieWidth)
      .attr("height", pieHeight)
      .append("g")
      .attr("transform", "translate(" + pieWidth / 2 + "," + pieHeight / 2 + ")");
  
let pieColor = d3.scaleOrdinal()
      .domain(pieData.map(d => d.label))
      .range(["#2196F3", "#FF5722"]);
  
let pie = d3.pie()
      .value(d => d.value);
  
let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(pieRadius);
  
  pieSvg.selectAll("path")
      .data(pie(pieData))
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", d => pieColor(d.data.label));
  
  // Bar chart
let barData = [
      { label: 'Right', value: right_counter },
      { label: 'Wrong', value: wrong_counter }
  ];
  console.log(right_counter,wrong_counter)

//sets the width/height of the bar chart
let barWidth = 300;
let barHeight = 300;

//uses stuff from D3.js to set the bars
let barSvg = d3.select("#barChart")
      .append("svg")
      .attr("width", barWidth)
      .attr("height", barHeight);
  
let barX = d3.scaleBand()
      .domain(barData.map(d => d.label))
      .range([0, barWidth])
      .padding(0.1);
  
let barY = d3.scaleLinear()
      .domain([0, d3.max(barData, d => d.value)])
      .range([barHeight, 0]);
  
barSvg.selectAll("rect")
      .data(barData)//data dictionary for the columns
      .enter()
      .append("rect")
      .attr("x", d => barX(d.label))
      .attr("y", d => barY(d.value))
      .attr("width", barX.bandwidth())
      .attr("height", d => barHeight - barY(d.value))
      .attr("fill", d => (d.label === 'Right' ? '#2196F3' : (d.label === 'Wrong' ? '#FF0000' : '#CCCCCC')));
}
console.log(right_counter,wrong_counter)