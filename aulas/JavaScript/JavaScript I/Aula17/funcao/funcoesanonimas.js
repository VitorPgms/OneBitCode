/*// Funcões anonimas sao funcoes sem nome

function somar (a, b) {
    return a+ b
}


let operacao = somar //Com parenteses() voce quer o resultado sem voce quer a funcao
console.log(operacao(4, 5))

operacao = function (a, b) {
    return a - b
}

console.log(operacao(4, 5))
*/

olaMundo()



function olaMundo() {
    console.log('Ola Mundo')
}

let oiMundo = function () {
    console.log('Oi Mundo')
}

//Com as Funcoes anonimas a chamada tem que esta depois da function. Como podemos ver nesse exemplo

oiMundo()