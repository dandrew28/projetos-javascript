// 1) criar uma função para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

/*const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2015,
    motor: 2.0,
}
exibirString (carro);
// para interar sobre objetos usamos o FOR IN ou FOR OF
function exibirString (string) {
for (prop in string) // pegamos a prop na string
    if( typeof prop === 'string')
    console.log(prop,string[prop])

}*/


// para pegar só o string fazemos: if( typeof string[prop] === 'string') 
/*
const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2015,
    motor: 2.0,
}
exibirString (carro);
// para interar sobre objetos usamos o FOR IN ou FOR OF
function exibirString (string) {
for (prop in string) // pegamos a prop na string
    if( typeof string[prop] === 'string')
    console.log(prop,string[prop])
} */


// 2) fazer pegando apenas numeros

const carro = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2015,
    motor: 2.0,
}

apenasNumeros(carro);

function apenasNumeros(valores) {
    for (numeros in valores) 
        if (typeof valores[numeros] === 'number')
        console.log(numeros,valores[numeros])
}