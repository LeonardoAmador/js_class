let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let x = a * b;

console.log(`PROD = ${x}`);