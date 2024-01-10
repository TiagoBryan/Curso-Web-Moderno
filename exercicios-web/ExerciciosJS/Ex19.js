const cardapio = (codigo, quantidade = 0) =>{
    switch(codigo){
        case 100:
            return 3*quantidade
            break;
        case 200:
            return 4*quantidade
            break;
        case 300:
            return 5.5*quantidade
            break;
        case 400:
            return 7.5*quantidade
            break;
        case 500:
            return 3.5*quantidade
            break;
        case 600:
            return 2.8*quantidade
            break;
        default:
            console.log("Produto inexistente")
            
    }

}
console.log(cardapio(111100, 1))