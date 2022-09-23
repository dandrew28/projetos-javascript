// criar uma função para dizer Olá!

dizerPalavra('Olá!')
function dizerPalavra () {
console.log('Olá!')

}
dizerPalavra()  // chamo a função para ser executada pelo computador



let palavra = falarPalavra ()
function falarPalavra () {
    return "Alô!" // retorna o valor exatamente onde chamei a função
}
console.log(palavra)

// Criar uma função para dizer olá para alguém

function dizerOla (nome) {
    console.log ('Olá' + ' ' + nome)
}
dizerOla('maria')

// agora com o return
let nome1 = 'Maria'
let frase = sayOla(nome1)
function sayOla (nome1) {
    return 'Olá' + ' ' + nome1
}
console.log(frase)