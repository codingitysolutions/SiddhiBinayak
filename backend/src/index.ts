import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { jwt, sign } from 'hono/jwt';

type Bindings = {
  siddhibinayak_db: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

// Enable CORS for frontend connection
app.use('/*', cors());

const JWT_SECRET = 'siddhi_super_secret_key_2026';
const authMiddleware = jwt({ secret: JWT_SECRET, alg: 'HS256' });


app.get('/', (c) => c.text('Siddhi Binayak Backend API is running!'));

// ==========================================
// AUTH API
// ==========================================

app.post('/api/login', async (c) => {
  const body = await c.req.json();
  const { username, password } = body;
  
  if (username === 'admin' && password === 'admin123') {
    const payload = {
      username: 'admin',
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // 1 week expiration
    };
    const token = await sign(payload, JWT_SECRET);
    return c.json({ success: true, token });
  }
  
  return c.json({ success: false, message: 'Invalid credentials' }, 401);
});

// ==========================================
// BOOKINGS API
// ==========================================

app.get('/api/bookings', authMiddleware, async (c) => {
  const { results } = await c.env.siddhibinayak_db.prepare('SELECT * FROM bookings ORDER BY created_at DESC').all();
  return c.json(results);
});

app.post('/api/bookings', async (c) => {
  const body = await c.req.json();
  const { fullname, phone, email, eventType, date, guests, venue } = body;
  
  const result = await c.env.siddhibinayak_db.prepare(
    'INSERT INTO bookings (fullname, phone, email, eventType, date, guests, venue) VALUES (?, ?, ?, ?, ?, ?, ?)'
  ).bind(fullname, phone, email, eventType, date, guests, venue).run();
  
  return c.json({ success: true, result }, 201);
});

app.put('/api/bookings/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { status } = body;
  const result = await c.env.siddhibinayak_db.prepare('UPDATE bookings SET status = ? WHERE id = ?')
    .bind(status, id).run();
  return c.json({ success: true, result });
});

app.delete('/api/bookings/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const result = await c.env.siddhibinayak_db.prepare('DELETE FROM bookings WHERE id = ?').bind(id).run();
  return c.json({ success: true, result });
});

// ==========================================
// QUOTES API
// ==========================================

app.get('/api/quotes', authMiddleware, async (c) => {
  const { results } = await c.env.siddhibinayak_db.prepare('SELECT * FROM quotes ORDER BY created_at DESC').all();
  return c.json(results);
});

app.post('/api/quotes', async (c) => {
  const body = await c.req.json();
  const { name, phone, eventType, eventDate, guestCount, message } = body;
  
  const result = await c.env.siddhibinayak_db.prepare(
    'INSERT INTO quotes (name, phone, eventType, eventDate, guestCount, message) VALUES (?, ?, ?, ?, ?, ?)'
  ).bind(name, phone, eventType, eventDate, guestCount, message).run();
  
  return c.json({ success: true, result }, 201);
});

app.put('/api/quotes/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { status } = body;
  const result = await c.env.siddhibinayak_db.prepare('UPDATE quotes SET status = ? WHERE id = ?')
    .bind(status, id).run();
  return c.json({ success: true, result });
});

app.delete('/api/quotes/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const result = await c.env.siddhibinayak_db.prepare('DELETE FROM quotes WHERE id = ?').bind(id).run();
  return c.json({ success: true, result });
});

// ==========================================
// MENU ITEMS API
// ==========================================

app.get('/api/menu', async (c) => {
  const { results } = await c.env.siddhibinayak_db.prepare('SELECT * FROM menu_items ORDER BY created_at DESC').all();
  return c.json(results);
});

app.post('/api/menu', authMiddleware, async (c) => {
  const body = await c.req.json();
  const { name, category, price, description, image_url } = body;
  const result = await c.env.siddhibinayak_db.prepare('INSERT INTO menu_items (name, category, price, description, image_url) VALUES (?, ?, ?, ?, ?)')
    .bind(name, category, price, description, image_url || '').run();
  return c.json({ success: true, result }, 201);
});

app.put('/api/menu/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { name, category, price, description, image_url } = body;
  const result = await c.env.siddhibinayak_db.prepare('UPDATE menu_items SET name = ?, category = ?, price = ?, description = ?, image_url = ? WHERE id = ?')
    .bind(name, category, price, description, image_url || '', id).run();
  return c.json({ success: true, result });
});

app.delete('/api/menu/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const result = await c.env.siddhibinayak_db.prepare('DELETE FROM menu_items WHERE id = ?').bind(id).run();
  return c.json({ success: true, result });
});

// ==========================================
// PACKAGES API
// ==========================================

app.get('/api/packages', async (c) => {
  const { results } = await c.env.siddhibinayak_db.prepare('SELECT * FROM packages ORDER BY created_at DESC').all();
  return c.json(results);
});

app.post('/api/packages', authMiddleware, async (c) => {
  const body = await c.req.json();
  const { name, price, description, features, is_popular } = body;
  const result = await c.env.siddhibinayak_db.prepare('INSERT INTO packages (name, price, description, features, is_popular) VALUES (?, ?, ?, ?, ?)')
    .bind(name, price, description, features || '', is_popular ? 1 : 0).run();
  return c.json({ success: true, result }, 201);
});

app.put('/api/packages/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { name, price, description, features, is_popular } = body;
  const result = await c.env.siddhibinayak_db.prepare('UPDATE packages SET name = ?, price = ?, description = ?, features = ?, is_popular = ? WHERE id = ?')
    .bind(name, price, description, features || '', is_popular ? 1 : 0, id).run();
  return c.json({ success: true, result });
});

app.delete('/api/packages/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const result = await c.env.siddhibinayak_db.prepare('DELETE FROM packages WHERE id = ?').bind(id).run();
  return c.json({ success: true, result });
});

// ==========================================
// TESTIMONIALS API
// ==========================================

app.get('/api/testimonials', async (c) => {
  const { results } = await c.env.siddhibinayak_db.prepare('SELECT * FROM testimonials ORDER BY created_at DESC').all();
  return c.json(results);
});

app.post('/api/testimonials', authMiddleware, async (c) => {
  const body = await c.req.json();
  const { author, event_type, rating, content } = body;
  const result = await c.env.siddhibinayak_db.prepare('INSERT INTO testimonials (author, event_type, rating, content) VALUES (?, ?, ?, ?)')
    .bind(author, event_type || 'General Event', rating, content).run();
  return c.json({ success: true, result }, 201);
});

app.put('/api/testimonials/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json();
  const { author, event_type, rating, content } = body;
  const result = await c.env.siddhibinayak_db.prepare('UPDATE testimonials SET author = ?, event_type = ?, rating = ?, content = ? WHERE id = ?')
    .bind(author, event_type || 'General Event', rating, content, id).run();
  return c.json({ success: true, result });
});

app.delete('/api/testimonials/:id', authMiddleware, async (c) => {
  const id = c.req.param('id');
  const result = await c.env.siddhibinayak_db.prepare('DELETE FROM testimonials WHERE id = ?').bind(id).run();
  return c.json({ success: true, result });
});

// ==========================================
// STATS API
// ==========================================

app.get('/api/stats', authMiddleware, async (c) => {
  const bookingsCount = await c.env.siddhibinayak_db.prepare('SELECT COUNT(*) as count FROM bookings').first('count');
  const quotesCount = await c.env.siddhibinayak_db.prepare('SELECT COUNT(*) as count FROM quotes').first('count');
  const menuCount = await c.env.siddhibinayak_db.prepare('SELECT COUNT(*) as count FROM menu_items').first('count');

  return c.json({
    bookings: bookingsCount || 0,
    quotes: quotesCount || 0,
    menuItems: menuCount || 0
  });
});

// ==========================================
// CLOUDINARY UPLOAD API
// ==========================================

app.get('/api/cloudinary-signature', authMiddleware, async (c) => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const apiSecret = 'd623YtGF2YtovnW1lPfEk-w6eBc';
  const strToSign = `timestamp=${timestamp}${apiSecret}`;
  
  const buffer = new TextEncoder().encode(strToSign);
  const hashBuffer = await crypto.subtle.digest('SHA-1', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const signature = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  
  return c.json({
    timestamp,
    signature,
    cloudName: 'dfzx3tw3d',
    apiKey: '794546473334921'
  });
});

export default app;
