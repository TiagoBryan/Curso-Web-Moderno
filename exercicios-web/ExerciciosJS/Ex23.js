const mediaArit = (codigo, n1, n2,n3) => {
   let maior
    if((n1 == n2 && n1> n3) || (n1 == n3 && n1> n2) || (n1> n2 && n1> n3) || (n1 == n2 && n1 == n3)){
      maior = n1
      out1 = n3
      out2 = n2
    }else if((n2 == n1 && n2> n3) || (n2 == n3 && n2> n1) || (n2> n1 && n2> n3) || (n2 == n1 && n2 == n3)){
        maior = n2
        out1 = n1
        out2 = n3     
    }else if((n3 == n1 && n3> n2) || (n3 == n2 && n3> n1) || (n3> n1 && n3> n2) || (n3 == n1 && n3 == n2)){
        maior = n3
        out1 = n1
        out2 = n2
    }else{
        maior = n3
        out1 = n1
        out2 = n2
    }
    let media = (maior*4 + out1*3 + out2*3)/10
    let aprv
    if(media >= 5){
        aprv = "Aprovado"
    }else{
        aprv = "Reprovado"
    }
    return `Codigo do Aluno: ${codigo}, ${aprv} com média ${media}, notas: ${n1}, ${n2}, ${n3}`
    
}
console.log(mediaArit(369, 4, 4, 4))