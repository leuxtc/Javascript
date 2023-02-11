Object.prototype.atr0 = '0' // Não usar
const avo = {atr1: 'A'}
const pai = {__proto__: avo, atr2: 'B', atr3: 'D'}
const filho = {__proto__: pai, atr3: 'C'} // Shadowing

console.log(filho.atr0, filho.atr1, filho.atr2, filho.atr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status() {
        return `${this.velAtual}KM/h de ${this.velMax}KM/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 340,
    __proto__: carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}

// Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

volvo.acelerar(100)
console.log(volvo.status())

ferrari.acelerar(300)
console.log(ferrari.status())