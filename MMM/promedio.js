function calcularPromedio(lista){
    // let sumaLista = 0;

    // for(let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }
    const sumaLista = lista.reduce(
        function (ValorAcumulcado = 0, nuevoElemento){
            return ValorAcumulcado + nuevoElemento;

        }
    );

    const PromedioLista = sumaLista/lista.length;
    return PromedioLista;
}

