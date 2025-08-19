// Você foi contratado para criar um programa em JavaScript que gere uma Progressão Aritmética (PA).
// O programa deve pedir ao usuário três informações:
// O primeiro termo da PA (a1);
// A razão da PA (r);
// A quantidade de termos que deseja exibir (n).

const input = require("prompt-sync")();

console.log("Progressão Aritmética");

let a1 = parseInt(input("Digite o primeiro termo da PA: "));
let r = parseInt(input("Digite a razão da PA: "));
let n = parseInt(input("Digite a quantidade de termos a exibir: "));

console.log("\nProgressão Aritmética gerada:");

for (let i = 0; i < n; i++) {
    // Calculando o termo da PA usando a fórmula a_n = a1 + n * r
    let termo = a1 + i * r;
    console.log(termo);
}
