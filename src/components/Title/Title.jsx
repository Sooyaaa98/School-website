import React from 'react'
import './Title.css'
import about_img from '../../assets/img/images/airfocus-f2C59x5uvn8-unsplash.jpg'
import play_icon from '../../assets/img/images2/play-icon.png'


const Title = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img} className='about-img'/>
        <img src={play_icon} className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className='about-right'>
            <h3>
                ABOUT OUR SCHOOL
            </h3>
            <h2>
                Nurturing Tomorrows Leaders Today
            </h2>
            <p><h5>History:</h5> Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.<br/>
                <h5>Vision:</h5> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.<br/>
                <h5>Mission:</h5>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.<br/>
                <h5>Principals Message:</h5> At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.<br/>
                 <h5> Infrastructure and Facilities:</h5>
                 <ul>
                   <li>State-of-the-art science and computer labs</li>
                    <li>Spacious and well-equipped classrooms</li> 
                     <li>Library with a vast collection of books and digital resources</li>
                      <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
                 </ul>
            </p>
        </div>

    </div>
  )
}

export default Title