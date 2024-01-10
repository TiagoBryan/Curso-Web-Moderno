const vetorLoko = (vetor, multi) =>{
    let vetMul = [] 
    for (let i in vetor) {
        vetMul.push(vetor[i] * multi)
    }
    return vetMul
}
let vetor = [2, 3, 4, 5, 6, 7]
console.log(vetorLoko(vetor, 3))

const vetorLokoDois = (vetor, multi) =>{
    let vetMul = [] 
    for (let i in vetor) {
        if(vetor[i]> 5){
        vetMul.push(vetor[i] * multi)}else{
            vetMul.push(vetor[i])
        }
    }
    return vetMul
}

console.log(vetorLokoDois(vetor, 3))