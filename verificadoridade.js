function verificar() {
    let entrada = document.getElementById('ano')
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')
    let saida = document.getElementById('saida')
    let data = new Date()
    let anoatual = data.getFullYear()

    // verificar se o ano está vazio ou é maior que o ano atual
    // sem o length
    if (entrada.value.length == 0 || entrada.value > anoatual) {
        window.alert('verifique os dados e tente novamente')
    } else {
        let sexos = document.getElementsByName("formulario")
        let idade = anoatual - entrada.value
        saida.innerHTML = `Idade calculada = ${idade} anos` 
        let genero = " "  // começo com uma string vazia
       //para colocar uma imagem
     let img = document.createElement('img')
      img.setAttribute ('id', 'foto') // emvez de criar no html
       // mesma coisa se colocassemos: img id = 'foto'

        if (sexos[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute ('src', 'crianca menino.jpeg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute ('src', 'crianca menino.jpeg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute ('src', 'crianca menino.jpeg')
            } else {
                // idoso
                img.setAttribute ('src', 'crianca menino.jpeg')
            }
        } else if (sexos[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute ('src', 'crianca menina.jpg')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute ('src', 'crianca menina.jpg')
            } else if (idade >= 21 && idade < 50) {
                // adulto
                img.setAttribute ('src', 'crianca menina.jpg')
            } else {
                // idoso
                img.setAttribute ('src', 'crianca menina.jpg')
            }
        }

        
        saida.innerHTML = `Detectamos ${genero} com ${idade} anos`
        // para aparecer a imagem
        saida.appendChild(img)

    }
    
}