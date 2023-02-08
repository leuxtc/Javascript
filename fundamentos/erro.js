function tratarErro(erro) {
    // throw new Error('...')
    // throw 'Erro!'
    // throw true
    // throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function nomeCaps(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErro(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Marcelo' }

nomeCaps(obj)