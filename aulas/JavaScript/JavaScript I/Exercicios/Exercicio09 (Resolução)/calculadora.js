function calcularAreaTriangulo() {
    const base = prompt('Informe a base do Triangulo')
    const altura = prompt('Informe a Altura do Triangulo')
    return base * altura / 2
}

function calcularAreaRetangulo() {
    const base = prompt('Informe a base do Retangulo')
    const altura = prompt('Informe a altura do retangulo')
    return base * altura
}

function calcularAreaQuadrado() {
    const lado = prompt('Retorne o lado do Quadrado')
    return lado * lado
}

function calcularAreaTrapesio() {
    const baseMaior = parseFloat(prompt('Informe a base maior do trapesio'))
    const baseMenor = parseFloat(prompt('Infome a base menor do trapesio'))
    const altura = prompt('Informe a altura do trapesio')
}

function calcularAreaCirculo() {
    const raio = prompt('Informe o raio do circulo')
    return 3.14 * raio * raio
}

function exibirMenu() {
    return prompt(
        'Calculadora Geometrica\n' +
        '1. Calcular área de triangulo \n' +
        '2. Calcular área de retangulo\n' +
        '3. Calcular área de quadrado\n' +
        '4. Calcular área de trapezio\n' +
        '5. Calcular área de circulo\n' +
        '6. Sair \n'
    )
}

function executar() {
    let opcao = ''

    do {
        opcao = exibirMenu()
        let resultado

        switch (opcao) {
            case '1':
                resultado = calcularAreaTriangulo()
                break
            case '2':
                resultado = calcularAreaRetangulo()
                break
            case '3':
                resultado = calcularAreaQuadrado()
                break
            case '4':
                resultado = calcularAreaTrapesio()
                break
            case '5':
                resultado = calcularAreaCirculo()
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opcao Invalida')
        }
    } while (opcao !== '6')
}