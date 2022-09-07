let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

var line = lines.shift().split(" ");
var x = parseInt(line[0]);
var y = parseInt(line[1]);
if (x > y) { 
    console.log('O JOGO DUROU ' + (24 - (x - y)) + ' HORA(S)');
} else if (y > x) {
    console.log('O JOGO DUROU ' + (y - x) + ' HORA(S)');
} else {
   console.log('O JOGO DUROU 24 HORA(S)');
}