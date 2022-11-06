var trace1 = {
    x: ['California', 'Texas', 'Florida', 'Illinois', 'Ohio', 'Georgia', 'Pennsylvania', 'North Carolina', 'Louisiana', 'Missouri'],
    // x2: ['Democrat', 'Republican', 'Republican', 'Democrat', 'Republican', 'Republican', 'Democrat', 'Democrat', 'Democrat', 'Republican'],
    y: [5562, 5046, 3909, 3409, 2508, 2456, 2395, 2225, 2179, 2136],
    type: 'bar',
    name: 'State',
    marker: {
      color: 'rgb(174,33,33)',
      opacity: 8,
    }
  };
  
  var trace2 ={
    x2: ['Democrat', 'Republican', 'Republican', 'Democrat', 'Republican', 'Republican', 'Democrat', 'Democrat', 'Democrat', 'Republican'],
    y2: [5562, 5046, 3909, 3409, 2508, 2456, 2395, 2225, 2179, 2136],
    type: 'bar',
    name: 'Primary Product',
    marker: {
      color: 'rgb(52,110,225)',
      opacity: 8,
    }
  }
  var data = [trace1, trace2];
  
  var layout = {
    title: 'Top 10 States with the most deaths due to gun violence (2013-2018)',
    // xaxis: {
    //   tickangle: -45
    // },
    // barmode: 'group'
  };
  
  Plotly.newPlot('graph', data, layout);