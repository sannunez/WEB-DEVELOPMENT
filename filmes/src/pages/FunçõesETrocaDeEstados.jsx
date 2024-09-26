// Registra alterações de estado da pagina/elemento, pois html é estatico paradão
import {useState} from 'react'

export default function MovieListPage(){
    // contador --> variavel, setContador --> método que altera a variavel
    // useState --> valor inicial que o estado(variavel) começa
    const [contador, setContador] = useState(0)
    const [textoTroca, setTextoTroca] = useState('trocar?')

    const handleAumentar = () => {
        setContador((prev) => (
            prev + 1
        ))
        console.log(contador)
    }

    const handleDiminuir = () => {
        setContador((prev) => (
            prev - 1
        ))
    }

    const handleZerar = () => {
        setContador((prev) => (
            prev - prev
            // prev = 0
        ))
    }

    const handleTroca = () => {
        setTextoTroca((prev) => (
            // If ternário (condição if else em uma linha só)
            // prev === "Memphis" --> é a condição
            // '?' e o texto que vem depois é o que acontecera se a condição for verdadeiro
            // ':' e o texto que vem depois é o que acontecera se for falsa (é o else)
            prev === "Memphis" ? "Depay" : "Memphis"
        ))

    }
    return(
        <>
        {/* função que gera um numero aleatório */}
        <p>{Math.random()}</p>
        <p>{contador}</p>
        <button onClick={handleAumentar}>Aumentar</button>
        <br />
        <button onClick={handleDiminuir}>Diminuir</button>
        <br />
        <button onClick={handleZerar}>Zerar</button>
        <br />
        <button onClick={handleTroca}>{textoTroca}</button>
        </>
    )
}