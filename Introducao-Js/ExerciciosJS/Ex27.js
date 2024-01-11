const alturaC = (alt1, tx1, alt2,tx2) =>{
    if(alt1 > alt2){
        if(tx2 > tx1){
            let cont = 0
            while(alt2<=alt1){
                alt2 += tx2
                alt1 += tx1
                cont++
            }
            console.log(`A segunda criança ultrapassará a primeira em ${cont} anos`)
        }else{
            console.log("A segunda criança não ultrapassará a primeira")
        }
    }else if(alt2 > alt1){
        if(tx1 > tx2){
            let cont = 0
            while(alt1<=alt2){
                alt2 += tx2
                alt1 += tx1
                cont++
            }
            console.log(`A Primeira criança ultrapassará a Segunda em ${cont} anos`)
        }else{
            console.log("A Primeira criança não ultrapassará a segunda")
        }
    }else{
        console.log("As crianças possuem o mesmo tamanho")
    }
}
alturaC(100, 20, 100, 15)