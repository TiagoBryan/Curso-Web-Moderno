const AnoBi = ano => ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0)
console.log(AnoBi(2100))
