//Width og height til SVG-elementet
const w = 1000;
const h = 1000;
//kalder w (width) for 500
//kalder h (height) for 100
const dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];
dataset.sort(function (a, b) {
  return a[0] - b[0];
});
console.log(dataset);
//dataset

//SVG-elementet
const svg = d3.select("body").append("svg").attr("width", w).attr("height", h);
//ligger height på consten h og modsat med w

//Scatter plot
svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  //'d' et element i 'dataset',
  //som selv er et array med x,y koordinater
  .attr("cx", function (d) {
    // Første værdi i indre array (x)
    return d[0];
  })
  .attr("cy", function (d) {
    //Anden værdi i indre array (y)
    return d[1];
  })
  .attr("r", function (d) {
    return d[1] / 4;
  })
  .attr("fill", function (d) {
    return d3.interpolateBlues(d[1] / 100); // Normalize color value
  });
