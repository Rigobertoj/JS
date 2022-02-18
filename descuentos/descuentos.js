// const PrecioOriginal = 14500;
// const Descuento = 12;

// const PorcentajePrecioDescuento = 100 -Descuento;

// const PrecioConDescuento = (PrecioOriginal * PorcentajePrecioDescuento)/100

// console.log({
//     PrecioOriginal,
//     Descuento,
//     PorcentajePrecioDescuento,
//     PrecioConDescuento
// })

function Descuentos(PrecioOriginal, Descuento){
    PorcentajePrecioDescuento = 100 - Descuento;
    PrecioConDescuento = (PrecioOriginal * PorcentajePrecioDescuento)/100;

    return(PrecioConDescuento);
    // console.log({
    //     PrecioOriginal,
    //     Descuento,
    //     PorcentajePrecioDescuento,
    //     PrecioConDescuento,
    // })
}

function OnClickButtonPriceDiscount(){
    const InputPrice = document.getElementById("InputPrice");
    const PriceValue = InputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = InputDiscount.value

    const PrecioConDescuento = Descuentos(PriceValue, DiscountValue)

    const ResultP = document.getElementById("ResultPrice")
    ResultP.innerText = "El precio con descuento es $ "+ PrecioConDescuento
}