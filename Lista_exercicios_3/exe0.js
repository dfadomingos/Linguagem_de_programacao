//pacote para a função 
const prompt = require('prompt-sync')();

let n = Number(prompt("Informe a quantidade de alunos: "))
let soma = 0
let cont = 0
let nota
while(cont < n){
    nota = Number(prompt(`Informe a nota do aluno ${cont+1}: `))
    soma = soma + nota
    cont ++
}
media = (soma / n)
console.log(`Média = ${media}`);