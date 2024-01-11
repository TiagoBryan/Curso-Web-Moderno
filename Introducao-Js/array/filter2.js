Array.prototype.filter2 = function(callback){
    let retorno 
    let array = []
    for(let i = 0; i < this.length; i++){
         retorno = callback(this[i], i, this)
        if(retorno){
            array.push(this[i])
        }
    }
    return array
}

const produtos =[
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad de Vidro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 40000.99, fragil: false},
    {nome: 'Copo de Plastico', preco: 2401, fragil: true}
]

console.log(produtos.filter2(function(p) {
    return p.preco > 2400 && p.fragil == true
}))