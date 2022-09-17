// 1) Exercício de nota escolar
// a partir de um array obter a média 
// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

const array = [90,90,100]

console.log(mediaEscolar(array))

function mediaEscolar(notas) {
    let soma = 0   // que vai receber os valores do array
    for(nota of notas) {
        soma+= nota   //distribuir todos os valores
    }
     const media = soma / (notas.length)                       //aqui nos temos a media
if (media <= 59)
return 'F'
if (media>=60 && media <= 69)
return 'D'
if (media>=70 && media <= 79)
return 'C'
if (media>=80 && media <= 89)
return 'B'
else{
    return 'A'
}
}
