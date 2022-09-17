// 1) Verificar se um número é divisível por 3, 5, os dois ou nenhum:
// utilizar o FIZZ BUZZ
// estrutura básica do fizzbuzz:

let numero = 11;                   // declarei uma variável
let valor = divisivel(numero)     // mesmo esquema do projeto6.js
console.log(valor)

function divisivel(numero) {             // primeira coisa a se fazer
    if (typeof numero !== 'number')
        return 'não é um número'
    if (numero % 3 === 0 && numero % 5 === 0)
        return 'FIZZBUZZ'
        if (numero % 3 !== 0 && numero % 5 !== 0)
        return 'não é divisível por nenhum dos dois'

    if (numero % 3 === 0)
        return 'FIZZ'

    if (numero % 5 === 0)
        return 'BUZZ'

}

