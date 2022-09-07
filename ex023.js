var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
const nmrs = require('fs')
  .readFileSync('/dev/stdin', 'utf8')
  .split('\n')
  .map(x => Number(x));

for (let num of nmrs) {
  if (num === 0) {
    break;
  }

  let s = 0;

  if (num % 2 !== 0) {
    num++;
  }

  for (let c = 0; c < 5; c++) {
    s += num + c * 2;
  }

  console.log(s);
}