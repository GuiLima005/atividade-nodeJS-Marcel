/******************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 *****************************************/

var funcoes = require('./modulo/funcao.js')

var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log('\n-----------Cadastro de aluno-----------\n')

entradaDados.question('Nome do Aluno(a): \n', function (alu) {
    let aluno = alu


    entradaDados.question('\nSexo do aluno(a): [MASCULINO | FEMININO] \n', function (sexoA) {
        let sexoAlu = sexoA.toUpperCase()


        if (sexoAlu == "MASCULINO") {
            sexoAlu = "Aluno"

        } else if (sexoAlu == 'FEMININO') {
            sexoAlu = "Aluna"

        } else {
            console.log('ERRO: Digite apenas MASCULINO OU FEMININO')
            entradaDados.close()

        }

        entradaDados.question('\nNome do professor(a): \n', function (pro) {
            let professor = pro

            entradaDados.question('\nSexo do professor(a): [MASCULINO | FEMININO] \n', function (sexoP) {
                let sexoPro = sexoP.toUpperCase()

                if (sexoPro === "MASCULINO") {
                    sexoPro = "Professor"

                } else if (sexoPro === 'FEMININO') {
                    sexoPro = "Professora"

                } else {
                    console.log('ERRO: Digite apenas MASCULINO OU FEMININO')
                    entradaDados.close()
                }

                entradaDados.question('\nNome do curso: \n', function (cur) {
                    let curso = cur

                    entradaDados.question('\nNome da disciplina: \n', function (disci) {
                        let disciplina = disci

                        entradaDados.question('\nNota do primeiro bimestre [Digite entre 0 a 100]:\n', function (bimestre1) {
                            let nota1 = Number(bimestre1)

                            entradaDados.question('\nNota do segundo bimestre [Digite entre 0 a 100]:\n', function (bimestre2) {
                                let nota2 = Number(bimestre2)

                                entradaDados.question('\nNota do terceiro bimestre [Digite entre 0 a 100]:\n', function (bimestre3) {
                                    let nota3 = Number(bimestre3)

                                    entradaDados.question('\nNota do quarto bimestre [Digite entre 0 a 100]:\n', function (bimestre4) {
                                        let nota4 = Number(bimestre4)
                                        let media

                                        media = funcoes.calcularMedia(nota1, nota2, nota3, nota4)
                                        funcoes.erroEscrita(aluno, sexoAlu, professor, sexoPro, curso, disciplina)
                                        funcoes.erroNumero(nota1, nota2, nota3, nota4)

                                        if (media >= 70) {
                                            funcoes.statusAprovado(sexoAlu, aluno, curso, sexoPro, professor, disciplina, media, nota1, nota2, nota3, nota4)
                                            entradaDados.close()

                                        } else if (media < 50) {
                                            funcoes.statusReprovado(sexoAlu, aluno, curso, sexoPro, professor, disciplina, media, nota1, nota2, nota3, nota4)
                                            entradaDados.close()

                                        } else if (media <= 69 || media >= 50) {

                                            console.log('\n    É necessario que o aluno(a) faça um exame de recuperação   \n')

                                            entradaDados.question('Nota do exame de recuperação [Digite entre 0 a 100]\n', function (notaExa) {
                                                let notaExame = Number(notaExa)
                                                let mediaExame

                                                mediaExame = funcoes.calcularExame(notaExame, media)

                                                console.log(notaExame)
                                                console.log(mediaExame)

                                                if (mediaExame >= 60) {
                                                    funcoes.statusAprovadoExame(sexoAlu, aluno, curso, sexoPro, professor, disciplina,  nota1, nota2, nota3, nota4, mediaExame, notaExame)
                                                    entradaDados.close()

                                                } else if (mediaExame < 60) {
                                                    funcoes.statusReprovadoExame(sexoAlu, aluno, curso, sexoPro, professor, disciplina,  mediaExame, nota1, nota2, nota3, nota4, notaExame)
                                                    entradaDados.close()
                                                }
                                            })
                                        }
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
