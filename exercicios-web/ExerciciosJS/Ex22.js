const anuidade = (mes, anuidade) =>{
    for(let i = 1; i < mes; i++){
        anuidade += ((5*anuidade)/100) 
    }
    return anuidade
}
console.log(anuidade(3, 10))