const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promocao'
})

console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Celular'
produto.preco = 2.999
produto.descricao = 'Um celular'
delete produto.tag

console.log(produto)

// Seal
const pessoa = { nome: 'Julia', idade: 12 }
Object.seal(pessoa) // Não pode adicionar nem excluir, mas pode alterar os valores

console.log('Selado:', Object.isSealed(pessoa))

pessoa.nome = 'Maria'
pessoa.sobrenome = 'Rosa'
delete pessoa.nome
pessoa.idade = 19

console.log(pessoa)

// Object.freeze = selado + Valores constantes 
