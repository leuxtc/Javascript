const prod1 = {}
prod1.nome = 'Celular Iphone 13'
prod1.preco = 2.295
prod1['O Desconto'] = 10.9 // Evitar 

console.log(prod1)

const prod2 = {
    nome: 'Celular Samsung S20',
    preco: 1.555,
    obj: {
       obj2: 'objeto 2',
       obj: {
            obj2: 'objeto 2 2'
       } 
    }
}

console.log(prod2)