const prompt = require('prompt-sync')();

function calculoMes(matriz, vetorMes){
    console.log(`Total vendido em cada mês: `)
    for(i=0;i<12;i++){  
        let totalMes = 0      
        for(j=0;j<4;j++){
            totalMes = totalMes + matriz[i][j]        
        }
        console.log(`Em ${vetorMes[i]} foram vendidos ${totalMes}`)
    }
}

function calculoSemana(matriz){
    console.log(`\nTotal vendido em cada semana: `)
    for(j=0;j<4;j++){  
        let totalSemana = 0      
        for(i=0;i<12;i++){
            totalSemana = totalSemana + matriz[i][j]
        }
        console.log(`Na semana ${j+1} foram vendidos ${totalSemana}`)
    }
}

function calculoTotalAno(matriz){
    let totalAno = 0
    for(i=0;i<12;i++){         
        for(j=0;j<4;j++){
            totalAno += matriz[i][j]       
        }
    }
    console.log(`\nTotal vendido no ano R$ ${totalAno}`)
}

function principal(){
    let matriz = []
    let vetMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    
    for(i=0;i<12;i++){    
        matriz [i] = []
        for(j=0;j<4;j++){
            matriz[i][j] = parseInt(Math.random() * 100)
        }
    }
    
    let opcao
    do{
        console.log(`\nDigite \n1. Calcular o total vendido em cada mês \n2. Calcular o total vendido em cada semana \n3. Calcular o total vendido durante o ano todo \n4. Encerrar o programa`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: calculoMes(matriz, vetMeses); break;
            case 2: calculoSemana(matriz); break;
            case 3: calculoTotalAno(matriz); break;
            case 4: console.log(`Programa será encerrado`); break;
            default: console.log(`Opção inválida`)
        }    
    }
    while(opcao != 4)
}
principal()