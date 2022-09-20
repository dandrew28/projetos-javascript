// criar um objeto

//let msg = window.document.getElementById('msg')
//let manha = window.document.getElementById('manha')
//colocar esses dois objetos dentro de uma function

function ativar (){
let msg = window.document.getElementById('msg')
let imagem = window.document.getElementById('imagem')
let data = new Date()
//let hora = data.getHours()
let hora = 11  // se eu quiser escolher uma hora
msg.innerHTML = `Agora são ${hora} horas` // etapa ****

if (hora >= 0 && hora < 12) {
    // Bom dia! carregar a imagem aqui dentro
    imagem.src= 'fotomanha.jpg'
    // se quiser colocar um fundo
   document.body.style.background = 'blue'
}
else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    imagem.src= 'fototarde.jpg'
    document.body.style.background = 'yellow'
} else {
    // Boa noite!
    imagem.src= 'fotonoite.jpg'
    document.body.style.background = 'green'
}

}