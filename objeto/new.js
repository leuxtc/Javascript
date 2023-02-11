function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até mais', 234)

console.log(aula1)
console.log(aula2)

// Simulando new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 456)
const aula4 = novo(Aula, 'Até mais', 678)

console.log(aula3)
console.log(aula4)

