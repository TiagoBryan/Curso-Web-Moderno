const progArit = (n, a1, r) =>{
    let i = 0
    let soma = 0
    
      while (i < n){
        console.log(a1);
        soma += a1;
        a1 += r;
        
        i++;
      }
    console.log(soma)
}
const progGeo = (n, a1, r) =>{
    let i = 0
    let soma = 0
    
      while (i < n){
        console.log(a1);
        soma += a1;
        a1 *= r;
        i++;
      }
    console.log(soma)
}

progArit(10, 2, 2)
progGeo(5, 9, 3)