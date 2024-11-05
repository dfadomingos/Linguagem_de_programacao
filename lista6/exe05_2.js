let matriz = []
let vetorMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

for(i=0;i<12;i++){    
    matriz [i] = []
    for(j=0;j<4;j++){
        matriz[i][j] = parseInt(Math.random() * 100)
    }
}
console.log(matriz)

//calculo total mes
console.log(`Total vendido em cada mês: `)
for(i=0;i<12;i++){  
    let totalMes = 0      
    for(j=0;j<4;j++){
        totalMes = totalMes + matriz[i][j]        
    }
    console.log(`Em ${vetorMes[i]} foram vendidos ${totalMes}`)
}

//calculo total semana
console.log(`\nTotal vendido em cada semana: `)
for(j=0;j<4;j++){  
    let totalSemana = 0      
    for(i=0;i<12;i++){
        totalSemana = totalSemana + matriz[i][j]
    }
    console.log(`Na semana ${j} foram vendidos ${totalSemana}`)
}

//total vendido no ano
let totalAno = 0
for(i=0;i<12;i++){         
    for(j=0;j<4;j++){
        totalAno += matriz[i][j]       
    }
}
console.log(`\nTotal vendido no ano R$ ${totalAno}`)

