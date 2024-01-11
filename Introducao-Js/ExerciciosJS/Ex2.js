const triangulo = (l1, l2, l3) => {
    if((l1 > 0) && (l2 > 0) && (l3 > 0)){
        if((l1 == l2) && (l2== l3)){
            let equilatero = "Triângulo equilátero"
            return equilatero
        }else if((l1 == l2) || (l1 == l3) || (l2 == l3)){
            let isoceles = "Triângulo isósceles"
            return isoceles
        }else{
            let escaleno = "Triângulo escaleno"
            return escaleno
        }
    }else{
        console.log("Valores enviados invalidos")
    }
}

console.log(triangulo(1, 2, 3))