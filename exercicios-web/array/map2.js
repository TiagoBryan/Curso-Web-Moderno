const carrinho = [
    '{ "nome": "borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}',
]


// Retornar um array com apenas os preços

const resultado = carrinho.map(item => JSON.parse(item).preco)
console.log(resultado)