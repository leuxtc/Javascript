Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }

    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.75}', 
    '{"nome": "Caderno", "preco": 10.99}',
    '{"nome": "Estojo", "preco": 30.55}',
    '{"nome": "Kit de lapis", "preco": 40.99}'
]

const obj = json => JSON.parse(json)
const preco = produto => produto.preco

console.log(carrinho.map2(obj).map2(preco))