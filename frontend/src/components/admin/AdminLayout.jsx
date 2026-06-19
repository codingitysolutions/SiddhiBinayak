import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const closeSidebar = () => setIsSidebarOpen(false);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  return (
    <div className="admin-layout">
      {/* Mobile Header for Sidebar Toggle */}
      <div className="admin-mobile-header">
        <Link to="/admin" className="admin-brand-mobile" onClick={closeSidebar}>
          <img src="/logo.png" alt="Siddhi Binayak" className="admin-logo-img" />
        </Link>
        <button 
          className="admin-hamburger"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      <div 
        className={`admin-sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={closeSidebar}
      ></div>

      <aside className={`admin-sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="admin-brand">
          <Link to="/admin" onClick={closeSidebar}>
            <img src="/logo.png" alt="Siddhi Binayak" className="admin-logo-img" />
          </Link>
          <div className="admin-brand-text">Admin Panel</div>
        </div>
        
        <ul className="admin-nav-menu">
          <li className="nav-item">
            <Link to="/admin" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></span> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/bookings" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg></span> Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/quotes" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span> Free Quotes
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/menu" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></span> Menu Items
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/packages" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg></span> Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/admin/testimonials" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></span> Testimonials
            </Link>
          </li>
        </ul>

        <div className="admin-divider"></div>

        <ul className="admin-nav-menu" style={{ flex: 0 }}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeSidebar}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg></span> View Website
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link nav-btn-logout" onClick={handleLogout}>
              <span className="nav-icon"><svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg></span> Logout
            </button>
          </li>
        </ul>
      </aside>

      <main className="admin-main-content">
        <header className="admin-header">
          <div>
            <h1 className="admin-page-title">Siddhi Binayak Admin</h1>
            <p className="admin-subtitle">Manage your catering business seamlessly.</p>
          </div>
          <div className="user-profile">
            <div className="user-info">
              <div className="user-name">Admin User</div>
              <div className="user-role">Super Admin</div>
            </div>
            <div className="avatar-glass">SB</div>
          </div>
        </header>

        <Outlet />

      </main>
    </div>
  );
};

export default AdminLayout;
