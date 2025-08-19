function mostrarResultado(){
    let num1 = parseInt(document.getElementById("num1").value)
    let resultado = document.getElementById("resultado")


    
    for (let i = 0; i <= 10; i++) {

        resultado.innerHTML += `${num1} X ${i} = ${num1 * i} <br>`
    }



}