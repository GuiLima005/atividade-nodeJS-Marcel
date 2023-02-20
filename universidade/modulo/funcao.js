/************************************************************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade
 * Data: 10/02/2023
 * Autor: Guilherme Lima
 * versão: 1.0
 ************************************************************************************/

const { isString } = require("util")

// Função para calcular a média das notas 
const calcularMedia = function (bimestre1, bimestre2, bimestre3, bimestre4) {

    let nota1 = Number(bimestre1)
    let nota2 = Number(bimestre2)
    let nota3 = Number(bimestre3)
    let nota4 = Number(bimestre4)

    media = (nota1 + nota2 + nota3 + nota4) / 4

    return media
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

    // } else if (sexoAlu != 'MASCULINO' && sexoAlu != 'FEMININO') {
    //     console.log('ERRO: Digite apenas MASCULINO OU FEMININO')
    // } else if (sexoPro != 'MASCULINO' && sexoPro != 'FEMININO') {
    //     console.log('ERRO: Digite apenas MASCULINO OU FEMININO')

    } else if (!isString(aluno) || !isString(sexoAlu) || !isString(professor) || !isString(sexoPro) || !isString(curso) || !isString(disciplina)) {
        console.log('ERRO: Você preencheu valores numericos no lugar errado.')
    }
}

// Função para correção de Números
const erroNumero = function (bimestre1, bimestre2, bimestre3, bimestre4) {

    let nota1 = Number(bimestre1)
    let nota2 = Number(bimestre2)
    let nota3 = Number(bimestre3)
    let nota4 = Number(bimestre4)

    if (nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
        console.log('ERRO: É necessario que você preencha todos os dados.')

    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Não é possivel calcular sem a entrada de valores numericos')

    } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        console.log('ERRO: Digite somente notas de 0 a 100')

    } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: Digite somente notas de 0 a 100')
    }
}

// Função para calcular a media do exame 
const calcularExame = function (notaExa, media) {

    let med = Number(media)
    let notaExame = Number(notaExa)

    mediaExame = (notaExame + med) / 2

    return mediaExame
}

// Função para mostrar aluno(a) aprovado(a) sem o Exame 
const statusAprovado = function (sexoAlu, aluno, curso, sexoPro, professor, disciplina, media, nota1, nota2, nota3, nota4) {
    console.log('\n---------------- RELATORIO DO ALUNO(a) ---------------------------\n');

    if (sexoAlu == 'Aluna') {
        console.log('A aluna ' + aluno + ' foi aprovada na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas da aluna: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
        console.log('media final: ' + media)

    } else if (sexoAlu == 'Aluno') {
        console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + disciplina)
        console.log('Curso: ' + curso);
        console.log(sexoPro + ': ' + professor)
        console.log('Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
        console.log('media final: ' + media)
    }

}

// Função para mostrar aluno(a) reprovado(a) sem o Exame 
const statusReprovado = function (sexoAlu, aluno, curso, sexoPro, professor, disciplina, media, nota1, nota2, nota3, nota4) {
    console.log('\n---------------- RELATORIO DO ALUNO(a) ---------------------------\n')

    if (sexoAlu == 'Aluna') {
        console.log('A aluna ' + aluno + ' foi reprovada na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas da aluna: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
        console.log('media final: ' + media)

    } else if (sexoAlu == 'Aluno') {
        console.log('O aluno ' + aluno + ' foi reprovado na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas do aluno: ' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4)
        console.log('media final: ' + media)
    }
}

// Função para mostrar aluno(a) aprovado(a) com o Exame 
const statusAprovadoExame = function (sexoAlu, aluno, curso, sexoPro, professor, disciplina, notaExame, nota1, nota2, nota3, nota4) {
    console.log('\n---------------- RELATORIO DO ALUNO(a) ---------------------------\n')

    if (sexoAlu == 'Aluna') {
        console.log('A aluna ' + aluno + ' foi aprovada na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas da aluna:' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ')
        console.log('Nota do exame: ' + notaExame)
        console.log('media final: ' + mediaExame)

    } else if (sexoAlu == 'Aluno') {
        console.log('O aluno ' + aluno + ' foi aprovado na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas do aluno:' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ')
        console.log('Nota do exame: ' + notaExame)
        console.log('media final: ' + mediaExame)
    }
}

// Função para mostrar aluno(a) reprovado(a) com o Exame 
const statusReprovadoExame = function (sexoAlu, aluno, curso, sexoPro, professor, disciplina, notaExame, nota1, nota2, nota3, nota4) {
    console.log('\n---------------- RELATORIO DO ALUNO(a) ---------------------------\n')

    if (sexoAlu == 'Aluna') {
        console.log('A aluna ' + aluno + ' foi reprovada na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas da aluna:' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ')
        console.log('Nota do exame: ' + notaExame)
        console.log('media final: ' + mediaExame)

    } else if (sexoAlu == 'Aluno') {
        console.log('O aluno ' + aluno + ' foi reprovado na disciplina ' + disciplina)
        console.log('Curso: ' + curso)
        console.log(sexoPro + ': ' + professor)
        console.log('Notas do aluno:' + nota1 + ', ' + nota2 + ', ' + nota3 + ', ' + nota4 + ', ')
        console.log('Nota do exame: ' + notaExame)
        console.log('media final: ' + mediaExame)
    }
}

// mediaExame(80, 55) Teste da função 

// calcularMedia(50, 50, 50, 50) //Teste da função 

// Deixar as funções publicas
module.exports = {
    calcularMedia,
    erroEscrita,
    erroNumero,
    calcularExame,
    statusAprovado,
    statusReprovado,
    statusAprovadoExame,
    statusReprovadoExame
}