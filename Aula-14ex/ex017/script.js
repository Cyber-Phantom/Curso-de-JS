function tabuada() {

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    
    if (num.value.length != 0) {
        tab.innerHTML = ''
        let n = Number(num.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}` // marca a linha da tabela (serve para PHP, por exemplo)
            tab.appendChild(item)
            c++
        }
    } else {
        alert('Por favor, digite um número!')
    }
}