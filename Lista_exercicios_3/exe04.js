const prompt = require('prompt-sync')();

let num = Number(prompt(`Digite a tabuada desejada: `))
let i = 0
while(i <=10) {
    let mult = num * i
    console.log(`${num} x ${i} = ${mult}`)   
    i++      
}
