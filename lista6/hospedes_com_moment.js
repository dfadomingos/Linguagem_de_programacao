const prompt = require('prompt-sync')();
const moment = require('moment');

let quartos = Array.from({ length: 20 }, (_, i) => ({ quarto: 101 + i, disponivel: true }));
let hospedes = [];

// Função para validar data no formato "dd-mm-yyyy"
function validaData(data) {
    return moment(data, "DD-MM-YYYY", true).isValid();
}

// Função para cadastrar um novo hóspede
function cadastraHospede(hospedes, quartos) {
    const cpf = prompt("Digite o CPF do hóspede: ");
    if (hospedes.some(h => h.cpf === cpf)) {
        console.log("Erro: CPF já cadastrado.");
        return;
    }
    
    const idade = parseInt(prompt("Digite a idade do hóspede: "));
    const dataEntrada = prompt("Digite a data de entrada (dd-mm-yyyy): ");
    if (!validaData(dataEntrada)) {
        console.log("Erro: Data inválida.");
        return;
    }

    const quartoDisponivel = quartos.find(q => q.disponivel);
    if (!quartoDisponivel) {
        console.log("Erro: Nenhum quarto disponível.");
        return;
    }
    
    quartoDisponivel.disponivel = false;
    hospedes.push({ cpf, idade, quarto: quartoDisponivel.quarto, dataEntrada });
    console.log(`Hóspede cadastrado no quarto ${quartoDisponivel.quarto}.`);
}

// Função para registrar a saída de um hóspede
function saidaHospede(hospedes, quartos) {
    const cpf = prompt("Digite o CPF do hóspede: ");
    const index = hospedes.findIndex(h => h.cpf === cpf);
    if (index === -1) {
        console.log("Erro: Hóspede não encontrado.");
        return;
    }
    
    const quarto = hospedes[index].quarto;
    hospedes.splice(index, 1);
    quartos.find(q => q.quarto === quarto).disponivel = true;
    console.log(`Hóspede removido do quarto ${quarto}.`);
}

// Função para listar os quartos disponíveis
function consultaQuartosDisponiveis(quartos) {
    const quartosDisponiveis = quartos.filter(q => q.disponivel).map(q => q.quarto);
    console.log("Quartos disponíveis:", quartosDisponiveis.length ? quartosDisponiveis.join(', ') : "Nenhum quarto disponível.");
}

// Função para listar todos os hóspedes atualmente hospedados
function consultaHospedes(hospedes) {
    if (!hospedes.length) {
        console.log("Nenhum hóspede no hotel.");
        return;
    }
    console.log("Hóspedes atualmente hospedados:");
    hospedes.forEach(h => {
        console.log(`CPF: ${h.cpf}, Idade: ${h.idade}, Quarto: ${h.quarto}, Data de Entrada: ${h.dataEntrada}`);
    });
}

// Função para determinar o hóspede com estadia mais longa
function hospedeMaisTempo(vetHospedes) {
    if (vetHospedes.length === 0) {
        console.log("Nenhum hóspede registrado.");
        return;
    }

    let hospedeMaisAntigo = vetHospedes.reduce((maisAntigo, hospede) => {
        let dataEntradaHospede = moment(hospede.dataEntrada, "DD-MM-YYYY");
        let dataEntradaMaisAntigo = moment(maisAntigo.dataEntrada, "DD-MM-YYYY");
        
        return dataEntradaHospede.isBefore(dataEntradaMaisAntigo) ? hospede : maisAntigo;
    });

    console.log(`Hóspede com estadia mais longa: CPF: ${hospedeMaisAntigo.cpf}, Idade: ${hospedeMaisAntigo.idade}, Quarto: ${hospedeMaisAntigo.quarto}, Data de Entrada: ${hospedeMaisAntigo.dataEntrada}`);
}

// Função principal do menu
function principal() {
    let opcao;
    do {
        console.log("\nMenu:");
        console.log("1: Cadastrar um novo hóspede");
        console.log("2: Registrar saída de um hóspede");
        console.log("3: Listar quartos disponíveis");
        console.log("4: Listar todos os hóspedes atualmente hospedados");
        console.log("5: Determinar o hóspede com a estadia mais longa");
        console.log("6: Encerrar o programa");

        opcao = parseInt(prompt("Escolha uma opção: "));

        switch (opcao) {
            case 1:
                cadastraHospede(hospedes, quartos);
                break;
            case 2:
                saidaHospede(hospedes, quartos);
                break;
            case 3:
                consultaQuartosDisponiveis(quartos);
                break;
            case 4:
                consultaHospedes(hospedes);
                break;
            case 5:
                hospedeMaisTempo(hospedes);
                break;
            case 6:
                console.log("Encerrando o programa...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 6);
}

principal();
