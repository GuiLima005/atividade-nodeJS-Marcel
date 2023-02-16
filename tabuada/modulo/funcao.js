/********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cáculo de uma tabuada
 * Data: /02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ********************************************************************/

const calcularTabuada = function(multiplicandoInicio, multiplicandoFim, contadorInicio, contadorFim) {

    let resultado
    let multiplicandoIni = multiplicandoInicio
    let multiplicandoFi = multiplicandoFim
    let contadorInicial
    let contadorFinal = contadorFim


    while (multiplicandoIni <= multiplicandoFi) {
        console.log(`\nTabuada do ${multiplicandoIni}\n`)

        contadorInicial = contadorInicio
        while (contadorInicial <= contadorFinal) {
            resultado = multiplicandoIni * contadorInicial

            console.log(`${multiplicandoIni} x ${contadorInicial} = ${resultado}`)
            contadorInicial++
        }
        multiplicandoIni++
    }
}

const correcaoErro = function() {
    
}
    
//calcularTabuada(2, 5, 10, 15)

module.exports = {
    calcularTabuada
}