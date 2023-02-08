function Pessoa() {
    this.idade = 0

    // const self = this
    setInterval(function() {
        // self.idade++
        this.idade++
        console.log(this.idade) // self.idade
    }.bind(this), 1000)
}

new Pessoa