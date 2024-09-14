const prompt = require('prompt-sync')();

let cont_idade50 = 0
let cont_altura_inf = 0
let cont_azul = 0
let cont_ruivo = 0
let soma_idade_inf = 0

for(let i = 1; i<=6; i++){
    let idade = Number(prompt(`Digite sua idade: `))
    let altura = Number(prompt(`Digite sua altura: `))
    let peso = Number(prompt(`Digite seu peso: `))
    let olhos = prompt(`Cor dos olhos (A = azul / P = preto / V = verde / C = castanho): `).toUpperCase()
    let cabelos = prompt(`Cor dos olhos ( P = preto / C = castanho / L = louro / R = ruivo): `).toUpperCase()

    if(idade > 50 && peso < 60){
        cont_idade50++
    }  

    if(altura < 1.50){
        soma_idade_inf = soma_idade_inf + idade
        cont_altura_inf++
    }

    if(olhos == "A"){
        cont_azul++
    }

    if(cabelos == "R" && olhos != "A"){
        cont_ruivo++
    }
}

let media_idade_inf = soma_idade_inf / cont_altura_inf
let perc_azul = ((cont_azul / 6) * 100).toFixed(2)

console.log(`Quantidade de pessoas com idade superior a 50 e peso menor que 60Kg: ${cont_idade50}`)
console.log(`Média das idades das pessoa com altura menor a 1,50m: ${media_idade_inf} anos`)
console.log(`Percentual de pessoas com olhos azuis: ${perc_azul}`)
console.log(`Quantidade de pessoas ruivas que não tem olhos azuis: ${cont_ruivo}`)