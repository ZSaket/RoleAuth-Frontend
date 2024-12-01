import React from 'react';
import FloatingDashboardBar from '../componenets/FloatingDashboardBar';

const ModeratorDashboard = () => {
  const moderatorButtons = ['Manage Teams', 'View Reports', 'Notifications'];

  return (
    <div className='bg-gray-800 w-full h-screen' >
      <FloatingDashboardBar buttons={moderatorButtons} />
    </div>
  );
};

export default ModeratorDashboard;
