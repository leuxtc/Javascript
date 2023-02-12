const alunos = [
    { nome: 'Rafael', nota: 7.80 },
    { nome: 'Gabriel', nota: 10 }    
]

// Modo imperativo
let total = 0
for(let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}

console.log(total / alunos.length)

// Modo declarativo
const getNota = aluno => aluno.nota
const soma = (total, valor) => total + valor

let total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)