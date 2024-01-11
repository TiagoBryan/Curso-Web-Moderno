const planoSaude = idade =>{
    if(idade < 10){
        return valor = 80 + 100
    }else if(idade >= 10 && idade <= 30){
        return valor = 50 + 100
    }else if(idade > 30 && idade <= 60){
        return valor = 95 + 100
    }else{
        return valor = 130 + 100
    }

}
console.log(planoSaude(9))