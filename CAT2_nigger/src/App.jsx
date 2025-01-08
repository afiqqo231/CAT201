// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import useScreenSize from './useScreenSize';
import './App.css'; // Assume you have a CSS file for styling

// Header Component
const Header = () => (
  <header className="header">
    <h1>Explore the World</h1>
    <nav>
      <ul className="nav-links">
        <li><a href="#destinations">Destinations</a></li>
        <li><a href="#packages">Packages</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

// Hero Section Component
const HeroSection = () => (
  <section className="hero">
    <h2>Your Adventure Awaits</h2>
    <p>Discover breathtaking destinations and unforgettable experiences.</p>
    <button>Plan Your Trip</button>
  </section>
);

// Destinations Component
const Destinations = () => (
  <section id="destinations" className="destinations">
    <h2>Top Destinations</h2>
    <div className="destination-grid">
      <div className="destination-card">
        <img src="/images/beach.jpg" alt="Beach" />
        <h3>Tropical Beaches</h3>
      </div>
      <div className="destination-card">
        <img src="/images/mountain.jpg" alt="Mountain" />
        <h3>Majestic Mountains</h3>
      </div>
      <div className="destination-card">
        <img src="/images/city.jpg" alt="City" />
        <h3>Vibrant Cities</h3>
      </div>
    </div>
  </section>
);

// Packages Component
const Packages = () => (
  <section id="packages" className="packages">
    <h2>Travel Packages</h2>
    <ul>
      <li>Weekend Getaway - $499</li>
      <li>Family Adventure - $1299</li>
      <li>Luxury Retreat - $2999</li>
    </ul>
  </section>
);

// Contact Component
const Contact = () => (
  <section id="contact" className="contact">
    <h2>Contact Us</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Submit</button>
    </form>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2025 Explore the World. All rights reserved.</p>
  </footer>
);

// Main App Component
const App = () => {
    const { width } = useScreenSize();
    return(
  <div className="app">
    <Header />
    <HeroSection />
    <Destinations />
    <Packages />
    <Contact />
    <Footer />
  </div>
    );
};

// Render the App Component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App