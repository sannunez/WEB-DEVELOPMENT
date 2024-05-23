const btnClicar = document.querySelector('#btnClicar')
const listaFilmes = document.querySelector("#listaFilmes")
const inputUsuario = document.querySelector("#inputUsuario")


const filmes = [
    {
        nome: "Poderoso Chefão",
        diretor: "Coppola",
        ano: 1972,
        sinopse: "Lorem Ipsum Dolor Sit Ame"
    },
    {
        nome: "Meninas Malvadas",
        diretor: "Lindsay Lohan",
        ano: 2004,
        sinopse: "Bla bla bla"   
    },
    {
        nome: "Os trapalhões na calda do cometa",
        diretor: "Didi Mocó",
        ano: 1962,
        sinopse: "Cacildis Meuzamiguis"
    }]

btnClicar.addEventListener('click', function criarFilme(infosDoEvento){
    infosDoEvento.preventDefault()

    // let novoFilme = document.createElement("li")
    // novoFilme.innerText = inputUsuario.value;


    // let btnEditar = document.createElement('button')
    // btnEditar.innerText = "Editar"
    // btnEditar.addEventListener('click', function(){
  
    //     novoFilme.style.color = "red"
   
    //     novoFilme.classList.add('fundo-preto')
    // })

  
    // novoFilme.innerHTML = `
    // <h1>Titulo do filme</h1>
    // <p>Sinopse do filme</p>
    // <p>blabla</p>
    // `

    // let imagemFilme = document.createElement('img')
    // imagemFilme.src=""
    // imagemFilme.alt=""

    // novoFilme.append(btnEditar)

    // listaFilmes.append(novoFilme);

    // inputUsuario.value =""

    
})

//CREATE
function criarFilme(){

    let novoFilme = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value,
    }
    
    filmes.unshift(novoFilme)
    renderizarNaTela()
    inputUsuario.value="";
}


window.onload = renderizarNaTela
//READ
function renderizarNaTela(){

    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement("li")
            novoFilme.innerText = filme.nome

            filmes.indexOf(filmes)

            listaFilmes.append(novoFilme);
        }
    )
}
//UPDATE
function atualizarFile(){

}
//DELETE
function removerFilme(){

    filmes.splice(idFilme, 1)

}