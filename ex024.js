let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var name = lines.shift();
let salary = parseFloat(lines.shift());
let totsale = parseFloat(lines.shift());

var x = totsale * 0.15;
var newSalary = salary + x;
console.log(`TOTAL = R$ ${newSalary.toFixed(2)}`);