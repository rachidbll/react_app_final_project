import React, { useState, useEffect } from 'react';
import './ReviewForm.css';

const ReviewsTable = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem('appointmentData'));

    if (Array.isArray(storedDoctors)) {
      setDoctors(storedDoctors);
    } else if (storedDoctors) {
      // Convert to array if not already an array
      setDoctors([storedDoctors]);
    }
  }, []);

  return (
    <div className='flex-hero'>
      <h2>Reviews</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Doctor Name</th>
            <th scope="col">Doctor Speciality</th>
            <th scope="col">Give Feedback</th>
            <th scope="col">Given Feedback</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => (
            <tr key={doctor.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td>{doctor.id}</td>
              <td>{doctor.doctorName}</td>
              <td>{doctor.speciality}</td>
              <td>
                <button className="btn btn-primary">Give Feedback</button>
              </td>
              <td>{doctor.feedbackGiven ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default ReviewsTable;
