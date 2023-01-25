// Crear mapa
var map = L.map("map").setView([lat, lng], zoom);

// Añadir capa de mapa
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors",
  maxZoom: 18
}).addTo(map);

// Añadir marcador
L.marker([lat, lng]).addTo(map);




  