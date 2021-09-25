var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [raio] = input.split('\n').map((item) => parseFloat(item));

const pi = 3.14159;

let resultado = pi * (raio * raio);

console.log(`A=${resultado.toFixed(4)}`);
