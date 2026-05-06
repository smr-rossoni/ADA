const pedido = {
  itens: [{ nome: "Teclado", preco: 100 }],
  total: 100,
  vip: false,
  cep: "12345678",
  cupom: "DESC10" // cupom que o cliente digitou
};

// optional chaining para pegar vip e cep
// evita erro caso o objeto pedido não exista
const vip = pedido?.vip
const cep = pedido?.cep

// verifica se o carrinho tem itens
// primeiro verifica se itens existe e depois se o tamanho é maior que 0
const carrinhoItens = pedido.itens && pedido.itens.length > 0

// validações do pedido
if (!carrinhoItens) {
  console.log("Carrinho vazio")
} 
// verifica se o total é inválido (0, negativo, null ou undefined)
else if (pedido.total <= 0 || pedido.total == null){
  console.log("Total invalido")
} 
// se passou nas validações então o pedido está ok
else {
  console.log("Pedido OK");
}

// operador ternário para definir o frete
// se o cliente for vip o frete é 0, se não for é 15
let frete = vip ? 0 : 15

// se o cupom for null ou undefined ele assume "Sem cupom"
const cupomFinal = pedido.cupom ?? "Sem cupom"

// uso switch para verificar qual cupom foi usado
switch (cupomFinal){
  case "frete":
    // se for cupom de frete grátis o frete vira 0
    frete = 0
    console.log("Cupom de frete gratis")
    break

  case "DESC10":
    // aplica 10% de desconto no total
    pedido.total *= 0.9
    console.log("Cupom de 10% aplicado")
    break
}

// console logs para testar o resultado final
console.log("VIP:", vip)
console.log("CEP:", cep)
console.log("Total final:", pedido.total)
console.log("Frete:", frete)
console.log("Cupom usado:", cupomFinal)