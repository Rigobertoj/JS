function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (ValorAcumulcado = 0, nuevoElemento){
            return ValorAcumulcado + nuevoElemento;
        }
    );
    const PromedioLista = sumaLista/lista.length;
    return PromedioLista;
}


const lista = [
    100,
    200,
    300,
    4000000000,
]

// const midlista = parseInt(lista.length/2);

// function esPar(numero){
//     if(numero % 2 === 0 ){
//         return true;
//     }else{
//         return false;
//     }
// }

// let mediana;

// if(esPar(lista.length)){
//     const elemento1 = lista[midlista - 1];
//     const elemento2 = lista[midlista];

//     const promedio = calcularPromedio([elemento1, elemento2])

//     mediana = promedio
// }else{
//     mediana = lista[midlista];
// }

function calcularMediana(lista){
    lista = lista.sort(function(a,b){return a - b });
    const mitadLista = parseInt(lista.length/2);
    let Mediana;

    function EsPar(Numero){
        if(Numero % 2 === 0){
            return true
        }else{
            return false
        }
    }

    if(EsPar(lista.length)){
        const Elemento1 = lista[mitadLista - 1]
        const Elemento2 = lista[mitadLista]

        let Promedio = calcularPromedio([
            Elemento1, 
            Elemento2
        ])

        return Mediana = Promedio
    }else{
        return Mediana = lista[mitadLista]
    }
}

