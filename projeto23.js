// após acabar com a parte do HTML temos que fazer com que todos os botões e inputs funcionem:


function verificar(){
pessoa = document.getElementById ('nomePessoa').value;
convidados = ['Amanda', 'Luiz', 'Eduardo', 'Pedro', 'Maria', 'Helena', 'Barboza']

if (convidados.includes(pessoa)) {
    document.getElementById ('pesquisando').innerText = "Pode entrar"
} else {
    document.getElementById ('pesquisando').innerText = "Não pode entrar"
}

}