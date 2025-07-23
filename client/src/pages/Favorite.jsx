import React from 'react'
import { dummyShowsData } from '../assets/assets'
import MovieCard from '../Components/MovieCard'
import BlurCircle from '../Components/BlurCircle'


const Favorite = () => {
  return (
    dummyShowsData.length >0 ?(
     <div className='w-full   mt-44 lg:px-46  ' >

      <BlurCircle top='200px 'left='50px'/>
      <p className='text-lg mb-5'>Your Favorite Movies</p>
      <div className='   px-28 md:px-0 flex  gap-8  flex-wrap '>
        {dummyShowsData.map((movie)=>
        <MovieCard key={movie._id} movie={movie}/>
        )}
        <BlurCircle top='680px 'right='50px'/>
      </div>
      
    </div>):(
      <div className='w-full mt-44 px-46 flex justify-center items-center'>
      <h1 className='text-4xl text-gray-400'>No Favorite Movie Available</h1>
      </div>

    )
  )
}

export default Favorite
