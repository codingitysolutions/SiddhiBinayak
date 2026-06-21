import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [activeMoment, setActiveMoment] = useState('all');

  const galleryImages = [
    { id: 1, type: 'wedding', src: 'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?w=500&q=80', alt: 'Grand Wedding Buffet' },
    { id: 2, type: 'reception', src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&q=80', alt: 'Elegant Reception Setup' },
    { id: 3, type: 'birthday', src: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500&q=80', alt: 'Birthday Party Snacks' },
    { id: 4, type: 'corporate', src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80', alt: 'Corporate Dining Experience' },
    { id: 5, type: 'wedding', src: 'https://images.unsplash.com/photo-1626776876729-ab5a420958db?w=500&q=80', alt: 'Premium Indian Cuisine' },
    { id: 6, type: 'reception', src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&q=80', alt: 'Reception Dining' },
    { id: 7, type: 'birthday', src: 'https://images.unsplash.com/photo-1615996001375-c7ef13294436?w=500&q=80', alt: 'Festive Sweets & Desserts' },
    { id: 8, type: 'corporate', src: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80', alt: 'Corporate Catering Services' },
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
