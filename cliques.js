let contar = 0;
let resposta = document.querySelector('section#saida')

function contador() {
    contar++
    resposta.innerHTML = `<p>O contador está com ${contar} cliques.</p>`

}

function zera() {
    contar = 0;
    resposta.innerHTML = null;
}