function filtro(numeros, quantidade){
    let resul = []
    for(numero in numeros){
        
        let ver = String(numeros[numero]).length
        if(ver === quantidade){
            resul.push(numeros[numero])
        }
    }
    return resul
}
console.log(filtro([36, 1, 333, 66, 9], 2))