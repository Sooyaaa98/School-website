import React from 'react'
import './Navbar.css'
import logo from '../../assets/img/images/logo2.png'

const Navbar = () => {
  return (
    <nav className='container'>
        <img src={logo} alt='School Logo' className='logo'/>
        <ul>
            <li><a href="#Hero">Home</a> </li>
            <li> <a href="#Academics">Academics</a></li>
            <li> <a href="#Title">About Us</a></li>
            <li> <a href="#Admissions">Admissions</a></li>
            <li> <a href="#facultyData">Faculty</a> </li>
            <li>Students</li>
            <li> Gallery</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar;