const carro = new Object
carro.nome = 'Carro'
carro.preco = 29999
carro['Marca'] = 'Audio'

console.log(carro)

const pessoa = {
    nome: 'Leo',
    idade: 17,
    endereco: {
        rua: 'Rua dos na em',
        numero: 79,
        adicionais: {
            complemento: 'Casa'
        }
    },
    parentes: [{
        nome: 'Isa',
        idade: 16
    }, {
        nome: 'Maria',
        idade: 19
    }]
}

console.log(pessoa)