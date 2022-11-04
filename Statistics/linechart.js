const CSV =
    "incidentby_year.csv";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        processData(rows);
    });
}

function processData(allRows) {
  let y1 = [];
  let y2 = [];
  let row;

  let i = 0; 
  while (i < allRows.length) {
    row = allRows[i];
    y1.push(row["State"]);
    y2.push(row["Injury Intent"]);
    i += 1;
  }
    makePlotly(y1, y2);
}

function makePlotly(y1, y2) {
  var trace1 = {
    x: y1,
    y: y2,
    mode: 'lines',
    name: 'Solid',
    line: {
      dash: 'solid',
      width: 4
    }
    };

  // var trace2 = {
  //   x: [1, 2, 3, 4, 5],
  //   y: [6, 8, 7, 8, 6],
  //   mode: 'lines',
  //   name: 'dashdot',
  //   line: {
  //     dash: 'dashdot',
  //     width: 4
  //   }
  // };

  // var trace3 = {
  // x: [1, 2, 3, 4, 5],
  // y: [11, 13, 12, 13, 11],
  // mode: 'lines',
  // name: 'Solid',
  // line: {
  //   dash: 'solid',
  //   width: 4
  // }
  // };

  // var trace4 = {
  // x: [1, 2, 3, 4, 5],
  // y: [16, 18, 17, 18, 16],
  // mode: 'lines',
  // name: 'dot',
  // line: {
  //   dash: 'dot',
  //   width: 4
  // }
  // };

  var data = [trace1];

  var layout = {
    title: 'Line Dash',
    xaxis: {
      range: [0.75, 5.25],
      autorange: false
    },
    yaxis: {
      range: [0, 18.5],
      autorange: false
    },
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {
        size: 16
      }
    }
  };

  Plotly.newPlot('plot', data, layout);
}
