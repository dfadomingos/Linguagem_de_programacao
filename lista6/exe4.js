let matrizNotas = [
    [6,7,6,8,10],
    [7.5,8,8.5,6,3],
    [4,8,6.6,10,9]
]
vetorAluno = ["Ana", "Domingos", "Tobby"]
let media = 0
let situacao = "" //vazio

for(i=0;i<3;i++){
    soma = 0
    for(j=0;j<5;j++){
        soma = soma + matrizNotas[i][j]
    }
    media = soma / 5
    if(media > 6){
        situacao = "Aprovado"
    }
    else{
        situacao = "Reprovado"
    }
    console.log(`Média do aluno ${vetorAluno[i]} é ${media.toFixed(2)} e está ${situacao}`)
}