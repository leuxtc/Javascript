// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externa à função

const x = 'Global'

function Local() {
    const x = 'Local'
    function Dentro() {
        return x
    }
    return Dentro
}

const Func = Local()
console.log(Func())