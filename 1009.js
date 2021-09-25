var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let [nomeFuncionario, salarioFixo, vendasTotais] = input
  .split('\n')
  .map((item) => parseFloat(item));

let comissao = vendasTotais * 0.15;
let resultado = comissao + salarioFixo;
console.log(`TOTAL = R$ ${resultado.toFixed(2)}`);
