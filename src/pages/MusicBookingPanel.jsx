import React, { useState } from 'react';
import '../style/MusicBookingPanel.css';

export default function MusicBookingPanel({ event, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const pricePerTicket = event.price;
  const totalPrice = quantity * pricePerTicket;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    // Show success popup
    setShowSuccess(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="booking-panel">
      <div className="booking-header">
        <h2>🎵 Book {event.name} Event</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Singer Name:
          <input type="text" value={event.name} readOnly />
        </label>
        <label>
          Location:
          <input type="text" value={event.location} readOnly />
        </label>
        <label>
          Tickets:
          <div className="ticket-counter">
            <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <span>{quantity}</span>
            <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
        </label>
        <label>
          Total Price:
          <input type="text" value={`Rs. ${totalPrice}`} readOnly />
        </label>

        <button type="submit" className="confirm-btn">Confirm Booking</button>
      </form>

      {showSuccess && (
        <div className="success-popup">
          ✅ Booking successfully confirmed!
        </div>
      )}
    </div>
  );
}
