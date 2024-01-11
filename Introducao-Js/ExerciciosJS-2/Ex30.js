const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
const media = array => soma(array) / array.length
function receberMelhorEstudante(estudantes){
    const estudantesComMedias = Object.entries(estudantes).map(estudante => {
        const chave = 0,
        valor = 1
        return{nome: estudante[chave], media: media(estudante[valor])}
        
    })
    const estudanteOrdenado = estudantesComMedias.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media)
        const MelhorEstudante = estudanteOrdenado[0]   
        return MelhorEstudante
}

console.log(receberMelhorEstudante({
    Joao: [8, 7.6, 9.8, 6],
    Mariana: [9, 6.6, 7.8, 8],
    Joao: [7, 7, 8, 9]
}))