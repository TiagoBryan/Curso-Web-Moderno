const buscarPalavras = (strin, array) =>{
  return array.filter(e => {if(e.includes(strin)){
        return e
  }})

}
console.log(buscarPalavras("pro", ["programa", "protecao", "alfabeto"]))
