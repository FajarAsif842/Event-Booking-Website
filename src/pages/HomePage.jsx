import React, { useRef } from "react";
import { Link } from "react-router-dom";
import events from "../events";
import "../style/HomePage.css";
import logo from "../images/logo.png";
import musicImg from "../images/music.jpg";
import artImg from "../images/art.jpg";
import businessImg from "../images/business.jpg";
import techImg from "../images/tech.jpg";
import litratureImg from "../images/Litrature.jpg";

export default function HomePage() {
  const bookSectionRef = useRef(null);
  const howItWorksRef = useRef(null);
  const contactRef = useRef(null); // 


  const handleScroll = () => {
    bookSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    howItWorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
  contactRef.current?.scrollIntoView({ behavior: "smooth" });
};


  return (
    <div className="homepage">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-left">
          <img src={logo} className="logo-img" alt="Eventify Logo" />
          <span className="brand-name">Eventify</span>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/browse-events">Browse Events</Link>
          <a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>How it Works</a>
          <a href="#">About</a>
          <a onClick={scrollToContact} style={{ cursor: "pointer" }}>Contact</a>

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

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover & Book Exciting Events</h1>
          <p>Join webinars, workshops, and exclusive sessions from around the world.</p>
          <button className="browse-btn" onClick={handleScroll}>
            Book an Event
          </button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" ref={howItWorksRef}>
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-card">
            <h3>1. Browse Events</h3>
            <p>Explore curated events based on your interests.</p>
          </div>
          <div className="step-card">
            <h3>2. View Details</h3>
            <p>Read full information including speakers and schedules.</p>
          </div>
          <div className="step-card">
            <h3>3. Register</h3>
            <p>Sign up instantly and receive confirmation emails.</p>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="categories" ref={bookSectionRef}>
        <h2>Event Categories</h2>
        <div className="category-grid">
          <div className="row">
            <div className="category-card">
              <img src={musicImg} alt="Music Event" />
              <h3>Music</h3>
              <Link to="/music-event">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>

            <div className="category-card">
              <img src={artImg} alt="Art Event" />
              <h3>Art</h3>
              <Link to="/art-events">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>

            <div className="category-card">
              <img src={businessImg} alt="Business Event" />
              <h3>Business</h3>
              <Link to="/business-events">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>
          </div>

          <div className="row">
            <div className="category-card">
              <img src={techImg} alt="Tech Event" />
              <h3>Tech</h3>
              <Link to="/tech-events">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>

            <div className="category-card">
              <img src={litratureImg} alt="Literature Event" />
              <h3>Literature</h3>
              <Link to="/litrature-events">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="upcoming">
        <h2>Upcoming Events</h2>
        <div className="event-grid">
          {events.slice(0, 3).map((event) => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p className="event-category">{event.category}</p>
              <p>{event.description}</p>
              <p>📅 {event.date} {event.time && `- ${event.time}`}</p>
              <p>📍 {event.location}</p>
              <Link to={`/events/${event.id}`}>
                <button className="details-btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/browse-events">
            <button className="primary-btn">View All Events</button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" ref={contactRef}>
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
              <li><a onClick={scrollToHowItWorks} style={{ cursor: "pointer" }}>How it Works</a></li>
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
