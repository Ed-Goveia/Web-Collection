// '&&' - O AND lógico (&&) avalia operandos da esquerda para a direita, retornando imediatamente com o valor do primeiro operando falsy(falso/false) que encontrar; se todos os valores forem truthy(verdadeiro/true), o valor do último operando é retornado.

console.log(5 > 4 && 3 < 4) // true && true = true
console.log(5 > 6 && 4 > 3) // false && true = false
console.log(7 > 9 && 2 > 8) // false && false = false

