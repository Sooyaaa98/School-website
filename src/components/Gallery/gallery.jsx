import React from 'react'
import './gallery.css'
import img1 from '../../assets/img/images/michelle-moody-WkY8KhEFXak-unsplash.jpg'
import img2 from '../../assets/img/images/ivan-aleksic-PDRFeeDniCk-unsplash.jpg'
import img3 from '../../assets/img/images/janko-ferlic-sfL_QOnmy00-unsplash.jpg'


const Gallery = () => {
  return (
    <div className='campus'>
        <h4>GALLERY <hr/></h4>
        <h5> Our Campus Photos</h5>
        <div className='campus-photos'>
            <img src={img1} alt=''/>
            <img src={img2} alt=''/>
            <img src={img3} alt=''/>
        </div>
    </div>
  )
}

export default Gallery