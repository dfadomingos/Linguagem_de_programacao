const prompt = require('prompt-sync')();

let soma_primo = 0
let soma_par = 0

for(let i = 1; i<=10; i++){
    let num = Number(prompt(`Digite um número: `))     

    if(num % 2 == 0){
        soma_par = soma_par + num
    }

    let primo = true
    let divisor = 2
    while(divisor < num){
        if(num % divisor == 0){
            primo = false
            break
        }
        divisor++
    }
    if(primo && num != 1 && num != 0){
        soma_primo = soma_primo + num
    }
}
console.log(`Soma dos números pares: ${soma_par}`)
console.log(`Soma dos números primos: ${soma_primo}`)