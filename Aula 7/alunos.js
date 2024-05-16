const alunos = [
    {nome: "Diogo", media: 5.5},
    {nome: "Julia", media: 9.5},
    {nome: "Diana", media: 7.0},
    {nome: "Ricardo", media: 4.0},
]

reprovado = alunos.filter(a => a.media < 5.0)

if (alunos[1]< 5.0){
    console.log("Reprovado")
}

console.log("Reprovados: ", reprovado)

