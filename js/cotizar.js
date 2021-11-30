function cotizar() {

    let cantds = document.getElementById('preciosoftware').value;
    let cantai = document.getElementById('preciointerfaz').value;
    let cantst = document.getElementById('preciosoporte').value;

    cs = cantds + cantai + cantst;
    ctds = cantds*3500000
    ctai = cantai*1500000;
    ctst = cantst*2000000;
    ct = ((cantds*3500000)+(cantai*1500000)+(cantst*2000000));

    if ((parseInt(cs)>5) && (parseInt(ct)>10000000)) {
        st = ct
        vt = ct-(ct*0.25);
    } else {
        st = ct
        vt = ct
    }
    
    document.getElementById('st').innerHTML = st;
    document.getElementById('vt').innerHTML = vt;
    document.getElementById('cantds').innerHTML = cantds ;
    document.getElementById('cantai').innerHTML = cantai;
    document.getElementById('cantst').innerHTML = cantst;
    document.getElementById('ctds').innerHTML = ctds;
    document.getElementById('ctai').innerHTML = ctai;
    document.getElementById('ctst').innerHTML = ctst;
}