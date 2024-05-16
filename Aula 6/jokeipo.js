function escolhaComp(){
    // Função que tem 3 valores
    const jokeipo = ["Pedra", "Papel", "Tesoura"]
    // Variável que arrendonda para baixo o valor gerado aleatoriamente de acordo com o tamanho da array jokeipo[]
    let numeroAleatorio = Math.floor(Math.random() * 3)
    // Retorna a posição de acordo com o número aleatório
    return jokeipo[numeroAleatorio]
}

function jogar(escolhaDoUsuario){

    let escolhaPc = escolhaComp()
    let resultado

    if (escolhaPc === escolhaDoUsuario){
        resultado = "Empatou!";
        document.getElementById("resultado").style.color = "black";
    }

    else if(
        (escolhaDoUsuario === "Pedra" && escolhaPc === "Tesoura") ||
        (escolhaDoUsuario === "Papel" && escolhaPc === "Pedra") ||
        (escolhaDoUsuario === "Tesoura" && escolhaPc === "Papel")
    ){
        resultado = "Você ganhou!";
        document.getElementById("resultado").style.color = "green";
    } else {
        resultado = "Computador ganhou!";
        document.getElementById("resultado").style.color = "red";
    }

    document.getElementById("resultado").innerText = resultado
}