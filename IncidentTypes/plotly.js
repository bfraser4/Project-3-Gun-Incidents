var trace1 = {
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [19990, 20666, 21175, 21386, 22018, 22938, 23854, 24432, 23941, 24292],
    mode: 'lines',
    name: 'Suicides',
    line: {
      dash: 'dash',
      width: 4
    }
  };
  
  var trace2 = {
    x: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
    y: [11522, 12093, 11675, 11472, 13463, 14925, 15095, 14497, 14934, 19995],
    mode: 'lines',
    name: 'Homicides',
    line: {
      dash: 'dot',
      width: 4
    }
  };
  
  var data = [trace1, trace2];
  
  var layout = {
    title: 'Types of Gun Incidents',
    xaxis: {
      range: [2011, 2020],
      autorange: false
    },
    yaxis: {
      range: [0, 20000],
      autorange: true
    },
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {
        size: 16
      }
    }
  };
  
  Plotly.newPlot('myDiv', data, layout);