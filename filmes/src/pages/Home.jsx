import CardContainer from "../components/CardContainer";
import MovieCard from "../components/MovieCard";
import movies from '../data/movies.json'

export default function Home(){
    return(
        <>
       <CardContainer titulo={"Filmes Antigos"}>
        
            {   
                movies
                .filter( filme =>(
                    filme.ano_lancamento < 2000
                ))

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