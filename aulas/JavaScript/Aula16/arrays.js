const arrays = [
    '1º Nivel',
    ['2º Nivel', 42, true],
    [
        ['3º Nivel', '1ºitem', 'Ola Mundo!'],
        ['3ºnivel', '2ºitem', 'Ola Mundo!'],
    ],
    []
]


//console.log(arrays)
console.log(arrays[0])
console.log(arrays[1])
console.log(arrays[1][0])
console.log(arrays[2][0][1])


// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
  ]
  console.table(matriz)  //O table cria uma tabela no console

matriz.push(['Nova linha'])
matriz[0].push('Nova Coluna')

console.table(matriz)


// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      const elemento = matriz[i][j]
      console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
    }
  }
