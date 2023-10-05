// function solucao(pesos) {

//     pesos = [44, 50] 
//     if((Math.abs(pesos[0] - pesos[1])) <= 5 ){ return "PODEM LUTAR"}
//     else { return "NAO PODEM LUTAR"}
   
// }

function solucao(pesos) {
    const [pesoA, pesoB] = pesos
    if((Math.abs(pesoA - pesoB)) <= 5 ){ return "PODEM LUTAR" }
    else { return "NAO PODEM LUTAR"}
}
console.log(solucao([45,50]))


