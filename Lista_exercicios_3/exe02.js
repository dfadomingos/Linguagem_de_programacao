const prompt = require('prompt-sync')();

let preco = 5
let qtd = 120
const despesa = 200
let lucro
let maior_lucro = 0
let melhor_preco = 0

console.log(`Preço      Qtd     Despesa     Lucro`)
while(preco >= 1){
    lucro = (qtd * preco) - despesa
    if(lucro > maior_lucro){
        maior_lucro = lucro
        melhor_preco = preco
    }
    console.log(`${preco.toFixed(2)}       ${qtd}      ${despesa}         ${lucro}`)
    preco = preco - 0.50
    qtd = qtd + 26    
}
console.log(`Melhor preço = ${melhor_preco} com maior Lucro = ${maior_lucro}`)