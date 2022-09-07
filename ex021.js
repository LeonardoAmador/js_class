var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseFloat(lines.shift());
let c = 0;
let nbrs = 0;
for(let i = 0; i < 6; i++){
  if(num > 0){
    c++;
    nbrs += num;
  }
  num = parseFloat(lines.shift());
}
const m = nbrs / c;

console.log(`${c} valores positivos\n${m.toFixed(1)}`);