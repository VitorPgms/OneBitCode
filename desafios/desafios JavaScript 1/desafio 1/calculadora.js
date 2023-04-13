const entrada1 = prompt("Informe o primeiro Numero")
const entrada2 = prompt("Informe o Segundo Numero")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y
const subtração = x - y
const multiplicacao = x * y
const divisao = x / y

alert (
    "Resultados\n" +
    "\nSoma: " + soma +
    "\nSubtracao: " + subtração +
    "\nMultiplicacao: " + multiplicacao +
    "\nDivisão: " + divisao
)