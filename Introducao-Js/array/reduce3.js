Array.prototype.reduce2 = function(callback){
    let param1 = this[0]
    for(let i = 1; i < this.length; i++){ 
         param1 = callback(param1, this[i], i, this)
    }
    return param1
}

const alunos = [
    {nome: 'João', nota: 7.3, bolsista: true},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: true},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce2(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador+ atual
})

console.log(resultado)

console.log(alunos.map(a => a.bolsista))
const resultado2 = alunos.map(a => a.bolsista).reduce2(function(acumulador, atual){
    
    if(!acumulador || !atual){
        return false
    }else{
        return true
    }
    
})


console.log(resultado2)