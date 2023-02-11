// Object de forma literal
const obj = {}
console.log(obj)

// Object em JS
const obj2 = new Object
obj2.nome = 'Leo'
obj2.idade = 17
console.log(obj2)

// Função construtor
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPreco = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Celular', 2.999, 0.14)
const p2 = new Produto('Bicicleta', 29.999, 0.5)

console.log(p1.nome, p1.getPreco())
console.log(p2.nome, p2.getPreco())

// Função factory
function criarFuncionario(nome, salario, faltas) {
    return {
        nome,
        salario,
        faltas,
        getSalario() {
            return (salario / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 6000, 4)
const f2 = criarFuncionario('Maria', 10000, 1)

console.log(f1.getSalario())
console.log(f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// JSON
const fromJSON = JSON.parse('{"info": "Isso é um JSON"}')
console.log(fromJSON.info)
