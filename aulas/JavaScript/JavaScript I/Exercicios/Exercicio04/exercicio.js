let nome = prompt('Qual o seu nome?')
let cidade = ''
let contagem = 0

let continuar = prompt('Voce visitou alguma cidade?')

while(continuar === 'sim') {
    let cidades = prompt('Qual o nome da cidade visitada')

    cidade += '\n' + ' - ' + cidades + '\n'
    contagem ++
    continuar = prompt('Voce visitou alguma outra cidade?')
}

alert(`Seu nome é ${nome} visitou ${contagem} cidade que são ${cidade}`)