const media = array => (array.reduce((acumular, atual) => acumular + atual,0 ))/array.length
teste = [1,2,3,4,5]
console.log(media(teste))