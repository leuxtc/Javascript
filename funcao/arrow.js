let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
console.log(dobro(4))

dobro = a => 4 * a // Apenas para funções de uma linha

console.log(dobro(2))

let ola = () => 'Olá'
ola = _ => 'Olá'

console.log(ola());

