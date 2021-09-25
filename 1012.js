var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

const pi = 3.14159;
let [a, b, c] = input.split(' ').map((item) => parseFloat(item));

let triangulo = (a * c) / 2;
let circulo = pi * c * c;
let trapezio = ((a + b) * c) / 2;
let quadrado = b * b;
let retangulo = a * b;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
