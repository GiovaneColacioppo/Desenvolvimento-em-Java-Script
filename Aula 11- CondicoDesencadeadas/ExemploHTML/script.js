function mostrarResultado() {
    
    let num1 = parseInt(document.getElementById ("num1").value)

    let num2 = parseInt(document.querySelector("#num2").value)

    let notaRecuperacao = document.querySelector("#notaRecuperacao")

    let paragrafoMedia = document.querySelector("#media")

    let paragrafoResultado = document.querySelector("#resultado")

    media = (num1 + num2) / 2
    paragrafoMedia.innerHTML = "A média foi " + media


    if (media >= 7){
        paragrafoResultado.innerHTML = "APROVADO"
        paragrafoResultado.style.color = "blue"
        notaRecuperacao.style.display = "none"


    } else if (media >= 5) {
        
        let valorNotaRecupercao = parseInt(notaRecuperacao.value)

        let mediaFinal = (media + valorNotaRecupercao) / 2

        if (isNaN(valorNotaRecupercao)) {             
        paragrafoResultado.innerHTML = "RECUPERAÇÃO"
        paragrafoResultado.style.color = "red"
        notaRecuperacao.style.display = "block"
        }

        else if (mediaFinal >= 7){

            paragrafoMedia.innerHTML = "A média foi " + mediaFinal
            paragrafoResultado.innerHTML = "APROVADO"
            paragrafoResultado.style.color = "green"
        } else {

         paragrafoMedia.innerHTML = "A média foi " + mediaFinal
            paragrafoResultado.innerHTML = "REPROVADO"
            paragrafoResultado.style.color = "red"
        }
    }
    else {
        paragrafoResultado.innerHTML = "REPROVADO"
        paragrafoResultado.style.color = "red"
        notaRecuperacao.style.display = "none"

    }


        }




