const prompt = require('prompt-sync')();

let j = 1
while(j <= 10){
    console.log(`Tabuada do ${j}`)
    let i = 0
    while(i <=10) {
        let mult = j * i        
        console.log(`${j} x ${i} = ${mult}`)   
        i++      
    }
    console.log('')
    j++
}

