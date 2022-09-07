let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let raio = Number(lines[0]);
const PI = 3.14159;

let area = PI*raio*raio;

console.log(`A=${area.toFixed(4)}`);