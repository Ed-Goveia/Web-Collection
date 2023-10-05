// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

//     itensColetados = []
//     if (itensColetados.includes(itemNecessario1, itemNecessario2, itemNecessario3)) {
//         return "PODEM ENFRENTAR"
//     }
//     else { return "NAO PODEM ENFRENTAR" }

// }

// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {

//     itensColetados = ["machado"]
//     itemNecessario1 = "machado"
    
//     if (itensColetados.includes(itemNecessario1) && itensColetados.includes(itemNecessario2) && itensColetados.includes(itemNecessario3)) {
//         return "PODEM ENFRENTAR"
//     }
//     else { return "NAO PODEM ENFRENTAR" }

// }

// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    
//     let pronto = 0
//     itensColetados = []
//     let itemChef = [itemNecessario1, itemNecessario2, itemNecessario3]

    
//     if (itensColetados.includes(itemChef[0])) { pronto += 1 }
//     if (itensColetados.includes(itemChef[1])) { pronto += 1 }
//     if (itensColetados.includes(itemChef[2])) { pronto += 1 }
    
//     if (pronto === 3) { return "PODE ENFRENTAR" }
//     else { return "NAO PODE ENFRENTAR" }

// }

// function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    
//     itensColetados = ["machado", "capa", "bota"]
//     [itemNecessario1, itemNecessario2, itemNecessario3] = ["machado", "capa", "bota"]
//     if ( itensColetados.includes([itemNecessario1, itemNecessario2, itemNecessario3])) { return "PODEM ENFRENTAR"}
//     else { return "NAO PODEM ENFRENTAR"}

// }

function solucao(itensColetados, itemNecessario1, itemNecessario2, itemNecessario3) {
    
    let pronto = 0
    
    for(let item of itensColetados) {
        if ( item === itemNecessario1 ) { pronto += 1 }
        if ( item === itemNecessario2 ) { pronto += 1 }
        if ( item === itemNecessario3 ) { pronto += 1 }     
    }
    if (pronto === 3) { return "PODE ENFRENTAR" }
    else { return "NAO PODE ENFRENTAR" }
}
console.log(solucao(["machado","espada","bota"],"machado","espada", "bota"))