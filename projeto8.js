// 1) Criar uma função que faz algo similar que os radares fazem nas ruas (como medir a velocidade do veículo e dizer quantos pontos eles vão receber na carteira)

// primeiro definimos a velocidade máxima
// a cada 5km/h acima do limite você ganha 1 ponto na carteira;
// teremos que usar a função Math.floor para arredondar os valores
// caso os pontos sejam maior que 12 a carteira é suspensa.

/*let velocidade = 90;

let total = velocidadeMax(velocidade)
console.log(total)

function velocidadeMax(velocidade) {
if (velocidade <= 70)
return 'velocidade abaixo de 70'
 else {
     const pontos = Math.floor (((velocidade -70) / 5))
     if (pontos > 12)
     return 'carteira suspensa'
     else {
     console.log(pontos, 'pontos')
     }
}
}*/

// outra maneira de fazer

let total = velocidadeMax(90)
function velocidadeMax(velocidade) {
    if (velocidade <= 70)
    console.log ('velocidade abaixo de 70')
     else {
         const pontos = Math.floor (((velocidade -70) / 5))
         if (pontos > 12)
         console.log('carteira suspensa')
         else {
         console.log(pontos, 'pontos')
         }
    }
    }