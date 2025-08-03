// src/pages/MusicEventPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/MusicEvent.css";
import logo from "../images/logo.png";
import bannerImg from "../images/Concert.jpg";
import atifImg from "../images/atif.jpg";
import arijitImg from "../images/arijit.jpg";
import blackpinkImg from "../images/blackpink.jpg";
import MusicBookingPanel from "../pages/MusicBookingPanel";

const musicEvents = [
  {
    id: 1,
    name: "Atif Aslam",
    date: "2025-08-30",
    location: "Lahore Expo Center",
    price: 2000,
    image: atifImg,
  },
  {
    id: 2,
    name: "Arijit Singh",
    date: "2025-09-05",
    location: "Karachi Arena",
    price: 2500,
    image: arijitImg,
  },
  {
    id: 3,
    name: "BLACKPINK",
    date: "2025-10-01",
    location: "Gaddafi Stadium, Lahore",
    price: 3000,
    image: blackpinkImg,
  },
];

export default function MusicEventPage() {
  const [showPanel, setShowPanel] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // ✅ Fix added here: scrollToHowItWorks function
  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    const day = d.toLocaleDateString("en-US", { weekday: "long" });
    return `${dateStr} (${day})`;
  };

  return (
    <div className="music-event-page">
      {/* ✅ Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} className="logo-img" alt="Eventify Logo" />
          <span className="brand-name">Eventify</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse-events">Browse Events</Link>
          <a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>
            How it Works
          </a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="auth-buttons">
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="signup-btn">Signup</button>
          </Link>
        </div>
      </header>

      {/* Hero section */}
      <div className="music-hero" style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1>🎵 Explore Upcoming Music Events</h1>
      </div>

      <h2 className="available-heading1">Available Events</h2>

      {/* Event cards */}
      <div className="music-card-grid">
        {musicEvents.map((event) => (
          <div className="music-card" key={event.id}>
            <img src={event.image} alt={event.name} className="artist-img" />
            <div className="card-body">
              <h2>{event.name}</h2>
              <p>📅 {formatDate(event.date)}</p>
              <p>📍 {event.location}</p>
              <p>🎫 Ticket: Rs. {event.price}</p>
              <button
                className="music-btn"
                onClick={() => {
                  setSelectedEvent(event);
                  setShowPanel(true);
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Side panel */}
      {showPanel && selectedEvent && (
        <MusicBookingPanel
          event={selectedEvent}
          onClose={() => {
            setShowPanel(false);
            setSelectedEvent(null);
          }}
        />
      )}

      {/* ✅ Footer with scroll fix */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h3>Eventify</h3>
            <p>Your gateway to unforgettable events and workshops.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/browse-events">Events</Link></li>
              <li>
                <a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>
                  How it Works
                </a>
              </li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Account</h4>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><a href="#">My Bookings</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>Email: support@eventify.com</p>
            <p>Phone: +92 (305) 1235678</p>
            <p>Location: GIFT University, Gujranwala</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
