import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeformate from '../lib/timeFormate'


const MovieCard = ({movie}) => {
    const navigate=useNavigate();
  return (
    <div className='w-66 bg-gray-800 p-3 rounded-2xl'>
      <img className='rounded-lg mb-2 h-48 object-cover cursor-pointer' src={movie.backdrop_path} onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}}></img>
      <p className='mb-2 text-white font-semibold' >{movie.title}</p>
      <p className='mb-4 text-sm text-gray-400'>
        {new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0,2).map((genre)=>genre.name).join("|")} • {timeformate(movie.runtime)}
      </p>
      <div className='flex justify-between mb-2' >
        <button  className='w-26 bg-red-500 text-white p-1 h-8  rounded-2xl  text-sm cursor-pointer hover:bg-red-400 ' onClick={()=>{navigate(`/movies/${movie._id}`);scrollTo(0,0)}}>Buy Ticket</button>
        <p className='flex items-center gap-1'>
            <StarIcon className='w-4 h-4 text-primary fill-primary'></StarIcon>
            <span className='text-gray-400 text-sm'>{movie.vote_average.toFixed(1)}</span>
        </p>
      </div>
    </div>
  )
}

export default MovieCard
