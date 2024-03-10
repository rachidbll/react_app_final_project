import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css'; // Import your external CSS file for additional styling

const Notification = ({ children }) => {
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [appointmentData, setAppointmentData] = useState(null);

  useEffect(() => {
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setAppointmentBooked(true);
    }
  }, []);

  const handleCancelAppointment = () => {
    localStorage.removeItem('appointmentData');
    setAppointmentData(null);
    setAppointmentBooked(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {appointmentBooked && (
        <div className="notification">
          <legend>Appointment details</legend>
          <p>Hey {appointmentData.name}, your appointment with {appointmentData.doctorName}, {appointmentData.speciality}, {appointmentData.experience} years of experience, is booked on {appointmentData.selectedDate} at {appointmentData.selectedSlot}.</p>
          <p>Your appointment with {appointmentData.doctorName} is booked.</p>
          <button className="btn cancel-button" onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
