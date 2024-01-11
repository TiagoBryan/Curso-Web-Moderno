const contar = (frase, carac) => [...frase].filter((caract) => caract === carac).length
console.log(contar("olA aaa", "a"))