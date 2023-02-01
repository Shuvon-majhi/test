import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


import Home from '../components/Home';
import Register from '../components/Register';
import Password from '../components/Password';
import Slot from '../components/Slot';
import Bookings from '../components/Bookings';
import Nav from './Nav'


class Header extends Component {

  render() {
    return (
      <BrowserRouter>
        <Nav/>
        <div className='mt-3'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password" element={<Password />} />
            <Route path="/bookingslot" element={<Slot />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </div>
      </BrowserRouter>

    )
  }
}

export default Header