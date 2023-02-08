const soma = function(x, y) {
    return x + y
}

const resultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

resultado(3, 4)
resultado(3, 5, soma)
resultado(3, 4, function(x, y) {
    return x - y
})
resultado(3, 4, (x, y) => x * y)