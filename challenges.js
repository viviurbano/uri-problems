// const { type } = require('os');
// const { createHistogram } = require('perf_hooks');

const { AsyncLocalStorage } = require('async_hooks');
const { count } = require('console');
const { arrayBuffer } = require('stream/consumers');
const { CLIENT_RENEG_LIMIT } = require('tls');
const { brotliCompress } = require('zlib');

const input = require('fs').readFileSync('dev/stdin', 'utf8');
const lines = input.split('\n');

// 1001 - Extremamente Básico
// console.log('Hello World!');

// 1002 - Área do Círculo
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// console.log(`X = ${a + b}`);

// 1003 - Soma Simples
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// console.log(`SOMA = ${a + b}`);

// 1004 - Produto Simples
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

// 1007;
// const a = Number(lines.shift());
// const b = Number(lines.shift());
// const c = Number(lines.shift());
// const d = Number(lines.shift());
// const diferenca = a * b - c * d;
// console.log(`DIFERENCA = ${diferenca}`);

// 1008;
// const idFunc = Number(lines.shift());
// const horasTrab = Number(lines.shift());
// const valorHora = Number(lines.shift());
// console.log(`NUMBER = ${idFunc}`);
// console.log(`SALARY = U$ ${(horasTrab * valorHora).toFixed(2)}`);

// 1009
// const nomeFunc = lines.shift();
// const salarioFixo = Number(lines.shift());
// const vendasMes = Number(lines.shift());
// console.log(`TOTAL = R$ ${(salarioFixo + vendasMes * 0.15).toFixed(2)}`);

// 1010
// const pecaUm = lines.shift().split(' ');
// const pecaDois = lines.shift().split(' ');
// console.log(
//   `VALOR A PAGAR: R$ ${(
//     pecaUm[1] * pecaUm[2] +
//     pecaDois[1] * pecaDois[2]
//   ).toFixed(2)}`
// );

// 1011
// const PI = 3.14159;
// const raio = Number(lines.shift());
// const resultado = (4 / 3) * PI * Math.pow(raio, 3);
// console.log(`VOLUME = ${resultado.toFixed(3)}`);

// 1012
// const dados = lines.shift().split(' ');
// const triangulo = (dados[0] * dados[2]) / 2;
// const circulo = 3.14159 * Math.pow(dados[2], 2);
// const trapezio =
//   ((parseFloat(dados[0]) + parseFloat(dados[1])) / 2) * parseFloat(dados[2]);
// const quadrado = dados[1] * dados[1];
// const retangulo = dados[0] * dados[1];
// console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
// console.log(`CIRCULO: ${circulo.toFixed(3)}`);
// console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
// console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
// console.log(`RETANGULO: ${retangulo.toFixed(3)}`);

// 1013
// const dados = lines.shift().split(' ');
// let maior = dados[0];
// for (let i = 0; i < dados.length; i++) {
//   if (Number(dados[i]) > maior) {
//     maior = dados[i];
//   }
// }
// console.log(`${maior} eh o maior`);

// 1014
// const distancia = lines.shift();
// const combustivel = lines.shift();
// console.log(`${(distancia / combustivel).toFixed(3)} km/l`);

// 1015
// const [x1, y1] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const [x2, y2] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const distancia = Math.sqrt(Math.pow(x2 - x1, 2.0) + Math.pow(y2 - y1, 2.0));
// console.log(distancia.toFixed(4));

// 1016
// const distancia = lines
//   .shift()
//   .split()
//   .map(item => Number(item));
// const resultado = (60 * distancia) / 30;
// console.log(`${resultado} minutos`);

// 1017 - Gasto de Combustível
// const horas = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const vel = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const kms = vel * horas;
// const gasolina = kms / 12;
// console.log(gasolina.toFixed(3));

// 1018 - Cédulas
// let valor = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// console.log(`${valor}`);
// const cedulas = [100, 50, 20, 10, 5, 2, 1];
// for (let i = 0; i < cedulas.length; i++) {
//   nota = Math.floor(valor / cedulas[i]);
//   valor = valor % cedulas[i];
//   console.log(`${nota} nota(s) de R$ ${cedulas[i]},00`);
// }

//1019 - Conversão de Tempo
// let tempo = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const tempoFatia = [3600, 60, 1];
// let arrDisplay = [];
// for (let i = 0; i < tempoFatia.length; i++) {
//   arrDisplay.push(Math.floor(tempo / tempoFatia[i]));
//   tempo = tempo % tempoFatia[i];
// }
// console.log(arrDisplay.join(':'));

// 1020 - Idade em Dias
// let dias = lines
//   .shift()
//   .split()
//   .map(item => Number(item));
// const tempoFatia = [365, 30, 1];
// const strings = ['ano(s)', 'mes(es)', 'dia(s)'];
// for (let i = 0; i < tempoFatia.length; i++) {
//   periodoTempo = Math.floor(dias / tempoFatia[i]);
//   dias = dias % tempoFatia[i];
//   console.log(`${periodoTempo} ${strings[i]}`);
// }

//1021 - Notas e Moedas
// let valor = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const notas = [100, 50, 20, 10, 5, 2];
// const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];
// let resultado = '';
// console.log(`NOTAS:`);
// for (let i = 0; i < notas.length; i++) {
//   resultado = Math.floor(valor / notas[i]);
//   console.log(`${resultado} nota(s) de R$ ${notas[i]}.00`);
//   valor = valor % notas[i];
// }
// console.log(`MOEDAS:`);
// if (valor < 2.0) {
//   for (let i = 0; i < moedas.length; i++) {
//     resultado = Math.floor(valor / moedas[i]);
//     valor = (valor % moedas[i]).toFixed(2);
//     console.log(`${resultado} moeda(s) de R$ ${moedas[i].toFixed(2)}`);
//   }
// }

// 1035 - Teste de Seleção 1
// const [a, b, c, d] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// if (b > c && d > a && c + d > a + b && c > 0 && d > 0 && a % 2 === 0) {
//   console.log('Valores aceitos');
// } else {
//   console.log('Valores nao aceitos');
// }

// 1036 - Fórmula de Bhaskara
// const [a, b, c] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const r1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
// const r2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
// if (r1 && r2) {
//   console.log(`R1 = ${r1.toFixed(5)}`);
//   console.log(`R2 = ${r2.toFixed(5)}`);
// } else {
//   console.log('Impossivel calcular');
// }

//1037 - Intervalo
// const valor = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// if (valor >= 0 && valor <= 25) {
//   console.log('Intervalo [0,25]');
// } else if (valor > 25 && valor <= 50) {
//   console.log('Intervalo (25,50]');
// } else if (valor > 50 && valor <= 75) {
//   console.log('Intervalo (50,75]');
// } else if (valor > 75 && valor <= 100) {
//   console.log('Intervalo (75,100]');
// } else {
//   console.log('Fora de intervalo');
// }

// 1038 - Lanche
// const [cod, qtde] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// if (cod === 1) {
//   console.log(`Total: R$ ${(qtde * 4).toFixed(2)}`);
// }
// if (cod === 2) {
//   console.log(`Total: R$ ${(qtde * 4.5).toFixed(2)}`);
// }
// if (cod === 3) {
//   console.log(`Total: R$ ${(qtde * 5).toFixed(2)}`);
// }
// if (cod === 4) {
//   console.log(`Total: R$ ${(qtde * 2).toFixed(2)}`);
// }
// if (cod === 5) {
//   console.log(`Total: R$ ${(qtde * 1.5).toFixed(2)}`);
// }

//1041 - Coordenadas de um Ponto
// const [x, y] = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// if (x === 0.0 && y === 0.0) {
//   console.log('Origem');
// } else if (x === 0.0 && y !== 0.0) {
//   console.log('Eixo Y');
// } else if (y === 0.0 && x !== 0.0) {
//   console.log('Eixo X');
// } else if (x > 0 && y > 0) {
//   console.log('Q1');
// } else if (x < 0 && y > 0) {
//   console.log('Q2');
// } else if (x < 0 && y < 0) {
//   console.log('Q3');
// } else if (x > 0 && y < 0) {
//   console.log('Q4');
// }

// ================================ AINDA NÃO SUBMETIDO - ERRO
// 1047 - Tempo de Jogo com Minutos
// const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines
//   .shift()
//   .split(' ')
//   .map(item => item);
// const horasJogadas = horaFinal - horaInicial;
// console.log(horasJogadas);
// const minJogados = Math.abs(minutoInicial - minutoFinal);
// console.log(minJogados);

// 1048 - Aumento de Salário
// const salAtual = lines
//   .shift()
//   .split(' ')
//   .map(item => Number(item));
// const msg = function (sal, percentual) {
//   const novoSal = Number(salAtual * percentual) + Number(salAtual);
//   console.log(`Novo salario: ${novoSal.toFixed(2)}`);
//   console.log(`Reajuste ganho: ${(salAtual * percentual).toFixed(2)}`);
//   console.log(`Em percentual: ${(percentual * 100).toFixed(0)} %`);
// };
// if (salAtual >= 0 && salAtual <= 400) {
//   msg(salAtual, 0.15);
// } else if (salAtual >= 400.01 && salAtual <= 800.0) {
//   msg(salAtual, 0.12);
// } else if (salAtual >= 800.01 && salAtual <= 1200.0) {
//   msg(salAtual, 0.1);
// } else if (salAtual >= 1200.01 && salAtual <= 2000.0) {
//   msg(salAtual, 0.07);
// } else if (salAtual > 2000.0) {
//   msg(salAtual, 0.04);
// }

// 1049 - Animal
// const a = lines.shift();
// const b = lines.shift();
// const c = lines.shift();
// if (a === 'vertebrado' && b === 'ave') {
//   if (c === 'carnivoro') {
//     console.log('aguia');
//   } else {
//     console.log('pomba');
//   }
// }
// if (a === 'vertebrado' && b === 'mamifero') {
//   if (c === 'onivoro') {
//     console.log('homem');
//   } else {
//     console.log('vaca');
//   }
// }
// if (a === 'invertebrado' && b === 'inseto') {
//   if (c === 'hematofago') {
//     console.log('pulga');
//   } else {
//     console.log('lagarta');
//   }
// }
// if (a === 'invertebrado' && b === 'anelideo') {
//   if (c === 'hematofago') {
//     console.log('sanguessuga');
//   } else {
//     console.log('minhoca');
//   }
// }

// 1050 - DDD
// const ddd = lines.shift();
// switch (ddd) {
//   case '61':
//     console.log('Brasilia');
//     break;
//   case '71':
//     console.log('Salvador');
//     break;
//   case '11':
//     console.log('Sao Paulo');
//     break;
//   case '21':
//     console.log('Rio de Janeiro');
//     break;
//   case '32':
//     console.log('Juiz de Fora');
//     break;
//   case '19':
//     console.log('Campinas');
//     break;
//   case '27':
//     console.log('Vitoria');
//     break;
//   case '31':
//     console.log('Belo Horizonte');
//     break;
//   default:
//     console.log(`DDD nao cadastrado`);
// }

// 1051 - Imposto de Renda
// const renda = lines
//   .shift()
//   .split(' ')
//   .map(el => Number(el));
// const calcImposto = function (renda) {
//   const valorIsento = 2000.0;
//   if (renda >= 0 && renda <= 2000.0) {
//     console.log('Isento');
//   } else if (renda >= 2000.01 && renda <= 3000.0) {
//     const faixaUm = renda - 2000.0;
//     console.log(`R$ ${(faixaUm * 0.08).toFixed(2)}`);
//   } else if (renda >= 3000.01 && renda < 4500.0) {
//     const faixaUm = 1000.0;
//     const tribUm = (1000.0 * 0.08).toFixed(2);
//     const faixaDois = renda - 3000.0;
//     const tribDois = faixaDois * 0.18;
//     const imposto = Number(tribUm) + Number(tribDois);
//     console.log(`R$ ${imposto.toFixed(2)}`);
//   } else if (renda >= 4500.0) {
//     const faixaUm = 1000.0;
//     const tribUm = (1000.0 * 0.08).toFixed(2);
//     const faixaDois = 1500.0;
//     const tribDois = (faixaDois * 0.18).toFixed(2);
//     const faixaTres = renda - 4500;
//     const tribTres = (faixaTres * 0.28).toFixed(2);
//     const imposto = Number(tribUm) + Number(tribDois) + Number(tribTres);
//     console.log(`R$ ${imposto.toFixed(2)}`);
//   }
// };
// calcImposto(renda);

// 1052 - Mês
// const mes = lines.shift();
// switch (mes) {
//   case '1':
//     console.log('January');
//     break;
//   case '2':
//     console.log('February');
//     break;
//   case '3':
//     console.log('March');
//     break;
//   case '4':
//     console.log('April');
//     break;
//   case '5':
//     console.log('May');
//     break;
//   case '6':
//     console.log('June');
//     break;
//   case '7':
//     console.log('July');
//     break;
//   case '8':
//     console.log('August');
//     break;
//   case '9':
//     console.log('September');
//     break;
//   case '10':
//     console.log('October');
//     break;
//   case '11':
//     console.log('November');
//     break;
//   case '12':
//     console.log('December');
//     break;
// }

// 1059 - Números Pares
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 1060 - Números Positivos
// const a = lines.shift().split(' ');
// const b = lines.shift().split(' ');
// const c = lines.shift().split(' ');
// const d = lines.shift().split(' ');
// const e = lines.shift().split(' ');
// const f = lines.shift().split(' ');
// const numeros = [...a, ...b, ...c, ...d, ...e, ...f];
// let contador = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 0) {
//     contador++;
//   }
// }
// console.log(`${contador} valores positivos`);

// let dias = lines
//   .shift()
//   .split()
//   .map(item => Number(item));

// 1061 - Tempo de um Evento
// 1064 - Positivos e Média
// const a = lines.shift().split(' ');
// const b = lines.shift().split(' ');
// const c = lines.shift().split(' ');
// const d = lines.shift().split(' ');
// const e = lines.shift().split(' ');
// const f = lines.shift().split(' ');
// const numeros = [...a, ...b, ...c, ...d, ...e, ...f];
// let contador = 0;
// let acc = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] > 0) {
//     contador++;
//     acc = Number(acc) + Number(numeros[i]);
//   }
// }
// console.log(`${contador} valores positivos`);
// console.log((acc / contador).toFixed(1));

// // 1065 - Pares entre Cinco Números
// const a = lines.shift().split(' ');
// const b = lines.shift().split(' ');
// const c = lines.shift().split(' ');
// const d = lines.shift().split(' ');
// const e = lines.shift().split(' ');
// const numeros = [...a, ...b, ...c, ...d, ...e];
// let contador = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     contador++;
//   }
// }
// console.log(`${contador} valores pares`);

// 1066 - Pares, Ímpares, Positivos e Negativos
// const a = lines.shift().split(' ');
// const b = lines.shift().split(' ');
// const c = lines.shift().split(' ');
// const d = lines.shift().split(' ');
// const e = lines.shift().split(' ');
// const numeros = [...a, ...b, ...c, ...d, ...e];
// let contPar = 0;
// let contImpar = 0;
// let contPositivo = 0;
// let contNegativo = 0;
// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     contPar++;
//   } else {
//     contImpar++;
//   }
//   if (numeros[i] > 0) {
//     contPositivo++;
//   } else if (numeros[i] < 0) {
//     contNegativo++;
//   }
// }
// console.log(`${contPar} valor(es) par(es)`);
// console.log(`${contImpar} valor(es) impar(es)`);
// console.log(`${contPositivo} valor(es) positivo(s)`);
// console.log(`${contNegativo} valor(es) negativo(s)`);

// 1067 - Números Ímpares
// const numLimite = lines.shift();
// for (let i = 0; i <= numLimite; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// 1070 - Seis Números Ímpares
// let numero = lines.shift();
// for (let i = 0; i < 12; i++) {
//   if (numero % 2 !== 0) {
//     console.log(numero);
//   }
//   numero = Number(numero) + 1;
// }

// 1071 - Soma de Impares Consecutivos I
// let x = lines.shift();
// let y = lines.shift();
// let start = Math.min(...[x, y]);
// let end = Math.max(...[x, y]);
// let soma = 0;
// for (let i = start + 1; i < end; i++) {
//   if (i % 2 !== 0) {
//     soma = soma + i;
//   }
// }
// console.log(soma);

// 1072 - Intervalo 2
// let n = lines.shift();
// let cont = 0;
// lines.forEach(el => {
//   if (el >= 10 && el <= 20) {
//     cont++;
//   }
// });
// console.log(`${cont} in`);

// 1073 - Quadrado de Pares
// const n = lines.shift();
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i}^2 = ${i * i}`);
//   }
// }

// 1074 - Par ou impar
// const n = lines.shift();
// for (let v of lines) {
//   let frase = null;
//   v = Number(v);
//   // console.log('aqui', typeof v, v);
//   // console.log('true', !v === true);
//   // console.log('false', !v === false);
//   if (!v === true) {
//     frase = 'NULL';
//   }
//   if (!v === false) {
//     if (v % 2 === 0) {
//       frase = 'EVEN';
//     } else {
//       frase = 'ODD';
//     }
//   }
//   if (v > 0) frase += ' POSITIVE';
//   if (v < 0) frase += ' NEGATIVE';
//   console.log(frase);
// }

// 1075 - Resto 2
// const n = lines.shift();
// for (let i = 0; i < 10000; i++) {
//   if (i % n === 2) {
//     console.log(i);
//   }
// }

// 1078 - Tabuada
// const n = lines.shift();
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} x ${n} = ${i * n}`);
// }

// 1142 - PUM - 5% de erro ainda
// let n = lines.shift();
// let msg = [];
// for (let i = 1; i <= n * 4; i++) {
//   if (i % 4 !== 0) {
//     msg.push(i);
//   } else msg.push('PUM');
// }
// for (let i = 0; i < n; i++) {
//   console.log(...msg.splice(0, 4));
// }

// 1079 - Médias Ponderadas
// let[(n, line1, line2, line3)] = input.split('\n');
// console.log(n, line1, line2, line3);

// ============================== HackerRank ==============================
// ============================== HackerRank ==============================

// solveMeFirst
// function solveMeFirst(a, b) {
//   return a + b;
// }
// console.log(solveMeFirst(4, 5));

//Staircase
// function staircase(n) {
//   let spaces = '-';
//   let velha = '#';
//   for (let i = n, x = 1; i >= 0; i--, x++) {
//     console.log(spaces.repeat(i) + velha.repeat(x));
//   }
// }
// staircase(6);

// miniMaxSum
// function miniMaxSum(arr) {
//   let max = Math.max(...arr);
//   let min = Math.min(...arr);
//   let sum = arr.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     0
//   );
//   return [sum - max, sum - min];
// }
// let arr = [1, 3, 5, 7, 9];
// console.log(miniMaxSum(arr));

// birthday-cake-candles
// function birthdayCakeCandles(candles) {
//   let tallest = Math.max(...candles);
//   let cont = candles.filter(el => el === tallest);
//   return cont.length;
// }

//time-conversion
// function timeConversion(s) {
//   const amPm = s.slice(-2);
//   let hour = Number(s.slice(0, 2));
//   let minute = s.slice(3, 5);
//   let seconds = s.slice(6, 8);
//   if (amPm === 'AM') {
//     if (hour < 1 || hour > 11) {
//       let convertedTime = ['00', minute, seconds];
//       return convertedTime.join(':');
//     }
//   }
//   if (amPm === 'PM') {
//     if (hour >= 1 && hour <= 11) {
//       let convertedTime = [hour + 12, minute, seconds];
//       return convertedTime.join(':');
//     }
//   }
//   return s.slice(0, 8);
// }
// console.log(timeConversion('03:10:00PM'));

//grading s
// function gradings(grades) {
//   return grades.map(grade => {
//     let nextMultiple = Math.floor(grade / 5) * 5 + 5;
//     if (nextMultiple - grade < 3 && grade >= 38) {
//       return nextMultiple;
//     } else {
//       return grade;
//     }
//   });
// }
// const grades = [73, 67, 38, 33];
// console.log(gradings(grades));

// kangaroo
// function kangaroo(x1, v1, x2, v2) {
//   if ((x1 > x2 && v1 > v2) || (x2 > x1 && v2 > v1)) {
//     return 'NO';
//   }
//   if ((x1 - x2) % (v2 - v1) === 0) {
//     return 'YES';
//   } else return 'NO';
// }
// console.log(kangaroo(0, 3, 4, 2)); // YES
// console.log(kangaroo(0, 2, 5, 3)); // NO
// console.log(kangaroo(1113, 612, 1331, 610)); // YES
// console.log(kangaroo(21, 6, 47, 3)); // NO

// breakingRecords
// function breakingRecords(scores) {
//   let contMin = 0;
//   let contMax = 0;
//   let min = scores[0];
//   let max = scores[0];
//   for (let i = 0; i < scores.length; i++) {
//     if (scores[i] < min) {
//       min = scores[i];
//       contMin++;
//     }
//     if (scores[i] > max) {
//       max = scores[i];
//       contMax++;
//     }
//   }
//   return [contMax, contMin];
// }
// console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

//the-birthday-bar
// function birthday(s, d, m) {
//   let enableShare = 0;
//   for (let i = 0; i < s.length; i++) {
//     let newArr = s.slice(i, m + i);
//     let sum = newArr.reduce(
//       (previousValue, currentValue) => previousValue + currentValue,
//       0
//     );
//     if (sum === d) {
//       enableShare++;
//     }
//   }
//   return enableShare;
// }
// let s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
// let d = 18;
// let m = 7;

// console.log(birthday(s, d, m));
// const mov = [2, 5, 1];
// const balance = mov.reduce((acc, currValue, index, arr) => {
//   return acc + currValue;
// }, 1);
// console.log(balance);

// between-two-sets ======================== NOT SOLVED YET

// divisible-sum-pairs
// const ar = [
//   43, 95, 51, 55, 40, 86, 65, 81, 51, 20, 47, 50, 65, 53, 23, 78, 75, 75, 47,
//   73, 25, 27, 14, 8, 26, 58, 95, 28, 3, 23, 48, 69, 26, 3, 73, 52, 34, 7, 40,
//   33, 56, 98, 71, 29, 70, 71, 28, 12, 18, 49, 19, 25, 2, 18, 15, 41, 51, 42, 46,
//   19, 98, 56, 54, 98, 72, 25, 16, 49, 34, 99, 48, 93, 64, 44, 50, 91, 44, 17,
//   63, 27, 3, 65, 75, 19, 68, 30, 43, 37, 72, 54, 82, 92, 37, 52, 72, 62, 3, 88,
//   82, 71,
// ];
// // Expected Output 216
// const n = 100;
// const k = 22;
// function divisibleSumPairs(n, k, ar) {
//   let pairs = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       const sum = ar[i] + ar[j];
//       if (i < j && sum % k === 0) {
//         pairs++;
//       }
//     }
//   }
//   return pairs;
// }
// console.log(divisibleSumPairs(n, k, ar));

// migratory - birds - VERSION 1;
// const arr = [1, 4, 4, 4, 5, 3, 5, 5];

// function migratoryBirds(arr) {
//   const result = arr.reduce(
//     (acc, curValue) => {
//       acc[curValue - 1]++;
//       return acc;
//     },
//     [0, 0, 0, 0, 0]
//   );
//   const max = Math.max(...result);
//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === max) {
//       return i + 1;
//     }
//   }
// }
// console.log(migratoryBirds(arr));

// migratory - birds - VERSION 2;
// function migratoryBirds2(arr) {
//   const result = arr.reduce(
//     (acc, curValue) => {
//       acc[curValue]++;
//       return acc;
//     },
//     { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }
//   );
//   const max = Math.max(...Object.values(result));
//   console.log(max);
//   const teste = Object.keys(result).filter((el, i, arr) => {
//     return result[el] === max;
//   });
//   // console.log(teste);
//   return Number(teste[0]);
// }
// console.log(migratoryBirds2(arr));

// Apple and Orange
// const s = 7;
// const t = 10;
// const a = 4;
// const b = 12;
// const apples = [2, 3, -4];
// const oranges = [3, -2, -4];

// function countApplesAndOranges(s, t, a, b, apples, oranges) {
//   const calcApp = apples.map(el => el + a).filter(el => el >= s && el <= t);
//   const calcOran = oranges.map(el => el + b).filter(el => el >= s && el <= t);
//   console.log(calcApp.length);
//   console.log(calcOran.length);
// }
// countApplesAndOranges(s, t, a, b, apples, oranges);

// day-of-the-programmer
// function dayOfProgrammer(year) {
//   const programerDay = 256;
//   const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31];
//   const daysTotal = daysInMonths.reduce((acc, el) => acc + el);
//   const whenInSept = Math.abs(daysTotal - programerDay);
//   //juliano =
//   if (1700 <= year && year <= 1917) {
//     if (year % 4 === 0) {
//       return `${whenInSept - 1}.09.${year}`;
//     }
//   }
//   //gregoriano
//   if (1918 <= year && year <= 2700) {
//     if (year === 1918) {
//       return `${whenInSept + 13}.09.${year}`;
//     }
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return `${whenInSept - 1}.09.${year}`;
//     }
//   }

//   return `${whenInSept}.09.${year}`;
// }
// console.log(dayOfProgrammer(1800));

// bon-appetit
// const bill = [3, 10, 2, 9];
// const k = 1;
// const b = 7;

// function bonAppetit(bill, k, b) {
//   const totalBill = bill.reduce((acc, el) => el + acc);
//   const anaPayment = b - (totalBill - bill[k]) / 2;

//   if (anaPayment === 0) {
//     return console.log('Bon Appetit');
//   } else console.log(anaPayment);
// }
// bonAppetit(bill, k, b);

// // sock-merchant
// const n = 7;
// const ar = [10, 10, 10, 20, 20, 20, 20];
// function sockMerchant(n, ar) {
//   // array do set de meias
//   const setSocks = [...new Set(ar)];
//   let pairs = 0;
//   for (let i = 0; i < setSocks.length; i++) {
//     const socksByType = ar.filter(el => el === setSocks[i]);
//     if (socksByType.length % 2 === 0) {
//       pairs += socksByType.length / 2;
//     } else {
//       pairs += (socksByType.length - (socksByType.length % 2)) / 2;
//     }
//   }
//   console.log(pairs);
// }
// sockMerchant(n, ar);

const myObj = {
  a: 1,
  b: 2,
  c: 3,
};

// MODO 1 - retorna apenas o indice
for (const key in myObj) {
  console.log(key);
}

// MODO 2 - retorna o valor
for (const value in myObj) {
  console.log(myObj[value]);
}

// MODO 3 - mais custoso?
for (const value of Object.values(myObj)) {
  console.log(value);
}
