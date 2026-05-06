// find
// não muda memória
// percorre um array a partir de uma condição, e se não encontra retorna undefined, se encontra retorna apenas o primeiro elemento
const numbers_find = [3, 1, 4, 1, 5, 9, 2, 6];
const first = numbers_find.find(num => num % 2 === 0);
console.log(first);

// some
// não muda memória
// percorre um array a partir de uma condição e retorna true se tiver pelo menos uma opção ou false 
const numbers_some = [5, 12, 8, 130, 44];
const hasBigNumber = numbers_some.some(num => num > 100);
console.log(hasBigNumber);

// every
// não muda memória
// percorre um array a partir de uma condição e se todos os elementos foram true ele retorna true, se estiver vazio ele vai retornar true também
const numbers_every = [2, 4, 6, 8];
const all_pair = numbers_every.every(n => n % 2 === 0);
console.log(all_pair);