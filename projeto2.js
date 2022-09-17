// 1) Fazer um exercício em que um cliente que se tiver mais de 100 pontos ele é do tipo PREMIUM caso contrário ele é do tipo COMUM

let pontos = 180;

let aptoOuNao = pontos > 100 ? 'premium' : 'comum';

console.log (aptoOuNao);

// 2) Fazer um exercício onde uma pessoa só possa aplicar para uma vaga se for maior de 18 anos E tiver carteira de trabalho.

// trabalharemos com && sendo true ou false

let idade = true // significa que tem mais de dezoito anos
let carteira = false // significa que não tem carteira de trabalho
// reuno as condições para ver se é verdadeiro ou não 
let estaAprovadoOuNao = idade && carteira
console.log(estaAprovadoOuNao) // é false, pois apenas uma das condições foi satisfeita

// caso apenas uma das condições fosse suficiente:
let verificar = idade || carteira
console.log(verificar) // é true, pois satisfaz pelo menos uma das condições


// 3) declarar duas cores e em seguida trocar a ordem delas

let a = 'amarelo';
let b = 'azul';
console.log(a)
console.log(b)
// iremos declarar uma terceira variável e igualar com (a)

let c = a // para guardar o valor de (a)
a =b
b = c
console.log(a)
console.log(b)

