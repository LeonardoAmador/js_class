let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');

var N = parseInt(lines.shift());
for (var cont = 1; cont <= N; cont++){
    if (cont%2==0){
        console.log(cont + '^2 = ' + (cont * cont));
    }
}