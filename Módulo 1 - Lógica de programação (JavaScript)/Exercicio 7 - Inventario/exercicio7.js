const items = [
   { name: 'Sword', qty: 3 },
   { name: 'Potion', qty: 10 },
   { name: 'Shield', qty: 1 },
   { name: 'item1', qty: 0 },
   { name: 'item2', qty: 1 }
];

const price = { Sword: 50, Potion: 15, Shield: 80, item1: 3, item2: 30 }

//parte 1: Use ‘for-of’ para imprimir cada item: "Espada x3 = R$ 150"
console.log("------- Part 01 ---------")
for (const item of items) {
  const total = item.qty * price[item.name] // calcula a quantidade vezes o preço e devolve o total
  console.log(`${item.name} x${item.qty} = R$${total}`)
}

//parte 2: Use ‘for-in’ em `precos` para listar todos os produtos e seus preços
console.log("------- Part 02 ---------")
for (const product in price) {
  console.log(`${product} costs R$${price[product]}`)
}

//parte 3: Calcule o valor total do inventário (for-of + precos[item.nome])
console.log("------- Part 03 ---------")
let totalPrice = 0
for (const item of items) {
  totalPrice += item.qty * price[item.name] // calcula o preço total do item e soma com o anterior
}
console.log(`Total price = ${totalPrice}`)

//parte 4: Use ‘for’ clássico para imprimir os itens em ordem inversa
console.log("------- Part 04 ---------")
for (let i = items.length - 1; i >= 0; i--) { // nomeia os itens de modo invertido
  console.log(items[i].name)
}

//parte 5: Encontre o item mais caro usando ‘for-in’ em `precos`
console.log("------- Part 05 ---------")
let higherPrice = 0
let mostExpensiveProduct = ""

for (const product in price){
  if (price[product] > higherPrice){ // se o produto for maior que o valor dentro da variavel ele atualiza o valor mais alto e vai comparando
    higherPrice = price[product]
    mostExpensiveProduct = product
  }
}
console.log(`The most expensive product is ${mostExpensiveProduct} = R$${higherPrice}`)

//parte 6: use ‘continue’ para pular itens com `qtd === 0`
console.log("------- Part 06 ---------")
for (const item of items) {
  if (item.qty === 0) continue // verifica se o item tem a quantidade igual a zero e ignora caso seja zero
    console.log(`Item with at least 1 quantity ${item.name}`)
}

// parte 7: **Desafio:** crie um novo array só com itens com qtd > 1 usando ‘for-of’ + push
console.log("------- Part 7: Challenge ---------")
const newArray = []
for (const item of items) {
    if (item.qty > 1) {
        newArray.push(item)
    }
}
console.log(newArray)