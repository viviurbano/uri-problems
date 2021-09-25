var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [horas, velMedia] = input.split('\n').map((item) => parseFloat(item));

const kmL = 12;
let distancia = (horas * velMedia) / kmL;

console.log(distancia.toFixed(3));
