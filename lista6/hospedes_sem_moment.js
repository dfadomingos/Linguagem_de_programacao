const prompt = require('prompt-sync')();

function validaData(data) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    return regex.test(data);
}

function converteData(data) {
    const [dia, mes, ano] = data.split("-").map(Number);
    return new Date(ano, mes - 1, dia); // `mes - 1` porque os meses em JavaScript vão de 0 a 11
}

function cadastraHospede(vetHospedes, quartosDisponiveis) {
    const cpf = prompt("CPF do hóspede: ");
    if (vetHospedes.some(h => h.cpf === cpf)) {
        console.log("Erro: CPF já cadastrado.");
        return;
    }

    const idade = parseInt(prompt("Idade do hóspede: "), 10);
    const quarto = parseInt(prompt("Número do quarto: "), 10);

    if (!quartosDisponiveis.some(q => q.quarto === quarto && q.disponivel)) {
        console.log("Erro: Quarto indisponível ou não existe.");
        return;
    }

    const dataEntrada = prompt("Data de entrada (dd-mm-yyyy): ");
    if (!validaData(dataEntrada)) {
        console.log("Erro: Data em formato incorreto.");
        return;
    }

    quartosDisponiveis.find(q => q.quarto === quarto).disponivel = false;
    vetHospedes.push({ cpf, idade, quarto, dataEntrada });
    console.log("Hóspede cadastrado com sucesso.");
}

function saidaHospede(vetHospedes, quartosDisponiveis, cpf) {
    const index = vetHospedes.findIndex(h => h.cpf === cpf);
    if (index === -1) {
        console.log("Erro: Hóspede não encontrado.");
        return;
    }

    const quarto = vetHospedes[index].quarto;
    quartosDisponiveis.find(q => q.quarto === quarto).disponivel = true;
    vetHospedes.splice(index, 1);
    console.log("Hóspede removido e quarto liberado.");
}

function consultaQuartosDisponiveis(quartosDisponiveis) {
    const disponiveis = quartosDisponiveis.filter(q => q.disponivel).map(q => q.quarto);
    console.log("Quartos disponíveis:", disponiveis);
}

function consultaHospedes(vetHospedes) {
    if (vetHospedes.length === 0) {
        console.log("Nenhum hóspede atualmente.");
        return;
    }
    console.log("Hóspedes atualmente hospedados:");
    vetHospedes.forEach(h => {
        console.log(`CPF: ${h.cpf}, Idade: ${h.idade}, Quarto: ${h.quarto}, Data de Entrada: ${h.dataEntrada}`);
    });
}

function hospedeMaisTempo(vetHospedes) {
    if (vetHospedes.length === 0) {
        console.log("Nenhum hóspede registrado.");
        return;
    }

    let hospedeMaisAntigo = vetHospedes.reduce((maisAntigo, hospede) => {
        let dataEntradaHospede = converteData(hospede.dataEntrada);
        let dataEntradaMaisAntigo = converteData(maisAntigo.dataEntrada);
        
        return dataEntradaHospede < dataEntradaMaisAntigo ? hospede : maisAntigo;
    });

    console.log(`Hóspede com estadia mais longa: CPF: ${hospedeMaisAntigo.cpf}, Idade: ${hospedeMaisAntigo.idade}, Quarto: ${hospedeMaisAntigo.quarto}, Data de Entrada: ${hospedeMaisAntigo.dataEntrada}`);
}

let principal = () => {
    let quartosDisponiveis = Array.from({length: 20}, (_, i) => ({ quarto: 101 + i, disponivel: true }));
    let vetHospedes = [];

    while (true) {
        console.log("\nEscolha uma opção:");
        console.log("1: Cadastrar um novo hóspede");
        console.log("2: Registrar saída de um hóspede");
        console.log("3: Listar quartos disponíveis");
        console.log("4: Listar todos os hóspedes atualmente hospedados");
        console.log("5: Determinar o hóspede com a estadia mais longa");
        console.log("6: Encerrar o programa");
        const opcao = prompt("Opção: ");

        switch (opcao) {
            case '1':
                cadastraHospede(vetHospedes, quartosDisponiveis);
                break;
            case '2':
                const cpf = prompt("CPF do hóspede que vai sair: ");
                saidaHospede(vetHospedes, quartosDisponiveis, cpf);
                break;
            case '3':
                consultaQuartosDisponiveis(quartosDisponiveis);
                break;
            case '4':
                consultaHospedes(vetHospedes);
                break;
            case '5':
                hospedeMaisTempo(vetHospedes);
                break;
            case '6':
                console.log("Encerrando o programa.");
                return;
            default:
                console.log("Opção inválida, tente novamente.");
        }
    }
}

principal();
