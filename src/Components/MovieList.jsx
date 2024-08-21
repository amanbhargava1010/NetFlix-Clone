/* eslint-disable react/prop-types */

import MovieCard from './MovieCard'

// eslint-disable-next-line react/prop-types
const MovieList = ({ title, movies }) => {
  
  
  return (
    
      <div className='px-6 py-6'>
        <h1 className=' text-4xl font-extrabold py-2 text-white '>{title }</h1>
      <div className='flex overflow-x-scroll overflow-auto'>
        <div className='flex'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
      </div>
  );
};

export default MovieList;