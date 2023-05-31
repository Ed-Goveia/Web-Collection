// # var, let, const: servem para definir uma variável, cada método com sua peculiaridade.

// Método 'var': 

var one = "Valor mutável";
console.log("Método 'var':", one);
one = "Viu? Eu mudei";
console.log("Método 'var':", one);

// Método 'const': define variáveis imutáveis, retornando um erro caso haja a tentativa de mudança posterior a sua declaração.

const two = "Valor de constante"; 
console.log("Método 'const': " + two);

// Método 'let': 