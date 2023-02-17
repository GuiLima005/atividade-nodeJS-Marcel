/******************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 *****************************************/

var funcoes = require('./modulo/funcao.js')

var readline = require('readline')
const { calcularMedia } = require('./modulo/funcao.js')
const funcao = require('./modulo/funcao.js')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDados.question('Nome do Aluno: \n', function (alu) {
    let aluno = alu

    entradaDados.question('Sexo do aluno(a): [MASCULINO | FEMININO] \n', function (sexoA) {
        let sexoAlu = sexoA.toUpperCase()

        entradaDados.question('Nome do professor(a): \n', function (pro) {
            let professor = pro

            entradaDados.question('Sexo do professor(a): [MASCULINO | FEMININO] \n', function (sexoP) {
                let sexoPro = sexoP.toUpperCase()

                entradaDados.question('Nome do curso: \n', function (cur) {
                    let curso = cur

                    entradaDados.question('Nome da disciplina: \n', function (disci) {
                        let disciplina = disci

                        entradaDados.question('Nota do primeiro bimestre [Digite entre 0 a 100]:\n', function (bimestre1) {
                            let nota1 = Number(bimestre1)

                            entradaDados.question('Nota do segundo bimestre [Digite entre 0 a 100]:\n', function (bimestre2) {
                                let nota2 = Number(bimestre2)

                                entradaDados.question('Nota do terceiro bimestre [Digite entre 0 a 100]:\n', function (bimestre3) {
                                    let nota3 = Number(bimestre3)

                                    entradaDados.question('Nota do quarto bimestre [Digite entre 0 a 100]:\n', function (bimestre4) {
                                        let nota4 = Number(bimestre4)
                                
                                        funcoes.calcularMedia(nota1, nota2, nota3, nota4)
                                        funcoes.erroEscrita(aluno, sexoAlu, professor, sexoPro, curso, disciplina)
                                        funcoes.erroNumero(nota1, nota2, nota3, nota4)
                                        entradaDados.close()

                                        
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
