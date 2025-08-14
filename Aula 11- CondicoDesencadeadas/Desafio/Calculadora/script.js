function mostrarResultado() {

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let operacao = document.getElementById("operacao").value
    let resultado = document.querySelector("#resultado")


    if (operacao === "1") {
        valor = num1 + num2

        resultado.innerHTML = num1 + " + " + num2 + " = " + valor
    } else if (operacao === "2") {
        valor = num1 - num2

        resultado.innerHTML = num1 + " - " + num2 + " = " + valor

    } else if (operacao === "3") {
        valor = num1 * num2

        resultado.innerHTML = num1 + " X " + num2 + " = " + valor

    } else if (operacao === "4") {
        valor = num1 / num2

        resultado.innerHTML = num1 + " / " + num2 + " = " + valor

    }




}