import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('admin_token');
  
  // If there's no token, redirect to login page
  if (!token) {
    return <Navigate to="/admin/login" replace />;
  }

  // Otherwise, render the protected children (AdminLayout -> Pages)
  return <Outlet />;
};

export default ProtectedRoute;
