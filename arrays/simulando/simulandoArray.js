const quaseArray = { 0: 'Rafael', 1: 'Matheus', 2: 'Rosa' }
console.log(quaseArray)

Object.defineProperty(quaseArray, 'array', {
    value: function() { return Object.values(this) },
    enumerable: false
})

const meuArray = ['Rafael', 'Matheus', 'Rosa']

console.log(quaseArray.array(), meuArray)