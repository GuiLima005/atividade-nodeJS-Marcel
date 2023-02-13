/***********************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 **********************************************************************************/

const { isString } = require("util")

// Função para calcular a média das notas 
const calcularMedia = function (bimestre1, bimestre2, bimestre3, bimestre4) {

    let nota1 = Number(bimestre1)
    let nota2 = Number(bimestre2)
    let nota3 = Number(bimestre3)
    let nota4 = Number(bimestre4)

    let media

    media = (nota1 + nota2 + nota3 + nota4) / 4

    console.log(media)
}

// Função para correção de Strings
const erroEscrita = function (alu, sexoA, pro, sexoP, cur, disci) {

    let aluno = alu
    let sexoAlu = sexoA.toUpperCase()
    let professor = pro
    let sexoPro = sexoP.toUpperCase()
    let curso = cur
    let disciplina = disci

    if (aluno == "" || sexoAlu == "" || professor == "" || sexoPro == "" || curso == "" || disciplina == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')

    } else if (sexoAlu != 'MASCULINO' && sexoAlu != 'FEMININO') {
        console.log('ERRO: Digite apenas MASCULINO OU FEMININO')

    } else if (sexoPro != 'MASCULINO' && sexoPro != 'FEMININO') {
        console.log('ERRO: Digite apenas MASCULINO OU FEMININO')

    } else if (!isString(aluno) || !isString(sexoAlu) || !isString(professor) || !isString(sexoPro) || !isString(curso) || !isString(disciplina)) {
        console.log('ERRO: Você preencheu valores numericos no lugar errado.')
    }
}

// Função para correção de Números
const erroNumero = function (nota1, nota2, nota3, nota4) {

    let bimestre1 = Number(nota1)
    let bimestre2 = Number(nota2)
    let bimestre3 = Number(nota3)
    let bimestre4 = Number(nota4)
    let media

    if (bimestre1 == "" || bimestre2 == "" || bimestre3 == "" || bimestre4 == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')

    } else if (isNaN(bimestre1) || isNaN(bimestre2) || isNaN(bimestre3) || isNaN(bimestre4)) {
        console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')

    } else if (bimestre1 < 0 || bimestre2 < 0 || bimestre3 < 0 || bimestre4 < 0) {
        console.log('ERRO: Digite somente notas de 0 a 100')

    } else if (bimestre1 > 100 || bimestre2 > 100 || bimestre3 > 100 || bimestre4 > 100) {
        console.log('ERRO: Digite somente notas de 0 a 100')
    }
}

// Função para chamar o Exame Final
const exameFinal = function (nota1) {

    let mediaExame
    let notaExame = Number(nota1)
    



}

// calcularMedia(50, 50, 50, 50)

module.exports = {
    calcularMedia,
    erroEscrita,
    erroNumero,
    exameFinal
}