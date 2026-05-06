const nota1 = 60
const nota2 = 20
const nota3 = 80
const notas = [nota1, nota2, nota3]
 
//media simples
const media_simples = (nota1 + nota2 + nota3) / notas.length
console.log("Média simples:", media_simples.toFixed(2))
 
//media ponderada
const peso1 = 0.3
const peso2 = 0.5
const peso3 = 0.2
const media_ponderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / peso1 + peso2 + peso3
console.log("Média Ponderada:", media_ponderada.toFixed(2))

 
//imc
const peso = 64
const altura = 1.64
const imc = peso / (altura **2)
console.log("IMC:", imc.toFixed(2))