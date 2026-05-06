const capital = new Map([
  ["Brasil", "Brasília"],
  ["Argentina", "Buenos Aires"],
  ["Peru", "Lima"],
  ["Uruguai", "Montevideu"],
  ["Colombia", "Bogota"]
])

function searchCapital(country) {
  if (capital.has(country)){
      return capital.get(country) //apenas se estiver listado ele retorna
  }
  return ("Not found") //caso nao tenha retorna que nao foi encontrado
}

function alphabeticalCapital(){
  return [...capital.values()].sort() //cria um array das capitais e arruma em ordem alfabética
}

function allCapital(){
  return [...capital.entries()] //cria um array das capitais e e pega todos os dados
}

console.log(searchCapital("Brasil"))
console.log(alphabeticalCapital())
console.log(allCapital())