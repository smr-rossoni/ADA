const input = [
    '{"name":"Ana"}',
    '{RUIM}',
    '{"name":123}'
]

let errors = []; // array para guardar todos os erros
let parseErrors = 0; // contador de erros de JSON
let validationErrors = 0; // contador de erros de validação

// Parte 1: para cada string: tente `JSON.parse` e exiba o resultado ou o tipo do erro
console.log("------------- part 1 ---------------")
input.forEach(str => {
    try {
        const result = JSON.parse(str) // tenta converter string JSON em objeto
        console.log(result) // mostra o objeto se der certo
    } catch (err) {
        console.error(err.name) // mostra o tipo do erro
    }
})

// Parte 2: use `instanceof SyntaxError` para detectar JSON malformado
console.log("------------- part 2 ---------------")
input.forEach(str => {
    try {
        const result = JSON.parse(str)
        console.log(result)
    } catch (err) { // verifica se o erro foi causado por JSON inválido
        if (err instanceof SyntaxError) {
            console.error("Malformed JSON:", err.message)
        } else {
            console.error("Other error:", err.message)
        }
    }
})

// Parte 3: lance `TypeError` se `nome` não for uma string
console.log("------------- part 3 ---------------")
input.forEach(str => {
    try {
        const result = JSON.parse(str) // tenta converter JSON
        if (typeof result.name !== "string") { // verifica se o campo name é string
            throw new TypeError("name must be a string") // lança erro manual
        }
        console.log(result)
    } catch (err) {
        console.error(err.name + ": " + err.message)
    }
})

// Parte 4: use `finally` para exibir sempre: `"Processado: [valor ou ERRO]"`
console.log("------------- part 4 ---------------")
input.forEach(str => {
    let value
    try {
        const result = JSON.parse(str)
        if (typeof result.name !== "string") {
            throw new TypeError("name must be a string")
        }
        value = result;
        console.log(result)
    } catch (err) {
        value = "ERROR"; // define valor caso ocorra erro
        console.error(err.message)
    } finally {
        // finally executa sempre, com erro ou não
        console.log("Processed:", value)
    }
})

// Parte 5: escreva `parseSafe(str)` que retorna `null` em vez de lançar erro
console.log("------------- part 5 ---------------")
function parseSafe(str) {
    try {
        const result = JSON.parse(str)
        if (typeof result.name !== "string") {
            throw new TypeError("name must be a string")
        }
        return result; // retorna objeto válido
    } catch (err) {
        return null; // se der erro retorna null
    }
}
// testando parseSafe
input.forEach(str => {
    console.log(parseSafe(str))
})

// Parte 6: acumule os erros em um array e exiba todos ao final
console.log("------------- part 6 ---------------")
input.forEach(str => {
    try {
        const result = JSON.parse(str)
        if (typeof result.name !== "string") {
            throw new TypeError("name must be a string")
        }
        console.log(result)
    } catch (err) {
        errors.push(err) // adiciona erro no array
    }
})

// mostrar todos os erros acumulados
console.log("Error list:")
errors.forEach(e => {
    console.log(e.name + ": " + e.message)
});

// Parte 7 - Desafio: diferencie erros de parse de erros de validação e exiba contagens separadas
console.log("------- part 7 - Challenge ---------")
input.forEach(str => {
  let data
  try {
    data = JSON.parse(str)
  } catch (err) {
    if (err instanceof SyntaxError) {
      parseErrors
    }
    return
  }
  if (typeof data.name !== "string") {
    validationErrors++
    return
  }
  console.log("Valid user:", data)
})

console.log("Parse errors:", parseErrors)
console.log("Validation errors:", validationErrors)