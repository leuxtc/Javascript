const nums = [1, 2, 3, 4, 5]

console.log(nums)

let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma = e => e + 10
const triplo = e => e * 3
const real = e => `R$${e.toFixed(2).replace('.', ',')}`

resultado = nums.map(soma).map(triplo).map(real)

console.log(resultado)