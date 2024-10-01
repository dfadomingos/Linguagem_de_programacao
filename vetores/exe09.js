const prompt = require('prompt-sync')();

let produtos = ["Arroz", "Feijão", "Macarrão", "Leite", "Café", "Açúcar", "Sal", "Óleo", "Farinha", "Biscoito"]
let cod = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let precos = [10.99, 8.50, 5.75, 4.99, 15.90, 3.45, 1.99, 7.89, 6.30, 3.99]
let novopreco = []

for(let i = 0; i < 10; i++){
    if(cod[i] % 2 == 0){
        novopreco[i] = precos[i] * 1.15
    }
    else if(precos[i] > 1000){
        novopreco[i] = precos[i] * 1.10
    }
    else if(cod[i] % 2 == 0 && precos[i] > 1000){
        novopreco[i] = precos[i] * 1.20
    }
    else{
        novopreco[i] = precos[i]
    }
}
console.log(`Relatório:`)
for(let i = 0; i < 10; i++){
    console.log(`${produtos[i]}, cod: ${cod[i]}, preço = R$ ${precos[i]}, novo  preço = R$ ${novopreco[i].toFixed(2)}`)
}
