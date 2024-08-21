import { useEffect } from "react";
import { API_options } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../Utils/movieSlice";
import { useSelector } from "react-redux";

function usePopularMovies() { 

  const dispatch = useDispatch();

  const popularMovies = useSelector((store)=>store.movies.addPopularMovies)

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export default usePopularMovies;