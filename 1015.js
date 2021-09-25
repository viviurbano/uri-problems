var input = require('fs').readFileSync('./dev/stdin', 'utf8');
var lines = input.split('\n');

/* Leia os quatro valores correspondentes 
aos eixos x e y de dois pontos quaisquer no plano, 
p1(x1,y1) e p2(x2,y2) e 
calcule a distância entre eles, m
ostrando 4 casas decimais após a vírgula, segundo a fórmula:
*/

let [x1, y1] = lines
  .shift()
  .split(' ')
  .map((item) => Number(item));

let [x2, y2] = lines
  .shift()
  .split(' ')
  .map((item) => Number(item));

let resultado = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(`${resultado.toFixed(4)}`);

//URI - 29.531º
