// Factory class
class criarPessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Seu nome é ${this.nome}`)
    }
}

const p1 = new criarPessoa('Maria')
p1.falar()

// Factory arrow
const criarPessoa2 = nome => {
    return {
        falar: () => console.log(`Seu nome é ${nome}`)
    }
}
const p2 = criarPessoa2('João')
p2.falar()
