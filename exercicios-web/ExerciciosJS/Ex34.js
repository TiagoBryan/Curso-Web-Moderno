const string = (str1, str2) => {
    // Função auxiliar para remover espaços e converter para minúsculas
  const processarString = (str) => str.replace(/\s/g, '').toLowerCase();

  // Processando as strings
  const processadaStr1 = processarString(str1);
  const processadaStr2 = processarString(str2);

  // Convertendo as strings processadas em arrays de caracteres únicos
  const caracteresUnicos1 = Array.from(new Set(processadaStr1));
  const caracteresUnicos2 = Array.from(new Set(processadaStr2));

  // Verificando se todos os caracteres únicos de uma string estão na outra
  const contemTodos1 = caracteresUnicos1.every(char => processadaStr2.includes(char));
  const contemTodos2 = caracteresUnicos2.every(char => processadaStr1.includes(char));

  // Retorna true se todos os caracteres estão contidos em ambas as palavras
  return contemTodos1 && contemTodos2;
}
console.log(string("Hello", "World"));           // Retorna false
console.log(string("Listen", "Silent"));         // Retorna true