import React from 'react'
import Navbar from './Components/Navbar'
import Home from "./pages/Home";
import Movies from "./pages/Movies"
import SeatLayout from "./pages/SeatLayout"
import MovieDetails from "./pages/MovieDetails"
import Favorite from "./pages/Favorite"
import MyBookings from "./pages/MyBookings"
import { Route,Routes, useLocation } from 'react-router-dom';
import Footer from './Components/Footer';
import { Toaster } from 'react-hot-toast';

import Layout from './pages/Admin/Layout';
import Dashboard from './pages/Admin/Dashboard';
import ListBookings from './pages/Admin/ListBookings';
import AddShows from './pages/Admin/AddShows';
import ListShows from './pages/Admin/ListShows';

const App = () => {
  const isAdmin=useLocation().pathname.startsWith("/admin");
  return (
    <>
    <Toaster/>
    <div>
      {!isAdmin &&  <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/movies' element={<Movies/>}/>
          <Route path='/movies/:id' element={<MovieDetails/>}/>
           <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
           <Route path='/my-bookings' element={<MyBookings/>}/>
           <Route path='/favorite' element={<Favorite/>}/>
           <Route path='/admin/*' element={<Layout/>}>
           <Route path='' element={<Dashboard/>}/>
           <Route path='add-shows'element={<AddShows/>}/>
           <Route path='list-bookings' element={<ListBookings/>}/>
           <Route path='list-shows' element={<ListShows/>}/>

           </Route>
      </Routes>
      {!isAdmin &&  <Footer/>}
    </div>
    </>
  )
}

export default App
