import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Header } from './components/Header';  // Header is imported here

// Import the pages (make sure these paths are correct based on your file structure)
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ActivityPage from './pages/ActivityPage';
import EventPage from './pages/EventPage';
import FacilityPage from './pages/FacilityPage';
import FacultyPage from './pages/FacultyPage';
import ManagementPage from './pages/ManagementPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <BrowserRouter> {/* BrowserRouter is wrapped here */}
      <Header />  {/* Your Header component */}
      <Routes>     {/* Your routes go here */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/activities" element={<ActivityPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/facilities" element={<FacilityPage />} />
        <Route path="/faculties" element={<FacultyPage />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/donate" element={<DonatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
