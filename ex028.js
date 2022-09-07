let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var Id = lines.shift().split(" ");
var Y = parseFloat(Id[0]);
var X = parseFloat(Id[1]);

if (Y == 0 && X === 0) {
    console.log('Origem');
} else if (Y === 0) {
    console.log('Eixo Y');
} else if (X === 0) {
    console.log('Eixo X');
} else if (X > 0 && Y > 0) {
    console.log('Q1');
} else if (X > 0 && Y < 0) {
    console.log('Q2');
} else if (X < 0 && Y < 0) {
    console.log('Q3');
} else if (X < 0 && Y > 0) {
    console.log('Q4');
}