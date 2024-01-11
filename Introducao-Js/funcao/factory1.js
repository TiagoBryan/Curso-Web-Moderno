// Facctory simples
function criarPessoa(nome, sobrenome){
    return{
        nome: nome,
        sobrenome: sobrenome
    }
}

console.log(criarPessoa("carlos", "Pereira"))

function criarProduto(nome, preco){
    return{
        nome: nome,
        preco: preco,
        valor_com_desconto: preco-((10*preco)/100)
    }
}
console.log(criarProduto("garrafa", 10))
