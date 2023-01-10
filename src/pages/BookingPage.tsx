import { VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetchAPI } from '../api'
import BookingForm from '../components/BookingForm'

export const initialState = {
  "17:00": true,
  "18:00": true,
  "20:00": true,
  "21:00": true,
  "19:00": true,
  "22:00": true
}

// export const updateTimes = (state: any, action: any) => {
//   switch(action.type) {
//     case "new_date": {
//       return initialState
//     }
//     case "reserve": {
//       return {
//         ...state,
//         [action.payload]: false
//       }
//     }
//     default:
//       return state
//   }
// }

export default function BookingPage() {

  const [availableTimes, setAvailableTimes] = useState<string[]>([])

  useEffect(() => {

    const init = async () => {
      const initialTimes = await fetchAPI()
      setAvailableTimes(initialTimes)
    }
    init()
    
  }, [])

  return (
    <section className='py-8 max-w-md flex-col flex justify-center mx-auto'>
      <h1 className='text-4xl font-bold'>Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        onDateChange={async (date: Date) => {
          const newTimes = await fetchAPI(date)
          console.log(newTimes)
          setAvailableTimes(newTimes)
        }}
        />
    </section>
  )
}
