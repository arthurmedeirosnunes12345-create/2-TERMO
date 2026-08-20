const entrada = require('readline-sync');

// Buscando as ferramentas no arquivo calculadoraFrete.js
// O './' significa "nesta mesma pasta"
const calculadora = require('./logistica.js');

console.log("=== SISTEMA DE LOGÍSTICA DE ENTREGA ===");

const produto = entrada.question("Nome do produto: ");
const distancia = entrada.questionFloat("Distancia da entrega (km): ");
const valorCarga = entrada.questionFloat("Valor total da carga: R$ ");

// Usamos o nome 'calculadora' (que demos no require) seguido do ponto
const valorBase = calculadora.calcularBase(distancia);
const valorSeguro = calculadora.calcularSeguro(valorCarga);
const prazo = calculadora.verificarPrazo(distancia);

const valorTotal = valorBase + valorSeguro;

console.log("\n--- RELATÓRIO DE POSTAGEM ---");
console.log(`Produto: ${produto}`);
console.log(`Custo Base: R$ ${valorBase.toFixed(2)}`);
console.log(`Valor do Seguro: R$ ${valorSeguro.toFixed(2)}`);
console.log(`Prazo Estimado: ${prazo}`);
console.log(`-----------------------------`);
console.log(`TOTAL DO FRETE: R$ ${valorTotal.toFixed(2)}`);