const imoveis = []
let opcao = ''

do {
    opcao = prompt(
        'Bem-Vindo ao Cadastrode imoveis. \nTotal de Imoveis' + imoveis.length +
        '\n\nEscolha uma opção \n1. Novo Imovel\n2. Puxar Imovel\n3. Sair'
    )


    switch (opcao) {
        case '1':
            const imovel = {}

            imovel.proprietario = prompt('Informe o nome do proprietario')
            imovel.quartos = parseFloat(prompt('Informe a quantidade de quartos'))
            imovel.banheiro = parseFloat(prompt('Informe a quantidade de banheiro'))
            imovel.garagem = prompt('O imovel contem garagem (Sim/Nao)')

            const confirma = confirm(
                'Salvar este imóvel\n' +
                '\nProprietario' + imovel.proprietario +
                '\nQuantidade de Quartos' + imovel.quartos +
                '\nQuantidade de Banheiro' + imovel.banheiro +
                '\nGaragem' + imovel.garagem
            )

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case '2':
            for( let i = 0; i < imoveis.length; i++) {
                alert(
                    'Imovel' + (i + 1) +
                    '\nProprietario: ' + imoveis[i].proprietario +
                    '\nQuartos: ' + imoveis[i].quartos +
                    '\nBanheiros: ' + imoveis[i].banheiro +
                    '\nGaragem: ' + imoveis[i].garagem
                )
            }
            break
        case '3':
            alert('Encerrando...')
            break
        default:
            alert('Opção Invalida')
            break
    }

} while (opcao !== 3)