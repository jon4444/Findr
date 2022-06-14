const api_key =
  "pk.eyJ1Ijoiam9uOTgiLCJhIjoiY2w0YnY5bDdsMDlkZjNwcXZmaWVvejFmZiJ9.VW4vYT8NmIT0TqjyNDfLPQ";

const map = L.map("myMap").setView([50.860, -0.086], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
  accessToken: api_key
}).addTo(map);

// custom icon
var greenIcon = L.icon({
  iconUrl: '/img/markers/amex.jpeg',
  shadowUrl: '',

  iconSize:     [60, 60], // size of the icon
  iconAnchor:   [60, 60], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

const marker = L.marker([50.860, -0.085], {icon: greenIcon});
marker.addTo(map);  

const marker2 = L.marker([50.861, -0.083], {icon: greenIcon});
marker2.addTo(map);

// add a popup message 
const template = `
  <h4>The Hub (Watson)</h4>
`
const template2 = `
  <h5>Amex Stadium</h5>
  <div style="text-align: center">
    <img width="150" height="150" src="/img/amex.jpeg"/>
  </div>
 
`
marker.bindPopup(template).openPopup();
marker2.bindPopup(template2);

// 50.86165103876395, -0.08651274999386008  -> point 1
// 50.86093009172404, -0.08990245996162541  -> point 2 
// 50.859061779242914, -0.09377115068570538  -> point 3
// 50.85806945006, -0.09331673304509917  -> point 4
// 50.85956568832173, -0.09060250875931607  -> point 5
// 50.86028665645751, -0.08821988653559698   -> point 6
// 50.861178160780646, -0.08605833235325387  -> point 7

// 50.86027469320689, -0.09030836601801734

var polygon = L.polygon([
  [50.861932, -0.086592],
  [50.861, -0.090],
  [50.859, -0.094],
  [50.858, -0.093],
  [50.859674, -0.090695],
  [50.860, -0.088], 
  [50.861, -0.086]
], {
  color: 'red'
}).addTo(map).bindPopup('this area is off limits');

const circle = L.circle([50.86018, -0.08539], {
  color: 'blue', 
  radius: 50,
  fillOpacity: 0.2
}).addTo(map);