import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
      <p>Thank you for visiting our page!</p>
    </footer>
  );
};

export default Footer;
