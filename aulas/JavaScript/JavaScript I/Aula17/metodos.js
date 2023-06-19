let pessoa = {
    nome: 'Vitor',
    idade: 21,
    dizerOla() {
        console.log('Ola Mundo! Meu nome é' + this.nome) //O this(Significa esse objeto ...) é para referenciar o nome dentro da function
    }
}

console.log(pessoa)

pessoa.dizerOla()