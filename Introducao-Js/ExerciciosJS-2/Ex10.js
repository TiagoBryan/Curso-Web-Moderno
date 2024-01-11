const mais = (quantidade) =>{
    let string = ""
    for(let i = 0; i < quantidade; i++){
        string += "+"
    }
    return string
}
function mais2( quantidade){
    return Array(quantidade).fill("+").join('')
}
function mais3( quantidade){
    return "+".repeat(quantidade)
}

console.log(mais3(6))