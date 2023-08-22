
    // this is for maps 
    var map = L.map('map').setView([10, 10], 2);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

var myIcon = L.icon({
    iconUrl: './location.svg',
    iconSize: [35.434, 35.434]
});

var locations = [
[33.427204, -111.939896],
[40, -90],
[-30, 20],
[61.86868,-162.52697],
[36.69939,69.85476],
[10.31633,26.91614],
[10, 100]
]


for (let i = 0; i < locations.length; i++) {
    var marker = L.marker(locations[i], {icon: myIcon}).addTo(map);
}


    var stage1 = L.polyline([locations[0], locations[1]], {color: '#2352D0'}).addTo(map);
    animatedMarker = L.animatedMarker(stage1).addLayer;

map.addLayer(animatedMarker);
    var stage2 =  L.polyline([locations[1], locations[3]], {color: 'black'}).addTo(map);
    var stage3 =  L.polyline([locations[3], locations[2]], {color: '#7C3DA2'}).addTo(map);
    var stage4 =  L.polyline([locations[3], locations[4]], {color: '#FFB607'}).addTo(map);
    var stage5 =  L.polyline([locations[4], locations[5]], {color: '#DE3E40'}).addTo(map);
    var stage6 =  L.polyline([locations[4], locations[5]], {color: '#773D90'}).addTo(map);
    var stage7 =  L.polyline([locations[5], locations[6]], {color: '#D88C31'}).addTo(map);



// zoom the map to the polyline
map.fitBounds(polyline.getBounds());

