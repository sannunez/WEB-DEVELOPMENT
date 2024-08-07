function calcular() {
var input = document.getElementById("input").value;
var button = document.getElementById("botao");

const salario = "dev jr";

switch(input) {
    case "dev jr":
        console.log("Você receberá R$3.000,00")
        break;

    case "dev senior":
        console.log("Você receberá R$6.000,00")
        break;

    case "pleno":
        console.log("Você receberá R$12.000,00")
        break;

    case "tech lead":
        console.log("Você receberá R$24.000,00")
        break;

    case "diretor":
        console.log("Você receberá R$48.000,00")
        break;

    default:
        console.log('Item inválido.')
        break;
}
}