"use strict";
let input = require('fs').readFileSync('text01.txt', 'utf8');
let lines = input.split('\n');

console.log(lines[0].split(' ').map(x => Number(x)).filter(x => x % 6 === 0).length);
