function calcularPromedio(lista){
    const sumaLista = lista.reduce(
        function (ValorAcumulcado = 0, nuevoElemento){
            return ValorAcumulcado + nuevoElemento;
        }
    );
    const PromedioLista = sumaLista/lista.length;
    return PromedioLista;
}


const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
)

const salarioColSort = salariosCol.sort(function(a,b){
    return a - b;
}
);

function CalcularMdiana(list){
    const midlista = parseInt(list.length/2)

    function esPar(Elemento){
        return (Elemento % 2 === 0);
    }

    if(esPar(list.length)){
        const num1 = list[midlista]
        const num2 = list[midlista - 1]

        const mediana = calcularPromedio([num1, num2])
        return mediana 
    }else{
        return list[midlista]
    }
} 

console.log(CalcularMdiana(salarioColSort))
