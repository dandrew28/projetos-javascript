// 1) criar uma função somar que retorna a soma de todos os múltiplos de 3 e 5. só soma os múltiplos de 3 e 5

// primeiramente temos que saber quais são os multiplos de cinco e tres e trabalharemos dentro de um limite
// armazenar os múltiplos de 3
// armazenar os múltiplos de 5
//somar os resultados
somar = (10);


function somar (limite) {
let multiploDeTres = 0;          // vamos declarar essas variáveis e atribuir um valor zero para as duas
let multiploDeCinco = 0;
for (i = 0; i<= limite; i++) {
    if (i % 3 === 0)
    multiploDeTres += i;
    if (i % 5 === 0)
    multiploDeCinco += i;
}
console.log(multiploDeTres + multiploDeCinco);

}

// parei em 2:03:16