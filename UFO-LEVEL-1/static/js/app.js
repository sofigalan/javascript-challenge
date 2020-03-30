// from data.js
var tableData = data;

// YOUR CODE HERE!
// Select tbody
var tbody = d3.select("tbody");
// Selec table
var table = d3.select("table");

data.forEach((UFO_Report) => {
  var row = tbody.append("tr");
  Object.entries(UFO_Report).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select button
var button = d3.select("#filter-btn");

button.on("click", function() {
  tbody.selectAll("tr").remove();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(ufo_date => ufo_date.datetime === inputValue);

  console.log(filteredData)

  data = filteredData;
  data.forEach((UFO_Filter_Report) => {
    var row = tbody.append("tr");
    Object.entries(UFO_Filter_Report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  console.log(UFO_Filter_Report)
  });
});