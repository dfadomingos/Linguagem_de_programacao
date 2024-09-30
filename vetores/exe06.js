
const prompt = require('prompt-sync')();

let totalVendas = [10000, 20000, 30000, 40000, 50000, 60000, 70000]
let percentual = [10, 5, 10, 5, 10, 5, 10]
let nomes = ["Paulo", "Pedro", "José", "Carlos", "Lucas", "Zé", "Jr"]
let valoresReceber = []

for(let i = 0; i < 7; i++){
    valoresReceber.push(totalVendas[i]*percentual[i]/100)
}

//calcula o total de vendas
let total = 0
for(let i = 0; i < 7; i++){
    total = total + totalVendas[i]
}

//calcula o maior valor a receber e quem recebera
let maiorComissao =  valoresReceber[0]
let nomeMaiorComissao = nomes[0]
for(let i = 0; i < nomes.length; i++){
    if(valoresReceber[i] > maiorComissao){
        maiorComissao = valoresReceber[i]
        nomeMaiorComissao = nomes[i]
    }
}

// Calcula o menor valor a receber e quem receberá
let menorComissao = valoresReceber[0];
let nomeMenorComissao = nomes[0];
for (let i = 0; i < nomes.length; i++) {
    if (valoresReceber[i] < menorComissao) {
        menorComissao = valoresReceber[i];
        nomeMenorComissao = nomes[i];
    }
}

// Relatório
console.log("Relatório:");
for (let i = 0; i < nomes.length; i++) {
    console.log(`${nomes[i]}: R$ ${valoresReceber[i].toFixed(2)}`);
}

console.log(`\nTotal de vendas: R$ ${total}`);
console.log(`Maior comissão: ${nomeMaiorComissao} receberá R$ ${maiorComissao.toFixed(2)}`);
console.log(`Menor comissão: ${nomeMenorComissao} receberá R$ ${menorComissao.toFixed(2)}`);