// src/components/Reviews.js

import React from 'react';
import './ReviewForm.css'; // Import your external CSS file for additional styling

const Reviews = () => {
  // Sample doctors data (you can replace this with your actual data)
  const doctors = [
    { id: 1, name: 'Dr. John Doe', feedbackGiven: true },
    { id: 2, name: 'Dr. Jane Smith', feedbackGiven: false },
    // Add more doctor objects as needed
  ];

  const handleFeedback = (doctorId) => {
    // Handle feedback button click here (e.g., open feedback form)
    console.log(`Give feedback for doctor with ID: ${doctorId}`);
  };

  return (
    <div className="reviews-table">
      <table className="table">
        <thead>
          <tr>
            <th>Doctor Name</th>
            <th>Feedback Given</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.feedbackGiven ? 'Yes' : 'No'}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleFeedback(doctor.id)}
                  disabled={doctor.feedbackGiven}
                >
                  {doctor.feedbackGiven ? 'Feedback Given' : 'Give Feedback'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
