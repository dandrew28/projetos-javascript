// fazer um programa que conte de zero até um número positivo qualquer
//estrutura:
// h1 contando de 0 até um número positivo qualquer
//p
//section
// form
//label(valor final)label
//input (apenas positivos)
//input não é botão (contar) é submissão
// outra section com um p dentro (preencha os dados acima e aperte o botão)
function contagem () {
    let saida = document.getElementById('saida')
    let dados = Number(document.getElementById ('dados').value)
    saida.innerHTML += `estamos contando de zero até  ${dados}    `
    let contador = 0
    while (contador <= dados) {
        saida.innerHTML+= contador
        contador ++
    }


}





