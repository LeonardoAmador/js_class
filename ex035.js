let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var salary = parseFloat(lines.shift());
var tax;
if (salary >= 0 && salary <= 2000) {
    console.log('Isento');
} else if (salary > 2000 && salary <= 3000) {
    tax = (salary - 2000) * 0.08;
    console.log('R$ ' + tax.toFixed(2));
} else if (salary > 3000 && salary <= 4500) {
    tax = ((salary - 3000)  * 0.18) + 80;
    console.log('R$ ' + tax.toFixed(2));
} else {
    tax = ((salary - 4500) * 0.28) + 350;
    console.log('R$ ' + salary.toFixed(2));
}