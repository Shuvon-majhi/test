import React from 'react'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export default function Slot() {
  const slots = JSON.parse(localStorage.getItem("slots"));
  useEffect(() => {
    if (slots === null) {
      const slots = {
        '4pm-5pm': {},
        '5pm-6pm': {},
        '6pm-7pm': {},

      };
      localStorage.setItem("slots", JSON.stringify(slots));
    }
  }, [])

  const [name, setName] = useState('')
  const [number, setNumber] = useState()
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [age, setAge] = useState('')
  const [slotTime, setSlotTime] = useState('')
  const [date, setDate] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof slots[slotTime] === "undefined") {
      alert("Select a valid slot & date");
      return
    }
    
    const isBooked = slots[slotTime][date] ? true : false;

    if (isBooked) {
      alert("Slot is already booked");

    } else {
      // if slot is not booked then book the slot
      let slots = JSON.parse(localStorage.getItem("slots"));
      
      slots[slotTime][date] = { name, number, email, address, age, slotTime, date };
      localStorage.setItem("slots", JSON.stringify(slots));
      alert("Slot booked successfully");

      // go to booking page and with print data
      window.location.href = "/bookings";
    }

  }


  return (

    <div className='Container p-5'>
      <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
          <h3>Give some additional information of yours.</h3>
          <form onSubmit={handleSubmit} >
            <div className=" form-group">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Appoindmentnames"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                onChange={(e) => { setName(e.target.value) }}

              />
            </div>
            <div className=" form-group">
              <label htmlFor="number">Number</label>
              <input
                type="number"
                name="Appoindmentnumber"
                onChange={(e) => { setNumber(e.target.value) }}
                className="form-control"
                id="numberx"
                placeholder="Enter your phone number"

              />
            </div>
            <div className=" form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                onChange={(e) => { setEmail(e.target.value) }}
              />
            </div>

            <div className=" form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                id="address"
                placeholder="Enter your address"
                onChange={(e) => { setAddress(e.target.value) }}

              />
            </div>
            <div className=" form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                name="age"
                className="form-control"
                id="age"
                placeholder="Enter your age"
                onChange={(e) => { setAge(e.target.value) }}

              />
            </div>
            <div className=" form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                name="date"
                className="form-control"
                id="date"
                placeholder="Enter date"
                onChange={(e) => { setDate(e.target.value) }}

              />
            </div>
            <div className=" form-group">
              <label htmlFor="slot">Slot</label>
              <select
                name="slot"
                className="form-control"
                id="slot"
                onChange={(e) => { setSlotTime(e.target.value) }}
              >
                <option>select one</option>
                <option value="4pm-5pm">4:00 pm - 5:00 pm</option>
                <option value="5pm-6pm">5:00 pm - 6:00 pm</option>
                <option value="6pm-7pm">6:00 pm - 7:00 pm</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
            >
              Submit
            </button>
          </form>
        </div>
        <div className='col-3'></div>
      </div>
    </div>
  )
}
