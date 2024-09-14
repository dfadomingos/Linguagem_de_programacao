const prompt = require('prompt-sync')();

let i = 0
let acumu = ""
while(i < 5 ){
    let j = 0
    while(j < 4){
        num = Number(prompt(`Informe um numero: `))        
        acumu = acumu + num + ","
        j ++
    }    
    i ++
}
acumu = acumu.slice(0, -1);

console.log(`${acumu}`);