// Valor gasto pelo usuario.
// Metodo de pagamento
//   - Boleto/Pix = 10% desconto
//   - Credito = Valor total  

let valtotal = 1000

let formapag = 1

if (formapag == 1) {
    valtotal = (valtotal * 0.9)

    console.log("O valor de pagamento será de: " + valtotal);
    

} else {

    console.log("O valor de pagamento será de: " + valtotal);

}
