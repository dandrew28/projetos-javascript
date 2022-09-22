
// temos que fazer um id para o botão e um id na section

function contar() {
    let saida = document.getElementById('saida'); // se aqui fosse (botao) ao invés de (saida) o resultado seria mostrado dentro do botao.
    saida.innerHTML+= `<h1> Contando de 1 até 20</h1>`
    let contador = 1

    while (contador <= 20) {  // vou utilizar esse operador
        saida.innerHTML += contador
        contador++
    }

}