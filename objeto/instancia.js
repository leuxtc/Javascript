function MeuObj() {}

const obj1 = new MeuObj()
const obj2 = new MeuObj()

console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObj.prototype === obj1.__proto__)

MeuObj.prototype.nome = 'Anônimo'
MeuObj.prototype.falar = function() {
    console.log(`Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Marcio'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObj.prototype

obj3.nome = 'Obj3'
obj3.falar()

// Resumo 
console.log((new MeuObj).__proto__ === MeuObj.prototype)
console.log(MeuObj.prototype === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
