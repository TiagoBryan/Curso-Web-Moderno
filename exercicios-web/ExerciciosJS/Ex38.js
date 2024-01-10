const list = (fim = 0, inicio = 100) =>{
    if(inicio > fim){
        a = inicio
        b = fim
        fim = a
        inicio = b
    }
    for(let i = inicio; i < fim; i++){
        if(i%2 != 0){
            console.log(i)
        }
    }
}
list(50, 100)
