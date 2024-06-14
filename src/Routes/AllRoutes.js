import { Navigate, Route, Routes } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound} from '../pages';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={"/movies"}/>} />;
        <Route path="movies" element={<MovieList apiPath="discover/movie" title="Home" />} />
        <Route path="movies/top-rated" element={<MovieList apiPath="movie/top_rated" title="Top Rated Movies" />} />
        <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming Movies" />} />
        <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular Movies" />} />
        <Route path="/movie/:id" element={<MovieDetail apiPath="movie" />} />
        <Route path="search/movie" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound  title="Page Not Found" />} />
    </Routes>
  )
}
