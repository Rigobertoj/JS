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
var Cupones =[
    "Platzi",
    "ASUS",
    "Asking Alexandria"
]

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
    const DiscountValue = InputDiscount.value;
    // const InputCupon = document.getElementById("InputCoupons");
    // const CuponValue = InputCupon.value;

    // let descuento;

    // switch(CuponValue){
    //     case Cupones[0]:
    //         descuento = 15;
    //     break;
    //     case Cupones[1]:
    //         descuento = 30;
    //     break;
    //     case Cupones[2]:
    //         descuento = 25;
    //     break 
    // }
    const PrecioConDescuento = Descuentos(PriceValue, DiscountValue)

    const ResultP = document.getElementById("ResultPrice")
    ResultP.innerText = "El precio con descuento es $ "+ PrecioConDescuento
}

// function onClickButtonPriceDiscount() {
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;
    
//     const inputCoupon = document.getElementById("InputCoupons");
//     const couponValue = inputCoupon.value;

//     let descuento;

//     switch(couponValue) {
//       case Cupones[0]: // "JuanDC_es_Batman"
//         descuento = 15;
//     break;
//       case Cupones[1]: // "pero_no_le_digas_a_nadie"
//         descuento = 30;
//     break;
//       case Cupones[2]: // "es_un_secreto"
//         descuento = 25;
//     break;
//     }


//     const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

//     const resultP = document.getElementById("ResultP");
//     resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
// }