import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { getPackages } from '../utils/storage';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      const data = await getPackages();
      setPackages(data);
      setLoading(false);
    };
    fetchPackages();
  }, []);

  return (
    <>
      <SEO 
        title="Catering Packages" 
        description="View our affordable and premium catering packages tailored for any event size and budget in Bhubaneswar."
        keywords="catering packages, catering prices, wedding catering packages"
        url="https://www.siddhibinayak.in/packages"
      />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Packages</span></div>
          <h1>Our Catering <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Packages</em></h1>
        </div>
      </div>
      
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="section-inner">
          
          <div className="packages-grid reveal">
            {loading ? (
              <div style={{ textAlign: 'center', color: '#fff', padding: '3rem', gridColumn: '1 / -1' }}>Loading packages...</div>
            ) : packages.length === 0 ? (
              <div style={{ textAlign: 'center', color: '#fff', padding: '3rem', gridColumn: '1 / -1' }}>No packages available.</div>
            ) : (
              packages.map(pkg => {
                const featureList = pkg.features ? pkg.features.split(',').map(f => f.trim()) : [];
                
                return (
                  <div key={pkg.id} className={`package-card ${pkg.is_popular ? 'popular' : ''}`}>
                    {pkg.is_popular ? <div className="popular-badge">🌟 Most Popular</div> : null}
                    
                    <div className="package-name">{pkg.name}</div>
                    <div className="package-price">₹{pkg.price}<span>/Per Plate</span></div>
                    
                    <ul className="package-features">
                      {featureList.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                    
                    {pkg.is_popular ? (
                      <Link to={`/booking?package=${encodeURIComponent(pkg.name)}`} className="btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>Book Package</Link>
                    ) : (
                      <Link to={`/booking?package=${encodeURIComponent(pkg.name)}`} className="btn-outline" style={{ width: '100%', padding: '12px', textAlign: 'center', display: 'inline-block', textDecoration: 'none' }}>Book Package</Link>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <div className="reveal" style={{ marginTop: '3rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', marginBottom: '1.5rem', textAlign: 'center' }}>Package <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Comparison</em></h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead><tr><th>Features</th><th>Silver</th><th>Gold</th><th>Platinum</th></tr></thead>
                <tbody>
                  <tr><td>Variety of Dishes</td><td>Basic</td><td>Recommended</td><td>Premium</td></tr>
                  <tr><td>Starters</td><td>3</td><td>4</td><td>8</td></tr>
                  <tr><td>Main Course</td><td>2</td><td>4</td><td>6</td></tr>
                  <tr><td>Desserts</td><td>2</td><td>3</td><td>4</td></tr>
                  <tr><td>Live Counters</td><td>2</td><td>2</td><td>3</td></tr>
                  <tr><td>Service Staff</td><td>Basic</td><td>Premium</td><td>Exclusive</td></tr>
                  <tr><td>Cutlery & Plates</td><td>Basic</td><td>Premium</td><td>Premium</td></tr>
                  <tr><td>Price Per Plate</td><td style={{ color: 'var(--gold)' }}>₹499</td><td style={{ color: 'var(--gold)' }}>₹699</td><td style={{ color: 'var(--gold)' }}>₹999</td></tr>
                </tbody>
              </table>
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.8rem', color: '#888', marginTop: '1rem' }}>* Note: The comparison table shows standard metrics. Custom package details from the admin panel may vary.</p>
          </div>

          <div className="custom-cta reveal" style={{ marginTop: '2rem' }}>
            <div><h3>Want a Custom Package?</h3><p>We'll create the perfect menu for your event.</p></div>
            <Link to="/booking" className="btn-primary">REQUEST NOW</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
