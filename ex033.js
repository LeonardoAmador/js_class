let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

var x = parseFloat(input);
var PI = 3.14159;
var y = (4/3) * PI * Math.pow(x, 3);
console.log("VOLUME = "+ y.toFixed(3));