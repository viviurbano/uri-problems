var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [distancia, km] = input.split('\n').map((item) => parseFloat(item));

let consumo = distancia / km;
console.log(`${consumo.toFixed(3)} km/l`);
