// Função factory é uma função que volta um objeto

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        idade: 15
    }
}

console.log(criarPessoa())

// Factory dinamico
function criarProduto(nome, preco) {
    return {
        nome,
        preco
    }
}

console.log(criarProduto('Iphone', 5250))
console.log(criarProduto('Tablet', 950))
console.log(criarProduto('Samsung', 3500))