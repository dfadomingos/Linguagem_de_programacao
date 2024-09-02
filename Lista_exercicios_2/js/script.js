function exerc01(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    n3 = Number(document.getElementById("n3").value)
    n4 = Number(document.getElementById("n4").value)

    media = (n1 + n2 + n3 + n4) / 4

    let resultado
    if(media >= 7){
        resultado = "Aprovado"
    }
    else{
        resultado = "Reprovado"
    }

    document.getElementById("media").innerHTML = `A média do aluno é ${media} e foi ${resultado}`
}

function exerc02(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)    

    media = (n1 + n2) / 2

    let msg
    if(media < 3){
        msg = "o aluno está Reprovado"
    }
    else if(media >= 3 && media < 7){
        msg = "o aluno terá que fazer um Exame"
    }
    else{
        msg = "o aluno está Aprovado"
    }

    document.getElementById("msg").innerHTML = `A média do aluno é ${media} e ${msg}`
}

function exerc03(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    let menor
    if(n1 > n2){
        menor = n2
    }
    else if(n2 > n1){
        menor = n1
    }
    else{
        menor = n1
    }
    document.getElementById("menor").innerHTML = `Menor = ${menor}`
}

function exerc04(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    n3 = Number(document.getElementById("n3").value)

    let maior
    if(n1 >= n2 && n1 >= n3){
        maior = n1
    }
    else if(n2 >= n1 && n2 >= n3){
        maior = n2
    }   
    else{
        maior = n3
    } 
    document.getElementById("maior").innerHTML = `Maior = ${maior}`
}

function exerc05(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    let opcao = Number(document.getElementById("opcao").value)
    switch(opcao){
        case 1: 
            resultado = (n1 + n2) / 2;
            break;
        case 2: if(n1 >= n2){
                    resultado =  n1 - n2
                }
                else{
                    resultado =  n2 - n1
                }            
            break;
        case 3:
            resultado = n1 * n2
            break;
        case 4: 
            resultado = (n2 != 0)? n1 / n2 : "Divisão por zero"  // '?' = if, ':' = else
            break;
        default:
            resultado = "Opção inválida"
    }
    document.getElementById("resultado").innerHTML = `Resultado = ${resultado}`
}

function exerc06(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)

    let opcao = Number(document.getElementById("opcao").value)
    let result1, result2, msg, msg2
    if(opcao == 1){
        result1 = Math.pow(n1, n2)
        msg = `Resultado = ${result1}`
        msg2 = " "
    }
    else if(opcao == 2){
        result1 = Math.sqrt(n1)
        result2 = Math.sqrt(n2)
        msg = `Raiz quadrada de ${n1} = ${result1}` 
        msg2 = `Raiz quadrada de ${n2} = ${result2}`
    }
    else if(opcao === 3){
        result1 = Math.cbrt(n1)
        result2 = Math.cbrt(n2)
        msg = `Raiz cúbica de ${n1} = ${result1}`
        msg2 = `Raiz cúbica de ${n2} = ${result2}`
    }
    else{
        msg = "Opção inválida"
        msg2 = " "
    }
    document.getElementById("msg").innerHTML = `${msg}`
    document.getElementById("msg2").innerHTML = `${msg2}`
}

function exerc07(){
    sal = Number(document.getElementById("sal").value)    

    let msg, novo_sal
    if(sal < 500){
        novo_sal = sal * 1.30
        msg = `Novo salário = ${novo_sal}`
    }    
    else{
        msg = `Não tem direito ao aumento`
    }
    document.getElementById("msg").innerHTML = `${msg}`
}

function exerc08(){
    sal = Number(document.getElementById("sal").value)    

    let novo_sal
    if(sal <= 300){
        novo_sal = sal * 1.35        
    }    
    else{
        novo_sal = sal * 1.15
    }
    document.getElementById("novo_sal").innerHTML = `Novo salário = R$${novo_sal}`
}

function exerc09(){
    sal = Number(document.getElementById("sal").value)    

    let credito
    if(sal <= 200){
        credito = sal * 1.10       
    }    
    else if(sal > 200 && sal <= 300){
        credito = sal * 1.20 
    }
    else if(sal > 300 && sal <= 400){
        credito = sal * 1.25
    }
    else{
        credito = sal * 1.30
    }
    document.getElementById("sal_medio").innerHTML = `Salário médio = R$${sal}`
    document.getElementById("credito").innerHTML = `Credito = R$${credito}`
}

function exerc10(){
    carro = Number(document.getElementById("carro").value)    

    let preco
    if(carro <= 12000){
        preco = carro * 1.05       
    }    
    else if(carro > 12000 && carro <= 25000){
        preco = carro * 1.25
    }
    else{
        preco = carro * 1.35
    }    
    document.getElementById("preco").innerHTML = `Preço ao consumidor = R$${preco}`
}

function crescente(){
    n1 = Number(document.getElementById("n1").value)
    n2 = Number(document.getElementById("n2").value)
    n3 = Number(document.getElementById("n3").value)

    let maior, menor, meio
    if(n1 >= n2 && n1 >= n3){
        maior = n1
        if(n2 >= n3){
            meio = n2
            menor = n3
        }
        else{
            meio = n3
            menor = n2
        }
    }
    else if(n2 >= n1 && n2 >= n3){
        maior = n2
        if(n1 >= n3){
            meio = n1
            menor = n3
        }
        else{
            meio = n3
            menor = n1
        }
    }
    else{
        maior = n3
        if(n1 >= n2){
            meio = n1
            menor = n2
        }
        else{
            meio = n2
            menor = n1
        }
    }    

    document.getElementById("crescente").innerHTML = `Ordem crescente = ${menor}, ${meio}, ${maior}`
}