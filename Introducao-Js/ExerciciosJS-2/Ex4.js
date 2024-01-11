const mesCalc = mes =>{
    let MesR
    switch(mes){
        case 1: MesR = "Janeiro" 
        break;
        case 2: MesR = "Fevereiro"
        break;
        case 3: MesR = "Março" 
        break;
        case 4: MesR = "Abril"
        break;
        case 5: MesR = "Maio"
        break;
        case 6: MesR = "Junho" 
        break;
        case 7: MesR = "Julho"
        break;
        case 8: MesR = "Agosto" 
        break;
        case 9: MesR = "Setembro"
        break;
        case 10: MesR = "Outubro" 
        break;
        case 11: MesR = "Novembro" 
        break;
        case 12: MesR = "Dezembro"
        break;
        default:
            console.log("Mês Inválido")
            return false
    }
    return MesR
}
console.log(mesCalc(13))