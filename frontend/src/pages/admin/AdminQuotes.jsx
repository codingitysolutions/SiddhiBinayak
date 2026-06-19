import React, { useEffect, useState } from 'react';
import { getQuotes, deleteQuote } from '../../utils/storage';

const AdminQuotes = () => {
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = async () => {
    const data = await getQuotes();
    setQuotes(data);
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleDeleteQuote = async (id) => {
    if (window.confirm('Are you sure you want to delete this quote request?')) {
      await deleteQuote(id);
      await fetchQuotes();
    }
  };

  return (
    <div className="admin-table-container glass-panel">
      <div className="table-header">
        <h2 className="table-title">Free Quote Requests</h2>
        <button className="btn-glass" onClick={fetchQuotes}>Refresh Data</button>
      </div>
      <div className="table-responsive">
        <table className="glass-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Contact Info</th>
              <th>Event Info</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {quotes.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.6)' }}>
                  No quote requests yet. Go to the Home or Contact page and submit one!
                </td>
              </tr>
            ) : (
              quotes.map((q) => (
                <tr key={q.id}>
                  <td>
                    <div className="client-name">{q.name}</div>
                  </td>
                  <td>
                    <div className="client-phone">{q.phone}</div>
                  </td>
                  <td>
                    <div style={{ color: 'var(--gold)', fontWeight: '500' }}>{q.eventType}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{q.eventDate} • {q.guestCount} Guests</div>
                  </td>
                  <td>
                    <div style={{ maxWidth: '200px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: '12px' }}>
                      {q.message}
                    </div>
                  </td>
                  <td>
                    <span className={`admin-status ${q.status === 'Completed' || q.status === 'Contacted' ? 'status-completed' : 'status-pending'}`}>
                      {q.status || 'New'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="action-btn" title="Delete" style={{ color: '#ef4444', borderColor: '#fca5a5' }} onClick={() => handleDeleteQuote(q.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminQuotes;
