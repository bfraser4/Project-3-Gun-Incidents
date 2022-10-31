// Creating the map object
var myMap = L.map("map", {
    center: [39.0997, -94.5786],
    zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Use this link to get the GeoJSON data.
// var link = STATES;
x = []
//Importing json file to Javascript
d3.json("./Resources/election.json").then(function(info){

//   console.log("info.data") 
//     console.log(info.data.length) 
    x= info.data
// Loop through the cities array, and create one marker for each city object.
    for (var i = 0; i < info.data.length; i++) {
        console.log(info.data[i].State) 
        state = info.data[i].State
        lat = info.data[i].lat
        long = info.data[i].long
        affiliation = info.data[i].Gov_Political_Affiliation

        if(affiliation == "Republican"){
            color = "red"
        }
        else if (affiliation == "Democrat"){
            color = "blue"
        }
    }
})
