/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieID }) => {
  
  const TrailerVideo = useSelector(store => store.movies?.trailerVideo);
  
  useMovieTrailer(movieID);
  
  return (
    <div className="w-screen h-screen">
      <iframe className="w-screen aspect-video"src={"https://www.youtube.com/embed/"+TrailerVideo?.key + "?autoplay=1&mute=1"} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </div>
  )
}

export default VideoBackground;