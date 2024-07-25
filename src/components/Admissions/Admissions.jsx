import React from 'react';
import './Admissions.css'; 

const Admissions = () => {
  return (
    <div className="admissions">
      <h2>Admissions</h2>
      <div className="admissions-content">
        <div className="admissions-section">
          <h3>Process</h3>
          <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        </div>
        <div className="admissions-section">
          <h3>Criteria</h3>
          <p>Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
        </div>
        <div className="admissions-section">
          <h3>Important Dates</h3>
          <ul>
            <li><strong>Admission Form Availability:</strong> March 1st</li>
            <li><strong>Last Date for Submission:</strong> March 31st</li>
            <li><strong>Entrance Test:</strong> April 15th</li>
            <li><strong>Announcement of Results:</strong> April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
