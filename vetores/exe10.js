const prompt = require('prompt-sync')();

let vetor1 = [4, 7, 5, 8, 2, 15, 9, 6, 10, 11]
let vetor2 = [3, 4, 5, 8, 2]
let vetResult1 =[]
let vetResult2 = []
let somaVet2 = 0

for(let i = 0; i <5; i++){
    somaVet2 += vetor2[i]
}

for(let i = 0; i < 10; i++){
    if(vetor1[i] % 2 == 0){
        vetResult1.push(vetor1[i] + somaVet2)
    }
}

for(let i = 0; i < 10; i++){
    if(vetor1[i] % 2 != 0){
        let qtdDiv = 0
        for(let j = 0; j < 5; j++){
            if(vetor1[i] % vetor2[j] == 0){
                qtdDiv++
            }        
        }
        vetResult2.push(qtdDiv)
    }    
}

console.log(`Vetor resultante 1 = ${vetResult1}`)
console.log(`Vetor resultante 2 = ${vetResult2}`)