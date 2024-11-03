let matriz=[
    [1, 2 , 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14,15],
    [16, 17, 18]
]

let maior = matriz[0][0]
let menor = matriz [0][0]
let posicaoMaior = 0
let posicaoMenor = 0

for (i=0; i<6; i++){
    for (j=0; j<3; j++){
        if(matriz[i][j] > maior){
            maior = matriz[i][j]
            posicaoMaior = (`Maior está na linha ${i} e na coluna ${j}`)
        }
        if(matriz[i][j] < menor){
            menor = matriz[i][j]
            posicaoMenor = (`Maior está na linha ${i} e na coluna ${j}`)
        }
    }
}
console.log(`O maior número é ${maior} e está na posição ${posicaoMaior}`)
console.log(`O menor número é ${menor} e está na posição ${posicaoMenor}`)