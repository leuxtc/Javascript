const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'Nascimento', {
    enumerable: true,
    writable: false,
    value: '01/02/2008'
})

pessoa.Nascimento = '01/05/2000'
console.log(pessoa.Nascimento)


const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}

const obj = Object.assign(dest, o1, o2)
console.log(obj)
