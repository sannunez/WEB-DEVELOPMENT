function escolhaComp(){
    const jokempo = ["Pedra", "Papel", "Tesoura"]
    let numeroAleatorio = Math.floor(Math.random() * 3)
    return jokempo[numeroAleatorio]
}

function jogar(escolhaDoUsuario){
    let escolhaPc = escolhaComp()
    let resultado
    
    if(escolhaPc === escolhaDoUsuario){
        resultado = "Empatou!"
    }

    else if(
        (escolhaDoUsuario === "Pedra" && escolhaPc ==="Tesoura") ||
        (escolhaDoUsuario === "Papel" && escolhaPc ==="Pedra") ||
        (escolhaDoUsuario === "Tesoura" && escolhaPc ==="Papel") 
    ){
        resultado = "Você ganhou!"
        document.getElementById("resultado").style.color = "green";
    }
    else{
        resultado = "Computador ganhou!"
        document.getElementById("resultado").style.color = "red";
    }  

    

    // else if(escolhaPc === 'Pedra' && escolhaDoUsuario === 'Papel'){
    //     resultado = "Vitória!"
    // }

    // else if(escolhaPc === 'Pedra' && escolhaDoUsuario === 'Tesoura'){
    //     resultado = "Derrota!"
    // }

    // else if(escolhaPc === 'Papel' && escolhaDoUsuario === 'Pedra'){
    //     resultado = "Derrota!"
    // }

    // else if(escolhaPc === 'Papel' && escolhaDoUsuario === 'Tesoura'){
    //     resultado = "Vitória!"
    // }

    // else if(escolhaPc === 'Tesoura' && escolhaDoUsuario === 'Pedra'){
    //     resultado = "Vitória!"
    // }

    // else if(escolhaPc === 'Tesoura' && escolhaDoUsuario === 'Papel'){
    //     resultado = "Derrota!"
    // }
    document.getElementById("resultado").innerText = `A escolha do usuario foi ${escolhaDoUsuario} e a escolha do Pc foi ${escolhaPc}${resultado}`
}