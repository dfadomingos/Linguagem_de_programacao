const prompt = require('prompt-sync')();

let soma_idade = 0
let cont_peso90 = 0
let cont_idade10 = 0
let cont_altura190 = 0

for(let i = 1; i<=10; i++){
    let idade = Number(prompt(`Digite sua idade: `))    
    let peso = Number(prompt(`Digite seu peso: `))  
    let altura = Number(prompt(`Digite sua altura: `))

    if(peso > 90 && altura < 1.50){
        cont_peso90++
    }   

    if(altura > 1.90){
        cont_altura190++
        if(idade > 10 && idade < 30){
            cont_idade10++
        }
    }
    soma_idade = soma_idade + idade
}

let media = (soma_idade / 10).toFixed(2)
let perc10 = 0
if(cont_altura190 > 0){
    perc10 = ((cont_idade10 / cont_altura190) * 100).toFixed(2)
}

console.log(`Média das idades das 10 pessoas: ${media} anos`)
console.log(`Quantidade de pessoas com peso superior a 90 Kg e altura inferior a 1.90m: ${cont_peso90}`)
console.log(`Percentual de pessoas com idade de 10 a 30 anos entre as pessoas com 1.90m: ${perc10}`)
