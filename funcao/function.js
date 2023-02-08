// Função em JS é First-Class Object

// Forma literal
function func() { }

// Armazenar em uma variável
const func1 = function() { }

// Armazenar em um array
const array = [function(a, b) {return a + b}, func, func1]
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto 
const obj = {}
obj.falar = function() {return 'Olá'}
console.log(obj.falar())

// Como passar função como parametro
function run(fun) {
    fun()
}
run(function() { console.log('Executando') })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}
soma(3, 2)(4)

const conta = soma(3, 2)
conta(4)