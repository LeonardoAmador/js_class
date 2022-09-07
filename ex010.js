
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var line = input.split('\n');

let a = line[0].split(' ');
let b = line[1].split(' ');
let total = (a[1] * a[2]) + (b[1] * b[2]);
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);



