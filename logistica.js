function calcularBase(km) {
    return km * 2.10; // R$ 2,10 por quilômetro
}

function calcularSeguro(valorCarga) {
    return valorCarga * 0.01; // 1% do valor da carga
}

function verificarPrazo(km) {
    if (km < 100) {
        return "1 dia útil";
    } else {
        return "3 a 5 dias úteis";
    }
}

module.exports = {
    calcularBase,
    calcularSeguro,
    verificarPrazo
}