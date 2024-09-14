const prompt = require('prompt-sync')();
let opcao
let contC1 = 0; let contC2=0; let contC3=0; let contC4=0; let contNulo=0; let contBranco=0; let contVotos=0
do{
    console.log(`Informe seu voto \n1. Candidato 1 \n2. Candidato 2 \n3. Candidato 3 \n4. Candidato 4 \n5. Voto nulo \n6. Voto em branco \n0. Sair`)
    opcao = Number(prompt())
    switch(opcao){
        case 1: console.log(`Candidato 1\n`)
            contC1++
            contVotos++
            break
        case 2: console.log(`Candidato 2\n`)
            contC2++
            contVotos++
            break
        case 3: console.log(`Candidato 3\n`)
            contC3++
            contVotos++
            break
        case 4: console.log(`Candidato 4\n`)
            contC4++
            contVotos++
            break
        case 5: console.log(`Voto nulo\n`)
            contNulo++
            contVotos++
            break
        case 6: console.log(`Voto em branco\n`)
            contBranco++
            contVotos++
            break
        case 0: console.log(`\nVai encerrar\n`)
            break
        default: console.log(`Opção inválida\n`)
    }
}
while(opcao != 0);
let percnulo = (contNulo/contVotos)*100
let percbranco = (contBranco/contVotos)*100
console.log(`Votos de cada candidato: C1 = ${contC1}, C2 = ${contC2}, C3 = ${contC3}, C4 = ${contC4}`)
console.log(`Votos nulos = ${contNulo}, Votos Brancos = ${contBranco}`)
console.log(`Porcentagem de nulos = ${percnulo}`)
console.log(`Porcentagem de brancos = ${percbranco}`)