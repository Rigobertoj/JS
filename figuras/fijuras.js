// codigo cuadrado 
console.group("Cuadrado")
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
};

//codigo del triangulo ------------------------------------------------------------------
console.group("Triangulo");
function perimetroTrinagulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
function areaTriangulo(baseTriangulo, alturaTriangulo){
    return  (baseTriangulo * alturaTriangulo)/2;
}
console.groupEnd();

//codigo del circulo----------------------------------------------------------------------
console.group("circulo");

//diametro 
function diametroCirculo (radioCirculo){
    return radioCirculo*2
}
//PI
const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo)
    return diametro * PI
};
//area
function areaCirculo (radioCirculo){
    return  (radioCirculo * radioCirculo) * PI;
};


console.groupEnd


function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
    alert(perimetro)
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
    alert(area)
}

function calcularAreaTriangulo(){
    const input = document.getElementById("inputtriangulo");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input =  document.getElementById("inputtriangulo");
    const value = input.value;

    const perimetro = perimetroTrinagulo(value);
    alert(perimetro);
}