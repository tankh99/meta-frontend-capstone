import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

export default function BookingConfirmationPage() {
  const location = useLocation();
  if (!location.state) return null;
  const {date, noOfGuests, time, occasion} = location.state
  return (
    <div className='max-w-md mx-auto py-8 flex flex-col justify-center items-center'>
      <FaCheckCircle color='green' fontSize={48} />
      <h1 className='font-bold text-4xl'>Success!</h1>
      <p className='py-4 text-center'>
      Your reservation has been successfully made. An email confirmation has also been sent to you. 
      We look forward to seeing you at the Little Lemon on {date} at {time}.
      </p>
      <Link to="/">
        <button className='hover:bg-primaryAltAccent bg-primaryAlt rounded px-4 py-2'>
          Back to home
        </button>
      </Link>
    </div>
  )
}
