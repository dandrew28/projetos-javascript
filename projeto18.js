// Criar um array de objetos de faixa de preços para que ele possa ser usado em um site de compras:
// e depois criar uma função para estanciar esses objetos
// o array terá 3 propriedades: tooltip, mínimo e máximo
// tooltip é quando passamos o mouse e aparece a faixa de preço
// minimo e máximo são os valores limite

// array de objetos:
/*
const produto = [
    {tooltip: 'até 1000',minimo: 0, maximo: 1000},
    {tooltip: 'de 1001 até 2000',minimo: 1001, maximo: 2000},
    {tooltip: 'de 2001 até 5000',minimo: 0, maximo: 1000}
]
console.log (produto)

*/
// ou podemos criar uma factory function:

function faixaDePreco (tooltip,minimo,maximo) {
    return {
        tooltip,
        minimo,
        maximo
    }
}

let faixa = [                        //declaro uma variável que contenha o ARRAY
    faixaDePreco ('até 1000',0 , 1000),
    faixaDePreco ('de 1001 até 2000',1001 , 2000),
    faixaDePreco ('de 2001 até 5000',2001 , 5000),

]
console.log(faixa)