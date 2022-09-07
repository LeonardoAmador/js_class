var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var line = input.split('\n');

let V = parseInt(input);

const N = [100, 50, 20, 10, 5, 2, 1];

console.log(V);

for (let Cedulas of N) {
    let qtdCedulas = parseInt(V / Cedulas);
    console.log(`${qtdCedulas} nota(s) de R$ ${Cedulas},00`);
    V = V  % Cedulas;   
}