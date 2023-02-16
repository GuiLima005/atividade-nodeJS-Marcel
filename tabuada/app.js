/********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cáculo de uma tabuada
 * Data: /02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ********************************************************************/

var readline = require('readline')
var calculos = require('./modulo/tabuada')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('\n*****MULTIPLICANDO*****\n')
entradaDados.question('Digite um número de incio da tabuada {ENTRE 2 E 100}: \n', function(inicioNumero) {

    let inicioDaTabuada = Number(inicioNumero.replace(',', '.'))

    entradaDados.question('Digite o número final da tabuada {ENTRE 2 E 100}: \n', function(numeroFim) {

        let FinalDaTabuada = Number(numeroFim.replace(',', '.'))

        if (inicioDaTabuada > FinalDaTabuada || FinalDaTabuada < inicioDaTabuada) {
            console.log('ERRO: O número do inicio não pode ser maior que o final')

            entradaDados.close()

        } else if (inicioDaTabuada < 2 || inicioDaTabuada > 100 || FinalDaTabuada < 2 || FinalDaTabuada > 100) {
            console.log('ERRO: Digite apenas números entre 2 e 100')
            entradaDados.close()

        } else {

            console.log('\n*****MULTIPLICADOR*****\n')
            entradaDados.question('Digite o contador inicial da tabuada[ENTRE 1 E 50]: \n', function(valorDoContadorInicial) {

                let inicioDoContador = Number(valorDoContadorInicial.replace(',', '.'))

                entradaDados.question('Digite o contador final da tabuada [ENTRE 1 E 50]: \n', function(valorDoFinishPai) { // valorDoContadorFinal

                    let contadorFim = Number(valorDoFinishPai.replace(',', '.'))

                    if (inicioDoContador > contadorFim || contadorFim < inicioDoContador) {
                        console.log('ERRO:  O número do inicio não pode ser maior que o final')
                        entradaDados.close()
                    } else if (inicioDoContador < 1 || contadorFim > 50) {
                        console.log('ERRO: Digite apenas números entre 1 e 50')
                        entradaDados.close()

                    } else {
                        console.log(calculos.tabuada(inicioDaTabuada, FinalDaTabuada, inicioDoContador, contadorFim))
                        entradaDados.close()
                    }


                })
            })
        }


    })
})