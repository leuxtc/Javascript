const funcs = []

// let por ter escopo de bloco, a partir do momento que é armazenada na função, será sempre lembrada
for (let i = 0; i < 10; i++) {
    funcs.push(function (){
        console.log(i)
    })
}

funcs[6]()
funcs[9]()
funcs[3]()

const funcs1 = []

// var por não ter escopo de bloco, ele não ficara armazenado pra sempre na função
for (var a = 0; a < 10; a++) {
    funcs1.push(function(){
        console.log(a)
    })
}

funcs1[6]()
funcs1[9]()
funcs1[3]()