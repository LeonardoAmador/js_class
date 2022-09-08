let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var num = parseInt(lines.shift());
var larger = num;
var position = 1;
for(var cont = 1; cont <= 100; cont++){
    if (larger < num){
        larger = num;
        position = cont
    }
    num = Number(lines.shift());
}
console.log(`${larger}\n${position}`);