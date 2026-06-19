import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useReveal } from './hooks/useReveal';
import { HelmetProvider } from 'react-helmet-async';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Menu from './pages/Menu';
import Packages from './pages/Packages';
import Testimonials from './pages/Testimonials';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLogin from './pages/admin/AdminLogin';
import AdminOverview from './pages/admin/AdminOverview';
import AdminBookings from './pages/admin/AdminBookings';
import AdminQuotes from './pages/admin/AdminQuotes';
import AdminMenu from './pages/admin/AdminMenu';
import AdminPackages from './pages/admin/AdminPackages';
import AdminTestimonials from './pages/admin/AdminTestimonials';

const PublicLayout = () => {
  useReveal();

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const AppContent = () => {
  return (
    <Routes>
      {/* Admin Login Route (Unprotected) */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Admin Backend Routes (Protected) */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminOverview />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="quotes" element={<AdminQuotes />} />
          <Route path="menu" element={<AdminMenu />} />
          <Route path="packages" element={<AdminPackages />} />
          <Route path="testimonials" element={<AdminTestimonials />} />
        </Route>
      </Route>
      
      {/* Public Frontend Routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Route>
    </Routes>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
