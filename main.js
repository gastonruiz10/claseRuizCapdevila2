
/*Simulador de costos e impuestos*/
/*Cree un simulador interactivo de precios, en el cual ingresadon los datos de: costo del producto, valor de 
IVA y cual sera el margen de ganancia. Nos da como resultado el precio de venta del producto */

const calcularPx = () => {
    const costo = parseInt(prompt('Ingrese el costo'))
    const iva = parseInt(prompt('Ingrese el iva'))
    const margen = parseInt(prompt('Ingrese el margen'))
    const total = calcularIva(costo,iva)
    //const totalMargen = calcularMargen(total,margen)
    console.log('total: ' + total);
    //console.log('total margen: ' + totalMargen);

    return alert(calcularMargen(total,margen))

}

const calcularIva = (costo,iva) => {
    return costo + 0.01 * iva * costo
}

const calcularMargen = (costo,margen) => {
    return costo + 0.01 * margen * costo
}


calcularPx()

