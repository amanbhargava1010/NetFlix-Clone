import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";
import { API_options } from "../Utils/Constant";
import { addTrendingMovies } from "../Utils/movieSlice";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const trendingMovies = useSelector(
    (store) => store.movies.trendingMovies
  );

  const getTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', API_options);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(() => {
    !trendingMovies && getTrendingMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export default useTrendingMovies