// Crie uma função que recebe dois numeros e retorne qual é maior ou se é igual

function maiorOuIgual(n1, n2) {
    if (n1 > n2) {
        return console.log(`${n1} é maior que ${n2}`)
    } else if(n2 > n1) {
        return console.log(`${n2} é maior que ${n1}`)
    } else {
        return console.log(`${n1} e ${n2} são iguais`)
    }
}

maiorOuIgual(0, 0)
maiorOuIgual(1, 0)
maiorOuIgual(1, "2")