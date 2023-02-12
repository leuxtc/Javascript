const alunos = [
    { nome: 'Rafael', nota: 9.55, bolsista: true },
    { nome: 'Maria', nota: 8.75, bolsista: false },
    { nome: 'Gabriel', nota: 10.00, bolsista: true },
    { nome: 'Rafaela', nota: 9.90, bolsista: false }
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}/*, 10*/)

console.log(resultado)