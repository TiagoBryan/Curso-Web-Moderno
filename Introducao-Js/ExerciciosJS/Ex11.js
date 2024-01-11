const anoBi = ano => {
    if((ano % 400) == 0){
        console.log("Ano bissexto")
        return true
    }else if((ano % 100) == 0){
        console.log("Não é Ano bissexto")
        return false
    }else if((ano % 4) == 0){
        console.log("Ano bissexto")
        return true
    }else{
        console.log("Não é Ano bissexto")
        return false
    }
  
}

console.log(anoBi(2024))