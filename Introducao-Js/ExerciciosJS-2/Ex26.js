const remo = frase =>{
    const vogais = ["a", "e", "i", "o", "u"]
    vogais.forEach(vogal => frase = frase.replace(vogal, ''))
    return frase
}
console.log(remo("eusour"))