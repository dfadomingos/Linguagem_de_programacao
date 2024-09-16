const prompt = require('prompt-sync')();

let soma_primo = 0
let soma_par = 0

for(let i = 1; i<=10; i++){
    let num = Number(prompt(`Digite um número: `))     

    let cont_div = 0
    for(let divisor = num; divisor >= 1; divisor--){        
        if(num % divisor == 0){
            cont_div++
        }
    }
    if(cont_div <= 2){        
        soma_primo = soma_primo + num
    }

    if(num % 2 == 0){
        soma_par = soma_par + num
    }
}

console.log(`Soma dos números pares: ${soma_par}`)
console.log(`Soma dos números primos: ${soma_primo}`)