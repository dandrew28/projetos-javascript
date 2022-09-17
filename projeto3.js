// 1) fazer um exercício em que vamos pegar a hora atual e conforme a hora vai ter um resultado diferente.

// declarar uma variável (hora atual)


let horaAtual = 21
// vamos utilizar a condição if .. else

if (horaAtual > 6 && horaAtual < 12) {
    console.log(`são ${horaAtual} horas, bom dia`)
} else if (horaAtual > 12 && horaAtual < 18) {
    console.log(`são ${horaAtual} horas, boa tarde`)
} else {
    console.log(`são ${horaAtual} horas, boa noite`)
}


// 2) Imaginar um cenário onde alguém pode receber 3 permissões diferentes: pode ser comum, gerente ou diretor
// para fazer a comparação precisamos definir qual a variável que vai ativar esse bloco de código. caso não caia nessas três condições o usuário não é reconhecido

let permissão = 'red'

switch (permissão) {
    case 'comum':                           // coloco as condições aqui
   console.log('usuário comum');
   break;                  //caso ache a condição já termina aqui
   case 'gerente':                           
   console.log('usuário gerente');
   break;
   case 'diretor':                           // coloco as condições aqui
   console.log('usuário diretor');
   break;
   default:
    console.log('usuário não reconhecido')
}