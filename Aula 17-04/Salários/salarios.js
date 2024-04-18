function calcular() {
var input = document.getElementById("input").value;
var button = document.getElementById("botao");
}

switch(input) {
    case "Dev Jr":
        console.log("Você receberá R$3.000,00")
        break;

    case "Dev Senior":
        console.log("Você receberá R$6.000,00")
        break;

    case "Pleno":
        console.log("Você receberá R$12.000,00")
        break;

    case "Tech lead":
        console.log("Você receberá R$24.000,00")
        break;

    case "Diretor":
        console.log("Você receberá R$48.000,00")
        break;

    default:
        console.log('Item inválido.')
        break;
}