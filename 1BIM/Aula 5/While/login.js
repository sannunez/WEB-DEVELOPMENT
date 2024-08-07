function logar() {
    var nomeUsuario = document.getElementById("login").value;
    var senhaUsuario = document.getElementById("senha").value;

    while(true) {

        if(nomeUsuario === "1234" && senhaUsuario === "1234") {
            alert("Logado com sucesso!");
            break;
        }

        else {
            alert("Login ou senha inválido, tente novamente!");
            break;
        }
    }
}