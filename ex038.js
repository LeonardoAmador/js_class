let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
let num = parseInt(lines.shift());

for(let cont = 0; cont < num; cont++){
    let [n1, n2, n3] = lines[cont].split(" ");
    average = ((n1*2) + (n2*3) + (n3*5)) / 10;
    console.log(average.toFixed(1));
}
