function mostrarResultado() {
    
    let num1 = parseInt(document.getElementById ("num1").value)
 
    let resultado = document.querySelector("#resultado")

    resultado.innerHTML = "O número informado foi " + num1 + ", seu antecessor é " + (num1 - 1) + " e seu sucessor é " + (num1 + 1)
}