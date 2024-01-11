const inteiros = array =>{
    return array.filter(item => typeof item === "number")
    /*let array2 = array.filter(function(valor){
        return typeof(valor) === "number" ? true : false
    })
    return array2*/
}
teste = ["java", "4", 1, 2, "s", 5]
console.log(inteiros(teste))