var xValue = ['Hawii', 'Vermont', 'Wyoming', 'South Dakota', 'North Dakota', 'Montana', 'Idaho', 'Rhode Island', 'Maine', 'New Hampshire'];

var yValue = [289, 472, 494, 544, 573, 638, 661, 895, 907, 964];

var trace1 = {
  x: xValue,
  y: yValue,
  type: 'bar',
  text: yValue.map(String),
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgb(158,202,225)',
    opacity: 0.6,
    line: {
      color: 'rgb(8,48,107)',
      width: 1.5,
      line: {
        color: 'rgb(8,48,107)',
        width: 1.5
      }
    }
  }
};

var data = [trace1];

var layout = {
  title: 'Top 10 States with the lowest Cases of Gun Violence (2013-2018)',
  barmode: 'stack'
};

Plotly.newPlot('plot', data, layout);