const numero = prompt(
    'Ola, eu sou o robor da tabuada\n' +
    'Informe o numero que você deseja calcular'
)

let resultado = ''

for(let fator = 1; fator <= 20; fator++) {
    resultado += '->' + numero + ' X ' + fator + '=' + (numero*fator) + '\n'
}

alert('Resultado da tabuada de' + numero + '\n\n' + resultado)