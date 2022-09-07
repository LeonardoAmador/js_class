var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const n = parseInt(lines.shift());

for(let c = 1; c <= n; c++){
  if(n % c == 0) console.log(c);
}