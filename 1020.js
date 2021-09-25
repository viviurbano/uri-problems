var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = Number(lines.shift());

let ano = Math.trunc(entrada / 365);
console.log(`${ano} ano(s)`);

entrada = entrada - ano * 365;

let mes = Math.trunc(entrada / 30);
console.log(`${mes} mes(es)`);

entrada = entrada - mes * 30;
console.log(`${entrada} dia(s)`);

// console.log(b.filter((item) => item > 0));
