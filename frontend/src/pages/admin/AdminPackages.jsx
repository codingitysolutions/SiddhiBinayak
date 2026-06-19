import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getPackages, addPackage, updatePackage, deletePackage } from '../../utils/storage';

const AdminPackages = () => {
  const [packages, setPackages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', description: '', features: '', is_popular: false });

  const fetchPackages = async () => {
    const data = await getPackages();
    setPackages(data);
  };

  useEffect(() => { fetchPackages(); }, []);

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ name: item.name, price: item.price, description: item.description, features: item.features || '', is_popular: !!item.is_popular });
    } else {
      setEditingItem(null);
      setFormData({ name: '', price: '', description: '', features: '', is_popular: false });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updatePackage(editingItem.id, formData);
    } else {
      await addPackage(formData);
    }
    closeModal();
    fetchPackages();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      await deletePackage(id);
      fetchPackages();
    }
  };

  return (
    <div className="admin-table-container glass-panel">
      <div className="table-header">
        <h2 className="table-title">Packages Management</h2>
        <button className="btn-glass" onClick={() => openModal()} style={{ background: 'var(--gold)', color: 'var(--white)' }}>+ Add New Package</button>
      </div>
      
      <div className="table-responsive">
        <table className="glass-table">
          <thead>
            <tr>
              <th>Popular</th>
              <th>Package Name</th>
              <th>Price Per Plate</th>
              <th>Features</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {packages.length === 0 ? (
              <tr><td colSpan="5" style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.6)' }}>No packages added yet. Click Add New Package!</td></tr>
            ) : (
              packages.map(item => (
                <tr key={item.id}>
                  <td>{item.is_popular ? <span style={{ color: '#eab308', fontWeight: 'bold' }}>Yes</span> : '-'}</td>
                  <td className="client-name">{item.name}</td>
                  <td style={{ fontWeight: '600', color: '#4ade80' }}>₹{item.price}</td>
                  <td style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', maxWidth: '250px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.features}</td>
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
          <div className="admin-modal-content" onClick={e => e.stopPropagation()} style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <h3 className="admin-modal-title">{editingItem ? 'Edit Package' : 'Add New Package'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Package Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} placeholder="e.g. Gold Wedding Package" />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Price Per Plate (₹)</label>
                <input required type="number" placeholder="e.g. 499" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', textTransform: 'none', fontSize: '14px' }}>
                  <input type="checkbox" checked={formData.is_popular} onChange={e => setFormData({...formData, is_popular: e.target.checked})} style={{ width: 'auto', marginTop: '0', padding: '0', cursor: 'pointer' }} />
                  Mark as "Most Popular"
                </label>
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label>Features (Comma separated)</label>
                <textarea required value={formData.features} onChange={e => setFormData({...formData, features: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '100px' }} placeholder="Welcome Drink, 3 Starters, 2 Main Course, Salad" />
              </div>
              <div className="admin-modal-actions">
                <button type="button" onClick={closeModal} style={{ padding: '8px 16px', background: 'transparent', border: 'none', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Package</button>
              </div>
            </form>
          </div>
        </div>
      , document.body)}
    </div>
  );
};

export default AdminPackages;
