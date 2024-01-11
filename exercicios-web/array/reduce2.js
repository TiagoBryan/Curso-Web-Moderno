const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.bolsista))
const resultado = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    
    if(!acumulador || !atual){
        return false
    }else{
        return true
    }
    
})
const resultado2 = resultado

console.log(resultado)

console.log(alunos.map(a => a.bolsista))
const resultado3 = alunos.map(a => a.bolsista).reduce(function(acumulador, atual){
    if(acumulador || atual){
        return true
    }else{
        return false
    }
    
})
const resultado4 = resultado3

console.log(resultado3)