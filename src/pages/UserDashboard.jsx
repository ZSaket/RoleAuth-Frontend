import React from 'react';
import FloatingDashboardBar from '../componenets/FloatingDashboardBar';

const UserDashboard = () => {
  const userButtons = ['Profile', 'View Orders', 'Notifications'];

  return (
    <div className='bg-gray-800 w-full h-screen' >
      <FloatingDashboardBar buttons={userButtons} />
    </div>
  );
};

export default UserDashboard;
