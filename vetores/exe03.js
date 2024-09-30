const prompt = require('prompt-sync')();

let produtos = []
let estoque = []
//cadastro
for(let i=0; i<10; i++){
    produtos.push(prompt(`Informe o código do produto para cadastro: `))
    estoque.push(Number(prompt(`Informe a qtd do produto ${produtos[i]} para cadastro: `)))
}

//compra
let cliente = prompt(`Informe o codigo do cliente: `)
do{
    
    let prod = prompt(`Informe o código do produto para compra: `)
    let qtd = prompt(`Informe a quantidade da compra: `)

    let pos = produtos.indexOf(prod) //percorre o vetor produtos procurando por prod
    if(pos != -1){
        if(estoque[pos] >= qtd){  //tem estoque
            estoque[pos] -= qtd //atualiza estoque
            console.log(`Pedido atendido, o estoque atual é de ${estoque[pos]}`)
        }
        else{
            console.log(`Estoque insuficiente!`)
        } 
    }
    else{
        console.log(`Código inexistente`)
    }
    cliente = prompt(`Informe novo cliente. Digite 0 para encerrar: `)

}while(cliente != 0)

//mostrar estoque atualizado
for(let i=0; i<10; i++){
    console.log(`Produto ${produtos[i]} tem estoque ${estoque[i]}`)
}