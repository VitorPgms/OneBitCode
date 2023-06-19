let calculo = []
let opcao = ''




do {
    opcao = prompt(
        'Escolha a Forma Geometrica que deseja calcular' +
        '\n\nEscolha uma opção \n1. Triangulo\n2. retãngulo\n3. Quadrado \n4. Trapézio\n5. Circulo\n6. Sair'
    )

    switch (opcao) {
        case '1':
        case '2':
            function areaRetangular (base, altura) {
            return base * altura
        }

        var base = areaRetangular(prompt('Informe a base'))
        var altura = areaRetangular(prompt('Informe a altura'))

        alert(`A area do retangulo é ${areaRetangular}`)
        case '3':
        case '4':
        case '5':
        case '6':
            alert('Saindo...')
            break
        default:
            alert('Opção Invalida')
            break

    }

} while(opcao !== '6')