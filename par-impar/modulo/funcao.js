/********************************************************************
 * Objetivo: Criar um sistema que gerencie números pares e impares
 * Data: 17/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ********************************************************************/

const numerosParImpar = function (valorMin, valorMax, escolha) {

    let valorMaximo = valorMax
    let valor = escolha
    let valorMinimo = valorMin

    if (valor == 1) {
        console.log('*Pares*\n')

        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 == 0)
                console.log(`-----  ${i}  -----`)
        }

    } else if (valor == 2) {
        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 != 0) {
                console.log(`-----  ${i}  -----`)
            }
        }

    } else {

        console.log('--*Números Pares*--\n')
        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 == 0)
                console.log(`-----  ${i}  -----`)
        }
        console.log('\n--*Números Ímpares*--\n')

        for (i = valorMinimo; i <= valorMaximo; i++) {
            if (i % 2 != 0) {
                console.log(`-----  ${i}  -----`)

            }
        }
    }
}

const correcao = function (valorMaximo, valorMinimo) {

    if (valorMinimo < 0  && valorMinimo > 500 && isNaN(valorMinimo)  && valorMinimo === '') {
        console.log('ERRO: Digite somente NÚMEROS entre 0 e 500')

    } else if (valorMaximo < 100 && valorMaximo > 1000 && valorMaximo == '' && isNaN(valorMaximo)) {
        console.log('ERRO: Digite somente NÚMEROS entre 100 e 1000!')

    } else if (valorMinimo == valorMaximo) {
        console.log('ERRO: O número inicial não pode ser igual ao final')

    } else if (valorMinimo < valorMaximo) {
        console.log('ERRO: O número inicial não pode ser maior que o final')
    }
}

module.exports = {
    numerosParImpar,
    correcao
}