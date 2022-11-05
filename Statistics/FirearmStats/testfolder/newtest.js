let states = []
let alabama = []
let year = []

for (let i = 0; i < data.length; i++){
    row = data[i];
    states.push(row.pair);
    alabama.push(row.alabama);

}

let trace1 = {
    x: alabama,
    y: alabama,
    text: year, 
    name: 'Injuries', 
    type: 'bar'
}

let array = [trace1]

let layout = {
    title: 'Injuries'
}

Plotly.newPlot('plot', array, layout);