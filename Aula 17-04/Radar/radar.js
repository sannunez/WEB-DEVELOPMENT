function velocidade() {

var speed = parseFloat(document.getElementById("speed").value);
var calculate = document.getElementById("calculate");
var multa = 100*(speed - 60);

if (speed > 60) {
    resultado.innerHTML = `Você pagará uma multa de R$${multa}.`;
}

else {
    resultado.innerHTML = `Você não pagará multa ;)`
}

}