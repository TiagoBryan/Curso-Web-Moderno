const pontuacao = stringNumeros => {
    // Dividir a string em um array usando o espaço como delimitador
    let arrayString = stringNumeros.split(" ");

    // Converter cada elemento do array para um número inteiro
    let arrayNumeros = arrayString.map(numero => parseInt(numero, 10));

    let menovalor = Math.min(...arrayNumeros);
    let indiceMenorValor = arrayNumeros.indexOf(menovalor);
    indiceMenorValor++
    let cont = 0
    let a = 0
    for (let i in arrayNumeros) { 
        if(arrayNumeros[i] > arrayNumeros[a]){
            a = i
            cont++
        }
}

return [cont, indiceMenorValor]
    
}
let stringNumeros = "10 20 20 8 25 3 0 30 1";
console.log(pontuacao(stringNumeros))
