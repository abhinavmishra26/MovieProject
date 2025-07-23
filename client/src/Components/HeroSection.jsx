import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, Clock10Icon } from 'lucide-react'
import {useNavigate} from "react-router-dom"

const HeroSection = () => {
  const navigate=useNavigate();
  return (
    <div className='h-screen w-screen max-md:bg-center max-md:bg-cover bg-[url("/backgroundImage.png")] bg-cover bg-center flex items-center '>

      <div className='w-[420px] md:w-[480px] relative md:left-38 max-md:left-8 relative top-10'>
      
      <img src={assets.marvelLogo} className='mb-4' ></img>
      <h1 className=' text-5xl md:text-7xl  font-semibold mb-6'>Gaurdians <br/>of the Galaxy</h1>
      <div className='flex gap-3 font-thin text-sm'>
      <p className='mb-6'>Action | Adventure |Sci-Fi</p>
      <Calendar1Icon className='' />2008
      <Clock10Icon className='text-2xl'/>2h 8m
      </div>
      <p>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.

</p>
<button className=' flex  justify-center  items-center w-38 bg-red-500 h-10 cursor-pointer hover:bg-red-400 rounded py mt-4' onClick={()=>navigate("/movies")}>Explore Movies
  <ArrowRight className='w-5'/>
</button>
      </div>

      
    </div>
  )
}

export default HeroSection
