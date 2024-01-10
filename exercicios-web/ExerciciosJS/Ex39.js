const trocVetor = (vetor1, vetor2) =>{
    for(let i = 0; i < (vetor1.length); i++){
        let a = vetor1[i]
        let b = vetor2[i]
        vetor1[i] = b
        vetor2[i] = a
    }
    console.log(vetor1)
    console.log(vetor2)
}
let vetor1 = [10, 9, 8, 7]
let vetor2 = [2, 4, 6, 8]
trocVetor(vetor1, vetor2)