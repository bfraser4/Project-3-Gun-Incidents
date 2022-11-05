const CSV =
    "Statistics/FirearmStats/firearm_suicides.csv";

function plotFromCSV() {
    Plotly.d3.csv(CSV, function(err, rows) {
        processData(rows);
    });
}

function processData(allRows) {
  let x1 = []; //year; on x axis KEEP; x1 in trace 1 keeps year on xaxis
  let y1 = []; //injury intent
  // let y2 = []; //total deaths 
  let row;

  let i = 0; 
  while (i < allRows.length) {
    row = allRows[i];
    x1.push(row["Year"]);
    y1.push(row["Total_Deaths"]);
    // y2.push(row["Total_Deaths"]);
    i += 1;
  }
    makePlotly(x1, y1);
}

function makePlotly(x1, y1) {
  let traces = [
      {
          x: x1,
          y: y1,
          type: "line",
          marker: {
            color: 'blue'
          },
          name: ""
      }
      // {
      //     // x: x1, //gives zig zag 
      //     y: y2,
      //     type: "line",
      //     marker: {
      //         color: 'rgb(255,0,0)'
      //       },
      //     name: ""
      // }
      
  ];

  var data = [traces]

  let layout = {
      title: "Incident Type by Year",
      xaxis: {
        range: [0.75, 5.25],
        autorange: false
      },
      yaxis: {
          range: [0, 18.5],
          autorange: false,
          gridcolor: "lightgrey",
          title: 'Total Incident Deaths'
      }
  };

  let config = { responsive: true };

  Plotly.newPlot("plot", traces, layout, config);
}

plotFromCSV();