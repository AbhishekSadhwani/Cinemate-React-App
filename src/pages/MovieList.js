import { MovieCard } from "../components";
import { useFetch,useCustomTitle } from '../hooks';


export const MovieList = ({apiPath, title}) => {
  // fetching movies using useFetch hook and storing them in the movies variable
  const {data : movies} = useFetch(apiPath);

  // using hook to set the custom title
  useCustomTitle(title);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          { movies && movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        
        </div>
      </section>
    </main>
  )
}
