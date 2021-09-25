var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c, d] = input.split('\n').map((item) => parseInt(item));
let diferenca = a * b - c * d;
console.log(`DIFERENCA = ${diferenca}`);
