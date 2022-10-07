"use strict";
let input = require('fs').readFileSync('test02.txt', 'utf8');
let lines = input.split('\n');

let linha1 = lines[0].split(' ');
let operador = linha1[0];
let valores = lines[1].split(' ').map(x => Number(x));

console.log(operador);
console.log(valores);

switch (operador) {
    case '+':
        console.log(valores.reduce((atual, total) => total += atual));
        break;
    case '-':
        console.log(valores.reduce((atual, total) => total -= atual));
        break;
    case '*':
        console.log(valores.reduce((atual, total) => total *= atual, 1));
        break;
    case '/':
        let total = valores[0];
        for (let i = 1; i < valores.length; i++) {
            total = total / valores[i];
        }
        console.log(total);
        break;
}
