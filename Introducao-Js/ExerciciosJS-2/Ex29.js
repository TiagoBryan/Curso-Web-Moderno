function seguundoMaior(array) {
    
    const maior = Math.max(...array)
     filtra = array.filter(e => e != maior)
     return Math.max(...filtra)
}
console.log(seguundoMaior([33, 15, 9]))