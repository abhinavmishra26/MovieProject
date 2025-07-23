import React, { useState } from 'react'
import BlurCircle from './BlurCircle'
import ReactPlayer from 'react-player';
import { dummyTrailers } from '../assets/assets'
import { PlayCircleIcon } from 'lucide-react'

const TrailerSection = () => {
    const [currentTrailer,setCurrentTailer]=useState(dummyTrailers[0]);
    console.log(currentTrailer)

  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden'> 
        <p className='text-gray-300 font-medium text-lg max-w-[969px] mx-auto' >Trailer</p>
        <div className='relative mt-6'>
            <BlurCircle top='100px' right='-100px' />
            <ReactPlayer url={currentTrailer.videoUrl} controls={false} width="960px" height="540px" playing={false} className='mx-auto  max-w-full bg-amber-100'/>
            {/* <img src={currentTrailer.image}></img> */}
        
        </div>
        <div className='flex flex-wrap justify-center gap-8 mt-10 mb-10'>
           {dummyTrailers.map((trialer)=>(
            <div key={trialer.image}  className='relative '>
                <img src={trialer.image} alt='trailer' className='w-40 h-24   rounded-xl'></img>
                <PlayCircleIcon strokeWidth={1.6} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 font-bold' />
            </div>
           ))}

        </div>
      
    </div>
    
  )
}

export default TrailerSection
