import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import CountUp from '../components/CountUp';
import { Link } from 'react-router-dom';
import { addQuote, getTestimonials } from '../utils/storage';

const Home = () => {
  const [activeMoment, setActiveMoment] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: '',
    eventDate: '',
    guestCount: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };
    fetchTestimonials();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    await addQuote(formData);
    setShowSuccess(true);
    setFormData({ name: '', phone: '', eventType: '', eventDate: '', guestCount: '', message: '' });
    setTimeout(() => setShowSuccess(false), 4000);
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Looking for the best catering service in Bhubaneswar? Siddhi Binayak Catering provides premium food for weddings, corporate events, and parties. We make every celebration delicious."
        keywords="best catering service in bhubaneswar, best bhubaneswar caterers, Siddhi Binayak Catering, wedding catering bhubaneswar, top caterers in odisha"
        url="https://www.siddhibinayak.in"
        schema={{
          "@context": "https://schema.org",
          "@type": "FoodEstablishment",
          "name": "Siddhi Binayak Catering",
          "image": "https://www.siddhibinayak.in/logo.png",
          "description": "Ranked as the best catering service in Bhubaneswar, providing premium catering for weddings, corporate events, and parties in Odisha.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Infront Of Z - Zone Apartment, Patia",
            "addressLocality": "Bhubaneswar",
            "addressRegion": "Odisha",
            "postalCode": "751024",
            "addressCountry": "IN"
          },
          "telephone": "+919556077318",
          "servesCuisine": "Indian, Continental, Multi-Cuisine"
        }}
      />
      {/* HERO */}
  <section className="hero">
    <div className="hero-bg"></div>
    <div className="hero-overlay"></div>
    <div className="hero-content">
      <div>
        <div className="hero-badge">✦ The Best Catering Service in Bhubaneswar</div>
        <h1 className="hero-title">
          <span className="animate-word">Making Every</span>{' '}
          <span className="animate-word delay-1">Celebration</span><br />
          <em className="animate-word delay-2">Delicious &</em>{' '}
          <em className="animate-word delay-3">Memorable</em>
        </h1>
        <p className="hero-desc">From intimate gatherings to grand celebrations, we serve exceptional food with perfect taste and quality.</p>
        <div className="hero-btns">
          <a href="tel:+919556077318" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.78 19.78 0 0 1 1.61 4.9 2 2 0 0 1 3.59 2.72h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.24a16 16 0 0 0 6.85 6.85l.89-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            Call Now
          </a>
          <Link to="/contact" className="btn-outline">Get Free Quote</Link>
        </div>
        <div className="hero-stats">
          <div className="hero-stat"><CountUp end={5000} /><span>Events Served</span></div>
          <div className="hero-stat"><CountUp end={3000} /><span>Happy Clients</span></div>
          <div className="hero-stat"><CountUp end={1500} /><span>Wedding Caterings</span></div>
          <div className="hero-stat"><CountUp end={20} /><span>Years Experience</span></div>
        </div>
        <Link to="/testimonials" className="clients-row clients-link" style={{ marginTop: '2rem', display: 'inline-flex', textDecoration: 'none' }}>
          <div className="client-avatars">
            <div className="client-avatar">R</div>
            <div className="client-avatar">P</div>
            <div className="client-avatar">A</div>
            <div className="client-avatar">S</div>
          </div>
          <div className="client-text"><strong>5000+ Happy Clients</strong> Trust Us <span style={{ color: 'var(--gold)', marginLeft: '6px', fontSize: '14px' }}>→</span></div>
        </Link>
      </div>
      {/* QUOTE FORM */}
      <form className="hero-form" onSubmit={handleQuoteSubmit}>
        <div className="form-title">🌟 Get Free Quote</div>
        {showSuccess && (
          <div style={{ background: '#d4edda', color: '#155724', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>
            Our team will contact you very soon.
          </div>
        )}
        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
        </div>
        <div className="form-group">
          <label>Event Type</label>
          <select name="eventType" required value={formData.eventType} onChange={handleChange}><option value="">Select Event Type</option><option value="Wedding">Wedding</option><option value="Birthday">Birthday</option><option value="Corporate">Corporate</option><option value="Reception">Reception</option></select>
        </div>
        <div className="form-group">
          <label>Event Date</label>
          <input type="date" name="eventDate" required value={formData.eventDate} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Guest Count</label>
          <input type="number" name="guestCount" required value={formData.guestCount} onChange={handleChange} placeholder="Number of guests" />
        </div>
        <div className="form-group">
          <label>Your Message</label>
          <textarea name="message" required value={formData.message} onChange={handleChange} placeholder="Tell us about your event..."></textarea>
        </div>
        <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', animation: 'pulse 2s infinite', border: 'none', cursor: 'pointer' }} >GET FREE QUOTE ✦</button>
      </form>
    </div>
  </section>

  {/* SERVICES */}
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="section-header reveal">
        <div>
          <div className="section-label">Our Services</div>
          <h2 className="section-title">Catering Services For<br /><em>Every Occasion</em></h2>
          <div className="divider"></div>
        </div>
        <Link to="/services" className="btn-outline" style={{ fontSize: '12px', padding: '10px 24px' }}>View All Services</Link>
      </div>
      <div className="services-grid reveal">
        <div className="service-card" >
          <img className="service-card-img" src="/indian_marriage_function.png" alt="Marriage Function" />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <div className="service-card-title">Marriage Function</div>
            <div className="service-card-desc">Complete catering and management for your special wedding day.</div>
            <Link to="/services" className="explore-btn">Explore More →</Link>
          </div>
        </div>
        <div className="service-card" >
          <img className="service-card-img" src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&q=80" alt="Corporate Party" />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <div className="service-card-title">Corporate Party</div>
            <div className="service-card-desc">Professional catering for meetings, conferences and corporate events.</div>
            <Link to="/services" className="explore-btn">Explore More →</Link>
          </div>
        </div>
        <div className="service-card" >
          <img className="service-card-img" src="/indian_birthday_party.png" alt="Birthday Party" />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <div className="service-card-title">Birthday Party</div>
            <div className="service-card-desc">Make birthdays extra special with customized menus and arrangements.</div>
            <Link to="/services" className="explore-btn">Explore More →</Link>
          </div>
        </div>
        <div className="service-card" >
          <img className="service-card-img" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" alt="Mocktail Party" />
          <div className="service-card-overlay"></div>
          <div className="service-card-content">
            <div className="service-card-title">Mocktail Party</div>
            <div className="service-card-desc">Refreshing mocktail setups with professional bartenders.</div>
            <Link to="/services" className="explore-btn">Explore More →</Link>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* WHY CHOOSE US */}
  <section className="section why-section">
    <div className="section-inner">
      <div className="why-grid">
        <div className="why-img-stack reveal-left">
          <img className="why-img-main" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" alt="Food" />
          <div className="why-badge-floating" style={{ position: 'absolute', top: '40%', right: '-10px', zIndex: '2', animation: 'goldGlow 2s infinite' }}>
            <div style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--dark)' }}>20+</div>
            <div style={{ fontSize: '10px', color: 'var(--dark2)', letterSpacing: '1px' }}>Years of Experience</div>
          </div>
          <img className="why-img-accent" src="https://images.unsplash.com/photo-1555244162-803834f70033?w=400&q=80" alt="Catering" />
        </div>
        <div className="reveal-right">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">Because We Serve<br /><em>More Than Just Food</em></h2>
          <div className="divider"></div>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.8' }}>Siddhi Professionals with years of experience in the catering industry. We use the finest ingredients to prepare dishes that delight every palate.</p>
          <div className="why-features">
            <div className="why-feat">
              <div className="why-feat-icon">👨‍🍳</div>
              <div><div className="why-feat-title">Experienced Team</div><div className="why-feat-desc">Professional chefs with years of expertise</div></div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon">🍽️</div>
              <div><div className="why-feat-title">Hygienic Kitchen</div><div className="why-feat-desc">We maintain highest hygiene standards</div></div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon">📋</div>
              <div><div className="why-feat-title">Custom Menu</div><div className="why-feat-desc">Customized menus to meet your needs</div></div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon">⏰</div>
              <div><div className="why-feat-title">On Time Service</div><div className="why-feat-desc">We never compromise on timely delivery</div></div>
            </div>
            <div className="why-feat">
              <div className="why-feat-icon">💰</div>
              <div><div className="why-feat-title">Affordable Packages</div><div className="why-feat-desc">Premium quality food at fair prices</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* TASTE TO REMEMBER */}
  <section className="section" style={{ background: 'var(--dark)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="gold-line"><span className="gold-ornament">✦</span></div>
        <div className="section-label" style={{ textAlign: 'center' }}>Our Specialties</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>A Taste To <em>Remember</em></h2>
      </div>
      <div className="gallery-grid reveal">
        <div className="gallery-item"><img src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=300&q=80" alt="Paneer Lababdar" /><div className="gallery-overlay"></div></div>
        <div className="gallery-item"><img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&q=80" alt="Veg Biryani" /><div className="gallery-overlay"></div></div>
        <div className="gallery-item"><img src="https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&q=80" alt="Chicken" /><div className="gallery-overlay"></div></div>
        <div className="gallery-item"><img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&q=80" alt="Dal Makhani" /><div className="gallery-overlay"></div></div>
        <div className="gallery-item"><img src="https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&q=80" alt="Naan" /><div className="gallery-overlay"></div></div>
      </div>
    </div>
  </section>

  {/* MOMENTS WE CATERED */}
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="reveal">
        <div className="section-label" style={{ textAlign: 'center' }}>Gallery</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Moments We <em>Catered</em></h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}><div className="divider"></div></div>
      </div>
      <div className="moments-tabs reveal" style={{ justifyContent: 'center' }}>
        <button className={`moment-tab ${activeMoment === 'all' ? 'active' : ''}`} onClick={() => setActiveMoment('all')}>All</button>
        <button className={`moment-tab ${activeMoment === 'wedding' ? 'active' : ''}`} onClick={() => setActiveMoment('wedding')}>Weddings</button>
        <button className={`moment-tab ${activeMoment === 'reception' ? 'active' : ''}`} onClick={() => setActiveMoment('reception')}>Receptions</button>
        <button className={`moment-tab ${activeMoment === 'birthday' ? 'active' : ''}`} onClick={() => setActiveMoment('birthday')}>Birthdays</button>
        <button className={`moment-tab ${activeMoment === 'corporate' ? 'active' : ''}`} onClick={() => setActiveMoment('corporate')}>Corporate Events</button>
      </div>
      <div className="moments-grid reveal" id="momentsGrid">
        {(activeMoment === 'all' || activeMoment === 'wedding') && <div className="gallery-item"><img src="/wedding_reception.png" alt="Grand Wedding Reception" /></div>}
        {(activeMoment === 'all' || activeMoment === 'reception') && <div className="gallery-item"><img src="/wedding_reception.png" alt="Elegant Reception Setup" /></div>}
        {(activeMoment === 'all' || activeMoment === 'birthday') && <div className="gallery-item"><img src="/birthday_celebration.png" alt="Vibrant Birthday Celebration" /></div>}
        {(activeMoment === 'all' || activeMoment === 'corporate') && <div className="gallery-item"><img src="/corporate_event.png" alt="Sophisticated Corporate Event" /></div>}
        {(activeMoment === 'all' || activeMoment === 'wedding') && <div className="gallery-item"><img src="/wedding_food.png" alt="Delicious Wedding Food Spread" /></div>}
        {(activeMoment === 'all' || activeMoment === 'reception') && <div className="gallery-item"><img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80" alt="Reception Platter" /></div>}
        {(activeMoment === 'all' || activeMoment === 'birthday') && <div className="gallery-item"><img src="https://images.unsplash.com/photo-1615996001375-c7ef13294436?w=500&q=80" alt="Birthday Sweets" /></div>}
        {(activeMoment === 'all' || activeMoment === 'corporate') && <div className="gallery-item"><img src="https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80" alt="Corporate Lunch" /></div>}
      </div>
      <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/gallery" className="btn-outline" style={{ fontSize: '12px', padding: '10px 28px' }}>View More</Link>
      </div>
    </div>
  </section>

  {/* TESTIMONIAL SLIDER */}
  <section className="section" style={{ background: 'var(--dark)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="section-label" style={{ textAlign: 'center' }}>Testimonials</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>What Our Clients <em>Say</em></h2>
      </div>
      <div className="testimonial-slider-container reveal">
        {testimonials && testimonials.length > 0 ? (
          <div className="testimonial-slider">
            {testimonials.map((item) => {
              const rating = parseInt(item.rating) || 5;
              const author = item.author || "Guest";
              const initial = author.charAt(0).toUpperCase();

              return (
              <div key={item.id} className="testimonial-card slider-card">
                <div className="testimonial-rating">
                  {'★'.repeat(rating)}{'☆'.repeat(Math.max(0, 5 - rating))}
                </div>
                <p className="testimonial-text">"{item.content}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{initial}</div>
                  <div>
                    <div className="testimonial-name">{author}</div>
                    <div className="testimonial-event">{item.event_type || 'Event'}</div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', color: '#888' }}>Loading testimonials...</div>
        )}
      </div>
      <div className="reveal" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/testimonials" className="btn-primary">View All Reviews</Link>
      </div>
    </div>
  </section>

  {/* CTA BANNER */}
  <div className="cta-banner">
    <div className="section-inner">
      <div className="cta-inner">
        <div className="cta-text">
          <h2>Let's Plan Your Next Unforgettable Event</h2>
          <p>Contact us today and let our experts craft the perfect menu for your celebration.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Link to="/booking" className="btn-dark">Book Now</Link>
          <a href="tel:+919556077318" className="btn-dark" style={{ background: 'rgba(26,16,9,0.5)', border: '1px solid rgba(26,16,9,0.8)' }}>Call Us Now</a>
        </div>
      </div>
    </div>
  </div>

  {/* FOOTER */}
  

    </>
  );
};

export default Home;
