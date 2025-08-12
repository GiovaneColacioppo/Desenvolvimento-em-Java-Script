function mostrarResultado(){

    let velocidade = parseInt(document.getElementById("velocidade").value)

    let resultado = document.querySelector("#resultado")

    if (isNaN(velocidade)) {
        resultado.innerHTML = "INFORME UM VALOR VÁLIDO"
        return
    }

    if (velocidade > 80) {

        velocidade = (velocidade - 80) * 7

        resultado.innerHTML = "Você foi multado e terá que pagar R$" + velocidade;
    
    } else {

        resultado.innerHTML = "Você não foi multado.";
    

    }
}
