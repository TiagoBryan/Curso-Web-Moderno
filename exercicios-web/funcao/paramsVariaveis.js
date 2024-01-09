function soma(){
   let soma = 0 
   for (i in arguments){
    soma += arguments[i]
   }
   return soma;
}

console.log(soma(10, 3, 8))
console.log(soma(1.5, 3.6, "teste"))
console.log(soma('a', 'b', 'c'))