const MediaVe = vetor => {
    let soma = 0
    for (let i in vetor) {
        soma += vetor[i]
    }
    return media = soma/(vetor.length)
}
let vetor = [10, 10, 10, 5, 11, 22]

console.log(MediaVe(vetor))
