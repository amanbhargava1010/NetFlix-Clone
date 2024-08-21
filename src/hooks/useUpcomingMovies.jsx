import { API_options } from "../Utils/Constant"
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../Utils/movieSlice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const useUpcomingMovies = () => {

  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies)

  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  }

  useEffect(() => {
   !upcomingMovies&&  getUpcomingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export default useUpcomingMovies