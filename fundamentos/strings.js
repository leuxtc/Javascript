const nome = "Leonardo"

console.log(nome.charAt(4)) // Pega o caracter no indice indicado
console.log(nome.charCodeAt(2)) // Valor na tabela ASCII
console.log(nome.indexOf('a')) // Mostra o indice do caracter

console.log(nome.substring(1)) // Imprimira a partir do indice 1(e) pra frente
console.log(nome.substring(0, 3)) // Mostra os 3 primeiros caracteres a partir do primeiro item

console.log('Seu nome é: '.concat(nome).concat('!')) // Concatenação
console.log(nome.replace('a', "4")) // Substitui

console.log('Maria João José'.split(' ')) // Transforma a string em array

// Template strings

const concatenacao = 'Olá ' + nome + '!'
const template = `
__________
Olá 
${nome}!`

console.log(concatenacao, template)