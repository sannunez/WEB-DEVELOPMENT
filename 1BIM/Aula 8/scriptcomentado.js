// document.querySelector() serve para buscar qualquer elemento, assim como o getElementById, porém ele puxa qualquer tipo
// baseado no simbolo que antecede o nome especifico, exemplo: # --> puxa por ID, . --> puxa por classe, etc.
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

//.addEventListener() observa o evento especificado, nesse caso um click.

// preventDefault() impede o objeto de realizar sua ação padrão, por exemplo o formulario que envia e some com a informação
// com esta função ele mantem a informação visivel

//.parentNode serve para acessar a estrutura "pai"
btnClicar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault()

    let novoFilme = document.createElement("li")
    novoFilme.innerText = inputUsuario.value;


    let btnEditar = document.createElement('button')
    btnEditar.innerText = "Editar"
    btnEditar.addEventListener('click', function(){
        // editando em css internamente do JS
        novoFilme.style.color = "red"
        //classList.add() cria classe e adiciona, classList.toggle() --> ativa e desativa uma classe(modo noturno é feito assim).
        novoFilme.classList.add('fundo-preto')
    })

    //innerHTML --> modificar html internamente do JS
    novoFilme.innerHTML = `
    <h1>Titulo do filme</h1>
    <p>Sinopse do filme</p>
    <p>blabla</p>
    `

    let imagemFilme = document.createElement('img')
    imagemFilme.src=""
    imagemFilme.alt=""

    novoFilme.append(btnEditar)
    // append em JS coloca elementos dentro de outros
    listaFilmes.append(novoFilme);

    //limpa a input box
    inputUsuario.value =""
})

//CREATE
function criarFilme(){

    
}
//sempre que for atualizada a pagina, a informação é processada
window.onload = renderizarNaTela
//READ
function renderizarNaTela(){

    //limpa o elemento para não repetir informações
    listaFilmes.innerHTML = "" 

    filmes.forEach(
        filme => {
            let novoFilme = document.createElement("li")
            novoFilme.innerText = filme.nome

            filmes.indexOf(filmes) //Localiza o indice

            listaFilmes.append(novoFilme);
        }
    )
}