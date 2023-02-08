const pessoa = {
    nome: 'Leo',
    idade: 17,
    endereco: {
        logradouro: 'Rua dos Em',
        numero: 70
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa 
console.log(n, i)

const {endereco: {logradouro: lg, numero}} = pessoa
console.log(lg, numero)

const {logradouro, numero: num, cep} = pessoa.endereco
console.log(logradouro, numero, cep)