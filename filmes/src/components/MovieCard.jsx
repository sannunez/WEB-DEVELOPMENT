import { Link } from "react-router-dom"

export default function MovieCard({id, title, poster_path}) {
    return(
        <>
            <div>
                <h2>{title}</h2>
                <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt={title} className="w-26 h-36 flex gap-2"/>
                <Link to={`/movies/${id}`}>Saiba mais</Link>
            </div>

        </>
    )

}