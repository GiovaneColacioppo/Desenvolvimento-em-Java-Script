let times = ["Santos", "Palmeiras", "Corinthians", "São Paulo"]
//adiciona
console.log(times[0]);
//imprime o numero que pediu
times.push("Flamengo")
times.push("Gremio")
times.push("Botafogo")
times.push("Vasco")
//adiciona novos dentro do vetor
console.log(times.length);
//diz o tamanho do vetor
times.unshift("Fluminense")
console.log(times);
//adiciona no primeiro o fluminense
times.shift()
//tira o primeiro
times.pop()
//tira o último
console.log(times);

console.log(times.indexOf("São Paulo"))
//encontra a posição do elemento citado

let times2 = ["Santos", "São Paulo", "Palmeiras"]

times2.splice(1,1) //tirou só o São Paulo
//remove os elementos, informa dois numeros para onde começa e onde termina

console.log(times2);

times2.splice(1, 0, "São Paulo", "Corinthians") //tirou só o São Paulo

console.log(times2);