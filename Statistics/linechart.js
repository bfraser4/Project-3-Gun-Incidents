
// var trace1 = {
//     x: [1, 2, 3, 4, 5],
//     y: [1, 3, 2, 3, 1],
//     mode: 'lines',
//     name: 'Solid',
//     line: {
//       dash: 'solid',
//       width: 4
//     }
//   };
  
//   var trace2 = {
//     x: [1, 2, 3, 4, 5],
//     y: [6, 8, 7, 8, 6],
//     mode: 'lines',
//     name: 'dashdot',
//     line: {
//       dash: 'dashdot',
//       width: 4
//     }
//   };
  
//   var trace3 = {
//     x: [1, 2, 3, 4, 5],
//     y: [11, 13, 12, 13, 11],
//     mode: 'lines',
//     name: 'Solid',
//     line: {
//       dash: 'solid',
//       width: 4
//     }
//   };
  
//   var trace4 = {
//     x: [1, 2, 3, 4, 5],
//     y: [16, 18, 17, 18, 16],
//     mode: 'lines',
//     name: 'dot',
//     line: {
//       dash: 'dot',
//       width: 4
//     }
//   };
  
//   var data = [trace1, trace2, trace3, trace4];
  
//   var layout = {
//     title: 'Line Dash',
//     xaxis: {
//       range: [0.75, 5.25],
//       autorange: false
//     },
//     yaxis: {
//       range: [0, 18.5],
//       autorange: false
//     },
//     legend: {
//       y: 0.5,
//       traceorder: 'reversed',
//       font: {
//         size: 16
//       }
//     }
//   };
  
// Plotly.newPlot('myDiv', data, layout);


var years = ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

Plotly.d3.csv('incidentby_year.csv', (err, rows) => {
  var data = years.map(y => {
    var d = rows.filter(r => r.year === y)
    
    return {
      type: 'line',
      name: y,
      x: d.map(r => r.dealer),
      y: d.map(r => r.sales)
    }
  })
  
  Plotly.newPlot('graph', data)
})