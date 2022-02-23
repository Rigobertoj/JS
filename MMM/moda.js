const listaModa = [1,2,3,1,4,5,3,1,3,4,1,3,4,4,12,3,4,2,3,4,3,5,12,5,2,3,2,1,3,1,2];

// const listaCount = {};

// listaModa.map(
//     function(elemento){
//         if (listaCount[elemento]){
//             listaCount[elemento] += 1
//         } else {
//             listaCount[elemento] = 1;
//         }
        
//     }
// );

// const listaArray = Object.entries(listaCount).sort(
//     function(a,b){
//         return a[1] - b[1]
//     }
// );

// const moda = listaArray[listaArray.length - 1]

function moda(List){
    const ListaCount = {}

    List.map(
        function(Elemento){
            if(ListaCount[Elemento]){
                ListaCount[Elemento] += 1;
            }else{
                ListaCount[Elemento] = 1;
            }
        }
    )

    const listaArray = Object.entries(ListaCount).sort(
        function(a,b){
            return a[1] - b[1];
        }
    )

    const moda = listaArray[listaArray.length - 1]
    return moda
}
