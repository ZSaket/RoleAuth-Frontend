import React from 'react';
import FloatingDashboardBar from '../componenets/FloatingDashboardBar';

const AdminDashboard = () => {
  const adminButtons = [
    'Dashboard Overview',
    'Manage Users',
    'System Settings',
    'Reports',
    'Notifications',
  ];

  return (
    <div className='bg-gray-800 w-full h-screen'>
      <FloatingDashboardBar buttons={adminButtons} />
    </div>
  );
};

export default AdminDashboard;
