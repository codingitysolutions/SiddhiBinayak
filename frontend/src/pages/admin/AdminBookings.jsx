import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getBookings, updateBookingStatus, deleteBooking } from '../../utils/storage';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [statusInput, setStatusInput] = useState('');

  const fetchBookings = async () => {
    const data = await getBookings();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const openEditModal = (booking) => {
    setSelectedBooking(booking);
    setStatusInput(booking.status || 'Pending');
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedBooking(null);
  };

  const handleStatusUpdate = async () => {
    if (selectedBooking) {
      await updateBookingStatus(selectedBooking.id, statusInput);
      await fetchBookings();
      closeEditModal();
    }
  };

  const handleDeleteBooking = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      await deleteBooking(id);
      await fetchBookings();
    }
  };

  const exportToCSV = () => {
    if (bookings.length === 0) return;
    
    // Define headers
    const headers = ['ID', 'Client Name', 'Phone', 'Email', 'Event Type', 'Date', 'Venue', 'Guests', 'Status'];
    
    // Map data
    const csvData = bookings.map(b => [
      b.id,
      `"${b.fullname || ''}"`,
      `"${b.phone || ''}"`,
      `"${b.email || ''}"`,
      `"${b.eventType || ''}"`,
      `"${b.date || ''}"`,
      `"${b.venue || ''}"`,
      b.guests || 0,
      `"${b.status || 'Pending'}"`
    ]);
    
    // Combine headers and data
    const csvContent = [headers.join(','), ...csvData.map(row => row.join(','))].join('\n');
    
    // Trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bookings_export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="admin-table-container glass-panel">
      <div className="table-header">
        <h2 className="table-title">Event Bookings</h2>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-glass" onClick={exportToCSV} style={{ background: '#10b981', color: 'var(--white)' }}>Export CSV</button>
          <button className="btn-glass" onClick={fetchBookings}>Refresh Data</button>
        </div>
      </div>
      <div className="table-responsive">
        <table className="glass-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Contact Info</th>
              <th>Event Details</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.6)' }}>
                  No bookings yet. Go to the frontend and book an event!
                </td>
              </tr>
            ) : (
              bookings.map((b) => (
                <tr key={b.id}>
                  <td>
                    <div className="client-name">{b.fullname}</div>
                  </td>
                  <td>
                    <div className="client-phone">{b.phone}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{b.email}</div>
                  </td>
                  <td>
                    <div style={{ color: 'var(--gold)', fontWeight: '500' }}>{b.eventType}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.6)' }}>{b.date} • {b.venue}</div>
                  </td>
                  <td>{b.guests}</td>
                  <td>
                    <span className={`admin-status ${b.status === 'Confirmed' ? 'status-confirmed' : b.status === 'Completed' ? 'status-completed' : 'status-pending'}`}>
                      {b.status || 'Pending'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className="action-btn" title="View/Edit" onClick={() => openEditModal(b)}>Edit</button>
                      <button className="action-btn" title="Delete" style={{ color: '#ef4444', borderColor: '#fca5a5' }} onClick={() => handleDeleteBooking(b.id)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isEditModalOpen && selectedBooking && createPortal(
        <div className="admin-modal-overlay" onClick={closeEditModal}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="admin-modal-title">Booking Details</h3>
            <div style={{ marginBottom: '1rem', fontSize: '14px', color: 'var(--white)' }}>
              <p><strong>Name:</strong> {selectedBooking.fullname}</p>
              <p><strong>Contact:</strong> {selectedBooking.phone} | {selectedBooking.email}</p>
              <p><strong>Event:</strong> {selectedBooking.eventType} on {selectedBooking.date}</p>
              <p><strong>Venue:</strong> {selectedBooking.venue}</p>
              <p><strong>Guests:</strong> {selectedBooking.guests}</p>
            </div>
            
            <div className="form-group" style={{ marginTop: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: '600', fontSize: '13px' }}>Update Status</label>
              <select 
                value={statusInput} 
                onChange={(e) => setStatusInput(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Completed">Completed</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            <div className="admin-modal-actions">
              <button onClick={closeEditModal} style={{ padding: '8px 16px', background: 'transparent', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.6)' }}>Cancel</button>
              <button onClick={handleStatusUpdate} style={{ padding: '8px 16px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Changes</button>
            </div>
          </div>
        </div>
      , document.body)}
    </div>
  );
};

export default AdminBookings;
