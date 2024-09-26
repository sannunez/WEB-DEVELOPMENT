import {useState} from 'react'
import movies from '../data/movies.json'
import MovieCard from '../components/MovieCard'

export default function MovieListPage(){

    const [search, setSearch] = useState("")
    
    const handleSearch = (e) =>{
        // pega o valor dentro do input
        setSearch(e.target.value)
        console.log(search)
    }

    const filmesFiltrados = movies.filter( filme => (
        // includes verifica se possue o paramatro passado nesse caso
        // o texto dentro da caixa de input
        filme.titulo.toLowerCase().includes(search.toLowerCase())
    ))
    
    return(
        <>
        <h1>Veja o catálogo completo de filmes</h1>
        <input 
            className="text-black"
            type="text"
            name="search"
            id="search"
            value = {search}
            // quando munda o estado, ativa a função
            onChange = {handleSearch}/>

            <section className='flex'>
             {
                filmesFiltrados.length > 0 ?
                filmesFiltrados
                .map( filme => (
                    // spread '...' passa uma cópia de cada elemento do array da descrição de cada filme
                    // para esse moviecard cada vez que o map passa por um elemento(filme)

                    // key -> identificador 
                    <MovieCard key={filme.id} {...filme}/>
                ))
                    :
                    <p>filme inexistente seu comédia!!!</p>
             }
             </section>
        </>
    )
}