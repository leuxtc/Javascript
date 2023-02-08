const mostrarResultado = (a, b) => {
    const calculos = {
        soma: a + b,
        mult: a * b,
        div: a / b,
        sub: a - b,
    }
    
    return `
Soma: ${calculos.soma}
Multiplicação: ${calculos.mult}
Divisão: ${calculos.div}
Subtração: ${calculos.sub}`
}

console.log(mostrarResultado(5, 5))