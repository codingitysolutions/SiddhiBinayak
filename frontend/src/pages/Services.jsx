import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services" 
        description="Discover our range of catering services including Wedding, Corporate, Birthday, Reception, and Outdoor Catering in Bhubaneswar."
        keywords="wedding catering Bhubaneswar, corporate catering, birthday party caterers"
        url="https://www.siddhibinayak.in/services"
      />
      <div className="page-hero">
    <div className="page-hero-inner">
      <div className="breadcrumb"><a href="/" >Home</a><span>›</span><span>Services</span></div>
      <h1>Our Catering <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Services</em></h1>
    </div>
  </div>
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="services-page-grid reveal">
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80" alt="Marriage Function" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Marriage Function</h3><p>Complete catering and management for your special wedding day. We handle everything perfectly.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1530103862676-de889d4af7fc?w=600&q=80" alt="Birthday Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Birthday Party</h3><p>Make birthdays extra special with customized menus and complete event arrangements.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" alt="Kitty Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Kitty Party</h3><p>Delightful menus and elegant arrangements perfect for a fun-filled kitty party with friends.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80" alt="Baby Shower Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Baby Shower Party</h3><p>Celebrate the new arrival with beautiful setups and delicious food for your guests.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" alt="Corporate Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Corporate Party</h3><p>Professional catering for meetings, conferences, seminars and corporate events.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&q=80" alt="Private Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Private Party</h3><p>Exclusive catering and management for intimate and premium private gatherings.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80" alt="Mocktail Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Mocktail Party</h3><p>Refreshing and creative mocktail setups with professional bartenders and service.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" alt="Dry Catering" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Dry Catering</h3><p>High-quality food drop-off without full service, perfect for casual events and home parties.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1556910103-1c02745a872f?w=600&q=80" alt="Kitchen Utensil" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Kitchen Utensil</h3><p>Complete kitchen utensil rental and supply for large scale cooking and events.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1502631155828-9d65c77e5c88?w=600&q=80" alt="Balloon Decoration" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Balloon Decoration</h3><p>Vibrant and creative balloon decorations to brighten up any celebration.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1470229722913-7c092bcebf4b?w=600&q=80" alt="Sound & Light" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Sound & Light</h3><p>Professional sound systems, DJ setups, and lighting for a spectacular event atmosphere.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1604015745163-585d688fc91c?w=600&q=80" alt="Home Inauguration" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Home Inauguration</h3><p>Traditional and authentic catering for your Gruhapratistha and new home celebrations.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" alt="After Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>After Party</h3><p>Keep the celebration going with our specialized late-night catering and party management.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
      </div>
      <div className="custom-cta reveal">
        <div><h3>Need Custom Catering for Your Event?</h3><p>We are here to turn your idea into reality. Contact us for a custom quote.</p></div>
        <Link to="/contact" className="btn-primary">GET FREE QUOTE ✦</Link>
      </div>
    </div>
  </section>
  <div className="cta-banner"><div className="section-inner"><div className="cta-inner"><div className="cta-text"><h2>Ready to Get Started?</h2><p>Book our services now and get an exclusive offer.</p></div><Link to="/booking" className="btn-dark">Book Now</Link></div></div></div>
  

    </>
  );
};

export default Services;
