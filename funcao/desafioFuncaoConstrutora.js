function Pessoa(nome) {
    this.nome = nome

    this.criarPessoa = function() {
        console.log(`Seu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Maria')
p1.criarPessoa()

const p2 = new Pessoa('José')
p2.criarPessoa()

console.log(p1.nome)
console.log(p2.nome)