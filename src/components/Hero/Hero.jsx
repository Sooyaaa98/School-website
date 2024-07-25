import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/img/images2/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
          <h1>Enter To Learn, Leave to Serve</h1>
          <p> At our school, we focus on nurturing both academic excellence and a sense of responsibility.
             We aim to inspire curiosity and critical thinking, preparing students to excel and make a 
             positive impact on society.</p>
             <button className='btn'>Explore more <img src={dark_arrow} alt='arrow' />  </button>
        </div>
    </div>
  )
}

export default Hero