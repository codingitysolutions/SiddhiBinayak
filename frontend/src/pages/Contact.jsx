import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { addQuote } from '../utils/storage';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addQuote(formData);
    setIsSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Siddhi Binayak Catering. Contact us for quotes, bookings, and inquiries for your next event."
        url="https://www.siddhibinayak.in/contact"
      />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Contact Us</span></div>
          <h1>Contact <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Us</em></h1>
        </div>
      </div>
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="section-inner">
          <div className="contact-grid">
            <div className="reveal-left">
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">We Are Here to <em>Help You</em></h2>
              <div className="divider"></div>
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div><div className="contact-info-title">Our Location</div><div className="contact-info-text">Infront Of Z - Zone Apartment, Patia,<br />Bhubaneswar, Odisha 751024</div></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div><div className="contact-info-title">Phone</div><div className="contact-info-text">+91 9556077318<br />+91 9777089317</div></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">📧</div>
                <div><div className="contact-info-title">Email</div><div className="contact-info-text">siddhibinayakcateringservices@gmail.com</div></div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon">⏰</div>
                <div><div className="contact-info-title">Hours</div><div className="contact-info-text">Mon – Sun: 9:00 AM – 10:00 PM</div></div>
              </div>
              <div style={{ marginTop: '1rem' }}><div className="section-label">Follow Us</div>
              <div className="footer-social" style={{ marginTop: '0.8rem' }}>
                <a className="social-btn" href="/">f</a>
                <a className="social-btn" href="/">in</a>
                <a className="social-btn" href="/">▶</a>
                <a className="social-btn" href="/">📷</a>
              </div></div>
              <div className="map-embed" style={{ marginTop: '1.5rem' }}>
                <iframe src="https://maps.google.com/maps?q=Z%20-%20Zone%20Apartment,%20Patia,%20Bhubaneswar,%20Odisha%20751024&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="250" style={{ border: '0', borderRadius: '8px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
            <div className="reveal-right">
              <div className="contact-form-wrap">
                <div className="section-label">Get Free Quote</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', marginBottom: '1.5rem' }}>Send Us a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Message</em></h3>
                
                {isSubmitted ? (
                   <div style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeInUp 0.5s ease forwards' }}>
                     <div className="success-icon-animated" style={{ margin: '0 auto 1.5rem' }}>
                       <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                     </div>
                     <h3 style={{ fontSize: '1.5rem', color: 'var(--gold)', marginBottom: '1rem' }}>Message Sent!</h3>
                     <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.8' }}>
                       Thank you for reaching out. Our team will get back to you shortly.
                     </p>
                     <button className="btn-outline" style={{ marginTop: '2rem' }} onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ name: '', phone: '', eventType: '', eventDate: '', guestCount: '', message: '' });
                     }}>Send Another Message</button>
                   </div>
                ) : (
                   <form onSubmit={handleSubmit}>
                     <div className="form-group">
                       <label>Your Name</label>
                       <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                     </div>
                     <div className="form-group">
                       <label>Phone Number</label>
                       <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required />
                     </div>
                     <div className="form-group">
                       <label>Event Type</label>
                       <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                         <option value="">Select Event Type</option>
                         <option value="Wedding">Wedding</option>
                         <option value="Birthday">Birthday</option>
                         <option value="Corporate">Corporate</option>
                         <option value="Reception">Reception</option>
                       </select>
                     </div>
                     <div className="form-group">
                       <label>Event Date</label>
                       <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
                     </div>
                     <div className="form-group">
                       <label>Guest Count</label>
                       <input type="number" name="guestCount" value={formData.guestCount} onChange={handleChange} placeholder="Number of guests" required />
                     </div>
                     <div className="form-group">
                       <label>Your Message</label>
                       <textarea name="message" value={formData.message} onChange={handleChange} style={{ height: '100px' }} placeholder="Tell us about your event..." required></textarea>
                     </div>
                     <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Submit Now ✦</button>
                   </form>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
