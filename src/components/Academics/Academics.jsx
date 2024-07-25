import React from 'react'
import './Academics.css'
import schoolImage  from  '../../assets/img/images/anita-jankovic-162ppyjclxM-unsplash.jpg'

const Academics = () => {
  return (
    <div className='academics'>
        <img src={schoolImage} alt='school image' />
        <div className='academic'>
        <h4>Curriculum:</h4>
          <h5>Primary (Grades 1-5):</h5>
          <p> English, Mathematics, Science, Social Studies, Art, Physical Education</p>
          <h5>Secondary (Grades 6-10):</h5>
          <p> English, Mathematics, Science (Physics, Chemistry, Biology),
           Social Studies, Computer Science, Physical Education, Art</p>
          <h5>Senior Secondary (Grades 11-12):</h5> 
           <h5>Science Stream:</h5>
           <p>Physics, Chemistry, Biology, Mathematics, Computer Science, English</p> 
           <h5>Commerce Stream:</h5>
           <p>Accountancy, Business Studies, Economics, Mathematics, English</p> 
        <h4>Teaching Methodologies:</h4>
         <p> We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
        <h4> Educational Resources:</h4> 
         <p>Digital classrooms, interactive learning modules, and access to online educational platforms.</p>

        </div>

    </div>
  )
}

export default Academics