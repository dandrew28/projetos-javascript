// receber uma quantidade de numeros e dizer se é par ou ímpar

let valor = parImpar(10);


function parImpar (limite) {
   for (let i = 0; i <= limite; i++) {
if ( i % 2 === 0) 
console.log (i,'par')
else {
    console.log (i,'ímpar')    // coloco o i para indicar qual é o número
}

   }



}
