var input = require("fs").readFileSync("./dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b] = input.split("\n").map((item) => parseFloat(item));

console.log(`SOMA = ${a + b}`);
