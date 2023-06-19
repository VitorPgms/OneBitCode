const arr = ['frodo', 'sam', 'Cezar', 'Pippin']
console.log(arr)

//Adicionar Elementos no final
//Push
let tamanho = arr.push('Boromir')
console.log(arr) 
console.log(tamanho)

//Adicionar Elementos no começo do Array
//unshift
tamanho = arr.unshift('Boromir')
console.log(arr)
console.log(tamanho)

//Remover Elementos
//pop
const ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//Pesquisar por um Elemento
// includes
const inclui = arr.includes('Cezar')
console.log(inclui)

//Cortar e Concatenar
//slice
const hobbits =  arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)