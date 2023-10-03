import React from 'react';
import AdminSidebar from './AdminSidebar';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
        
      <AdminSidebar />
      <div className="admin-content">
        {children} {/* This will be replaced by the content based on the route */}
      </div>
    </div>
  );
};

export default AdminLayout;
