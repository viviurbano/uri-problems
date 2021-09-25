var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = input.split('\n').map((item) => parseFloat(item));

const pi = 3.14159;

console.log(`${raio}`);
let volume = (4 / 3) * pi * (raio * raio * raio);

console.log(`VOLUME = ${volume.toFixed(3)}`);
