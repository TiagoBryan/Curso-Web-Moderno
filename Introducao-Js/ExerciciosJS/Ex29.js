const Perc = vetor =>{
    let contDen = 0
    let contFor = 0
    for (let i in vetor) {
        if((vetor[i] > 9) && (vetor[i] <21)){
            contDen++
        }else{
            contFor++
        }
    }
    return qtd = [contDen, contFor]
}
let vetor = [10, 15, 5, 44, 21, 32, 89, 76]
console.log(Perc(vetor))