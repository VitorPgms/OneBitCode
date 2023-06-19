
function gerar() {
let nome = document.getElementById("nome")
let sobren = document.getElementById("snome")
let campo = document.getElementById("estudo")
let data = new Date()
let ano = data.getFullYear()
let fdata = document.getElementById('data')
let res = document.querySelector("div#res")


    if (fdata.value.length == 0 || fdata.value > ano){
        alert('[Erro] Data invalida')
    } else {
        let idade = ano - parseInt(fdata.value)
        res.innerHTML = `Seu nome é ${nome.value}${sobren.value} você estuda ${campo.value} e tem ${idade}anos`
    }
    
    
}

