import { Link } from 'react-router-dom';

// backup image incase a movie doesn't have poster
import backup from '../assets/backup.jpg';

//rendering data from the movie passed as a paramter in MovieCard component
export const MovieCard = ({movie}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/${movie.id}`}>
            <img className="rounded-t-lg" src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`: backup} alt="Movie" />
        </Link>
        <div className="p-5">
            <Link to={`/movie/${movie.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
        </div>
    </div>

  )
}
