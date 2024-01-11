const PlanoTrab = (plano, salario = 0) =>{
    switch(plano){
        case "A":
            return salario = salario+((salario*10)/100)
            break;
        case "B":
            return salario = salario+((salario*15)/100)
            break;
        case "C":
            return salario = salario+((salario*20)/100)
            break;
        default:
            return "Plano Invalido"
}}
console.log(PlanoTrab("D", 10))