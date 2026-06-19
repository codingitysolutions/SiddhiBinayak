import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { getMenu } from '../utils/storage';

const Menu = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const data = await getMenu();
      setMenuItems(data);
      setLoading(false);
    };
    fetchMenuItems();
  }, []);

  // Dynamically generate unique categories from menu items
  const dynamicCategories = [...new Set(menuItems.map(item => item.category))].filter(Boolean);
  const categories = dynamicCategories.length > 0 ? dynamicCategories : [
    "Welcome Drinks",
    "Veg Starter",
    "Main Course",
    "Non Veg Main Course",
    "Salad",
    "Dessert"
  ];

  const filteredItems = (category) => {
    return menuItems.filter(item => item.category === category);
  };

  return (
    <>
      <SEO 
        title="Our Menu" 
        description="Explore our exquisite and customizable catering menu. From welcome drinks to main courses and desserts, we serve perfection."
        keywords="catering menu, food menu, wedding menu, Indian catering dishes"
        url="https://siddhibinayakcatering.com/menu"
      />
      <div className="page-hero">
        <div className="page-hero-inner">
          <div className="breadcrumb"><Link to="/">Home</Link><span>›</span><span>Menu</span></div>
          <h1>Our Signature <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Menu</em></h1>
        </div>
      </div>
      <section className="section" style={{ background: 'var(--dark2)' }}>
        <div className="section-inner">
          <div className="menu-tabs reveal">
            <button className={`menu-tab ${activeTab === "All" ? "active" : ""}`} onClick={() => setActiveTab("All")}>All</button>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`menu-tab ${activeTab === cat ? "active" : ""}`} 
                onClick={() => setActiveTab(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a 
              href="/SiddhiMenu.png" 
              download="Siddhibinayak_Menu.png" 
              className="btn btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px' }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Full Menu
            </a>
          </div>

          <div className="reveal">
            {loading ? (
              <div style={{ textAlign: 'center', color: '#fff', padding: '3rem' }}>Loading menu...</div>
            ) : (
              categories.map(category => {
                const items = filteredItems(category);
                if (items.length === 0) return null;
                if (activeTab !== 'All' && activeTab !== category) return null;
                
                return (
                  <div key={category}>
                    <div className="menu-section-title">
                      {category === 'Welcome Drinks' && '🍹 '}
                      {category === 'Veg Starter' && '🥗 '}
                      {category === 'Main Course' && '🍛 '}
                      {category === 'Non Veg Main Course' && '🍗 '}
                      {category === 'Salad' && '🥗 '}
                      {category === 'Dessert' && '🍮 '}
                      {category}
                    </div>
                    <div className="menu-items-grid">
                      {items.map(item => (
                        <div className="menu-item" key={item.id}>
                          <img 
                            src={item.image_url || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80'} 
                            alt={item.name} 
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="menu-item-info">
                            <div className="menu-item-name">{item.name}</div>
                            <div className="menu-item-cat">{item.category}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
