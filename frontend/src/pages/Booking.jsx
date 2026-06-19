import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link, useLocation } from 'react-router-dom';
import { addBooking, getPackages } from '../utils/storage';

const Booking = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialPackage = queryParams.get('package') || 'Custom';

  const [packages, setPackages] = useState([]);
  const [step, setStep] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState('Wedding');
  const [formData, setFormData] = useState({
    packageType: initialPackage,
    guests: '',
    date: '',
    venue: '',
    fullname: '',
    phone: '',
    email: ''
  });

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await getPackages();
      setPackages(data);
    };
    fetchPackages();
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (step === 3) {
      await addBooking({ eventType: selectedEvent, ...formData });
      setStep(4);
    }
  };

  return (
    <>
      <SEO 
        title="Book an Event" 
        description="Plan your event with us. Book our premium catering services effortlessly online and let us make your celebration memorable."
        url="https://www.siddhibinayak.in/booking"
      />
      <div className="page-hero" style={{ padding: '120px 0 60px' }}>
        <div className="page-hero-inner">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Book Event</span></div>
          <h1>Plan Your <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Event</em></h1>
        </div>
      </div>
      
      <section className="booking-split-section">
        <div className="booking-split-image">
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80" alt="Premium Event Setup" />
          <div className="booking-image-overlay">
            <h2>Crafting Unforgettable <br/><em style={{color:'var(--gold)', fontStyle:'italic'}}>Moments</em></h2>
            <p>Your vision, flawlessly executed. Experience world-class catering tailored precisely to your unique celebration.</p>
            
            <div className="booking-features">
              <div className="bf-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Bespoke Menus</span>
              </div>
              <div className="bf-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Premium Service</span>
              </div>
              <div className="bf-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Exquisite Decor</span>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-split-form-container">
          <div className="glass-form-wrapper reveal">
            <div className="booking-progress-modern">
              <div className="progress-line">
                <div className="progress-line-fill" style={{ width: step === 1 ? '0%' : step === 2 ? '50%' : '100%' }}></div>
              </div>
              <div className={`progress-dot ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className={`progress-dot ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className={`progress-dot ${step >= 3 ? 'active' : ''}`}>3</div>
            </div>

            <form className="booking-form-modern" onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-step active" style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                  <h3 className="form-step-title">What type of event are you planning?</h3>
                  <div className="event-types-modern">
                    <div className={`event-card-modern ${selectedEvent === 'Wedding' ? 'selected' : ''}`} onClick={() => setSelectedEvent('Wedding')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="8" cy="12" r="5"></circle><circle cx="16" cy="12" r="5"></circle></svg>
                      <div>Wedding</div>
                    </div>
                    <div className={`event-card-modern ${selectedEvent === 'Corporate' ? 'selected' : ''}`} onClick={() => setSelectedEvent('Corporate')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><path d="M9 9h6v6H9z"></path></svg>
                      <div>Corporate</div>
                    </div>
                    <div className={`event-card-modern ${selectedEvent === 'Birthday' ? 'selected' : ''}`} onClick={() => setSelectedEvent('Birthday')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                      <div>Birthday</div>
                    </div>
                    <div className={`event-card-modern ${selectedEvent === 'Other' ? 'selected' : ''}`} onClick={() => setSelectedEvent('Other')}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                      <div>Other</div>
                    </div>
                  </div>
                  <button type="button" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem' }} onClick={() => setStep(2)}>Continue to Details →</button>
                </div>
              )}

              {step === 2 && (
                <div className="form-step active" style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                  <h3 className="form-step-title">Tell us about the event</h3>
                  
                  <div className="floating-input-group">
                    <select id="packageType" value={formData.packageType} onChange={handleChange} required style={{ width: '100%', color: 'var(--white)', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', outline: 'none', padding: '16px 16px 8px', fontFamily: 'Poppins, sans-serif', fontSize: '16px', transition: 'all 0.3s ease', appearance: 'none', cursor: 'pointer' }}>
                      <option value="Custom" style={{ color: '#333' }}>Custom Package</option>
                      {packages.map(pkg => (
                        <option key={pkg.id} value={pkg.name} style={{ color: '#333' }}>{pkg.name} - ₹{pkg.price}/plate</option>
                      ))}
                    </select>
                    <label htmlFor="packageType" style={{ color: 'var(--gold)', top: '4px', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Selected Package</label>
                  </div>

                  <div className="floating-input-group">
                    <input type="number" id="guests" value={formData.guests} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="guests">Estimated Number of Guests</label>
                  </div>
                  
                  <div className="floating-input-group">
                    <input type="date" id="date" value={formData.date} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="date">Date of Event</label>
                  </div>
                  
                  <div className="floating-input-group">
                    <input type="text" id="venue" value={formData.venue} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="venue">Venue or Location</label>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                    <button type="button" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(1)}>← Back</button>
                    <button type="button" className="btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={() => {
                      if(formData.guests && formData.date && formData.venue) setStep(3);
                      else alert('Please fill out all fields to continue.');
                    }}>Final Step →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-step active" style={{ animation: 'fadeInUp 0.5s ease forwards' }}>
                  <h3 className="form-step-title">How can we reach you?</h3>
                  
                  <div className="floating-input-group">
                    <input type="text" id="fullname" value={formData.fullname} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="fullname">Full Name</label>
                  </div>
                  
                  <div className="floating-input-group">
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  
                  <div className="floating-input-group">
                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder=" " required />
                    <label htmlFor="email">Email Address</label>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
                    <button type="button" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }} onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="btn-primary" style={{ flex: 2, justifyContent: 'center' }}>Submit Request ✦</button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="form-step active" style={{ textAlign: 'center', padding: '3rem 0', animation: 'fadeInUp 0.5s ease forwards' }}>
                  <div className="success-icon-animated">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  </div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--gold)', marginBottom: '1rem' }}>Request Received!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', lineHeight: '1.8' }}>
                    Thank you for choosing Siddhi Binayak. Your dream <strong>{selectedEvent}</strong> event is one step closer to reality. Our specialist will contact you within 24 hours.
                  </p>
                  <button type="button" className="btn-outline" onClick={() => { 
                    setStep(1); 
                    setSelectedEvent('Wedding'); 
                    setFormData({guests:'', date:'', venue:'', fullname:'', phone:'', email:''});
                  }}>Plan Another Event</button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
