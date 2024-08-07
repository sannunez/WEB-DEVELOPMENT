
// WHILE 
function logar(){
    let nomeUsuario;
    let senhaUsuario;

    while(true){
        nomeUsuario = document.getElementById("login").value;
        senhaUsuario = document.getElementById("senha").value;

        if(nomeUsuario === "1234" && senhaUsuario === "1234"){
            alert("Logado com sucesso!");
            break
        }

        alert("Login ou senha invalidos!")

    }
}


