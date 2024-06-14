import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useCustomTitle } from "../hooks";
import backup from '../assets/backup.jpg'

export const MovieDetail = ({apiPath}) => {
  // using useParams accessing the id of the movie passed which will be used to fetch the particular movie information
  const params = useParams();
  const [movie, setMovie] = useState({});
  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.REACT_APP_API_KEY}`;

  // using hook to set a custom title for page
  useCustomTitle(movie.title);

  // function to fetch particular movie detail 
  useEffect(() => {
    const fetchDetails = async () =>{
      const response = await fetch(url);
      const json = await response.json();
      setMovie(json);
    }
    fetchDetails();
  },[url]);


  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}`: backup} alt="movie" />
        </div>
        <div className=" max-w-2xl text-gray-700 dark:text-white">
          <p className="font-bold my-3 text-4xl text-center lg:text-left">{movie.original_title}</p>
          <p className="text-lg my-4">{movie.overview}</p>
          <ul className="flex flex-wrap gap-2 my-7">
            {movie.genres && movie.genres.map(genre => (
              <li key={genre.id} className="text-lg border rounded border-gray-200 dark:border-gray-600 p-2 mr-2">{genre.name}</li>
            ))}
          </ul>
          <div className="flex items-center">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <p className=" ml-2 text-lg">{movie.vote_average}</p>
            <span className="w-1 h-1 bg-gray-500 dark:bg-gray-400 rounded-full mx-1.5 "></span>
            <p className="text-lg">{movie.vote_count} reviews</p>
          </div>
          
          <p className="text-lg my-4">
            <span className="font-bold mr-2">Runtime:</span>
            <span>{movie.runtime} min.</span>
          </p>
          <p className="text-lg my-4">
            <span className="font-bold mr-2">Budget:</span>
            <span>{movie.budget}</span>
          </p>
          <p className="text-lg my-4">
            <span className="font-bold mr-2">Revenue:</span>
            <span>{movie.revenue}</span>
          </p>
          <p className="text-lg my-4">
            <span className="font-bold mr-2">Release Date:</span>
            <span>{movie.release_date}</span>
          </p>
          <p className="text-lg my-4">
            <span className="font-bold mr-2">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer">{movie.imdb_id}</a>
          </p>  
        </div>
      </section>
    </main>
  )
}
