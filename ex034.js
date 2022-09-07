let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var salary = Number(lines[0]);
var newSalary;

if(salary <= 400.00){
    newSalary = salary*1.15;
    console.log('Novo salario: ' +newSalary.toFixed(2));
    console.log('Reajuste ganho: ' +(salary*0.15).toFixed(2));
    console.log('Em percentual: ' +'15 %');
}else if(salary <= 800.00){
    newSalary = salary*1.12;
    console.log('Novo salario: ' + newSalary.toFixed(2));
    console.log('Reajuste ganho: ' + (salary*0.12).toFixed(2));
    console.log('Em percentual: ' +'12 %');
}else if(salary <= 1200.00){
    newSalary = salary*1.10;
    console.log('Novo salario: ' + newSalary.toFixed(2));
    console.log('Reajuste ganho: ' + (salary*0.10).toFixed(2));
    console.log('Em percentual: ' +'10 %');
}else if(salary <= 2000.00){
    newSalary = sal*1.07;
    console.log('Novo salario: ' +newSalary.toFixed(2));
    console.log('Reajuste ganho: ' +(salary*0.07).toFixed(2));
    console.log('Em percentual: ' +'7 %');
}else if(sal > 2000.00){
    newSalary = salary*1.04;
    console.log('Novo salario: ' +newSalary.toFixed(2));
    console.log('Reajuste ganho: ' +(salary*0.04).toFixed(2));
    console.log('Em percentual: ' +'4 %');
}