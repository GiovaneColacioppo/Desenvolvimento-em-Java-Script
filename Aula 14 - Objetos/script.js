let produto = {

    tipo: "notebook",
    preco: 3500,
    marca: "Positivo",
    processador: "Intel Celeron",
    emEstoque: true

}

console.log(produto);

console.log(produto.marca);

console.log(produto.preco);

console.log(produto["tipo"]);

console.log(produto["processador"]);

produto.memoriaRam = "4 gb"

console.log(produto);

delete produto.emEstoque

console.log(produto);