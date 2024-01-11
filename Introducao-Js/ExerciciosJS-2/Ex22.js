const sort = num => {
    let x = (Math.random() * 10).toFixed(0)
    if(x == num){
        return `Parabéns, o número sorteado foi ${x}`
    }else{
        return `Que pena, o número sorteado foi ${x}`
    }
}
console.log(sort(3))


