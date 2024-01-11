/*const retorno = valor => {
    let retorno
    if((typeof(valor) != typeof(true)) && (typeof(valor) != typeof(1))){
        retorno = `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`
    }else{
        if(typeof(valor) === typeof(1)){
            retorno = -1*valor
        }else if(valor){
                retorno = false
            }else{
                retorno = true
            }
        }
        return retorno
    }
*/

const retorno = valor => {
    const tipo = typeof(valor)
    if(tipo == "boolean") return !valor
    else if(tipo == "number") return -valor
    else
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(valor)}`
}


console.log(retorno(true))