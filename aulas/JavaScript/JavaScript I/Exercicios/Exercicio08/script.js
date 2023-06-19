const imoveis = []
let opcao = ''

do {
    opcao = prompt(
        'Numero de Imoveis\n' + imoveis.length +
        '\n1. Adicionar Imovel. \n2. Puxar imovel \n3. Sair'
    )

    switch (opcao) {
        case '1':
            let novoImovel = prompt('Qual o nome do proprietario?')
            imoveis.push(novoImovel)
            break
        case '2':
            const imovelPuxado = imoveis.pop()
            if(!imoveis) {
                alert('Não ha imoveis no momento')
            } else {
                alert('Temos esse imovel ' + imovelPuxado)
            }
            break
        case '3':
            alert('Saindo....')
            break
        default :
            alert('Opção Invalida')
            break
    }
} while(opcao !== '3')