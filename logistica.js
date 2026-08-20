function ValorBase (valor_km) {
    return valor_km * 2.10; // Exemplo de cálculo da base de frete
}

function ValorCarga (valor_carga) {
    return valor_carga * 0.10; // Exemplo de cálculo do valor da carga
}

function ValorPrazo (valor_distancia) {
    if (valor_distancia <= 100) {
        return 1; // Prazo de 1 dia para distâncias até 100 km
    } else if (valor_distancia <= 500) {
        return 3; // Prazo de 3 dias para distâncias entre 101 e 500 km
    } else {
        return 5; // Prazo de 5 dias para distâncias acima de 500 km
    }
}

module.exports = {
    ValorBase,
    ValorCarga,
    ValorPrazo
}