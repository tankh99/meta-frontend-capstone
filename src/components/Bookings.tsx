import React, { createContext, useEffect, useState } from 'react'
import { fetchAPI } from '../api'

const initialState: string[] = []

const BookingContext = createContext(
  initialState,
)

export default function Bookings({children}: any) {

  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  useEffect(() => {
    const init = async() => {
      const times = await fetchAPI()
      setAvailableTimes(times)
    }
    init()

  }, [])
  
  const updateTimes = async (date: Date) => {
    const updatedtimes = await fetchAPI(date)
    setAvailableTimes(updatedtimes)
  }

  return (
    <BookingContext.Provider value={
      availableTimes
    }>
      {children}
    </BookingContext.Provider>
  )
}


// reducer + hook