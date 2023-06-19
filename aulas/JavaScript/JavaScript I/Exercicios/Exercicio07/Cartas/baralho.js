const baralho = []
let opcao = ''

do {
    opcao = prompt(
        'Cartas no Baralho:\n' + baralho.length +
        '\n1. Adcionar uma carta \n2. Puxar uma Carta \n3. Sair'
    )

    switch (opcao) {
        case '1':
            let novaCarta = prompt('Qual a carta a ser Adicionada?')
            baralho.push(novaCarta)
            break
        case '2':
            const cartaPuxada = baralho.pop()
            if(!cartaPuxada) {
                alert('Nao há nenhuma carta no baralho')
            } else {
                alert('Voce puxou um(a)' + cartaPuxada)
            }
            break
        case '3':
            alert('Saindo...')
            break
        default:
            alert('Opção Invalida')
            break
    }
}while (opcao !== '3')