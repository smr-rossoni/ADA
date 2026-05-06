const phrase = ' Hello World! How are you? '

//parte 1: escreva `limpar(s)` que remove espaços extras (trim)
console.log("------- Part 01 ---------")
function clean(text){
    return text.trim() //trim() metodo que removo os espaços
}
console.log(clean(phrase))

//parte 2: escreva `capitalizar(s)` que coloca a primeira letra de cada palavra em maiúscula
console.log("------- Part 02 ---------")
function capsLock(text){
    return text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ") 
//slip() vai separar as palavras
// chartAt() atribui a primeira letra da palavra
// toUpperCase() coloca a primeira letra em maiuscula
// slice() tira a primeira letra da palavra pra somar com a letra maiuscula
// join() transforma tudo em uma string
}
console.log(capsLock(phrase))

//parte 3: escreva `removerExclamacao(s)` que remove todos os '!'
console.log("------- Part 03 ---------")
function removeExclamation(text) {
    return text.replaceAll("!", "") //replaceAll() substitui as exclamações por espaço
}
console.log(removeExclamation(phrase))

//parte 4: componha as 3 funções: `removerExclamacao(capitalizar(limpar(frase)))`
console.log("------- Part 04 ---------")
console.log(removeExclamation(capsLock(clean(phrase)))) // usa todas as funções

//parte 5: reescreva cada função como arrow function de 1 linha
console.log("------- Part 05 ---------")

const clean2 = text => text.trim()
const capsLock2 = text => text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
const removeExclamation2 = text => text.replaceAll("!", "")

console.log("Clean: " + clean2(phrase))
console.log("CapsLock: " + capsLock2(phrase))
console.log("RemoveEclametion: " + removeExclamation2(phrase))

//parte 6: escreva `contarPalavras(s)` que retorna o número de palavras
console.log("------- Part 06 ---------")
function countWords(text) {
  if (!text) return 0 //se for vazio, nulo ou undefined, retorna 0 imediatamente
  return text.trim().split(" ").length
}
console.log("Number of words = " + countWords(phrase))

//parte 7: crie um array de funções e aplique com `reduce`
console.log("------- Part 07: Challenge ---------")
const pipeline = [clean2, capsLock2, removeExclamation2] // pipeline: lista de funções a aplicar

// aplica cada função do pipeline em sequência sobre phrase
const result = pipeline.reduce((accumulator, currentFunction) => currentFunction(accumulator), phrase);
console.log(result);