let input = require('fs').readFileSync('entrada.txt', 'utf8');
var [Aa]= input.split()
var v = parseFloat(Aa)
let c = [100.00, 50.00, 20.00, 10.00, 5.00, 2.00, 1.00, 0.50, 0.25, 0.10, 0.05, 0.01]
let ax = 0
console.log("NOTAS:")
for (let i = 0; i < 6; i++) {
    ax = parseInt(v / c[i])
    console.log(`${ax} nota(s) de R$ ${c[i].toFixed(2)}`)
    v = v % c[i]
}
console.log("MOEDAS:")
for (let jay = 6; jay < c.length; jay++) {
    ax = parseInt(v / c[jay])
    console.log(`${ax} moeda(s) de R$ ${c[jay].toFixed(2)}`)
    v = v % c[jay] + 0.00001
}