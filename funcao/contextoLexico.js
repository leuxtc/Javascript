const valor = 'Global'

function chamar() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    chamar()
}

exec()