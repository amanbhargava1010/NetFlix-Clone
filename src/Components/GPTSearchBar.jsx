import lang from "../Utils/languageConstant";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { API_options } from "../Utils/Constant";
import SearchMovie from "./searchMovie";
import { useState } from "react";
import NoMovie from "./noMovie";

const GPTSearchBar = () => {

  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const [data, setData] = useState(null);
  

  const handleGPTSearchClick = async() => {
    // Make an API call to GPT API and get movies Results
    const value = searchText.current.value;
    console.log(value);
    
    const getMovie = await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=true&language=en-US&page=1`, API_options);
    const json = await getMovie.json();
    setData(json.results);
    // For each movie 
    console.log(json.results);
  }

  

  return (
    <div className="pt-[5%] flex flex-col items-center bg-gray-900 min-h-screen">
      <form 
        className='w-full md:w-3/4 lg:w-1/2 flex bg-gray-800 p-4 rounded-lg shadow-lg'
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          type="text"
          className='flex-grow p-4 text-black rounded-l-lg focus:outline-none'
          placeholder={lang[langKey].gptSearchPlaceholder}
          ref={searchText}
        />
        <button 
          className='px-6 bg-red-700 text-white rounded-r-lg hover:bg-red-800 transition-colors duration-300'
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      <div className="mt-10 flex flex-wrap justify-center gap-6">
        
      
        {data === null ? ( <NoMovie/>) :
          data.map((movie) => {
        
        const poster_path = movie.poster_path ;

        console.log(poster_path);
        
        return <SearchMovie key={movie.id} poster={poster_path} />;
      })}
    </div>
    </div>
  )
} 

export default GPTSearchBar;