const pilotos = ['Alonso', 'Bottas', 'Massa', 'Raikkonen']
console.log(pilotos)

pilotos.pop()
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Mario')
console.log(pilotos)

pilotos.splice(2, 0, 'Hamilton', 'José')
console.log(pilotos)

pilotos.splice(1, 4)
console.log(pilotos)

const algunsPilotos = pilotos.slice(0)
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(0, 1)
console.log(algunsPilotos2)



