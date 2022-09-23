function contagem () {
    let saida = document.getElementById('saida');
    let valor1 = Number(document.getElementById('n1').value)
    let valor2 = Number(document.getElementById('n2').value)
    let contador;
    saida.innerHTML += `contando de ${valor1} até ${valor2}     `
    if (valor1 < valor2) {
        contador = valor1
        while (contador <= valor2) {
        
        saida.innerHTML += `${contador}, `
        contador++
        }
    } else if (valor2<valor1) {
        contador = valor1
        while(contador >=n2) {
        
        saida.innerHTML += `${contador}, `
        contador--
        }
    } else {
        saida.innerHTML = `Não é possível contar, pois os números são iguais`
    }
    
    }