# 📊 Exercício 9 — Parser de Dados (JSON)

## 📌 Descrição

Tratar erros ao processar dados externos em JSON, utilizando `try/catch`, validações e controle de fluxo.

## 🎯 Requisitos

* Usar `JSON.parse` para converter strings em objetos
* Capturar e exibir erros
* Identificar JSON malformado com `instanceof SyntaxError`
* Lançar `TypeError` quando os dados forem inválidos
* Utilizar `finally` para execução garantida
* Criar função segura (`parseSafe`)
* Acumular erros em um array
* Diferenciar erros de parse e validação