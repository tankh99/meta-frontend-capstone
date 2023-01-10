import { Button, FormControl, FormErrorMessage, FormLabel, Input, Select, Stack, VStack } from '@chakra-ui/react'
import { format } from 'date-fns';
import { Form, Formik, FormikBag, FormikHelpers } from 'formik'
import React, { useReducer } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { fetchAPI } from '../api';
import MyButton from './MyButton';

enum Occasion {
  Birthday,
  Anniversary
}

interface BookingDetails {
  date: string,
  time: string,
  noOfGuests: number,
  occasion: Occasion

}

interface P {
  availableTimes: string[]
  onDateChange: any
}

export default function BookingForm({availableTimes, onDateChange}: P) {

  // const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (values: any, helpers: FormikHelpers<any>) => {
    // submitAPI(values)
    // const {setFieldValue} = helpers
    // setFieldValue("time", availableTimes[0])
    navigate("/booking-confirmation", {state: {...values}})
  }

  const test = async () => {
    const result = await fetchAPI(new Date())
    console.log(result)
  }

  return (
    <>
      {/* <button onClick={test}>Test</button> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}>
          {(formik) => {
            const {values, touched, errors, handleChange, getFieldProps} = formik;
            return (
              <Form>
                <VStack spacing={4}>
                <FormControl gap={20} isInvalid={touched.date && !!errors.date} isRequired>
                  <FormLabel>Reservation Date</FormLabel>
                  <Input
                    {...getFieldProps("date")}
                    type="date"
                    data-testid="date"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      onDateChange(date)
                      handleChange(e)
                    }}
                    />
                  <FormErrorMessage>{errors.date}</FormErrorMessage>
                  {/* <FormErrorMessage>{errors.date ? errors.date + "" : ""}</FormErrorMessage> */}
                </FormControl>
                <FormControl isInvalid={touched.time && !!errors.time} isRequired>
                  <FormLabel>Reservation Time</FormLabel>
                  <Select 
                    {...getFieldProps("time")}
                    data-testid="time"
                    >
                    {availableTimes.map((time: string) => {
                      return (
                        <option data-testid="time-option" key={time} value={time}>
                          {time}
                        </option>
                        )
                    })}
                  </Select>
                    <FormErrorMessage>{errors.time}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={touched.noOfGuests && !!errors.noOfGuests} isRequired>
                  <FormLabel>No of guests</FormLabel>
                  <Input
                    data-testid="noOfGuests"
                    type="number"
                    {...getFieldProps("noOfGuests")}
                    />
                    <FormErrorMessage>{errors.noOfGuests}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={touched.occasion && !!errors.occasion}>
                  <FormLabel>Occasion</FormLabel>
                  <Select {...getFieldProps("occasion")}>

                    <option value={Occasion.Birthday}>Birthday</option>
                    <option value={Occasion.Anniversary}>Anniversary</option>
                  </Select>
                  <FormErrorMessage>{errors.occasion}</FormErrorMessage>
                </FormControl>
                <MyButton type="submit" aria-label='On Click' className='w-full'>
                  Submit
                </MyButton>
                </VStack>
              </Form>
            )
          }}
      </Formik>
    </>
  )
}

const initialValues: BookingDetails = {
  date: format(new Date(), "yyyy-MM-dd"),
  time: '17:00',
  noOfGuests: 1,
  occasion: Occasion.Birthday
}

const validationSchema = Yup.object({
  date: Yup.date().required("Required"),
  noOfGuests: Yup.number()
    .min(1, "You cannot reserve a table for no one!")
    .max(10, "Maximum 10 guests per reservation")
})