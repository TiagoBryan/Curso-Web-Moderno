const ParesIm = nums =>{
        let contPar = 0
        let contImp = 0
        for (let i in nums) {
            if(i%2 == 0){
                
                contPar++
            }else{
                contImp++
            }
        }
        return qtd = [contPar, contImp]
}
let vetor = [10, 5, 44, 21, 32, 89, 76]
console.log(ParesIm(vetor))
