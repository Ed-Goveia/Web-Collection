// array

const lista = [1,2,3,4];
// console.log(lista)

for(elemento of lista){
    // console.log(elemento)
    console.log(typeof(elemento));

}


// Qual a soma deles?

const listaNumeros = [34, 5, 51, 84, 95, 17];

let acumulador = 0;

for (const numero of listaNumeros) {acumulador += numero;}
console.log("A Soma é:", acumulador);

// Qual o menor deles?

let menorNúmero; // valor padrão = undefined

for (const numero of listaNumeros) {
    if ( menorNúmero === undefined ) { menorNúmero = numero; }
    else if ( numero < menorNúmero ) { menorNúmero = numero; }
}
console.log("O menor número é:", menorNúmero);

