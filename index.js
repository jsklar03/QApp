// To get scoreboard elements from the DOM
let right_score = document.querySelector('#correct_score');
let wrong_score = document.querySelector('#wrong_score');
let percentage = document.querySelector('#percent_score');

let update_right = localStorage.getItem('right_num') 
let update_wrong = localStorage.getItem('wrong_num')
let update_total = localStorage.getItem('stored_quizzes')

// to Update the scoreboard
function retrieveFromLocalStorage(){
  if (localStorage.getItem('right_num')!=null){

  let right_int = parseInt(update_right);
  let wrong_int = parseInt(update_wrong);

  right_score.innerHTML=right_int;
  wrong_score.innerHTML=wrong_int;
  percentage.innerHTML=(right_int/(right_int+wrong_int)*100)+"%"
  executeD3(right_int,wrong_int)
}
else{
  right_score.innerHTML=0;
  wrong_score.innerHTML=0;
  percentage.innerHTML=0+"%";
  right_int = 0;
  wrong_int = 0;
  executeD3(right_int,wrong_int)
}
}

function executeD3 (right_int,wrong_int){
    let pieData = [
      { label: 'Right', value: right_int },
      { label: 'Wrong', value: wrong_int }
  ];
//sets dimensions of the visualization for the pie chart
    let pieWidth = 250;
    let pieHeight = 250;

//impacts sizing of the graph
    let pieRadius = Math.min(pieWidth, pieHeight) / 2;
  
    let pieSvg = d3.select("#piechart")
      .append("svg")
      .attr("width", pieWidth)
      .attr("height", pieHeight)
      .append("g")
      .attr("transform", "translate(" + pieWidth / 2 + "," + pieHeight / 2 + ")");
  
    let pieColor = d3.scaleOrdinal()
      .domain(pieData.map(d => d.label))
      .range(["#0d9102", "#c90000"]);
  
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
      { label: 'Right', value: right_int },
      { label: 'Wrong', value: wrong_int }
  ];
    console.log(right_int,wrong_int)

//sets the width/height of the bar chart
  
    let barWidth = 250;
    let barHeight = 250;

//uses stuff from D3.js to set the bars
    let barSvg = d3.select("#barchart")
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

    if (right_int+wrong_int==0){
      barHeight = 125;
      barWidth = 125;
    }
  
    barSvg.selectAll("rect")
      .data(barData)//data dictionary for the columns
      .enter()
      .append("rect")
      .attr("x", d => barX(d.label))
      .attr("y", d => barY(d.value))
      .attr("width", barX.bandwidth())
      .attr("height", d => barHeight - barY(d.value))
      .attr("fill", d => (d.label === 'Right' ? '#0d9102' : (d.label === 'Wrong' ? '#c90000' : '#CCCCCC')));
}
