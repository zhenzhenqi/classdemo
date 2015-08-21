//bar chart
var w = 500;
var h = 200;
var barPadding = 1;

var dataset = [];

for (var i = 0; i < 20; i++) {
    var newNumber = Math.random() * 30; //give us a random number between 0 to 30.
    dataset.push(newNumber);
}

var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)

svg.selectAll("rect") 
    .data(dataset) 
    .enter()
    .append("rect") 
    .attr("x", function (d, i) {
        return i * (w / dataset.length);
    })
    .attr("y", function (d) {
        return h - d * 4;
    })
    .attr("width", w / dataset.length - barPadding)
    .attr("height", function (d) {
        return d * 4;
    })
    .attr("fill", function (d) {
        return "rgb(0, 0," + (d * 10) + ")";
    });

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("x", function (d, i) {
        return i * (w / dataset.length)+ 5;
    })
    .attr("y", function (d) {
        return h - d * 4 + 14;
    })
    .attr("fill", "white");