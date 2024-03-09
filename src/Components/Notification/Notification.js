import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';

const Notification = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [doctorData, setDoctorData] = useState(null);
  const [appointmentData, setAppointmentData] = useState(null);
  const [showNotification, setShowNotification] = useState(false); // State variable to determine when to show the notification

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('email');
    const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
    const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

    if (storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }

    if (storedDoctorData) {
      setDoctorData(storedDoctorData);
    }

    if (storedAppointmentData) {
      setAppointmentData(storedAppointmentData);
      setShowNotification(true); // Show the notification once appointment data is retrieved
    }
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      {children}
      {isLoggedIn && showNotification && appointmentData && (
        <div className="notification-container"> {/* Container div with appropriate CSS styles */}
          <div className="appointment-card">
            <div className="appointment-card__content">
              <h3 className="appointment-card__title">Appointment Details</h3>
              <p className="appointment-card__message">
                <strong>Doctor:</strong> {doctorData?.name}
              </p>
              <p className="appointment-card__message">
                <strong>User:</strong> {username}
              </p>
              <p className="appointment-card__message">
                <strong>Date:</strong> {appointmentData.date}
              </p>
              <p className="appointment-card__message">
                <strong>Time:</strong> {appointmentData.time}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
