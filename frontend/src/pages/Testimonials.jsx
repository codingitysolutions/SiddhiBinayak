import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { getTestimonials } from '../utils/storage';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
      setLoading(false);
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <SEO 
        title="Client Testimonials" 
        description="Read what our clients have to say about our premium catering services, delicious food, and professional staff."
        url="https://siddhibinayakcatering.com/testimonials"
      />
      <div className="page-hero">
    <div className="page-hero-inner">
      <div className="breadcrumb"><a href="/" >Home</a><span>›</span><span>Testimonials</span></div>
      <h1>What Our Clients <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Say</em></h1>
    </div>
  </div>
  <section className="section" style={{ background: 'var(--dark2)' }}>
    <div className="section-inner">
      <div className="reveal" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>Google Reviews</div>
        <div style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--gold)' }}>4.9 <span className="rating-stars">★★★★★</span></div>
      </div>
      
      <div className="testimonials-grid reveal">
        {loading ? (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#fff', padding: '3rem' }}>Loading reviews...</div>
        ) : (
          <>
            {testimonials && testimonials.map((item) => {
              const rating = parseInt(item.rating) || 5;
              const author = item.author || "Guest";
              const initial = author.charAt(0).toUpperCase();
              
              return (
              <div key={item.id} className="testimonial-card">
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
            {(!testimonials || testimonials.length === 0) && (
               <div style={{ gridColumn: '1 / -1', textAlign: 'center', color: '#ccc', padding: '2rem' }}>No testimonials to display.</div>
            )}
          </>
        )}
      </div>

      <div className="reveal" style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/booking" className="btn-primary">Book Your Event Now</Link>
      </div>
    </div>
  </section>
  

    </>
  );
};

export default Testimonials;
