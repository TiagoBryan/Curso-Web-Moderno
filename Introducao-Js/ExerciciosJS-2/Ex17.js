const soma = array => {
    let resul = 0
    for(valor in array){
        resul += array[valor]
    }
    return resul
}
console.log(soma([10, 10, 10, 15]))