import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import { Heart, PlayCircleIcon, StarIcon } from 'lucide-react';
import timeformate from '../lib/timeFormate';
import BlurCircle from '../Components/BlurCircle';
import DateSelected from '../Components/DateSelected';
import MovieCard from '../Components/MovieCard';
import Loading from '../Components/Loading';

const MovieDetails = () => {
  const {id}=useParams();
  const [show ,setShow]=useState(null)
  const navigate=useNavigate();

  const getShow=async()=>{
    const show=dummyShowsData.find(show=>show._id===id)
    if(show){
    setShow({
      movie:show,
      dateTime:dummyDateTimeData
    })
  }

  }

useEffect(() => {
  console.log("ID changed to", id);
  getShow();
}, [id]);

  console.log(show);

  return show? (
    <div className='  md:px-40 md:pt-48 '>
      <BlurCircle  left="400px " top='100px' />
      <div className='flex  flex-col  gap-8 mb-24 md:flex-row'>
        <img src={show.movie.poster_path} className='w-72 h-1/2 rounded-2xl ml-25 mt-30 md:ml-0 md:mt-0'></img>
        <div className='mx-6 mt-4=3 md:w-3/5 relative '>
         <BlurCircle  left="0px " top='0px'  />
          <p className='text-rose-500 mb-3 '>ENGLISH</p>
          <h1 className='text-4xl font-semibold mb-3'>{show.movie.title}</h1>
          <div className='flex mb-4 gap-2'>
            <StarIcon className='text-red-500 fill-red-500'/>
            <p className='text-md text-gray-300'>{show.movie.vote_average.toFixed(1)} User Rating</p>
          </div>
          <p className='text-sm text-gray-400 mb-3'>{show.movie.overview}</p>
          <p className='text-md mb-7'>
            {timeformate(show.movie.runtime)} • {show.movie.genres.map((genre)=>genre.name).join(", ")}   • {new Date(show.movie.release_date).getFullYear()} 
          </p>
          <div className='flex gap-4'>
            <button className='w-40 h-11 cursor-pointer bg-gray-800 text-sm font-semibold rounded-md flex items-center px-4 gap-1 '>
              <PlayCircleIcon className='w-6'/>
              Watch Tailer</button>
            <a href='#dateSelect' className=' block w-38 rounded-md text-sm font-semibold h-11 text-center py-2.5 bg-red-500'>Buy Tickets</a>
            <div className='w-10 h-10 rounded-full bg-gray-800 px-2 py-2'>
            <Heart className='cursor-pointer'/>
            </div>
          </div>
        </div>
      </div>
      <div className='overflow-x-auto no-scrollbar px-6 md:px-0 '>
        <p className='mb-10 text-lg font-semibold'> Your Favorite Cast</p>
        <div className="overflow-x-auto no-scrollbar">
  <div className="flex gap-4 w-max">
    {show.movie.casts.slice(0, 12).map((cast, index) => (
      <div key={index} className="w-20 flex-shrink-0  flex flex-col items-center">
        <img
          src={cast.profile_path}
          alt={cast.name}
          className="w-20 h-20 object-cover rounded-full mb-2"
        />
        <p className="text-xs font-medium text-center">{cast.name}</p>
      </div>
    ))}
  </div>
</div>
    </div>
      <DateSelected dateTime={show.dateTime} id={id}/>
      <div className='mt-36'>
      <p className='mb-10 text-lg font-semibold px-6 md:px-0'>You May Also Like </p>
      <div className='flex flex-wrap gap-8 max-sm:justify-center' >
          
          {dummyShowsData.slice(0,4).map((show)=>{
           return <MovieCard key={show._id} movie={show}/>
          })} 
          
        </div>
        <div className='flex justify-center mb-5'>
        <button onClick={()=>(scrollTo(0,0),navigate("/movies"))}className='w-34 bg-red-500 rounded-md  mt-18 h-10 cursor-pointer hover:bg-red-400'>Show More</button>
        </div>
        </div>
      </div>
  ):(
    <Loading/>
  )
}

export default MovieDetails
