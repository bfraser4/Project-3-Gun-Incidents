let alabama = Object.values(data.Alabama)

let trace1 = {
  x: data, 
  y: year,
  type: 'bar'
}

let data = [trace1];

let layout = {
  title: title
}

Plotly.newPlot('plot', data, layout)