// this em JS varia 
const pessoa = {
    saudacao: 'Olá!',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()

const falar = pessoa.falar
falar() // Conflito entre funcional e OO

const falar2 = pessoa.falar.bind(pessoa) // Sempre apontara o this para pessoa
falar2

