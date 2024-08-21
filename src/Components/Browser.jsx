
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlaying";
import MainContainter from "./MainContainter";
import SecondryContainter from "./SecondryContainter";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from 'react-redux';

function Browser() {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  // Fetch data from TMDB API and update the store.
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {showGptSearch ? (<GPTSearch />) : (
        <>
          <MainContainter />
          <SecondryContainter />
        </>
      )}
      
    </> 
  )
}

export default Browser;