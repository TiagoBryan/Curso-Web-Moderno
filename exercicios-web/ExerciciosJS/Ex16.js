const calBasica = (num1 = 0, num2 = 0, ope) => {
    switch(ope){
        case ope = "+":
            return num1 + num2
            break;
        case ope = "-":
            return num1 - num2
            break;
        case ope = "/":
            return num1 / num2
            break;
        case ope = "*":
            return num1 * num2
            break;
        default:
            return "Operação Invalida"
    }
}
console.log(calBasica(null, null, "*"))