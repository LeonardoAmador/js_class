let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

let employee = 25;
let hours =  100;
let recived = 5.50; 

let result = hours * recived; 

console.log (`NUMBER = ${employee}`);
console.log (`SALARY = U$ ${result.toFixed(2)}`);

