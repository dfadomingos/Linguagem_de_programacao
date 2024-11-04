let matriz=[
    [10, 12, 14, 16], 
    [17, 18, 19, 20]
]

//encontra a qtd de elementos entre 12 e 20 em cada linha

let soma_par = 0
let cont_par = 0
let vetor = [0, 0]

for(let i=0;i<2;i++){
    for(let j=0;j<3;j++){
        if(matriz[i][j] >= 12 && matriz[i][j] <= 20){
            vetor[i]++
        }
        if(matriz[i][j] % 2 == 0){
            soma_par += matriz[i][j]
            cont_par++
        }
    }
}
for(let i=0; i<2; i++){
    console.log(`Linha ${i} tem ${vetor[i]} números entre 12 e 20`)
}
if (cont_par > 0){
    console.log(`Média dos elementos pares é ${soma_par/cont_par}`)
}
else{
    console.log(`Não existe números pares`)
}
