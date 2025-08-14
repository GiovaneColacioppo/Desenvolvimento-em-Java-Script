function mostrarResultado() {

    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let num3 = parseInt(document.getElementById("num3").value)
    let resultado = document.querySelector("#resultado")


    if (num1 == num2 && num2 == num3) {

        resultado.innerHTML = "SERÁ FORMADO UM TRIÂNGULO EQUILÁTERO!!!"
        
    } else if (num1 == num2 || num2 == num3 || num1 == num3) {
    
        resultado.innerHTML = "SERÁ FORMADO UM TRIÂNGULO ISÓSCELES!!!"

    } else{
    
        resultado.innerHTML = "SERÁ FORMADO UM TRIÂNGULO ESCALENO!!!"

    }


}
