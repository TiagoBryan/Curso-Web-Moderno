const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo
console.log(pilotos)

pilotos.push('Verstappen') //adiciona no ultimo
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //adiciona mo primeiro
console.log(pilotos)

// splice pode adicionar e remover elementos
// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa morreu
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)  // retorna um novo Array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)  
console.log(algunsPilotos2)