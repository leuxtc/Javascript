const escola = [{
    nome: 'Turma A1',
    alunos: [{
        nome: 'Marcelo',
        nota: 7.85
    },{
        nome: 'Marcos',
        nota: 8.99
    }]
}, {
    nome: 'Turma A2',
    alunos: [{
        nome: 'Andressa',
        nota: 10
    },{
        nome: 'Bianca',
        nota: 7.50
    }]
}]

const getNota = aluno => aluno.nota
const getTurmaNotas = turma => turma.alunos.map(getNota)

const total = escola.flatMap(getTurmaNotas)
console.log(total)

Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const total2 = escola.flatMap2(getTurmaNotas)
console.log(total2)