import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-address">
          <h4>Address:</h4>
          <p>Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
        </div>
        <div className="contact-phone">
          <h4>Phone:</h4>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="contact-email">
          <h4>Email:</h4>
          <p>info@springdale.edu</p>
        </div>
      </div>
      <div className="contact-form">
        <h4>Contact Form:</h4>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
      <div className="map-container">
        <h4>Find Us on Google Maps:</h4>
        <iframe
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.039127702092!2d-122.41941848468126!3d37.77492977975961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a5c5c5f7f%3A0x2d028a92f4a8d0!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1614149243967!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
