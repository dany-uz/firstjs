function servicios() {
    var cantds, cantai, cantst;

    cantds = prompt('¿Cuántos servicios de Diseño de Software necesita?');
    cantai = prompt('¿Cuántos servicios de Actualización de Interfaz necesita?');
    cantst = prompt('¿Cuántos servicios de Soporte Técnico necesita?');

    cs = cantds + cantai + cantst;
    ctds = cantds*3500000;
    ctai = cantai*1500000;
    ctst = cantst*2000000;
    ct = ((cantds*3500000)+(cantai*1500000)+(cantst*2000000));

    if ((parseInt(cs)>5) && (parseInt(ct)>10000000)) {
        vt = ct-(ct*0.25);
        alert ('Usted deberá pagar $'+ vt + ' (25% de Desc. Incluido)');
        alert ('Costo total por Diseño de Software: $'+ ctds);
        alert ('Costo total por Actualización de Interfaz: $'+ ctai);
        alert ('Costo total por Soporte Técnico: $'+ ctst);
    } else {
        vt = ct
        alert ('Usted deberá pagar $'+ vt);
        alert ('Costo total por Diseño de Software: $'+ ctds);
        alert ('Costo total por Actualización de Interfaz: $'+ ctai);
        alert ('Costo total por Soporte Técnico: $'+ ctst);
    }
}