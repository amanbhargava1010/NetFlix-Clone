import { addTrailerVideo } from "../Utils/movieSlice";
import { API_options } from "../Utils/Constant";
import { useEffect } from "react";
import { useDispatch , useSelector} from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const movieTrailer = useSelector((store) => store.movies.trailerVideo);
  
  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_options)
    const json = await data.json();
    
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  }
  useEffect(() => {
    !movieTrailer && getMovieVideos();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
}

export default useMovieTrailer;