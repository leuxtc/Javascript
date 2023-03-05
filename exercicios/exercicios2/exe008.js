// Desenvolva uma função que recebe dois parâmetros não negativos (maior ou igual a zero) e devolve uma multiplicação

function Multiplicar(a, b) {
    if(a && b >= 0) {
        return console.log(a * b);
    } else {
        return console.log('Insira um valor não negativo');
    }
}

Multiplicar(1, 5)
Multiplicar(20, 5)
Multiplicar(1, -5)
Multiplicar(0, -5)