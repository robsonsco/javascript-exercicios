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
        let img = document.getElementById('img')

        if (sexo[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 12) {
                //Criança
                img.src = 'fotos/criança-m.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'fotos/jovem-m.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'fotos/adulto-m.png'
            } else {
                //Idoso
                img.src = 'fotos/idoso-m.png'
            }
        } else if (sexo[1].checked) {
            genero = 'Feminino'
            if(idade >= 0 && idade < 12) {
                //Criança
                img.src = 'fotos/criança-f.png'
            } else if (idade < 21) {
                //Jovem
                img.src = 'fotos/jovem-f.png'
            } else if (idade < 50) {
                //Adulto
                img.src = 'fotos/adulto-f.png'
            } else {
                //Idoso
                img.src = 'fotos/idoso-f.png'
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos de idade.`
    }
}