//Manuel mapping
function mapping(inputValue) {
  return (inputValue / 1000) * 300;
}

console.log("Manual mapping of 1000: " + mapping(1000));
console.log("Manual mapping of 500: " + mapping(500));
console.log("Manual mapping of 50: " + mapping(50));
//input value er det der kommer ind efter mapping (1000, 500, 50)

//D3 mapping 'input'-domain til 'output'-range
const scale = d3.scaleLinear().domain([0, 1000]).range([0, 300]);

console.log("Scale mapping of 1000: " + scale(1000));
console.log("Scale mapping of 500: " + scale(500));
console.log("Scale mapping of 50: " + scale(50));
//scalere scale(tallet) i forhold til range som er 300.
//dvs at 1000 er 100% af 1000 så derfor forbliver 300 på 300
//dvs at 500 er 50% af 1000 så derfor bliver 300 halveret til 150

const numbers = [5, 10, 2, 7, 12, 8];

let maxValue = d3.max(numbers);
let minValue = d3.min(numbers);
console.log(maxValue);
console.log(minValue);

//Width og height til et SVG-element
const w = 500;
const h = 100;
//tager og deviderer højde af søjle (numbers array)
//så siger vi numbers * 100 (for det er h) / d (d er maks value for numbers (12)) . og ligger det som scaled value.
//Dvs at scaled value for 5 bliver til
//Skala for y-aksen
const yScaleOLD = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(numbers, function (d) {
      return d;
    }),
  ])
  .range([0, h]);

for (let n in numbers) {
  console.log("original value: " + numbers[n]);
  console.log("scaled value: " + Math.round(yScaleOLD(numbers[n])));
}

//For to-dimensionelt data
const data = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
];
//Skala for x-aksen
const xScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, function (d) {
      return d[0];
    }),
  ])
  .range([0, w]);

//Skala for y-aksen
const yScale = d3
  .scaleLinear()
  .domain([
    0,
    d3.max(data, function (d) {
      return d[1];
    }),
  ])
  .range([0, h]);

for (let d in data) {
  console.log("original x,y: " + data[d][0] + "," + data[d][1]);
  console.log(
    "scaled x,y: " +
      Math.round(xScale(data[d][0])) +
      "," +
      Math.round(xScale(data[d][1]))
  );
}
