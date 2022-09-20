// utilizando o FIND para encontrar elementos( do tipo referência em um array)

// primeiramente vamos declarar uma variável com objetos em um array


const marcas = [
    {id: 1, nome:'Andressa'},
    {id: 2, nome:'Paulo'}
]
// definiremos uma constante e uma função dentro dela para achar o que quero

const marca = marcas.find (function (marca) {
    return marca.nome ==='Andressa'
})

console.log(marca)

