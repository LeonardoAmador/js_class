let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var x = lines.shift();
var y = parseInt(lines.shift());
var cont = 0;
for(var i = (y + 1); i < x; i++){
    if (i%2!=0) {
        cont+= i;
    }
}
console.log(cont);