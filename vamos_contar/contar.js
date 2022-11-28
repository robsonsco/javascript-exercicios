function contar() {
    let inicio = Number(document.getElementById('inicio').value)
    let fim = Number(document.getElementById('fim').value)
    let passo = Number(document.getElementById('passo').value)
    let resultado = document.getElementById('res')

    if (inicio == '' || fim == '' || passo == '') {
        
        resultado.innerHTML = `Impossível contar!`
        window.alert('Por favor, preencha todos os campos abaixo.')
    
    } else {  
        resultado.innerHTML = 'Contando: <br>'
        if (passo <= 0) {
            window.alert('Passo inválido, por favor, digite um número maior que 0')
        }

        if (inicio < fim) {   
            // Contagem crescente
            for (let contador = inicio ; contador <= fim ; contador+= passo) {
                resultado.innerHTML += `${contador} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}`

        } else {
            // Contagem decrescente
            for (contador = inicio ; contador >= fim ; contador -= passo){
                resultado.innerHTML += `${contador} \u{1F449}`
            }
            resultado.innerHTML += `\u{1F3C1}` 
        }
    }
}