# 📘 Módulo 2 — Programação Orientada a Objetos (TypeScript)

## 📌 Conceitos Introdutórios

### 🔹 Classes

* Classes são utilizadas para criar objetos
* São definidas com a palavra-chave `class`

```ts
class MinhaClasse {}
```

---

### 🔹 Modificadores de Acesso

* `public` → acesso livre (padrão)
* `private` → acesso apenas dentro da classe
* `protected` → acesso dentro da classe e classes filhas

```ts
class Exemplo {
  public a: number;
  private b: number;
  protected c: number;
}
```

---

### 🔹 Atributos Privados com `#`

* O caractere `#` define atributos/métodos privados (padrão ECMAScript)

```ts
class Conta {
  #saldo: number = 0;
}
```

---

### 🔹 Objetos

* Objetos são instâncias de classes
* Classes existem principalmente para criar objetos

---

## 📌 Estrutura de Classe

```ts
class Quadrado {
  base: number;
  altura: number;
  cor?: string;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }
}
```

---

## 📌 Pilares da POO

### 🔹 Encapsulamento

* Esconder detalhes internos de implementação
* Permitir acesso controlado por métodos

---

### 🔹 Herança

* Permite que uma classe herde de outra
* Utiliza a palavra-chave `extends`

```ts
class Animal {
  nome: string;
}

class Cachorro extends Animal {}
```

---

### 🔹 Métodos Estáticos

* Definidos com `static`
* São chamados na classe, não na instância

```ts
class Utils {
  static calcularIdade(idade: number) {
    return idade;
  }
}

// uso
Utils.calcularIdade(20);
```

---

## 📌 Exemplo com Encapsulamento

```ts
class Quadrado {
  private cor: string;
  private area: number;
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.cor = "blue";
    this.base = base;
    this.altura = altura;
    this.obterArea();
  }

  getCor(): string {
    return this.cor;
  }

  setCor(novaCor: string): void {
    this.cor = novaCor;
  }

  getArea(): number {
    return this.area;
  }

  private obterArea(): void {
    this.area = this.base * this.altura;
  }
}
```

---

## 📌 Exemplo de Classe com Método

```ts
class Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  nomeCompleto(): string {
    return this.nome + " " + this.sobrenome;
  }
}
```

---

## 📌 Atributo Estático

```ts
class Pessoa {
  static totalCadastrado: number = 0;
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
    ++Pessoa.totalCadastrado;
  }
}

const p1 = new Pessoa("João");
console.log(Pessoa.totalCadastrado);
```

---

## ✅ Resumo

* `class` cria classes
* `public`, `private`, `protected` controlam acesso
* `#` define atributos privados (ECMAScript)
* `static` cria métodos/atributos da classe
* `extends` permite herança
* Encapsulamento protege dados
* Objetos são instâncias de classes
