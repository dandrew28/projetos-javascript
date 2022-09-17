// 1) Criar uma função para exibir os números primos

exibirNumeroPrimos(30);

function exibirNumeroPrimos(limite) {

    for (let i = 2; i<= limite; i++ ) {
        let ehPrimo = true;   // para verificar se um numero é primo ou não temos que verificar todas as possibilidades até aquele numero, logo:
        for (let divisor = 2; divisor<i;divisor++) {   // ignoramos o 1 e o próprio i
            if (i%divisor ===0) {
                ehPrimo = false
                break
            }
        }
        if (ehPrimo) console.log(i)
    }
    
}