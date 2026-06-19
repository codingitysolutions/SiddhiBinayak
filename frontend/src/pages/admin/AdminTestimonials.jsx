import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } from '../../utils/storage';

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ author: '', event_type: '', rating: '5', content: '' });

  const fetchTestimonials = async () => {
    const data = await getTestimonials();
    setTestimonials(data);
  };

  useEffect(() => { fetchTestimonials(); }, []);

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ author: item.author, event_type: item.event_type || '', rating: item.rating, content: item.content });
    } else {
      setEditingItem(null);
      setFormData({ author: '', event_type: '', rating: '5', content: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updateTestimonial(editingItem.id, formData);
    } else {
      await addTestimonial(formData);
    }
    closeModal();
    fetchTestimonials();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this testimonial?")) {
      await deleteTestimonial(id);
      fetchTestimonials();
    }
  };

  return (
    <div className="admin-table-container glass-panel">
      <div className="table-header">
        <h2 className="table-title">Testimonials Management</h2>
        <button className="btn-glass" onClick={() => openModal()} style={{ background: 'var(--gold)', color: 'var(--white)' }}>+ Add New Review</button>
      </div>
      
      <div className="table-responsive">
        <table className="glass-table">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Event Type</th>
              <th>Rating</th>
              <th>Review Content</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {testimonials.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.6)' }}>No testimonials added yet. Click Add New Review!</td></tr>
            ) : (
              testimonials.map(item => (
                <tr key={item.id}>
                  <td className="client-name">{item.author}</td>
                  <td style={{ color: 'rgba(255,255,255,0.7)' }}>{item.event_type}</td>
                  <td style={{ color: '#d97706', letterSpacing: '2px' }}>{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</td>
                  <td style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', maxWidth: '400px', fontStyle: 'italic' }}>"{item.content}"</td>
                  <td>
                    <button className="action-btn" title="Edit" onClick={() => openModal(item)}>Edit</button>
                    <button className="action-btn" title="Delete" onClick={() => handleDelete(item.id)} style={{ color: '#ef4444' }}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && createPortal(
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div className="admin-modal-content" onClick={e => e.stopPropagation()}>
            <h3 className="admin-modal-title">{editingItem ? 'Edit Review' : 'Add New Review'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Customer Name</label>
                <input required type="text" placeholder="e.g. Rahul Sharma" value={formData.author} onChange={e => setFormData({...formData, author: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Event Type</label>
                <input required type="text" placeholder="e.g. Wedding Catering" value={formData.event_type} onChange={e => setFormData({...formData, event_type: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Rating</label>
                <select required value={formData.rating} onChange={e => setFormData({...formData, rating: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label>Review Content</label>
                <textarea required value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }} placeholder="Customer review..." />
              </div>
              <div className="admin-modal-actions">
                <button type="button" onClick={closeModal} style={{ padding: '8px 16px', background: 'transparent', border: 'none', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Review</button>
              </div>
            </form>
          </div>
        </div>
      , document.body)}
    </div>
  );
};

export default AdminTestimonials;
