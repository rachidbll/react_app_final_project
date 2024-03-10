import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/LandngPage/Landing_Page';
import SignUp from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import Consultation from './Components/InstantConsultationBooking/InstantConsultation';
import Notification from './Components/Notification/Notification'; // Import Notification component
import Reviews from './Components/ReviewForm/ReviewForm';


function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Notification> {/* Notification component wrapped around the Router */}
          <Routes>
          <Route path="/reviews" element={<Reviews />} />
            <Route path="/" element={<Layout />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/instant-consultation" element={<Consultation />} />
          </Routes>
        </Notification>
      </BrowserRouter>
    </div>
  );
}

export default App;
