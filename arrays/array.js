console.log(typeof Array, typeof new Array, typeof [])

let pessoas = ['Ana', 'Carlos', 'Bia']

console.log(pessoas)
console.log(pessoas[0])
console.log(pessoas[1])
console.log(pessoas[2])

pessoas[3] = 'Lucia'
pessoas.push('Carla')
console.log(pessoas)

pessoas[9] = 'Rafael'
console.log(pessoas)

pessoas.sort()
console.log(pessoas)

delete pessoas[0]

pessoas.splice(1, 1, 'Novo nome 1', 'Novo nome 2')
console.log(pessoas)