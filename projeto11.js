// 1) criar uma função somar que retorna a soma de todos os múltiplos de 3 e 5. só soma os múltiplos de 3 e 5

// primeiramente temos que saber quais são os multiplos de cinco e tres e trabalharemos dentro de um limite
// armazenar os múltiplos de 3
// armazenar os múltiplos de 5
//somar os resultados
/*let limite = 102;
let total = somar(limite);
console.log(total)
function somar(limite) {
    let multiploDe3 = 0;
    let multiploDe5 = 0;
    for (i = 0; i <= limite; i++) {
        if (i % 3 === 0);
            multiploDe3 += i;
        if (i % 5 === 0);
            multiploDe5 += i;
    }
    console.log(multiploDe3 + multiploDe5);
}; */

// sem usar uma função
/*let i = 1
let intervalo = 10


while (i <= intervalo) {
    if((i % 3 === 0) || (i % 5 === 0))
        console.log(i)
   i++
   
} */

// função para somar valores de 1 até n
function soma(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) total += i;
    return total;
}
console.log(soma(5));

// fazer uma função que soma valores de 1 até 10
let valor = 10;
function somatorio(valor) {
    let valorTotal = 0;
    for (let i = 1; i <= valor; i++) valorTotal +=i
    return valorTotal

}
console.log(somatorio(10))
