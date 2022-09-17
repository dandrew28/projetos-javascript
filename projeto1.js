// 1) fazer uma função que altere a cor

// temos a cor azul e queremos alterar para amarelo

let cor1 = 'azul'
let cor2 = "amarelo"

// faremos uma função que altera a cor original

function alteraOriginal(cor) {
cor1 = cor
    
}
console.log(cor1)
// agora vou chamar a função e colocar um novo valor:
alteraOriginal('amarelo')
console.log(cor1) // transformei a cor1 em cor2

// 2) fazer uma função que altere e inclua a tonalidade de cor:

// mudar de verde para azul claro

let corBlog = 'verde';
let novaCorBlog = 'azul'
let tonalidade = 'claro'

function mudarTonalidade (cor3,ton) {
corBlog = cor3 + ton
}
console.log (corBlog)
mudarTonalidade('azul', 'claro')
console.log (corBlog)