//Crear mapa
var map = L.map("map").setView([3.4372,-76.5225], 12);

// Añadir capa de mapa satelital de Mapbox
var mapboxSatelital = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHZ6YW1vcmEiLCJhIjoiY2tteDZrbmprMG0ybTJ2azZtMWNnZmxudCJ9.RY8vFhfWklg9xmmebG98FA'
}).addTo(map);