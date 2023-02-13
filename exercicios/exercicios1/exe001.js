// Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes. Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)

function area(a, b, c){
    function calculo() {
        if(a === b && b === c) {
            console.log(`${a}, ${b}, ${c}: É um triângulo Equilátero`)
        } else if(a !== b && b === c || a === b && b !== c) {
            console.log(`${a}, ${b}, ${c}: É um triângulo Isósceles`)
        } else if(a !== b && b !== c) {
            console.log(`${a}, ${b}, ${c}: É um triângulo Escaleno`)
        } else {
            console.log('Insira um valor válido')
        }
    }

    return calculo()
}

area(1, 1, 1)
area(2, 1, 1)
area(1, 1, 2)
area(1, 2, 3)