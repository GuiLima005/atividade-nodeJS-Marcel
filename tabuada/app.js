/********************************************************************
 * Objetivo: Criar um sistema para gerenciar o cálculo de uma tabuada
 * Data: 17/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ********************************************************************/

var readline = require('readline')
var funcao = require('./modulo/funcao.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('\n Tabuada do Gui \n')
console.log('\n MULTIPLICANDO \n')
entradaDados.question('Digite o primeiro multiplicando [ENTRE 2 E 100]: \n', function (inicioTa) {

    let inicioTabuada = Number(inicioTa.replace(',', '.'))

    entradaDados.question('Digite o ultimo multiplicando [ENTRE 2 E 100]: \n', function (FinalTa) {

        let FinalTabuada = Number(FinalTa.replace(',', '.'))

        console.log('\n MULTIPLICADOR \n')
        entradaDados.question('Digite o primeiro multiplicador [ENTRE 1 E 50]: \n', function (inicioCon) {

            let inicioContador = Number(inicioCon.replace(',', '.'))

            entradaDados.question('Digite o ultimo multiplicador [ENTRE 1 E 50]: \n', function (contadorFinal) { // valorDoContadorFinal

                let contadorFim = Number(contadorFinal.replace(',', '.'))

                funcao.validacao(inicioTabuada, FinalTabuada, inicioContador, contadorFim)
                entradaDados.close()

            })
        })
    })
})