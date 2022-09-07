let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let c = Number(lines[2]);
let result = (a * 2 + b * 3 + c * 5)/10;
console.log(`MEDIA = ${result.toFixed(1)}`);