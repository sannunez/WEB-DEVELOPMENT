import {useState, useEffect} from 'react'
import movies from '../data/movies.json'
import MovieCard from '../components/MovieCard'

export default function MovieListPage(){

    const [search, setSearch] = useState("")
    const[filmes, setFilmes] = useState([])

    
    // useEffect -> controla "efeitos colaterais"
    useEffect(() => {
         // fetch API
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')
        // Promessa concluida --> Então - .then()
        // Armazena o Json
            .then(res => res.json())
            // .results é apenas um nome das listas internas do json, pode ser qualquer nome
            .then(res => setFilmes(res.results))
            .catch(erro => console.log(erro))
            // Operação quando fetch acabar
            .finally (() => console.log('Fim!'))
    // array de dependencias, utilizado para atualização de informações
    // array vazio faz uma vez, porém tem como configurar a atualização de estado que acarreta no fetch novamente
    }, [])
   


    const handleSearch = (e) =>{
        // pega o valor dentro do input
        setSearch(e.target.value)
        console.log(search)
    }

    // const filmesFiltrados = movies.filter( filme => (
    //     // includes verifica se possue o paramatro passado nesse caso
    //     // o texto dentro da caixa de input
    //     filme.titulo.toLowerCase().includes(search.toLowerCase())
    // ))
    
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
                filmes.map(filme => (
                    <>
                        <h1>{filme.title}</h1>
                        <img src={`https://image.tmdb.org/t/p/w92${filme.poster_path}`}/>
                        <img src={`https://image.tmdb.org/t/p/w1280${filme.backdrop_path}`}/>
                    </>
                ))
             }
             </section>
        </>
    )
}

// FILTRAGEM
{/* <section className='flex'>
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
</section> */}