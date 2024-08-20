function calcularImc(){
    //recupera os dados do usuario
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)

    //calcular imc
    let imc = peso / Math.pow(altura, 2) //potencia

    //mostra o imc ao usuario no paragrafo com id=resposta
    document.getElementById("imc").innerHTML = `Seu IMC é ${imc}`
}