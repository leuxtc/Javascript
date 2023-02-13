// Desenvolva uma função que recebe dois parametros, um é a quantidade de horas trabalhadas por um funcionário num mes, e o quanto ele recebe por hora

function calcularSalario(horas, salarioHora) {
    const salario = horas * salarioHora
    return console.log(`Salário igual a R$${salario}`)
}

calcularSalario(150, 40.5)