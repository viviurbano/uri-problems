var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [idFuncionario, horasTrabalhadas, valorHora] = input
  .split('\n')
  .map((item) => parseFloat(item));

console.log(`NUMBER = ${idFuncionario}`);
console.log(`SALARY = U$ ${(horasTrabalhadas * valorHora).toFixed(2)}`);
