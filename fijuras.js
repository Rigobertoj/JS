// codigo cuadrado 
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: "+ ladoCuadrado +"cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: "+ perimetroCuadrado +"cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: "+ areaCuadrado +"cm2");
console.groupEnd();
//codigo del triangulo 
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo  = 4;


console.log("Los lados del triangulo miden: "+ ladoTriangulo1+"cm, " +ladoTriangulo2+ "cm, "+ baseTriangulo + "cm");

const alturaTriangulo = 5.5
console.log("la altura del triangulo es de: " + alturaTriangulo);

const perimetroTrinagulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTrinagulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El area del triangulo es: "+ areaTriangulo +"cm2");
console.groupEnd();

console.group("circulo");
//radio
const radioCirculo = 4;
console.log("El radio del circulo: " + radioCirculo + "cm");

//diametro 
const diametroCirculo = radioCirculo*2;
console.log("El diametro del circulo: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("PI del circulo: " + PI + "cm");

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo: " + perimetroCirculo + "cm");
//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo: " + areaCirculo +  "cm");


console.groupEnd
