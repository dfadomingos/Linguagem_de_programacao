const prompt = require("prompt-sync")()
let matriz = []
let vetor = []

for(i=0;i<5;i++){
    vetor.push(prompt(`Informe o nome do aluno: `))
    matriz [i] = []
    for(j=0;j<4;j++){
        matriz[i][j] = (Math.random() * 10).toFixed(2)
    }
}
console.log(matriz)

for(let i=0; i<5; i++){
    let soma = 0
    for (let j=0; j<4; j++){
        soma += Number(matriz[i][j])
    }
    let media = soma/matriz[i].length
    if (media >= 6){
        console.log(`Aluno ${vetor[i]} aprovado com média ${media.toFixed(2)}`)
    }
    else if (media >= 3){
        console.log(`Aluno ${vetor[i]} em exame com média ${media.toFixed(2)}`)
    }
    else{
        console.log(`Aluno ${vetor[i]} reprovado com média ${media.toFixed(2)}`)
    }

}
