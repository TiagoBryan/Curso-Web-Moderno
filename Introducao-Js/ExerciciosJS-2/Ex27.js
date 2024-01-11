function inverter(objeto){
    const objetoInv = {}
    Object.entries(objeto).forEach(parChaveVal =>{
        const chave = 0, valor =1
        objetoInv[parChaveVal[valor]] = parChaveVal[chave]
    })
    return objetoInv
}
console.log(inverter({a: 1, b: 2}))