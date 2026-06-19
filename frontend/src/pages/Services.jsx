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
        url="https://siddhibinayakcatering.com/services"
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
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=600&q=80" alt="Wedding" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Wedding Catering</h3><p>Make your wedding day unforgettable with our delicious menu and impeccable service. We handle everything from starters to desserts.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" alt="Corporate" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Corporate Catering</h3><p>Professional catering for meetings, conferences, seminars and corporate events with a wide variety of menu options.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" alt="Birthday" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Birthday Catering</h3><p>Delicious food to make your birthday celebrations extra special with customized menus for all age groups.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" alt="Outdoor" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Outdoor Catering</h3><p>From venues to outdoor events, we serve everywhere with perfection in taste and presentation.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" alt="Reception" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Reception Catering</h3><p>A grand reception deserves grand food. Let us create an extraordinary dining experience for your guests.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80" alt="Festival" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Festival Catering</h3><p>Celebrate festivals with traditional and modern cuisines and exceptional service for all occasions.</p><Link to="/services" className="explore-btn">Explore More →</Link></div></div>
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
