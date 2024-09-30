const prompt = require('prompt-sync')();

let vetor = []
let pares = []
let multiplos3 = []

for(let i = 0; i < 12; i++){
    vetor.push(Number(prompt('Informe um valor: ')))
}

for(let i = 0; i < 12; i++){
    if(vetor[i] % 2 == 0){
        pares.push(vetor[i])
    }
    if(vetor[i] % 3 == 0){
        multiplos3.push(vetor[i])
    }
}
console.log(`Pares = ${pares}`)
console.log(`Multiplos de 3 = ${multiplos3}`)