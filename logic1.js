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
var link = "gz_2010_us_040_00_500k.json"
function chooseColor(borough){
    if (borough=="Republican") return "red";
    else return "blue"

}
// x = []
// //Importing json file to Javascript
// d3.json("./Resources/election.json").then(function(info){

// //   console.log("info.data") 
// //     console.log(info.data.length) 
//     x= info.data
//     console.log(x)
// // Loop through the cities array, and create one marker for each city object.
//     for (var i = 0; i < x.length; i++) {
//         // console.log(x[i].State) 
//         state = x[i].State
//         lat = x[i].lat
//         long = x[i].long
//         affiliation = x[i].Gov_Political_Affiliation
//         // console.log(x[i].Gov_Political_Affiliation)
//         if(x[i].Gov_Political_Affiliation == "Republican"){
//             color = "red"
//         }
//         else if (x[i].Gov_Political_Affiliation == "Democrat"){
//             color = "blue"
//         }
//     }
// })
d3.json(link).then(function(data){
    L.geoJson(data,{
        style: function(feature){
            return{
                color: "white",
                fillColor: chooseColor(feature.properties.borough),
                fillOpacity: 0.5,
                weight: 1.5
            }
        },
        onEachFeature: function(feature, layer){
            layer.on({
                mouseover: function(event){
                    layer=event.target
                    layer.setStyle({
                        fillOpacity:0.9
                    })
                },
                mouseout: function(event){
                    bob = event.target
                    bob.setStyle({
                        fillOpacity:0.5
                    })
                },
                click: function(event){
                    myMap.fitBounds(event.target.getBounds())
                }
            })
            layer.bindPopup("<h1>"+feature.properties.neighborhood +"</h1>"+"<hr>" +"<h2>" +feature.properties.borough + "</h2>")
        }
    }).addTo(myMap)
})

