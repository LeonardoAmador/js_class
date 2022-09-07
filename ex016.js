var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var line = input.split('\n');

const Segundos = parseInt(input);

const horas = parseInt(Segundos / 3600);
Segundos = Segundos % 3600;

const Minutos = parseInt(Segundos / 60);
Segundos = Segundos % 60;

console.log(`${horas}:${Minutos}:${Segundos}`);
