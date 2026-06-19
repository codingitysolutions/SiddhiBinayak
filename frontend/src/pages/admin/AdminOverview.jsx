import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getBookings, getQuotes } from '../../utils/storage';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const AdminOverview = () => {
  const [stats, setStats] = useState({ bookings: 0, quotes: 0, menuItems: 0 });
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchStatsAndData = async () => {
      const { getStats } = await import('../../utils/storage');
      const data = await getStats();
      setStats(data);

      const bookings = await getBookings();
      const counts = {
        'Wedding': 0,
        'Corporate': 0,
        'Birthday': 0,
        'Reception': 0,
        'Outdoor': 0,
        'Festival': 0
      };
      
      bookings.forEach(curr => {
        const type = curr.eventType || 'Other';
        counts[type] = (counts[type] || 0) + 1;
      });

      const formattedData = Object.keys(counts).map(key => ({
        name: key,
        bookings: counts[key]
      }));

      setChartData(formattedData);
    };
    fetchStatsAndData();
  }, []);

  return (
    <>
      <div className="stats-grid">
        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Total Bookings</span>
            <div className="stat-icon-glass" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22white%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z%22></path></svg>')", backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
          <div className="stat-value">{stats.bookings}</div>
          <div className="stat-trend trend-neutral">From your site</div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Pending Quotes</span>
            <div className="stat-icon-glass" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22white%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z%22></path></svg>')", backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
          <div className="stat-value">{stats.quotes}</div>
          <div className="stat-trend trend-down">Needs attention</div>
        </div>

        <div className="stat-card glass-panel">
          <div className="stat-header">
            <span className="stat-title">Menu Items</span>
            <div className="stat-icon-glass" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22white%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 stroke-width=%222%22 d=%22M4 6h16M4 12h16M4 18h16%22></path></svg>')", backgroundSize: '50%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
          </div>
          <div className="stat-value">{stats.menuItems || 0}</div>
          <div className="stat-trend trend-neutral">Active Dishes</div>
        </div>
      </div>

      <div className="admin-table-container glass-panel" style={{ padding: '3rem', marginTop: '2rem' }}>
        <h2 style={{ color: 'var(--gold)', marginBottom: '2rem', fontFamily: "'Playfair Display', serif", textAlign: 'center' }}>Bookings by Event Type</h2>
        <div style={{ height: '300px', width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff22" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" allowDecimals={false} />
              <Tooltip cursor={{ fill: '#ffffff11' }} contentStyle={{ backgroundColor: '#1a1009', border: '1px solid #c9973a', borderRadius: '8px', color: 'var(--white)' }} />
              <Bar dataKey="bookings" fill="#c9973a" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AdminOverview;
