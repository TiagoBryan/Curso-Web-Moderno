const cedulas = valor =>{
    let qtdCem = Math.floor(valor/100)
    let qtdCinq = Math.floor((valor-(qtdCem*100))/50)
    let qtdDez = Math.floor(((valor-(qtdCem*100))-qtdCinq*50)/10)
    let qtdCinc = Math.floor((((valor-(qtdCem*100))-qtdCinq*50)-qtdDez*10)/5)
    let qtdum = (valor%5)

    let string1
    let string2
    let string3
    let string4
    let string5
    if(qtdCem>0){
         string1 = `${qtdCem} nota(s) de R$ 100, `
    }else{
         string1 = ""
    } 
    if(qtdCinq>0){
         string2 = `${qtdCinq} nota(s) de R$ 50, `
    }else{ string2 = ""}  
    if(qtdDez>0){
         string3 = `${qtdDez} nota(s) de R$ 10, `
    }else{ string3 = ""}  
    if(qtdCinc>0){
         string4 = `${qtdCinc} nota(s) de R$ 5, `
    }else{ string4 = ""}  
    if(qtdum>0){
         string5 = `${qtdum} nota(s) de R$ 1`
    }else{ string5 = ""} 

    
    return `${string1} ${string2} ${string3} ${string4} ${string5}`
}

console.log(cedulas(266))

