import {IMG_CDN_URL} from "../Utils/Constant"

const MovieCard = ({ poster }) => {
  return (
    <div className="w-[200px] p-4">
      <img src={IMG_CDN_URL + poster} alt="Movie Card" />
    </div>
  );
};
export default MovieCard;