# 📊 Exercício 6.1 — Verificação de Senha com Limite de Tentativas

## 📌 Descrição

Implementar um sistema de verificação de senha com limite de tentativas, utilizando laços de repetição e controle de fluxo.

## 🎯 Requisitos

* Utilizar `while` com condição dupla (`tentativas < max && !acesso`)
* Informar ao usuário quantas tentativas restam
* Usar `break` ao acertar a senha
* Exibir:

  * “Liberado!” se o acesso for concedido
  * “Conta bloqueada.” caso contrário
* Reescrever a lógica com `do...while`
* Utilizar operadores `&&`
* Medir o tempo de execução com `Date.now()`