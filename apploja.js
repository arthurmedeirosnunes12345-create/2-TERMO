const entrada = require('readline-sync');
const logistica = require('./logistica.js');

const distancia = entrada.questionFloat ("Distancia da entrega (km): ");
const carga = entrada.questionFloat ("Peso da carga (kg): ");
const prazo = entrada.questionInt ("Prazo de entrega (dias): ");

const ValorBase= logistica.ValorBase(distancia);
const ValorCarga = logistica.ValorCarga(carga);
const ValorPrazo = logistica.ValorPrazo(prazo);

console.log("\n--- RESUMO DO FRETE ---");
console.log(`Custo Base: R$ ${ValorBase.toFixed(2)}`);
console.log(`Adicional Carga: R$ ${ValorCarga.toFixed(2)}`);
console.log(`Adicional Prazo: R$ ${ValorPrazo.toFixed(2)}`);
console.log(`-----------------------`);
console.log(`TOTAL DO FRETE: R$ ${valorTotal.toFixed(2)}`);
