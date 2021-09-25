var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

let entrada = Number(lines.shift());
//let [horas, velMedia] = input.split('\n').map((item) => parseFloat(item));

const notas = [100, 50, 20, 10, 5, 2, 1];
const saidaNotas = [];

console.log(entrada);

for (const nota of notas) {
  const saida = Math.trunc(entrada / nota);
  saidaNotas.push(saida);
  entrada = entrada % nota;
  console.log(`${saida} nota(s) de R$ ${nota},00`);
}

//29.117º
