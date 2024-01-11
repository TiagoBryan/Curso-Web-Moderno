const Bhaskhara = (ax, bx, c) => {
    let delta = Math.pow(bx, 2) - 4 * ax * c
    if(delta < 0){
        const delN = "Delta é negativo"
      
        return delN
    }else{
        let vetor = [(-(bx) + Math.sqrt(delta))/(2*ax), (-(bx) - Math.sqrt(delta))/(2*ax)]
        return vetor
    }
}

console.log(Bhaskhara(1, 2, -15))