// Crie uma função que recebe um numero de 1 a 12 e retorne o mes correspondente

function nomeMes(mes) {
    switch(mes){
        case 1:
            console.log(`${mes}) Janeiro`)
            break
        case 2:
            console.log(`${mes}) Fevereiro`)
            break
        case 3:
            console.log(`${mes}) Março`)
            break
        case 4:
            console.log(`${mes}) Abril`)
            break
        case 5:
            console.log(`${mes}) Maio`)
            break
        case 6:
            console.log(`${mes}) Junho`)
            break
        case 7:
            console.log(`${mes}) Julho`)
            break
        case 8:
            console.log(`${mes}) Agosto`)
            break
        case 9:
            console.log(`${mes}) Setembro`)
            break
        case 10:
            console.log(`${mes}) Outubro`)
            break
        case 11:
            console.log(`${mes}) Novembro`)
            break
        case 12:
            console.log(`${mes}) Dezembro`)
            break
        default:
            console.log(`${mes}: Insira um numero válido`)
            break
    }
}

nomeMes(0)
nomeMes(1)
nomeMes(2)
nomeMes(3)
nomeMes(4)
nomeMes(5)
nomeMes(6)
nomeMes(7)
nomeMes(8)
nomeMes(9)
nomeMes(11)
nomeMes(12)
nomeMes(13)