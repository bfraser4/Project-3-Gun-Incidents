function makeplot() {
    d3.csv("/Users/brittanieocampo/Desktop/Project-3-Gun-Incidents/Statistics/firearm_homicides.csv", function(data){ processData(data) } );
  
  };
  
  function processData(allRows) {
  
    console.log(allRows);
    var x = [], y = [];
  
    for (var i=0; i<allRows.length; i++) {
      row = allRows[i];
      x.push( row['Year'] );
      y.push( row['Total_Deaths'] );
    }
    console.log( 'X',x, 'Y',y);
    makePlotly( x, y);
  }
  
  function makePlotly( x, y){
    var plotDiv = document.getElementById("graph");
    var traces = [{
      x: x,
      y: y
    }];
  
    Plotly.newPlot('graph', traces,
      {title: 'Plotting CSV data from AJAX call'});
  };
    makeplot();

