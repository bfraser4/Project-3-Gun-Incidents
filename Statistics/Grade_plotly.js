var xValue = [6.75,7.70,11.80,13.30,13.50,22.70,12.70,15.20,17.30,18.80];

var yValue = ["A","A-","B","B-","C+","C","C-","D","D-","F"];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgb(142,124,195)',
    opacity: 0.6,
    line: {
      color: 'rgb(142,124,195)',
      width: 1.5,
      line: {
        color: 'rgb(142,124,195)',
        width: 1.5
      }
    }
  }
};

var data = [trace1];

var layout = {
  title: "average per capita deaths by Gifford Grade",
  barmode: 'stack'
};

Plotly.newPlot('plot', data, layout);