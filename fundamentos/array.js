const valores = [1.2, 25, 10.1, 5.02]
console.log(valores)
console.log(valores[0], valores[3])

valores[4] = 10
console.log(valores)

valores.push({id: 3}, false, null, 'texto')
console.log(valores)

console.log(valores.pop()) // Isola o ultimo item do array

delete valores[5]
console.log(valores)

console.log(`Olá, seu número é ${valores[4]}`)