Array.prototype.map2 = function(callback){
    let valor
    let arrayR = []
    for (let i = 0; i < this.length; i++){
        valor = callback(this[i], i, this)
        arrayR.push(valor)
      
    }
    return arrayR


}

const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]


// Retornar um array com apenas os preços

const resultado = carrinho.map2(item => JSON.parse(item).preco)
console.log(resultado)