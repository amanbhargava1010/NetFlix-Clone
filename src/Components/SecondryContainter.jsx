import MovieList from "./MovieList";
import { useSelector } from 'react-redux';

const SecondryContainter = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-52 pl-10 relative z-20 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies } />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
    )
  )
}

export default SecondryContainter;