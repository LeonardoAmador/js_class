const input = require('fs').readFileSync("entrada.txt", 'utf8');

let dias = parseInt(input);

let anos, meses;

anos = parseInt(dias / 365);
dias = dias % 365;

meses = parseInt(dias / 30);
dias = dias % 30;

let result = `${anos} ano(s)
${meses} mes(es)
${dias} dia(s)`;

console.log(result);