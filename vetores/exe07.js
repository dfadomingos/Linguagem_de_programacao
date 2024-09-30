const prompt = require('prompt-sync')();

let vetor = []
let cont_negativos = 0
let soma_positivos = 0

for(let i = 0; i < 10; i++){
    vetor.push(Number(prompt(`Digite um valor: `)))
}

for(let i = 0; i < 10; i++){
    if(vetor[i] < 0){
        cont_negativos++
    }
    else{
        soma_positivos += vetor[i]
    }
}

console.log(`Quantidade de número negativos = ${cont_negativos}`)
console.log(`Soma dos positivos = ${soma_positivos}`)
