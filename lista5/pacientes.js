//Domingos Ferreira Alves     AdsII - Matutino
const prompt = require('prompt-sync')();

function cadastraPaciente(vetPacientes) {
    let nome = prompt('Digite o nome do paciente: ')
    let idade = Number(prompt('Digite a idade do paciente: '))
    let peso = Number(prompt('Digite o peso do paciente: '))
    let altura = Number(prompt('Digite a altura do paciente: '))
    let condicao = prompt('Digite a condição de saúde (leve, moderada ou grave): ').toLowerCase()

    if(isNaN(idade) || isNaN(peso) || isNaN(altura) || !['leve', 'moderada', 'grave'].includes(condicao)){
        console.log('Dados inválidos! Tente novamente.');
        return;
    }

    vetPacientes.push({ nome, idade, peso, altura, condicao });
    console.log('Paciente cadastrado com sucesso!');
}

function consultaPacientes(vetPacientes){
    console.log(`Lista de todos os pacientes`)
    for(let i=0; i<vetPacientes.length; i++){
        console.log(`Nome: ${vetPacientes[i].nome}, Idade: ${vetPacientes[i].idade}, Peso: ${vetPacientes[i].peso}, Altura: ${vetPacientes[i].altura}, Condição: ${vetPacientes[i].condicao}`)
    }
}

function pacienteMaiorRisco(vetPacientes){
    console.log(`Paciente com maior risco`)
    let objMaiorRisco = vetPacientes[0]
    for (let i = 1; i < vetPacientes.length; i++) {
        const pacienteAtual = vetPacientes[i];
        if (pacienteAtual.condicao === 'grave' && pacienteMaiorRisco.condicao !== 'grave') {
            objMaiorRisco = pacienteAtual; 
        } else if (pacienteAtual.condicao === objMaiorRisco.condicao) {
            if (pacienteAtual.idade > objMaiorRisco.idade) {
                objMaiorRisco = pacienteAtual; 
            } else if (pacienteAtual.idade === objMaiorRisco.idade) {
                if (pacienteAtual.peso > objMaiorRisco.peso) {
                    objMaiorRisco = pacienteAtual; 
                }
            }
        }
    }
console.log(objMaiorRisco)
}

function mediaIdades(vetPacientes){
    console.log(`A media das idades de todos os pacientes é`)
    let soma = 0
    for(let i=0; i<vetPacientes.length; i++){
        soma += vetPacientes[i].idade
    }
console.log(soma/vetPacientes.length)
}

function principal(){
    let pacientes = [
        {nome: "João", idade: 65, peso: 80, altura: 1.75, condicao: "grave"},
        {nome: "Maria", idade: 58, peso: 70, altura: 1.68, condicao: "moderada"},
        {nome: "Pedro", idade: 45, peso: 85, altura: 1.82, condicao: "leve"},
        {nome: "Ana", idade: 70, peso: 65, altura: 1.60, condicao: "grave"},
        {nome: "Carlos", idade: 50, peso: 90, altura: 1.78, condicao: "moderada"}
    ]
    let opcao
    do{
        console.log(`Digite \n1. Cadastrar um novo paciente \n2. Consultar todos os pacientes e suas informações \n3. Determinar e exibir o paciente de maior risco \n4. Calcular e exibir a média das idades dos pacientes \n5. Encerrar o programa`)
        opcao = Number(prompt())
        switch(opcao){
            case 1: cadastraPaciente(pacientes); break;
            case 2: consultaPacientes(pacientes); break;
            case 3: pacienteMaiorRisco(pacientes); break;
            case 4: mediaIdades(pacientes); break;
            case 5: console.log(`Programa será encerrado`); break;
            default: console.log(`Opção inválida`)
        }    
    }
    while(opcao != 5)
}

principal()