import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainter = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (movies === null || !movies) return;

  const mainMovie = movies[0];
  
  
  const { original_title, overview,id } = mainMovie;
  return (
    <div className="pt-[20%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  )
}

export default MainContainter;