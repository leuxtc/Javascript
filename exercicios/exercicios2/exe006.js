// Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for numérico, o retorno será o número inverso. Se o parâmetro de entrada não for nenhum dos tipos acima, volte "booleano ou número esperados, mas o parâmetro é do tipo [tipo]"

function inverso(valor) {
    if(valor == Boolean) {
        return console.log(!valor)
    } else if(valor == Number) {
        return console.log(`-${valor}`)
    } else {
        return console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`)
    }
}

inverso(true)
inverso(0)
inverso("8")