const retornar = array => {
    let arrayR = []
    arrayR.push( array[0], array[(array.length)-1])
    return arrayR
}
teste =[1, 2, 3, 5]
console.log(retornar(teste))
console.log(teste[(teste.length)-1])