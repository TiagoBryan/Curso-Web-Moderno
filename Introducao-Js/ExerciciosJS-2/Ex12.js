const NewOb = (obj, trecho) =>{
    const novoObj = Object.assign({}, obj)
     delete novoObj[trecho]
     return novoObj
}
let ob ={
    a: 1, b: 2
}
const teste = NewOb(ob, "a")
console.log(teste)
console.log(Object.is(NewOb(ob, "a"), teste))