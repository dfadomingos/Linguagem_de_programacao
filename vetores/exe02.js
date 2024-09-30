const prompt = require('prompt-sync')();

let vetor = []
let multiplos2 = []
let multiplos3 = []
let multiplos2_3 = []

for(let i = 0; i < 7; i++){
    vetor.push(Number(prompt(`Digite um valor: `)))
}

for(let i = 0; i < 7; i++){
    if(vetor[i] % 2 == 0){
        multiplos2.push(vetor[i])
    }
    if(vetor[i] % 3 == 0){
        multiplos3.push(vetor[i])
    }
    if(vetor[i] % 2 == 0 && vetor[i] % 3 == 0){
        multiplos2_3.push(vetor[i])
    }
}

console.log(`Multiplos de 2 = ${multiplos2}`)
console.log(`Multiplos de 3 = ${multiplos3}`)
console.log(`Multiplos de 2 e de 3 = ${multiplos2_3}`)