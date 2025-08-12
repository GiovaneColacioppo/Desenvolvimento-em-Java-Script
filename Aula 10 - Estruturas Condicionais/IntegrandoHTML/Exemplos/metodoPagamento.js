function mostrarResultado() {

let valorGasto = parseFloat(document.getElementById("valorGasto").value)
let metodoPagamento = document.getElementById("metodoPagamento").value
let resultado = document.querySelector("#resultado")


if (metodoPagamento === "1") {
    valorGasto = (valorGasto * 0.9)

    resultado.innerHTML = "O valor da sua compra ficou R$" + valorGasto
    toFixed(2).replace("." , ",")

} else {

    resultado.innerHTML = "O valor da sua compra ficou R$" + valorGasto
    toFixed(2).replace("." , ",")

}
}

