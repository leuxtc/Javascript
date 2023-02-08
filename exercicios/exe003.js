// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.

function divisao(a, b) {
    return console.log(`
${a} |_${b}_ 
${a%b}   ${a/b}`)
}

divisao(4, 2)