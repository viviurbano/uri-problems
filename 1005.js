var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b] = input.split('\n').map((item) => parseFloat(item));
let media = (a * 3.5 + b * 7.5) / 11;
console.log(`MEDIA = ${media.toFixed(5)}`);
