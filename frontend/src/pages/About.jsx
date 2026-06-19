import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <SEO 
        title="About Us" 
        description="Learn about Siddhi Binayak Catering, the best catering service in Bhubaneswar. We have been elevating special moments with exquisite culinary experiences and impeccable service since 2010."
        url="https://www.siddhibinayak.in/about"
      />
      <div className="page-hero">
    <div className="page-hero-inner">
      <div className="breadcrumb"><a href="/" >Home</a><span>›</span><span>About Us</span></div>
      <h1>About <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Us</em></h1>
    </div>
  </div>
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="about-grid">
        <div className="reveal-left">
          <img className="about-img" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80" alt="About Us" />
        </div>
        <div className="reveal-right">
          <div className="section-label">Our Story</div>
          <h2 className="section-title">The Best Catering Service<br /><em>in Bhubaneswar</em></h2>
          <div className="divider"></div>
          <p className="about-text" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.9', marginBottom: '1rem' }}>Siddhi Binayak Catering Service was founded with a simple belief – great food brings people together. We are passionate about creating delightful dining experiences for every event we cater.</p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.9' }}>From traditional flavors to modern cuisines, we ensure every dish leaves a lasting impression. Our team of experienced chefs and service professionals work tirelessly to ensure that each event is a success.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section" style={{ background: 'var(--dark)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="section-title">Our Mission, Vision <em>&amp; Values</em></h2>
      </div>
      <div className="mission-grid reveal">
        <div className="mission-card">
          <div className="mission-icon">🎯</div>
          <h3>Our Mission</h3>
          <p>To deliver exceptional catering services and memorable experiences to every client.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">👁️</div>
          <h3>Our Vision</h3>
          <p>To be the most trusted and best catering service in Bhubaneswar and beyond.</p>
        </div>
        <div className="mission-card">
          <div className="mission-icon">💎</div>
          <h3>Our Values</h3>
          <p>Quality, Hygiene, Customer Satisfaction and Innovation in everything we do.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>How We Work</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Our Working <em>Process</em></h2>
      </div>
      <div className="process-steps reveal">
        <div className="process-step"><div className="step-num">1</div><div className="step-title">Consultation</div><div className="step-desc">We understand your requirements for your event.</div></div>
        <div className="process-step"><div className="step-num">2</div><div className="step-title">Menu Planning</div><div className="step-desc">We plan the perfect menu within your budget.</div></div>
        <div className="process-step"><div className="step-num">3</div><div className="step-title">Preparation</div><div className="step-desc">Our team maintains highest hygiene & care.</div></div>
        <div className="process-step"><div className="step-num">4</div><div className="step-title">Execution</div><div className="step-desc">Seamless delivery and service at your event.</div></div>
      </div>
    </div>
  </section>
  <section className="section" style={{ background: 'var(--dark)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>Our Team</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Meet Our <em>Experts</em></h2>
      </div>
      <div className="team-grid reveal">
        <div className="team-card"><img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=300&q=80" alt="Chef" /><div className="team-info"><div className="team-name">Chef Sandip</div><div className="team-role">Head Chef</div></div></div>
        <div className="team-card"><img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80" alt="Manager" /><div className="team-info"><div className="team-name">Rajesh Kumar</div><div className="team-role">Event Manager</div></div></div>
        <div className="team-card"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" alt="Coordinator" /><div className="team-info"><div className="team-name">Priya Rani</div><div className="team-role">Event Coordinator</div></div></div>
        <div className="team-card"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" alt="Chef" /><div className="team-info"><div className="team-name">Deepak Rout</div><div className="team-role">Sous Chef</div></div></div>
      </div>
    </div>
  </section>
  <div className="cta-banner"><div className="section-inner"><div className="cta-inner"><div className="cta-text"><h2>Ready to Plan Your Event?</h2><p>Get in touch and we'll create something extraordinary together.</p></div><Link to="/booking" className="btn-dark">Book Now</Link></div></div></div>
  

    </>
  );
};

export default About;
