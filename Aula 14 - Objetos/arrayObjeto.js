let produtos = [

    {tipo: "notebook", preco: 5000, categoria: "Eletrônico"},

    {tipo: "teclado", preco: 200, categoria: "Periférico"},

    {tipo: "mouse", preco: 200, categoria: "Periférico"},
    
    {tipo: "Computador", preco: 5000, categoria: "Eletrônico"},

    {tipo: "monitor", preco: 800, categoria: "Eletrônico"},
    
    {tipo: "fone", preco: 200, categoria: "Periférico"},
    
    {tipo: "Microfone", preco: 300, categoria: "Periférico"},

    {tipo: "Processador", preco: 3100, categoria: "Eletrônico"},
    
    {tipo: "Placa de vídeo", preco: 2000, categoria: "Eletrônico"},

    {tipo: "Mouse Pad", preco: 50, categoria: "Periférico"}
]

//array produtos
produtos.forEach((produto) => {
    console.log(produto.tipo + " R$ " + produto.preco + ".");
    
})


//filtro 
const produtosEletronicos = produtos.filter(produto => produto.categoria === "Eletrônico")

produtosEletronicos.forEach((produto) => {
    console.log(produto.tipo + " R$ " + produto.preco);
    
})

//como aplicar desconto -- Map

const produtosEletronicosDesc = produtosEletronicos.map(produto => ({

    tipo: produto.tipo,
    preco: produto.preco * 0.95,
    categoria: produto.categoria

}))

console.log(produtos);
