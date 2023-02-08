function Carro(velocidadeMax = 200, delta = 5) {
    // Atributo privada
    let velocidadeAtual = 0

    // Método publico
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMax) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMax
        }
    }

    // Método publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 10)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())