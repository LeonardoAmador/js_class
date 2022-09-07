let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let a = Number(lines[0]);
let b = Number(lines[1]);
let media = ((3.5 * a) + (7.5 * b))/11;

console.log(`MEDIA = ${media.toFixed(5)}`);