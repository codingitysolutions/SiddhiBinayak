import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <nav id="mainNav" className={isScrolled ? 'scrolled' : ''}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="Siddhi Binayak" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`} id="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/booking" className="nav-book">Book Now</Link>
        </div>
        <div 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
          id="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ display: 'none', cursor: 'pointer', fontSize: '1.8rem', color: 'var(--gold)', paddingLeft: '15px' }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
