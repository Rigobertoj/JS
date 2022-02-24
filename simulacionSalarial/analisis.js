//helpers functions 
function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (ValorAcumulcado = 0, nuevoElemento){
            return ValorAcumulcado + nuevoElemento;
        }
    );
    const PromedioLista = sumaLista/lista.length;
    return PromedioLista;
}
function esPar(Elemento){
    return (Elemento % 2 === 0);
}

//median function
function CalcularMdiana(list){
    const midlista = parseInt(list.length/2);
    if(esPar(list.length)){
        const num1 = list[midlista];
        const num2 = list[midlista - 1];

        const mediana = calcularPromedio([num1, num2]);
        return mediana;
    }else{
        return list[midlista];
    }
} 

//overall median
const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salarioColSort = salariosCol.sort(function(a,b){
    return a - b;
}
);

const medianaGeneralColo = CalcularMdiana(salarioColSort);

//median function Top 10%

const spliceStar = (salarioColSort.length * 90)/100;
const spliceCount = salarioColSort.length - spliceStar;

const salariosColTop10 = salarioColSort.splice(spliceStar, spliceCount)

const medianaTop10 = CalcularMdiana(salariosColTop10);



console.log({medianaGeneralColo,medianaTop10})
