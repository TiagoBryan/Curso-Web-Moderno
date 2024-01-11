function atribuirConceitos(notas) {
    // Função auxiliar para determinar o conceito com base na nota
    const obterConceito = (nota) => {
      if (nota >= 0 && nota <= 4.9) {
        return 'D';
      } else if (nota >= 5 && nota <= 6.9) {
        return 'C';
      } else if (nota >= 7 && nota <= 8.9) {
        return 'B';
      } else if (nota >= 9 && nota <= 10) {
        return 'A';
      } else {
        return 'Nota inválida';
      }
    };
  
    // Iterar sobre o vetor de notas e exibir os conceitos
    for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      const conceito = obterConceito(nota);
      console.log(`Nota ${nota.toFixed(1)}: Conceito ${conceito}`);
    }
  }
  
  // Exemplo de uso
  const vetorDeNotas = [8.5, 6.3, 9.8, 4.2, 7.0];
  atribuirConceitos(vetorDeNotas);