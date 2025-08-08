function mostrarResultado() {
    
    let num1 = parseInt(document.getElementById ("num1").value)

    let num2 = parseInt(document.querySelector("#num2").value)

    let media = (num1 + num2) / 2
   
 
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "A média foi igual a " + media
}