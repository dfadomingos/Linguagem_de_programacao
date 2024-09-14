const prompt = require('prompt-sync')();

let totalV = 0
let totalP= 0
let total = 0

for(let i = 1; i<=15; i++){
    let opcao = prompt(`Digite o código da compra (V à vista / P à prazo): `).toUpperCase()
    let valor = Number(prompt(`Digite o valor: `))
    if(opcao == "V"){
        totalV = totalV + valor
    }
    else if(opcao == "P"){
        totalP = totalP + valor
    }
    else{
        console.log('Código inválido!');
        continue
    }
total = total + valor
}

let prestacao1 = totalP / 3

console.log(`Valor total das compras à vista: R$${totalV}`)
console.log(`Valor total das compras a prazo: R$${totalP}`)
console.log(`Valor total das compras R$${total}`)
console.log(`Valor 1ª prestação das compras a prazo ${prestacao1.toFixed(2)}`)
