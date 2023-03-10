/********************************************************************
 * Objetivo: Criar um sistema que gerencie números pares e impares
 * Data: 17/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ********************************************************************/

var readline = require('readline')
var funcoes = require('./modulo/funcao.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\nGerenciamento de números pares e imapares\n')

entradaDados.question('Digite o número inicial [ENTRE 0 E 500]:\n', function (valorInicio) {

    let valorMinimo = parseInt(valorInicio)
    
    entradaDados.question('Digite o número final [ENTRE 100 E 1000]:\n', function (valorFim) {

        let valorMaximo = parseInt(valorFim)

        funcoes.correcao(valorMinimo, valorMaximo)
        entradaDados.close()

    })
})