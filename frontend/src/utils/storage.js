// API utility functions connecting to Cloudflare Hono Backend

const API_BASE = 'https://siddhibinayak-backend.siddhibinayak.workers.dev/api';

const fetchJson = async (url, options = {}) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

// ==========================================
// AUTH
// ==========================================


const fetchJsonAuth = async (url, options = {}) => {
  try {
    const token = localStorage.getItem('admin_token');
    const headers = { ...options.headers };
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const res = await fetch(url, { ...options, headers });
    if (!res.ok) {
      if (res.status === 401) {
        console.error('Unauthorized! Token missing or expired.');
        localStorage.removeItem('admin_token');
        window.location.href = '/admin/login';
      }
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const loginAdmin = async (username, password) => {
  try {
    const res = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) return { success: false, message: 'Invalid credentials' };
    return await res.json();
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Server error' };
  }
};

// ==========================================
// BOOKINGS & QUOTES
// ==========================================

export const getBookings = async () => (await fetchJsonAuth(`${API_BASE}/bookings`)) || [];
export const addBooking = async (data) => fetchJson(`${API_BASE}/bookings`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateBookingStatus = async (id, status) => fetchJsonAuth(`${API_BASE}/bookings/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
export const deleteBooking = async (id) => fetchJsonAuth(`${API_BASE}/bookings/${id}`, { method: 'DELETE' });

export const getQuotes = async () => (await fetchJsonAuth(`${API_BASE}/quotes`)) || [];
export const addQuote = async (data) => fetchJson(`${API_BASE}/quotes`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateQuoteStatus = async (id, status) => fetchJsonAuth(`${API_BASE}/quotes/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ status }) });
export const deleteQuote = async (id) => fetchJsonAuth(`${API_BASE}/quotes/${id}`, { method: 'DELETE' });

export const getStats = async () => (await fetchJsonAuth(`${API_BASE}/stats`)) || { bookings: 0, quotes: 0, menuItems: 0 };

// ==========================================
// MENU ITEMS
// ==========================================

export const getMenu = async () => (await fetchJson(`${API_BASE}/menu`)) || [];
export const addMenu = async (data) => fetchJsonAuth(`${API_BASE}/menu`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateMenu = async (id, data) => fetchJsonAuth(`${API_BASE}/menu/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deleteMenu = async (id) => fetchJsonAuth(`${API_BASE}/menu/${id}`, { method: 'DELETE' });
export const getCloudinarySignature = async () => await fetchJsonAuth(`${API_BASE}/cloudinary-signature`);

// ==========================================
// PACKAGES
// ==========================================

export const getPackages = async () => (await fetchJson(`${API_BASE}/packages`)) || [];
export const addPackage = async (data) => fetchJsonAuth(`${API_BASE}/packages`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updatePackage = async (id, data) => fetchJsonAuth(`${API_BASE}/packages/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deletePackage = async (id) => fetchJsonAuth(`${API_BASE}/packages/${id}`, { method: 'DELETE' });

// ==========================================
// TESTIMONIALS
// ==========================================

export const getTestimonials = async () => (await fetchJson(`${API_BASE}/testimonials`)) || [];
export const addTestimonial = async (data) => fetchJsonAuth(`${API_BASE}/testimonials`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const updateTestimonial = async (id, data) => fetchJsonAuth(`${API_BASE}/testimonials/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
export const deleteTestimonial = async (id) => fetchJsonAuth(`${API_BASE}/testimonials/${id}`, { method: 'DELETE' });
