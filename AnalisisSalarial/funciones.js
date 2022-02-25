function interesSimple(capital, taza, plazos){
    taza = taza/12;
    taza = taza/100;
    const intere = capital * taza * plazos;
    return intere 
}

function CalcularInteresSimple(){
    const capital = document.getElementById("main-section-input-capital");
    const taza = document.getElementById("main-section-input-Interes");
    const plazo = document.getElementById("main-section-input-Plazo");

    const valueCapital = capital.value;
    const valueTaza  = taza.value;
    const valuePlazo = plazo.value;

    const interes = interesSimple(valueCapital, valueTaza, valuePlazo);

    const resultP = document.getElementById("main-container2-result")
    resultP.innerText = "EL interes que se cobrara por el prestamo al final de su pago sea de "+ interes
}

function interesCompuesto(capital, taza, plazos){
    
}