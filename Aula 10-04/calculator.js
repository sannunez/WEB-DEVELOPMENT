function somar() {
    //Entrada
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    //Processamento
    var soma = numero1 + numero2;

    //Saída
    resultado.innerHTML = `O resultado da soma é ${soma}`;
    console.log(soma)
}


function subtrair() {

    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var subtrai = numero1 - numero2;

    resultado.innerHTML = `O resultado da subtração é ${subtrai}`;
}


function multiplica() {
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var multiplica = numero1 * numero2;

    resultado.innerHTML = `O resultado da multiplicação é ${multiplica}`;
}


function eleva() {
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = document.getElementById('resultado');

    var elevar = numero1 ** numero2;

    resultado.innerHTML = `O resultado da elevação é ${elevar}`;
}


function divide() {
    
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    if (numero2 === 0 || numero2 === null) {
        document.getElementById('resultado').innerText = "Erro: divisão por zero.";
    }
    
    else {
        document.getElementById('resultado').innerText = `O resultado da divisão é ${numero1 / numero2}`;
    }
}
