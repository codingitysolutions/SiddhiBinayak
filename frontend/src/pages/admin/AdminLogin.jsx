import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { loginAdmin } from '../../utils/storage';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    
    const response = await loginAdmin(username, password);
    if (response.success && response.token) {
      localStorage.setItem('admin_token', response.token);
      navigate('/admin');
    } else {
      setError(response.message || 'Invalid username or password');
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f4f7f6', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ background: 'var(--card-bg, #ffffff)', padding: '3rem 2.5rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
        <img src="/logo.png" alt="Siddhi Binayak Logo" style={{ height: '70px', marginBottom: '1rem', objectFit: 'contain' }} />
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-color, #333)', marginBottom: '8px' }}>Siddhi Binayak Admin</h2>
        <p style={{ color: 'var(--text-color, #666)', opacity: 0.8, fontSize: '14px', marginBottom: '2rem' }}>Sign in to manage your content</p>
        
        {error && <div style={{ background: '#fee2e2', color: '#991b1b', padding: '10px', borderRadius: '6px', fontSize: '13px', marginBottom: '1rem' }}>{error}</div>}
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-color, #555)', marginBottom: '6px' }}>Username</label>
            <input 
              type="text" 
              required 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }}
              placeholder="Enter username"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-color, #555)', marginBottom: '6px' }}>Password</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={{ width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }}
              placeholder="Enter password"
            />
          </div>
          <button type="submit" style={{ marginTop: '1rem', padding: '12px', background: 'var(--gold)', color: 'var(--white)', border: 'none', borderRadius: '6px', fontWeight: '600', fontSize: '14px', cursor: 'pointer', transition: 'background 0.3s' }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
