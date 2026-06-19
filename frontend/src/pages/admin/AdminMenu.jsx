import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { getMenu, addMenu, updateMenu, deleteMenu, getCloudinarySignature } from '../../utils/storage';

const AdminMenu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({ name: '', category: 'Starters', price: 0, description: '', image_url: '' });
  const [isUploading, setIsUploading] = useState(false);
  const fetchMenu = async () => {
    const data = await getMenu();
    setMenuItems(data);
  };

  useEffect(() => { fetchMenu(); }, []);

  const openModal = (item = null) => {
    if (item) {
      setEditingItem(item);
      setFormData({ name: item.name, category: item.category, price: 0, description: item.description, image_url: item.image_url || '' });
    } else {
      setEditingItem(null);
      setFormData({ name: '', category: 'Starters', price: 0, description: '', image_url: '' });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const sigData = await getCloudinarySignature();
      if (!sigData) throw new Error('Could not get upload signature');

      const formDataObj = new FormData();
      formDataObj.append('file', file);
      formDataObj.append('api_key', sigData.apiKey);
      formDataObj.append('timestamp', sigData.timestamp);
      formDataObj.append('signature', sigData.signature);
      formDataObj.append('folder', 'siddhibinayak_menu');

      const res = await fetch(`https://api.cloudinary.com/v1_1/${sigData.cloudName}/image/upload`, {
        method: 'POST',
        body: formDataObj
      });
      const data = await res.json();
      if (data.secure_url) {
        setFormData({ ...formData, image_url: data.secure_url });
      } else {
        alert('Image upload failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Error uploading image.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingItem) {
      await updateMenu(editingItem.id, formData);
    } else {
      await addMenu(formData);
    }
    closeModal();
    fetchMenu();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this menu item?")) {
      await deleteMenu(id);
      fetchMenu();
    }
  };

  return (
    <div className="admin-table-container glass-panel">
      <div className="table-header">
        <h2 className="table-title">Menu Management</h2>
        <button className="btn-glass" onClick={() => openModal()} style={{ background: 'var(--gold)', color: 'var(--white)' }}>+ Add New Dish</button>
      </div>
      
      <div className="table-responsive">
        <table className="glass-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Dish Name</th>
              <th>Category</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.length === 0 ? (
              <tr><td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: 'rgba(255,255,255,0.6)' }}>No menu items added yet. Click Add New Dish!</td></tr>
            ) : (
              menuItems.map(item => (
                <tr key={item.id}>
                  <td>
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.name} style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '40px', height: '40px', borderRadius: '4px', background: 'rgba(201, 151, 58, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: '#888' }}>No Img</div>
                    )}
                  </td>
                  <td className="client-name">{item.name}</td>
                  <td><span className="admin-status status-confirmed">{item.category}</span></td>
                  <td style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.description}</td>
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
            <h3 className="admin-modal-title">{editingItem ? 'Edit Dish' : 'Add New Dish'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Dish Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Category</label>
                <select required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }}>
                  <option value="" disabled>Select a category</option>
                  <option value="Welcome Drinks">Welcome Drinks</option>
                  <option value="Veg Starter">Veg Starter</option>
                  <option value="Main Course">Main Course</option>
                  <option value="Non Veg Main Course">Non Veg Main Course</option>
                  <option value="Salad">Salad</option>
                  <option value="Dessert">Dessert</option>
                  {[...new Set(menuItems.map(i => i.category))].filter(c => !["Welcome Drinks", "Veg Starter", "Main Course", "Non Veg Main Course", "Salad", "Dessert"].includes(c)).map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label>Image Upload</label>
                <input type="file" accept="image/*" onChange={handleImageUpload} style={{ width: '100%', padding: '8px', marginTop: '5px' }} disabled={isUploading} />
                {isUploading && <p style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '5px' }}>Uploading image to Cloudinary...</p>}
                {formData.image_url && !isUploading && (
                  <div style={{ marginTop: '10px' }}>
                    <img src={formData.image_url} alt="Preview" style={{ height: '80px', borderRadius: '5px' }} />
                  </div>
                )}
              </div>
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label>Description</label>
                <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
              </div>
              <div className="admin-modal-actions">
                <button type="button" onClick={closeModal} style={{ padding: '8px 16px', background: 'transparent', border: 'none', cursor: 'pointer' }}>Cancel</button>
                <button type="submit" style={{ padding: '8px 16px', background: 'var(--gold)', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Dish</button>
              </div>
            </form>
          </div>
        </div>
      , document.body)}
    </div>
  );
};

export default AdminMenu;
