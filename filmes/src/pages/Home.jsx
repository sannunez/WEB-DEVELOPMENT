import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from '../data/movies.json'

export default function Home(){

    const [filmesPopulares, setFilmesPopulares] = useState([])
    const [filmesTrending, setFilmesTrending] = useState([])
    const [filmesUpcoming, setFilmesUpcoming] = useState([])

    // função assincrona
    const fetchMovies = async() => {
        try{
            // Await na frente do que retorna uma promessa
            const [respostaPopulares, respostaTrending, respostaUpcoming] = await Promise.all(
                [
                    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=pt-BR`),
                    fetch('https://api.themoviedb.org/3/trending/all/week?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR'),
                    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR')

                ]
            )

            // Convertendo em JSON //Await funciona apenas em funções async(assincronas)
            const popularData = await respostaPopulares.json()
            const trendingData = await respostaTrending.json()
            const upcomingData = await respostaUpcoming.json()
        
            //Atualizar o estado
            setFilmesPopulares(popularData.results)
            setFilmesTrending(trendingData.results)
            setFilmesUpcoming(upcomingData.results)
        }
        catch{}
    }

    useEffect(() =>{
        fetchMovies()
    }, [])

    return(
        <>
       <CardContainer titulo={"Populares"}>
        
            {   
                filmesPopulares
                    .map( filme => (
                    <MovieCard key={filme.id} {...filme} />
                    ))
            }
       </CardContainer>

       <CardContainer titulo={"Em alta"}>
            {   
                filmesTrending
                    .map( filme => (
                    <MovieCard key={filme.id} {...filme} />
                    ))
            }
        </CardContainer>

        <CardContainer titulo={"Em Breve"}>
            {   
                filmesUpcoming
                    .map( filme => (
                    <MovieCard key={filme.id} {...filme} />
                    ))
            }
        </CardContainer>
       
        <CardContainer titulo={"Melhor avaliados"}>
                {
                    movies
                    .filter( filme =>(
                        filme.avaliacao > 9
                    ) )
                    .map( filme => (
                    <MovieCard key={filme.id} {...filme} />
                    ))
                }
        </CardContainer>
       </>

    )
}