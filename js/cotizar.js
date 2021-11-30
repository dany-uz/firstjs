function cotizar() {

    let CantidadDiseñoSoftware = document.getElementById('preciosoftware').value;
    let CantidadActualizacionInterfaz = document.getElementById('preciointerfaz').value;
    let CantidadSoporteTecnico = document.getElementById('preciosoporte').value;

    CantidadServicios = CantidadDiseñoSoftware + CantidadActualizacionInterfaz + CantidadSoporteTecnico;
    CantidadTotalDiseñoSoftware = CantidadDiseñoSoftware*3500000
    CantidadTotalActualizacionInterfaz = CantidadActualizacionInterfaz*1500000;
    CantidadTotalSoporteTecnico = CantidadSoporteTecnico*2000000;
    CostoTotal = ((CantidadDiseñoSoftware*3500000)+(CantidadActualizacionInterfaz*1500000)+(CantidadSoporteTecnico*2000000));

    if ((parseInt(CantidadServicios)>5) && (parseInt(CostoTotal)>10000000)) {
        Subtotal = CostoTotal
        ValorTotal = CostoTotal-(CostoTotal*0.25);
    } else {
        Subtotal = CostoTotal
        ValorTotal = CostoTotal
    }
    
    document.getElementById('Subtotal').innerHTML = Subtotal;
    document.getElementById('ValorTotal').innerHTML = ValorTotal;
    document.getElementById('CantidadDiseñoSoftware').innerHTML = CantidadDiseñoSoftware ;
    document.getElementById('CantidadActualizacionInterfaz').innerHTML = CantidadActualizacionInterfaz;
    document.getElementById('CantidadSoporteTecnico').innerHTML = CantidadSoporteTecnico;
    document.getElementById('CantidadTotalDiseñoSoftware').innerHTML = CantidadTotalDiseñoSoftware;
    document.getElementById('CantidadTotalActualizacionInterfaz').innerHTML = CantidadTotalActualizacionInterfaz;
    document.getElementById('CantidadTotalSoporteTecnico').innerHTML = CantidadTotalSoporteTecnico;
}