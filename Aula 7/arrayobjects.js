const filmes = [{
    nome: "Pulp Fiction",
    diretor: "Trarantino",
    ano: 1994,
},{
    nome: "Carros",
    diretor: "Cluetis",
    ano: 2006
}, {
    nome: "Toy Story",
    diretor: "Miguel Falabela",
    ano: 1995
}]

const filmesModificado =
filmes.filter(filme => filme.ano > 2000)

console.log(filmesModificado)


