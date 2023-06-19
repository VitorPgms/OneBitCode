let opcao = '5'

do {
    opcao = prompt('Escolha uma das opções' +
    '\n1 macarrao frito' +
    '\n2 macarrao a bolonhesa' +
    '\n3 macarrao ao molho ingles' +
    '\n4 macarrao ao molho vermelho' +
    '\n5 Fechar Cardapio'
    )

    switch(opcao) {
        case '1':
            alert('Voce escolheu Macarrao Frito')
            break
        case '2':
            alert('Voce escolheu Macarrao Bolonhesa')
            break
        case '3':
            alert('Voce escolheu Macarrao ao Molho Ingles')
            break
        case '4':
            alert('Voce escolheu Macarrao ao Molho Vermelho')
            break
        case '5':
            alert('Fechar cardapio')
            alert('Encerrando....')
            break
        default:
            alert('Opção Invalida')
        
        
    }

} while (opcao !== '5'){}