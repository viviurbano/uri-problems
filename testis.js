const input = require('fs').readFileSync('dev/stdin', 'utf8');
const lines = input.split('\n');

// 1001
// console.log('Hello World!');

// 1002
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// console.log(`X = ${a + b}`);

// 1003
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// console.log(`SOMA = ${a + b}`);

// 1004
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// console.log(`PROD = ${a * b}`);

// 1005
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// const nota = ((a * 0.35 + b * 0.75) / 11) * 10;
// console.log(`MEDIA = ${nota.toFixed(5)}`);

// 1006
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// const c = Number(lines.shift());
// const media = a * 0.2 + b * 0.3 + c * 0.5;
// console.log(`MEDIA = ${media.toFixed(1)}`);

// 1007
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// const c = Number(lines.shift());
// const d = Number(lines.shift());
// const diferenca = a * b - c * d;
// console.log(`DIFERENCA = ${diferenca}`);

// 1008
const idFunc = Number(lines.shift());
const horasTrab = Number(lines.shift());
const valorHora = Number(lines.shift());

console.log(`NUMBER =${idFunc}`);
console.log(`SALARY = U$ ${horasTrab * valorHora}`);
