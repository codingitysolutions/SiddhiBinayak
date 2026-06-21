import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <SEO 
        title="Wedding & Corporate Catering in Bhubaneswar" 
        description="Looking for the best catering service in Bhubaneswar? We specialize in wedding catering, corporate catering, birthday parties, and event management."
        keywords="wedding catering in bhubaneswar, corporate catering in bhubaneswar, birthday party catering in bhubaneswar, best caterers in bhubaneswar, event and catering services in bhubaneswar"
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
      <div className="reveal" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
        <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Best Catering Service in Bhubaneswar</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.8' }}>
          As the <strong>No. 1 catering service in Bhubaneswar</strong>, Siddhi Binayak Event & Catering provides an unforgettable culinary experience. From extravagant <strong>wedding catering</strong> to professional <strong>corporate catering</strong> and vibrant <strong>birthday party catering</strong>, we are your trusted partners for all <strong>event and catering services in Bhubaneswar</strong>. We offer premium yet <strong>affordable catering services</strong> tailored to your specific needs.
        </p>
      </div>
      <div className="services-page-grid reveal">
        <div className="service-big-card"><img src="/indian_marriage_function.png" alt="Marriage Function" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Marriage Function</h3><p>Complete catering and management for your special wedding day. We handle everything perfectly.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="/indian_birthday_party.png" alt="Birthday Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Birthday Party</h3><p>Make birthdays extra special with customized menus and complete event arrangements.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80" alt="Anniversary Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Anniversary Party</h3><p>Celebrate your years of togetherness with romantic setups and exquisite food menus.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80" alt="Kitty Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Kitty Party</h3><p>Delightful menus and elegant arrangements perfect for a fun-filled kitty party with friends.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&q=80" alt="Baby Shower Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Baby Shower Party</h3><p>Celebrate the new arrival with beautiful setups and delicious food for your guests.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80" alt="Corporate Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Corporate Party</h3><p>Professional catering for meetings, conferences, seminars and corporate events.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=600&q=80" alt="Private Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Private Party</h3><p>Exclusive catering and management for intimate and premium private gatherings.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600&q=80" alt="Mocktail Party" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Mocktail Party</h3><p>Refreshing and creative mocktail setups with professional bartenders and service.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=600&q=80" alt="Dry Catering" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Dry Catering</h3><p>High-quality food drop-off without full service, perfect for casual events and home parties.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&q=80" alt="Kitchen Utensil" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Kitchen Utensil</h3><p>Complete kitchen utensil rental and supply for large scale cooking and events.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1464347744102-11db6282f854?w=600&q=80" alt="Balloon Decoration" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Balloon Decoration</h3><p>Vibrant and creative balloon decorations to brighten up any celebration.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80" alt="Sound & Light" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Sound & Light</h3><p>Professional sound systems, DJ setups, and lighting for a spectacular event atmosphere.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
        <div className="service-big-card"><img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80" alt="Home Inauguration" /><div className="service-big-overlay"></div><div className="service-big-content"><h3>Home Inauguration</h3><p>Traditional and authentic catering for your Gruhapratistha and new home celebrations.</p><Link to="/booking" className="explore-btn">Book Now →</Link></div></div>
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
