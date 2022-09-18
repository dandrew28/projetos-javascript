/*let valor =Math.random()
console.log (valor)


let valor2 = Math.max(3,67,198,34)
console.log (valor2)

const array = [1, 3, 2];

console.log(Math.max(...array));

// parei em 3:10:08 */

// 1) criar uma função que some 2 números

soma(5,3);
function soma (numero1,numero2) {
    const resultado = numero1 + numero2
   
    console.log('a soma é',resultado)
}

// 2) função que exibe e soma valores de 1 a 10
// fiz duas coisas: exibi os valores depois somei
exibeSoma(10)

function exibeSoma (limite) {
  
    for (let i = 1; i<= limite; i++) {
              console.log (i)
    }
  
}
function acumula(n) {
    var total = 0;
    for (var i = 1; i <= n; i++) total += i;
    return total;
}
console.log(acumula(10));