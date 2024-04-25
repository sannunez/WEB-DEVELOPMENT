function fazertabuada () {
    var valor = parseInt(document.getElementById("valor").value);
    var resultado = document.getElementById("resultado");

    console.log(`A tabuada do ${valor} é:`);
    
    for (i = 1; i <= 10; i++) {
        console.log(`${valor} * ${i} = ${valor * i}`);
    }
}