const alunos = [
    { nome: 'Rafael', nota: 9.20, bolsista: false },
    { nome: 'Gabriel', nota: 10, bolsista: true },
    { nome: 'Maria', nota: 5.45, bolsista: false },
    { nome: 'Rafaela', nota: 9.75, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?

const saoBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado && bolsista    
})

console.log(`Todos são bolsistas? ${saoBolsista}`)

// const saoBolsista = (resultado, bolsista) => resultado && bolsista

// console.log(`Todos são bolsistas? ${alunos.map(a => a.bolsista).reduce(saoBolsista)}`)

// Desafio 2: Algum aluno é bolsista?

const algumBolsista = alunos.map(a => a.bolsista).reduce(function(resultado, bolsista) {
    return resultado || bolsista
})

console.log(`Tem algum bolsista? ${algumBolsista}`)