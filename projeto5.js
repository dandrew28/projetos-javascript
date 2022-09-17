// 1) crie um objeto informe o valor e apresente o resultado no terminal usando o FOR.. IN.


// criação de um  objeto

const veiculo = {
    marca: 'Nissan',
    modelo: 'March',
    ano: 2015,
    cor: 'preto',
}

for(let key in veiculo) {
    console.log(key,veiculo[key])
                   // arranjado por indice
}


// 2) crie um array de cores informe o valor e apresente o resultado no terminal usando o FOR.. IN. e o FOR OF

// primeiro usando o FOR.. IN
/*const cores = ['amarelo', 'azul', 'verde', 'branco'];
for (let arranjo in cores) {            // tenho que fazer a variavel arranjo dentro de FOR
console.log(arranjo,cores[arranjo])
                     // cores por índice
}*/

//Agora usando o FOR... OF:

const cores = ['amarelo', 'azul', 'verde', 'branco'];
for (let tonalidades of cores) {
    console.log(tonalidades)
}