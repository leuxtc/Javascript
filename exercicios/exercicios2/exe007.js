// Crie uma função que receba quatro números como parâmetro(numero, minimo, maximo, inclusivo) e retorne se o parâmetro numero está entre o minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre" como inclusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero é igual a minimo ou a maximo.

function estaEntre(numero, minimo, maximo, inclusivo) {
    if(numero > minimo && numero < maximo) {
        console.log(true)
    } else if(numero <= minimo && numero <= maximo) {
        if(inclusivo == true) {
            return console.log(true)
        }
        console.log(false)
    } 
    
    return false
}

estaEntre(10, 50, 100)
estaEntre(101, 100, 160)
estaEntre(3, 3, 150)
estaEntre(3, 3, 150, true)