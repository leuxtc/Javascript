const pai = {
    nome: 'Pedro',
    corCabelo: 'Cabelo preto'
}

const filha1 = Object.create(pai)
filha1.nome = 'Bia'

console.log(filha1.nome, filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Marcia', enumerable: true, writable: false}
})
filha2.nome = 'Rosa'

console.log(`${filha2.nome} tem ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Herança: ${key}`)
}