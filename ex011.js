let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

var [A, B, C] = input.split(" ");
var PI = 3.14159;

var areaTri = (A * C)/2.0;
var areaCir = PI * Math.pow(C, 2);
var areaTra = ((parseFloat(A) + parseFloat(B)) * C) / 2;
var areaQua = B * B;
var areaRetan = A * B;

console.log(`TRIANGULO: ${areaTri.toFixed(3)}`);
console.log(`CIRCULO: ${areaCir.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTra.toFixed(3)}`);
console.log(`QUADRADO: ${areaQua.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetan.toFixed(3)}`);