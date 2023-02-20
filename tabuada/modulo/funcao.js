/********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 17/02/2023
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
     console.log('\n-------Fim da tabuada-------')
}

const validacao = function(inicioTabuada, FinalTabuada, inicioContador, contadorFim) {

    if (inicioTabuada > FinalTabuada || FinalTabuada < inicioTabuada) {
        console.log('ERRO: O primeiro multiplicando não pode ser maior que o ultimo')

    } else if (inicioTabuada < 2 || inicioTabuada > 100 || FinalTabuada < 2 || FinalTabuada > 100) {
        console.log('ERRO: Digite apenas multiplicadores entre 2 e 100')

    } else if (inicioContador > contadorFim || contadorFim < inicioContador) {
        console.log('ERRO: O primeiro multiplicador não pode ser maior que o ultimo')

    } else if (inicioContador < 1 || contadorFim > 50) {
        console.log('ERRO: Digite apenas multiplicandos entre 1 e 50')
    } else {
        console.log(calcularTabuada(inicioTabuada, FinalTabuada, inicioContador, contadorFim))
    }
}
    
//calcularTabuada(2, 5, 10, 15)

module.exports = {
    calcularTabuada,
    validacao
}