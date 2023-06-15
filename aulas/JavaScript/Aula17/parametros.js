 /*function dobro(x) {
    alert('O dobro de' + x + 'é' + (x*2))
 }

 //dobro(5)
 //dobro(7)

 function dizerOla(nome) {
    alert('Ola'+ nome + '!')
 }

 dizerOla('Isaac')
 dizerOla()


 function soma(a, b){
    alert(`A soma é ${a+b}`)
 }

 //soma(1,1) */

 function criarUsuario(nome, email, senha, tipo = 'admin'){
    const usuario = {
        nome,
        email,
        senha,
        tipo
    }
    console.log(usuario)
 }

 criarUsuario('Vitor', 'Vitor_paulagomes@hotmil.com', '12345566655') //A ordem tem que ser a mesma que foi definida

 // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
  nome: "",
  telefone: "",
  email: "",
  senha: "",
  aniversario: "",
  endereco: ""
}
parametrosDoJeitoCerto(dadosDoUsuario)
