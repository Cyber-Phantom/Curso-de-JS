function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
     var hora = 16

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = '1-manha.png'
        document.body.style.background = '#e2cd9f' // código da cor
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde!
        img.src = '2-tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite!
        img.src = '3-noite.png'
        document.body.style.background = '#515154'
    }
}
