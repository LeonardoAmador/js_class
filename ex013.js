let input = require('fs').readFileSync('entrada.txt', 'utf8');

const minutos = (60 * input) / 30;
console.log(minutos + " minutos");