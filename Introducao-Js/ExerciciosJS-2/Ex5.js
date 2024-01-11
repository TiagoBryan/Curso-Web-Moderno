const retornM = (num1, num2) =>{
    if(num1 > num2){
        console.log(`${num1} é maior que ${num2}`)
    }else if(num2> 1){
        console.log(`${num2} é maior que ${num1}`)
    }else{
        console.log(`${num2} São iguais ${num1}`)
    }
}
retornM(2, 5)