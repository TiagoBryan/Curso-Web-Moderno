const despesa = array =>{
    let resul = 0
    for(valor in array){
        resul += array[valor].preco
    }
    return resul
}

despesa1 = [{nome: "jas", categoria: "Info", preco: 89.9},
{nome: "jadasas", categoria: "vvvv", preco: 10},
{nome: "aaaa", categoria: "adasd", preco: 21}
]
console.log(despesa(despesa1))