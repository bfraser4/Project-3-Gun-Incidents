// Create an array of each country's numbers
let alabama = Object.values(data.Alabama);
let california = Object.values(data.California);
// let uk = Object.values(data.uk);
// let mexico = Object.values(data.mexico);
// let singapore = Object.values(data.singapore);
// let southAfrica = Object.values(data.southAfrica);

// Create an array of category labels
let labels = Object.keys(data.Alabama);
console.log()

// Display the default plot
function init() {
  let data = [{
    values: alabama,
    labels: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
  console.log()
}

// On change to the DOM, call getData()
// d3.selectAll("#selDataset").on("change", getData);

// // Function called by DOM changes
// function getData() {
//   let dropdownMenu = d3.select("#selDataset");
//   // Assign the value of the dropdown menu option to a letiable
//   let dataset = dropdownMenu.property("value");
//   // Initialize an empty array for the country's data
//   let data = [];

//   if (dataset == 'Alabama') {
//       data = alabama;
//   }
//   else if (dataset == 'California') {
//       data = california;
//   }
//   // else if (dataset == 'uk') {
//   //     data = uk;
//   // }
//   // else if (dataset == 'mexico') {
//   //   data = mexico;
//   // }
//   // else if (dataset == 'singapore') {
//   //     data = singapore;
//   // }
//   // else if (dataset == 'southAfrica') {
//   //   data = southAfrica;
//   // }
// // Call function to update the chart
//   updatePlotly(data);
// }

// // Update the restyled plot's values
// function updatePlotly(newdata) {
//   Plotly.restyle("bar", "values", [newdata]);
// }

init();
