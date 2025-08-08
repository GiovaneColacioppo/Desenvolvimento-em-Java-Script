function mostrarResultado() {
    
    let num1 = parseInt(document.getElementById ("num1").value)
 
    let resultado = document.querySelector("#resultado")

    let raiz = Math.sqrt (num1)

    resultado.innerHTML = "O número informado foi " + num1 + ", seu dobro é " + (num1 * 2) + ", seu triplo é " + (num1 * 3) + " e sua raiz quadradda é " + raiz
}