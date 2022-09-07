let input = require('fs').readFileSync('entrada.txt', 'utf8');
let lines = input.split('\n');
var l = lines.shift().split(" ");
var n1 = parseFloat(l[0]);
var n2 = parseFloat(l[1]);
var n3 = parseFloat(l[2]);
var big;
var s;
var tri;

if (n1 > n2 && n1 > n3) big = n1;
else if (n2 > n3) big = n2;
else big = n3;

if (big == n1) s = n2 + n3;
else if (big == n2) s = n1 + n3;
else s = n2 + n1;
if (s > big) tri = true;
else tri = false;

if (tri) {
    var x = n1 + n2 + n3;
    console.log('Perimetro = ' + x.toFixed(1));
} else {
    var x2 = ((n1 + n2) * n3) / 2;
    console.log('Area = ' + x2.toFixed(1));
}