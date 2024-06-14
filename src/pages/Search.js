import { useSearchParams } from "react-router-dom"
import { MovieCard } from "../components";
import { useFetch, useCustomTitle } from "../hooks";

export const Search = ({apiPath}) => {
  // using useSearchParams for getting hold of the query parameter passed for search
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  // fetching movies using useFetch hook based on the query entered by user
  const {data: movies} = useFetch(apiPath, query);

  // setting custom title using custom title hook
  useCustomTitle(`Search result for ${query}`);

  return (
    <main>
      {/* heading */}
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          { movies.length !== 0 ? `Results for '${query}'` : `No result found for '${query}'` }
        </p>
      </section>
      {/* movie cards */}
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
