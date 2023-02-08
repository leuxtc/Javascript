// var tem o escopo de: global e função

var numero = 1

{
    var numero = 2 
    console.log(`Bloco: ${numero}`)
}

console.log(`Fora: ${numero}`) 

// let tem o escopo de: global, função e bloco

let numero1 = 3

{
    let numero1 = 4
    console.log(`Bloco: ${numero1}`)
}

console.log(`Fora: ${numero1}`)