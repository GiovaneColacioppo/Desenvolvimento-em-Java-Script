function mostrarResultado() {
    
    let num1 = parseInt(document.getElementById ("num1").value)

    let num2 = parseInt(document.querySelector("#num2").value)

    let paragrafoMedia = document.querySelector("#media")

    let paragrafoResultado = document.querySelector("#resultado")

    media = (num1 + num2) / 2
    paragrafoMedia.innerHTML = "A média foi " + media


if (media >= 7){
    paragrafoResultado.innerHTML = "APROVADO"
    paragrafoResultado.style.color = "blue"

} else {
    paragrafoResultado.innerHTML = "REPROVADO"
    paragrafoResultado.style.color = "red"

}

}