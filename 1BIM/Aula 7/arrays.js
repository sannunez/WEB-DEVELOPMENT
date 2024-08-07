const pessoas = ["Fulano", "Ciclano", "Beltrano"]

// Adiciona um elemento ao final do array
pessoas.push("Caio")

// Remove o último elemento do array
pessoas.pop()

// Adiciona um elemento no início do array
pessoas.unshift("Caio")

// Remove o primeiro elemento do array
pessoas.shift()

// Atualizar um valor na array
pessoas[1] = "Caio"

console.log(pessoas)

pessoas.forEach(pessoa => console.log(pessoa.toLowerCase()))

function modificarPessoas(array){
    return array.map(pessoa => pessoa.toLowerCase())
}

console.log(modificarPessoas(pessoas))









