import React from 'react';

const Dashboard = ({ userData }) => {
  return (
    <div className="mt-8">
      <h1 className="text-3xl font-semibold mb-4">Welcome to the Dashboard</h1>
      <p>User Data: {JSON.stringify(userData)}</p>
    </div>
  );
};

export default Dashboard;
