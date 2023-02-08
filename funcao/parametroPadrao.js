// Gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(2), soma1(3), soma1(1, 2, 3))

// Diferentes estrategias de gerar um valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    let resultado = isNaN(a) || isNaN(b) || isNaN(c) ? 'Insira um valor' : a + b + c
    return resultado
}

console.log(soma2(), soma2(2), soma2(3), soma2('Teste', 2, 3));

// Valor padrao ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(2), soma3(3), soma3(1, 2, 3));
