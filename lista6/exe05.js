let matriz = []
let vetorMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]

for(i=0;i<12;i++){    
    matriz [i] = []
    for(j=0;j<4;j++){
        matriz[i][j] = parseInt(Math.random() * 100)
    }
}
console.log(matriz)

let totalMes
let totalSemana 
let totalAno = 0

//calculo total mes
console.log(`Total vendido em cada mês: `)
for(i=0;i<12;i++){  
    totalMes = 0      
    for(j=0;j<4;j++){
        totalMes = totalMes + matriz[i][j]
        totalAno = totalAno + matriz[i][j]  //somando total ano
    }
    console.log(`Em ${vetorMes[i]} foram vendidos ${totalMes}`)
}

//calculo total semana
console.log(`\nTotal vendido em cada semana: `)
for(j=0;j<4;j++){  
    totalSemana = 0      
    for(i=0;i<12;i++){
        totalSemana = totalSemana + matriz[i][j]
    }
    console.log(`Na semana ${j} foram vendidos ${totalSemana}`)
}

console.log(`\nTotal vendido no ano = ${totalAno}`)