import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import BrowseEventsPage from './pages/BrowseEventsPage';
import EventDetailPage from './pages/EventDetailPage';
import MusicEventPage from './pages/MusicEventPage';
import TechBookingEvent from './pages/TechBookingEvent';
import ArtBookingEvent from './pages/ArtBookingEvent'; // ✅ Add this line
import BusinessBookingEvent from './pages/BusinessBookingEvent';
import LitratureBookingEvent from './pages/LitratureBookingEvent';
import './style/HomePage.css';
import './style/Auth.css';
import './style/global.css';
import './style/BrowseEvents.css';
import './style/EventDetail.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/browse-events" element={<BrowseEventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/music-event" element={<MusicEventPage />} /> {/* ✅ Added */}
        <Route path="/art-events" element={<ArtBookingEvent />} />
        <Route path="/tech-events" element={<TechBookingEvent/>} />
        <Route path="/business-events" element={<BusinessBookingEvent/>} />
        <Route path="/litrature-events" element={<LitratureBookingEvent/>} />
      </Routes>
    </Router>
  );
}

export default App;
