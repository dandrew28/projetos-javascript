// contador de asterísticos

//criar uma função que exibe a quantidade de (*) que aquela linha possui

exibirAsteristicos(5);

function exibirAsteristicos (linha) {
let asteristico = ''                   // crio uma variavel com o strig vazio

for (let i = 1; i<= linha; i++) {      // posso usar o loop FOR
    asteristico += '*'                // a cada volta incremento um *
    console.log(asteristico)
}

}
