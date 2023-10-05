// '&&' - O AND lógico (&&) avalia operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falsy(falso/false) que encontrar; se todos os valores forem truthy(verdadeiro/true), o valor do último operando é retornado. resumo: Retorna verdadeiro caso ambas as expressões sejam verdadeiras

console.log("1 - AND lógico:", 5 > 4 && 3 < 4) // true && true = true
console.log("2 - AND lógico:", 5 > 6 && 4 > 3) // false && true = false
console.log("3 - AND lógico:", 7 > 9 && 2 > 8) // false && false = false

// '!' - Retorna o oposto do valor de expr(expressão). Ou seja, retorna verdadeiro caso expr falso, e vice versa

let expr = false
console.log("4 - NOT lógico:",!expr)

// '||' - OR Retorna verdadeiro caso qualquer expressão seja verdadeira

console.log("5 - OR lógico:", 5 > 4 || 6 > 7) // true || false = true