import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeMoment, setActiveMoment] = useState('all');

  const galleryImages = [
    { id: 1, type: 'wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&q=80', alt: 'Wedding Reception' },
    { id: 2, type: 'reception', src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=500&q=80', alt: 'Reception Setup' },
    { id: 3, type: 'birthday', src: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=500&q=80', alt: 'Birthday Party' },
    { id: 4, type: 'corporate', src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&q=80', alt: 'Corporate Event' },
    { id: 5, type: 'wedding', src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80', alt: 'Wedding Dining' },
    { id: 6, type: 'reception', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80', alt: 'Reception Guests' },
    { id: 7, type: 'birthday', src: 'https://images.unsplash.com/photo-1530103862676-de88b635fd52?w=500&q=80', alt: 'Birthday Cake' },
    { id: 8, type: 'corporate', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500&q=80', alt: 'Corporate Seminar Catering' },
    { id: 9, type: 'wedding', src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=500&q=80', alt: 'Wedding Decoration' },
  ];

  return (
    <>
      <SEO 
        title="Gallery" 
        description="Browse our gallery to see our beautiful event setups, exquisite food presentations, and happy clients."
        url="https://www.siddhibinayak.in/gallery"
      />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Gallery</span></div>
          <h1>Our <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Gallery</em></h1>
        </div>
      </div>
      <section className="section" style={{ background: 'var(--dark2)', minHeight: '60vh' }}>
        <div className="section-inner">
          <div className="reveal">
            <div className="section-label" style={{ textAlign: 'center' }}>Photo Gallery</div>
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
          
          <div className="moments-grid reveal" style={{ marginTop: '2rem' }}>
            {galleryImages.map((img) => (
              (activeMoment === 'all' || activeMoment === img.type) && (
                <div key={img.id} className="gallery-item" style={{ animation: 'fadeUp 0.5s ease backwards' }}>
                  <img src={img.src} alt={img.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
