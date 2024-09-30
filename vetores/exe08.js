const prompt = require('prompt-sync')();

let alunos = ["Paulo", "Pedro", "José", "Carlos", "Lucas", "Zé", "Jr"]
let media = [7, 5, 8, 9, 7.5, 5.3, 9.7]

let maior = media[0]
let nomeMaior = alunos[0]

for(let i = 0; i < 7; i++){
    if(media[i] > maior){
        maior = media[i]
        nomeMaior = alunos[i]
    }
    if (media[i] < 7) {
        let provaFinal = (10 - media[i]) / 2;
        console.log(`O aluno ${alunos[i]} precisa tirar ${provaFinal} na prova final.`);
    }
}
console.log(`O aluno ${nomeMaior} tem a maior média com ${maior}`)
