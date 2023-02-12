const carrinho = [
    '{"nome": "Borracha", "preco": 3.75}', 
    '{"nome": "Caderno", "preco": 10.99}',
    '{"nome": "Estojo", "preco": 30.55}',
    '{"nome": "Kit de lapis", "preco": 40.99}'
]

// Transformar em um novo array e mostrar só o preço 

const obj = json => JSON.parse(json)
const preco = produto => produto.preco

console.log(carrinho.map(obj).map(preco))