let matriz = []

for(let i=0; i<6; i++){
    matriz[i] = []
    for(let j=0; j<3; j++){
        matriz[i][j] = parseInt(Math.random() * 100)
    }
}

let maior, iMaior, iMenor, menor, jMenor, jMaior
maior = matriz[0][0]; iMaior = 0; jMaior = 0
menor = matriz[0][0]; iMenor = 0; jMenor = 0

for(let i=0; i<6; i++){
    for(let j=0; j<3; j++){
        if (matriz[i][j] < menor){
            menor = matriz[i][j]; iMenor = i; jMenor = j;
        }
        if (matriz[i][j] > maior){
            maior = matriz[i][j]; iMaior = i; jMaior = j;
        }
    }
}
console.log(`Maior valor é ${maior} e está na posição ${iMaior} x ${jMaior}`)
console.log(`Menor valor é ${menor} e está na posição ${iMenor} x ${jMenor}`)