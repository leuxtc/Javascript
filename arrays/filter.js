const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'Celular', preco: 1900, fragil: true },
    { nome: 'iPad', preco: 10999, fragil: true },
    { nome: 'Copo de vidro', preco: 50.40, fragil: true},
    { nome: 'Copo de plastico', preco: 24.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))