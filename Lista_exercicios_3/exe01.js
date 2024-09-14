const prompt = require('prompt-sync')();

let a, b, c, troca
let i = 1
let j =1
while(j<=5){
    a = prompt(`Informe o valor da letra A: `)
    b = prompt(`Informe o valor da letra B: `)
    c = prompt(`Informe o valor da letra C: `)
    d = prompt(`Informe o valor da letra D: `)

    console.log(`Ordem digitada ${a} ${b} ${c} ${d}`)
    while(i <= 3){
        if(a > b){
            troca = a; a = b; b = troca;
        }
        if(b > c){
            troca = b; b = c; c = troca;
        }
        if(c > d){
            troca = c; c = d; d = troca;
        }
        i++
    }
    console.log(`Ordem crescente ${a} ${b} ${c} ${d}`)
    console.log(`Ordem crescente ${d} ${c} ${b} ${a}`)
    j++
}
