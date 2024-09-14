function calcularSub(){
    
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let sub = n1 - n2 

    document.getElementById("sub").innerHTML = `${n1} - ${n2} = ${sub}`    
}

function calcularMult(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let n3 = Number(document.getElementById("n2").value)

    let mult = n1 * n2 * n3

    document.getElementById("mult").innerHTML = `${n1} x ${n2} x ${n3} = ${mult}`   
}

function calcularDiv(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let div = n1 / n2

    document.getElementById("div").innerHTML = `${n1} / ${n2} = ${div}`
}

function calcularMedia(){
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)

    let media = ((n1*2) + (n2*3)) / 5

    document.getElementById("media").innerHTML = `Média das notas = ${media}`
}

function calcularDesc(){
    let preco = Number(document.getElementById("preco").value)

    let desconto = preco * 0.90

    document.getElementById("desconto").innerHTML = `Preço com desconto = R$ ${desconto}`
}

function calcularSal(){
    let sal = Number(document.getElementById("sal").value)
    let vendas = Number(document.getElementById("vendas").value)

    let comissao = vendas * 0.04
    let sal_final = sal + comissao

    document.getElementById("comissao").innerHTML = `Comissão = R$ ${comissao}`
    document.getElementById("sal_final").innerHTML = `Salário Final = R$ ${sal_final}`
}

function calcularPeso(){
    let peso = Number(document.getElementById("peso").value)

    let eng = peso * 1.15
    let ema = peso * 0.80

    document.getElementById("eng").innerHTML = `Se engordar 15%, novo peso = ${eng.toFixed(2)} Kg`
    document.getElementById("ema").innerHTML = `Se emagrecer 20%, novo peso = ${ema.toFixed(2)} Kg`
}

function calcularGramas(){
    let peso = Number(document.getElementById("peso").value)

    let gramas = peso * 1000

    document.getElementById("gramas").innerHTML = `Peso em gramas = ${gramas}`
}

function calcularArea(){
    let maior = Number(document.getElementById("maior").value)
    let menor = Number(document.getElementById("menor").value)
    let altura = Number(document.getElementById("altura").value)

    let area = ((maior + menor) * altura) / 2

    document.getElementById("area").innerHTML = `Área = ${area}`
}

function calcularAreaQuad(){
    let lado = Number(document.getElementById("lado").value)
    
    let area_quad = lado * lado

    document.getElementById("area_quad").innerHTML = `Área = ${area_quad}`
}

function calcularAreaLos(){
    let diag_maior = Number(document.getElementById("diag_maior").value)
    let diag_menor = Number(document.getElementById("diag_menor").value)
    
    let area_los = (diag_maior * diag_menor) / 2

    document.getElementById("area_los").innerHTML = `Área = ${area_los}`
}

function tabuada(){
    let num = Number(document.getElementById("num").value)    
    let resultado = ''
    let i = 0
    while(i <=10) {
        let mult = num * i
        resultado = resultado + `${num} x ${i} = ${mult}<br>`  
        i++      
    }
    document.getElementById("tabuada").innerHTML = `${resultado}`
}