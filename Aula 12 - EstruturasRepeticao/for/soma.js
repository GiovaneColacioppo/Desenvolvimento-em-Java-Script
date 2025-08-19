const input = require("prompt-sync")();

    let soma = 0;

for(let i = 1; i <= 3; i++){

    console.log("Soma apenas números ímpares e apenas múltiplos de 3");
    
    let num = parseInt(input("Digite um número"))

    console.log(num);

    if(num%3 == 0 && num%2 == 1){
        soma = soma + num
        console.log(soma);
        
    }    else {
        console.log("TA ERRADO");
        
    }
 

}
    