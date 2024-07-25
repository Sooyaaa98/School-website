import React from 'react';
import './facultyData.css';

const facultyData = [
  {
    name: 'John Doe',
    title: 'Principal',
    qualification: 'M.Ed',
    experience: '20 years of experience in educational administration',
  },
  {
    name: 'Jane Smith',
    title: 'Vice Principal',
    qualification: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
  },
  {
    name: 'Emily Johnson',
    title: 'English Teacher',
    qualification: 'M.A. in English',
    experience: '10 years of teaching experience',
  },
  {
    name: 'Michael Brown',
    title: 'Mathematics Teacher',
    qualification: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
  },
  {
    name: 'Sophia Davis',
    title: 'Science Teacher',
    qualification: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
  },
  {
    name: 'David Wilson',
    title: 'Computer Science Teacher',
    qualification: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
  },
];

const FacultyData = () => {
  return (
    <div className="faculty-container">
      <h2>Faculty Profiles</h2>
      <div className="faculty-grid">
        {facultyData.map((faculty, index) => (
          <div key={index} className="faculty-card">
            <h3>{faculty.name}</h3>
            <h4>{faculty.title}</h4>
            <p>{faculty.qualification}</p>
            <p>{faculty.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyData;
