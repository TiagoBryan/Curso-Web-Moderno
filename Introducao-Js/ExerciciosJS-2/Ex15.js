const org = array => array.filter((valor, index) => valor % 2 == 0 && index % 2 == 0)

console.log(org([10,70,22,43]))