function load() {
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let day = new Date();
    let hour = day.getHours()
    msg.innerHTML = `Agora são ${hour} horas.`
    if (hour >=0 && hour < 12) {
        // BOM DIA
        img.src = 'imagens_hora/manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hour >=12 && hour < 18) {
        // BOA TARDE
        img.src = 'imagens_hora/tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE
        img.src = 'imagens_hora/noite.png'
        document.body.style.background = '#515154'
    }
}
