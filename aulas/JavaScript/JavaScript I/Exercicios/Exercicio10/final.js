const vagas = []

function listarVaga() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        //Nome e quantidade de candidato
        textoFinal += indice + '. '
        textoFinal += vaga.nome
        textoFinal += '(' + vaga.candidatos.length + 'Candidatos)'
        return textoFinal
    }, '')

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt('Informe um nome para a vaga')
    const descricao = prompt('Informe uma descrição para a vaga ')
    const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa para a vaga)')

    const confirmacao = confirm(
        'Deseja criar uma nova vaga com essas informações?\n'+
        'Nome: ' + nome +
        '\nDescrição: '+ descricao +
        'DataLimite: ' + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: []}
        vagas.push(novaVaga)
        alert('Vaga, Criada')
    }
}


function exibirVaga() {
    const indice = prompt('Informe um indice da vagaque deseja exibir')
    const vaga = vagas[indice]


    const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
        return textoFinal + '\n.' + candidato
    }, '')
    alert(
        'Vaga nº' + indice +
        '\nNome:' + vaga.nome +
        '\nDescrição: ' + vaga.descricao +
        '\nData Limite: '+ vaga.dataLimite +
        '\nQuantidade de candidatos: ' + vaga.candidatos.length +
        '\nCandidatos inscritos: ' + candidatosEmTexto
    )
}

function inscreverCandidatos() {
    const candidato = prompt('Informe o nome do candidato') 
    const indice = prompt('Informe o indice da vaga para qual o candidato deseja se inscrever')
    const vaga = vaga[indice]
    
    const confirmacao = confirm
    'Deseja inscrever o candidato' + candidato + 'na Vaga' + indice + '?\n' +
    'Nome: ' + vaga.nome + '\nDescrição: ' + vaga.descricao + 'Data Limite: ' + vaga.dataLimite

    if(confirmacao) {
        vaga.candidato.push(candidato)
        alert('Inscrição Realizada')
    }
}

function excluirVaga() {
    const indice = prompt('Informe o indice da vaga que deseja excluir')
    const vaga = vagas[indice]

    const confirm = confirm(
        'Tem certeza que deseja Excluir a vaga' + indice +  '?\n' +
        'Nome: ' + vaga.nome + 
        '\nDescrição: ' + vaga.descricao +
        '\nData Limite: ' + vaga.dataLimite
    )

    if(confirm) {
        vagas.splice(indice, 1)
        alert('Vaga Excluida.')
    }
}

function exibirMenu() {
    const opcao = prompt(
        'Cadastro de vagas de emprego' +
        '\n\nEscolha uma das opções' +
        '\n1. Listar vagas disponiveis' +
        '\n2. Criar uma nova vaga' +
        '\n3. Exibir uma vaga' +
        '\n4. Increver um candidato' +
        '\n5. Excluir uma vaga' +
        '\n6. Sair'
    )

    return opcao
}

function executar() {
    let opcao = ''

    do{
        opcao = exibirMenu()

        switch(opcao){
            case '1':
                listarVaga()
                break
            case '2':
                novaVaga()
                break
            case '3':
                exibirVaga()
                break
            case '4':
                inscreverCandidatos()
                break
            case '5':
                excluirVaga()
                break
            case '6':
                alert('Saindo...')
                break
            default:
                alert('Opção Invalida')
                break

        }
    }while (opcao !== '6')
}

executar()