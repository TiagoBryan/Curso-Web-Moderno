const JuroSimples = (capitaIni, taxaJuros, TempApli) =>  M = capitaIni + (capitaIni * taxaJuros * TempApli)
const JuroComps = (capitaIni, taxaJuros, TempApli) => M = capitaIni * Math.pow((1+ (taxaJuros/12)), (12*TempApli))
console.log(JuroSimples(10, 5, 5))
console.log(JuroComps(10, 5, 5))