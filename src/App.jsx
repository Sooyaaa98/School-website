import React, { useState } from 'react';
 import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Academics from './components/Academics/Academics'
import Title from './components/Title/Title'
import Gallery from './components/Gallery/gallery'
import FacultyData from './components/facultyData/facultyData'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Admissions from './components/Admissions/Admissions'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'


const App = () => {
  const [playState,setPlayState] = useState(false);

  return (
    <div>
        <Navbar/>
        <Hero/>
        <Academics/>
        <Title setPlayState={setPlayState}/>
        <Admissions/>
        <FacultyData/>
        <Gallery/>
        <ContactUs/>
        <Footer/>
        <VideoPlayer playState={playState} setPlayState={setPlayState}/>
        
      
    </div>
  )
}

export default App