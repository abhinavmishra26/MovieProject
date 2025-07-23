import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets';
import BlurCircle from '../Components/BlurCircle';
import timeformate from '../lib/timeFormate';
import { dateFormate } from '../lib/dateFormate';


const MyBookings = () => {
 const currency=import.meta.env.VITE_CURRENCY;
 const[bookings,setBookings]=useState([]);
 const [isLoading,setLoading]=useState(true);

 const getBookings=()=>{
  setBookings(dummyBookingData);
  setLoading(false);
 }
 
 useEffect(()=>{
  getBookings();
 },[])
console.log("hi",bookings);
  return !isLoading? (
    <div className='px-40 py-36 '>
      <BlurCircle top="100px" left='100px'/>
      <BlurCircle bottom='70px' left='900px'></BlurCircle>
      <h1 className='text-xl font-bold mb-10'>My Bookings</h1>
      <div className='flex flex-col gap-6 w-3/4'>
        {bookings.map((book,index)=>(
          <div key={index} className=' flex h-34 px-3 py-8 relative  bg-primary/8 border border-primary/20 gap-5 items-center rounded-md'>
            <img src={book.show.movie.backdrop_path} className='w-48 h-30 rounded-lg '></img>
            <div className=''>
            <h1 className='text-lg font-bold'>{book.show.movie.title}</h1>
            <p className='mb-10 text-gray-400 text-sm'>{timeformate(book.show.movie.runtime)}</p>
            <p className='text-md text-gray-400'>{dateFormate(book.show.showDateTime)}</p>
            </div>
            <div className='absolute right-0 w-48  mr-6 flex flex-col items-end '>
              <h1 className='text-xl mb-8'>{currency}{book.amount}</h1>
              <p className='mb-1'>Total Tickets:<span>{book.bookedSeats.length}</span></p>
              <p>Seat Number :<span>{book.bookedSeats.join(",")}</span></p>
            </div>
          </div>


        ))}
        
      </div>
    </div>
  ):(
    <h1>Loading</h1>
  )
}

export default MyBookings
