/* eslint-disable react/prop-types */


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-scneen aspect-video pt-[20%] md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 w-auto px-16 text-xl font-bold rounded-lg hover:bg-opacity-50">
          ▶️ Play
        </button>
        <button className="bg-white text-black p-4 w-auto px-12 text-2xl font-bold  rounded-lg mx-2 hover:bg-opacity-50">
          ℹ️ More Info
        </button>
      </div>
    </div>
  )
};

export default VideoTitle;