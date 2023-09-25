function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!!')
    } else {
        var fsex = document.getElementsByName('radSex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gen = 'Masculino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/2-Bebe-Homem.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/4-Jovem-Homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', './imagens/1-Homem-Adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', './imagens/3-Idoso-Homem.png')
            }
        } else {
            gen = 'Feminino'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', './imagens/2-Bebe-Mulher.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', './imagens/4-Jovem-Mulher.png')
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', './imagens/1-Mulher-Adulta.png')
            } else {
                // Idosa
                img.setAttribute('src', './imagens/3-Idoso-Mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}