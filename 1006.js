var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [a, b, c] = input.split('\n').map((item) => parseFloat(item));
let media = (a * 2 + b * 3 + c * 5) / 10;
console.log(`MEDIA = ${media.toFixed(1)}`);
