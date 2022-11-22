function verificar () {
    let data = new Date()
    let ano = data.getFullYear()
    let anoNascimento = document.getElementById('txtano')
    let resultado = document.getElementById('res')

    if (anoNascimento.value.length == 0 || anoNascimento.value > ano) {
        window.alert('[ERRO] Digite Verifique os dados e tente novamente!')
    } else {
        let sexo = document.getElementsByName('radsex')
        let idade = ano - anoNascimento.value
        let genero = ''
        if (sexo[0].checked) {
            genero = 'Masculino'
        } else if (sexo[1].checked) {
            genero = 'Feminino'
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    }
}