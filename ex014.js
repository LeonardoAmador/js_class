let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let time = Number(lines[0]);
let speed = Number(lines[1]);
let km_h = time * speed;
let result = km_h/12;

console.log(`${result.toFixed(3)}`);

