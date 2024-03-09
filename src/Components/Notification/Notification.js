import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [appointmentBooked, setAppointmentBooked] = useState(false);
  const [doctorName, setDoctorName] = useState("");

  useEffect(() => {
    const storedAppointmentData = JSON.parse(localStorage.getItem('appointmentData'));

    if (storedAppointmentData) {
      setDoctorName(storedAppointmentData.doctorName);
      setAppointmentBooked(true);
    }
  }, []);

  const handleCancelAppointment = () => {
    localStorage.removeItem('appointmentData');
    setDoctorName("");
    setAppointmentBooked(false);
  };

  return (
    <div>
      <Navbar />
      {children}
      {appointmentBooked && (
        <div className="notification">
          <p>Your appointment with {doctorName} is booked.</p>
          <button onClick={handleCancelAppointment}>Cancel Appointment</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
