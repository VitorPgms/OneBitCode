const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
  ]

  // Map
/*
  const nomes = []
  for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome)
  }

  console.log(nomes)
  

  const nomes = personagens.map(function (personagens){
    return personagens.nome
  })

  console.log(nomes)

  const raca = personagens.map(function (personagens){
    return personagens.raca
  })

  console.log(raca)

  //Filter

  const orcs = []

  for(let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === 'Orc') {
        orcs.push(personagens[i])
    }
  }
  */

  const orcs = personagens.filter(function(personagens){
    return personagens.raca = 'Orc'
  })

    //console.log(orcs)


//Reduce

const nivelTotal = personagens.reduce(function (acumulador, personagem) {
    return acumulador + personagem.nivel
  }, 0)
  
  const racas = personagens.reduce(function (acumulador, personagem) {
    if (acumulador[personagem.raca]) {
      acumulador[personagem.raca].push(personagem)
    } else {
      acumulador[personagem.raca] = [personagem]
    }
    return acumulador
  }, {})

  console.log(racas)