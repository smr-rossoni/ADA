# 📊 Exercício 6.2 — Verificação de Senha com do...while

## 📌 Descrição

Implementar um sistema de verificação de senha com limite de tentativas utilizando `do...while`, controle de fluxo e medição de tempo.

## 🎯 Requisitos

* Utilizar `do...while` com condição dupla (`tentativas < max && !acesso`)
* Controlar o número de tentativas
* Usar `break` ao acertar a senha
* Exibir mensagens de erro e limite excedido
* Ao final:

  * “Liberado!” se o acesso for concedido
  * “Conta bloqueada.” caso contrário
* Medir o tempo de execução com `Date.now()`