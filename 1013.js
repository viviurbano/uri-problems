var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = input.split(' ').map((item) => Number(item));

let maior = Math.max(a, b, c);
console.log(`${maior} eh o maior`);
