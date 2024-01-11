const funcao = (numero, minimo, maximo, inclusivo = false) => {
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}
console.log(funcao(10,50, 100))