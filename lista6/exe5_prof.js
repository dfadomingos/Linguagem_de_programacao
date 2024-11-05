for(i=0;i<12;i++){    
    matriz [i] = []
    for(j=0;j<4;j++){
        matriz[i][j] = Number((Math.random() * 1000).toFixed(2))
    }
}

//total vendido em cada mês
for(i=0;i<12;i++){  
    let totalMes = 0      
    for(j=0;j<4;j++){
        totalMes += matriz[i][j]       
    }
    console.log(`Total vendido em ${meses[i]} foi de R$ ${totalMes.toFixed(2)}`)
}

//total vendido em casa semana
for(j=0;j<4;j++){  
    let totalSemana = 0      
    for(i=0;i<12;i++){
        totalSemana += matriz[i][j]
    }
    console.log(`Total vendido na ${j+1}ª semana foi de R$ ${totalSemana.toFixed(2)}`)
}

//total vendido no ano
let totalAno = 0
for(i=0;i<12;i++){         
    for(j=0;j<4;j++){
        totalAno += matriz[i][j]       
    }
}
console.log(`Total vendido no ano R$ ${totalAno.toFixed(2)}`)

function principal(){
    let matriz = []
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

    //transforme os codigos acima em 4 funçoes e chame-as aqui
    //utilize passagem de parametros
}