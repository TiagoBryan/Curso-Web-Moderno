const repetir = (repetido, repetidor) =>{
    array = []
    for(let i = 0; i < repetidor; i++){
        array.push(repetido)
    }
    return array
}
function repetir2(item, quantidade){
    return Array(quantidade).fill(item)
}
console.log(repetir2("dsad", 4))