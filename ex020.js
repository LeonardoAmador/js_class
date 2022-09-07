var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = lines.shift();
let c = 0;
for(let i = 0; i < 6; i++){
  if(n > 0) c++;
  n = lines.shift();
}
console.log(`${c} valores positivos`);