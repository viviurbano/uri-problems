var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

// modo mais 'curto': lê o arquivo e converte para número
// let raio = Number(lines.shift());

// melhor: lê o arquivo, usa map para manipular os dados e converte em Float
let [raio] = input.split("\n").map((item) => parseFloat(item));

const pi = 3.14159;

let resultado = pi * (raio * raio);
console.log(`A=${resultado.toFixed(4)}`);
