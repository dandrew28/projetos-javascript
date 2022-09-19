// 1) Montador de endereço
//criar um objeto endereço e incluir as seguintes informações:
// rua, cidade, cep
// criar uma função exibirEndereco(endereco)

// o primeiro passo é criar um objeto endereço:
/*
let endereco = {
    rua: 'Albano Reis',
    cidade: 'Alcântara',
    cep: 23227890,
}

// depois criamos a função:

function exibirEndereco (endereco) {            // para iterar sobre objetos usamos o FOR IN ou FOR OF
for(let local in endereco) 
console.log (local,endereco[local])

}
// para que funcione, precisamos chamar a função:
exibirEndereco(endereco);
*/

// 2) Encontre a igualdade entre objetos (fazer duas funções e comparar objetos). criar dois objetos endereço e depois comparar se são iguais (em termos de propriedades e endereço de memória)
// PARA ESSE EXERCÍCIO USAREMOS O CONSTRUCTOR FUNCTION


function Endereco(rua,cidade,cep) {
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

// agora fazer os dois objetos:

const endereco1 = new Endereco ('Tapajós', 'Rio de Janeiro',22980221)
const endereco2 = new Endereco ('Tapajós', 'Rio de Janeiro',22980222)

// fazer a função para saber se são iguais em propriedades 
function saoIguais (endereco1,endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
}
console.log (saoIguais(endereco1,endereco2))   // vai dar false, pois o cep não é o mesmo

// agora seber se o endereço de memória

function enderecoDeMemoria (endereco1,endereco2) {

    // compara se a referencia do objeto aponta para o mesmo local na memória
    return endereco1 === endereco2
}
console.log (enderecoDeMemoria (endereco1,endereco2))  // també é false, pois estão em lugares diferentes na memória

// parei em 3:20:30
