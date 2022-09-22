// Contando de 0 até um número positivo qualquer
//Escolha o limite final para a contagem a partir do 0 (digite apenas números postivos)

function contagem() {
    let saida = document.getElementById('saida')
    let num = Number(document.getElementById('fnum').value)
    saida.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    let cont = 0
    while (cont <= num) {
        saida.innerHTML += ` ${cont} &#x1F449;`
        cont ++
    }
    saida.innerHTML += ` &#x1F3C1;`
}