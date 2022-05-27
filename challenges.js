const { type } = require('os');
const { createHistogram } = require('perf_hooks');

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

////////////////// AINDA NÃO SUBMETIDO - ERRO
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
const a = lines.shift().split(' ');
const b = lines.shift().split(' ');
const c = lines.shift().split(' ');
const d = lines.shift().split(' ');
const e = lines.shift().split(' ');
const numeros = [...a, ...b, ...c, ...d, ...e];
let contPar = 0;
let contImpar = 0;
let contPositivo = 0;
let contNegativo = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    contPar++;
  } else {
    contImpar++;
  }
  if (numeros[i] > 0) {
    contPositivo++;
  } else if (numeros[i] < 0) {
    contNegativo++;
  }
}
console.log(`${contPar} valor(es) par(es)`);
console.log(`${contImpar} valor(es) impar(es)`);
console.log(`${contPositivo} valor(es) positivo(s)`);
console.log(`${contNegativo} valor(es) negativo(s)`);
