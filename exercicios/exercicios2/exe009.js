// Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o que repetirá, o segundo é a quantidade de repetição.

function Repetir(val, rpt) {
    let resultado = []
    for (let i = 0; i < rpt; i++)
        resultado.push(val)
    
    return console.log(resultado)
}

Repetir("Código", 2)
Repetir(7, 3)