const [a] = [10]
console.log(a)

const [n1, ,n2, n3, ,n4, ,n5 = 0] = [10, 15, 20, 25]
console.log(n1, n2, n3, n4, n5)

const [[nm1],[nm2, nm3]] = [[10, 20], [30, 40]]
console.log(nm1, nm2, nm3)

// Destruturação em função

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({min: 10, max: 50}))

const obj = {min: 50, max: 100}
console.log(rand(obj))

console.log(rand({max: 10}))

console.log(rand({})) // min = 0 max = 1000

// Destruturação com array

function arr([mn = 0, mx = 100]) {
    if (mn > mx) [mn, mx] = [mx, mn]
    const val = Math.random() * (mx - mn) + mn
    return Math.floor(val)
}

console.log(arr([30, 5]))
console.log(arr([60]))
console.log(arr([, 30]))