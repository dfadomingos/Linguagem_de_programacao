const prompt = require('prompt-sync')();

let cont_idade50 = 0
let cont_idade10 = 0
let soma_altura10 = 0
let cont_peso40 = 0

for(let i = 1; i<=5; i++){
    let idade = Number(prompt(`Digite sua idade: `))
    let altura = Number(prompt(`Digite sua altura: `))
    let peso = Number(prompt(`Digite seu peso: `))

    if(idade > 50){
        cont_idade50++
    }
    else if(idade > 10 && idade < 20){
        cont_idade10++
        soma_altura10 = soma_altura10 + altura
    }

    if(peso < 40){
        cont_peso40++
    }
}

let media_altura10 = soma_altura10 / cont_idade10
let perc40 = ((cont_peso40 / 5) * 100).toFixed(2)

console.log(`Quantidade de pessoas com idade superior a 50: ${cont_idade50}`)
console.log(`Média das alturas das pessoas com idade entre 10 a 20 anos: ${media_altura10}`)
console.log(`Percentual de pessoas com peso inferio a 40kg: ${perc40}`)