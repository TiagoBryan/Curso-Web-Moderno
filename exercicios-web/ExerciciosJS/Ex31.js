const Perc = vetor =>{
    let contNeg = 0
   
    for (let i in vetor) {
        if((vetor[i] < 0)){
            contNeg++
        }
    }
    return contNeg
}
let vetor = [-10, 15, 5, 44, -21, -32, 89, 76]
console.log(Perc(vetor))