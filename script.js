//Crear mapa
var map = L.map("map").setView([3.4372,-76.5225], 11.5);

// Añadir capa de mapa satelital de Mapbox
var mapboxSatelital = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 22,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZHZ6YW1vcmEiLCJhIjoiY2tteDZrbmprMG0ybTJ2azZtMWNnZmxudCJ9.RY8vFhfWklg9xmmebG98FA'
}).addTo(map);


// GRÁFICAS DASHBOARD
// BARRAS

// Seleccionar el elemento donde se quiere dibujar el gráfico
var barChart = d3.select("#bar-chart");

// Establecer el tamaño del gráfico
var width = barChart.node().getBoundingClientRect().width;
var height = 400;

// Crear un svg dentro del elemento seleccionado
var svg = barChart.append("svg")
    .attr("width", width)
    .attr("height", height);

// Cargar el archivo csv
var url = "https://gist.githubusercontent.com/DavidZamoraR/482c2e5d8880b128e063e17ab654a245/raw/d918e804c47c069d8f42c19de2fc67c65145a37a/Elec2019-Cali-CONCEJO.csv"
d3.csv(url,{delimiter: ","}, function(error, data) {
    var votes = data.map(function(d) { return d.votos; });
    var parties = data.map(function(d) { return d.partido; });

    console.log(data);


    // Escala de barras
    var x = d3.scaleBand()
        .domain(parties)
        .bandwidth([0, width])
        .padding(0.1);

    var y = d3.scaleLinear()
        .domain([0, d3.max(votes)])
        .range([height, 0]);

    // Crear las barras
    svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.partido); })
        .attr("y", function(d) { return y(d.votos); })
        .attr("width", x.bandwidth())
        .attr("height", function(d) { return height - y(d.votos); })
        .attr("fill", "steelblue");

    // Agregar ejes
    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .call(yAxis);
});