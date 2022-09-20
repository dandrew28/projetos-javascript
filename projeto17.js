// Criar um objeto postagem usando um objeto construtor que vai conter as seguintes informações : 
// titulo, mensagem, autor, visualizacoes, comentário(autor, mensagem) e se está ao vivo ou não

/*
let postagem = {
    titulo: 'O Senhor dos Aneis',
    mensagem: 'A sociedade do anel',
    autor: 'J. R. R. Tolkien',
    visualizações: 300000,
    comentario: [       // array de comentários aqui dentro se usa (:)
        {autor: 'J. R. R. Tolkien'},
        {mensagem: 'A sociedade do anel'}
    ],
    estaAoVivo: true
}
console.log(postagem)  */

// Criar um objeto postagem usando um construction function que vai conter as seguintes informações : 
// titulo, mensagem, autor, visualizacoes, comentário(autor, mensagem) e se está ao vivo ou não

function Postagem (titulo,mensagem,autor,visualizacoes,comentario,estaAoVivo) {
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = visualizacoes,
    this.comentario = comentario,
    this.estaAoVivo = estaAoVivo

}
const postagem = new Postagem ('O Senhor dos Aneis', 'A sociedade do anel','J. R. R. Tolkien',300000,[ 'J. R. R. Tolkien','A sociedade do anel'
], true )
console.log(postagem)

