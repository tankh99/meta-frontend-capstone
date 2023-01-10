
/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom"
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import BookingForm from './BookingForm';

// Ignore the act() warning / error because it's a known bug with jest and Formik
describe("BookingForm", () => {

  it("updates new times on date change", async () => {
    const onDateChange = jest.fn()
    render(
      <BrowserRouter>
        <BookingForm availableTimes={["17:00"]} onDateChange={onDateChange}/>
      </BrowserRouter>
    )

    const dateInput = screen.getByTestId("date")

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1)
    fireEvent.change(dateInput, {target: {value: tomorrow}})
    await waitFor(() => {
      expect(onDateChange).toHaveBeenCalledTimes(1)
    })

  })

  it("validates min and max guests", async () => {
    render(
      <BrowserRouter>
        <BookingForm availableTimes={[]} onDateChange={jest.fn()}/>
      </BrowserRouter>
    )
    const submit = screen.getByRole("button")
    const noOfGuestsInput = screen.getByTestId("noOfGuests")
    
    const minError = screen.queryByText(/you cannot reserve a table for no one!/i)
    expect(minError).toBeNull()

    const maxError = screen.queryByText(/maximum 10 guests per reservation/i)
    expect(maxError).toBeNull()

    fireEvent.change(noOfGuestsInput, {target: {value: 0}})
    fireEvent.submit(submit)
    await waitFor(() => {
      const minError = screen.getByText(/you cannot reserve a table for no one!/i)
      expect(minError).toBeInTheDocument();
    })
    
    fireEvent.change(noOfGuestsInput, {target: {value: 11}})
    fireEvent.submit(submit)
    await waitFor(() => {
      const maxError = screen.getByText(/maximum 10 guests per reservation/i)
      expect(maxError).toBeInTheDocument();
    })
  })
})