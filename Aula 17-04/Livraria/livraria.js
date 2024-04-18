function quantidade() {

var resultado = document.getElementById("resultado");
var hp = parseInt(document.getElementById("hp").value);
var valor = "";

if (hp < 7){
    valor = hp * 22;
}

else {
    valor = hp * 15;
}

resultado.innerHTML = `Você pagará R$${valor},00.`;
}

