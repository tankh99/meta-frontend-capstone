import React, { useEffect, useReducer, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { fetchAPI } from './api';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookingConfirmationPage from './pages/BookingConfirmationPage';
import BookingPage from './pages/BookingPage';
import HomePage from './pages/HomePage';

function App() {

  
  // const [availableTimes, setAvailableTimes] = useState<string[]>([])

  // useEffect(() => {
  //   const init = async() => {
  //     const times = await fetchAPI()
  //     setAvailableTimes(times)
  //   }
  //   init()

  // }, [])
  
  // const updateTimes = async (date: Date) => {
  //   const updatedtimes = await fetchAPI(date)
  //   setAvailableTimes(updatedtimes)
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/booking" element={<BookingPage/>}/>
            <Route path="/booking-confirmation" element={<BookingConfirmationPage  />}/>
          </Routes>
        </main>
        <Footer/>
      </BrowserRouter>
      {/* <Main/> */}

    </div>
  );
}

export default App;
