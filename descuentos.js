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
    console.log({
        PrecioOriginal,
        Descuento,
        PorcentajePrecioDescuento,
        PrecioConDescuento,
    })
}

