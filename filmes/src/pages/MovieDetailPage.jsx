import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

export default function MovieDetailPage() {

    const { id } = useParams()
    const [movie, setMovie] = useState({})
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-br`)
            .then(response => response.json())
            .then(data => {setMovie(data); console.log(data)})
            .catch(error => console.error(error))
    }, []);

    return (
        <>
            <h1>{movie.title}</h1>
            <div style={{
                backgroundImage: `url()`
            }}></div>
            <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}
`} alt="" />
        </>
    )
}
