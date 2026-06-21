import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeMoment, setActiveMoment] = useState('all');

  const galleryImages = [
    { id: 1, type: 'wedding', src: '/wedding_reception.png', alt: 'Grand Wedding Buffet' },
    { id: 2, type: 'reception', src: '/reception_dining.png', alt: 'Elegant Reception Setup' },
    { id: 3, type: 'birthday', src: '/birthday_celebration.png', alt: 'Birthday Party Setup' },
    { id: 4, type: 'corporate', src: '/corporate_event.png', alt: 'Corporate Dining Experience' },
    { id: 5, type: 'wedding', src: '/wedding_decor.png', alt: 'Premium Indian Wedding Decor' },
    { id: 6, type: 'reception', src: '/wedding_food.png', alt: 'Reception Dining Thali' },
    { id: 7, type: 'birthday', src: '/birthday_party.png', alt: 'Kids Birthday Party' },
    { id: 8, type: 'corporate', src: '/corporate_buffet.png', alt: 'Corporate Catering Buffet' },
    { id: 9, type: 'wedding', src: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=500&q=80', alt: 'Signature Biryani' },
    { id: 10, type: 'reception', src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&q=80', alt: 'Reception Platters' },
    { id: 11, type: 'birthday', src: 'https://images.unsplash.com/photo-1530103862676-de88b635fd52?w=500&q=80', alt: 'Celebration Setup' },
    { id: 12, type: 'corporate', src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=80', alt: 'Executive Lunch' },
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
