var trace1 = {
    x: ['California', 'Texas', 'Florida', 'Illinois', 'Ohio', 'Georgia', 'Pennsylvania', 'North Carolina', 'Louisiana', 'Missouri'],
    x2: ['Democrat', 'Republican', 'Republican', 'Democrat', 'Republican', 'Republican', 'Democrat', 'Democrat', 'Democrat', 'Republican'],
    y: [5562, 5046, 3909, 3409, 2508, 2456, 2395, 2225, 2179, 2136],
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: 'rgb(174,33,33)',
      opacity: 0.8,
    }
  };
  
//   var trace2 = {
//     x: ['Democrat', 'Republican', 'Republican', 'Democrat', 'Republican', 'Republican', 'Democrat', 'Democrat', 'Democrat', 'Republican'],
//     y: [5562, 5046, 3909, 3409, 2508, 2456, 2395, 2225, 2179, 2136],
//     type: 'bar',
//     name: 'Secondary Product',
//     marker: {
//       color: 'rgb(204,204,204)',
//       opacity: 0.5
//     }
//   };
  
  var data = [trace1];
  
  var layout = {
    title: 'Top 10 States with the most deaths due to gun violence (2013-2018)',
    xaxis: {
      tickangle: -45
    },
    barmode: 'group'
  };
  
  Plotly.newPlot('plot', data, layout);