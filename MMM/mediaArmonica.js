const distanciaRecorrida =[15,17,14,13,12];

function mediaArmonica(list){
    const inveros = [];
    list.map(function(elemento){
        inveros[elemento] = 1/elemento
    })

    sumaInversos = inveros.reduce(function(ValorAcumulcado = 0, nuevoElemento){
        return ValorAcumulcado + nuevoElemento;
    })

    mediaA = list.length/sumaInversos;
    return mediaA
}

// function mediaArmonica(list){
//     const inversos = [];

//     list.map(function(elemento){
//         if(elemento > 0){
//             inversos[elemento] = 1/elemento
//         }else{

//         }
//     })
// }