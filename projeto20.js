// juntar dois arrays

let primeiro = [1,2,3];
let segundo = [4,5,6];
//primeiro.concat(segundo)
// deixar em uma variável para pegar o console.log

const juntos = primeiro.concat(segundo)

console.log(juntos)

// agora vamos cortar SLICE

//juntos.slice(2,3)

// deixando em uma variável para mostrar no console.log:
const cortado = juntos.slice(1,3)
console.log(cortado)  // extrai os números que quero

// OBS exibir números de um array   (UTILIZAR O COMANDO FOREACH)

numeros = [1,2,3,4,5,6];

numeros.forEach(function (numero) {
    console.log(numero)   // PARA EXIBIR OS NÚMEROS
    
});

// parei em 4:28:12