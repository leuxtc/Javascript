const fabricantes = ['Mercedez','Audi', 'BMW']

function imprimir(numero, indice) {
    console.log(`${indice + 1}. ${numero}`);
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricantes => console.log(fabricantes))
