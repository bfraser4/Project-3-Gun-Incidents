var data = [{
    type: "pie",
    values: [37250, 13967, 22469,],
    labels: ['All Firearm Deaths', 'Firearm Homicide','Firearm Suicide'],
    marker:{ colors: [
        'rgb(220, 21, 41)',
        'rgb(81, 91, 225)',
        'rgb(255, 116, 52)'
    ],
    textinfo: "label+percent",
    textposition: "outside",
    insidetextorientation: "radial",
    automargin: true
}
  }]
  
  var layout = [{
    height: 700,
    width: 700,
    // margin: {"t": 0, "b": 0, "l": 0, "r": 0},
    // showlegend: false

  }]
  
  Plotly.newPlot('plot', data, layout)