const sistemNotas = nota => {
    if(nota< 38){
        const msg = `´Reprovado com nota ${nota}`
        return msg
    }else{
        let notac = nota
        while((notac % 5) != 0){
            notac++
        }
        if((notac-nota) < 3){
            const msg = `Aprovado com nota ${notac}`
            return msg
        }else{
            if(nota< 40){
                const msg = `Reprovado com nota ${nota}`
                return msg
            }else{
                const msg = `Aprovado com nota ${nota}`
                return msg
            }
        }
    }
}

console.log(sistemNotas(41))