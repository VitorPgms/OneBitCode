function tabuada() {
    let numero = document.getElementById('txtn')
    let tab = document.getElementById('restab')

    if(numero.value.lengh == 0) {
        alert('[ERRO]Valor Invalido')
    } else {
        let n = parseFloat(numero.value)
        tab.innerHTML = ''
    }

    for(c=1;c <= 20; c++){
        let item = document.createElement('option')
        item.text = `${n} X ${c} = ${n*c}`
        item.value = `tab ${c}`
        tab.appendChild(item)
    }
    
}