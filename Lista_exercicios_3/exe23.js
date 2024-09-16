const prompt = require('prompt-sync')();
let sal
do{
    opcao = console.log(`Menu de opções: \n1. Novo salário \n2. Ferias \n3. Décimo terceiro \n4. Sair`)
    opcao = Number(prompt())
    switch(opcao){
        case 1:
            sal = Number(prompt(`Digite o salário: `))
            let novo
            if(sal >=0 && sal < 210){
                novo = sal * 1.15            
            }
            else if(sal >= 210 && sal <= 600){
                novo = sal * 1.10
            }
            else if(sal > 600){
                novo = sal * 1.05
            }
            else{
                console.log(`Salário informado é negativo`)
                break
            }
            console.log(`O novo salário é ${novo}`)
            break
        case 2:
            sal = Number(prompt(`Digite o salário: `))
            let ferias = sal + (sal/3)
            console.log(`Valor das férias = ${ferias}`)
            break
        case 3:
            sal = Number(prompt(`Digite o salário: `))
            let meses = prompt(`Informe o número de meses trabalhados: `)
            let dt = sal * (meses/12)
            console.log(`O décimo terceiro é ${dt}: `)
            break
        case 4:
            console.log(`Saindo...`)
            break
    }
}while(opcao != 4)