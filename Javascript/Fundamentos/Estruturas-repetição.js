// # 'while' - "repetição infinita"

// A - Caso de uso: Quantos números entre 1 e 1000 são múltiplos de 17?

let resposta = 0;
let numero = 1;

while (numero <= 1000){
    if (numero % 17 === 0) {
        resposta += 1;
    }
    numero += 1;
}

console.log("A - A resposta é:", resposta)

// B - Caso de uso: Todo mês farei um deposito de 500 reais na minha conta que se encontra vazia, e o rendimento anual é igual a 10%, quantos meses levariam até nessa conta ter 100000 reais?

const deposito = 500;
const objetivo = 100000;
const rendimento = 0.1; // 1 = 100, logo 0.1 = 10

let conta = 0;
let meses = 0;

while ( conta <= objetivo ) {
    conta += deposito;
    conta += rendimento * conta / 12;
    meses += 1;
}

console.log("B - A resposta é:", meses, 'meses.');

// 'for' - percorrer por toda coleção 

const palavra = "Abacate"
let numeroVogais = 0

for (const letras of palavra.toLowerCase()){
    if( letras === "a"){ numeroVogais += 1}
    if( letras === "e"){ numeroVogais += 1}
    if( letras === "i"){ numeroVogais += 1}
    if( letras === "o"){ numeroVogais += 1}
    if( letras === "u"){ numeroVogais += 1}
}

console.log("C - O número de vogais é:", numeroVogais)

