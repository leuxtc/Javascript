function getPreco(imposto = 0, moeda = 'R$') {
    return `${this.nome} está por ${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Celular',
    preco: 2300,
    desc: 0.1,
    getPreco
}

global.nome = 'Aparelho'
global.preco = 20
global.desc = 0.1
console.log(getPreco())

console.log(produto.getPreco())

const carro = {
    nome: 'Carro Fiat',
    preco: 299999,
    desc: 0
}

// Duas formas de chamar uma função com um objeto
// A diferença entre call e aply é a chamada da função
console.log(getPreco.call(carro, 1))
 
console.log(getPreco.apply(carro, [5, '$'])) // Array

