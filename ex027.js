let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var id = lines.shift().split(" ");
var code = Number(id[0]);
var qtd = Number(id[1]);
var total;

switch (code) {
    case 1: total = qtd * 4.00; break;
    case 2: total = qtd * 4.50; break;
    case 3: total = qtd * 5.00; break;
    case 4: total = qtd * 2.00; break;
    case 5: total = qtd * 1.50; break;
    default: total = 0;
}
console.log(`Total: R$ ${total.toFixed()}`);